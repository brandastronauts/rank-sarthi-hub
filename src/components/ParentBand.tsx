import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { placeholder as p } from "@/components/nav-data";
import parentChild from "@/assets/parent-child.jpg";

const modules = [
  { tag: "Strong", value: "Mechanics", tone: "text-neet", dot: "bg-neet" },
  { tag: "Needs attention", value: "Organic Chemistry", tone: "text-accent", dot: "bg-accent" },
  { tag: "Improving", value: "Accuracy trend", tone: "text-jee", dot: "bg-jee" },
  { tag: "This week's priority", value: "Timed practice set", tone: "text-gold", dot: "bg-gold" },
];

export function ParentBand() {
  return (
    <section id="parents" className="section-pad bg-background">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-accent">For parents</p>
          <h2 className="mt-5 text-display-lg text-primary">
            You see the hours they&rsquo;re putting in. Now see whether those hours are working.
          </h2>
          <div className="mt-6 w-28 rule-gold" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Move beyond a single test score and understand where preparation is strong, where it needs attention
            and what the next priority should be.
          </p>
          <p className="mt-8 font-display text-xl font-bold tracking-tight text-primary">
            Visibility without micromanagement.
          </p>
          <a
            href={p("Parent visibility")}
            className="btn-press mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
          >
            See what parents can track <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <img
              src={parentChild}
              alt="An Indian parent and their teenage child reviewing a preparation report together"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-2xl object-cover shadow-card"
            />
            <div className="mt-5 rounded-2xl border border-border bg-card p-6 shadow-card sm:absolute sm:-bottom-8 sm:-left-8 sm:mt-0 sm:w-[22rem]">
              <p className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Parent view
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[9px] text-foreground/60">
                  Illustrative data
                </span>
              </p>
              <ul className="mt-4 space-y-3">
                {modules.map((m) => (
                  <li key={m.tag} className="flex items-center gap-3">
                    <span className={`size-1.5 shrink-0 rounded-full ${m.dot}`} aria-hidden="true" />
                    <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${m.tone}`}>{m.tag}</span>
                    <span className="ml-auto text-sm font-semibold text-primary">{m.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
