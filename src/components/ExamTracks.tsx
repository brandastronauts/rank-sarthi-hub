import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { placeholder as p } from "@/components/nav-data";
import ndaAspirant from "@/assets/nda-aspirant.jpg";

const cards = [
  {
    name: "JeeRankUp",
    mark: "JEE",
    exam: "JEE Main & Advanced",
    subjects: ["Physics", "Chemistry", "Maths"],
    line: "Turn mock-test performance into clearer preparation priorities across Physics, Chemistry and Mathematics.",
    points: ["Subject and chapter-level gaps", "Repeated error patterns", "Time allocation across sections"],
    split: [
      { k: "Concept", v: 46 },
      { k: "Execution", v: 33 },
      { k: "Strategy", v: 21 },
    ],
    tint: {
      text: "text-jee",
      bar: "bg-jee",
      chip: "bg-jee/10 text-jee",
      hover: "hover:border-jee/50",
      wash: "from-jee/12",
      mark: "text-jee/8",
    },
  },
  {
    name: "NeetRankUp",
    mark: "NEET",
    exam: "NEET UG",
    subjects: ["Physics", "Chemistry", "Biology"],
    line: "Understand where marks are leaking across Physics, Chemistry and Biology — before another mock repeats the same pattern.",
    points: ["Accuracy across high-volume sections", "Subject-level balance", "Repeated error patterns"],
    split: [
      { k: "Concept", v: 38 },
      { k: "Execution", v: 41 },
      { k: "Strategy", v: 21 },
    ],
    tint: {
      text: "text-neet",
      bar: "bg-neet",
      chip: "bg-neet/10 text-neet",
      hover: "hover:border-neet/50",
      wash: "from-neet/12",
      mark: "text-neet/8",
    },
  },
];

export function ExamTracks() {
  return (
    <section id="platforms" className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">One intelligence system. Different exam journeys.</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Built around the exam you&rsquo;re actually preparing for.
          </h2>
          <div className="mt-6 w-28 rule-gold" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 110} as="article">
              <div
                className={`card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card ${c.tint.hover}`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 origin-left transition-transform duration-500 group-hover:h-1 ${c.tint.bar}`}
                  aria-hidden="true"
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-6 -top-8 select-none font-display text-[7rem] font-bold leading-none tracking-tighter ${c.tint.mark}`}
                >
                  {c.mark}
                </span>

                <div className={`bg-gradient-to-b ${c.tint.wash} to-transparent px-8 pb-6 pt-8 lg:px-10`}>
                  <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${c.tint.chip}`}>{c.exam}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-primary">{c.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.subjects.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border bg-background/70 px-2.5 py-1 text-[0.7rem] font-semibold text-muted-foreground transition-colors duration-300 group-hover:border-current group-hover:text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-1 flex-col px-8 pb-8 lg:px-10 lg:pb-10">
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.line}</p>

                  <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-4">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Illustrative mark-loss split
                    </p>
                    <div className="mt-3 space-y-2.5">
                      {c.split.map((s) => (
                        <div key={s.k} className="flex items-center gap-3">
                          <span className="w-20 shrink-0 text-[0.7rem] font-semibold text-foreground/70">{s.k}</span>
                          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10">
                            <span
                              className={`block h-full rounded-full ${c.tint.bar} opacity-80 transition-[width] duration-700`}
                              style={{ width: `${s.v}%` }}
                            />
                          </span>
                          <span className="w-9 shrink-0 text-right text-[0.7rem] font-bold text-primary">
                            {s.v}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className={`mt-0.5 size-4 shrink-0 ${c.tint.text}`} aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={p(c.name)}
                    className="btn-press mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-navy-soft"
                  >
                    Explore {c.name} <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* NDA feature panel */}
        <Reveal delay={140} className="mt-6" as="article">
          <div className="relative grid overflow-hidden rounded-2xl border border-gold/40 bg-navy-gradient text-primary-foreground shadow-elevated lg:grid-cols-[1.1fr_0.9fr]">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gold" aria-hidden="true" />
            <span className="absolute right-0 top-0 z-10 rounded-bl-xl bg-gold px-4 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-navy-deep">
              Flagship track
            </span>
            <div className="p-8 lg:p-12">
              <p className="eyebrow text-gold">NDA RankUp</p>
              <h3 className="mt-5 text-display-md sm:text-3xl">
                AI-powered preparation built around the NDA journey.
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/70">
                Mathematics. GAT. Speed. Accuracy. Attempt strategy. Rank Sarthi helps NDA aspirants understand
                where marks are being lost and what deserves attention next.
              </p>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Mathematics and GAT diagnostics",
                  "Speed and accuracy patterns",
                  "Attempt strategy analysis",
                  "Section-level preparation priorities",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-primary-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {[
                  { v: "2", l: "Papers analysed" },
                  { v: "Maths + GAT", l: "Section split" },
                  { v: "SSB-aware", l: "Preparation path" },
                ].map((s) => (
                  <div key={s.l}>
                    <dd className="font-display text-lg font-bold text-gold">{s.v}</dd>
                    <dt className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-primary-foreground/60">
                      {s.l}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={p("NDARankUp")}
                  className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-accent-foreground"
                >
                  Explore NDA RankUp <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={p("NDA diagnostic")}
                  className="btn-press inline-flex items-center rounded-lg border border-white/35 px-6 py-3 text-sm font-bold hover:bg-white/10"
                >
                  Take NDA diagnostic
                </a>
              </div>
            </div>
            <div className="relative min-h-64">
              <img
                src={ndaAspirant}
                alt="An NDA aspirant studying at a desk in early morning light"
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 size-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/50 to-navy-deep/20"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
