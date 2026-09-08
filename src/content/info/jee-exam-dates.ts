import type { InfoPageContent } from "../types";

/**
 * /jee/exam-dates — JEE Exam Dates: Current Official Main and Advanced
 * Schedule Status. Transcribed from the approved production package (§8).
 * Every unannounced 2027 field appears only as the exact string
 * "Not officially announced"; the 2026 calendar is an explicit historical
 * archive, never a 2027 forecast. No Event schema data is included here.
 */
export const jeeExamDates: InfoPageContent = {
  url: "/jee/exam-dates",
  platform: "jee",
  slug: "exam-dates",
  exam: "JEE Main and JEE Advanced",
  title: "JEE Exam Dates: Current Official Main and Advanced Schedule Status",
  intent: "See what is officially announced now and distinguish it from the completed 2026 timeline",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Monitored cycle: 2027. The JEE Main 2027 and JEE Advanced 2027 schedules were not officially announced on the owning channels checked on 9 September 2026. Latest completed cycle: 2026.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Official sources checked: NTA JEE Main, official JEE Advanced website, JoSAA and CSAB.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Do not convert a customary month or a coaching estimate into an official date. The table below remains explicit until the owning authority publishes a source.",
        },
      ],
    },
  ],
  contentStatus: "draft",
  freshness: {
    heading: "Official schedule status",
    recordIds: ["jee-main-2027-schedule-status", "jee-advanced-2027-schedule-status"],
  },
  blocks: [
    {
      kind: "table",
      id: "jee-2027-official-status",
      heading: "JEE 2027 official-status table",
      columns: ["Field", "Status", "Value", "Source reference", "Announced at", "Last verified"],
      rows: [
        ["JEE Main information bulletin", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main homepage and documents", "Not announced", "9 Sep 2026"],
        ["JEE Main registration opens", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main registration closes", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main correction window", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main city intimation", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main admit card", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main Session 1 exam", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main Session 2 exam", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main answer key", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Main result", "NOT_ANNOUNCED", "Not officially announced", "NTA JEE Main", "Not announced", "9 Sep 2026"],
        ["JEE Advanced organising authority", "NOT_ANNOUNCED", "Not officially announced", "Official JEE Advanced channel", "Not announced", "9 Sep 2026"],
        ["JEE Advanced registration", "NOT_ANNOUNCED", "Not officially announced", "Official JEE Advanced channel", "Not announced", "9 Sep 2026"],
        ["JEE Advanced admit card", "NOT_ANNOUNCED", "Not officially announced", "Official JEE Advanced channel", "Not announced", "9 Sep 2026"],
        ["JEE Advanced examination", "NOT_ANNOUNCED", "Not officially announced", "Official JEE Advanced channel", "Not announced", "9 Sep 2026"],
        ["JEE Advanced answer key", "NOT_ANNOUNCED", "Not officially announced", "Official JEE Advanced channel", "Not announced", "9 Sep 2026"],
        ["JEE Advanced result", "NOT_ANNOUNCED", "Not officially announced", "Official JEE Advanced channel", "Not announced", "9 Sep 2026"],
        ["JoSAA 2027 schedule", "NOT_ANNOUNCED", "Not officially announced", "JoSAA", "Not announced", "9 Sep 2026"],
        ["CSAB 2027 schedule", "NOT_ANNOUNCED", "Not officially announced", "CSAB", "Not announced", "9 Sep 2026"],
      ],
      jump: true,
    },
    {
      kind: "table",
      id: "jee-main-2026-historical-timeline",
      heading: "Latest verified historical timeline: JEE Main 2026",
      intro: "This table is an archive. It is not a forecast for 2027.",
      columns: ["Milestone", "Official 2026 value", "Status note", "Source"],
      rows: [
        ["Session 1 application", "31 October to 27 November 2025", "Published in the 2026 information bulletin", "NTA 2026 Information Bulletin"],
        ["Session 1 Paper 1 examination", "21, 22, 23, 24 and 28 January 2026", "Actual Paper 1 dates shown in NTA's combined 2026 record", "NTA combined Session 1 and Session 2 Paper 1 document"],
        ["Session 2 application", "1 to 25 February 2026", "Published in NTA's Session 2 application notice", "NTA official notice"],
        ["Session 2 Paper 1 examination", "2, 4, 5, 6 and 8 April 2026", "Actual Paper 1 dates shown in NTA's combined 2026 record", "NTA combined Session 1 and Session 2 Paper 1 document"],
        ["Session 2 Paper 1 final key", "Available", "Final key used for result compilation", "NTA final answer-key PDF"],
        ["Session 2 Paper 1 score card", "Published 21 April 2026", "Official score-card page", "NTA JEE Main"],
        ["Session 2 Paper 2 score card", "Published 5 May 2026", "Official score-card page", "NTA JEE Main"],
      ],
      note: "The information bulletin initially described date windows and tentative milestones. The historical table uses actual-paper dates where NTA's later official records provide them.",
      jump: true,
    },
    {
      kind: "table",
      id: "jee-advanced-2026-historical-timeline",
      heading: "Latest verified historical timeline: JEE Advanced 2026",
      columns: ["Milestone", "Official 2026 value", "Status note", "Source"],
      rows: [
        ["Registration for JEE Main-qualified candidates", "Opened 23 April 2026; original close 2 May 2026", "The official homepage later extended registration to 5 May 2026 at 23:59 IST", "Official JEE Advanced site"],
        ["Admit card availability", "11 May to 17 May 2026", "Official important-dates page", "Official JEE Advanced site"],
        ["Examination", "17 May 2026", "Paper 1: 09:00 to 12:00 IST; Paper 2: 14:30 to 17:30 IST", "Official important-dates page"],
        ["Candidate responses", "21 May 2026 at 17:00 IST", "Official important-dates page", "Official JEE Advanced site"],
        ["Provisional answer keys", "25 May 2026 at 10:00 IST", "Official homepage and dates page", "Official JEE Advanced site"],
        ["Feedback window", "25 May 10:00 to 26 May 2026 17:00 IST", "Official important-dates page", "Official JEE Advanced site"],
        ["Final answer keys and result", "1 June 2026", "Official homepage posted availability at 2:45 IST", "Official JEE Advanced site"],
        ["JoSAA process start", "2 June 2026 at 17:00 IST", "Listed as tentative on the Advanced dates page; use JoSAA for the operative counselling schedule", "Official JEE Advanced page and JoSAA"],
      ],
      jump: true,
    },
    {
      kind: "prose",
      id: "counselling-source-position",
      heading: "Current counselling source position",
      concepts: [
        {
          id: "counselling-source-position-body",
          title: "Current counselling source position",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "JoSAA's official 2026 site provides opening and closing ranks and cycle documents. CSAB's official site was serving Session 2026 and displayed a public notice dated 8 September 2026 when checked. Counselling details belong to those authorities and should not be inferred from exam dates.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "how-to-use-this-page-safely",
      heading: "How to use this page safely",
      concepts: [
        {
          id: "how-to-use-this-page-safely-body",
          title: "How to use this page safely",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Read the monitored cycle at the top." }],
                [{ text: "Check status, not only value." }],
                [{ text: "Open the official source before taking an irreversible action." }],
                [{ text: "Treat \u201cNot officially announced\u201d as a valid status, not as missing editorial work." }],
                [{ text: "Recheck the source near an application, exam, challenge or counselling deadline." }],
                [{ text: "If two official documents conflict, follow the latest explicit correction only after editorial review." }],
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Understand Main papers and source ownership" },
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "related", description: "Understand Advanced eligibility and authority" },
    { label: "Answer Key", url: "/jee/answer-key", relation: "related", description: "Check provisional and final key states" },
    { label: "Cutoff", url: "/jee/cutoff", relation: "related", description: "Check post-result threshold types" },
    { label: "Previous Year Papers", url: "/jee/previous-year-papers", relation: "related", description: "Use completed-cycle official papers" },
  ],
  faqs: [
    {
      question: "When is JEE Main 2027?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Not officially announced" },
            { text: " on the NTA channels checked on 9 September 2026." },
          ],
        },
      ],
    },
    {
      question: "When is JEE Advanced 2027?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Not officially announced" },
            { text: " on the channels checked on 9 September 2026." },
          ],
        },
      ],
    },
    {
      question: "Can I use the 2026 calendar to predict 2027?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. The 2026 dates are shown only as a labelled historical record." }],
        },
      ],
    },
    {
      question: "Where should I confirm counselling dates?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Use the current official JoSAA or CSAB schedule for the applicable allocation route." },
          ],
        },
      ],
    },
  ],
  sourceRefs: ["nta-jee-main-home", "nta-jee-main-documents", "nta-jee-main-bulletin-2026", "nta-jee-main-p1-record-2026", "nta-jee-main-s2-application-2026", "nta-jee-main-score-p1-s2-2026", "nta-jee-main-score-p2-s2-2026", "jee-advanced-home-2026", "jee-advanced-dates-2026", "josaa-official", "csab-official"],
  sourceNote:
    "No source ids from this section exist yet in content/sources.ts (see report: NTA-HOME, NTA-DOCS, NTA-IB-2026, NTA-P1-COMBINED-2026, NTA-S2-APPLICATION-2026, NTA-SCORE-P1-S2-2026, NTA-SCORE-P2-S2-2026, ADV-HOME-2026, ADV-DATES-2026, JOSAA-HOME-2026, CSAB-HOME-2026 are missing).",
  contributorPolicy: [
    "Written by: Exam calendar editor",
    "Fact-checked by: Freshness Editor or Exam Process Reviewer",
    "Minimum qualification: Graduate-level qualification plus demonstrated experience reconciling official notices, corrections and extensions",
    "Review scope: Cycle, milestone, status, value, time zone, original announcement, superseding notice, source authority, verification time and fallback",
    "Sources checked: NTA JEE Main homepage, information bulletin, application notices, combined examination record, score-card pages, official JEE Advanced homepage and important-dates page, JoSAA and CSAB",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "JEE Exam Dates: Official Main and Advanced Schedule Status",
    description:
      "Check whether JEE Main and JEE Advanced dates are officially announced, with source, cycle, status and last verified date shown first.",
    ogTitle: "Official JEE Exam Date Status",
    ogDescription: "Current monitored cycle first, with verified 2026 dates kept clearly historical.",
    ogType: "article",
  },
};
