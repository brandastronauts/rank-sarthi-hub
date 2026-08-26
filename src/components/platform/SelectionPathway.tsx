import { Reveal } from "@/components/Reveal";
import type { PlatformData } from "@/content/types";

/**
 * B42 — Selection pathway (stage structure only).
 * No dates, vacancies, cutoffs, medical standards or selection statistics.
 */
export function SelectionPathway({ id = "pathway", platform }: { id?: string; platform: PlatformData }) {
  const stages = platform.pathway ?? [];
  if (!stages.length) return null;

  return (
    <section id={id} className="relative overflow-hidden bg-navy-deep py-20 text-primary-foreground sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40" />
      <div className="container-page relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">The pathway</p>
          <h2 className="mt-5 text-display-lg">Selection is a sequence, not a single paper.</h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/65">
            Understanding the whole journey changes how the written stage is prepared for.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 120} as="li">
              <div className="h-full border-t border-white/15 pt-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-full border border-gold/50 text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{stage.stage}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/65">{stage.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
