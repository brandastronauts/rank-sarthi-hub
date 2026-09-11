import { ArrowRight, Check, Crosshair, TrendingDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import heroStudent from "@/assets/hero-student.jpg";

const reassurance = ["Built for JEE, NEET and NDA", "No generic study plan", "Clear next priorities"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[min(880px,100svh)] overflow-hidden bg-navy-deep text-primary-foreground">
      <img
        src={heroStudent}
        alt="An Indian aspirant reviewing a Rank Sarthi diagnostic report while studying"
        width={1024}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[68%_center] sm:object-[72%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/20" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/35" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-accent" />

      <div className="container-page relative flex min-h-[min(880px,100svh)] items-center pb-28 pt-32 sm:pt-36 lg:pb-36">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <Reveal className="max-w-4xl">
            <p className="eyebrow inline-flex items-center gap-3 text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              Preparation Intelligence
            </p>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.1rem,7vw,6.8rem)] font-bold leading-[0.94]">
              Your rank has
              <br />
              <span className="text-gold">a reason.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/78 sm:text-xl">
              See where marks are being lost, why the pattern exists and what deserves your attention next.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink
                d={destinations.diagnostic("Take your first diagnostic")}
                className="btn-press inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-bold text-accent-foreground shadow-elevated"
              >
                <span className="inline-flex items-center gap-2">
                  Take your first diagnostic <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </CtaLink>
              <a
                href="#product"
                className="btn-press inline-flex items-center rounded-md border border-white/40 bg-navy-deep/25 px-7 py-4 text-sm font-bold backdrop-blur-sm hover:bg-white/10"
              >
                See the diagnosis
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6">
              {reassurance.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/78">
                  <Check className="size-4 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="hidden lg:block">
            <div className="border-l border-white/20 bg-navy-deep/70 p-6 shadow-elevated backdrop-blur-md">
              <div className="flex items-center justify-between text-[0.6875rem] font-bold uppercase text-primary-foreground/55">
                <span>Diagnostic signal</span>
                <span className="inline-flex items-center gap-1.5 text-gold">
                  <Crosshair className="size-3.5" aria-hidden="true" /> Priority 01
                </span>
              </div>
              <p className="mt-5 font-display text-xl font-bold">Rotational Motion</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                Concept accuracy drops when questions combine torque and rolling motion.
              </p>
              <div className="mt-6 h-1.5 overflow-hidden bg-white/10">
                <div className="h-full w-4/5 bg-accent" />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-primary-foreground/60">
                  <TrendingDown className="size-3.5 text-accent" aria-hidden="true" /> Repeated pattern
                </span>
                <span className="font-bold text-gold">Review concept first</span>
              </div>
              <p className="mt-5 border-t border-white/10 pt-4 text-[0.6875rem] text-primary-foreground/45">
                Illustrative product view — not a student result.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <HeroFramework />
    </section>
  );
}

const framework = [
  { k: "Diagnose", v: "Find where marks are being lost." },
  { k: "Understand", v: "Know why the pattern exists." },
  { k: "Prioritise", v: "Work on what matters most." },
  { k: "Improve", v: "Measure whether it changed." },
];

function HeroFramework() {
  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy-deep/80 backdrop-blur-md">
      <div className="container-page">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {framework.map((item, index) => (
            <div key={item.k} className="border-white/10 py-4 pr-4 even:border-l even:pl-4 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0">
              <dt className="flex items-center gap-2 text-xs font-bold uppercase text-gold">
                <span className="text-primary-foreground/35">0{index + 1}</span> {item.k}
              </dt>
              <dd className="mt-1 hidden text-xs text-primary-foreground/55 sm:block">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}