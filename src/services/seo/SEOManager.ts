import { siteConfig } from "../../config/audyora.config";

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export class SEOManager {
  /**
   * Generates Schema.org compliant JSON-LD structured data graph.
   * Completely adheres to truthfulness guidelines (no fabricated ratings or addresses).
   */
  public static generateStructuredData(page: PageMetadata): string {
    const canonical = `${siteConfig.canonicalUrl.replace(/\/$/, "")}${page.path === "/" ? "" : page.path}`;

    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteConfig.canonicalUrl}#organization`,
          "name": siteConfig.companyName,
          "url": siteConfig.canonicalUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.canonicalUrl}assets/images/logo.svg`,
            "caption": "Audyora Corporate Logo",
          },
          "description": siteConfig.description,
          "knowsAbout": siteConfig.services.map((s) => s.title),
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": `${siteConfig.canonicalUrl}contact/`,
          },
          "sameAs": Object.values(siteConfig.socials).filter((url) => !url.includes("placeholder")),
        },
        {
          "@type": "WebSite",
          "@id": `${siteConfig.canonicalUrl}#website`,
          "url": siteConfig.canonicalUrl,
          "name": siteConfig.companyName,
          "description": siteConfig.tagline,
          "publisher": {
            "@id": `${siteConfig.canonicalUrl}#organization`,
          },
        },
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          "url": canonical,
          "name": `${page.title} | ${siteConfig.companyName}`,
          "description": page.description,
          "isPartOf": {
            "@id": `${siteConfig.canonicalUrl}#website`,
          },
        },
      ],
    };

    return JSON.stringify(schemaGraph, null, 2);
  }
}
