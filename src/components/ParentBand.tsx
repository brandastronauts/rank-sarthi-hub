import { CalendarCheck, Eye, MessageSquareHeart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import parentChild from "@/assets/parent-child.jpg";

const points = [
  {
    icon: Eye,
    title: "Real visibility, every week",
    body: "A plain-language weekly report: what was attempted, what improved, and which chapters still need work.",
  },
  {
    icon: CalendarCheck,
    title: "No surprises before the exam",
    body: "Progress is tracked from the first mock, so you know months in advance where your child actually stands.",
  },
  {
    icon: MessageSquareHeart,
    title: "Support, not pressure",
    body: "Reports are written to start a calm conversation at home, never to shame a low score.",
  },
];

export function ParentBand() {
  return (
    <section id="parents" className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 hidden size-32 rounded-3xl border border-gold/40 lg:block"
              />
              <img
                src={parentChild}
                alt="A parent and their teenage child reviewing a progress report together on a laptop"
                loading="lazy"
                width={1280}
                height={960}
                className="relative w-full rounded-3xl object-cover shadow-elevated"
              />
              <div className="absolute -bottom-6 right-4 hidden max-w-[15rem] rounded-2xl border border-border bg-card p-4 shadow-card sm:block">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Weekly parent report
                </p>
                <p className="mt-2 text-sm font-semibold text-primary">Physics up 12 marks</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-3/4 rounded-full bg-neet" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">For Parents</p>
            <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">
              Parents see everything, not just the final score.
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              You are investing years of your child's life in this. You deserve to know that the effort is going in the
              right direction — not to find out on result day.
            </p>
            <ul className="mt-8 space-y-5">
              {points.map((pt) => (
                <li key={pt.title} className="flex gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <pt.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-primary">{pt.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{pt.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-gold/60 pl-4 text-sm italic leading-relaxed text-foreground/70">
              Every parent wants the same thing — to know their child is preparing the right way, and to see it for
              themselves.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
