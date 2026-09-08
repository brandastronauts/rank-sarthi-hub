import type { InfoPageContent } from "../types";

/**
 * JEE Answer Key: latest official status.
 * Transcribed from the approved production copy in
 * "Rank Sarthi JEE Menu Completion and FreshnessWatch v1 Production Package"
 * (production date 9 September 2026), Section 5: Answer Key.
 *
 * This page carries live cycle values (2026 final-key state, 2027 monitored
 * status) via the `freshness` panel and its two approved FreshDataRecords in
 * src/content/freshness/records.ts, so those values are NOT duplicated as
 * hardcoded prose facts in the blocks below.
 *
 * Missing source ids (referenced in the package's structured production
 * record but not present in src/content/sources.ts, so NOT used below):
 * NTA-DOCS, NTA-FINAL-KEY-S2-P1-2026, NTA-FINAL-KEY-S2-P2-2026,
 * ADV-HOME-2026, ADV-FINAL-KEY-P1-2026, ADV-FINAL-KEY-P2-2026.
 */
export const jeeAnswerKey: InfoPageContent = {
  url: "/jee/answer-key",
  platform: "jee",
  slug: "answer-key",
  exam: "JEE Main and JEE Advanced",
  contentStatus: "draft",
  title: "JEE Answer Key: Latest Official Status",
  eyebrow: "JEE Answer Key",
  intent: "Check whether the latest official JEE answer key is provisional or final and reach the owning source",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Check the official answer-key status panel below for the current position, source and verification date before treating any key as final.",
        },
      ],
    },
  ],
  freshness: {
    heading: "Official answer-key status",
    recordIds: ["jee-main-2026-s2-p1-final-key", "jee-advanced-2026-final-keys"],
  },
  blocks: [
    {
      kind: "prose",
      id: "provisional-vs-final",
      heading: "Provisional and final keys answer different questions",
      concepts: [
        {
          id: "not-announced",
          title: "Not announced",
          body: [
            {
              type: "paragraph",
              children: [{ text: "The owning authority has not published a key for the monitored exam record. Do not use a fake download link or an unofficial date." }],
            },
          ],
        },
        {
          id: "provisional",
          title: "Provisional",
          body: [
            {
              type: "paragraph",
              children: [{ text: "The authority has published an initial key and may provide a defined challenge process. Read the official notice, deadline, fee and evidence rules before acting." }],
            },
          ],
        },
        {
          id: "final",
          title: "Final",
          body: [
            {
              type: "paragraph",
              children: [{ text: "The authority has issued the key used for final evaluation or result compilation. Use this for official answer verification, while respecting dropped or revised items shown by the authority." }],
            },
          ],
        },
        {
          id: "usage-cautions",
          title: "Usage cautions",
          body: [
            {
              type: "list",
              items: [
                [{ text: "Do not label a coaching answer key as \"official\"." }],
                [{ text: "Do not combine a Session 1 paper with a Session 2 key." }],
                [{ text: "Do not assume that a provisional challenge changes the key until the authority publishes the final record." }],
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "safe-answer-key-workflow",
      heading: "Safe answer-key workflow",
      concepts: [
        {
          id: "workflow-steps",
          title: "Safe answer-key workflow",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Confirm exam, year, paper, session, date and shift." }],
                [{ text: "Open the owning authority's notice or PDF." }],
                [{ text: "Check whether the document says provisional or final." }],
                [{ text: "If provisional, read the official challenge window and evidence instructions." }],
                [{ text: "If final, verify that it matches the paper attempted." }],
                [{ text: "Use " }, { text: "previous year papers", href: "/jee/previous-year-papers" }, { text: " for the source paper." }],
                [{ text: "Use " }, { text: "paper analysis", href: "/jee/analysis" }, { text: " only if a reviewed Rank Sarthi dataset is visibly available." }],
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE hub", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "Exam dates", url: "/jee/exam-dates", relation: "related", description: "Check the current event timeline" },
    { label: "Previous year papers", url: "/jee/previous-year-papers", relation: "related", description: "Match a key to its paper" },
    { label: "Analysis", url: "/jee/analysis", relation: "related", description: "Separate official key facts from derived analysis" },
    { label: "Cutoff", url: "/jee/cutoff", relation: "related", description: "Move from result evidence to the correct threshold type" },
  ],
  faqs: [
    {
      question: "Is a JEE Main 2027 answer key available?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Check the official answer-key status panel above for the current monitored-cycle position and its verification date." }],
        },
      ],
    },
    {
      question: "What is the latest verified official JEE Main key in this package?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "See the official answer-key status panel above, which lists the latest verified JEE Main state with its source and verification date." }],
        },
      ],
    },
    {
      question: "What is the latest verified JEE Advanced key in this package?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "See the official answer-key status panel above, which lists the latest verified JEE Advanced state with its source and verification date." }],
        },
      ],
    },
  ],
  sourceRefs: ["nta-jee-main-documents", "nta-jee-main-final-key-s2-p1-2026", "nta-jee-main-final-key-p2-2026", "jee-advanced-home-2026"],
  sourceNote: "Key states shown above are carried by monitored FreshnessWatch records, each with its owning authority and verification date. Answer-key content itself is never reproduced here.",
  contributorPolicy: [
    "Written by: Exam information editor",
    "Fact-checked by: Freshness Editor or Exam Process Reviewer",
    "Minimum qualification: Graduate-level qualification plus documented official-notice verification experience",
    "Review scope: Cycle, session, paper, provisional/final state, publication timestamp when visible, official link and stale fallback",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "JEE Answer Key: Latest Official Main and Advanced Status",
    description: "Check the latest official JEE Main and JEE Advanced answer-key status, provisional or final state, source and last verified date.",
    ogTitle: "Latest Official JEE Answer Key Status",
    ogDescription: "Current cycle first, with provisional and final keys kept clearly separate.",
    ogType: "article",
  },
};
