import { describe, expect, it } from "vitest";
import { HonestEnquiryService } from "../src/services/enquiry/HonestEnquiryService";
import { ContactFormData } from "../src/types/index";

describe("HonestEnquiryService", () => {
  const validData: ContactFormData = {
    fullName: "Marcus Vance",
    workEmail: "marcus@vanceindustries.com",
    companyName: "Vance Industries",
    serviceInterest: "Advertising & Creative Campaigns",
    projectDetails: "Planning a global digital marketing launch for Q2 next year.",
    consent: true,
  };

  it("reports unconfigured mode honestly when no API URL is provided", async () => {
    const service = new HonestEnquiryService("");
    expect(service.isConfigured()).toBe(false);

    const result = await service.submitEnquiry(validData);
    expect(result.success).toBe(true);
    expect(result.isConfigured).toBe(false);
    expect(result.statusTitle).toContain("Pending Infrastructure Connection");
    expect(result.message).toContain("validation rules");
    expect(result.details).toContain("VITE_CONTACT_API_URL");
  });

  it("detects configured status when a valid endpoint is passed", () => {
    const service = new HonestEnquiryService("https://api.audyora.com/v1/enquiries");
    expect(service.isConfigured()).toBe(true);
  });

  it("fails early if submitted data fails validation", async () => {
    const service = new HonestEnquiryService("");
    const result = await service.submitEnquiry({ ...validData, fullName: "" });
    expect(result.success).toBe(false);
    expect(result.statusTitle).toBe("Validation Error");
  });
});
