import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { getUrl } from "@/content/registry";
import type { PlatformData } from "@/content/types";

/**
 * B43 — Contextual internal linking rail.
 * Only registry URLs whose buildStatus is "built" become links; everything
 * else is omitted. Nothing here can point at a thin or unbuilt route.
 */
export function PlatformLinks({ id = "explore", platform }: { id?: string; platform: PlatformData }) {
  const candidates = platform.relatedUrls ?? [];
  const live = candidates
    .map((url) => ({ url, record: getUrl(url) }))
    .filter((entry) => entry.record?.buildStatus === "built");

  if (!live.length) return null;

  return (
    <section id={id} className="section-pad bg-ivory">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Explore {platform.productName}</p>
          <h2 className="mt-5 text-display-lg text-primary">Go deeper where it matters.</h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {live.map((entry, i) => (
            <Reveal key={entry.url} delay={i * 70} as="li">
              <CtaLink
                d={destinations.page(entry.record!.name, entry.url)}
                className="card-lift flex items-center justify-between gap-4 rounded-xl border border-border bg-background px-6 py-5 text-sm font-semibold text-primary"
              >
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {entry.record!.name}
                  <ArrowUpRight className="size-4 text-accent" aria-hidden="true" />
                </span>
              </CtaLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
