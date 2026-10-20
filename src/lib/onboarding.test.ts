import { describe, expect, it } from "vitest";
import { examForPath, isOnboardingOpen, NDA_RESOURCES_PATH, PRIMARY_CTA_LABEL } from "./acquisition";
import { destinations } from "@/content/destinations";
import { COUPON_PLATFORMS } from "@/content/offers/coupons";

describe("student onboarding CTA rules", () => {
  it("uses the approved primary CTA wording", () => {
    expect(PRIMARY_CTA_LABEL).toBe("Rank Up My Score with Sarthi");
  });

  it("opens onboarding for JEE and NEET only", () => {
    expect(isOnboardingOpen("jee")).toBe(true);
    expect(isOnboardingOpen("neet")).toBe(true);
    expect(isOnboardingOpen("nda")).toBe(false);
  });

  it("JEE and NEET exam CTAs go straight to their signup page", () => {
    const jee = destinations.diagnostic(PRIMARY_CTA_LABEL, "jee");
    const neet = destinations.diagnostic(PRIMARY_CTA_LABEL, "neet");
    expect(jee.kind === "external" && new URL(jee.href).origin + new URL(jee.href).pathname).toBe("https://jeerankup.com/signup");
    expect(neet.kind === "external" && new URL(neet.href).origin + new URL(neet.href).pathname).toBe("https://neetrankup.com/signup");
  });

  it("NDA CTAs point at NDA resources, never ndarankup.com", () => {
    const nda = destinations.diagnostic(PRIMARY_CTA_LABEL, "nda");
    expect(nda.kind).toBe("live");
    expect(nda.kind === "live" && nda.href).toBe(NDA_RESOURCES_PATH);
  });

  it("detects the exam from the page path", () => {
    expect(examForPath("/jee/physics/kinematics")).toBe("jee");
    expect(examForPath("/neet")).toBe("neet");
    expect(examForPath("/nda/syllabus")).toBe("nda");
    expect(examForPath("/blog/some-post")).toBeNull();
  });

  it("lists coupons for JEE and NEET only", () => {
    expect([...COUPON_PLATFORMS]).toEqual(["jee", "neet"]);
  });
});
