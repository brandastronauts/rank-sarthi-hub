import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/content/RichText";
import type { PlatformData } from "@/content/types";

/** B39 — Platform positioning statement (editorial, two-column). */
export function PlatformIntro({ id = "positioning", platform }: { id?: string; platform: PlatformData }) {
  if (!platform.intro.length) return null;

  return (
    <section id={id} className="section-pad bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
        <Reveal>
          <p className="eyebrow text-accent">The idea</p>
          <h2 className="mt-5 text-display-md text-primary">
            One intelligence system,
            <br />
            read through {platform.slug.toUpperCase()}.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="max-w-2xl border-l-2 border-gold/60 pl-6 text-lg leading-relaxed text-foreground/80 sm:pl-8">
            <RichText nodes={platform.intro} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
