import { Brain, Repeat2, Timer } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const territories = [
  {
    icon: Brain,
    label: "Concept",
    human: "I don't actually understand this yet.",
    body: "Identify the subjects, chapters and question types where conceptual gaps repeatedly affect performance — and how much each one is costing.",
    tint: "text-jee",
    bar: "bg-jee",
  },
  {
    icon: Repeat2,
    label: "Execution",
    human: "I know this — so why do I still get it wrong?",
    body: "Separate knowledge gaps from application errors. A wrong answer caused by a misread question needs a different fix than a missing concept.",
    tint: "text-accent",
    bar: "bg-accent",
  },
  {
    icon: Timer,
    label: "Exam strategy",
    human: "I'm losing marks because of how I attempt the paper.",
    body: "Look at pace, time allocation and question selection to understand where attempt behaviour — not knowledge — is holding the score back.",
    tint: "text-gold",
    bar: "bg-gold",
  },
];

export function DiagnosticIdea() {
  return (
    <section id="diagnosis" className="section-pad bg-background">
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
            Rank Sarthi looks at three territories behind every score. Most preparation only ever addresses the
            first one.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {territories.map((t, i) => (
            <Reveal key={t.label} delay={i * 110} className="bg-card">
              <div className="relative h-full p-8 lg:p-10">
                <span className={`absolute inset-x-0 top-0 h-0.5 ${t.bar}`} aria-hidden="true" />
                <t.icon className={`size-7 ${t.tint}`} aria-hidden="true" />
                <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {t.label}
                </h3>
                <p className="mt-3 text-display-md text-primary">&ldquo;{t.human}&rdquo;</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
