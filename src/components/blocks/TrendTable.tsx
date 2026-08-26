import type { TrendRecord } from "@/content/types";

/**
 * B27 — Weightage / trend table.
 * Every row must carry its analysis window, methodology, confidence and at
 * least one source reference; unsourced trend claims are not renderable.
 */
export function TrendTable({
  id = "trends",
  trends = [],
  heading = "Weightage and trend signals",
}: {
  id?: string;
  trends?: TrendRecord[];
  heading?: string;
}) {
  const rows = trends.filter((t) => t.sourceRefs?.length);
  if (!rows.length) return null;

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <ul className="mt-5 space-y-3">
        {rows.map((t) => (
          <li key={t.label} className="rounded-xl border border-border bg-white p-4 md:p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-bold text-primary">{t.label}</p>
              <p className="text-lg font-bold text-accent">{t.value}</p>
            </div>
            <dl className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
              <div>
                <dt className="font-semibold uppercase tracking-wide">Analysis window</dt>
                <dd>{t.analysisWindow}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide">Confidence</dt>
                <dd className="capitalize">{t.confidence}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold uppercase tracking-wide">Methodology</dt>
                <dd>{t.methodology}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold uppercase tracking-wide">Sources</dt>
                <dd>{t.sourceRefs.join(", ")}</dd>
              </div>
              {t.lastVerified ? (
                <div className="sm:col-span-2">
                  <dt className="font-semibold uppercase tracking-wide">Last verified</dt>
                  <dd>{t.lastVerified}</dd>
                </div>
              ) : null}
            </dl>
          </li>
        ))}
      </ul>
    </section>
  );
}
