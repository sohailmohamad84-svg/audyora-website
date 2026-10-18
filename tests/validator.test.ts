import { describe, expect, it } from "vitest";
import { EnquiryValidator } from "../src/services/validation/EnquiryValidator";
import { ContactFormData } from "../src/types/index";

describe("EnquiryValidator", () => {
  const validData: ContactFormData = {
    fullName: "Elena Rostova",
    workEmail: "elena@vortexfintech.com",
    companyName: "Vortex Technologies",
    serviceInterest: "Brand Strategy & Identity",
    projectDetails: "We are seeking a comprehensive rebrand for our European fintech platform launch.",
    consent: true,
  };

  it("passes validation with complete and accurate fields", () => {
    const result = EnquiryValidator.validate(validData);
    expect(result.isValid).toBe(true);
    expect(Object.keys(result.errors).length).toBe(0);
  });

  it("rejects names with less than 2 characters", () => {
    const result = EnquiryValidator.validate({ ...validData, fullName: "A" });
    expect(result.isValid).toBe(false);
    expect(result.errors.fullName).toBeDefined();
  });

  it("rejects malformed email addresses", () => {
    const result = EnquiryValidator.validate({ ...validData, workEmail: "not-an-email" });
    expect(result.isValid).toBe(false);
    expect(result.errors.workEmail).toContain("valid work email");
  });

  it("rejects missing company name", () => {
    const result = EnquiryValidator.validate({ ...validData, companyName: "" });
    expect(result.isValid).toBe(false);
    expect(result.errors.companyName).toBeDefined();
  });

  it("rejects missing service interest", () => {
    const result = EnquiryValidator.validate({ ...validData, serviceInterest: "" });
    expect(result.isValid).toBe(false);
    expect(result.errors.serviceInterest).toBeDefined();
  });

  it("rejects message details shorter than 15 characters", () => {
    const result = EnquiryValidator.validate({ ...validData, projectDetails: "Too short" });
    expect(result.isValid).toBe(false);
    expect(result.errors.projectDetails).toContain("minimum 15 characters");
  });

  it("rejects submission without consent", () => {
    const result = EnquiryValidator.validate({ ...validData, consent: false });
    expect(result.isValid).toBe(false);
    expect(result.errors.consent).toBeDefined();
  });

  it("flags bot submissions when honeypot field is populated", () => {
    const result = EnquiryValidator.validate({
      ...validData,
      honeypot: "automated-bot-entry",
    });
    expect(result.isValid).toBe(false);
    expect(result.errors.projectDetails).toContain("Spam detection");
  });
});
