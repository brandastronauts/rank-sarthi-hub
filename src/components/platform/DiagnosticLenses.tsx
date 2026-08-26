import { Reveal } from "@/components/Reveal";
import type { PlatformData } from "@/content/types";

/** B41 — Exam-specific diagnostic lenses (concept / execution / strategy). */
export function DiagnosticLenses({ id = "diagnosis", platform }: { id?: string; platform: PlatformData }) {
  const lenses = platform.diagnosticLenses ?? [];
  if (!lenses.length) return null;

  return (
    <section id={id} className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">The diagnosis</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Three reasons a mark is lost.
            <br />
            They are never the same problem.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {lenses.map((lens, i) => (
            <Reveal key={lens.title} delay={i * 110}>
              <div className="flex h-full flex-col bg-background p-8">
                <span className="font-display text-5xl font-bold leading-none tracking-tight text-secondary-foreground/12">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-display-md text-primary">{lens.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lens.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
