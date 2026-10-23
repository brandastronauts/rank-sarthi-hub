import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Gift, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  bundleHeading,
  bundleTotalPaise,
  formatPaise,
  formatUntil,
  getLaunchOffer,
  LAUNCH_OFFER_EXAM_LABEL,
  launchOfferExamsForPath,
  type LaunchOffer,
  type LaunchOfferExam,
} from "@/lib/launch-offer";

/**
 * One shared launch-offer popup. The ticker and the homepage hero button both
 * open it through this context; nothing renders until the RankUp API reports
 * an active bundle offer.
 */
interface Ctx {
  offers: LaunchOffer[];
  open: (exam?: LaunchOfferExam) => void;
}
const LaunchOfferContext = createContext<Ctx>({ offers: [], open: () => {} });
export const useLaunchOffers = () => useContext(LaunchOfferContext);

const SESSION_KEY = "rs-launch-offer-popup";
const AUTO_DELAY_MS = 5000;

export function LaunchOfferProvider({ url, enabled, children }: { url: string; enabled: boolean; children: ReactNode }) {
  const exams = useMemo(() => (enabled ? launchOfferExamsForPath(url) : []), [enabled, url]);
  const [offers, setOffers] = useState<LaunchOffer[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<LaunchOfferExam | null>(null);

  const refresh = useCallback(async () => {
    const results = await Promise.all(exams.map((e) => getLaunchOffer(e)));
    const active = results.filter((o): o is LaunchOffer => !!o && !!o.bundle);
    setOffers(active);
    return active;
  }, [exams]);

  useEffect(() => {
    if (exams.length === 0) return setOffers([]);
    let alive = true;
    void refresh().then((a) => alive || a);
    const t = window.setInterval(() => void refresh(), 60_000);
    return () => {
      alive = false;
      window.clearInterval(t);
    };
  }, [exams, refresh]);

  const openPopup = useCallback(
    (exam?: LaunchOfferExam) => {
      // Revalidate (cached for 60 s) before showing, so expired offers never open.
      void refresh().then((active) => {
        if (active.length === 0) return;
        setSelected(active.find((o) => o.exam === exam)?.exam ?? active[0]!.exam);
        setOpen(true);
      });
    },
    [refresh],
  );

  // Automatic display: once per session, after a delay, never over another dialog.
  useEffect(() => {
    if (offers.length === 0 || sessionStorage.getItem(SESSION_KEY)) return;
    const t = window.setTimeout(() => {
      if (document.querySelector('[role="dialog"][data-state="open"], [data-mobile-menu][aria-hidden="false"]')) return;
      sessionStorage.setItem(SESSION_KEY, "shown");
      openPopup();
    }, AUTO_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [offers.length, openPopup]);

  const current = offers.find((o) => o.exam === selected) ?? offers[0];

  return (
    <LaunchOfferContext.Provider value={{ offers, open: openPopup }}>
      {children}
      <Dialog open={open && !!current} onOpenChange={(v) => {
        setOpen(v);
        if (!v) sessionStorage.setItem(SESSION_KEY, "shown");
      }}>
        <DialogContent className="max-h-[92svh] w-[calc(100%-1.5rem)] max-w-md overflow-y-auto rounded-2xl border-gold/30 p-0">
          {current ? (
            <OfferBody offers={offers} current={current} onSelect={setSelected} />
          ) : null}
        </DialogContent>
      </Dialog>
    </LaunchOfferContext.Provider>
  );
}

function OfferBody({ offers, current, onSelect }: { offers: LaunchOffer[]; current: LaunchOffer; onSelect: (e: LaunchOfferExam) => void }) {
  const b = current.bundle!;
  const total = bundleTotalPaise(current);
  const pct = current.maxStudents && current.placesLeft !== null ? Math.max(0, Math.min(100, (current.placesLeft / current.maxStudents) * 100)) : null;

  return (
    <div>
      <div className="rounded-t-2xl bg-navy-deep px-6 pb-5 pt-6 text-primary-foreground">
        <p className="eyebrow inline-flex items-center gap-2 text-gold">
          <Sparkles className="size-3.5" aria-hidden="true" /> Launch offer
        </p>
        {offers.length > 1 ? (
          <div role="tablist" aria-label="Choose your exam" className="mt-4 grid grid-cols-2 gap-1 rounded-lg bg-white/10 p-1">
            {offers.map((o) => (
              <button
                key={o.exam}
                role="tab"
                type="button"
                aria-selected={o.exam === current.exam}
                onClick={() => onSelect(o.exam)}
                className={cn(
                  "min-h-10 rounded-md px-2 text-xs font-semibold transition-colors sm:text-sm",
                  o.exam === current.exam ? "bg-gold text-navy-deep" : "text-primary-foreground/80 hover:text-primary-foreground",
                )}
              >
                {LAUNCH_OFFER_EXAM_LABEL[o.exam]}
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">{LAUNCH_OFFER_EXAM_LABEL[current.exam]}</p>
        )}
        <DialogTitle className="mt-4 line-clamp-2 text-xl font-extrabold leading-snug text-primary-foreground">{bundleHeading(current)}</DialogTitle>
        {b.subheading ? (
          <DialogDescription className="mt-2 line-clamp-3 text-sm text-primary-foreground/80">{b.subheading}</DialogDescription>
        ) : (
          <DialogDescription className="sr-only">{current.headline}</DialogDescription>
        )}
      </div>

      <div className="px-6 py-5">
        <ul className="divide-y divide-border">
          {b.items.map((item, i) => (
            <li key={i} className="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 py-2.5">
              <span className="text-lg font-extrabold text-primary">{item.count}</span>
              <span className="line-clamp-2 text-sm text-foreground">{item.text}</span>
              <span className="text-right text-xs">
                {item.valuePaise !== null ? <s className="mr-1.5 text-muted-foreground">{formatPaise(item.valuePaise)}</s> : null}
                <span className="font-bold text-accent">FREE</span>
              </span>
            </li>
          ))}
        </ul>

        {total !== null ? (
          <div className="mt-3 flex items-center justify-between rounded-lg bg-secondary px-4 py-3">
            <span className="text-sm font-semibold text-primary">Total value</span>
            <span className="text-sm">
              <s className="mr-2 text-muted-foreground">{formatPaise(total)}</s>
              <span className="text-base font-extrabold text-accent">FREE</span>
            </span>
          </div>
        ) : null}

        {pct !== null ? (
          <div className="mt-4">
            <p className="text-sm font-semibold text-primary">
              {current.placesLeft} of {current.maxStudents} places left
            </p>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary" aria-hidden="true">
              <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ) : null}

        {current.until ? <p className="mt-3 text-xs text-muted-foreground">Offer valid until {formatUntil(current.until)}</p> : null}

        <a
          href={current.claimUrl}
          target="_blank"
          rel="noopener"
          className="btn-press mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-base font-bold text-accent-foreground shadow-elevated transition-colors hover:bg-red-hover"
        >
          <Gift className="size-4" aria-hidden="true" /> Claim Free
        </a>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          You'll sign up on {current.exam === "jee" ? "JeeRankUp" : current.exam === "neet" ? "NeetRankUp" : "NDARankUp"} to claim. Eligibility is checked there.
        </p>
      </div>
    </div>
  );
}

/** Clickable top ticker. Hidden when no launch offer is active. */
export function LaunchOfferTicker() {
  const { offers, open } = useLaunchOffers();
  if (offers.length === 0) return null;
  const message = "Claim Your Free Test Now!";
  return (
    <button
      type="button"
      onClick={() => open()}
      aria-label="Claim Your Free Test Now! Open the launch offer"
      className="block w-full bg-primary text-primary-foreground transition-colors hover:bg-primary/95"
    >
      <span className="container-page flex items-center gap-3 py-2.5">
        <span className="marquee-pause min-w-0 flex-1 overflow-hidden">
          <span className="marquee-track">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span key={i} aria-hidden={i > 0} className="inline-flex items-center gap-2 whitespace-nowrap pr-12 text-xs font-semibold sm:text-sm">
                <Gift className="size-3.5 text-gold" aria-hidden="true" /> {message}
              </span>
            ))}
          </span>
        </span>
        <span className="shrink-0 rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground">Claim Free</span>
      </span>
    </button>
  );
}

/** Homepage hero button; renders only while an offer is active. */
export function LaunchOfferHeroButton({ className }: { className?: string }) {
  const { offers, open } = useLaunchOffers();
  if (offers.length === 0) return null;
  return (
    <button
      type="button"
      onClick={() => open()}
      className={cn(
        "btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-gold bg-gold/10 px-7 text-sm font-bold text-gold transition-colors hover:bg-gold hover:text-navy-deep",
        className,
      )}
    >
      <Gift className="size-4" aria-hidden="true" /> Claim Your Free Bundle Now
    </button>
  );
}
