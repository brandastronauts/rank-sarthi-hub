import type { ChapterContent } from "@/content/types";

/**
 * Alternating Current — T06 production content (Batch 04, 7 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/alternating-current on noindex until review is
 *   recorded.
 */
export const jeePhysicsAlternatingCurrent: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Alternating Current",
  slug: "alternating-current",
  url: "/jee/physics/alternating-current",
  canonicalIntent:
    "Select a frequency-dependent AC model, relate phasors to impedance and power, and separate circuit response from the origin of induced emf.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Stabilise potential difference, resistance and Kirchhoff's laws.",
    },
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "prerequisite",
      description: "Confirm induced emf and self-inductance before treating inductors in AC circuits.",
    },
    {
      label: "Capacitance",
      url: "/jee/physics/capacitance",
      relation: "related",
      description: "Connect capacitor behaviour with its frequency-dependent AC response.",
    },
    {
      label: "Simple Harmonic Motion",
      url: "/jee/physics/simple-harmonic-motion",
      relation: "related",
      description: "Reuse phase and angular frequency reasoning for AC phasors.",
    },
  ],
  links: [
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Return to the Physics subject hub.",
    },
    {
      label: "Physics syllabus",
      url: "/jee/syllabus/physics",
      relation: "up",
      description: "Official Physics scope.",
    },
    {
      label: "Previous Year Papers",
      url: "/jee/previous-year-papers",
      relation: "related",
      description: "Connect resonance and power-factor reasoning with reviewed official problems.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Provenance (B37)                                                    */
  /* ------------------------------------------------------------------ */
  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first. Flux-change and Lenz-law depth is deliberately routed to Electromagnetic Induction rather than duplicated here.",
  contributorPolicy: [
    "Author: a JEE Physics educator or academic content specialist experienced in AC circuit analysis, phasors and electrical machines.",
    "Academic reviewer: postgraduate qualification in Physics or an engineering degree with documented JEE Alternating Current teaching and solution-review experience, covering RMS values, reactance, series LCR resonance, power factor, and transformer behaviour.",
    "Independent checker: verifies official mapping, phase convention consistency, sinusoidal-condition statements, formula conditions and internal links.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Alternating Current for JEE: RMS, Impedance, Resonance",
    description:
      "Learn JEE Alternating Current through RMS values, reactance, impedance, series LCR resonance, power factor, transformers, conditions and traps.",
    ogTitle: "Alternating Current for JEE, Read Phase and Frequency",
    ogDescription:
      "A structured guide to sinusoidal voltage and current, reactance, impedance, resonance, power and transformers with official scope and diagnosis.",
  },
};
