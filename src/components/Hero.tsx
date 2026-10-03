import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaLink } from "@/components/CtaLink";
import { destinations } from "@/content/destinations";
import { DiagnosticLauncher } from "@/components/acquisition/DiagnosticLauncher";
import heroStudent from "@/assets/hero-student.jpg";

const reassurance = ["JEE Main", "NEET UG", "NDA"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[min(720px,100svh)] overflow-hidden bg-navy-deep text-primary-foreground">
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

      <div className="container-page relative flex min-h-[min(720px,100svh)] items-center pb-24 pt-24 sm:pt-28 lg:pb-28">
        <div className="w-full">
          <Reveal className="max-w-4xl">
            <p className="eyebrow inline-flex items-center gap-3 text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              Preparation Intelligence
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-none sm:text-6xl lg:text-7xl">
              Your rank has
              <br />
              <span className="text-gold">a reason.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Find out where you&rsquo;re losing marks and what to work on next—for JEE, NEET or NDA.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DiagnosticLauncher
                ctaLocation="hero"
                className="min-h-12 bg-accent px-7 font-bold text-accent-foreground shadow-elevated hover:bg-red-hover"
              />
              <CtaLink
                d={destinations.page("Explore Free Resources", "/resources")}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 bg-navy-deep/25 px-7 text-sm font-bold backdrop-blur-sm hover:bg-white/10"
              />
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
              <dd className="mt-1 hidden text-xs text-primary-foreground/55 md:block">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}