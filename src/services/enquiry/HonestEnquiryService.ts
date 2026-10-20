import { ContactFormData, EnquirySubmissionResult } from "../../types/index";
import { EnquiryValidator } from "../validation/EnquiryValidator";
import { IEnquiryService } from "./IEnquiryService";

export class HonestEnquiryService implements IEnquiryService {
  public static readonly DEFAULT_ENDPOINT = "https://formsubmit.co/ajax/Sohail.mohamad84@gmail.com";
  private readonly apiUrl: string;

  constructor(apiUrl?: string) {
    if (apiUrl !== undefined) {
      this.apiUrl = apiUrl.trim();
    } else {
      const envUrl = (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_API_URL) || "";
      this.apiUrl = (envUrl || HonestEnquiryService.DEFAULT_ENDPOINT).trim();
    }
  }

  public isConfigured(): boolean {
    return this.apiUrl.length > 0 && this.apiUrl.startsWith("http");
  }

  public async submitEnquiry(data: ContactFormData): Promise<EnquirySubmissionResult> {
    // 1. Run strict validation first
    const validation = EnquiryValidator.validate(data);
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0] || "Validation failed.";
      return {
        success: false,
        isConfigured: this.isConfigured(),
        statusTitle: "Validation Error",
        message: firstError,
      };
    }

    // 2. Check honeypot spam attempt
    if (data.honeypot && data.honeypot.trim().length > 0) {
      return {
        success: false,
        isConfigured: this.isConfigured(),
        statusTitle: "Spam Detection",
        message: "Your submission was flagged by our automated bot protection.",
      };
    }

    // Always safeguard lead submission in localStorage so data is never lost
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const stored = JSON.parse(window.localStorage.getItem("audyora_enquiries") || "[]");
        stored.push({
          fullName: data.fullName.trim(),
          workEmail: data.workEmail.trim(),
          companyName: data.companyName.trim(),
          serviceInterest: data.serviceInterest,
          projectDetails: data.projectDetails.trim(),
          submittedAt: new Date().toISOString(),
        });
        window.localStorage.setItem("audyora_enquiries", JSON.stringify(stored));
      }
    } catch {
      // ignore storage failure
    }

    // 3. If configured with a live backend endpoint, perform real HTTP POST
    if (this.isConfigured()) {
      try {
        const payload: Record<string, string> = {
          fullName: data.fullName.trim(),
          workEmail: data.workEmail.trim(),
          companyName: data.companyName.trim(),
          serviceInterest: data.serviceInterest,
          projectDetails: data.projectDetails.trim(),
          submittedAt: new Date().toISOString(),
        };

        if (this.apiUrl.includes("formsubmit.co")) {
          payload["_subject"] = `New Strategic Brief: ${data.companyName.trim()} (${data.serviceInterest})`;
          payload["_template"] = "table";
          payload["_captcha"] = "false";
          payload["_replyto"] = data.workEmail.trim();
        }

        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const resData = await response.json().catch(() => null);

        if (response.ok) {
          if (resData && (resData.success === false || resData.success === "false")) {
            return {
              success: false,
              isConfigured: true,
              statusTitle: "Activation Pending",
              message: resData.message || "This form needs one-time email activation.",
              details: "An activation link was sent to the inbox. Please click 'Activate Form' in your email.",
            };
          }

          return {
            success: true,
            isConfigured: true,
            statusTitle: "Strategic Brief Transmitted",
            message:
              "Thank you for contacting Audyora. Your project brief has been securely routed to our senior strategy directors.",
            details: `A receipt and initial consultation options will be dispatched to ${data.workEmail}.`,
          };
        } else {
          return {
            success: false,
            isConfigured: true,
            statusTitle: "Gateway Response Error",
            message: `The configured submission endpoint returned HTTP status ${response.status}. Please try again shortly or contact us directly.`,
          };
        }
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Network failure";
        return {
          success: false,
          isConfigured: true,
          statusTitle: "Network Error",
          message: `Unable to transmit enquiry to the configured gateway: ${errorMessage}. Please check your connection.`,
        };
      }
    }

    // 4. Honest unconfigured state (Zero fake success, pure transparent status)
    return {
      success: true,
      isConfigured: false,
      statusTitle: "Form Validated (Pending Infrastructure Connection)",
      message:
        "Your enquiry has been successfully structured and verified against all validation rules. Because this site is operating in demonstration / pre-deployment mode without a linked production email service, no email was falsely sent.",
      details:
        "To route live enquiries directly to your company inbox (e.g. via Formspree, Resend, or your internal API), provide the VITE_CONTACT_API_URL environment variable in your Vercel or hosting platform configuration.",
    };
  }
}
