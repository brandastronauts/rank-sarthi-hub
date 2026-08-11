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
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { placeholder as p } from "@/components/nav-data";

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

const tintClass: Record<string, { border: string; text: string; bg: string }> = {
  jee: { border: "hover:border-jee", text: "text-jee", bg: "bg-jee/10" },
  neet: { border: "hover:border-neet", text: "text-neet", bg: "bg-neet/10" },
  nda: { border: "hover:border-nda", text: "text-nda", bg: "bg-nda/15" },
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
    { value: "1.6M+", label: "Questions" },
    { value: "5,000+", label: "Mock Tests" },
    { value: "3", label: "Exams Covered" },
    { value: "AI", label: "Diagnosis Engine" },
  ];
  return (
    <section id="home" className="bg-navy-gradient relative overflow-hidden text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-10 size-[36rem] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-24 bottom-0 size-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-24 top-40 hidden size-64 rotate-12 rounded-3xl border border-gold/30 lg:block" />
        <div className="absolute right-52 top-64 hidden size-64 rotate-45 rounded-3xl border border-white/15 lg:block" />
      </div>

      <div className="container-page relative flex min-h-screen flex-col justify-center pb-20 pt-32">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Sparkles className="size-3.5" aria-hidden="true" /> AI-Powered Exam Prep
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Prepare Smarter.
            <br />
            Rank Higher.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            India's AI-powered mock test platform for JEE, NEET and NDA. We don't just tell you what you scored — we
            tell you why, and what to fix next.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={p("Start Free Test")}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
            >
              Start Free Test <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#platforms"
              className="inline-flex items-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-bold transition-colors hover:bg-white/10"
            >
              Explore Platforms
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-16">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy-deep/70 px-6 py-6 backdrop-blur">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-gold sm:text-3xl">{s.value}</span>
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
    <section id="platforms" className="bg-background py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Platforms"
          title="One Platform. Three Paths."
          sub="Three focused products, one diagnosis engine. Pick your exam and start with a free full-length test."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {platforms.map((pl, i) => {
            const t = tintClass[pl.tint]!;
            return (
              <Reveal key={pl.name} delay={i * 110} as="article">
                <div
                  className={`flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${t.border}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${t.bg} ${t.text}`}>{pl.exam}</span>
                    {"badge" in pl && pl.badge && (
                      <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold text-gold">
                        {pl.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-primary">{pl.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pl.line}</p>
                  <ul className="mt-6 space-y-3">
                    {pl.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className={`mt-0.5 size-4 shrink-0 ${t.text}`} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p(pl.name)}
                    className="mt-8 inline-flex items-center gap-2 self-start rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-navy-soft"
                    aria-label={`Explore ${pl.name}`}
                  >
                    Explore <ArrowRight className="size-4" aria-hidden="true" />
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
    },
    {
      icon: Timer,
      title: "Exam-Accurate Simulation",
      body: "Real interface, real timer, real marking scheme and real difficulty distribution — so exam day feels like your hundredth attempt, not your first.",
    },
    {
      icon: Target,
      title: "Track Every Wrong Answer to Its Concept",
      body: "Each mistake is traced to the exact chapter, concept and error type — silly slip, formula gap or time pressure — with a fix suggested for each.",
    },
  ];
  return (
    <section id="why" className="bg-secondary py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Rank Sarthi"
          title="Diagnosis, Not Just Scores."
          sub="A score tells you where you stand. A diagnosis tells you what to do on Monday morning."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 110}>
              <div className="h-full rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-elevated">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <it.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-primary">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
    <section id="how" className="bg-background py-24">
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
    <section id="institutes" className="bg-secondary py-20">
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
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
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
    <section id="pricing" className="bg-background py-24">
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
                className={`flex h-full flex-col rounded-2xl bg-card p-8 transition-shadow hover:shadow-elevated ${
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
    <section id="faq" className="bg-secondary py-24">
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
    <section id="cta" className="bg-navy-gradient py-24 text-primary-foreground">
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
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
          >
            Start Free Test <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
