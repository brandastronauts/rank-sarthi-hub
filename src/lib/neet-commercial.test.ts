import { describe, expect, it } from "vitest";
import {
  formatInr,
  neetComparisonRows,
  neetPricing,
  neetStarterAdditionalPapers,
  neetStarterTopUpTotal,
} from "@/content/offers/neet-test-series";
import { campaignFor, commonAnnouncement, commonOfferPopup } from "@/content/offers/campaign";

describe("NEET inaugural commercial rules", () => {
  it("uses the approved package prices", () => {
    expect(neetPricing.starter).toBe(499);
    expect(neetPricing.testSeries).toBe(1599);
    expect(neetPricing.complete).toBe(3000);
  });

  it("uses ₹50 for every eligible add-on test", () => {
    expect(neetPricing.addOnTest).toBe(50);
    expect(neetComparisonRows.filter((row) => row.join(" ").includes("₹50"))).toHaveLength(2);
  });

  it("derives the corrected Starter top-up comparison", () => {
    expect(neetStarterAdditionalPapers).toBe(27);
    expect(neetStarterTopUpTotal).toBe(1849);
    expect(formatInr(neetStarterTopUpTotal)).toBe("₹1,849");
  });

  it("shows one common JEE + NEET campaign on general and exam pages", () => {
    for (const url of ["/", "/jee", "/neet", "/jee/syllabus", "/about"]) {
      expect(campaignFor(url)).toEqual({ announcement: commonAnnouncement, popup: commonOfferPopup });
    }
    expect(commonOfferPopup.choices.map((c) => c.href)).toEqual(["/jee/mock-tests", "/neet/mock-tests"]);
  });

  it("suppresses promotions on commercial destinations and NDA pages", () => {
    for (const url of ["/jee/mock-tests", "/jee/pricing", "/neet/mock-tests", "/neet/pricing", "/nda", "/nda/syllabus"]) {
      expect(campaignFor(url)).toEqual({});
    }
  });
});
