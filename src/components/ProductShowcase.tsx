import { Reveal } from "@/components/Reveal";
import { ArrowRight, Clock, Sparkles, TrendingDown } from "lucide-react";

const weaknesses = [
  {
    concept: "Rotational Motion",
    subject: "Physics",
    lost: 6,
    pct: 82,
    bar: "bg-accent",
    fix: "40-question drill",
  },
  {
    concept: "Organic Reactions — Named",
    subject: "Chemistry",
    lost: 4,
    pct: 61,
    bar: "bg-nda",
    fix: "Mechanism revision",
  },
  {
    concept: "Definite Integrals",
    subject: "Maths",
    lost: 4,
    pct: 54,
    bar: "bg-jee",
    fix: "Timed 20-set",
  },
  {
    concept: "Current Electricity",
    subject: "Physics",
    lost: 2,
    pct: 28,
    bar: "bg-neet",
    fix: "Formula sheet",
  },
];

export function ProductShowcase() {
  return (
    <section id="showcase" className="relative overflow-hidden bg-secondary py-20 sm:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">The Product</p>
            <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
              See exactly why you lost each mark.
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A score is one number. Rank Sarthi breaks that number apart — every wrong answer traced to a concept,
              every concept ranked by the marks it cost you, and every weakness paired with a drill that fixes it.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-foreground/80">
              {[
                "Concept-level tagging on every single question",
                "Time-per-question benchmarked against ideal pacing",
                "Error type split: silly slip, formula gap or time pressure",
                "An auto-generated fix-list you can start the same evening",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            {/* Mockup of the AI diagnosis dashboard */}
            <div
              aria-hidden="true"
              className="rounded-3xl border border-border bg-navy-gradient p-3 shadow-elevated sm:p-4"
            >
              <div className="mb-3 flex items-center gap-1.5 px-2">
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
                  AI Diagnosis Report
                </span>
              </div>

              <div className="rounded-2xl bg-card p-4 sm:p-6">
                {/* Result header */}
                <div className="flex flex-wrap items-end justify-between gap-4 rounded-xl border border-border bg-secondary p-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      JEE Main Full Mock #14
                    </p>
                    <p className="mt-1 flex items-end gap-1.5">
                      <span className="font-display text-4xl font-extrabold leading-none text-primary">212</span>
                      <span className="pb-1 text-sm text-muted-foreground">/ 300</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-lg bg-neet/10 px-3 py-1.5 text-xs font-bold text-neet">
                      +18 vs last mock
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">
                      <Clock className="size-3.5" /> 2h 54m
                    </span>
                  </div>
                </div>

                {/* Weakness breakdown */}
                <div className="mt-5 flex items-center justify-between">
                  <p className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                    <TrendingDown className="size-4 text-accent" /> Weakness breakdown
                  </p>
                  <span className="text-xs font-semibold text-muted-foreground">16 marks recoverable</span>
                </div>

                <div className="mt-3 space-y-3">
                  {weaknesses.map((w) => (
                    <div key={w.concept} className="rounded-xl border border-border p-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-primary">
                          {w.concept}
                          <span className="ml-2 text-xs font-medium text-muted-foreground">{w.subject}</span>
                        </p>
                        <span className="text-xs font-bold text-accent">{w.lost} marks lost</span>
                      </div>
                      <div className="mt-2.5 flex items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                          <div className={`h-full rounded-full ${w.bar}`} style={{ width: `${w.pct}%` }} />
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold text-gold">
                          <Sparkles className="size-3" /> {w.fix}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-primary px-4 py-3.5">
                  <p className="text-xs font-semibold text-primary-foreground/80">
                    Your fix-list is ready — 3 chapters, 104 questions
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground">
                    Start drill <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Illustrative interface preview of the Rank Sarthi diagnosis report.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
