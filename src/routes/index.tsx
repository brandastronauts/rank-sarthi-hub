import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Target,
  Timer,
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  BookOpenCheck,
  Compass,
  Cpu,
  Smartphone,
  Crosshair,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductShowcase } from "@/components/ProductShowcase";
import { StudentStories } from "@/components/StudentStories";
import { Faculty } from "@/components/Faculty";
import { ParentBand } from "@/components/ParentBand";
import { CommunityBand } from "@/components/CommunityBand";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { placeholder as p } from "@/components/nav-data";
import heroStudent from "@/assets/hero-student.jpg";


const faqs = [
  {
    q: "What exactly is Rank Sarthi?",
    a: "Rank Sarthi is an AI-powered exam preparation brand running three platforms — JeeRankUp for JEE, NeetRankUp for NEET and NDARankUp for NDA. Each one gives you exam-accurate mock tests plus an AI diagnosis of why you lost marks and what to fix next.",
  },
  {
    q: "How does the AI diagnosis actually work?",
    a: "Every question is tagged to a concept, a difficulty band and a common error type. When you submit a test, our engine maps each wrong answer back to its underlying concept, compares your timing against toppers' benchmarks and produces a ranked list of the weaknesses costing you the most marks.",
  },
  {
    q: "Which exams are covered?",
    a: "JEE Main and JEE Advanced, NEET UG, and the NDA written exam including Mathematics and GAT, with dedicated SSB interview preparation material.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Starter plan is free forever and includes full-length sample mock tests, basic score reports and access to our free resource library. No card required to begin.",
  },
  {
    q: "Can girls prepare for the NDA exam here?",
    a: "Absolutely. Following the 2021 Supreme Court ruling, women are eligible to appear for the NDA examination. NDARankUp includes eligibility guidance, physical standards and SSB preparation for women candidates.",
  },
  {
    q: "How often are new tests added?",
    a: "New full-length mocks and topic tests are published every week, and the question bank is refreshed after every official exam cycle so that patterns, weightage and difficulty stay current.",
  },
];

const platforms = [
  {
    name: "JeeRankUp",
    exam: "JEE Main & Advanced",
    tint: "jee",
    stat: "1.6M+ tagged questions",
    line: "Engineering-grade practice built around the real JEE difficulty curve, from Main-level speed sets to Advanced-level multi-concept problems.",
    features: [
      "Main + Advanced pattern full mocks",
      "Chapter-wise PYQ engine (2010 onwards)",
      "Rank & college predictor",
      "Concept-level accuracy heatmap",
    ],
  },
  {
    name: "NeetRankUp",
    exam: "NEET UG",
    tint: "neet",
    stat: "100% NCERT-mapped",
    line: "Every question mapped straight back to the NCERT line it came from, so revision always has an exact page to return to.",
    features: [
      "NCERT-mapped question bank",
      "Biology line-by-line accuracy tracker",
      "Score & rank calculator",
      "Negative-marking risk analysis",
    ],
  },
  {
    name: "NDARankUp",
    exam: "NDA & SSB",
    tint: "nda",
    featured: true,
    badge: "India's First AI NDA Platform",
    stat: "900+ NDA mock tests",
    line: "The flagship. Written exam mastery across Mathematics and GAT, plus a structured SSB interview track that most NDA prep simply skips.",
    features: [
      "Maths + GAT full-length mocks",
      "Daily current affairs drills",
      "SSB, PPDT & PABT guidance",
      "Officer-Like-Qualities self-assessment",
      "Eligibility & physical standards guide (incl. women candidates)",
    ],
  },
] as const;

const tintClass: Record<string, { border: string; text: string; bg: string; bar: string }> = {
  jee: { border: "hover:border-jee/60", text: "text-jee", bg: "bg-jee/10", bar: "bg-jee" },
  neet: { border: "hover:border-neet/60", text: "text-neet", bg: "bg-neet/10", bar: "bg-neet" },
  nda: { border: "hover:border-gold/70", text: "text-nda", bg: "bg-nda/15", bar: "bg-gold" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rank Sarthi | AI Mock Tests for JEE, NEET & NDA" },
      {
        name: "description",
        content:
          "India's AI-powered mock test platform for JEE, NEET & NDA. Get diagnosis, not just scores. Start free.",
      },
      { property: "og:title", content: "Rank Sarthi | AI Mock Tests for JEE, NEET & NDA" },
      {
        property: "og:description",
        content:
          "India's AI-powered mock test platform for JEE, NEET & NDA. Get diagnosis, not just scores. Start free.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Rank Sarthi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rank Sarthi | AI Mock Tests for JEE, NEET & NDA" },
      {
        name: "twitter:description",
        content: "AI mock tests for JEE, NEET and NDA. Diagnosis, not just scores.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rank Sarthi",
          url: "/",
          description:
            "India's AI-powered mock test platform for JEE, NEET & NDA. Get diagnosis, not just scores.",
          brand: [
            { "@type": "Brand", name: "JeeRankUp" },
            { "@type": "Brand", name: "NeetRankUp" },
            { "@type": "Brand", name: "NDARankUp" },
          ],
          areaServed: "IN",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Credibility />
        <ProductShowcase />
        <Platforms />
        <Why />
        <TrustMethod />
        <StudentStories />
        <Faculty />
        <ParentBand />
        <CommunityBand />
        <How />
        <Institutes />
        <Pricing />

        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  const stats = [
    { to: 1.6, decimals: 1, suffix: "M+", label: "Tagged Questions" },
    { to: 5000, suffix: "+", label: "Mock Tests" },
    { to: 3, label: "Exams Covered" },
    { to: 24, suffix: "/7", label: "AI Diagnosis Engine" },
  ];
  return (
    <section id="home" className="bg-navy-gradient relative overflow-hidden text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-faint" />
        <div className="absolute inset-0 bg-dots-faint opacity-60" />
        <div className="absolute -right-32 top-10 size-[36rem] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-24 bottom-0 size-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-24 top-40 hidden size-64 rotate-12 rounded-3xl border border-gold/25 lg:block" />
        <div className="absolute right-52 top-64 hidden size-64 rotate-45 rounded-3xl border border-white/10 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep/70 to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center pb-16 pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles className="size-3.5" aria-hidden="true" /> AI-Powered Exam Prep
            </span>
            <h1 className="mt-6 text-5xl leading-[0.98] sm:text-7xl lg:text-[4.5rem]">
              Prepare Smarter.
              <br />
              Rank <span className="text-gold">Higher.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              You are already working hard. Rank Sarthi makes sure that effort turns into a rank instead of
              disappearing into the dark — every lost mark traced to the concept behind it, and the exact drill that
              fixes it.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={p("Start Free Test")}
                className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-elevated"
              >
                Start Free Test <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#showcase"
                className="btn-press inline-flex items-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-bold hover:bg-white/10"
              >
                See the AI Diagnosis
              </a>
            </div>
          </Reveal>

          <Reveal delay={180} className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 size-40 rounded-3xl border border-gold/30"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-elevated">
              <img
                src={heroStudent}
                alt="An Indian student preparing for competitive exams on a laptop"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm font-semibold text-primary-foreground">
                  “I finally know what to fix tonight.”
                </p>
                <p className="mt-1 text-xs text-primary-foreground/60">
                  Representative image — sample aspirant sentiment
                </p>
              </div>
            </div>
          </Reveal>
        </div>


        <Reveal delay={150} className="mt-14">
          <dl className="glow-inner grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy-deep/70 px-6 py-6 backdrop-blur">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp
                    to={s.to}
                    decimals={s.decimals ?? 0}
                    suffix={s.suffix ?? ""}
                    className="block font-display text-2xl font-extrabold text-gold sm:text-3xl"
                  />
                  <span className="mt-1 block text-sm text-primary-foreground/70">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Credibility() {
  const badges = [
    { icon: Crosshair, label: "IIT-Pattern Content" },
    { icon: BookOpenCheck, label: "NEET NCERT-Mapped" },
    { icon: ShieldCheck, label: "UPSC-Aligned NDA" },
    { icon: Cpu, label: "AI-Powered Analytics" },
    { icon: Smartphone, label: "Works on Low-End Phones" },
  ];
  return (
    <section aria-label="Credibility" className="border-b border-border bg-background py-8">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <p className="flex items-center gap-3 text-sm font-semibold text-primary">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Built by educators from India's top institutes
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {badges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground/75"
              >
                <b.icon className="size-3.5 text-gold" aria-hidden="true" />
                {b.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold text-primary sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function Platforms() {
  return (
    <section id="platforms" className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Platforms"
          title="One Engine. Three Exams."
          sub="Three focused products sharing one diagnosis engine. Pick your exam and start with a free full-length test."
        />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {platforms.map((pl, i) => {
            const t = tintClass[pl.tint]!;
            const featured = "featured" in pl && pl.featured;
            return (
              <Reveal
                key={pl.name}
                delay={i * 110}
                as="article"
                className={featured ? "lg:-mt-6 lg:-mb-6" : ""}
              >
                <div
                  className={`card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card ${
                    featured ? "border-gold/50 p-8 lg:p-10 shadow-elevated" : "border-border p-8"
                  } ${t.border}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-1 ${t.bar}`} aria-hidden="true" />
                  {featured && "badge" in pl && pl.badge && (
                    <span className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
                      <Sparkles className="size-3" aria-hidden="true" /> {pl.badge}
                    </span>
                  )}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${t.bg} ${t.text}`}>{pl.exam}</span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {pl.stat}
                    </span>
                  </div>
                  <h3 className={`mt-5 font-extrabold text-primary ${featured ? "text-3xl" : "text-2xl"}`}>
                    {pl.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pl.line}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pl.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className={`mt-0.5 size-4 shrink-0 ${t.text}`} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p(pl.name)}
                    className={`btn-press mt-8 inline-flex items-center gap-2 self-start rounded-lg px-5 py-2.5 text-sm font-bold ${
                      featured
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground hover:bg-navy-soft"
                    }`}
                    aria-label={`Explore ${pl.name}`}
                  >
                    Explore {pl.name} <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      icon: Brain,
      title: "AI Weakness Mapping",
      body: "Our engine clusters your errors into concept groups and ranks them by the marks they are costing you, so revision starts where it pays most.",
      example:
        "e.g. You scored 68 in Physics. We show you 22 of those lost marks came from just 3 chapters — and give you a 40-question drill targeting exactly those.",
    },
    {
      icon: Timer,
      title: "Exam-Accurate Simulation",
      body: "Real interface, real timer, real marking scheme and real difficulty distribution — so exam day feels like your hundredth attempt, not your first.",
      example:
        "e.g. Your NDA Maths paper is timed at 150 minutes with UPSC's exact 2.5/-0.83 marking, and we flag the 9 questions where you burned over 3 minutes each.",
    },
    {
      icon: Target,
      title: "Every Wrong Answer Traced to a Concept",
      body: "Each mistake is tied to the exact chapter, concept and error type — silly slip, formula gap or time pressure — with a specific fix attached to each.",
      example:
        "e.g. Of 14 wrong answers in Chemistry, 8 were formula recall and 6 were reading errors — so you get a formula sprint, not another full mock.",
    },
  ];
  return (
    <section id="why" className="bg-secondary py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="How the Diagnosis Works"
          title="Diagnosis, Not Just Scores."
          sub="A score tells you where you stand. A diagnosis tells you what to open on Monday morning."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 110}>
              <div className="card-lift relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8">
                <span className="absolute inset-x-0 top-0 h-1 bg-gold/70" aria-hidden="true" />
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <it.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-primary">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                <p className="mt-5 border-l-2 border-gold/60 pl-4 text-sm italic leading-relaxed text-foreground/70">
                  {it.example}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustMethod() {
  const cols = [
    {
      icon: ShieldCheck,
      title: "Exam-Accurate",
      body: "Papers are modelled on the real UPSC and NTA blueprints — section counts, timing, marking scheme and difficulty spread. Nothing is invented for convenience.",
      points: ["Official marking schemes", "Real paper timing", "Post-cycle pattern refresh"],
    },
    {
      icon: Compass,
      title: "Diagnosis-First",
      body: "We built the analysis engine before the content library. Every question exists because it can be tagged to a concept, a difficulty band and a known error type.",
      points: ["Concept-tagged question bank", "Error-type classification", "Auto-generated fix-lists"],
    },
    {
      icon: Smartphone,
      title: "Built for Bharat",
      body: "Designed for the aspirant in a Tier-3 town on a ₹8,000 phone and patchy data, not just for metro students on fast Wi-Fi.",
      points: ["Hindi language support", "Low-bandwidth, lightweight tests", "Free tier that is genuinely usable"],
    },
  ];
  return (
    <section id="trust" className="relative overflow-hidden bg-navy-gradient-soft py-20 text-primary-foreground sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-70" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">The Method</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Why aspirants trust the method.</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
            We are new, and we would rather earn your trust with substance than with borrowed faces. Here is exactly
            what the product stands on.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <div className="h-full rounded-2xl border border-white/12 bg-white/5 p-8 backdrop-blur transition-colors hover:border-gold/40">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                  <c.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{c.body}</p>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-8">
          <p className="rounded-xl border border-dashed border-white/20 px-6 py-4 text-center text-sm text-primary-foreground/60">
            Student results and testimonials coming soon — we will publish them only once they are real and verified.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { n: "01", title: "Take a Test", body: "Choose a full-length mock or a targeted topic test in the exact exam interface." },
    { n: "02", title: "Get AI Diagnosis", body: "Within seconds, see the concepts, timing habits and error types behind every lost mark." },
    { n: "03", title: "Fix & Improve", body: "Follow a generated fix-list of drills and revision targets, then retest to confirm the gain." },
  ];
  return (
    <section id="how" className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="How It Works" title="Three Steps to a Better Rank" />
        <ol className="relative mt-14 grid gap-8 md:grid-cols-3">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 130} as="li" className="relative">
              <div className="relative">
                <span className="relative z-10 inline-flex size-16 items-center justify-center rounded-full bg-primary font-display text-lg font-extrabold text-gold ring-8 ring-background">
                  {s.n}
                </span>
                <h3 className="mt-6 text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Institutes() {
  return (
    <section id="institutes" className="bg-secondary py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-border bg-card p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">For Institutes</p>
              <h2 className="mt-3 text-2xl font-extrabold text-primary sm:text-3xl">
                Run a coaching institute? Get a white-label test platform under your brand.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Your logo, your batches, your analytics — powered by the Rank Sarthi question bank and AI diagnosis
                engine.
              </p>
            </div>
            <a
              href={p("Request a Demo")}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground btn-press"
            >
              Request a Demo <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const plans = [
    {
      name: "Starter",
      monthly: 0,
      note: "Free forever",
      features: ["2 full-length mock tests / month", "Basic score report", "Free resource library", "Community access"],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      monthly: 499,
      note: "For serious aspirants",
      features: [
        "Unlimited mock tests",
        "Full AI weakness mapping",
        "Previous year paper engine",
        "Rank & college predictor",
        "Weekly new tests",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Premium",
      monthly: 1499,
      note: "Everything, plus mentoring",
      features: [
        "Everything in Pro",
        "Personalised study plan",
        "1:1 mentor review calls",
        "SSB / interview prep module",
        "Priority support",
      ],
      cta: "Get Premium",
      popular: false,
    },
  ];
  const price = (m: number) => (m === 0 ? "₹0" : `₹${annual ? Math.round(m * 0.67) : m}`);

  return (
    <section id="pricing" className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Honest Pricing."
          sub="Start free. Upgrade only when the diagnosis is moving your score."
        />

        <Reveal className="mt-10 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1"
          >
            <button
              type="button"
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                !annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={annual}
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Annual
              <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[11px] font-bold text-gold">Save 33%</span>
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110}>
              <div
                className={`flex h-full flex-col rounded-2xl bg-card p-8 card-lift ${
                  plan.popular ? "border-2 border-accent shadow-elevated" : "border border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
                  {plan.popular && (
                    <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.note}</p>
                <p className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold text-primary">{price(plan.monthly)}</span>
                  <span className="pb-1.5 text-sm text-muted-foreground">
                    {plan.monthly === 0 ? "" : annual ? "/mo, billed annually" : "/mo"}
                  </span>
                </p>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={p(`${plan.name} plan`)}
                  className={`mt-8 rounded-lg px-5 py-3 text-center text-sm font-bold transition-colors ${
                    plan.popular
                      ? "bg-accent text-accent-foreground hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:bg-navy-soft"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="overflow-hidden rounded-xl border border-border bg-card">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-primary"
                    >
                      {f.q}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-5 shrink-0 text-accent transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    hidden={!isOpen}
                    className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground"
                  >
                    {f.a}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="cta" className="bg-navy-gradient py-20 text-primary-foreground sm:py-24">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">
            Your rank starts with the first test.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Take a free full-length mock today and see your first AI diagnosis in minutes.
          </p>
          <a
            href={p("Start Free Test")}
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-elevated btn-press"
          >
            Start Free Test <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
