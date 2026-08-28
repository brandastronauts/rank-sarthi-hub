import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";


const scenarios = [
  {
    q: "My mock scores aren't moving.",
    a: "You may be working hard but repeatedly revising weaknesses that are not causing the biggest performance loss. Diagnosis ranks gaps by the marks they actually cost.",
  },
  {
    q: "I know the chapter, but I still get questions wrong.",
    a: "The problem may be application, execution or exam behaviour rather than understanding. Separating the two changes what you should practise next.",
  },
  {
    q: "I run out of time in every paper.",
    a: "Time is often lost on a small number of questions. Looking at pace and attempt order shows where the minutes are actually going.",
  },
  {
    q: "I don't know what to revise tonight.",
    a: "Rank Sarthi converts performance patterns into a clear preparation priority, so a study session starts with a decision already made.",
  },
];

export function Situations({ id }: { id?: string }) {
  return (
    <section id={id} className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Example scenarios</p>
          <h2 className="mt-5 text-display-lg text-primary">Situations Rank Sarthi is designed for.</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            These are illustrative preparation situations, not customer testimonials.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {scenarios.map((s, i) => (
            <Reveal key={s.q} delay={i * 90}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <span className="w-fit rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                  Example scenario
                </span>
                <p className="mt-5 font-display text-xl font-semibold tracking-tight text-primary">
                  &ldquo;{s.q}&rdquo;
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.a}</p>
                <a
                  href="#idea"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-accent transition-all hover:gap-3"
                >
                  See how diagnosis helps <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
