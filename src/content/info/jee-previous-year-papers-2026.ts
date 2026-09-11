import type { InfoPageContent } from "../types";
import { jeeMainRowsFor } from "../resources/jee-main-papers";

export const jeePreviousYearPapers2026: InfoPageContent = {
  url: "/jee/previous-year-papers/2026",
  platform: "jee",
  slug: "previous-year-papers/2026",
  exam: "JEE Main",
  title: "JEE Main 2026 Question Papers",
  eyebrow: "Paper 1 resource finder",
  intent: "Browse JEE Main 2026 Paper 1 resources by session, date and shift",
  chips: ["Session 1", "Session 2", "Source-verified states"],
  contentStatus: "draft",
  answer: [{ type: "paragraph", children: [{ text: "JEE Main 2026 Paper 1 has 19 verified examination events. Session 1 contains 10 verified date-and-shift identities whose public paper files remain source-pending. Session 2 contains nine verified official NTA question-paper files. Official final answer-key companion data exists for both sessions. Detailed Rank Sarthi paper analysis remains blocked until reviewed question-level ingestion is complete." }] }],
  blocks: [
    {
      kind: "resources",
      id: "main-2026-session-1",
      heading: "JEE Main 2026 Session 1 — event identity verified, paper source pending",
      intro: "Choose the exact date and shift, then open the available paper and its separate official answer-key record.",
      rows: jeeMainRowsFor(2026, "Session 1"),
      note: "Analysis remains pending until reviewed question-level ingestion is complete.",
      jump: true,
    },
    {
      kind: "resources",
      id: "main-2026-session-2",
      heading: "JEE Main 2026 Session 2 — official Paper 1 papers",
      intro: "Choose the exact date and shift, then open the available paper and its separate official answer-key record.",
      rows: jeeMainRowsFor(2026, "Session 2"),
      note: "Analysis remains pending until reviewed question-level ingestion is complete.",
      jump: true,
    },
  ],
  relatedLinks: [
    { label: "All JEE Main previous-year papers", url: "/jee/previous-year-papers", relation: "up", description: "Return to the main Paper 1 resource finder" },
    { label: "JEE Answer Key", url: "/jee/answer-key", relation: "related", description: "Open verified official provisional notices and final keys" },
    { label: "JEE Exam Dates", url: "/jee/exam-dates", relation: "related", description: "Check the official exam timeline" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Understand the JEE Main examination route" },
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
  ],
  sourceRefs: ["nta-jee-main-question-papers", "nta-jee-main-s1-final-key-2026", "nta-jee-main-s2-final-key-2026"],
  sourceNote: "Paper access does not establish a reviewed question-level analysis dataset. External resources are linked and not rehosted.",
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Main 2026 Question Papers: Session & Shift Resources | Rank Sarthi",
    description: "Browse JEE Main 2026 Paper 1 resources by session, date and shift. Official NTA papers are available for verified Session 2 events, while unavailable paper sources remain clearly marked pending.",
    ogTitle: "JEE Main 2026 Question Papers by Session and Shift",
    ogDescription: "Browse JEE Main 2026 Paper 1 resources by session, date and shift. Official NTA papers are available for verified Session 2 events, while unavailable paper sources remain clearly marked pending.",
    ogType: "article",
  },
};
