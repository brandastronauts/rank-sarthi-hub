import { describe, expect, it } from "vitest";
import {
  formatInr,
  neetComparisonRows,
  neetPricing,
  neetStarterAdditionalPapers,
  neetStarterTopUpTotal,
} from "@/content/offers/neet-test-series";

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
});
