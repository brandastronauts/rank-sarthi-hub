import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { voices } from "@/content/trust";
import parentChild from "@/assets/parent-child.jpg";

const modules = [
  { tag: "Strong", value: "Mechanics", tone: "text-neet", dot: "bg-neet" },
  { tag: "Needs attention", value: "Organic Chemistry", tone: "text-accent", dot: "bg-accent" },
  { tag: "Improving", value: "Accuracy trend", tone: "text-jee", dot: "bg-jee" },
  { tag: "This week's priority", value: "Timed practice set", tone: "text-gold", dot: "bg-gold" },
];

export function ParentBand() {
  const parentVoice = voices.find((v) => v.kind === "parent");

  return (
    <section id="parents" className="section-pad bg-ivory">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="eyebrow text-accent">For parents</p>
          <h2 className="mt-5 text-display-lg text-primary">
            You see the hours they&rsquo;re putting in. Now see whether those hours are working.
          </h2>
          <div className="mt-6 w-28 rule-gold" />
          <p className="mt-6 text-lede text-muted-foreground">
            Move beyond a single test score and understand where preparation is strong, where it needs attention
            and what the next priority should be — in plain language, without hovering over every study session.
          </p>
          <p className="mt-8 font-display text-xl font-semibold tracking-tight text-primary">
            Visibility without micromanagement.
          </p>
          <CtaLink
            d={destinations.notYet(
              "See what parents can track",
              "This feature is not available yet.",
            )}
            className="btn-press mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
          >
            <span className="inline-flex items-center gap-2">
              See what parents can track <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </CtaLink>

          {parentVoice ? (
            <figure className="mt-10 border-l-2 border-gold pl-6">
              <blockquote className="text-lg font-medium leading-relaxed text-primary">
                &ldquo;{parentVoice.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {parentVoice.name} · {parentVoice.role}
              </figcaption>
            </figure>
          ) : (
            <div className="mt-10 border-l-2 border-border pl-6">
              <p className="placeholder-slot inline-block px-4 py-3">[Real parent comment required]</p>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                A parent&rsquo;s own words will sit here once a real family has used the product.
              </p>
            </div>
          )}
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <img
              src={parentChild}
              alt="An Indian parent and their teenage child reviewing a preparation report together at home"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-elevated"
            />
            <div className="relative -mt-14 ml-4 mr-4 rounded-2xl border border-border bg-background/95 p-6 shadow-elevated backdrop-blur sm:ml-10 sm:mr-16">
              <p className="flex items-center justify-between text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Parent view
                <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[0.625rem] font-bold tracking-[0.14em] text-gold">
                  Sample view
                </span>
              </p>
              <ul className="mt-5 space-y-3.5">
                {modules.map((m) => (
                  <li key={m.tag} className="flex items-center gap-3">
                    <span className={`size-1.5 shrink-0 rounded-full ${m.dot}`} aria-hidden="true" />
                    <span className={`text-[0.6875rem] font-semibold uppercase tracking-[0.12em] ${m.tone}`}>
                      {m.tag}
                    </span>
                    <span className="ml-auto text-sm font-semibold text-primary">{m.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                Sample view for illustration. This is not a real student&rsquo;s data.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
