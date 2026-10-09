import { neetCampaign } from "@/content/offers/neet-test-series";

/** Campaign surfaces for approved JEE and NEET inaugural offers. */

export const OFFER_URL = "/jee/mock-tests";

export const jeeAnnouncement = {
  message:
    "JEE Test Series 2026 • Complete Main + Advanced Bundle at ₹2,500 • Part Tests + Full Tests + CBT PYQs",
  ctaLabel: "View Offer",
  href: OFFER_URL,
} as const;

export const jeeOfferPopup = {
  /** One dismissal lasts the whole browser session. */
  sessionKey: "rs-jee-test-series-popup",
  delayMs: 2600,
  eyebrow: "Inaugural offer",
  title: "JEE Test Series 2026",
  subtitle: "Complete Main + Advanced Bundle",
  points: [
    "10 Main Part Tests",
    "10 Advanced Part Tests",
    "15 Full Tests",
    "CBT previous-year practice",
  ],
  priceLabel: "Inaugural Price",
  price: "₹2,500",
  ctaLabel: "View Test Series",
  href: OFFER_URL,
} as const;

/**
 * One common Rank Sarthi inaugural campaign (presentation only). Exam
 * commercial data stays in the JEE and NEET offer sources above.
 */
export const commonOfferChoices = [
  { exam: "jee", label: "View JEE Offers", href: OFFER_URL },
  { exam: "neet", label: "View NEET Offers", href: neetCampaign.popup.href },
] as const;

export const commonAnnouncement = {
  ariaLabel: "Rank Sarthi inaugural offers",
  message: "2026 Inaugural Offers Live — Explore JEE & NEET Test Series",
  ctaLabel: "View Offers",
  choices: commonOfferChoices,
} as const;

export const commonOfferPopup = {
  ariaLabel: "Rank Sarthi Inaugural Offers 2026",
  /** One display per browser session, shared by every page. */
  sessionKey: "rs-inaugural-offers-popup",
  delayMs: 5000,
  title: "Rank Sarthi Inaugural Offers 2026",
  subtitle: "Choose your exam to explore the current launch offers.",
  choices: commonOfferChoices,
} as const;

export type AnnouncementCampaign = typeof commonAnnouncement;
export type PopupCampaign = typeof commonOfferPopup;

/** Commercial destinations never promote themselves. */
const SUPPRESSED = new Set([OFFER_URL, "/jee/pricing", neetCampaign.popup.href, "/neet/pricing", "/offers"]);

function pathOnly(url: string): string {
  const path = url.split(/[?#]/, 1)[0] ?? url;
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function campaignFor(url: string): {
  announcement?: AnnouncementCampaign;
  popup?: PopupCampaign;
} {
  const path = pathOnly(url);
  if (SUPPRESSED.has(path)) return {};
  // No approved NDA package: avoid implying an NDA offer.
  if (path === "/nda" || path.startsWith("/nda/")) return {};
  return { announcement: commonAnnouncement, popup: commonOfferPopup };
}
