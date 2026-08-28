import { ArrowRight, BookOpenCheck, MonitorPlay, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";

const pillars = [
  {
    icon: MonitorPlay,
    t: "See the product",
    b: "Explore the real diagnostic experience before you decide anything.",
  },
  {
    icon: BookOpenCheck,
    t: "Understand the method",
    b: "Know exactly what Rank Sarthi analyses, and why it analyses it that way.",
  },
  {
    icon: PlayCircle,
    t: "Try it yourself",
    b: "Take a diagnostic first. Make a bigger commitment only if it earns it.",
  },
];

export function NewBrandTrust({ id }: { id?: string }) {
  return (
    <section id={id} className="section-pad bg-paleblue">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-accent">Trust</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Before you trust us,
            <br />
            see how it works.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Rank Sarthi is a new brand. Instead of borrowing credibility, we would rather show you the product,
            the method and the pricing in full — and let you test it yourself.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pl, i) => (
            <Reveal key={pl.t} delay={i * 100}>
              <div className="card-lift h-full rounded-2xl border border-border bg-background p-8">
                <pl.icon className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-6 text-base font-bold text-primary">{pl.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pl.b}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="mt-10">
          <CtaLink
            d={destinations.diagnostic("Try Rank Sarthi")}
            className="btn-press inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground hover:bg-navy-soft"
          >
            <span className="inline-flex items-center gap-2">
              Try Rank Sarthi <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
