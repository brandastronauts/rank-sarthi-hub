import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getUrl } from "@/content/registry";
import type { AnnouncementCampaign } from "@/content/offers/campaign";

/**
 * Common JEE + NEET inaugural-offer strip. "View Offers" opens a small exam
 * choice instead of assuming one exam. Only built offer pages are offered.
 */
export function AnnouncementStrip({ campaign }: { campaign: AnnouncementCampaign }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const choices = campaign.choices.filter((c) => getUrl(c.href)?.buildStatus === "built");

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (choices.length === 0) return null;

  return (
    <aside aria-label={campaign.ariaLabel} className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col items-start gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <p className="min-w-0 break-words text-xs font-medium leading-snug sm:text-sm">{campaign.message}</p>
        <div ref={ref} className="relative shrink-0">
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="true"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {campaign.ctaLabel}
          </button>
          {open ? (
            <div className="absolute left-0 top-full z-40 mt-2 w-48 rounded-lg border border-border bg-background p-1.5 shadow-elevated sm:left-auto sm:right-0">
              {choices.map((c) => (
                <Link
                  key={c.exam}
                  to={c.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-secondary"
                >
                  {c.exam === "jee" ? "JEE Offers" : "NEET Offers"}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
