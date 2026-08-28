import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    t: "Questions are written to be diagnosable",
    b: "Every item is tagged to a concept, a difficulty band and a likely error type, so a wrong answer can be explained rather than just counted.",
  },
  {
    t: "Papers follow the real exam blueprint",
    b: "Section structure, timing and marking follow the published exam pattern, because a diagnosis is only useful if the conditions are honest.",
  },
  {
    t: "Analysis is reviewed with academic logic",
    b: "Recommendations follow syllabus weightage and dependency between topics — not just whichever chapter had the most mistakes.",
  },
];

export function EducatorThinking({ id }: { id?: string }) {
  return (
    <section id={id} className="section-pad bg-ivory">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Human intelligence</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Technology finds the pattern.
            <br />
            Educator thinking shapes the advice.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our academic team is still being finalised, so we are not putting faces or credentials on this page
            yet. What we can show you is the thinking the product is built on.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {pillars.map((p2, i) => (
            <Reveal key={p2.t} delay={i * 100} className="bg-background">
              <div className="h-full p-8">
                <span className="font-display text-xs font-bold tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-base font-bold text-primary">{p2.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p2.b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-muted-foreground">
            Educator profiles will appear here once they are confirmed and verifiable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
