import type { InfoPageContent } from "../types";

/**
 * /neet/cutoff — official NEET qualifying cutoffs only.
 * Every row is a National Testing Agency qualifying threshold. Medical college
 * admission closing ranks are deliberately excluded: they belong to counselling
 * authorities, not to NTA, and mixing the two misleads a candidate.
 */
export const neetCutoff: InfoPageContent = {
  url: "/neet/cutoff",
  platform: "neet",
  slug: "cutoff",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Cutoff: Official Qualifying Percentile and Marks by Category",
  eyebrow: "Official thresholds",
  intent: "Check whether a score clears the official qualifying threshold for a category",
  chips: ["Qualifying cutoff only", "Official NTA", "2024 to 2026"],
  meta: [
    { label: "Source owner", value: "National Testing Agency" },
    { label: "Excluded", value: "Admission closing ranks" },
  ],
  lastVerified: "10 September 2026",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "For NEET UG 2026, the UR and EWS qualifying threshold is the 50th percentile, with an official marks range of 715 to 213. Reserved categories qualify between the 40th and 50th percentile at 212 to 177 marks, and PwBD categories have their own bands. All values below are taken from the official NTA key-data document published with the 2026 result on 16 July 2026.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "A qualifying cutoff only decides whether you are eligible for counselling. It is not an admission cutoff and does not tell you which college you will get. College-level closing ranks are published by counselling authorities and are not shown on this page.",
        },
      ],
    },
  ],
  freshness: {
    heading: "Official cutoff status",
    recordIds: ["neet-2026-qualifying-cutoff"],
    note: "A new official cutoff is published only after human review of the authority document.",
  },
  blocks: [
    {
      kind: "table",
      id: "cutoff-2026",
      heading: "NEET UG 2026 official qualifying cutoff",
      intro:
        "Event: NEET UG 2026 Re-Examination held 21 June 2026, the result-bearing event of the cycle. Result published 16 July 2026.",
      columns: ["Category", "Qualifying percentile", "Official marks range", "Candidates qualified"],
      rows: [
        ["UR / EWS", "50th percentile or above", "715-213", "9,96,935"],
        ["OBC", "40th percentile or above, below 50th", "212-177", "81,111"],
        ["SC", "40th percentile or above, below 50th", "212-177", "29,947"],
        ["ST", "40th percentile or above, below 50th", "212-177", "12,452"],
        ["UR / EWS and PwBD", "45th percentile or above, below 50th", "212-194", "480"],
        ["OBC and PwBD", "40th percentile or above, below 45th", "193-177", "185"],
        ["SC and PwBD", "40th percentile or above, below 45th", "193-177", "64"],
        ["ST and PwBD", "40th percentile or above, below 45th", "191-177", "11"],
      ],
      note: "Source: official NTA key-data document published 16 July 2026. Qualifying thresholds only.",
    },
    {
      kind: "table",
      id: "cutoff-2025",
      heading: "NEET UG 2025 official qualifying cutoff",
      intro: "Event: NEET UG 2025 held 4 May 2025. Result published 14 June 2025.",
      columns: ["Category", "Qualifying percentile", "Official marks range", "Candidates qualified"],
      rows: [
        ["UR / EWS", "50th percentile or above", "686-144", "11,01,151"],
        ["OBC", "40th percentile or above, below 50th", "143-113", "88,692"],
        ["SC", "40th percentile or above, below 50th", "143-113", "31,995"],
        ["ST", "40th percentile or above, below 50th", "143-113", "13,940"],
        ["UR / EWS and PwBD", "45th percentile or above, below 50th", "143-127", "472"],
        ["OBC and PwBD", "40th percentile or above, below 45th", "126-113", "216"],
        ["SC and PwBD", "40th percentile or above, below 45th", "126-113", "48"],
        ["ST and PwBD", "40th percentile or above, below 45th", "126-113", "17"],
      ],
    },
    {
      kind: "table",
      id: "cutoff-2024",
      heading: "NEET UG 2024 official qualifying cutoff",
      intro: "Event: NEET UG 2024 held 5 May 2024. Revised result published 26 July 2024.",
      columns: ["Category", "Qualifying percentile", "Official marks range", "Candidates qualified"],
      rows: [
        ["UR / EWS", "50th percentile or above", "720-162", "11,65,334"],
        ["OBC", "40th percentile or above, below 50th", "161-127", "1,00,876"],
        ["SC", "40th percentile or above, below 50th", "161-127", "34,420"],
        ["ST", "40th percentile or above, below 50th", "161-127", "14,414"],
        ["UR / EWS and PwBD", "45th percentile or above, below 50th", "161-144", "473"],
        ["OBC and PwBD", "40th percentile or above, below 45th", "143-127", "269"],
        ["SC and PwBD", "40th percentile or above, below 45th", "143-127", "54"],
        ["ST and PwBD", "40th percentile or above, below 45th", "142-127", "13"],
      ],
    },
    {
      kind: "prose",
      id: "how-to-read-a-cutoff",
      heading: "How to read a NEET cutoff correctly",
      concepts: [
        {
          id: "qualifying-vs-admission",
          title: "Qualifying cutoff is not an admission cutoff",
          body: [
            {
              type: "definition",
              term: "Qualifying cutoff",
              children: [
                {
                  text: "The percentile-based threshold set by NTA that decides whether a candidate is declared qualified for counselling.",
                },
              ],
            },
            {
              type: "definition",
              term: "Admission or closing rank",
              children: [
                {
                  text: "The last rank admitted to a particular college and category in a counselling round. It is published by counselling authorities, changes every round, and is not shown on this page.",
                },
              ],
            },
          ],
        },
        {
          id: "why-marks-move",
          title: "Why the marks range moves every year",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The percentile rule is fixed, but the mark value attached to it is not. It depends on paper difficulty, the number of candidates and the score distribution of that cycle. That is why the 50th percentile equalled 162 marks in 2024, 144 in 2025 and 213 in 2026. Comparing raw marks across years without the percentile rule leads to a wrong conclusion.",
                },
              ],
            },
          ],
        },
        {
          id: "scope-note",
          title: "Scope of this page",
          body: [
            {
              type: "list",
              items: [
                [{ text: "Only qualifying thresholds published by the National Testing Agency are shown." }],
                [{ text: "No predicted cutoff, coaching estimate or expected-score claim is published." }],
                [{ text: "Where a cycle has more than one examination event, the result-bearing event is named." }],
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "NEET answer key", url: "/neet/answer-key", relation: "related", description: "Score your paper against the official key first." },
    { label: "NEET previous year papers", url: "/neet/previous-year-papers", relation: "related" },
    { label: "NEET exam dates", url: "/neet/exam-dates", relation: "related" },
    { label: "NEET home", url: "/neet", relation: "up" },
  ],
  faqs: [
    {
      question: "What is the NEET 2026 qualifying cutoff?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The UR and EWS qualifying threshold is the 50th percentile, officially 715 to 213 marks. Reserved categories qualify at the 40th percentile, officially 212 to 177 marks.",
            },
          ],
        },
      ],
    },
    {
      question: "Does clearing the cutoff guarantee a medical seat?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Qualifying makes you eligible for counselling. A seat depends on the counselling authority's closing ranks for your category, state and college, which are separate from this threshold.",
            },
          ],
        },
      ],
    },
    {
      question: "Do you publish predicted cutoffs?",
      answer: [
        { type: "paragraph", children: [{ text: "No. Only official published qualifying cutoffs appear here." }] },
      ],
    },
  ],
  sourceRefs: ["neet-key-data-points", "neet-2026-result-press-release", "neet-official-home"],
  sourceNote:
    "All qualifying cutoff values come from the official NTA key-data document and the official result press release. Admission closing ranks are excluded by policy.",
  contributorPolicy: [
    "Prepared by: UNASSIGNED",
    "Verified against official source",
    "Last checked: 2026-09-10",
    "Last verified: 2026-09-10",
    "Exam process reviewer required before indexation.",
  ],
  seo: {
    title: "NEET Cutoff: Official Qualifying Percentile and Marks by Category | Rank Sarthi",
    description:
      "Official NEET qualifying cutoffs for 2026, 2025 and 2024 by category, with percentile rules, marks ranges and a clear line between qualifying and admission cutoffs.",
    ogType: "article",
  },
};
