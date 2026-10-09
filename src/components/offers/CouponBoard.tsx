import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, RotateCcw, Search, TicketPercent } from "lucide-react";
import { platformOrigins } from "@/content/site";
import {
  COUPON_PLATFORMS,
  DEFAULT_COUPON_FILTERS,
  couponConditions,
  couponProductNames,
  filterCoupons,
  formatIstDay,
  type CouponFeed,
  type CouponFilters,
  type CouponPlatform,
  type PublicCoupon,
} from "@/content/offers/coupons";
import { buildRankUpHandoff } from "@/lib/acquisition";
import { emitAcquisitionEvent } from "@/lib/acquisition-analytics";

/**
 * Coupon list with client-side filters. Filtering never changes the URL, so
 * no thin filter pages are created; every coupon is in the server render.
 */

const ENTRY_PATH = "/offers";

const tint: Record<CouponPlatform, { bar: string; chip: string }> = {
  jee: { bar: "bg-jee", chip: "bg-jee/10 text-jee" },
  neet: { bar: "bg-neet", chip: "bg-neet/10 text-neet" },
  nda: { bar: "bg-nda", chip: "bg-nda/15 text-navy" },
};

const selectCls =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function joinNames(names: string[]): string {
  return names.length > 1
    ? `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`
    : (names[0] ?? "");
}

export function CouponBoard({ feed }: { feed: CouponFeed }) {
  const [filters, setFilters] = useState<CouponFilters>(DEFAULT_COUPON_FILTERS);
  // The visitor's inbound attribution is read after hydration, as in every other handoff.
  const [inbound, setInbound] = useState("");
  useEffect(() => setInbound(window.location.search), []);

  const shown = useMemo(() => filterCoupons(feed.items, filters), [feed.items, filters]);
  const counts = useMemo(() => {
    const byPlatform = { jee: 0, neet: 0, nda: 0 } as Record<CouponPlatform, number>;
    for (const c of feed.items) byPlatform[c.platform] += 1;
    return byPlatform;
  }, [feed.items]);

  const set = <K extends keyof CouponFilters>(key: K, value: CouponFilters[K]) =>
    setFilters((f) => ({ ...f, [key]: value }));
  const isFiltered = (Object.keys(DEFAULT_COUPON_FILTERS) as (keyof CouponFilters)[]).some(
    (key) => key !== "sort" && filters[key] !== DEFAULT_COUPON_FILTERS[key],
  );

  const platformOptions: { value: CouponFilters["platform"]; label: string; count: number }[] = [
    { value: "all", label: "All platforms", count: feed.items.length },
    ...COUPON_PLATFORMS.map((p) => ({ value: p, label: couponProductNames[p], count: counts[p] })),
  ];
  const unavailable = feed.unavailable.map((p) => couponProductNames[p]);

  return (
    <section aria-labelledby="coupons-heading" className="scroll-mt-28">
      <h2 id="coupons-heading" className="text-display-md text-primary">
        Live coupon codes
      </h2>

      <div className="mt-5 rounded-xl border border-border bg-card p-4 shadow-sm md:p-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by platform">
          {platformOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={filters.platform === option.value}
              onClick={() => set("platform", option.value)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                filters.platform === option.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-ink hover:border-primary/60"
              }`}
            >
              {option.label} <span className="opacity-70">({option.count})</span>
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <label
              htmlFor="coupon-search"
              className="mb-1.5 block text-xs font-semibold text-muted-foreground"
            >
              Search code
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                id="coupon-search"
                type="search"
                maxLength={32}
                autoComplete="off"
                placeholder="e.g. FIRSTUSER"
                value={filters.search}
                onChange={(e) => set("search", e.target.value)}
                className={`${selectCls} pl-9 uppercase placeholder:normal-case`}
              />
            </div>
          </div>
          <FilterSelect
            id="coupon-status"
            label="Status"
            value={filters.status}
            onChange={(v) => set("status", v)}
            options={[
              ["all", "All statuses"],
              ["active", "Active now"],
              ["upcoming", "Upcoming"],
            ]}
          />
          <FilterSelect
            id="coupon-applies"
            label="Valid on"
            value={filters.appliesTo}
            onChange={(v) => set("appliesTo", v)}
            options={[
              ["all", "All types"],
              ["subscription", "Plans"],
              ["topup", "Top-up packs"],
            ]}
          />
          <FilterSelect
            id="coupon-discount"
            label="Discount"
            value={filters.discountType}
            onChange={(v) => set("discountType", v)}
            options={[
              ["all", "Any discount"],
              ["percent", "Percentage off"],
              ["flat", "Flat ₹ off"],
            ]}
          />
          <FilterSelect
            id="coupon-sort"
            label="Sort by"
            value={filters.sort}
            onChange={(v) => set("sort", v)}
            options={[
              ["ending_soon", "Ends soonest"],
              ["starting_soon", "Upcoming first"],
            ]}
          />
        </div>
      </div>

      <div className="mt-4 flex min-h-9 flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing {shown.length} of {feed.items.length}{" "}
          {feed.items.length === 1 ? "coupon" : "coupons"}.
        </p>
        {isFiltered ? (
          <button
            type="button"
            onClick={() => setFilters((f) => ({ ...DEFAULT_COUPON_FILTERS, sort: f.sort }))}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <RotateCcw className="size-3.5" aria-hidden /> Reset filters
          </button>
        ) : null}
      </div>

      {unavailable.length ? (
        <p
          role="status"
          className="mt-3 rounded-lg border border-warning/40 bg-warning/5 p-3 text-sm text-foreground"
        >
          We couldn't load {joinNames(unavailable)} coupons just now. They will appear here again
          shortly.
        </p>
      ) : null}

      {shown.length ? (
        <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((coupon) => (
            <CouponCard
              key={`${coupon.platform}-${coupon.code}`}
              coupon={coupon}
              inbound={inbound}
            />
          ))}
        </ul>
      ) : (
        <EmptyState
          variant={
            feed.items.length === 0
              ? "none"
              : filters.platform !== "all" && counts[filters.platform] === 0
                ? "platform"
                : "filtered"
          }
          platform={filters.platform}
          onReset={() => setFilters((f) => ({ ...DEFAULT_COUPON_FILTERS, sort: f.sort }))}
        />
      )}
    </section>
  );
}

function FilterSelect<T extends string>({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: [T, string][];
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-muted-foreground">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className={selectCls}
      >
        {options.map(([v, text]) => (
          <option key={v} value={v}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * none: no platform has a public code. platform: the chosen platform has
 * none. filtered: codes exist, but not for this combination of filters.
 */
function EmptyState({
  variant,
  platform,
  onReset,
}: {
  variant: "none" | "platform" | "filtered";
  platform: CouponFilters["platform"];
  onReset: () => void;
}) {
  const title =
    variant === "filtered"
      ? "No coupons match these filters."
      : variant === "platform" && platform !== "all"
        ? `${couponProductNames[platform]} has no public coupons right now.`
        : "There are no public coupons right now.";
  return (
    <div className="mt-5 rounded-xl border border-dashed border-border bg-ivory px-6 py-12 text-center">
      <TicketPercent className="mx-auto size-8 text-primary/60" aria-hidden />
      <p className="mt-4 text-base font-semibold text-primary">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        {variant === "filtered"
          ? "Try another platform or clear the filters to see every live code."
          : "New codes appear here as soon as a platform publishes them, so check back soon."}
      </p>
      {variant !== "none" ? (
        <button
          type="button"
          onClick={onReset}
          className="btn-press mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-primary"
        >
          <RotateCcw className="size-4" aria-hidden />{" "}
          {variant === "platform" ? "Show all platforms" : "Reset filters"}
        </button>
      ) : null}
    </div>
  );
}

function CouponCard({ coupon, inbound }: { coupon: PublicCoupon; inbound: string }) {
  const product = couponProductNames[coupon.platform];
  const headingId = `coupon-${coupon.platform}-${coupon.code}`;
  const codeRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState<"idle" | "copied" | "selected">("idle");

  useEffect(() => {
    if (copied === "idle") return;
    const timer = window.setTimeout(() => setCopied("idle"), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(coupon.code);
      setCopied("copied");
    } catch {
      // Clipboard blocked: select the code so the visitor can copy it themselves.
      const node = codeRef.current;
      const selection = window.getSelection();
      if (node && selection) {
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setCopied("selected");
    }
  }

  const href = buildRankUpHandoff({
    exam: coupon.platform,
    search: inbound,
    entryPath: ENTRY_PATH,
    cta: "offer",
    path: coupon.redeemPath,
    params: new URLSearchParams(coupon.redeemQuery),
  });

  return (
    <li className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
      <span className={`block h-1 w-full ${tint[coupon.platform].bar}`} aria-hidden="true" />
      <article aria-labelledby={headingId} className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${tint[coupon.platform].chip}`}
          >
            {product}
          </span>
          {coupon.status === "active" ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-success">
              <span className="size-2 rounded-full bg-success" aria-hidden /> Active now
            </span>
          ) : (
            <span className="rounded-full bg-warning/15 px-2.5 py-1 text-xs font-semibold text-primary">
              Upcoming
            </span>
          )}
        </div>

        <h3 id={headingId} className="mt-4 font-display text-2xl font-bold text-primary">
          {coupon.headline}
          <span className="sr-only"> on {product}</span>
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          {couponConditions(coupon).map((line) => (
            <li key={line} className="flex gap-2">
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60"
                aria-hidden
              />
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-stretch overflow-hidden rounded-lg border-2 border-dashed border-primary/30 bg-ivory">
          <span
            ref={codeRef}
            className="flex min-w-0 flex-1 items-center break-all px-4 py-2.5 font-mono text-base font-bold tracking-wider text-primary select-all"
          >
            {coupon.code}
          </span>
          <button
            type="button"
            onClick={copyCode}
            aria-label={`Copy code ${coupon.code}`}
            className="inline-flex shrink-0 items-center gap-1.5 border-l-2 border-dashed border-primary/30 px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            {copied === "copied" ? (
              <Check className="size-4" aria-hidden />
            ) : (
              <Copy className="size-4" aria-hidden />
            )}
            {copied === "copied" ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-1.5 min-h-5 text-xs text-muted-foreground" aria-live="polite">
          {copied === "copied"
            ? `${coupon.code} copied.`
            : copied === "selected"
              ? "Code selected. Copy it to use at checkout."
              : ""}
        </p>

        <div className="mt-auto pt-4">
          {coupon.status === "active" ? (
            <a
              href={href}
              rel="noopener"
              onClick={() =>
                emitAcquisitionEvent("rankup_handoff", {
                  exam: coupon.platform,
                  entry_path: ENTRY_PATH,
                  cta: "offer",
                  destination_origin: platformOrigins[coupon.platform],
                })
              }
              className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-navy-soft"
            >
              Apply on {product} <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg bg-muted px-5 py-3 text-sm font-bold text-muted-foreground"
            >
              {coupon.startsAt
                ? `Available from ${formatIstDay(coupon.startsAt)}`
                : "Not active yet"}
            </span>
          )}
        </div>
      </article>
    </li>
  );
}
