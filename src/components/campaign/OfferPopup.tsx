import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getUrl, isIndexable } from "@/content/registry";
import type { PopupCampaign } from "@/content/offers/campaign";

/**
 * Controlled exam-offer popup.
 * Shows at most once per browser session, after a short delay, and never
 * immediately on navigation. Dismissal is remembered in sessionStorage, so it
 * does not reopen while the student keeps browsing.
 */
export function OfferPopup({ campaign }: { campaign: PopupCampaign }) {
  const [open, setOpen] = useState(false);
  const href: string = campaign.href;
  const record = getUrl(href);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(campaign.sessionKey)) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(campaign.sessionKey, "shown");
      setOpen(true);
    }, campaign.delayMs);

    return () => window.clearTimeout(timer);
  }, [campaign.delayMs, campaign.sessionKey]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open || record?.buildStatus !== "built") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={"ariaLabel" in campaign ? campaign.ariaLabel : "JEE Test Series 2026 offer"}
      className="fixed inset-0 z-[70] flex items-end justify-center bg-primary/40 p-4 sm:items-center"
    >
      <div className="w-full max-w-sm rounded-2xl border border-border bg-white p-6 shadow-elevated">
        <div className="flex items-start justify-between gap-3">
          <p className="eyebrow text-accent">{campaign.eyebrow}</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="-mr-1 -mt-1 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Close
          </button>
        </div>

        <p className="mt-2 text-lg font-extrabold text-primary">{campaign.title}</p>
        <p className="mt-1 text-sm text-ink/80">{campaign.subtitle}</p>

        <ul className="mt-4 space-y-1.5">
          {campaign.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-ink/85">
              <span aria-hidden="true" className="mt-[2px] font-bold text-accent">
                •
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {campaign.priceLabel}
        </p>
        <p className="text-2xl font-extrabold text-primary">{campaign.price}</p>

        <Link
          to={href}
          rel={isIndexable(record) ? undefined : "nofollow"}
          onClick={() => setOpen(false)}
          className="btn-press mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {campaign.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
