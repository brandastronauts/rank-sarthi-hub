import type { ChapterContent } from "@/content/types";

/**
 * Electrostatics — RENDERING SCAFFOLD.
 *
 * contentStatus: "scaffold". This record exists to prove the T06 rendering
 * contract. It deliberately carries NO formulas, PYQ records, trend records,
 * priority records or reviewer: those blocks must disappear rather than be
 * filled with invented academic data. The Content Engine will populate them.
 */
export const jeePhysicsElectrostatics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Electrostatics",
  slug: "electrostatics",
  url: "/jee/physics/electrostatics",
  canonicalIntent:
    "Understand how Electrostatics is positioned in JEE Physics preparation and where marks are typically lost in it.",
  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Electrostatics is a JEE Physics chapter. Verified explanatory content, formula records and previous-year evidence for this chapter have not been loaded yet, so this page currently shows structure only and is excluded from search indexing.",
        },
      ],
    },
  ],
  prerequisites: [],
  syllabusMapping: {
    unit: "Electrostatics",
    topics: [],
    syllabusUrl: "/jee/syllabus",
  },
  conceptBlocks: [
    {
      id: "scope",
      title: "What this page will cover",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Concept sections, the formula sheet, previous-year appearances, weightage signals and the Preparation Intelligence mistake mapping for this chapter are supplied by the Rank Sarthi Content Engine. Each of those modules appears here automatically once its verified record exists; none of them is written or estimated by the template.",
            },
          ],
        },
      ],
    },
  ],
  diagnosticCta: {
    destinationId: "diagnostic",
    headline: "See what your Electrostatics loss actually is",
    body: "A diagnostic separates a concept gap from an execution slip and from a selection mistake, chapter by chapter.",
  },
  relatedChapters: [
    {
      label: "JEE Syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Subject, unit and topic structure for JEE.",
    },
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "same-unit",
      description: "Adjacent Physics chapter in the same preparation sequence.",
    },
  ],
  sources: ["nta-jee-syllabus"],
  contentStatus: "scaffold",
  meta: {
    title: "Electrostatics — JEE Physics | Rank Sarthi",
    description:
      "How Electrostatics fits into JEE Physics preparation: syllabus mapping, concept structure and the diagnostic reading of where marks are lost in this chapter.",
    ogType: "article",
  },
};
