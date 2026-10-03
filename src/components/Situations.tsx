import { Reveal } from "@/components/Reveal";

const scenarios = [
  {
    q: "My mock scores aren't moving.",
    a: "You may be revising weaknesses that are not causing the biggest loss. Diagnosis ranks gaps by the marks they cost.",
  },
  {
    q: "I know the chapter, but I still get questions wrong.",
    a: "The problem may be application or exam behaviour rather than understanding — which changes what to practise.",
  },
  {
    q: "I run out of time in every paper.",
    a: "Time is often lost on a few questions. Pace and attempt order show where the minutes go.",
  },
  {
    q: "I don't know what to revise tonight.",
    a: "Performance patterns become a clear priority, so a study session starts with a decision already made.",
  },
];

/** B11 — compact student situations (example scenarios, not testimonials). */
export function Situations({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-background py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Sound familiar?</p>
          <h2 className="mt-4 text-display-lg text-primary">Situations Rank Sarthi is designed for.</h2>
          <p className="mt-3 text-sm text-muted-foreground">Common preparation situations, not customer testimonials.</p>
        </Reveal>
        <ul className="-mx-4 mt-8 flex snap-x gap-3 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {scenarios.map((s) => (
            <li key={s.q} className="w-[80%] shrink-0 snap-start md:w-auto">
              <div className="h-full rounded-lg border border-border bg-card p-5">
                <p className="font-display text-base font-semibold text-primary">&ldquo;{s.q}&rdquo;</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
