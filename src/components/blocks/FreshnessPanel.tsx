import { formatFreshnessValue, isStaleLabel, type FreshDataRecord } from "@/content/freshness/panel";

/**
 * B45 — FreshnessWatch panel.
 *
 * Renders APPROVED monitored facts only, each with its owning authority,
 * checked date, verified date and status. Nothing is predicted; a value that
 * is not officially announced says exactly that.
 */
const STATUS_COPY: Record<string, string> = {
  NOT_ANNOUNCED: "Not officially announced",
  SOURCE_AVAILABLE: "Official source available",
  VERIFIED: "Verified against the official source",
  CHANGE_DETECTED: "An official update is under verification",
  REVIEW_REQUIRED: "An official update is under verification",
  STALE: "This value has not been reverified within its expected update window",
  VERIFICATION_REQUIRED:
    "Official source could not be rechecked. Confirm with the authority before acting.",
  WITHDRAWN: "The authority withdrew or replaced this resource",
};

export function FreshnessPanel({
  id = "freshness",
  heading = "Official status watch",
  intro,
  records = [],
  note,
}: {
  id?: string;
  heading?: string;
  intro?: string;
  records?: FreshDataRecord[];
  note?: string;
}) {
  if (!records.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      {intro ? <p className="mt-3 max-w-3xl text-ink/80">{intro}</p> : null}

      <ul className="mt-5 space-y-3">
        {records.map((r) => {
          const stale = isStaleLabel(r);
          return (
            <li key={r.id} className="rounded-xl border border-border bg-white p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-sm font-semibold text-primary">{r.fieldLabel}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-accent">
                  {r.exam} · {r.cycle}
                </p>
              </div>
              <p className="mt-2 text-base text-ink">{formatFreshnessValue(r.currentValue)}</p>
              <p className="mt-2 text-sm text-ink/80">{STATUS_COPY[r.status] ?? r.status}</p>
              {stale ? (
                <p className="mt-1 text-sm font-medium text-accent">{r.fallback.publicMessage}</p>
              ) : null}
              <p className="mt-2 text-xs text-muted-foreground">
                Authority: {r.sourceAuthority} · Last checked {r.lastChecked} · Last verified{" "}
                {r.lastVerified}
              </p>
              {r.fallback.actionState !== "HIDE" ? (
                <p className="mt-1 text-xs">
                  <a
                    href={r.sourceUrl}
                    rel="nofollow noopener"
                    target="_blank"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    Open the official source
                  </a>
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>

      {note ? <p className="mt-4 text-sm text-muted-foreground">{note}</p> : null}
    </section>
  );
}
