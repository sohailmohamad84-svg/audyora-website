import { siteConfig } from "../config/audyora.config";
import { HonestEnquiryService } from "../services/enquiry/HonestEnquiryService";
import { IEnquiryService } from "../services/enquiry/IEnquiryService";
import { EnquiryValidator } from "../services/validation/EnquiryValidator";
import { ContactFormData } from "../types/index";

export class ContactForm {
  private static enquiryService: IEnquiryService = new HonestEnquiryService();

  public static render(): string {
    const serviceOptions = siteConfig.services
      .map((s) => `<option value="${s.title}" class="bg-audyora-surface text-slate-900 dark:text-white">${s.title}</option>`)
      .join("");

    return `
      <div class="relative bg-audyora-card/90 rounded-3xl p-8 sm:p-12 border border-audyora-border shadow-2xl backdrop-blur-xl">
        <div class="mb-8">
          <span class="inline-block px-3.5 py-1.5 rounded-full text-xs font-satoshi font-semibold tracking-wider uppercase text-audyora-cyan bg-audyora-cyan/10 border border-audyora-cyan/20 mb-3">
            Commercial Inquiries & Project Briefs
          </span>
          <h3 class="font-satoshi text-3xl font-extrabold text-slate-900 dark:text-white">
            Initiate a Strategic Dialogue
          </h3>
          <p class="font-inter text-sm text-audyora-muted mt-2">
            Share your brand objectives, campaign challenges, or media requirements with our senior directors.
          </p>
        </div>

        <form id="audyora-contact-form" class="space-y-6" novalidate>
          <!-- Honeypot field (Hidden from human users, traps spam bots) -->
          <div class="hidden" aria-hidden="true">
            <label for="contact-hp">Leave this empty</label>
            <input type="text" id="contact-hp" name="website_fax_token" tabindex="-1" autocomplete="off" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Full Name -->
            <div>
              <label for="form-fullName" class="block font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted mb-2">
                Full Name <span class="text-audyora-indigo">*</span>
              </label>
              <input type="text" 
                     id="form-fullName" 
                     name="fullName"
                     placeholder="e.g., Alexandra Chen"
                     required
                     class="w-full px-4 py-3.5 rounded-xl bg-audyora-surface border border-audyora-border text-slate-900 dark:text-white placeholder-audyora-subtle/50 text-sm focus:outline-none focus:border-audyora-cyan focus:ring-1 focus:ring-audyora-cyan transition-all" />
              <p id="err-fullName" class="text-xs text-rose-400 mt-1.5 hidden font-inter" role="alert"></p>
            </div>

            <!-- Work Email -->
            <div>
              <label for="form-workEmail" class="block font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted mb-2">
                Work Email <span class="text-audyora-indigo">*</span>
              </label>
              <input type="email" 
                     id="form-workEmail" 
                     name="workEmail"
                     placeholder="alexandra@company.com"
                     required
                     class="w-full px-4 py-3.5 rounded-xl bg-audyora-surface border border-audyora-border text-slate-900 dark:text-white placeholder-audyora-subtle/50 text-sm focus:outline-none focus:border-audyora-cyan focus:ring-1 focus:ring-audyora-cyan transition-all" />
              <p id="err-workEmail" class="text-xs text-rose-400 mt-1.5 hidden font-inter" role="alert"></p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Company Name -->
            <div>
              <label for="form-companyName" class="block font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted mb-2">
                Company / Organization <span class="text-audyora-indigo">*</span>
              </label>
              <input type="text" 
                     id="form-companyName" 
                     name="companyName"
                     placeholder="e.g., Meridian Technologies"
                     required
                     class="w-full px-4 py-3.5 rounded-xl bg-audyora-surface border border-audyora-border text-slate-900 dark:text-white placeholder-audyora-subtle/50 text-sm focus:outline-none focus:border-audyora-cyan focus:ring-1 focus:ring-audyora-cyan transition-all" />
              <p id="err-companyName" class="text-xs text-rose-400 mt-1.5 hidden font-inter" role="alert"></p>
            </div>

            <!-- Service Interest -->
            <div>
              <label for="form-serviceInterest" class="block font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted mb-2">
                Primary Area of Interest <span class="text-audyora-indigo">*</span>
              </label>
              <select id="form-serviceInterest" 
                      name="serviceInterest"
                      required
                      class="w-full px-4 py-3.5 rounded-xl bg-audyora-surface border border-audyora-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-audyora-cyan focus:ring-1 focus:ring-audyora-cyan transition-all">
                <option value="" class="bg-audyora-surface text-audyora-muted">Select a discipline...</option>
                ${serviceOptions}
                <option value="Enterprise Marketing Transformation" class="bg-audyora-surface text-slate-900 dark:text-white">Full-Funnel Commercial Retainer</option>
                <option value="General Strategic Inquiry" class="bg-audyora-surface text-slate-900 dark:text-white">General Strategic Inquiry</option>
              </select>
              <p id="err-serviceInterest" class="text-xs text-rose-400 mt-1.5 hidden font-inter" role="alert"></p>
            </div>
          </div>

          <!-- Project Details -->
          <div>
            <label for="form-projectDetails" class="block font-inter text-xs font-medium uppercase tracking-wider text-audyora-muted mb-2">
              Project Context & Scope <span class="text-audyora-indigo">*</span>
            </label>
            <textarea id="form-projectDetails" 
                      name="projectDetails"
                      rows="4"
                      placeholder="Outline your primary challenges, timeline, target audiences, or commercial goals..."
                      required
                      class="w-full px-4 py-3.5 rounded-xl bg-audyora-surface border border-audyora-border text-slate-900 dark:text-white placeholder-audyora-subtle/50 text-sm focus:outline-none focus:border-audyora-cyan focus:ring-1 focus:ring-audyora-cyan transition-all resize-y"></textarea>
            <p id="err-projectDetails" class="text-xs text-rose-400 mt-1.5 hidden font-inter" role="alert"></p>
          </div>

          <!-- Consent Checkbox -->
          <div class="flex items-start gap-3 pt-1">
            <input type="checkbox" 
                   id="form-consent" 
                   name="consent" 
                   required
                   class="mt-1 w-4 h-4 rounded bg-audyora-surface border-audyora-border text-audyora-indigo focus:ring-audyora-cyan focus:ring-offset-0 focus:ring-1 cursor-pointer" />
            <label for="form-consent" class="font-inter text-xs text-audyora-muted cursor-pointer leading-relaxed">
              I consent to Audyora storing my inquiry details and contacting me regarding this commercial project. We value confidentiality and never share data with third parties.
            </label>
          </div>
          <p id="err-consent" class="text-xs text-rose-400 -mt-2 hidden font-inter" role="alert"></p>

          <!-- Submit Button -->
          <div class="pt-4">
            <button id="form-submit-btn" 
                    type="submit" 
                    class="btn-magnetic w-full py-4 rounded-full font-satoshi font-bold text-base text-white bg-gradient-to-r from-audyora-indigo via-audyora-violet to-audyora-cyan hover:shadow-glow-indigo transition-all duration-300 flex items-center justify-center gap-2 group">
              <span id="btn-text">Submit Strategic Brief</span>
              <svg id="btn-spinner" class="w-5 h-5 animate-spin hidden text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </form>

        <!-- Status Modal / Result Dialog -->
        <div id="form-result-modal" 
             class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md hidden"
             role="dialog"
             aria-modal="true"
             aria-labelledby="modal-title">
          <div class="bg-audyora-card border border-audyora-border rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
            <div id="modal-icon-container" class="w-12 h-12 rounded-full mb-6 flex items-center justify-center"></div>
            
            <h4 id="modal-title" class="font-satoshi text-2xl font-bold text-slate-900 dark:text-white mb-3"></h4>
            <p id="modal-message" class="font-inter text-sm text-slate-700 dark:text-audyora-muted leading-relaxed mb-4"></p>
            
            <div id="modal-details-box" class="p-4 rounded-xl bg-audyora-surface border border-audyora-border/80 font-inter text-xs text-slate-700 dark:text-audyora-subtle leading-relaxed mb-6 hidden"></div>

            <div class="flex justify-end">
              <button id="modal-close-btn" 
                      type="button" 
                      class="btn-magnetic px-6 py-2.5 rounded-full font-satoshi text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-glow-indigo transition-all cursor-pointer">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  public static init(): void {
    const form = document.getElementById("audyora-contact-form") as HTMLFormElement | null;
    const submitBtn = document.getElementById("form-submit-btn") as HTMLButtonElement | null;
    const btnText = document.getElementById("btn-text");
    const btnSpinner = document.getElementById("btn-spinner");

    const modal = document.getElementById("form-result-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    const modalDetails = document.getElementById("modal-details-box");
    const modalIcon = document.getElementById("modal-icon-container");
    const modalClose = document.getElementById("modal-close-btn");

    if (!form || !submitBtn) return;

    // Helper to toggle error messages
    const setFieldError = (fieldId: string, error?: string) => {
      const errElem = document.getElementById(`err-${fieldId}`);
      const inputElem = document.getElementById(`form-${fieldId}`);
      if (errElem) {
        if (error) {
          errElem.textContent = error;
          errElem.classList.remove("hidden");
          inputElem?.classList.add("border-rose-500");
        } else {
          errElem.textContent = "";
          errElem.classList.add("hidden");
          inputElem?.classList.remove("border-rose-500");
        }
      }
    };

    const clearAllErrors = () => {
      ["fullName", "workEmail", "companyName", "serviceInterest", "projectDetails", "consent"].forEach((id) =>
        setFieldError(id)
      );
    };

    modalClose?.addEventListener("click", () => {
      modal?.classList.add("hidden");
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearAllErrors();

      const formData: ContactFormData = {
        fullName: (form.querySelector("#form-fullName") as HTMLInputElement)?.value || "",
        workEmail: (form.querySelector("#form-workEmail") as HTMLInputElement)?.value || "",
        companyName: (form.querySelector("#form-companyName") as HTMLInputElement)?.value || "",
        serviceInterest: (form.querySelector("#form-serviceInterest") as HTMLSelectElement)?.value || "",
        projectDetails: (form.querySelector("#form-projectDetails") as HTMLTextAreaElement)?.value || "",
        consent: (form.querySelector("#form-consent") as HTMLInputElement)?.checked || false,
        honeypot: (form.querySelector("#contact-hp") as HTMLInputElement)?.value || "",
      };

      // 1. Run local validation
      const validation = EnquiryValidator.validate(formData);
      if (!validation.isValid) {
        Object.entries(validation.errors).forEach(([field, msg]) => {
          setFieldError(field, msg);
        });
        return;
      }

      // 2. Button Loading State
      submitBtn.disabled = true;
      btnText?.classList.add("opacity-50");
      btnSpinner?.classList.remove("hidden");

      try {
        const result = await ContactForm.enquiryService.submitEnquiry(formData);

        if (modal && modalTitle && modalMessage && modalIcon) {
          modalTitle.textContent = result.statusTitle;
          modalMessage.textContent = result.message;

          if (result.details && modalDetails) {
            modalDetails.textContent = result.details;
            modalDetails.classList.remove("hidden");
          } else if (modalDetails) {
            modalDetails.classList.add("hidden");
          }

          if (result.success) {
            modalIcon.className =
              "w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400";
            modalIcon.innerHTML = `
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            `;
            form.reset();
          } else {
            modalIcon.className =
              "w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-rose-500/10 border border-rose-500/30 text-rose-400";
            modalIcon.innerHTML = `
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            `;
          }

          modal.classList.remove("hidden");
        }
      } finally {
        submitBtn.disabled = false;
        btnText?.classList.remove("opacity-50");
        btnSpinner?.classList.add("hidden");
      }
    });
  }
}
