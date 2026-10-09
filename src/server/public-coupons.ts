import {
  COUPON_PLATFORMS,
  couponApiUrls,
  currentCoupons,
  normaliseCoupon,
  type CouponFeed,
  type CouponPlatform,
  type PublicCoupon,
} from "@/content/offers/coupons";

/**
 * Public coupons adapter for the three RankUp APIs (docs/public-coupons.md).
 *
 * Server-only. Every visitor shares this server's IP against the API's
 * 120 requests/minute limit, so each platform's list is cached in memory,
 * concurrent requests share one fetch, and a failure (or a 429) backs off
 * and serves the last good list. One platform failing never hides the others.
 */

/** Matches the API's own 60 s cache: 3 calls a minute at most, far under the limit. */
const CACHE_TTL_MS = 60 * 1000;
const FAILURE_BACKOFF_MS = 30 * 1000;
const FETCH_TIMEOUT_MS = 8000;
const MAX_PAGES = 5;

const cache = new Map<CouponPlatform, { items: PublicCoupon[]; expires: number }>();
const inFlight = new Map<CouponPlatform, Promise<BrandResult>>();
const backoffUntil = new Map<CouponPlatform, number>();

interface BrandResult {
  items: PublicCoupon[];
  ok: boolean;
}

class RateLimitedError extends Error {
  constructor(readonly retryAfterMs: number) {
    super("Coupon API rate limited");
  }
}

async function fetchPage(
  platform: CouponPlatform,
  page: number,
): Promise<{ items: unknown[]; lastPage: number }> {
  const url = new URL(couponApiUrls[platform]);
  url.searchParams.set("platform", platform);
  url.searchParams.set("status", "active,upcoming");
  url.searchParams.set("per_page", "100");
  url.searchParams.set("page", String(page));

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (res.status === 429) {
    const seconds = Number(res.headers.get("retry-after"));
    throw new RateLimitedError(
      Number.isFinite(seconds) && seconds > 0 ? seconds * 1000 : FAILURE_BACKOFF_MS,
    );
  }
  if (!res.ok) throw new Error(`Coupon request failed: ${res.status} ${url.host}`);

  const body = (await res.json()) as {
    data?: { items?: unknown; pagination?: { last_page?: unknown } };
  };
  return {
    items: Array.isArray(body.data?.items) ? body.data.items : [],
    lastPage: Number(body.data?.pagination?.last_page) || 1,
  };
}

async function loadPlatform(platform: CouponPlatform): Promise<BrandResult> {
  const now = Date.now();
  const cached = cache.get(platform);
  if (cached && cached.expires > now) return { items: cached.items, ok: true };
  if ((backoffUntil.get(platform) ?? 0) > now) return { items: cached?.items ?? [], ok: !!cached };
  const pending = inFlight.get(platform);
  if (pending) return pending;

  const task = (async (): Promise<BrandResult> => {
    try {
      const raw: unknown[] = [];
      let page = 1;
      let lastPage = 1;
      do {
        const result = await fetchPage(platform, page);
        raw.push(...result.items);
        lastPage = result.lastPage;
        page += 1;
      } while (page <= Math.min(lastPage, MAX_PAGES));

      const byCode = new Map<string, PublicCoupon>();
      for (const item of raw) {
        const coupon = normaliseCoupon(item, platform);
        if (coupon && !byCode.has(coupon.code)) byCode.set(coupon.code, coupon);
      }
      const items = [...byCode.values()];
      cache.set(platform, { items, expires: Date.now() + CACHE_TTL_MS });
      return { items, ok: true };
    } catch (error) {
      const wait = error instanceof RateLimitedError ? error.retryAfterMs : FAILURE_BACKOFF_MS;
      backoffUntil.set(platform, Date.now() + wait);
      console.error(`[public-coupons] ${platform} fetch failed:`, error);
      const stale = cache.get(platform);
      return { items: stale?.items ?? [], ok: !!stale };
    } finally {
      inFlight.delete(platform);
    }
  })();
  inFlight.set(platform, task);
  return task;
}

export async function fetchPublicCoupons(): Promise<CouponFeed> {
  const results = await Promise.all(COUPON_PLATFORMS.map(loadPlatform));
  return {
    items: currentCoupons(
      results.flatMap((r) => r.items),
      Date.now(),
    ),
    unavailable: COUPON_PLATFORMS.filter((_, i) => !results[i]!.ok),
  };
}
