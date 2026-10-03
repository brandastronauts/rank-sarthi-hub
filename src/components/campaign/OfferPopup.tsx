import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getUrl } from "@/content/registry";
import type { PopupCampaign } from "@/content/offers/campaign";

/**
 * Controlled exam-offer popup.
 * Shows at most once per browser session, after a short delay, and never
 * immediately on navigation. Dismissal is remembered in sessionStorage, so it
 * does not reopen while the student keeps browsing.
 */
export function OfferPopup({ campaign }: { campaign: PopupCampaign }) {
  const [open, setOpen] = useState(false);

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

  const choices = campaign.choices.filter((c) => getUrl(c.href)?.buildStatus === "built");
  if (!open || choices.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={campaign.ariaLabel}
      className="fixed inset-0 z-[70] flex items-end justify-center bg-primary/40 p-4 sm:items-center"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="w-full max-w-sm rounded-2xl border border-border bg-background p-6 shadow-elevated">
        <div className="flex items-start justify-between gap-3">
          <p className="eyebrow text-accent">Inaugural offers</p>
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
        <p className="mt-1 text-sm text-foreground/80">{campaign.subtitle}</p>
        <div className="mt-5 grid gap-2">
          {choices.map((c) => (
            <Link
              key={c.exam}
              to={c.href}
              onClick={() => setOpen(false)}
              className="btn-press inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {c.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-1 w-full rounded-lg px-5 py-2 text-sm font-semibold text-muted-foreground hover:text-primary"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
