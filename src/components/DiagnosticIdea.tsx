import { Brain, Repeat2, Timer } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const territories = [
  {
    icon: Brain,
    label: "Concept",
    human: "I don't actually understand this yet.",
    body: "Identify the subjects, chapters and question types where conceptual gaps repeatedly affect performance — and how much each one is costing.",
    tint: "text-jee",
    rule: "bg-jee",
  },
  {
    icon: Repeat2,
    label: "Execution",
    human: "I know this — so why do I still get it wrong?",
    body: "Separate knowledge gaps from application errors. A wrong answer caused by a misread question needs a different fix than a missing concept.",
    tint: "text-accent",
    rule: "bg-accent",
  },
  {
    icon: Timer,
    label: "Exam strategy",
    human: "I'm losing marks because of how I attempt the paper.",
    body: "Look at pace, time allocation and question selection to understand where attempt behaviour — not knowledge — is holding the score back.",
    tint: "text-gold",
    rule: "bg-gold",
  },
];

export function DiagnosticIdea({ id }: { id?: string }) {
  return (
    <section id={id ?? "diagnosis"} className="section-pad bg-paleblue">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">The core idea</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Marks are the outcome.
            <br />
            Patterns are the problem.
          </h2>
          <div className="mt-6 w-28 rule-gold" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Rank Sarthi reads three territories behind every score. Most preparation only ever addresses the
            first one.
          </p>
        </Reveal>

        <ol className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute left-[1.6rem] top-6 bottom-6 hidden w-px bg-gradient-to-b from-jee/40 via-accent/40 to-gold/50 md:block"
          />
          {territories.map((t, i) => (
            <Reveal key={t.label} delay={i * 120} as="li">
              <div className="group relative grid gap-6 border-t border-primary/10 py-10 md:grid-cols-[3.2rem_1fr_22rem] md:items-start md:gap-10">
                <span
                  className={`relative z-10 font-display text-3xl font-bold tracking-tight text-primary/25 transition-colors duration-300 group-hover:text-primary/60`}
                >
                  0{i + 1}
                </span>

                <div className="relative md:pl-8">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1 hidden h-full w-0.5 origin-top scale-y-0 rounded-full transition-transform duration-500 group-hover:scale-y-100 md:block ${t.rule}`}
                  />
                  <div className="flex items-center gap-3">
                    <t.icon className={`size-5 ${t.tint}`} aria-hidden="true" />
                    <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                      {t.label}
                    </span>
                  </div>
                  <p className="mt-4 text-display-editorial text-primary">&ldquo;{t.human}&rdquo;</p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground md:pt-10">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
