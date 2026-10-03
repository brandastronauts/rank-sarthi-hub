import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import {
  formatInr,
  neetPricing,
  neetTestSeriesPackages,
} from "@/content/offers/neet-test-series";

/** Compact lower-funnel pricing preview; full comparison stays on /neet/pricing. */
export function NeetPricingPreview({ id }: { id?: string }) {
  return (
    <section id={id} className="border-y border-border bg-paleblue py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-neet">NEET inaugural pricing</p>
            <h2 className="mt-3 text-display-lg text-primary">Choose how much practice you need.</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Promotional plans start at {formatInr(neetPricing.starter)}. Starter students can add an eligible test for {formatInr(neetPricing.addOnTest)}.
            </p>
          </div>
          <p className="text-xs font-semibold uppercase text-muted-foreground">Inaugural / Promotional</p>
        </Reveal>

        <div className="-mx-5 mt-6 flex snap-x gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {neetTestSeriesPackages.map((plan) => (
              <article key={plan.id} className={`flex w-[82%] shrink-0 snap-start flex-col rounded-lg border bg-background p-4 sm:p-5 md:w-auto ${plan.featured ? "border-neet shadow-card" : "border-border"}`}>
                <p className="text-xs font-bold uppercase text-neet">{plan.badge ?? "NEET plan"}</p>
                <h3 className="mt-2 text-lg font-bold text-primary">{plan.name}</h3>
                <p className="mt-2 text-3xl font-extrabold text-primary">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {(plan.includes ?? []).slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-foreground/75">
                      <Check className="mt-0.5 size-4 shrink-0 text-neet" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <CtaLink d={destinations.page("View NEET Offers", "/neet/mock-tests")} className="btn-press inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">
            View NEET Offers <ArrowRight className="size-4" aria-hidden="true" />
          </CtaLink>
          <CtaLink d={destinations.pricing("neet")} className="btn-press inline-flex items-center rounded-md border border-primary/25 bg-background px-5 py-3 text-sm font-bold text-primary">
            Compare Plans
          </CtaLink>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Promotional benefits, availability, validity and attempt rules follow the terms shown at enrolment.</p>
      </div>
    </section>
  );
}