import { describe, expect, it, beforeEach } from "vitest";
import { __resetLaunchOfferCache, bundleHeading, bundleTotalPaise, formatPaise, getLaunchOffer, launchOfferEndpoint, launchOfferExamsForPath, parseLaunchOffer } from "@/lib/launch-offer";

const claim = "https://jeerankup.com/redeem?coupon=LAUNCH1&utm_source=ranksarthi&utm_medium=launch_offer&utm_campaign=launch";
const active = (over: Record<string, unknown> = {}) => ({ data: { active: true, headline: "H", max_students: 100, places_left: 63, until: "2026-11-30", bundle: { heading: null, subheading: null, price_paise: 250000, total_value_paise: null, items: [{ count: 10, text: "full tests", value_paise: 100000 }] }, claim_url: claim, ...over }, meta: {} });

describe("launch offer API", () => {
  beforeEach(() => __resetLaunchOfferCache());
  it("sends the agreed Rank Sarthi UTM values", () => {
    expect(launchOfferEndpoint("jee")).toBe("https://api.jeerankup.com/api/v1/public/launch-offer?utm_source=ranksarthi&utm_medium=launch_offer&utm_campaign=launch");
  });
  it("hides inactive offers", () => expect(parseLaunchOffer("jee", { data: { active: false } })).toBeNull());
  it("keeps claim_url exactly as returned", () => expect(parseLaunchOffer("jee", active())!.claimUrl).toBe(claim));
  it("rejects a claim link on another site", () => {
    expect(parseLaunchOffer("neet", active())).toBeNull();
    expect(parseLaunchOffer("jee", active({ claim_url: "http://jeerankup.com/redeem" }))).toBeNull();
  });
  it("converts paise with Indian grouping", () => {
    expect(formatPaise(250000)).toBe("₹2,500");
    expect(formatPaise(10000000)).toBe("₹1,00,000");
  });
  it("falls back to price for heading and total when admin values are null", () => {
    const o = parseLaunchOffer("jee", active())!;
    expect(bundleHeading(o)).toBe("Claim your free bundle worth ₹2,500");
    expect(bundleTotalPaise(o)).toBe(250000);
  });
  it("keeps null places as null", () => expect(parseLaunchOffer("jee", active({ max_students: null, places_left: null }))!.placesLeft).toBeNull());
  it("shows JEE only on JEE pages, NEET only on NEET pages, nothing on NDA", () => {
    expect(launchOfferExamsForPath("/jee/physics")).toEqual(["jee"]);
    expect(launchOfferExamsForPath("/neet")).toEqual(["neet"]);
    expect(launchOfferExamsForPath("/nda/syllabus")).toEqual([]);
    expect(launchOfferExamsForPath("/")).toEqual(["jee", "neet"]);
  });
  it("hides the offer on 429 and calls the API at most once a minute", async () => {
    let calls = 0;
    const f = (async () => { calls++; return new Response("", { status: 429 }); }) as typeof fetch;
    expect(await getLaunchOffer("jee", f)).toBeNull();
    expect(await getLaunchOffer("jee", f)).toBeNull();
    expect(calls).toBe(1);
  });
});
