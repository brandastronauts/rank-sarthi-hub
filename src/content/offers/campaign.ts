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

export type AnnouncementCampaign = typeof jeeAnnouncement | typeof neetCampaign.announcement;
export type PopupCampaign = (typeof jeeOfferPopup & { ariaLabel?: string }) | typeof neetCampaign.popup;

/** True for JEE routes other than the offer page itself. */
function isJeeSurface(url: string): boolean {
  const path = url.length > 1 && url.endsWith("/") ? url.slice(0, -1) : url;
  if (path === OFFER_URL) return false;
  return path === "/jee" || path.startsWith("/jee/");
}

export function showJeeAnnouncement(url: string): boolean {
  return isJeeSurface(url);
}

export function showJeeOfferPopup(url: string): boolean {
  return isJeeSurface(url);
}

function pathOnly(url: string): string {
  const path = url.split(/[?#]/, 1)[0] ?? url;
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function campaignFor(url: string): {
  announcement?: AnnouncementCampaign;
  popup?: PopupCampaign;
} {
  const path = pathOnly(url);
  if (isJeeSurface(path)) return { announcement: jeeAnnouncement, popup: jeeOfferPopup };
  if (path === "/neet" || path.startsWith("/neet/")) {
    if (path === neetCampaign.announcement.href) return {};
    if (path === "/neet/pricing") return { announcement: neetCampaign.announcement };
    return { announcement: neetCampaign.announcement, popup: neetCampaign.popup };
  }
  return {};
}
