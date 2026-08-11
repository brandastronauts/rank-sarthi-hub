import { ArrowRight, Check, Clock, Crosshair, TrendingDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { placeholder as p } from "@/components/nav-data";
import heroStudent from "@/assets/hero-student.jpg";

const reassurance = ["Find weak areas", "Understand error patterns", "Know what to work on next"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-gradient text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-faint" />
        <div className="absolute -right-40 -top-24 size-[42rem] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deep/80 to-transparent" />
      </div>

      <div className="container-page relative grid items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-36">
        <Reveal>
          <p className="eyebrow text-gold">Preparation Intelligence for JEE • NEET • NDA</p>
          <h1 className="mt-6 text-display-xl">
            Your rank has a reason.
            <br />
            <span className="text-gold">Find it before exam day.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Rank Sarthi analyses how you solve, where you lose marks and what deserves your attention next —
            across JEE, NEET and NDA preparation.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={p("Take your first diagnostic")}
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-elevated"
            >
              Take your first diagnostic <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#product"
              className="btn-press inline-flex items-center rounded-lg border border-white/35 px-7 py-3.5 text-sm font-bold hover:bg-white/10"
            >
              See how it works
            </a>
          </div>

          <p className="mt-5 text-sm text-primary-foreground/55">
            No generic study plan. Your performance decides what comes next.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {reassurance.map((r) => (
              <li key={r} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Check className="size-4 text-gold" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 hidden size-40 rounded-2xl border border-gold/30 lg:block"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/12">
              <img
                src={heroStudent}
                alt="An Indian aspirant reviewing a Rank Sarthi diagnostic report while studying"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-navy-deep via-navy-deep/45 to-transparent mix-blend-multiply"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/30"
              />
            </div>

            {/* Layered product interface */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 w-[78%] rounded-xl border border-white/12 bg-navy-deep/90 p-4 shadow-elevated backdrop-blur sm:-left-10"
            >
              <p className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/50">
                Diagnostic summary
                <span className="inline-flex items-center gap-1 text-gold">
                  <Crosshair className="size-3" /> Priority
                </span>
              </p>
              <div className="mt-3 space-y-2.5">
                {[
                  { l: "Rotational Motion", w: "82%", c: "bg-accent" },
                  { l: "Organic Reactions", w: "61%", c: "bg-nda" },
                  { l: "Definite Integrals", w: "44%", c: "bg-jee" },
                ].map((b) => (
                  <div key={b.l}>
                    <p className="flex justify-between text-[11px] font-semibold text-primary-foreground/80">
                      <span>{b.l}</span>
                      <span className="text-primary-foreground/45">concept gap</span>
                    </p>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full rounded-full ${b.c}`} style={{ width: b.w }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <span
              aria-hidden="true"
              className="absolute right-2 top-10 hidden items-center gap-2 rounded-lg border border-white/15 bg-navy-deep/90 px-3 py-2 text-[11px] font-semibold text-primary-foreground/85 shadow-elevated backdrop-blur sm:inline-flex"
            >
              <TrendingDown className="size-3.5 text-accent" /> Accuracy ↓ Organic Chemistry
            </span>
            <span
              aria-hidden="true"
              className="absolute -right-2 top-1/2 hidden items-center gap-2 rounded-lg border border-white/15 bg-navy-deep/90 px-3 py-2 text-[11px] font-semibold text-primary-foreground/85 shadow-elevated backdrop-blur lg:inline-flex"
            >
              <Clock className="size-3.5 text-gold" /> Time leak: 11 min
            </span>
          </div>
          <p className="mt-10 text-center text-[11px] text-primary-foreground/40 lg:text-right">
            Interface labels shown are conceptual, not a specific student&rsquo;s result.
          </p>
        </Reveal>
      </div>

      <HeroFramework />
    </section>
  );
}

const framework = [
  { k: "Diagnose", v: "Find where marks are being lost." },
  { k: "Understand", v: "Know why the pattern exists." },
  { k: "Prioritise", v: "Work on what matters most." },
  { k: "Improve", v: "Track whether it is actually changing." },
];

function HeroFramework() {
  return (
    <div className="relative border-t border-white/10 bg-navy-deep/50">
      <div className="container-page">
        <dl className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {framework.map((f, i) => (
            <Reveal key={f.k} delay={i * 80} className="py-7 lg:px-6 lg:first:pl-0">
              <dt className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-gold">
                <span className="text-primary-foreground/30">{`0${i + 1}`}</span>
                {f.k}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{f.v}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </div>
  );
}
