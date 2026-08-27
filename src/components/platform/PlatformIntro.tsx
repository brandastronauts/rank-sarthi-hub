import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/content/RichText";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import type { PlatformData } from "@/content/types";

/**
 * B39 — Platform positioning statement plus task-based routing.
 *
 * Every destination resolves through the registry: built routes are links,
 * planned routes render as visible but disabled items. Nothing becomes a
 * dead link and nothing is silently dropped from the information architecture.
 */
export function PlatformIntro({ id = "positioning", platform }: { id?: string; platform: PlatformData }) {
  const groups = platform.taskGroups ?? [];
  if (!platform.intro.length && !groups.length) return null;

  return (
    <section id={id} className="section-pad bg-background">
      <div className="container-page">
        <span id="start-your-nda-plan" className="block scroll-mt-28" aria-hidden="true" />

        {platform.intro.length > 0 && (
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
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
        )}

        {groups.length > 0 && (
          <>
            <Reveal className="mt-20 max-w-3xl">
              <p className="eyebrow text-accent">Start here</p>
              <h2 className="mt-5 text-display-lg text-primary">
                Start from the part of the {platform.slug.toUpperCase()} process you are actually facing.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {groups.map((group, i) => (
                <Reveal key={group.id} delay={i * 90}>
                  <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-ivory p-7">
                    <h3 className="text-lg font-bold text-primary">{group.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.body}</p>
                    <ul className="mt-6 space-y-2">
                      {group.links.map((link) => (
                        <li key={link.url}>
                          <CtaLink
                            d={destinations.nav(link.label, link.url)}
                            className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-primary"
                          >
                            <span className="inline-flex w-full items-center justify-between gap-3">
                              {link.label}
                              <ArrowUpRight className="size-4 shrink-0 text-accent" aria-hidden="true" />
                            </span>
                          </CtaLink>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Greyed items are pages that exist in the {platform.slug.toUpperCase()} plan but are not published yet.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
