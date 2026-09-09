import type { InfoPageContent } from "../types";

/**
 * NEET (UG) exam overview: current official status, verified 2026 pattern,
 * marking scheme and eligibility baseline.
 * Transcribed from the approved production copy in
 * "Rank Sarthi NEET N01 Foundation and Biology Production Package"
 * (production date 9 September 2026), Record N01-02.
 */
export const neetExam: InfoPageContent = {
  url: "/neet/neet-exam",
  platform: "neet",
  slug: "neet-exam",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET (UG) Exam 2026: Current Status, Pattern, Eligibility and Official Sources",
  eyebrow: "NEET (UG) Exam",
  intent: "Understand the current official NEET (UG) status, verified 2026 pattern, marking scheme and eligibility baseline",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET (UG) is the national entrance examination administered by the National Testing Agency for undergraduate medical admissions covered by the official framework. For the verified 2026 pattern, candidates answered 180 compulsory questions in 180 minutes for 720 marks: 45 Physics, 45 Chemistry and 90 Biology. Correct answers carried +4, incorrect answers -1 and unanswered questions 0. The 2026 result was declared on 16 July 2026. NEET UG 2027 details are not yet treated as official in this package.",
        },
      ],
    },
  ],
  blocks: [
    {
      kind: "table",
      id: "current-official-status",
      heading: "Current official status",
      columns: ["Field", "Verified position"],
      rows: [
        ["Latest verified cycle", "NEET (UG) 2026"],
        ["NTA result press release", "16 July 2026"],
        ["Examination date stated in that result release", "21 June 2026"],
        ["NEET (UG) 2027 details", "Not officially announced as of 9 September 2026"],
      ],
      note: "The original 2026 Information Bulletin listed 3 May 2026, but NTA's later result press release dated 16 July 2026 reports the examination used for the result as held on 21 June 2026. Use the later official record when answering when NEET UG 2026 was held for the declared result; the earlier schedule remains a historical note only.",
    },
    {
      kind: "table",
      id: "verified-2026-exam-snapshot",
      heading: "Verified 2026 exam snapshot",
      columns: ["Item", "Verified 2026 state"],
      rows: [
        ["Conducting agency", "National Testing Agency"],
        ["Mode", "Pen and paper"],
        ["Question structure", "180 compulsory questions"],
        ["Duration", "180 minutes"],
        ["Physics", "45 questions, 180 marks"],
        ["Chemistry", "45 questions, 180 marks"],
        ["Biology", "90 questions, 360 marks"],
        ["Total", "180 questions, 720 marks"],
        ["Correct response", "+4"],
        ["Incorrect response", "-1"],
        ["Unanswered", "0"],
      ],
      note: "The 2026 Information Bulletin also contains special handling for questions with multiple/all correct options or dropped questions. Check the official bulletin for that nuance rather than relying on this three-row shorthand alone.",
    },
    {
      kind: "prose",
      id: "eligibility-baseline",
      heading: "Eligibility baseline",
      concepts: [
        {
          id: "eligibility-2026",
          title: "Eligibility baseline for the 2026 bulletin",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "For the 2026 bulletin, the candidate must complete 17 years of age on or before 31 December of the relevant year. The bulletin states there is no upper age limit. The qualifying-examination section requires the applicable Physics, Chemistry, Biology/Biotechnology and English study conditions described in the official bulletin, including the NMC-linked clarification for candidates who studied the required subjects as additional subjects where the rule permits.",
                },
              ],
            },
            {
              type: "note",
              tone: "caution",
              children: [
                {
                  text: "These 2026 eligibility rules must not be treated as a 2027 guarantee. When the next bulletin appears, this eligibility module must be re-verified before indexation.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "syllabus-and-admission-flow",
      heading: "Syllabus and admission flow",
      concepts: [
        {
          id: "syllabus-admission-notes",
          title: "Syllabus and admission flow",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "See the current official syllabus at " },
                { text: "NEET syllabus", href: "/neet/syllabus" },
                { text: " rather than a reproduction of every unit here." },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "After the exam/result stage, counselling facts should be sourced from MCC for the applicable All India counselling process and from official state authorities for state counselling. Rank Sarthi does not create a parallel unofficial counselling rule set on this overview page.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "biology-preparation-routing",
      heading: "Biology preparation routing",
      concepts: [
        {
          id: "biology-routing",
          title: "Biology preparation routing",
          body: [
            {
              type: "paragraph",
              children: [
                { text: "Biology preparation should use the current official syllabus and NCERT relationship layer. See " },
                { text: "NCERT mapping methodology", href: "/neet/ncert-mapping" },
                { text: " and " },
                { text: "Biology syllabus", href: "/neet/syllabus/biology" },
                { text: "." },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "NEET hub", url: "/neet", relation: "up", description: "Return to the NEET hub" },
    { label: "NEET syllabus", url: "/neet/syllabus", relation: "related", description: "Verify current academic scope" },
    { label: "Biology syllabus", url: "/neet/syllabus/biology", relation: "forward", description: "Enter Biology syllabus scope" },
    { label: "Biology hub", url: "/neet/biology", relation: "forward", description: "Enter Biology preparation" },
    { label: "NCERT mapping", url: "/neet/ncert-mapping", relation: "related", description: "Understand the NCERT relationship" },
  ],
  faqs: [
    {
      question: "How many questions were compulsory in NEET UG 2026?",
      answer: [
        { type: "paragraph", children: [{ text: "The official 2026 pattern had 180 compulsory questions in 180 minutes." }] },
      ],
    },
    {
      question: "How were NEET UG 2026 marks distributed by subject?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Physics had 45 questions for 180 marks, Chemistry 45 for 180 marks, and Biology 90 for 360 marks, for 720 marks total." },
          ],
        },
      ],
    },
    {
      question: "What was the NEET UG 2026 marking scheme?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "+4 for a correct response, -1 for an incorrect response and 0 for unanswered, with additional official rules for certain dropped or multiple-correct situations." },
          ],
        },
      ],
    },
    {
      question: "What exam date should the current 2026 result page use?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "NTA's 16 July 2026 result release reports the examination used for the declared result as held on 21 June 2026." },
          ],
        },
      ],
    },
    {
      question: "Is the NEET UG 2027 pattern official yet?",
      answer: [
        { type: "paragraph", children: [{ text: "Not in the official sources checked on 9 September 2026." }] },
      ],
    },
  ],
  sourceRefs: ["nta-neet-documents", "nta-neet-2026-bulletin", "nmc-neet-ug-2026-syllabus"],
  sourceNote: "Pattern, marking, mode, age and eligibility sections verified against the official NEET (UG) 2026 Information Bulletin. Counselling facts remain outside the scope of this page.",
  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: not yet recorded",
    "Sources checked: 9 September 2026",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "NEET Exam 2026: Pattern, Eligibility & Current Status | Rank Sarthi",
    description: "See the verified NEET UG 2026 status, 180-question pattern, marking scheme, eligibility baseline, official syllabus links and source-led updates.",
    ogTitle: "NEET (UG) Exam 2026: Current Status, Pattern and Eligibility",
    ogDescription: "Verified NEET UG 2026 pattern, marking scheme and eligibility, with official sources and current-cycle status first.",
    ogType: "article",
  },
};
