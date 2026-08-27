import { Reveal } from "@/components/Reveal";
import { getSources } from "@/content/sources";
import type { PlatformData } from "@/content/types";

/**
 * B40 — Written-exam structure rail.
 * Renders official structure only, and always keeps the source note adjacent
 * to the facts it supports.
 */
export function PaperStructure({ id = "structure", platform }: { id?: string; platform: PlatformData }) {
  const papers = platform.papers ?? [];
  if (!papers.length) return null;
  const s = platform.structure;
  const refs = getSources(platform.sourceRefs ?? []);

  return (
    <section id={id} className="section-pad bg-ice">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">{s?.eyebrow ?? "Written examination"}</p>
          <h2 className="mt-5 text-display-lg text-primary">
            {s?.heading ?? "Two papers. Several different ways to lose marks."}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {s?.intro ??
              `${platform.productName} reads each paper as a set of abilities rather than a single score, because the fix for a concept gap is nothing like the fix for a timing gap.`}
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
                {(paper.marks || paper.duration) && (
                  <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                    {paper.marks && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Marks</dt>
                        <dd className="font-semibold text-primary">{paper.marks}</dd>
                      </div>
                    )}
                    {paper.duration && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Duration
                        </dt>
                        <dd className="font-semibold text-primary">{paper.duration}</dd>
                      </div>
                    )}
                  </dl>
                )}
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

        {s?.rules?.length ? (
          <Reveal delay={140}>
            <div className="mt-8 rounded-2xl border border-border bg-background p-7">
              <h3 className="text-lg font-bold text-primary">Official marking and exam rules</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.rules.map((rule) => (
                  <li key={rule} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        {s?.table?.rows.length ? (
          <Reveal delay={160}>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-2xl border border-border bg-background">
                <table className="w-full border-collapse text-left text-sm">
                  <caption className="border-b border-border px-6 py-5 text-left">
                    <span className="block text-lg font-bold text-primary">{s.table.heading}</span>
                    {s.table.caption && (
                      <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                        {s.table.caption}
                      </span>
                    )}
                  </caption>
                  <thead>
                    <tr className="bg-secondary">
                      <th scope="col" className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-primary">
                        {s.table.columns[0]}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wide text-primary"
                      >
                        {s.table.columns[1]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map(([area, share]) => (
                      <tr key={area} className="border-t border-border">
                        <th scope="row" className="px-6 py-3 text-sm font-medium text-ink/85">
                          {area}
                        </th>
                        <td className="px-6 py-3 text-right text-sm font-bold text-primary">{share}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {s.implications && (
                <div className="rounded-2xl border border-border bg-background p-7">
                  <h3 className="text-lg font-bold text-primary">{s.implications.heading}</h3>
                  <ul className="mt-4 space-y-3">
                    {s.implications.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        ) : null}

        {(platform.sourceStatus || refs.length > 0) && (
          <Reveal delay={200}>
            <div className="mt-10 max-w-3xl border-l-2 border-border pl-4">
              {platform.sourceStatus && (
                <p className="text-xs leading-relaxed text-muted-foreground">{platform.sourceStatus}</p>
              )}
              {refs.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {refs.map((ref) => (
                    <li key={ref.id} className="text-xs text-muted-foreground">
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener nofollow"
                        className="font-semibold text-primary underline underline-offset-4"
                      >
                        {ref.label}
                      </a>{" "}
                      — {ref.publisher}
                      {ref.lastVerified ? ` · checked ${ref.lastVerified}` : ""}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
