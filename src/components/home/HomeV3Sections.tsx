import { ArrowRight, Brain, Check, Repeat2, Timer } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { DiagnosticReportVisual, callouts, weaknesses } from "@/components/ProductShowcase";
import { cards as examCards } from "@/components/ExamTracks";
import { layers } from "@/components/ProductDepth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Homepage V3 compact sections. Each one reuses the content and visuals of an
 * earlier homepage section (B03, B05 v1, B06/B15, B09) in a shorter layout.
 * All figures are the existing labelled example values; nothing new is claimed.
 */

/** B59 — product showcase: text + example report side by side. */
export function HomeProductShowcase({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-background py-10 sm:py-20">
      <div className="container-page grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
        <Reveal>
          <p className="eyebrow text-accent">Not just another score</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">
            A score tells you what happened. Rank Sarthi tells you why.
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 sm:mt-6 sm:gap-x-4 sm:gap-y-4">
            {callouts.map((c) => (
              <li key={c.t} className="border-l-2 border-gold/70 pl-3">
                <p className="text-sm font-bold text-primary">{c.t}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.b}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <DiagnosticReportVisual compact />
          <p className="mt-2 text-xs text-muted-foreground sm:mt-3">
            Interface shown is an example diagnostic view, not a specific student&rsquo;s result.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const territories = [
  {
    icon: Brain,
    label: "Concept",
    human: "I don't actually understand this yet.",
    body: "Find the subjects, chapters and question types where conceptual gaps repeatedly cost marks.",
    tint: "text-jee",
  },
  {
    icon: Repeat2,
    label: "Execution",
    human: "I know this — so why do I still get it wrong?",
    body: "A wrong answer caused by a misread question needs a different fix than a missing concept.",
    tint: "text-accent",
  },
  {
    icon: Timer,
    label: "Exam strategy",
    human: "I'm losing marks because of how I attempt the paper.",
    body: "Pace, time allocation and question selection can hold the score back — not knowledge.",
    tint: "text-gold",
  },
];

/** B60 — why a score alone is not enough (restored "Marks are the outcome" idea). */
export function ScorePatterns({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-paleblue py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Why a score is not enough</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Marks are the outcome. Patterns are the problem.</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4">
            Three different reasons can sit behind the same score. Most preparation only addresses the first.
          </p>
        </Reveal>
        <ol className="-mx-4 mt-6 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mt-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {territories.map((t, i) => (
            <li key={t.label} className="w-[84%] shrink-0 snap-start md:w-auto">
              <div className="h-full rounded-lg border border-border bg-background p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-primary/40">0{i + 1}</span>
                  <t.icon className={`size-5 ${t.tint}`} aria-hidden="true" />
                  <span className="text-xs font-bold uppercase text-muted-foreground">{t.label}</span>
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-primary">&ldquo;{t.human}&rdquo;</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const examTabs = [
  ...examCards.map((c) => ({
    key: c.mark.toLowerCase(),
    tab: c.mark,
    exam: c.exam,
    line: c.line,
    points: c.points,
    split: c.split as { k: string; v: number }[] | undefined,
    bar: c.tint.bar,
    text: c.tint.text,
  })),
  {
    key: "nda",
    tab: "NDA",
    exam: "NDA",
    line: "Mathematics. GAT. Speed. Accuracy. Attempt strategy. Understand where marks are being lost and what deserves attention next.",
    points: [
      "Mathematics and GAT diagnostics",
      "Speed and accuracy patterns",
      "Attempt strategy analysis",
      "Section-level preparation priorities",
    ],
    split: undefined,
    bar: "bg-nda",
    text: "text-nda",
  },
];

/** B61 — JEE / NEET / NDA diagnostic examples (restored from exam tracks), as tabs. */
export function ExamExamples({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-background py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Different exam journeys</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Built around the exam you&rsquo;re preparing for.</h2>
        </Reveal>
        <Tabs defaultValue="jee" className="mt-6 sm:mt-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            {examTabs.map((t) => (
              <TabsTrigger key={t.key} value={t.key}>
                {t.tab}
              </TabsTrigger>
            ))}
          </TabsList>
          {examTabs.map((t) => (
            <TabsContent key={t.key} value={t.key} className="mt-3 sm:mt-4">
              <div className="grid gap-4 rounded-lg border border-border bg-card p-4 sm:gap-5 sm:p-7 md:grid-cols-2 md:gap-8">
                <div>
                  <p className={`text-xs font-bold uppercase ${t.text}`}>{t.exam}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:mt-3">{t.line}</p>
                  <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                    {t.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className={`mt-0.5 size-4 shrink-0 ${t.text}`} aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/$platform"
                    params={{ platform: t.key }}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent sm:mt-5"
                  >
                    {t.tab} preparation hub <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                {t.split ? (
                  <div className="rounded-lg border border-border bg-secondary/40 p-4">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Example mark-loss split
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {t.split.map((s) => (
                        <div key={s.k} className="flex items-center gap-3">
                          <span className="w-20 shrink-0 text-xs font-semibold text-foreground/70">{s.k}</span>
                          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10">
                            <span className={`block h-full rounded-full ${t.bar}`} style={{ width: `${s.v}%` }} />
                          </span>
                          <span className="w-9 shrink-0 text-right text-xs font-bold text-primary">{s.v}%</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-[0.7rem] text-muted-foreground">Example values, not a student result.</p>
                  </div>
                ) : (
                  <div className="rounded-lg border border-border bg-secondary/40 p-4">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Section split
                    </p>
                    <p className="mt-3 font-display text-lg font-bold text-primary">Mathematics + GAT</p>
                    <p className="mt-1 text-sm text-muted-foreground">Two papers, read separately and together.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

/** B62 — worked breakdown: the layers beneath the score (restored product depth). */
export function MarksBreakdown({ id }: { id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy-gradient py-10 text-primary-foreground sm:py-20">
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">Beneath the score</p>
          <h2 className="mt-3 text-display-lg sm:mt-4">Why did I lose marks, and what do I do next?</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/70 sm:mt-4">
            Each layer narrows the question from &ldquo;how did I do?&rdquo; to &ldquo;what exactly do I do next?&rdquo;
          </p>
        </Reveal>
        <ol className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-3 lg:grid-cols-5">
          {layers.map((ly, i) => (
            <li
              key={ly.l}
              className={`rounded-lg border p-2.5 sm:p-4 ${i >= 8 ? "border-gold/50 bg-white/10" : "border-white/10 bg-white/[0.04]"}`}
            >
              <span className="font-display text-xs font-bold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 text-sm font-semibold">{ly.l}</p>
              <p className="mt-1 text-xs leading-relaxed text-primary-foreground/60">{ly.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-primary-foreground/55">
          Layers reflect the diagnostic model. Availability of each layer depends on the exam and assessment type.
        </p>
      </div>
    </section>
  );
}

/** B63 — analysis proof: one example row traced from raw performance to action. */
export function AnalysisProof({ id }: { id?: string }) {
  const top = weaknesses[0]!;
  const steps = [
    { k: "Raw performance", v: "212 / 300", d: "Full-length diagnostic, example attempt." },
    { k: "Diagnosis", v: top.concept, d: `${top.subject} · ${top.fix} · ${top.lost} marks lost` },
    { k: "Priority", v: "Ranked first", d: "Gaps are ordered by the marks they cost, not treated equally." },
    { k: "Action", v: "Next study session", d: "Start with the gap costing the most marks, then re-measure." },
  ];
  return (
    <section id={id} className="bg-ivory py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">From result to plan</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Diagnosis. Priority. Action.</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4">
            One line from the example report, traced from raw performance to what to do next.
          </p>
        </Reveal>
        <ol className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.k} className="relative rounded-lg border border-border bg-background p-3.5 sm:p-5">
              <p className="text-xs font-bold uppercase text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {s.k}
              </p>
              <p className="mt-2 font-display text-base font-bold text-primary sm:mt-3 sm:text-lg">{s.v}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{s.d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-muted-foreground">Example values, not a specific student&rsquo;s result.</p>
      </div>
    </section>
  );
}
