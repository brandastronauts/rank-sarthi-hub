import type { PyqRecord, TrendRecord } from "@/content/types";

/**
 * B33 — Paper / PYQ trend analysis.
 * Derives only what the supplied records literally state: the years covered
 * and the papers involved. No frequency, weightage or importance is inferred.
 */
export function PyqTrendAnalysis({
  id = "pyq-analysis",
  pyqs = [],
  trends = [],
  heading = "What the paper record shows",
}: {
  id?: string;
  pyqs?: PyqRecord[];
  trends?: TrendRecord[];
  heading?: string;
}) {
  if (!pyqs.length) return null;

  const years = [...new Set(pyqs.map((p) => p.year))].sort((a, b) => a - b);
  const papers = [...new Set(pyqs.map((p) => p.paper))];
  const window = years.length ? `${years[0]}–${years[years.length - 1]}` : "";

  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-display-md text-primary">{heading}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Stat label="Years covered" value={window} />
        <Stat label="Records loaded" value={String(pyqs.length)} />
        <Stat label="Papers referenced" value={String(papers.length)} />
      </div>

      <ol className="mt-6 flex flex-wrap gap-2" aria-label="Years with recorded appearances">
        {years.map((y) => (
          <li key={y} className="rounded-full bg-ice px-3 py-1 text-xs font-semibold text-primary">
            {y}
          </li>
        ))}
      </ol>

      <p className="mt-4 text-xs text-muted-foreground">
        This summary counts only the sourced records loaded above. It is not a weightage estimate; any
        weightage or trend claim appears separately with its own methodology and confidence.
        {trends.length ? "" : " No verified trend analysis has been loaded for this chapter yet."}
      </p>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-ivory p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-bold text-primary">{value}</p>
    </div>
  );
}
