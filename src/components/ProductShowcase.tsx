import { Reveal } from "@/components/Reveal";
import { CycleSnapshot } from "@/components/platform/CycleSnapshot";
import type { PlatformData } from "@/content/types";
import { Clock, TrendingDown } from "lucide-react";


const weaknesses = [
  { concept: "Rotational Motion", subject: "Physics", lost: 6, pct: 82, bar: "bg-accent", fix: "Concept gap" },
  { concept: "Organic Reactions — Named", subject: "Chemistry", lost: 4, pct: 61, bar: "bg-nda", fix: "Error pattern" },
  { concept: "Definite Integrals", subject: "Maths", lost: 4, pct: 54, bar: "bg-jee", fix: "Time leak" },
  { concept: "Current Electricity", subject: "Physics", lost: 2, pct: 28, bar: "bg-neet", fix: "Priority action" },
];

const callouts = [
  { t: "Concept gap", b: "Where understanding repeatedly breaks." },
  { t: "Time leak", b: "Where too much exam time is being spent." },
  { t: "Error pattern", b: "Where avoidable mistakes keep repeating." },
  { t: "Priority action", b: "What deserves attention next." },
];

/**
 * B03 — product/state showcase slot.
 *
 * When a platform record carries a verified current-cycle snapshot, this slot
 * renders that factual table instead of the brand product visual. No product
 * screenshot is fabricated for a platform page.
 */
export function ProductShowcase({ id, platform }: { id?: string; platform?: PlatformData } = {}) {
  if (platform?.cycleSnapshot) return <CycleSnapshot id={id ?? "snapshot"} platform={platform} />;
  if (platform) return null;

  return (
    <section id="product" className="section-pad bg-paleblue">

      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Not just another score</p>
          <h2 className="mt-5 text-display-lg text-primary">
            A score tells you what happened.
            <br />
            Rank Sarthi tells you why.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Go beneath marks and percentages to understand the patterns affecting your performance.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-navy-gradient p-3 shadow-elevated sm:p-5">
            <div className="mb-3 flex items-center gap-1.5 px-2">
              <span className="size-2.5 rounded-full bg-white/25" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-white/20" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-white/15" aria-hidden="true" />
              <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
                Diagnostic report
              </span>
              <span className="ml-auto rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground/50">
                Illustrative view
              </span>
            </div>

            <div className="rounded-xl bg-card p-5 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
                <div>
                  <div className="flex flex-wrap items-end justify-between gap-4 rounded-xl border border-border bg-secondary p-5">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Full-length diagnostic · Attempt 14
                      </p>
                      <p className="mt-1.5 flex items-end gap-1.5">
                        <span className="font-display text-5xl font-bold leading-none text-primary">212</span>
                        <span className="pb-1.5 text-sm text-muted-foreground">/ 300</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-lg bg-neet/10 px-3 py-1.5 text-xs font-bold text-neet">
                        +18 vs previous attempt
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">
                        <Clock className="size-3.5" aria-hidden="true" /> 2h 54m
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                      <TrendingDown className="size-4 text-accent" aria-hidden="true" /> Where the marks went
                    </p>
                    <span className="text-xs font-semibold text-muted-foreground">16 marks recoverable</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {weaknesses.map((w) => (
                      <div key={w.concept} className="rounded-xl border border-border p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-primary">
                            {w.concept}
                            <span className="ml-2 text-xs font-medium text-muted-foreground">{w.subject}</span>
                          </p>
                          <span className="text-xs font-bold text-accent">{w.lost} marks lost</span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                            <div className={`h-full rounded-full ${w.bar}`} style={{ width: `${w.pct}%` }} />
                          </div>
                          <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                            {w.fix}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-secondary p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    What the report reads
                  </p>
                  <ul className="mt-5 space-y-5">
                    {callouts.map((c) => (
                      <li key={c.t} className="border-l-2 border-gold/70 pl-4">
                        <p className="text-sm font-bold text-primary">{c.t}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-xs text-muted-foreground">
            Interface shown is an illustrative diagnostic view, not a specific student&rsquo;s result.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
