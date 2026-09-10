import type { InfoPageContent } from "../types";

/**
 * /jee/cutoff — JEE Main Advanced-eligibility NTA Score threshold (J01).
 * This page owns exactly one cutoff family. JoSAA and CSAB admission opening
 * and closing ranks are a different dataset and are not published here.
 */

export const jeeCutoff: InfoPageContent = {
  url: "/jee/cutoff",
  platform: "jee",
  slug: "cutoff",
  exam: "JEE Main",
  title: "JEE Main Cutoff: Official Advanced-Eligibility NTA Score Threshold",
  eyebrow: "Official qualifying threshold",
  intent: "Read the correct cutoff type before comparing any number",
  chips: ["Official NTA", "Qualifying threshold only", "No predicted marks"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "The General/UR lower boundary in the official JEE Main 2026 category-wise table used for JEE Advanced eligibility is an NTA Score of 93.4123549. This is a qualifying threshold for Paper 1 candidates, not an NIT, IIIT or GFTI admission closing rank." }] },
    { type: "note", tone: "source", children: [{ text: "Rank Sarthi does not publish expected marks, predicted cutoffs or a cutoff derived from paper difficulty." }] },
  ],
  freshness: { heading: "Official threshold status", recordIds: ["jee-main-2026-advanced-eligibility-threshold"], note: "Event-driven checking around official result publication; the value moves only after terminology review." },
  blocks: [
    {
      kind: "table",
      id: "main-2026-threshold",
      heading: "Official JEE Main 2026 Advanced-eligibility NTA Score",
      intro: "Official wording: category-wise cutoff of NTA Score for candidates to become eligible for JEE Advanced 2026 for Paper 1.",
      columns: ["Category", "NTA Score range shown by NTA", "Candidates"],
      rows: [
        ["UR-ALL", "100 to 93.4123549", "96,873"],
        ["UR-PwBD", "93.3244144 to 0.0023186", "4,391"],
        ["EWS-ALL", "93.4105172 to 82.4164528", "25,009"],
        ["OBC-ALL", "93.4105172 to 80.9232583", "67,597"],
        ["SC-ALL", "93.4105172 to 63.9172792", "37,522"],
        ["ST-ALL", "93.4041748 to 52.0174712", "18,790"],
      ],
      note: "Source: official NTA result notice of 20 April 2026. These are 2026 values and are not carried forward to another cycle.",
      jump: true,
    },
    {
      kind: "resources",
      id: "main-cutoff-source",
      heading: "Official source",
      rows: [
        {
          id: "jee-main-2026-threshold-source",
          eventLabel: "JEE Main 2026 result and Advanced-eligibility notice",
          eventDate: "20 Apr 2026",
          cells: [
            { label: "Official document", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Result notice with category-wise NTA Score cutoff", badge: "Official NTA", cta: "View Official Notice", href: "https://www.nta.ac.in/Download/Notice/Notice_20260420194021.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026" }
            ] },
          ],
        },
      ],
    },
    {
      kind: "table",
      id: "cutoff-type-selector",
      heading: "Three different things are called a JEE cutoff",
      intro: "Choose the decision you are making before reading a number.",
      columns: ["Your question", "Correct data type", "Owning source"],
      rows: [
        ["Was I above the Main threshold used for Advanced shortlisting?", "JEE Main Advanced-eligibility NTA Score threshold", "NTA result notice — shown on this page"],
        ["Was I inside a JEE Advanced rank list?", "JEE Advanced rank-list qualifying criteria", "JEE Advanced organising authority — see the Advanced cutoff page"],
        ["What rank closed a particular institute and programme?", "Admission opening and closing rank by year, round, institute, programme, seat type and category", "JoSAA and CSAB — a separate dataset, not ingested"],
      ],
      note: "Never compare an NTA Score threshold directly with an admission closing rank. They answer different questions.",
      jump: true,
    },
    {
      kind: "prose",
      id: "main-cutoff-boundary",
      heading: "Why admission ranks are not on this page",
      concepts: [
        {
          id: "main-cutoff-boundary-body",
          title: "Why admission ranks are not on this page",
          body: [
            { type: "paragraph", children: [{ text: "A JoSAA or CSAB closing rank is meaningful only with its full filter context: year, allocation round, institute, programme, seat type or category and rank basis. That dataset is not ingested, so no number from it appears here, labelled or unlabelled." }] },
            { type: "note", tone: "caution", children: [{ text: "2027 threshold: not officially announced. No prediction is published in its place." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Understand the Main result route" },
    { label: "Advanced Cutoff", url: "/jee/jee-advanced/cutoff", relation: "related", description: "See the separate Advanced rank-list qualifying criteria" },
    { label: "Answer Key", url: "/jee/answer-key", relation: "related", description: "Confirm the final-key state before reading a score" },
    { label: "Exam Dates", url: "/jee/exam-dates", relation: "related", description: "Check the official result milestones" },
  ],
  faqs: [
    { question: "Is this the NIT admission cutoff?", answer: [{ type: "paragraph", children: [{ text: "No. This table is the official NTA Score threshold used for JEE Advanced eligibility. NIT, IIIT and GFTI admission closing ranks belong to JoSAA and CSAB and are not published on this page." }] }] },
    { question: "What is the expected 2027 cutoff?", answer: [{ type: "paragraph", children: [{ text: "Not officially announced, and Rank Sarthi does not publish an expected or predicted cutoff." }] }] },
  ],
  sourceRefs: ["nta-jee-main-result-notice-2026"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Main Cutoff 2026: Advanced Eligibility NTA Score | Rank Sarthi",
    description: "See the official JEE Main 2026 category-wise NTA Score thresholds used for JEE Advanced eligibility, clearly separated from JoSAA and CSAB admission closing ranks.",
    ogTitle: "JEE Main 2026 Advanced-Eligibility NTA Score Threshold",
    ogDescription: "The official category-wise qualifying table, not an admission closing rank.",
    ogType: "article",
  },
};
