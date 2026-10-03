import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { DiagnosticLauncher } from "@/components/acquisition/DiagnosticLauncher";

/** B24 — Closing conversion band. */
export function FinalCta({
  id = "cta",
  eyebrow = "Your next score shouldn’t be a surprise.",
  heading = "Know what’s holding your rank back.",
  body = "One diagnostic can show you where your preparation deserves attention next.",
  secondaryHref = "#product",
  secondaryLabel = "See how it works",
  footnote = "JeeRankUp • NeetRankUp • NDARankUp",
  platform,
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  footnote?: string;
  platform?: "jee" | "neet" | "nda";
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy-deep py-12 text-primary-foreground sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-accent" />
      <div className="container-page relative text-center">
        <Reveal>
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-none sm:mt-5 sm:text-5xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/70 sm:mt-6">{body}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-10">
            {platform ? (
              <CtaLink
                d={destinations.diagnostic("Take your first diagnostic", platform)}
                className="btn-press inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-elevated"
              />
            ) : (
              <DiagnosticLauncher
                ctaLocation="final_cta"
                className="min-h-12 bg-accent px-8 font-bold text-accent-foreground shadow-elevated hover:bg-red-hover"
              />
            )}
            <CtaLink
              d={destinations.nav(secondaryLabel, secondaryHref)}
              className="btn-press inline-flex items-center rounded-md border border-white/35 px-8 py-4 text-sm font-bold hover:bg-white/10"
            />
          </div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/45 sm:mt-10">
            {footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
