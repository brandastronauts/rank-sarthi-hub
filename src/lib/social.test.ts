import { expect, it } from "vitest";
import { socialAccounts } from "@/content/social";

it("preserves exactly the five supplied official account destinations", () => {
  expect(socialAccounts.map((account) => account.url)).toEqual([
    "https://www.facebook.com/ranksarthi/",
    "https://www.instagram.com/rank.sarthi/",
    "https://www.linkedin.com/company/ranksarthi/",
    "https://x.com/RankSarthi",
    "https://www.youtube.com/@ranksarthi-platform",
  ]);
});