import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { institutePoints } from "@/content/home";

/** B18 — Institute / B2B band. */
export function InstituteBand({ id = "institutes" }: { id?: string }) {
  const explore = destinations.notYet(
    "Explore Rank Sarthi for institutes",
    "This is not available yet.",
  );
  const demo = destinations.notYet("Request a demo", "This is not available yet.");

  return (
    <section id={id} className="section-pad bg-paleblue">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <p className="eyebrow text-accent">For institutes</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Know which student needs what — before the next test.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Rank Sarthi gives institutes a diagnostic layer above conventional test results, helping academic
            teams understand performance patterns across students and batches.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink
              d={explore}
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-navy-soft"
            >
              <span className="inline-flex items-center gap-2">
                Explore Rank Sarthi for institutes <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </CtaLink>
            <CtaLink
              d={demo}
              className="btn-press inline-flex items-center rounded-lg border border-border px-6 py-3.5 text-sm font-bold text-primary hover:bg-background"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="divide-y divide-border border-y border-border bg-background">
            {institutePoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3 px-6 py-5 text-sm font-semibold text-foreground/80">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
