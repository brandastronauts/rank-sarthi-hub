import type { InfoPageContent } from "../types";

/**
 * /neet/score-calculator — T13 interactive tool.
 * Marks arithmetic only, using the official NEET (UG) 2026 rule. No rank,
 * percentile, college or cutoff prediction anywhere on this page, and no
 * link presented as though the blocked rank predictor works.
 */
export const neetScoreCalculator: InfoPageContent = {
  url: "/neet/score-calculator",
  platform: "neet",
  slug: "score-calculator",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Score Calculator: Official +4 / −1 Marks Calculation",
  eyebrow: "Interactive tool",
  intent: "Convert your answer counts into an official NEET marks total out of 720",
  chips: ["180 questions", "720 marks", "No rank prediction"],
  lastVerified: "10 September 2026",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET (UG) has 180 questions and a maximum of 720 marks. A correct answer earns +4, an incorrect answer loses 1 mark, and an unanswered question scores 0. Enter your counts below and the calculator returns your marks total immediately, with the full arithmetic shown.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "This tool calculates marks only. It does not estimate rank, percentile, expected cutoff, college allotment or admission probability.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "tool",
      id: "calculator",
      heading: "Calculate your NEET marks",
      tool: "neet-score-calculator",
      intro:
        "All four counts must add up to exactly 180. Whole numbers only — invalid entries are reported rather than silently corrected.",
    },
    {
      kind: "table",
      id: "marking-rule",
      heading: "Official marking rule",
      columns: ["Response", "Marks", "Applies to"],
      rows: [
        ["Correct answer", "+4", "Each of the 180 questions"],
        ["Incorrect answer", "−1", "Any marked option that is not accepted in the final key"],
        ["Unanswered", "0", "Questions left blank"],
        [
          "Question dropped or with no correct option",
          "+4",
          "Every candidate who appeared, attempted or not",
        ],
      ],
      note: "Maximum marks: 720 (180 × 4).",
    },
    {
      kind: "prose",
      id: "final-key-cases",
      heading: "How official final-key decisions are handled",
      concepts: [
        {
          id: "bonus",
          title: "All-candidate bonus questions",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "When the official final key drops a question, declares it wrong, or accepts none of its options, every candidate who appeared receives +4 for that question whether or not they attempted it. Count those questions in the bonus field so they are added once and are not also counted as correct or incorrect.",
                },
              ],
            },
          ],
        },
        {
          id: "multiple-correct",
          title: "More than one accepted option",
          body: [
            {
              type: "list",
              items: [
                [{ text: "You marked an accepted option: count it as correct (+4)." }],
                [{ text: "You marked a non-accepted option: count it as incorrect (−1)." }],
                [{ text: "You left it blank: count it as unanswered (0)." }],
                [
                  {
                    text: "If every option is officially accepted: any attempt counts as correct, and a blank stays unanswered.",
                  },
                ],
              ],
            },
          ],
        },
        {
          id: "boundary",
          title: "What this tool will not tell you",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Rank, percentile and admission outcomes depend on the full candidate distribution and on counselling data that Rank Sarthi does not publish. A marks total is not a rank, and this page will not imply otherwise.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "NEET answer keys", url: "/neet/answer-key", relation: "related", description: "Check your responses against the official provisional and final keys." },
    { label: "NEET previous-year papers", url: "/neet/previous-year-papers", relation: "related" },
    { label: "NEET qualifying cutoffs", url: "/neet/cutoff", relation: "related" },
    { label: "NEET study plan", url: "/neet/study-plan", relation: "related" },
  ],
  faqs: [
    {
      question: "Does a negative total mean anything is wrong?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. With 180 incorrect answers and none correct the arithmetic gives −180. The calculator reports the marks total exactly as the official rule produces it.",
            },
          ],
        },
      ],
    },
    {
      question: "Can this tell me my rank or the college I will get?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. It is a marks calculation only. Rank, percentile and admission prediction are not published on Rank Sarthi.",
            },
          ],
        },
      ],
    },
  ],
  contributorPolicy: [
    "Tool owner: UNASSIGNED",
    "Formula reviewer: UNASSIGNED",
    "The marking rule is implemented exactly as officially published; no house scoring variant is added.",
  ],
  seo: {
    title: "NEET Score Calculator (720 Marks, +4 / −1) | Rank Sarthi",
    description:
      "Calculate your NEET (UG) marks out of 720 using the official +4 / −1 rule, including all-candidate bonus questions from the final answer key. Marks only — no rank prediction.",
  },
};
