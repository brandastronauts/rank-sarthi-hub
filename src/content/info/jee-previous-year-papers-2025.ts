import type { InfoPageContent } from "../types";
import { jeeMainRowsFor } from "../resources/jee-main-papers";

export const jeePreviousYearPapers2025: InfoPageContent = {
  url: "/jee/previous-year-papers/2025",
  platform: "jee",
  slug: "previous-year-papers/2025",
  exam: "JEE Main",
  title: "JEE Main 2025 Question Papers",
  eyebrow: "Paper 1 resource finder",
  intent: "Browse JEE Main 2025 Paper 1 resources by session, date and shift",
  chips: ["Session 1", "Session 2", "Source-verified states"],
  contentStatus: "draft",
  answer: [{ type: "paragraph", children: [{ text: "Official NTA schedules verify 19 JEE Main 2025 Paper 1 examination events: 10 in Session 1 and nine in Session 2. Nine complete publisher-hosted Paper 1 reconstruction resources are labelled Verified Paper Reconstruction. The other 10 events remain Paper source verification pending. Official final Paper 1 answer keys are verified for both sessions." }] }],
  blocks: [
    {
      kind: "resources",
      id: "main-2025-session-1",
      heading: "JEE Main 2025 Session 1 — verified and source-pending Paper 1 resources",
      intro: "Choose the exact date and shift, then open the available paper and its separate official answer-key record.",
      rows: jeeMainRowsFor(2025, "Session 1"),
      note: "Analysis remains pending until reviewed question-level ingestion is complete.",
      jump: true,
    },
    {
      kind: "resources",
      id: "main-2025-session-2",
      heading: "JEE Main 2025 Session 2 — verified and source-pending Paper 1 resources",
      intro: "Choose the exact date and shift, then open the available paper and its separate official answer-key record.",
      rows: jeeMainRowsFor(2025, "Session 2"),
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
  sourceRefs: [
    "nta-jee-main-s1-schedule-2025",
    "nta-jee-main-s2-schedule-2025",
    "nta-jee-main-s1-provisional-notice-2025",
    "nta-jee-main-s1-final-key-2025",
    "nta-jee-main-s2-provisional-notice-2025",
    "nta-jee-main-s2-final-key-2025",
  ],
  sourceNote: "Paper access does not establish a reviewed question-level analysis dataset. External resources are linked and not rehosted.",
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Main 2025 Question Papers: Session & Shift Resources | Rank Sarthi",
    description: "Browse JEE Main 2025 Paper 1 resources by session, date and shift, with official answer keys, clearly labelled verified reconstructions and honest source-pending states.",
    ogTitle: "JEE Main 2025 Question Papers by Session and Shift",
    ogDescription: "Browse JEE Main 2025 Paper 1 resources by session, date and shift, with official answer keys, clearly labelled verified reconstructions and honest source-pending states.",
    ogType: "article",
  },
};
