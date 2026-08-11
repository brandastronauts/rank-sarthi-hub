import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { educatorReview } from "@/content/trust";

/**
 * Editorial expert-commentary moment — deliberately NOT styled like a
 * testimonial card. Academic commentary, not user experience.
 */
export function EducatorReview() {
  return (
    <section aria-label="An educator's view" className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="mx-auto max-w-4xl">
          <p className="eyebrow text-center text-accent">Reviewed through an educator&rsquo;s lens</p>

          <Quote className="mx-auto mt-10 size-10 text-gold" aria-hidden="true" />

          {educatorReview ? (
            <>
              <blockquote className="mt-8 text-center text-display-editorial text-primary">
                &ldquo;{educatorReview.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 flex flex-col items-center gap-4">
                {educatorReview.photo ? (
                  <img
                    src={educatorReview.photo}
                    alt={educatorReview.name}
                    loading="lazy"
                    className="size-16 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex size-16 items-center justify-center rounded-full bg-secondary font-display text-lg font-bold text-primary">
                    {educatorReview.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                )}
                <div className="text-center">
                  <p className="font-display text-base font-bold text-primary">{educatorReview.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {educatorReview.role} · {educatorReview.organisation}
                  </p>
                </div>
              </figcaption>
            </>
          ) : (
            <>
              <p className="placeholder-slot mx-auto mt-8 block max-w-2xl px-6 py-10 text-center text-[0.8125rem] leading-relaxed">
                [Real educator comment required]
              </p>
              <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
                We are currently walking educators through the diagnostic engine. Their comments will appear here
                in their own words, with their real name, position and institution — or not at all.
              </p>
            </>
          )}

          <div className="mx-auto mt-12 w-28 rule-gold" />
        </Reveal>
      </div>
    </section>
  );
}
