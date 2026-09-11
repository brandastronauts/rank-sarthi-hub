import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { pricingPlans } from "@/content/home";

/** B21 — Pricing with monthly/annual toggle. */
export function PricingBlock({ id = "pricing" }: { id?: string }) {
  const [annual, setAnnual] = useState(false);
  const price = (m: number) => (m === 0 ? "₹0" : `₹${annual ? Math.round(m * 0.67) : m}`);

  return (
    <section id={id} className="section-pad border-y border-border bg-background">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-accent">Clear pricing</p>
            <h2 className="mt-5 text-display-lg text-primary">
              Start with diagnosis.
              <br />
              Upgrade when you need more.
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Begin free. Choose deeper analysis or guided support only when it becomes useful.
            </p>
          </Reveal>

          <Reveal>
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary p-1"
          >
            <button
              type="button"
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}
              className={`rounded-sm px-5 py-2 text-sm font-semibold transition-colors ${
                !annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={annual}
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-sm px-5 py-2 text-sm font-semibold transition-colors ${
                annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Annual
              <span className="bg-gold/20 px-2 py-0.5 text-[11px] font-bold text-gold">Save 33%</span>
            </button>
          </div>
          </Reveal>
        </div>

        <div className="mt-14 grid border border-border lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <div
                className={`relative flex h-full flex-col p-8 lg:p-10 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-elevated"
                    : "border-b border-border bg-card lg:border-b-0 lg:border-r last:lg:border-r-0"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-bold ${plan.popular ? "text-primary-foreground" : "text-primary"}`}>{plan.name}</h3>
                  {plan.popular && (
                    <span className="bg-accent px-3 py-1 text-[11px] font-bold uppercase text-accent-foreground">
                      Recommended
                    </span>
                  )}
                </div>
                <p className={`mt-1 text-sm ${plan.popular ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{plan.note}</p>
                <p className="mt-6 flex items-end gap-1">
                  <span className={`font-display text-4xl font-bold ${plan.popular ? "text-gold" : "text-primary"}`}>{price(plan.monthly)}</span>
                  <span className={`pb-1.5 text-sm ${plan.popular ? "text-primary-foreground/55" : "text-muted-foreground"}`}>
                    {plan.monthly === 0 ? "" : annual ? "/mo, billed annually" : "/mo"}
                  </span>
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.popular ? "text-primary-foreground/82" : "text-foreground/80"}`}>
                      <Check className={`mt-0.5 size-4 shrink-0 ${plan.popular ? "text-gold" : "text-accent"}`} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CtaLink
                  d={destinations.notYet(plan.cta, "This plan is not available yet.")}
                  className={`btn-press mt-8 block rounded-md px-5 py-3 text-center text-sm font-bold ${
                    plan.popular
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground hover:bg-navy-soft"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
