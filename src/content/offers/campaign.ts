/**
 * Campaign surfaces for the approved JEE Test Series inaugural offer.
 *
 * Scope rule: the JEE promotional strip and popup appear on JEE pages only.
 * NEET and NDA learning pages never carry JEE commercial copy. The offer page
 * itself does not promote itself.
 */

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
