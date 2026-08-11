import { Reveal } from "@/components/Reveal";

const layers = [
  { l: "Your performance", d: "Everything begins with an attempted paper." },
  { l: "Score", d: "The number every other platform stops at." },
  { l: "Subject", d: "Where the loss is concentrated." },
  { l: "Chapter", d: "Which parts of the syllabus repeat as problems." },
  { l: "Topic", d: "The specific idea behind the mistake." },
  { l: "Question type", d: "The formats that consistently go wrong." },
  { l: "Error type", d: "Concept gap, application slip or misread." },
  { l: "Time & attempt behaviour", d: "Where minutes and attempts are spent." },
  { l: "Preparation priority", d: "What matters most right now." },
  { l: "Next action", d: "The specific thing to do tonight." },
];

export function ProductDepth() {
  return (
    <section className="section-pad bg-paleblue">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow text-accent">Beneath the score</p>
          <h2 className="mt-5 text-display-lg text-primary">Not another mock-test dashboard.</h2>
          <div className="mt-6 w-28 rule-gold" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Rank Sarthi is designed to look below the final number. Each layer narrows the question from
            &ldquo;how did I do?&rdquo; to &ldquo;what exactly do I do next?&rdquo;
          </p>
          <p className="mt-6 rounded-xl border border-dashed border-border bg-background px-5 py-4 text-sm text-muted-foreground">
            Layers reflect the diagnostic model. Availability of each layer depends on the exam and assessment
            type you attempt.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <ol className="relative space-y-1.5">
            {layers.map((ly, i) => (
              <li
                key={ly.l}
                className="group relative flex items-center gap-4 rounded-xl border border-border bg-background px-5 py-3.5 transition-colors hover:border-gold/60"
                style={{ marginInlineStart: `${Math.min(i, 6) * 10}px` }}
              >
                <span className="w-6 shrink-0 font-display text-xs font-bold text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-bold text-primary">{ly.l}</span>
                <span className="ml-auto hidden text-xs text-muted-foreground sm:block">{ly.d}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
