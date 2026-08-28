import { Reveal } from "@/components/Reveal";
import { institutions, institutionRelationship, reviewCircles } from "@/content/trust";

/**
 * Who has walked through the diagnostic engine with us. Real logos render when
 * supplied in src/content/trust.ts; until then we describe the kind of educator
 * honestly with monogram tiles — never an invented institution brand.
 */
export function InstitutionStrip({ id }: { id?: string }) {
  const hasLogos = institutions.length > 0;

  return (
    <section id={id} aria-label="Educator review circle" className="border-b border-border bg-background py-14 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-col items-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {institutionRelationship}
          </p>
          <div className="mt-5 w-20 rule-gold" />
        </Reveal>

        {hasLogos ? (
          <Reveal delay={120}>
            <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {institutions.map((inst) => (
                <li key={inst.name} className="flex h-14 items-center justify-center">
                  <img
                    src={inst.logo}
                    alt={inst.name}
                    loading="lazy"
                    className="max-h-10 w-auto opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        ) : (
          <ul className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewCircles.map((c, i) => (
              <Reveal key={c.label} delay={i * 70} as="li">
                <div className="card-lift flex h-full items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 hover:border-gold/50">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-gold/40 bg-gold/10 font-display text-[0.8125rem] font-bold tracking-tight text-gold">
                    {c.monogram}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold text-primary">{c.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{c.detail}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        )}

        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Named institutions and logos will appear here only once those partnerships are signed. Until then we
            describe the review circle exactly as it is.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
