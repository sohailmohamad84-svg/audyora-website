import { describe, expect, it } from "vitest";
import { SEOManager } from "../src/services/seo/SEOManager";

describe("SEOManager", () => {
  it("generates Schema.org compliant structured data without fabricated reviews", () => {
    const jsonStr = SEOManager.generateStructuredData({
      title: "Services",
      description: "Audyora marketing capabilities",
      path: "/services/",
    });

    const parsed = JSON.parse(jsonStr);
    expect(parsed["@context"]).toBe("https://schema.org");
    expect(parsed["@graph"]).toBeDefined();

    const org = parsed["@graph"].find((item: any) => item["@type"] === "Organization");
    expect(org).toBeDefined();
    expect(org.name).toBe("Audyora");
    expect(org.url).toBe("https://audyora.com/");
    expect(org.review).toBeUndefined(); // Truthfulness verification
    expect(org.aggregateRating).toBeUndefined(); // Truthfulness verification

    const webPage = parsed["@graph"].find((item: any) => item["@type"] === "WebPage");
    expect(webPage).toBeDefined();
    expect(webPage.url).toBe("https://audyora.com/services/");
  });
});
