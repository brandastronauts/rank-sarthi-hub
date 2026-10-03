import type { ChapterContent } from "@/content/types";

/**
 * Semiconductors — T06 production content (Batch 04, 8 September 2026).
 *
 * Evidence discipline:
 * - The current JEE Advanced 2026 Physics syllabus does not explicitly list
 *   semiconductors or electronic devices, so no Advanced mapping is claimed.
 * - No weightage, trend or question-count claims. No named contributor yet.
 * - contentStatus stays "draft"; the registry keeps this route noindex until
 *   academic review, source sign-off, and link/schema/render QA pass.
 */
export const jeePhysicsSemiconductors: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Electronic Devices",
  slug: "semiconductors",
  url: "/jee/physics/semiconductors",
  canonicalIntent:
    "Connect carrier behaviour and junction bias to diode devices, rectification, regulation and logic without applying ideal models blindly.",

  heroChips: [
    "Mapped to JEE Main 2026 only",
    "Not explicit in the current JEE Advanced 2026 Physics syllabus",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "forward",
      description: "Extend into the broader Modern Physics family context.",
    },
    {
      label: "Dual Nature of Matter",
      url: "/jee/physics/dual-nature-of-matter",
      relation: "related",
      description: "Connect carrier and photon reasoning across the Modern Physics family.",
    },
    {
      label: "Modern Physics",
      url: "/jee/physics/modern-physics",
      relation: "related",
      description: "See how this chapter fits the broader Modern Physics umbrella.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "prerequisite",
      description: "Stabilise current, potential difference and circuit-path reasoning.",
    },
    {
      label: "Atoms and Nuclei",
      url: "/jee/physics/atoms-and-nuclei",
      relation: "prerequisite",
      description: "Review atomic energy levels before band and carrier ideas.",
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
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every subject.",
    },
    {
      label: "Previous Year Papers",
      url: "/jee/previous-year-papers",
      relation: "related",
      description: "Connect device reasoning with reviewed official problems.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents, and the current Advanced syllabus does not explicitly list semiconductors or electronic devices, so no Advanced mapping is claimed. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter requires human academic review first.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: a JEE Physics educator experienced in semiconductor devices, circuits, and logic.",
    "Academically reviewed by: Unassigned. Required expertise: solid-state or semiconductor Physics, basic electronic devices, rectifier circuits, and digital logic. Required qualification: postgraduate degree in Physics, Electronics, Electrical Engineering, or a closely related discipline, with device and JEE-scope expertise.",
    "Last reviewed: pending completed academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus for explicit-scope comparison, NCERT Semiconductor Electronics, and official Main paper sources.",
    "Independent checker: verifies Main-only labeling, carrier neutrality, bias direction, diode-model assumptions, device distinctions, Zener conditions, truth tables, links, metadata, and schema parity.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Electronic Devices for JEE Main: Diodes, Semiconductors, Logic",
    description:
      "Learn JEE Main semiconductors through carriers, p-n junction bias, diode curves, rectifiers, Zener regulation, light devices, logic gates, and traps.",
    ogTitle: "Semiconductors for JEE Main",
    ogDescription:
      "A device-aware guide to junction bias, diodes, rectification, regulation, and logic.",
  },
};
