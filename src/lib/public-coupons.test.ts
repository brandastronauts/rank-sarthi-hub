import { describe, expect, it } from "vitest";
import {
  DEFAULT_COUPON_FILTERS,
  couponConditions,
  currentCoupons,
  filterCoupons,
  formatIst,
  formatPaise,
  normaliseCoupon,
  type PublicCoupon,
} from "@/content/offers/coupons";

const sample = {
  platform: "jee",
  platform_name: "JEE Rank Up",
  code: "diwali25",
  status: "active",
  headline: "25% off, up to ₹500",
  discount_type: "percent",
  percent_off: 25,
  amount_off_paise: null,
  max_discount_paise: 50000,
  min_order_paise: 10000,
  currency: "INR",
  applies_to: "subscription",
  plans: null,
  starts_at: "2026-10-20T00:00:00+00:00",
  ends_at: "2026-11-05T18:29:59+00:00",
  limited: true,
  redeem_url:
    "https://jeerankup.com/redeem?coupon=DIWALI25&utm_source=ranksarthi&utm_medium=coupon&utm_campaign=DIWALI25",
};

function coupon(overrides: Record<string, unknown> = {}): PublicCoupon {
  const c = normaliseCoupon({ ...sample, ...overrides }, (overrides["platform"] as "jee") ?? "jee");
  if (!c) throw new Error("sample coupon rejected");
  return c;
}

describe("public coupon validation", () => {
  it("normalises a documented API item", () => {
    const c = coupon();
    expect(c.code).toBe("DIWALI25");
    expect(c.minOrderPaise).toBe(10000);
    expect(c.redeemPath).toBe("/redeem");
    expect(new URLSearchParams(c.redeemQuery).get("utm_campaign")).toBe("DIWALI25");
  });

  it("marks the offers page in utm_content, the field RankUp records", () => {
    expect(new URLSearchParams(coupon().redeemQuery).get("utm_content")).toBe("offers-page");
    const own = coupon({
      redeem_url: "https://jeerankup.com/redeem?coupon=DIWALI25&utm_content=platform-set",
    });
    expect(new URLSearchParams(own.redeemQuery).get("utm_content")).toBe("platform-set");
  });

  it("rejects another platform's item, unusable codes and ended statuses", () => {
    expect(normaliseCoupon(sample, "neet")).toBeNull();
    expect(normaliseCoupon({ ...sample, code: "bad code!" }, "jee")).toBeNull();
    expect(normaliseCoupon({ ...sample, status: "expired" }, "jee")).toBeNull();
    expect(normaliseCoupon({ ...sample, status: "used_up" }, "jee")).toBeNull();
  });

  it("never follows a redeem link off the platform's own origin", () => {
    const c = coupon({ redeem_url: "https://evil.example/redeem?coupon=DIWALI25" });
    expect(c.redeemPath).toBe("/redeem");
    expect(Object.fromEntries(new URLSearchParams(c.redeemQuery))).toEqual({
      coupon: "DIWALI25",
      utm_source: "ranksarthi",
      utm_medium: "coupon",
      utm_campaign: "DIWALI25",
      utm_content: "offers-page",
    });
  });

  it("drops ended codes and promotes started ones at read time", () => {
    const now = Date.parse("2026-10-25T00:00:00Z");
    const ended = coupon({ code: "OLD", ends_at: "2026-10-24T00:00:00Z" });
    const started = coupon({ code: "NEW", status: "upcoming", starts_at: "2026-10-24T00:00:00Z" });
    expect(currentCoupons([ended, started], now)).toEqual([{ ...started, status: "active" }]);
  });
});

describe("public coupon display", () => {
  it("formats paise and IST dates the same everywhere", () => {
    expect(formatPaise(50000)).toBe("₹500");
    expect(formatPaise(1250)).toBe("₹12.50");
    expect(formatIst("2026-11-05T18:29:59+00:00")).toBe("5 Nov 2026, 11:59 pm IST");
    expect(formatIst("2026-10-13T10:26:00+00:00")).toBe("13 Oct 2026, 3:56 pm IST");
  });

  it("lists the conditions a student needs before checkout", () => {
    expect(couponConditions(coupon())).toEqual([
      "Valid on every JeeRankUp plan",
      "Minimum order ₹100",
      "Ends 5 Nov 2026, 11:59 pm IST",
      "Limited number of uses, so it can run out",
    ]);
  });

  it("filters by platform, type and code, soonest end first with open-ended codes last", () => {
    const items = [
      coupon({ code: "OPEN", ends_at: null }),
      coupon({ code: "LATE", ends_at: "2026-12-01T00:00:00Z" }),
      coupon({ code: "SOON", ends_at: "2026-10-15T00:00:00Z", applies_to: "topup" }),
      { ...coupon({ code: "NEETONE" }), platform: "neet" as const },
    ];
    const codes = (f: Partial<typeof DEFAULT_COUPON_FILTERS>) =>
      filterCoupons(items, { ...DEFAULT_COUPON_FILTERS, ...f }).map((c) => c.code);

    expect(codes({})).toEqual(["SOON", "NEETONE", "LATE", "OPEN"]);
    expect(codes({ platform: "jee" })).toEqual(["SOON", "LATE", "OPEN"]);
    expect(codes({ appliesTo: "topup" })).toEqual(["SOON"]);
    expect(codes({ search: " ope " })).toEqual(["OPEN"]);
  });
});
