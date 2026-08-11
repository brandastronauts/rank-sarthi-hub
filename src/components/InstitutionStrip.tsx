import { Reveal } from "@/components/Reveal";
import { institutions, institutionRelationship, institutionSlotCount } from "@/content/trust";

/**
 * Institutional logo strip. Renders real logos when supplied in
 * src/content/trust.ts, otherwise clearly marked development placeholders.
 * No slider, no autoplay, no invented institutions.
 */
export function InstitutionStrip() {
  const hasLogos = institutions.length > 0;
  const slots = hasLogos ? institutions : Array.from({ length: institutionSlotCount });

  return (
    <section aria-label="Institutions" className="border-b border-border bg-background py-14 sm:py-20">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {institutionRelationship}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {slots.map((slot, i) =>
              hasLogos ? (
                <li key={(slot as { name: string }).name} className="flex h-14 items-center justify-center">
                  <img
                    src={(slot as { logo: string }).logo}
                    alt={(slot as { name: string }).name}
                    loading="lazy"
                    className="max-h-10 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ) : (
                <li
                  key={i}
                  className="placeholder-slot flex h-14 items-center justify-center px-2 text-center leading-tight"
                >
                  [Real institution logo required]
                </li>
              ),
            )}
          </ul>
        </Reveal>

        {!hasLogos && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            We will only place a name or logo here once that relationship genuinely exists.
          </p>
        )}
      </div>
    </section>
  );
}
