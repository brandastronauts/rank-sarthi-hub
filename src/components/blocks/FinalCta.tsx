import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";

/** B24 — Closing conversion band. */
export function FinalCta({
  id = "cta",
  eyebrow = "Your next score shouldn’t be a surprise.",
  heading = "Know what’s holding your rank back.",
  body = "One diagnostic can show you where your preparation deserves attention next.",
  secondaryHref = "#product",
  secondaryLabel = "See how it works",
  footnote = "JeeRankUp • NeetRankUp • NDARankUp",
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  footnote?: string;
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy-gradient py-24 text-primary-foreground sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60" />
      <div className="container-page relative text-center">
        <Reveal>
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-display-lg">{heading}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/70">{body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink
              d={destinations.diagnostic("Take your first diagnostic")}
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-elevated"
            >
              <span className="inline-flex items-center gap-2">
                Take your first diagnostic <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </CtaLink>
            <a
              href={secondaryHref}
              className="btn-press inline-flex items-center rounded-lg border border-white/35 px-8 py-4 text-sm font-bold hover:bg-white/10"
            >
              {secondaryLabel}
            </a>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/45">
            {footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
