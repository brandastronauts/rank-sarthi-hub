import { Reveal } from "@/components/Reveal";
import { howItWorksSteps } from "@/content/home";

/** B17 — Diagnostic journey. */
export function HowItWorks({ id = "how" }: { id?: string }) {
  return (
    <section id={id} className="bg-background py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">How it works</p>
          <h2 className="mt-4 text-display-lg text-primary">
            Choose. Diagnose. <span className="text-accent">Improve.</span>
          </h2>
        </Reveal>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {howItWorksSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} as="li">
              <div className="h-full rounded-lg border border-border p-5">
                <span className="font-display text-3xl font-bold text-secondary-foreground/20">
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
