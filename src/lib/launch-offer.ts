/**
 * RankUp launch-offer API client (guide dated 22 Oct 2026).
 * Pure parsing/formatting helpers plus a browser fetcher with a 60-second
 * cache and back-off on 429/failure. Rank Sarthi never builds claim links,
 * shows coupon codes or handles redemption — RankUp owns all of that.
 */

export type LaunchOfferExam = "jee" | "neet" | "nda";

/** Exams whose launch-offer promotion is approved on Rank Sarthi. NDA waits for claim-journey approval. */
export const LAUNCH_OFFER_EXAMS: readonly LaunchOfferExam[] = ["jee", "neet"];

export const LAUNCH_OFFER_UTM = {
  utm_source: "ranksarthi",
  utm_medium: "launch_offer",
  utm_campaign: "launch",
} as const;

const API_HOSTS: Record<LaunchOfferExam, string> = {
  jee: "https://api.jeerankup.com",
  neet: "https://api.neetrankup.com",
  nda: "https://api.ndarankup.com",
};

const CLAIM_HOSTS: Record<LaunchOfferExam, string> = {
  jee: "jeerankup.com",
  neet: "neetrankup.com",
  nda: "ndarankup.com",
};

export const LAUNCH_OFFER_EXAM_LABEL: Record<LaunchOfferExam, string> = {
  jee: "JEE Mains & Advanced",
  neet: "NEET UG",
  nda: "NDA",
};

export function launchOfferEndpoint(exam: LaunchOfferExam): string {
  const q = new URLSearchParams(LAUNCH_OFFER_UTM).toString();
  return `${API_HOSTS[exam]}/api/v1/public/launch-offer?${q}`;
}

export interface LaunchOfferItem {
  count: number;
  text: string;
  valuePaise: number | null;
}

export interface LaunchOffer {
  exam: LaunchOfferExam;
  headline: string;
  maxStudents: number | null;
  placesLeft: number | null;
  until: string | null;
  bundle: {
    heading: string | null;
    subheading: string | null;
    pricePaise: number | null;
    totalValuePaise: number | null;
    items: LaunchOfferItem[];
  } | null;
  claimUrl: string;
}

const num = (v: unknown): number | null =>
  typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : null;
const str = (v: unknown): string | null => (typeof v === "string" && v.trim() ? v.trim() : null);

/** Accept only an https link on that exam's own RankUp site. The URL is returned unchanged. */
export function isTrustedClaimUrl(exam: LaunchOfferExam, url: string): boolean {
  try {
    const u = new URL(url);
    const host = CLAIM_HOSTS[exam];
    return u.protocol === "https:" && (u.hostname === host || u.hostname === `www.${host}`);
  } catch {
    return false;
  }
}

/** Parse a `{ data, meta }` answer. Returns null for inactive, malformed or untrusted offers. */
export function parseLaunchOffer(exam: LaunchOfferExam, body: unknown): LaunchOffer | null {
  const data = (body as { data?: Record<string, unknown> } | null)?.data;
  if (!data || data.active !== true) return null;
  const claimUrl = str(data.claim_url);
  const headline = str(data.headline);
  if (!claimUrl || !headline || !isTrustedClaimUrl(exam, claimUrl)) return null;

  const placesLeft = num(data.places_left);
  if (placesLeft === 0) return null;

  const b = data.bundle as Record<string, unknown> | null | undefined;
  const items = Array.isArray(b?.items)
    ? (b!.items as Record<string, unknown>[])
        .map((i) => ({ count: num(i?.count), text: str(i?.text) ?? str(i?.label), valuePaise: num(i?.value_paise) }))
        .filter((i): i is LaunchOfferItem => i.count !== null && i.text !== null)
    : [];

  return {
    exam,
    headline,
    maxStudents: num(data.max_students),
    placesLeft,
    until: typeof data.until === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data.until) ? data.until : null,
    bundle: b
      ? {
          heading: str(b.heading),
          subheading: str(b.subheading),
          pricePaise: num(b.price_paise),
          totalValuePaise: num(b.total_value_paise),
          items,
        }
      : null,
    claimUrl,
  };
}

/** ₹ with Indian digit grouping, from paise. */
export function formatPaise(paise: number): string {
  const rupees = paise / 100;
  return `₹${rupees.toLocaleString("en-IN", { maximumFractionDigits: Number.isInteger(rupees) ? 0 : 2 })}`;
}

export function bundleHeading(offer: LaunchOffer): string | null {
  const b = offer.bundle;
  if (!b) return null;
  if (b.heading) return b.heading;
  return b.pricePaise !== null ? `Claim your free bundle worth ${formatPaise(b.pricePaise)}` : "Claim your free bundle";
}

export function bundleTotalPaise(offer: LaunchOffer): number | null {
  return offer.bundle ? offer.bundle.totalValuePaise ?? offer.bundle.pricePaise : null;
}

/** "8 Nov 2026" from an IST calendar date. */
export function formatUntil(until: string): string {
  const [y, m, d] = until.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[(m ?? 1) - 1]} ${y}`;
}

// ---- Browser fetcher -------------------------------------------------------

const TTL_MS = 60_000;
const RETRY_MS = 60_000;
const cache = new Map<LaunchOfferExam, { at: number; offer: LaunchOffer | null; retryAt?: number }>();
const inflight = new Map<LaunchOfferExam, Promise<LaunchOffer | null>>();

/** Fetch one exam's offer; never more than once a minute per exam. Failures hide the offer. */
export function getLaunchOffer(exam: LaunchOfferExam, fetcher: typeof fetch = fetch): Promise<LaunchOffer | null> {
  const now = Date.now();
  const hit = cache.get(exam);
  if (hit && now - hit.at < TTL_MS) return Promise.resolve(hit.offer);
  if (hit?.retryAt && now < hit.retryAt) return Promise.resolve(null);
  const pending = inflight.get(exam);
  if (pending) return pending;

  const p = fetcher(launchOfferEndpoint(exam), { headers: { Accept: "application/json" } })
    .then(async (res) => {
      if (!res.ok) {
        if (res.status === 422) console.warn("[launch-offer] UTM validation failed", exam);
        cache.set(exam, { at: 0, offer: null, retryAt: Date.now() + RETRY_MS });
        return null;
      }
      const offer = parseLaunchOffer(exam, await res.json());
      cache.set(exam, { at: Date.now(), offer });
      return offer;
    })
    .catch(() => {
      cache.set(exam, { at: 0, offer: null, retryAt: Date.now() + RETRY_MS });
      return null;
    })
    .finally(() => inflight.delete(exam));
  inflight.set(exam, p);
  return p;
}

/** Which exam offers a page may show: home/general pages both, exam pages only their own, NDA none. */
export function launchOfferExamsForPath(pathname: string): LaunchOfferExam[] {
  const first = pathname.split("/")[1];
  if (first === "jee" || first === "neet") return LAUNCH_OFFER_EXAMS.includes(first) ? [first] : [];
  if (first === "nda") return LAUNCH_OFFER_EXAMS.includes("nda") ? ["nda"] : [];
  return [...LAUNCH_OFFER_EXAMS];
}

export function __resetLaunchOfferCache() {
  cache.clear();
  inflight.clear();
}
