import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { platformOrigins } from "@/content/site";
import { getPlatform } from "@/content/platforms";
import { buildRankUpHandoff } from "@/lib/acquisition";
import { emitAcquisitionEvent } from "@/lib/acquisition-analytics";

const tint: Record<"jee" | "neet" | "nda", { text: string; bar: string; chip: string }> = {
  jee: { text: "text-jee", bar: "bg-jee", chip: "bg-jee/10 text-jee" },
  neet: { text: "text-neet", bar: "bg-neet", chip: "bg-neet/10 text-neet" },
  nda: { text: "text-nda", bar: "bg-nda", chip: "bg-nda/15 text-nda" },
};

const platformSlugs = ["jee", "neet", "nda"] as const;

/**
 * The generic, exam-agnostic "Take a diagnostic" destination (site header,
 * homepage). Each exam's diagnostic engine lives on its own sub-portal, so
 * this page's job is only to route the visitor to the right one.
 */
export function DiagnosticChooser() {
  const cards = platformSlugs.map((slug) => ({ slug, platform: getPlatform(slug) })).filter((c) => c.platform);

  return (
    <section className="section-pad bg-background pt-32">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Take a diagnostic</p>
          <h1 className="mt-5 text-display-lg text-primary">Which exam are you preparing for?</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            JeeRankUp, NeetRankUp and NDARankUp are each a dedicated product with its own diagnostic engine. Pick
            your exam to continue there.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ slug, platform }, i) => (
            <Reveal key={slug} delay={i * 100} as="article">
              <div className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <span className={`block h-1 w-full ${tint[slug].bar}`} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-7">
                  <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${tint[slug].chip}`}>
                    {platform!.examName}
                  </span>
                  <h2 className="mt-5 font-display text-xl font-bold text-primary">{platform!.productName}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{platform!.tagline}</p>
                  <a
                    href={buildRankUpHandoff({ exam: slug, entryPath: "/diagnostic", cta: "diagnostic_page" })}
                    rel="noopener noreferrer"
                    onClick={() => {
                      const properties = {
                        exam: slug,
                        entry_path: window.location.pathname,
                        cta: "diagnostic_page",
                        destination_origin: platformOrigins[slug],
                      };
                      emitAcquisitionEvent("exam_selected", properties);
                      emitAcquisitionEvent("rankup_handoff", properties);
                    }}
                    className="btn-press mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-navy-soft"
                  >
                    <span className="inline-flex items-center gap-2">
                      Go to {platform!.productName} <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
