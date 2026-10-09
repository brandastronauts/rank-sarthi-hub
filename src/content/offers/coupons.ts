import { platformOrigins } from "@/content/site";

/**
 * Public RankUp coupons (contract: docs/public-coupons.md).
 *
 * Each RankUp platform publishes its own public coupons; Rank Sarthi only
 * lists them and hands the visitor over with the code. Prices, eligibility
 * and checkout stay with the platform. Everything from the API is validated
 * here before it reaches a page, and a redeem link is only followed when it
 * points at the platform's own origin.
 */

export const COUPON_PLATFORMS = ["jee", "neet", "nda"] as const;
export type CouponPlatform = (typeof COUPON_PLATFORMS)[number];

export const couponApiUrls: Record<CouponPlatform, string> = {
  jee: "https://api.jeerankup.com/api/v1/public/coupons",
  neet: "https://api.neetrankup.com/api/v1/public/coupons",
  nda: "https://api.ndarankup.com/api/v1/public/coupons",
};

export const couponProductNames: Record<CouponPlatform, string> = {
  jee: "JeeRankUp",
  neet: "NeetRankUp",
  nda: "NDARankUp",
};

/** Only codes people can use now or soon are listed. */
export type CouponStatus = "active" | "upcoming";
export type CouponAppliesTo = "subscription" | "topup";
export type CouponDiscountType = "percent" | "flat";

export interface CouponPlan {
  id: string;
  name: string;
  pricePaise: number | null;
}

export interface PublicCoupon {
  platform: CouponPlatform;
  code: string;
  status: CouponStatus;
  headline: string;
  discountType: CouponDiscountType;
  percentOff: number | null;
  amountOffPaise: number | null;
  maxDiscountPaise: number | null;
  minOrderPaise: number;
  appliesTo: CouponAppliesTo;
  /** null = every plan (or pack) of that kind. */
  plans: CouponPlan[] | null;
  startsAt: string | null;
  endsAt: string | null;
  limited: boolean;
  /** Redeem destination on the platform origin, fed to buildRankUpHandoff. */
  redeemPath: string;
  redeemQuery: string;
}

export interface CouponFeed {
  items: PublicCoupon[];
  /** Platforms whose coupons could not be loaded on this request. */
  unavailable: CouponPlatform[];
}

const CODE_PATTERN = /^[A-Z0-9][A-Z0-9_-]{0,39}$/;

function record(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function amount(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : null;
}

function isoDate(value: unknown): string | null {
  return typeof value === "string" && !Number.isNaN(Date.parse(value)) ? value : null;
}

function plansFrom(value: unknown): CouponPlan[] | null {
  if (!Array.isArray(value)) return null;
  const plans = value.flatMap((entry) => {
    const plan = record(entry);
    const name = text(plan?.["name"], 80);
    if (!plan || !name) return [];
    return [{ id: String(plan["id"] ?? name), name, pricePaise: amount(plan["price_paise"]) }];
  });
  return plans.length ? plans : null;
}

/**
 * RankUp records only `coupon` and the five utm_* fields, so the entry point
 * travels in utm_content (unless the platform's link already sets it).
 */
export const COUPON_UTM_CONTENT = "offers-page";

/** The documented redeem link shape, used when the API's link cannot be trusted. */
function defaultRedeemParams(code: string): URLSearchParams {
  return new URLSearchParams({
    coupon: code,
    utm_source: "ranksarthi",
    utm_medium: "coupon",
    utm_campaign: code,
  });
}

function redeemTarget(
  value: unknown,
  platform: CouponPlatform,
  code: string,
): { path: string; query: string } {
  let path = "/redeem";
  let params = defaultRedeemParams(code);
  try {
    const url = new URL(text(value, 2048));
    if (url.origin === platformOrigins[platform] && url.searchParams.get("coupon") === code) {
      path = url.pathname;
      params = url.searchParams;
    }
  } catch {
    // keep the documented shape
  }
  if (!params.has("utm_content")) params.set("utm_content", COUPON_UTM_CONTENT);
  return { path, query: params.toString() };
}

function headlineFor(
  discountType: CouponDiscountType,
  percentOff: number | null,
  amountOffPaise: number | null,
  cap: number | null,
): string {
  if (discountType === "flat" && amountOffPaise !== null)
    return `${formatPaise(amountOffPaise)} off`;
  if (percentOff !== null)
    return cap ? `${percentOff}% off, up to ${formatPaise(cap)}` : `${percentOff}% off`;
  return "Discount";
}

/**
 * Validates one API item. Returns null for anything this page cannot show
 * honestly: another platform's item, an unusable code, or a code that is
 * not active or upcoming.
 */
export function normaliseCoupon(raw: unknown, platform: CouponPlatform): PublicCoupon | null {
  const item = record(raw);
  if (!item || item["platform"] !== platform) return null;

  const code = text(item["code"], 40).toUpperCase();
  if (!CODE_PATTERN.test(code)) return null;

  const status = item["status"];
  if (status !== "active" && status !== "upcoming") return null;

  const discountType = item["discount_type"];
  if (discountType !== "percent" && discountType !== "flat") return null;

  const appliesTo = item["applies_to"];
  if (appliesTo !== "subscription" && appliesTo !== "topup") return null;

  const percentOff = amount(item["percent_off"]);
  const amountOffPaise = amount(item["amount_off_paise"]);
  const maxDiscountPaise = amount(item["max_discount_paise"]);
  const redeem = redeemTarget(item["redeem_url"], platform, code);

  return {
    platform,
    code,
    status,
    headline:
      text(item["headline"], 80) ||
      headlineFor(discountType, percentOff, amountOffPaise, maxDiscountPaise),
    discountType,
    percentOff,
    amountOffPaise,
    maxDiscountPaise,
    minOrderPaise: amount(item["min_order_paise"]) ?? 0,
    appliesTo,
    plans: plansFrom(item["plans"]),
    startsAt: isoDate(item["starts_at"]),
    endsAt: isoDate(item["ends_at"]),
    limited: item["limited"] === true,
    redeemPath: redeem.path,
    redeemQuery: redeem.query,
  };
}

/**
 * Re-applies the API's status rules at a given moment, so a cached list
 * never shows an ended code or calls a started code "upcoming".
 */
export function currentCoupons(items: PublicCoupon[], now: number): PublicCoupon[] {
  return items.flatMap((coupon) => {
    if (coupon.endsAt && Date.parse(coupon.endsAt) <= now) return [];
    if (coupon.status === "upcoming" && coupon.startsAt && Date.parse(coupon.startsAt) <= now) {
      return [{ ...coupon, status: "active" as const }];
    }
    return [coupon];
  });
}

/** ₹ amount from paise; paise digits only when the amount is not whole rupees. */
export function formatPaise(paise: number): string {
  const rupees = paise / 100;
  const fraction = paise % 100 === 0 ? 0 : 2;
  return `₹${rupees.toLocaleString("en-IN", { minimumFractionDigits: fraction, maximumFractionDigits: fraction })}`;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const IST_OFFSET_MS = 330 * 60 * 1000;

/**
 * "13 Oct 2026, 3:56 pm IST". Built by hand rather than with Intl, so the
 * server and every browser render identical text (no hydration mismatch).
 */
export function formatIst(iso: string): string {
  const d = new Date(Date.parse(iso) + IST_OFFSET_MS);
  const hours = d.getUTCHours();
  const minutes = String(d.getUTCMinutes()).padStart(2, "0");
  return `${formatIstDay(iso)} ${d.getUTCFullYear()}, ${hours % 12 || 12}:${minutes} ${hours < 12 ? "am" : "pm"} IST`;
}

/** "20 Oct" in IST, for short labels. */
export function formatIstDay(iso: string): string {
  const d = new Date(Date.parse(iso) + IST_OFFSET_MS);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}

/** Plain-language conditions for a coupon card, in reading order. */
export function couponConditions(coupon: PublicCoupon): string[] {
  const product = couponProductNames[coupon.platform];
  const kind = coupon.appliesTo === "topup" ? "top-up pack" : "plan";
  const lines: string[] = [];

  if (coupon.plans) {
    const names = coupon.plans.map((p) =>
      p.pricePaise ? `${p.name} (${formatPaise(p.pricePaise)})` : p.name,
    );
    lines.push(`Valid on: ${names.join(", ")}`);
  } else {
    lines.push(`Valid on every ${product} ${kind}`);
  }
  if (coupon.minOrderPaise > 0) lines.push(`Minimum order ${formatPaise(coupon.minOrderPaise)}`);
  if (coupon.status === "upcoming" && coupon.startsAt)
    lines.push(`Starts ${formatIst(coupon.startsAt)}`);
  lines.push(coupon.endsAt ? `Ends ${formatIst(coupon.endsAt)}` : "No end date");
  if (coupon.limited) lines.push("Limited number of uses, so it can run out");
  return lines;
}

export type CouponSort = "ending_soon" | "starting_soon";

export interface CouponFilters {
  platform: "all" | CouponPlatform;
  status: "all" | CouponStatus;
  appliesTo: "all" | CouponAppliesTo;
  discountType: "all" | CouponDiscountType;
  search: string;
  sort: CouponSort;
}

export const DEFAULT_COUPON_FILTERS: CouponFilters = {
  platform: "all",
  status: "all",
  appliesTo: "all",
  discountType: "all",
  search: "",
  sort: "ending_soon",
};

/** Dates ascending; a coupon without the date comes last. */
function byDate(a: string | null, b: string | null): number {
  if (a === b) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  return Date.parse(a) - Date.parse(b);
}

export function filterCoupons(items: PublicCoupon[], filters: CouponFilters): PublicCoupon[] {
  const query = filters.search.trim().toUpperCase().slice(0, 32);
  const shown = items.filter(
    (c) =>
      (filters.platform === "all" || c.platform === filters.platform) &&
      (filters.status === "all" || c.status === filters.status) &&
      (filters.appliesTo === "all" || c.appliesTo === filters.appliesTo) &&
      (filters.discountType === "all" || c.discountType === filters.discountType) &&
      (!query || c.code.includes(query)),
  );

  return shown.sort((a, b) => {
    if (filters.sort === "starting_soon") {
      const upcoming = Number(b.status === "upcoming") - Number(a.status === "upcoming");
      if (upcoming) return upcoming;
      if (a.status === "upcoming")
        return byDate(a.startsAt, b.startsAt) || a.code.localeCompare(b.code);
    }
    return byDate(a.endsAt, b.endsAt) || a.code.localeCompare(b.code);
  });
}
