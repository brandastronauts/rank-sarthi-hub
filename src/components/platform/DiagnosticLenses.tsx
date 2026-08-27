import { Reveal } from "@/components/Reveal";
import type { PlatformData } from "@/content/types";

/**
 * B41 — Mock diagnosis: what a review must explain, plus the error taxonomy
 * that turns an observed mistake into the next preparation action.
 */
export function DiagnosticLenses({ id = "diagnosis", platform }: { id?: string; platform: PlatformData }) {
  const lenses = platform.diagnosticLenses ?? [];
  const taxonomy = platform.errorTaxonomy;
  if (!lenses.length && !taxonomy?.rows.length) return null;

  return (
    <section id={id} className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">The diagnosis</p>
          <h2 className="mt-5 text-display-lg text-primary">
            A mock score is the start of the review,
            <br />
            not the review.
          </h2>
        </Reveal>

        {lenses.length > 0 && (
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {lenses.map((lens, i) => (
              <Reveal key={lens.title} delay={i * 110}>
                <div className="flex h-full flex-col bg-background p-8">
                  <span className="font-display text-5xl font-bold leading-none tracking-tight text-secondary-foreground/12">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-display-md text-primary">{lens.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lens.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {taxonomy?.rows.length ? (
          <Reveal delay={140} className="mt-14">
            <h3 className="text-display-md text-primary">{taxonomy.heading ?? "Name the error before choosing the fix"}</h3>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-deep text-primary-foreground">
                    {taxonomy.columns.map((c) => (
                      <th key={c} scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-[0.14em]">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {taxonomy.rows.map((row) => (
                    <tr key={row.category} className="border-t border-border bg-background align-top">
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground">{row.signal}</td>
                      <th scope="row" className="px-5 py-4 text-sm font-bold text-primary">
                        {row.category}
                      </th>
                      <td className="px-5 py-4 leading-relaxed text-muted-foreground">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {taxonomy.note && (
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{taxonomy.note}</p>
            )}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
