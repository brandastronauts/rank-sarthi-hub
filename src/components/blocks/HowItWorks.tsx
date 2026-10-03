import { Reveal } from "@/components/Reveal";
import { howItWorksSteps } from "@/content/home";

/** B17 — Diagnostic journey. */
export function HowItWorks({ id = "how" }: { id?: string }) {
  return (
    <section id={id} className="bg-background py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">How it works</p>
          <h2 className="mt-3 text-display-lg text-primary sm:mt-4">
            Choose. Diagnose. Understand. <span className="text-accent">Act.</span>
          </h2>
        </Reveal>
        <ol className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4 lg:grid-cols-4">
          {howItWorksSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} as="li">
              <div className="h-full rounded-lg border border-border p-3.5 sm:p-5">
                <span className="font-display text-lg font-bold text-secondary-foreground/25 sm:text-3xl">
                  {s.n}
                </span>
                <h3 className="mt-2 text-base font-bold text-primary sm:mt-4 sm:text-display-md">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:max-w-xs sm:text-sm">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
