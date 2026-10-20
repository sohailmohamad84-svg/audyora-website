import { ContactFormData, EnquirySubmissionResult } from "../../types/index";
import { EnquiryValidator } from "../validation/EnquiryValidator";
import { IEnquiryService } from "./IEnquiryService";

export class HonestEnquiryService implements IEnquiryService {
  private readonly apiUrl: string;

  constructor(apiUrl?: string) {
    // Read from environment variable or passed parameter
    this.apiUrl = (apiUrl || (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_API_URL) || "").trim();
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

    // 3. If configured with a live backend endpoint, perform real HTTP POST
    if (this.isConfigured()) {
      try {
        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            fullName: data.fullName.trim(),
            workEmail: data.workEmail.trim(),
            companyName: data.companyName.trim(),
            serviceInterest: data.serviceInterest,
            projectDetails: data.projectDetails.trim(),
            submittedAt: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          return {
            success: true,
            isConfigured: true,
            statusTitle: "Enquiry Transmitted",
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

    // Save submission locally so data is never lost
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
