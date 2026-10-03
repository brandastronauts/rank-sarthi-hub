import type { ChapterContent } from "@/content/types";

/**
 * Gravitation — T06 production content (Batch 04, 8 September 2026).
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
 *   keeps /jee/physics/gravitation on noindex until review is recorded.
 */
export const jeePhysicsGravitation: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Gravitation",
  slug: "gravitation",
  url: "/jee/physics/gravitation",
  canonicalIntent:
    "Connect gravitational force, field, potential, energy, and orbital motion without mixing vector and scalar quantities.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
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
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every subject.",
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
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency, or forecast is asserted. Official papers are linked for evidence-safe practice, and any question classified by chapter, field, potential, g variation, circular orbit, Kepler relation, geostationary condition, or escape, requires human academic review first.",
  contributorPolicy: [
    "Written by: Unassigned. Ideal author type: a JEE Physics educator experienced in gravitation, energy methods, and orbital mechanics.",
    "Academically reviewed by: Unassigned. Required expertise: classical mechanics and Newtonian gravitation. Required qualification: postgraduate degree in Physics or a closely related discipline, or an engineering degree with documented JEE Physics teaching expertise.",
    "Last reviewed: pending completion of academic review.",
    "Sources checked: NTA JEE Main syllabus, JEE Advanced syllabus, NCERT Gravitation, and official paper archives.",
    "Review scope: potential signs, radius definitions, orbit conditions, the depth-model caveat, formulas, worked reasoning, links, metadata, and schema-content parity.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Gravitation for JEE: Field, Potential, Orbits, Escape",
    description:
      "Learn JEE Gravitation through force, field, potential, satellite orbits, escape velocity, formula conditions, worked reasoning, and common traps.",
    ogTitle: "Gravitation for JEE",
    ogDescription:
      "Condition-aware gravitation, from inverse-square fields to satellite energy and escape.",
  },
};
