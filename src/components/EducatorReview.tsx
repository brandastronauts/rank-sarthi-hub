import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { educatorReview, educatorReviewNote } from "@/content/trust";

/**
 * Editorial expert-commentary moment — deliberately NOT styled like a
 * testimonial card. Academic commentary, not user experience.
 */
export function EducatorReview({ id }: { id?: string }) {
  return (
    <section id={id} aria-label="An educator's view" className="section-pad bg-ivory">
      <div className="container-page">
        {educatorReview ? (
          <figure className="grid items-center gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
            <Reveal className="flex flex-col items-start">
              <p className="eyebrow text-accent">Reviewed through an educator&rsquo;s lens</p>
              <div className="relative mt-8 w-fit">
                {educatorReview.photo ? (
                  <img
                    src={educatorReview.photo}
                    alt={educatorReview.name}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="size-40 rounded-2xl object-cover shadow-elevated sm:size-48"
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -top-4 flex size-12 items-center justify-center rounded-full bg-gold text-navy-deep shadow-card"
                >
                  <Quote className="size-5" />
                </span>
              </div>
              <figcaption className="mt-6">
                <p className="font-display text-lg font-bold text-primary">{educatorReview.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{educatorReview.role}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{educatorReview.organisation}</p>
              </figcaption>
            </Reveal>

            <Reveal delay={120}>
              <div className="border-l-2 border-gold/60 pl-6 sm:pl-10">
                <blockquote className="text-display-editorial text-primary">
                  &ldquo;{educatorReview.quote}&rdquo;
                </blockquote>
                <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {educatorReviewNote}
                </p>
              </div>
            </Reveal>
          </figure>
        ) : (
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-accent">Reviewed through an educator&rsquo;s lens</p>
            <p className="placeholder-slot mx-auto mt-8 block max-w-2xl px-6 py-10 text-[0.8125rem] leading-relaxed">
              [Real educator comment required]
            </p>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              {educatorReviewNote}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
