import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { DiagnosticLauncher } from "@/components/acquisition/DiagnosticLauncher";
import { jeeTestSeriesPackages } from "@/content/offers/jee-test-series";
import { formatInr, neetPricing, neetTestSeriesPackages, NEET_OFFER_URL } from "@/content/offers/neet-test-series";
import { OFFER_URL as JEE_OFFER_URL } from "@/content/offers/campaign";
import type { OfferPackage } from "@/content/types";

/**
 * Lower-funnel JEE + NEET pricing tabs. Every plan is read from the approved
 * exam commercial sources; nothing is re-typed here.
 */
const tabs = {
  jee: {
    label: "JEE",
    accent: "text-jee",
    border: "border-jee",
    packages: jeeTestSeriesPackages,
    note: "All active inaugural JEE packages.",
    offer: destinations.page("View JEE Offers", JEE_OFFER_URL),
    compare: null,
  },
  neet: {
    label: "NEET",
    accent: "text-neet",
    border: "border-neet",
    packages: neetTestSeriesPackages,
    note: `Starter students can add an eligible test for ${formatInr(neetPricing.addOnTest)}.`,
    offer: destinations.page("View NEET Offers", NEET_OFFER_URL),
    compare: destinations.page("Compare NEET Plans", "/neet/pricing"),
  },
} as const;

type TabId = keyof typeof tabs;

function PlanCard({ plan, accent, border }: { plan: OfferPackage; accent: string; border: string }) {
  return (
    <article className={`flex w-[82%] shrink-0 snap-start flex-col rounded-lg border bg-background p-4 sm:p-5 md:w-auto ${plan.featured ? `${border} shadow-card` : "border-border"}`}>
      <p className={`text-xs font-bold uppercase ${accent}`}>{plan.badge ?? "Inaugural plan"}</p>
      <h3 className="mt-2 text-lg font-bold text-primary">{plan.name}</h3>
      <p className="mt-2 text-3xl font-extrabold text-primary">{plan.price}</p>
      {plan.options ? (
        <ul className="mt-4 space-y-2">
          {plan.options.map((o) => (
            <li key={o.label} className="flex items-baseline justify-between gap-3 text-sm text-foreground/75">
              <span>{o.label}{o.detail ? ` · ${o.detail}` : ""}</span>
              <span className="font-bold text-primary">{o.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-4 space-y-2">
          {(plan.includes ?? []).slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2 text-sm text-foreground/75">
              <Check className={`mt-0.5 size-4 shrink-0 ${accent}`} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function HomePricingTabs({ id }: { id?: string }) {
  const [active, setActive] = useState<TabId>("jee");
  const tab = tabs[active];

  return (
    <section id={id} className="border-y border-border bg-paleblue py-10 sm:py-20">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Inaugural offers 2026</p>
            <h2 className="mt-3 text-display-lg text-primary">Choose the plan that fits your preparation</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">{tab.note}</p>
          </div>
          <div role="tablist" aria-label="Choose exam" className="inline-flex self-start rounded-lg border border-border bg-background p-1">
            {(Object.keys(tabs) as TabId[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`pricing-tab-${key}`}
                aria-selected={active === key}
                aria-controls="pricing-panel"
                onClick={() => setActive(key)}
                className={`rounded-md px-5 py-2 text-sm font-bold transition-colors ${active === key ? "bg-primary text-primary-foreground" : "text-primary hover:bg-secondary"}`}
              >
                {tabs[key].label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${active}`}
          className={`-mx-5 mt-6 flex snap-x gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:overflow-visible md:px-0 ${tab.packages.length > 3 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}
        >
          {tab.packages.map((plan) => (
            <PlanCard key={plan.id} plan={plan} accent={tab.accent} border={tab.border} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <CtaLink d={tab.offer} className="btn-press inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">
            {tab.offer.label} <ArrowRight className="size-4" aria-hidden="true" />
          </CtaLink>
          {tab.compare ? (
            <CtaLink d={tab.compare} className="btn-press inline-flex items-center rounded-md border border-primary/25 bg-background px-5 py-3 text-sm font-bold text-primary">
              {tab.compare.label}
            </CtaLink>
          ) : null}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Inaugural / promotional prices. Availability, validity and attempt rules follow the terms shown at enrolment.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>Not sure which plan fits?</span>
          <DiagnosticLauncher ctaLocation="pricing" className="h-auto bg-transparent p-0 font-bold text-primary underline-offset-4 shadow-none hover:bg-transparent hover:underline" />
        </div>
      </div>
    </section>
  );
}
