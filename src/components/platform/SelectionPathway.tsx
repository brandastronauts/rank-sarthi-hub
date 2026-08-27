import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import type { PlatformData } from "@/content/types";

/**
 * B42 — Selection pathway (stage structure only).
 * Deep links inherit their registry state: built routes link, planned routes
 * remain visible but disabled.
 */
export function SelectionPathway({ id = "pathway", platform }: { id?: string; platform: PlatformData }) {
  const stages = platform.pathway ?? [];
  if (!stages.length) return null;
  const copy = platform.pathwayIntro;

  return (
    <section id={id} className="relative overflow-hidden bg-navy-deep py-20 text-primary-foreground sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40" />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">The pathway</p>
          <h2 className="mt-5 text-display-lg">
            {copy?.heading ?? "Selection is a sequence, not a single paper."}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/65">
            {copy?.body ?? "Understanding the whole journey changes how the written stage is prepared for."}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 110} as="li">
              <div className="flex h-full flex-col border-t border-white/15 pt-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-full border border-gold/50 text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{stage.stage}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/65">{stage.body}</p>
                {stage.links?.length ? (
                  <ul className="mt-5 space-y-2">
                    {stage.links.map((link) => (
                      <li key={link.url}>
                        <CtaLink
                          d={destinations.nav(link.label, link.url)}
                          className="inline-flex rounded-md border border-white/20 px-3 py-1.5 text-xs font-semibold text-primary-foreground/85 hover:bg-white/10"
                        >
                          {link.label}
                        </CtaLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
