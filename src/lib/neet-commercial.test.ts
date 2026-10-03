import { describe, expect, it } from "vitest";
import {
  formatInr,
  neetComparisonRows,
  neetPricing,
  neetStarterAdditionalPapers,
  neetStarterTopUpTotal,
} from "@/content/offers/neet-test-series";
import { campaignFor, jeeAnnouncement, jeeOfferPopup } from "@/content/offers/campaign";

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

  it("keeps NEET promotions scoped away from commercial destinations", () => {
    expect(campaignFor("/neet").announcement?.href).toBe("/neet/mock-tests");
    expect(campaignFor("/neet").popup?.href).toBe("/neet/mock-tests");
    expect(campaignFor("/neet/mock-tests")).toEqual({});
    expect(campaignFor("/neet/pricing").announcement?.href).toBe("/neet/mock-tests");
    expect(campaignFor("/neet/pricing").popup).toBeUndefined();
    expect(campaignFor("/nda")).toEqual({});
  });

  it("preserves the approved JEE campaign configuration", () => {
    expect(campaignFor("/jee")).toEqual({ announcement: jeeAnnouncement, popup: jeeOfferPopup });
    expect(campaignFor("/jee/mock-tests")).toEqual({});
  });
});
