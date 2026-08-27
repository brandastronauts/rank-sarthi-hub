import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { Breadcrumbs } from "@/components/shell/Breadcrumbs";
import { destinations } from "@/content/destinations";
import type { PlatformData } from "@/content/types";

const accentText: Record<string, string> = { jee: "text-jee", neet: "text-neet", nda: "text-gold" };

/**
 * B38 — Platform masthead (T02).
 * Same navy/ivory brand language as the homepage hero, recomposed for a
 * vertical: exam wordmark, product name, deck line and subject rail.
 */
export function PlatformMasthead({ id = "top", platform }: { id?: string; platform: PlatformData }) {
  const accent = accentText[platform.accent] ?? "text-gold";
  const wordmark = platform.slug.toUpperCase();

  return (
    <section id={id} className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-faint" />
        <div className="absolute -right-32 -top-20 size-[36rem] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-24 bottom-0 size-[24rem] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-page relative pb-16 pt-28 lg:pb-24 lg:pt-32">
        <div className="text-primary-foreground/70">
          <Breadcrumbs url={`/${platform.slug}`} tone="dark" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className={`eyebrow ${accent}`}>
              {platform.hero?.eyebrow ?? `${platform.productName} — a Rank Sarthi platform`}
            </p>
            <h1 className="mt-5 max-w-2xl text-display-xl">{platform.hero?.heading ?? platform.tagline}</h1>
            {(platform.hero?.support ?? platform.deck) && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70">
                {platform.hero?.support ?? platform.deck}
              </p>
            )}

            <div className="mt-9 flex flex-wrap gap-3">
              {platform.hero?.primary ? (
                <a
                  href={platform.hero.primary.href}
                  className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-elevated"
                >
                  {platform.hero.primary.label} <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              ) : (
                <CtaLink
                  d={destinations.diagnostic(`Take an ${wordmark} diagnostic`)}
                  className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-elevated"
                >
                  <span className="inline-flex items-center gap-2">
                    Take an {wordmark} diagnostic <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </CtaLink>
              )}
              <a
                href={platform.hero?.secondary?.href ?? "#structure"}
                className="btn-press inline-flex items-center rounded-lg border border-white/30 px-7 py-3.5 text-sm font-bold hover:bg-white/10"
              >
                {platform.hero?.secondary?.label ?? "See how the exam is read"}
              </a>
              {platform.hero?.productCtaLabel && (
                <CtaLink
                  d={destinations.diagnostic(platform.hero.productCtaLabel)}
                  className="btn-press inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold"
                >
                  {platform.hero.productCtaLabel}
                </CtaLink>
              )}
            </div>

            {platform.hero?.chips?.length ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {platform.hero.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>


          <Reveal delay={120} className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none block select-none font-display text-[7rem] font-bold leading-[0.8] tracking-tighter text-white/[0.07] sm:text-[10rem]"
            >
              {wordmark}
            </span>
            <ul className="-mt-6 flex flex-wrap gap-2">
              {platform.subjects.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground/80"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-primary-foreground/55">{platform.examName}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
