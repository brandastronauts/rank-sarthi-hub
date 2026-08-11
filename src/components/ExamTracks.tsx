import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { placeholder as p } from "@/components/nav-data";
import ndaAspirant from "@/assets/nda-aspirant.jpg";

const cards = [
  {
    name: "JeeRankUp",
    exam: "JEE Main & Advanced",
    line: "Turn mock-test performance into clearer preparation priorities across Physics, Chemistry and Mathematics.",
    points: ["Subject and chapter-level gaps", "Repeated error patterns", "Time allocation across sections"],
    tint: { text: "text-jee", bar: "bg-jee", chip: "bg-jee/10 text-jee", hover: "hover:border-jee/50" },
  },
  {
    name: "NeetRankUp",
    exam: "NEET UG",
    line: "Understand where marks are leaking across Physics, Chemistry and Biology — before another mock repeats the same pattern.",
    points: ["Accuracy across high-volume sections", "Subject-level balance", "Repeated error patterns"],
    tint: { text: "text-neet", bar: "bg-neet", chip: "bg-neet/10 text-neet", hover: "hover:border-neet/50" },
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
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 110} as="article">
              <div
                className={`card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-10 ${c.tint.hover}`}
              >
                <span className={`absolute inset-x-0 top-0 h-0.5 ${c.tint.bar}`} aria-hidden="true" />
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${c.tint.chip}`}>{c.exam}</span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-primary">{c.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.line}</p>
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
            </Reveal>
          ))}
        </div>

        {/* NDA feature panel */}
        <Reveal delay={140} className="mt-6" as="article">
          <div className="relative grid overflow-hidden rounded-2xl border border-gold/40 bg-navy-gradient text-primary-foreground shadow-elevated lg:grid-cols-[1.1fr_0.9fr]">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-gold" aria-hidden="true" />
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
