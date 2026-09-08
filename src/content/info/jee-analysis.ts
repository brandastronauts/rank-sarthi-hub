import type { InfoPageContent } from "../types";

/**
 * /jee/analysis — JEE Paper Analysis: Official Evidence Before Interpretation.
 * Transcribed from the approved production package (§6). No difficulty
 * ratings, trends or predicted analysis are present; derived analysis
 * remains hidden until an approved dataset exists (see freshness record
 * jee-2026-rank-sarthi-analysis-status).
 */
export const jeeAnalysis: InfoPageContent = {
  url: "/jee/analysis",
  platform: "jee",
  slug: "analysis",
  exam: "JEE Main and JEE Advanced",
  title: "JEE Paper Analysis: Official Evidence Before Interpretation",
  intent: "Find a paper's official evidence and understand whether a reviewed Rank Sarthi analysis exists",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Official 2026 JEE Main and JEE Advanced papers and final answer keys are available from their owning authorities. No approved 2026 paper-analysis dataset was supplied for this production package. Derived difficulty, chapter distribution and trend modules must remain hidden.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page will never label a paper easy, moderate or difficult merely because that description is common elsewhere. Analysis begins only after the exact official paper and final key are identified.",
        },
      ],
    },
  ],
  contentStatus: "draft",
  freshness: {
    heading: "Analysis readiness",
    recordIds: ["jee-2026-rank-sarthi-analysis-status"],
  },
  blocks: [
    {
      kind: "table",
      id: "official-fact-vs-analysis",
      heading: "Official fact and Rank Sarthi analysis are different layers",
      columns: ["Layer", "May contain", "Must not contain"],
      rows: [
        [
          "Official fact",
          "Exam, year, paper, session, shift, official paper URL, provisional/final key URL, authority publication state",
          "Rank Sarthi opinions presented as official",
        ],
        [
          "Rank Sarthi analysis",
          "Reviewed question classification, concept relationships, solution-path observations and PI error opportunities from a versioned dataset",
          "Unreviewed difficulty labels, invented weightage, incomplete counts presented as trends or predictions",
        ],
      ],
      jump: true,
    },
    {
      kind: "prose",
      id: "what-can-be-published-now",
      heading: "What can be published now",
      concepts: [
        {
          id: "what-can-be-published-now-body",
          title: "What can be published now",
          body: [
            {
              type: "list",
              items: [
                [{ text: "the exact paper identity" }],
                [{ text: "the official question-paper source" }],
                [{ text: "the official final answer-key source" }],
                [{ text: "the date each official resource became available when the authority exposes it" }],
                [{ text: "the analysis dataset status" }],
                [{ text: "the review status" }],
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "It cannot yet show a Rank Sarthi analysis result because no auditable analysed dataset was supplied.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "analysis-method-required",
      heading: "Analysis method required before a derived block becomes visible",
      concepts: [
        {
          id: "analysis-method-required-body",
          title: "Analysis method required before a derived block becomes visible",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [
                  {
                    text: "Lock the paper identity: exam, cycle, paper, session, date, shift and language.",
                  },
                ],
                [
                  {
                    text: "Lock the answer key: use the official final key, recording revisions or dropped questions exactly as issued.",
                  },
                ],
                [
                  {
                    text: "Define the unit of analysis: one official question ID, with multi-part items handled consistently.",
                  },
                ],
                [
                  {
                    text: "Classify content: subject, chapter, prerequisite, linked concept and representation type. Multi-concept tagging must be allowed.",
                  },
                ],
                [
                  {
                    text: "Record solution evidence: viable method, governing condition and source-backed resolution.",
                  },
                ],
                [
                  {
                    text: "Review classifications: subject reviewer checks academic mappings; data reviewer checks completeness and denominators.",
                  },
                ],
                [
                  {
                    text: "Publish methodology: show dataset version, coverage, exclusions and review date with any result.",
                  },
                ],
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Until all seven steps pass, the public output is \u201cAnalysis pending reviewed dataset\u201d, not a generic verdict.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "pi-observation-model",
      heading: "PI v1.1 observation model",
      concepts: [
        {
          id: "pi-observation-model-body",
          title: "PI v1.1 observation model",
          body: [
            {
              type: "paragraph",
              children: [{ text: "When a reviewed dataset exists, analysis can help a student ask better questions:" }],
            },
            {
              type: "list",
              items: [
                [
                  { text: "Knowledge Gap", bold: true },
                  { text: ": Which prerequisite or concept prevented a valid start?" },
                ],
                [
                  { text: "Recall Gap", bold: true },
                  { text: ": Which known relationship or fact was unavailable under paper conditions?" },
                ],
                [
                  { text: "Execution Error", bold: true },
                  { text: ": Where did calculation, algebra, reading, units or signs fail after a sound plan?" },
                ],
                [
                  { text: "Decision / Selection Error", bold: true },
                  { text: ": Was the wrong model, method, option or attempt decision selected?" },
                ],
                [
                  { text: "Needs Review", bold: true },
                  { text: ": Is there insufficient evidence to assign a primary cause?" },
                ],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [{ text: "These labels diagnose a student's response. They are not automatic labels for the official paper." }],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "future-analysis-card-template",
      heading: "Future analysis card template",
      concepts: [
        {
          id: "future-analysis-card-template-body",
          title: "Future analysis card template",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Keep this card hidden until data exists:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "Paper: [EXACT OFFICIAL IDENTITY]" }],
                [{ text: "Official question paper: [OFFICIAL URL]" }],
                [{ text: "Official final key: [OFFICIAL URL]" }],
                [{ text: "Dataset version: [VERSION]" }],
                [{ text: "Questions classified: [VERIFIED COUNT AND DENOMINATOR]" }],
                [{ text: "Exclusions: [VISIBLE EXPLANATION]" }],
                [{ text: "Academic reviewer: [REAL PERSON]" }],
                [{ text: "Method last reviewed: [DATE]" }],
                [{ text: "Analysis status: REVIEWED / CORRECTION_PENDING / WITHDRAWN" }],
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "Previous Year Papers", url: "/jee/previous-year-papers", relation: "related", description: "Select the exact official paper" },
    { label: "Answer Key", url: "/jee/answer-key", relation: "related", description: "Confirm final-key status" },
    { label: "Physics", url: "/jee/physics", relation: "forward", description: "Return from reviewed findings to learning paths" },
    { label: "Chemistry", url: "/jee/chemistry", relation: "forward", description: "Return from reviewed findings to learning paths" },
    { label: "Mathematics", url: "/jee/mathematics", relation: "forward", description: "Return from reviewed findings to learning paths" },
    { label: "Syllabus", url: "/jee/syllabus", relation: "related", description: "Check official chapter scope before classification" },
  ],
  faqs: [
    {
      question: "Is Rank Sarthi publishing a JEE 2026 difficulty verdict here?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. No reviewed analysis dataset was supplied, so difficulty and trend blocks remain hidden.",
            },
          ],
        },
      ],
    },
    {
      question: "What is safe to show before analysis is ready?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The exact official paper, final answer key, authority, publication state and the status of the analysis dataset.",
            },
          ],
        },
      ],
    },
    {
      question: "Why is a final key important?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Question classification and solution review must account for official revisions or dropped items before aggregate observations are calculated.",
            },
          ],
        },
      ],
    },
  ],
  sourceRefs: ["nta-jee-main-question-papers", "nta-jee-main-final-key-s2-p1-2026", "jee-advanced-home-2026", "jee-advanced-paper-archive"],
  sourceNote:
    "No source ids from this section exist yet in content/sources.ts (see report: NTA-QP-2026, NTA-FINAL-KEY-S2-P1-2026, ADV-HOME-2026, ADV-FINAL-KEY-P1-2026, ADV-FINAL-KEY-P2-2026 are missing).",
  contributorPolicy: [
    "Written by: JEE assessment editor",
    "Fact-checked by: Freshness Editor for paper and key identity",
    "Academically reviewed by: Subject-specialist reviewers for Physics, Chemistry and Mathematics before any derived analysis appears",
    "Minimum qualification: Relevant postgraduate subject qualification for academic analysis; documented data-audit experience for aggregate claims",
    "Review scope: Paper-key pairing, classification completeness, concept mapping, denominators, exclusions, PI interpretation and claim wording",
    "Sources checked: NTA question-paper and final-key records; official JEE Advanced papers and final keys",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "JEE Paper Analysis: Official Evidence and Reviewed Insights",
    description:
      "See official JEE paper and answer-key evidence first. Rank Sarthi analysis appears only after a complete, versioned and academically reviewed dataset exists.",
    ogTitle: "Evidence-First JEE Paper Analysis",
    ogDescription: "Official paper identity, final keys and a transparent gate for reviewed analysis.",
    ogType: "article",
  },
};
