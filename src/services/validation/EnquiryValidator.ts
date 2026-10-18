import { ContactFormData, FormValidationErrors, FormValidationResult } from "../../types/index";

export class EnquiryValidator {
  private static readonly EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  /**
   * Validates a contact form submission.
   * Pure function adherence ensures testability and zero side-effects.
   */
  public static validate(data: ContactFormData): FormValidationResult {
    const errors: FormValidationErrors = {};

    // 1. Full Name Validation
    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name (minimum 2 characters).";
    } else if (data.fullName.trim().length > 100) {
      errors.fullName = "Name cannot exceed 100 characters.";
    }

    // 2. Work Email Validation
    if (!data.workEmail || data.workEmail.trim().length === 0) {
      errors.workEmail = "Please provide your business or work email.";
    } else if (!this.EMAIL_REGEX.test(data.workEmail.trim())) {
      errors.workEmail = "Please enter a valid work email address (e.g., name@company.com).";
    }

    // 3. Company Name Validation
    if (!data.companyName || data.companyName.trim().length < 2) {
      errors.companyName = "Please specify your company or organization name.";
    }

    // 4. Service Interest Validation
    if (!data.serviceInterest || data.serviceInterest.trim().length === 0) {
      errors.serviceInterest = "Please select a service or area of interest.";
    }

    // 5. Project Details Validation
    if (!data.projectDetails || data.projectDetails.trim().length < 15) {
      errors.projectDetails =
        "Please provide brief project details or objectives (minimum 15 characters).";
    } else if (data.projectDetails.trim().length > 3000) {
      errors.projectDetails = "Message details cannot exceed 3,000 characters.";
    }

    // 6. Consent Confirmation
    if (!data.consent) {
      errors.consent = "You must acknowledge and consent to our communication terms.";
    }

    // 7. Honeypot check (Spam Protection)
    if (data.honeypot && data.honeypot.trim().length > 0) {
      errors.projectDetails = "Spam detection triggered. Form submission declined.";
      return {
        isValid: false,
        errors,
      };
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
}
