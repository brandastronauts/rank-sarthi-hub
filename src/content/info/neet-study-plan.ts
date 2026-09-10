import type { InfoPageContent } from "../types";

/**
 * /neet/study-plan — T16 rule-based preparation roadmap.
 * The plan is selected deterministically from approved frameworks by the
 * student's own answers. Nothing is generated, predicted or diagnosed, and
 * the error log is a manual student classification, not an AI output.
 */
export const neetStudyPlan: InfoPageContent = {
  url: "/neet/study-plan",
  platform: "neet",
  slug: "study-plan",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Study Plan: Rule-Based Preparation Framework",
  eyebrow: "Preparation roadmap",
  intent: "Build a workable NEET plan from your own time horizon, coverage and revision stage",
  chips: ["Rule-based", "You classify your own errors", "No score promises"],
  lastVerified: "10 September 2026",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Choose your time horizon, how much of the syllabus you have covered, your revision stage and the areas you already know are weak. The page immediately renders the matching framework: what belongs in your weekly learning, practice, recall and review slots, and how chapters move between queue states.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This is a rule-based planner, not an AI planner. It does not detect your weaknesses, predict a score or claim a target rank.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "tool",
      id: "planner",
      heading: "Build your plan",
      tool: "neet-study-planner",
      intro: "No login and no email is required to see your first plan.",
    },
    {
      kind: "prose",
      id: "how-to-use",
      heading: "How to run the plan honestly",
      concepts: [
        {
          id: "queues",
          title: "Move chapters between states only at the checkpoint",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "A chapter leaves NOT_COVERED only after a closed-book recall pass, and reaches REVISION_READY only after a timed practice set you would be willing to repeat. Re-classifying a chapter mid-week hides the gap instead of closing it.",
                },
              ],
            },
          ],
        },
        {
          id: "error-log",
          title: "Classify every mistake yourself",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "A knowledge gap needs relearning; a recall gap needs retrieval practice; an execution error needs slower working; a decision error needs question-selection practice. Treating all four the same way is why revision often stops working.",
                },
              ],
            },
          ],
        },
        {
          id: "future",
          title: "What is not part of this plan yet",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Mock tests and the weakness finder are planned future integrations. Until they are published, the plan uses the resources that actually exist: the official syllabus, NCERT mapping, the three subject libraries, previous-year papers, answer keys, the score calculator and the official exam dates.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "NEET syllabus", url: "/neet/syllabus", relation: "related" },
    { label: "NEET NCERT mapping", url: "/neet/ncert-mapping", relation: "related" },
    { label: "NEET Biology chapters", url: "/neet/biology", relation: "related" },
    { label: "NEET Physics chapters", url: "/neet/physics", relation: "related" },
    { label: "NEET Chemistry chapters", url: "/neet/chemistry", relation: "related" },
    { label: "NEET previous-year papers", url: "/neet/previous-year-papers", relation: "related" },
    { label: "NEET score calculator", url: "/neet/score-calculator", relation: "related" },
    { label: "NEET exam dates", url: "/neet/exam-dates", relation: "related" },
  ],
  faqs: [
    {
      question: "Does the plan tell me which chapters carry the most marks?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Rank Sarthi does not publish chapter weightage or predicted question frequency, so the plan is built on official syllabus scope and your own recorded errors instead.",
            },
          ],
        },
      ],
    },
    {
      question: "Is my weak-area selection automatic?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. You choose the areas yourself. Nothing on this page analyses your performance or produces a profile of you.",
            },
          ],
        },
      ],
    },
  ],
  contributorPolicy: [
    "Plan owner: UNASSIGNED",
    "Academic reviewer: UNASSIGNED",
    "Frameworks describe study process only; they never promise a score, rank or admission outcome.",
  ],
  seo: {
    title: "NEET Study Plan: 12-Month to 7-Day Frameworks | Rank Sarthi",
    description:
      "Build a rule-based NEET study plan from your time horizon, syllabus coverage and revision stage, with chapter queue states, a weekly loop and a manual error log.",
  },
};
