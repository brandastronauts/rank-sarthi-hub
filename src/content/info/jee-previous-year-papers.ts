import type { InfoPageContent } from "../types";

/**
 * JEE Previous Year Papers: official-source paper library.
 * Transcribed from the approved production copy in
 * "Rank Sarthi JEE Menu Completion and FreshnessWatch v1 Production Package"
 * (production date 9 September 2026), Section 4: Previous Year Papers.
 *
 * Missing source ids (referenced in the package's structured production
 * record but not present in src/content/sources.ts, so NOT used below):
 * NTA-QP-2026, ADV-HOME-2026, ADV-P1-EN-2026, ADV-P1-HI-2026,
 * ADV-P2-EN-2026, ADV-P2-HI-2026. Only "nta-jee-main-question-papers" and
 * "jee-advanced-paper-archive" already exist in the registry and are used.
 */
export const jeePreviousYearPapers: InfoPageContent = {
  url: "/jee/previous-year-papers",
  platform: "jee",
  slug: "previous-year-papers",
  exam: "JEE Main and JEE Advanced",
  contentStatus: "draft",
  title: "JEE Previous Year Papers: Official-Source Paper Library",
  eyebrow: "JEE Previous Year Papers",
  intent: "Find an official JEE paper with unambiguous exam, year, paper or session, shift, language and source",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Use a previous year paper only when you can identify its exam, year, paper or session, shift where applicable, language and source. This page links to official paper resources. It does not attach invented chapter weightage, question frequency or difficulty trends.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "table",
      id: "archive-status",
      heading: "Archive status",
      columns: ["Field", "Verified position"],
      rows: [
        ["Latest verified JEE Main paper set", "2026 Session 2 Paper 1 shift papers listed by NTA"],
        ["Latest verified JEE Advanced paper set", "2026 Paper 1 and Paper 2, English and Hindi, published by the official authority"],
        ["Rights approach", "Link to official-hosted files; do not rehost unless permission and provenance review pass"],
        ["Last verified", "9 September 2026, IST"],
      ],
    },
    {
      kind: "prose",
      id: "select-the-paper-you-need",
      heading: "Select the paper you actually need",
      concepts: [
        {
          id: "four-questions",
          title: "Select the paper you actually need",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Before opening a file, answer four questions:" }],
            },
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Are you preparing for JEE Main or JEE Advanced?" }],
                [{ text: "Which year and cycle do you need?" }],
                [{ text: "For Main, which session, date and shift are you selecting?" }],
                [{ text: "Do you need the paper alone, the provisional key, the final key or a reviewed analysis?" }],
              ],
            },
            {
              type: "paragraph",
              children: [{ text: "A paper without this identity can lead to the wrong pattern assumptions or an incorrect answer-key pairing." }],
            },
          ],
        },
      ],
    },
    {
      kind: "table",
      id: "jee-main-2026-s2-p1-catalogue",
      heading: "JEE Main 2026, Paper 1, Session 2",
      intro: "NTA's official question-paper navigation lists the following B.E./B.Tech papers. Each paper contains Mathematics, Physics and Chemistry sections. Rank Sarthi should deep-link to the NTA-hosted file only after rendered-link QA.",
      columns: ["Date", "Shift", "Exam", "Paper", "Subject coverage", "Official source", "Provenance status"],
      rows: [
        ["2 April 2026", "Shift 1", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["2 April 2026", "Shift 2", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["4 April 2026", "Shift 1", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["4 April 2026", "Shift 2", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["5 April 2026", "Shift 1", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["5 April 2026", "Shift 2", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["6 April 2026", "Shift 1", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["6 April 2026", "Shift 2", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
        ["8 April 2026", "Shift 2", "JEE Main", "Paper 1 B.E./B.Tech", "Mathematics, Physics, Chemistry", "NTA JEE Main question-paper index", "Official-hosted, link only"],
      ],
      note: "The NTA source checked for this production package did not list an 8 April Shift 1 Paper 1 file. Do not infer or fabricate a missing file.",
    },
    {
      kind: "table",
      id: "jee-advanced-2026-catalogue",
      heading: "JEE Advanced 2026",
      columns: ["Date", "Paper", "Language", "Official source", "Provenance status"],
      rows: [
        ["17 May 2026", "Paper 1", "English", "Official JEE Advanced 2026 PDF", "Official-hosted, link only"],
        ["17 May 2026", "Paper 1", "Hindi", "Official JEE Advanced 2026 PDF", "Official-hosted, link only"],
        ["17 May 2026", "Paper 2", "English", "Official JEE Advanced 2026 paper link", "Official-hosted, link only"],
        ["17 May 2026", "Paper 2", "Hindi", "Official JEE Advanced 2026 PDF", "Official-hosted, link only"],
      ],
      note: "The official JEE Advanced website posted these papers on 17 May 2026 and separately published final answer keys on 1 June 2026. Keep question-paper and answer-key links as distinct records.",
    },
    {
      kind: "prose",
      id: "better-way-to-use-a-paper",
      heading: "A better way to use an official paper",
      concepts: [
        {
          id: "pass-1-respect-the-paper",
          title: "Pass 1: Respect the paper",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Use its own instructions, time limits and marking rules. Do not import a rule from another year." }],
            },
          ],
        },
        {
          id: "pass-2-reconstruct-decisions",
          title: "Pass 2: Reconstruct decisions",
          body: [
            {
              type: "paragraph",
              children: [{ text: "For every attempted question, record the concept recognised, the method selected, the condition checked and the point at which your reasoning changed." }],
            },
          ],
        },
        {
          id: "pass-3-diagnose-the-miss",
          title: "Pass 3: Diagnose the miss",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Use only the approved PI v1.1 categories:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "Knowledge Gap", bold: true }, { text: ": the underlying concept or prerequisite was missing." }],
                [{ text: "Recall Gap", bold: true }, { text: ": the concept was known but a relation, fact or method could not be retrieved." }],
                [{ text: "Execution Error", bold: true }, { text: ": the plan was suitable but algebra, units, signs, reading or calculation failed." }],
                [{ text: "Decision / Selection Error", bold: true }, { text: ": the wrong model, method, option or attempt decision was chosen." }],
                [{ text: "Needs Review", bold: true }, { text: ": the evidence is insufficient to classify confidently." }],
              ],
            },
          ],
        },
        {
          id: "pass-4-return-to-the-chapter",
          title: "Pass 4: Return to the chapter",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Use the subject hub and prerequisite links to repair the cause, then retry the question without memorising the answer." }],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "what-this-page-does-not-claim",
      heading: "What this page intentionally does not claim",
      concepts: [
        {
          id: "non-claims",
          title: "What this page intentionally does not claim",
          body: [
            {
              type: "list",
              items: [
                [{ text: "No chapter weightage or frequency appears without an approved audited dataset." }],
                [{ text: "No shift is labelled easy, moderate or difficult." }],
                [{ text: "No future question count or expected-question list is inferred." }],
                [{ text: "No unofficial reconstruction is presented as an official paper." }],
                [{ text: "No third-party file is described as official merely because it reproduces an official-looking layout." }],
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "provenance-and-rights",
      heading: "Provenance and rights",
      concepts: [
        {
          id: "provenance-statement",
          title: "Provenance and rights statement",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Each resource is a provenance record, not a bare download. Papers are linked to official-hosted files only; Rank Sarthi does not rehost a paper without permission and a provenance review passing. Treat a file as official only when its provenance leads to the owning exam authority or an authenticated official archive." }],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE hub", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Confirm exam identity" },
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "related", description: "Confirm exam identity" },
    { label: "Answer key", url: "/jee/answer-key", relation: "related", description: "Find the matching official key status" },
    { label: "Analysis", url: "/jee/analysis", relation: "related", description: "See official facts separately from Rank Sarthi analysis" },
    { label: "Physics", url: "/jee/physics", relation: "forward", description: "Repair diagnosed gaps" },
    { label: "Chemistry", url: "/jee/chemistry", relation: "forward", description: "Repair diagnosed gaps" },
    { label: "Mathematics", url: "/jee/mathematics", relation: "forward", description: "Repair diagnosed gaps" },
  ],
  faqs: [
    {
      question: "Where should I download JEE papers?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Prefer the NTA JEE Main website for Main papers and the official JEE Advanced website for Advanced papers. Check the year, session, shift, paper and language before downloading." }],
        },
      ],
    },
    {
      question: "Is a coaching-site paper the same as an official paper?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Not necessarily. Treat a file as official only when its provenance leads to the owning exam authority or an authenticated official archive." }],
        },
      ],
    },
    {
      question: "Does Rank Sarthi provide paper trends here?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. Trend claims remain hidden until a complete, versioned and reviewed analysis dataset exists." }],
        },
      ],
    },
  ],
  sourceRefs: ["nta-jee-main-question-papers", "jee-advanced-paper-archive"],
  sourceNote: "The package's structured production record cites additional source ids (NTA-QP-2026, ADV-HOME-2026, ADV-P1-EN-2026, ADV-P1-HI-2026, ADV-P2-EN-2026, ADV-P2-HI-2026) that are not yet present in the source registry; they are not referenced above and must be added before they can be cited.",
  contributorPolicy: [
    "Written by: JEE content librarian or exam-resource editor",
    "Fact-checked by: Exam Process Reviewer",
    "Minimum qualification: Graduate-level qualification plus demonstrated source-verification and rights/provenance handling experience",
    "Review scope: File identity, year, session, shift, language, official URL, paper-key pairing and rights status",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "JEE Previous Year Papers: Official Main and Advanced PDFs",
    description: "Find provenance-checked JEE Main and JEE Advanced papers by year, paper, session, shift and language, with official-source links and usage guidance.",
    ogTitle: "Official-Source JEE Previous Year Papers",
    ogDescription: "Choose the correct exam, year, session, shift and language before you practise.",
    ogType: "article",
  },
};
