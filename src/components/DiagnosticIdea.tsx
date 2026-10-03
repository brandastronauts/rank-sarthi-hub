import { Brain, ListChecks, Repeat2, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const territories = [
  {
    icon: Brain,
    label: "Weak concepts",
    human: "Find what is breaking down.",
    body: "See the subjects, chapters and question types where gaps repeatedly cost marks.",
    tint: "text-jee",
    rule: "bg-jee",
  },
  {
    icon: Repeat2,
    label: "Error type",
    human: "Know why an answer went wrong.",
    body: "Separate missing knowledge from misreads, calculation slips and application errors.",
    tint: "text-accent",
    rule: "bg-accent",
  },
  {
    icon: Target,
    label: "Priorities",
    human: "Focus on what matters next.",
    body: "Rank gaps by the marks they cost instead of treating every weakness equally.",
    tint: "text-gold",
    rule: "bg-gold",
  },
  {
    icon: ListChecks,
    label: "Next action",
    human: "Turn the result into a clear plan.",
    body: "Leave the diagnostic knowing what deserves attention in your next study session.",
    tint: "text-neet",
    rule: "bg-neet",
  },
];

export function DiagnosticIdea({ id }: { id?: string }) {
  return (
    <section id={id ?? "diagnosis"} className="bg-paleblue py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">What you get</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">Know exactly where you&rsquo;re losing marks.</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-4">
            Go beyond the score and turn each attempt into clearer priorities.
          </p>
        </Reveal>

        <ol className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 lg:grid-cols-4">
          {territories.map((t, i) => (
            <Reveal key={t.label} delay={i * 120} as="li">
              <div className="h-full rounded-lg border border-border bg-background p-3.5 sm:p-5">
                  <div className="flex items-center gap-3">
                    <t.icon className={`size-5 ${t.tint}`} aria-hidden="true" />
                    <span className="text-xs font-bold uppercase text-muted-foreground">
                      {t.label}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-bold text-primary sm:mt-4 sm:text-lg">{t.human}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
