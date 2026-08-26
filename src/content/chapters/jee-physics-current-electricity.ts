import type { ChapterContent } from "@/content/types";

/**
 * Current Electricity — RENDERING SCAFFOLD.
 *
 * Scalability proof: this page exists as data only. No route, layout, JSX,
 * CSS or template change accompanies it. As with Electrostatics, no formulas,
 * PYQ records, trends, priority or reviewer are asserted, so those blocks do
 * not render until the Content Engine supplies verified records.
 */
export const jeePhysicsCurrentElectricity: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Current Electricity",
  slug: "current-electricity",
  url: "/jee/physics/current-electricity",
  canonicalIntent:
    "Understand how Current Electricity is positioned in JEE Physics preparation and where marks are typically lost in it.",
  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Current Electricity is a JEE Physics chapter. Verified explanatory content, formula records and previous-year evidence for this chapter have not been loaded yet, so this page currently shows structure only and is excluded from search indexing.",
        },
      ],
    },
  ],
  prerequisites: [
    {
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "prerequisite",
      description: "Preceding chapter in the same Physics sequence.",
    },
  ],
  syllabusMapping: {
    unit: "Current Electricity",
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
              text: "Concept sections, the formula sheet, previous-year appearances, weightage signals and the Preparation Intelligence mistake mapping for this chapter are supplied by the Rank Sarthi Content Engine. Each module appears automatically once its verified record exists.",
            },
          ],
        },
      ],
    },
  ],
  diagnosticCta: {
    destinationId: "diagnostic",
    headline: "See what your Current Electricity loss actually is",
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
      label: "Electrostatics",
      url: "/jee/physics/electrostatics",
      relation: "same-unit",
      description: "Adjacent Physics chapter in the same preparation sequence.",
    },
  ],
  sources: ["nta-jee-syllabus"],
  contentStatus: "scaffold",
  meta: {
    title: "Current Electricity — JEE Physics | Rank Sarthi",
    description:
      "How Current Electricity fits into JEE Physics preparation: syllabus mapping, concept structure and the diagnostic reading of where marks are lost in this chapter.",
    ogType: "article",
  },
};
