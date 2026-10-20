import { describe, expect, it } from "vitest";

function luminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1: string, hex2: string): number {
  const parse = (h: string): [number, number, number] => {
    h = h.replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ];
  };
  const [r1, g1, b1] = parse(hex1);
  const [r2, g2, b2] = parse(hex2);
  const l1 = luminance(r1, g1, b1);
  const l2 = luminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

describe("WCAG 2.1 Contrast Ratio Verification (Light & Dark Themes)", () => {
  describe("Dark Theme Combinations", () => {
    it("Headings (#FFFFFF) on Midnight Slate Card (#1A243B) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#FFFFFF", "#1A243B");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Body copy (#CBD5E1) on Card (#1A243B) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#CBD5E1", "#1A243B");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Cyan accent (#38BDF8) on Card (#1A243B) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#38BDF8", "#1A243B");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Subtle meta (#94A3B8) on Card (#1A243B) must pass AA (>= 4.5:1)", () => {
      const ratio = contrastRatio("#94A3B8", "#1A243B");
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("Indigo accent (#818CF8) on Card (#1A243B) must pass AA (>= 4.5:1)", () => {
      const ratio = contrastRatio("#818CF8", "#1A243B");
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("White on Midnight Base (#0D131F) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#FFFFFF", "#0D131F");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Muted copy (#CBD5E1) on Midnight Base (#0D131F) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#CBD5E1", "#0D131F");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("WhatsApp button text (#FFFFFF on #047857) must pass AA (>= 4.5:1)", () => {
      const ratio = contrastRatio("#FFFFFF", "#047857");
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });
  });

  describe("Light Theme Combinations", () => {
    it("Headings (#0F172A) on White Card (#FFFFFF) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#0F172A", "#FFFFFF");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Muted text (#334155) on White Card (#FFFFFF) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#334155", "#FFFFFF");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Subtle text (#475569) on White Card (#FFFFFF) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#475569", "#FFFFFF");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Cyan text (#0369A1) on White Card (#FFFFFF) must pass AA (>= 4.5:1)", () => {
      const ratio = contrastRatio("#0369A1", "#FFFFFF");
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("Indigo text (#4338CA) on White Card (#FFFFFF) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#4338CA", "#FFFFFF");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });

    it("Headings (#0F172A) on Surface (#F8FAFC) must pass AAA (>= 7:1)", () => {
      const ratio = contrastRatio("#0F172A", "#F8FAFC");
      expect(ratio).toBeGreaterThanOrEqual(7.0);
    });
  });
});
