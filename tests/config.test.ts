import { describe, expect, it } from "vitest";
import { siteConfig } from "../src/config/audyora.config";

describe("Audyora Site Configuration", () => {
  it("has exact branding specifications", () => {
    expect(siteConfig.companyName).toBe("Audyora");
    expect(siteConfig.productionDomain).toBe("https://www.audyora.com/");
    expect(siteConfig.canonicalUrl).toBe("https://www.audyora.com/");
    expect(siteConfig.tagline).toBe("Engineer Pipeline. Accelerate Revenue.");
  });

  it("defines all 8 required comprehensive service categories", () => {
    expect(siteConfig.services.length).toBe(8);

    const expectedServices = [
      "B2B Lead Generation",
      "Account-Based Marketing (ABM)",
      "Demand Generation",
      "BANT Qualified Leads",
      "Content Syndication",
      "Cold Email & Deliverability Infrastructure",
      "Data Intelligence & ICP Cleansing",
      "Pipeline Architecture & RevOps",
    ];

    expectedServices.forEach((expectedTitle) => {
      const match = siteConfig.services.find((s) => s.title === expectedTitle);
      expect(match, `Missing service: ${expectedTitle}`).toBeDefined();
      expect(match?.businessProblem.length).toBeGreaterThan(20);
      expect(match?.clientValue.length).toBeGreaterThan(20);
      expect(match?.keyDeliverables.length).toBeGreaterThan(2);
    });
  });

  it("maintains transparent conceptual showcase items without false claims", () => {
    expect(siteConfig.caseStudies.length).toBeGreaterThanOrEqual(4);
    siteConfig.caseStudies.forEach((cs) => {
      expect(cs.isConceptual).toBe(true);
      expect(cs.challenge).toBeDefined();
      expect(cs.conceptApproach).toBeDefined();
    });
  });

  it("contains clear placeholders for coordinates", () => {
    expect(siteConfig.coordinates.emailPlaceholder).toBeDefined();
    expect(siteConfig.coordinates.phonePlaceholder).toBeDefined();
    expect(siteConfig.coordinates.addressPlaceholder).toBeDefined();
  });
});
