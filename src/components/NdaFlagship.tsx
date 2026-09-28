import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { voices } from "@/content/trust";
import ndaAspirant from "@/assets/nda-aspirant.jpg";

export function NdaFlagship() {
  const ndaVoice = voices.find((v) => v.kind === "aspirant" && /NDA/i.test(v.role));
  return (
    <section id="nda" className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <img
        src={ndaAspirant}
        alt="An NDA aspirant preparing at dawn with notebooks on a desk"
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 size-full object-cover object-center opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/45"
      />
      <div className="container-page relative py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">NDA RankUp</p>
          <h2 className="mt-5 text-display-lg">
            For those preparing
            <br />
            for more than an exam.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
            NDA preparation demands knowledge, speed, composure and consistency. Rank Sarthi helps aspirants
            identify which part of their preparation deserves attention next.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink
              d={destinations.platformHome("nda")}
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
            >
              <span className="inline-flex items-center gap-2">
                Explore NDARankUp <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </CtaLink>
            <CtaLink
              d={destinations.diagnostic("Take NDA diagnostic")}
              className="btn-press inline-flex items-center rounded-lg border border-white/35 px-6 py-3.5 text-sm font-bold hover:bg-white/10"
            />
          </div>

          {ndaVoice ? (
            <figure className="mt-12 max-w-xl border-l-2 border-gold pl-6">
              <blockquote className="text-lg font-medium leading-relaxed text-primary-foreground/90">
                &ldquo;{ndaVoice.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-primary-foreground/55">
                {ndaVoice.name} · {ndaVoice.role}
              </figcaption>
            </figure>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
