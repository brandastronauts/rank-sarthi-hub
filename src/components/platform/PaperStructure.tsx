import { Reveal } from "@/components/Reveal";
import type { PlatformData } from "@/content/types";

/**
 * B40 — Paper / subject structure rail.
 * Structure only: no marks, durations, dates, eligibility or cutoffs.
 */
export function PaperStructure({ id = "structure", platform }: { id?: string; platform: PlatformData }) {
  const papers = platform.papers ?? [];
  if (!papers.length) return null;

  return (
    <section id={id} className="section-pad bg-ice">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Written examination</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Two papers. Several different ways to lose marks.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {platform.productName} reads each paper as a set of abilities rather than a single score, because the
            fix for a concept gap is nothing like the fix for a timing gap.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {papers.map((paper, i) => (
            <Reveal key={paper.id} delay={i * 120}>
              <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-5">
                  <h3 className="text-display-md text-primary">{paper.name}</h3>
                  <span className="font-display text-3xl font-bold text-gold/35">0{i + 1}</span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {paper.covers.map((c) => (
                    <li
                      key={c}
                      className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground/75"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                {paper.note && (
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{paper.note}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {platform.sourceStatus && (
          <Reveal delay={200}>
            <p className="mt-10 max-w-3xl border-l-2 border-border pl-4 text-xs leading-relaxed text-muted-foreground">
              {platform.sourceStatus}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
