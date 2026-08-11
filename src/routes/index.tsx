import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { InstitutionStrip } from "@/components/InstitutionStrip";
import { ProductNumbers } from "@/components/ProductNumbers";
import { EducatorReview } from "@/components/EducatorReview";
import { SocialProof } from "@/components/SocialProof";
import { TrustSignals } from "@/components/TrustSignals";
import { AuthorityPeople } from "@/components/AuthorityPeople";
import { ProductShowcase } from "@/components/ProductShowcase";
import { DiagnosticIdea } from "@/components/DiagnosticIdea";
import { ExamTracks } from "@/components/ExamTracks";
import { AspirantMoment } from "@/components/AspirantMoment";
import { Methodology } from "@/components/Methodology";
import { ProductDepth } from "@/components/ProductDepth";
import { Situations } from "@/components/Situations";
import { EducatorThinking } from "@/components/EducatorThinking";
import { ParentBand } from "@/components/ParentBand";
import { NdaFlagship } from "@/components/NdaFlagship";
import { NewBrandTrust } from "@/components/NewBrandTrust";
import { Reveal } from "@/components/Reveal";
import { placeholder as p } from "@/components/nav-data";

const faqs = [
  {
    q: "Is Rank Sarthi another online coaching platform?",
    a: "No. Rank Sarthi is a preparation-intelligence layer above testing. You attempt a diagnostic, and the product explains where marks were lost, why the pattern exists and what deserves attention next.",
  },
  {
    q: "Does Rank Sarthi replace my coaching institute?",
    a: "It is designed to sit alongside your coaching or self-study. Your classes build the syllabus; Rank Sarthi tells you which parts of it are actually costing you marks.",
  },
  {
    q: "How is this different from a normal mock-test score?",
    a: "A score is a single number. Rank Sarthi breaks that number down by subject, chapter, topic, question type, error type and attempt behaviour, and converts it into a preparation priority.",
  },
  {
    q: "How does Rank Sarthi decide what I should work on next?",
    a: "Every question is tagged to a concept, a difficulty band and a likely error type. Your attempt is analysed against those tags, and gaps are ranked by the marks they are costing rather than by how many mistakes they produced.",
  },
  {
    q: "Can I use Rank Sarthi with another coaching institute?",
    a: "Yes. Rank Sarthi is exam-pattern based and independent of any single syllabus schedule, so it works whether you study at an institute, online or on your own.",
  },
  {
    q: "Does Rank Sarthi support JEE, NEET and NDA?",
    a: "Yes — through JeeRankUp, NeetRankUp and NDARankUp. All three share one diagnostic engine, with exam-specific analysis for each pattern.",
  },
  {
    q: "What can parents see?",
    a: "Parents get a plain-language view of preparation: which areas are strong, which need attention, whether accuracy is trending up and what the current priority is. It is visibility, not surveillance.",
  },
  {
    q: "How does NDARankUp work?",
    a: "NDARankUp analyses Mathematics and GAT performance with attention to speed, accuracy and attempt strategy, then highlights the part of preparation that deserves attention next.",
  },
  {
    q: "Can coaching institutes use Rank Sarthi?",
    a: "Yes. Institutes can use the diagnostic layer across batches to see performance patterns, common weak areas and where academic intervention is needed. Get in touch for a walkthrough.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rank Sarthi | Preparation Intelligence for JEE, NEET & NDA" },
      {
        name: "description",
        content:
          "Rank Sarthi analyses how you solve, where you lose marks and what to work on next across JEE, NEET and NDA preparation. Take your first diagnostic.",
      },
      { property: "og:title", content: "Rank Sarthi | Preparation Intelligence for JEE, NEET & NDA" },
      {
        property: "og:description",
        content:
          "Your rank has a reason. Rank Sarthi shows where marks are lost, why the pattern exists and what deserves attention next.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Rank Sarthi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rank Sarthi | Preparation Intelligence for JEE, NEET & NDA" },
      {
        name: "twitter:description",
        content: "Diagnostic preparation intelligence for JEE, NEET and NDA aspirants.",
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
            "Preparation intelligence for JEE, NEET and NDA aspirants — diagnostic analysis of where marks are lost and what to work on next.",
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
        <InstitutionStrip />
        <ProductShowcase />
        <EducatorReview />
        <DiagnosticIdea />
        <ExamTracks />
        <AspirantMoment />
        <Methodology />
        <ProductDepth />
        <ProductNumbers />
        <Situations />
        <EducatorThinking />
        <ParentBand />
        <SocialProof />
        <NdaFlagship />
        <AuthorityPeople />
        <How />
        <Institutes />
        <TrustSignals />
        <Pricing />
        <NewBrandTrust />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function How() {
  const steps = [
    { n: "01", title: "Attempt", body: "Take a Rank Sarthi diagnostic or a supported assessment in exam conditions." },
    {
      n: "02",
      title: "Diagnose",
      body: "Understand the concepts, mistakes and performance patterns influencing your score.",
    },
    {
      n: "03",
      title: "Improve",
      body: "Focus preparation on what deserves attention next, then measure whether it actually changed.",
    },
  ];
  return (
    <section id="how" className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">How it works</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Test. Diagnose. <span className="text-accent">Improve.</span>
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} as="li">
              <div className="border-t border-border pt-6">
                <span className="font-display text-5xl font-bold tracking-tight text-secondary-foreground/15">
                  {s.n}
                </span>
                <h3 className="mt-4 text-display-md text-primary">{s.title}</h3>
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
  const points = [
    "Batch-level performance patterns",
    "Student segmentation by weak area",
    "Chapter weakness trends across a cohort",
    "Common error patterns before the next test",
  ];
  return (
    <section id="institutes" className="section-pad bg-ivory">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <p className="eyebrow text-accent">For institutes</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Know which student needs what — before the next test.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Rank Sarthi gives institutes a diagnostic layer above conventional test results, helping academic
            teams understand performance patterns across students and batches.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={p("Rank Sarthi for Institutes")}
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-navy-soft"
            >
              Explore Rank Sarthi for institutes <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={p("Request a Demo")}
              className="btn-press inline-flex items-center rounded-lg border border-border px-6 py-3.5 text-sm font-bold text-primary hover:bg-background"
            >
              Request a demo
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
            {points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 px-6 py-5 text-sm font-semibold text-foreground/80">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
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
      note: "Experience the diagnostic",
      features: ["2 full-length tests / month", "Core diagnostic report", "Free resource library"],
      cta: "Start free",
      popular: false,
    },
    {
      name: "Pro",
      monthly: 499,
      note: "For serious aspirants",
      features: [
        "Unlimited tests",
        "Full diagnostic analysis",
        "Chapter and error-pattern insights",
        "Preparation priorities",
        "Progress tracking",
      ],
      cta: "Go Pro",
      popular: true,
    },
    {
      name: "Premium",
      monthly: 1499,
      note: "Everything, plus guidance",
      features: [
        "Everything in Pro",
        "Personalised preparation plan",
        "Mentor review sessions",
        "Parent visibility",
        "Priority support",
      ],
      cta: "Get Premium",
      popular: false,
    },
  ];
  const price = (m: number) => (m === 0 ? "₹0" : `₹${annual ? Math.round(m * 0.67) : m}`);

  return (
    <section id="pricing" className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Pricing</p>
          <h2 className="mt-5 text-display-lg text-primary">
            Start with diagnosis.
            <br />
            Upgrade when you need more.
          </h2>
        </Reveal>

        <Reveal className="mt-9">
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
                className={`card-lift flex h-full flex-col rounded-2xl bg-card p-8 ${
                  plan.popular ? "border-2 border-accent shadow-elevated" : "border border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-primary">{plan.name}</h3>
                  {plan.popular && (
                    <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-accent-foreground">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.note}</p>
                <p className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold text-primary">{price(plan.monthly)}</span>
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
                  className={`btn-press mt-8 rounded-lg px-5 py-3 text-center text-sm font-bold ${
                    plan.popular
                      ? "bg-accent text-accent-foreground"
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
    <section id="faq" className="section-pad bg-ivory">
      <div className="container-page grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="eyebrow text-accent">FAQ</p>
          <h2 className="mt-5 text-display-lg text-primary">Questions, answered.</h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 45}>
                <div className="overflow-hidden rounded-xl border border-border bg-background">
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
    <section id="cta" className="relative overflow-hidden bg-navy-gradient py-24 text-primary-foreground sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60" />
      <div className="container-page relative text-center">
        <Reveal>
          <p className="eyebrow text-gold">Your next score shouldn&rsquo;t be a surprise.</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-display-lg">
            Know what&rsquo;s holding your rank back.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/70">
            One diagnostic can show you where your preparation deserves attention next.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={p("Take your first diagnostic")}
              className="btn-press inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-bold text-accent-foreground shadow-elevated"
            >
              Take your first diagnostic <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#product"
              className="btn-press inline-flex items-center rounded-lg border border-white/35 px-8 py-4 text-sm font-bold hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/45">
            JeeRankUp • NeetRankUp • NDARankUp
          </p>
        </Reveal>
      </div>
    </section>
  );
}
