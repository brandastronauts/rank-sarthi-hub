import { Reveal } from "@/components/Reveal";
import { howItWorksSteps } from "@/content/home";

/** B17 — Three-step process band. */
export function HowItWorks({ id = "how" }: { id?: string }) {
  return (
    <section id={id} className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">How it works</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Test. Diagnose. <span className="text-accent">Improve.</span>
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {howItWorksSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} as="li">
              <div className="border-t border-border pt-6">
                <span className="font-display text-5xl font-bold tracking-tight text-secondary-foreground/15">
                  {s.n}
                </span>
                <h3 className="mt-4 text-display-md text-primary">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
