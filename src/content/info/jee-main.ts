import type { InfoPageContent } from "../types";

/**
 * JEE Main overview and preparation-routing hub.
 * Transcribed from the approved production copy in
 * "Rank Sarthi JEE Menu Completion and FreshnessWatch v1 Production Package"
 * (production date 9 September 2026), Page 1: JEE Main.
 */
export const jeeMain: InfoPageContent = {
  url: "/jee/jee-main",
  platform: "jee",
  slug: "jee-main",
  exam: "JEE Main",
  contentStatus: "draft",
  title: "JEE Main: Official Status, Subjects and Preparation Routes",
  eyebrow: "JEE Main",
  intent: "Understand JEE Main, verify the present cycle and choose the correct preparation route",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "JEE Main is the National Testing Agency examination used for admission pathways that include undergraduate engineering, architecture and planning programmes. Paper 1 is the B.E./B.Tech paper. Paper 2A is for B.Arch and Paper 2B is for B.Planning.",
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
        ["Current monitored cycle", "2027"],
        ["JEE Main 2027 schedule", "Not officially announced on the NTA JEE Main channels checked on 9 September 2026"],
        ["Latest completed cycle", "2026"],
        ["2026 Paper 1 status", "Both sessions completed; final NTA scores and final answer keys available from NTA"],
        ["2026 Paper 2 status", "Final NTA scores and final answer keys available from NTA"],
        ["Official owner", "National Testing Agency"],
        ["Last verified", "9 September 2026, IST"],
      ],
      note: "Do not plan around a coaching-site date. When NTA publishes the next information bulletin, Rank Sarthi will replace \"Not officially announced\" only after the notice and its dates pass review.",
    },
    {
      kind: "prose",
      id: "what-jee-main-is-used-for",
      heading: "What JEE Main is used for",
      concepts: [
        {
          id: "usage-2026",
          title: "What JEE Main is used for",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "For the 2026 cycle, NTA stated that Paper 1 was used for admission to undergraduate engineering programmes at NITs, IIITs, other centrally funded technical institutions and participating institutions. It also served as an eligibility test for JEE Advanced. Paper 2 covered B.Arch and B.Planning admission routes. These statements are cycle-specific and must be rechecked against the next official bulletin.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "table",
      id: "choose-the-paper",
      heading: "Choose the paper before choosing the plan",
      columns: ["Paper", "Official 2026 purpose", "Preparation implication"],
      rows: [
        ["Paper 1", "B.E./B.Tech and identified related programme routes", "Use the Physics, Chemistry and Mathematics preparation system"],
        ["Paper 2A", "B.Arch", "Do not treat the PCM hub as a complete Paper 2A plan; aptitude and drawing requirements need their own official scope"],
        ["Paper 2B", "B.Planning", "Do not treat the PCM hub as a complete Paper 2B plan; aptitude and planning-based scope must be checked separately"],
      ],
      note: "Rank Sarthi's present JEE academic routes are designed around Paper 1 Physics, Chemistry and Mathematics. They must not be represented as complete Paper 2A or Paper 2B preparation.",
    },
    {
      kind: "prose",
      id: "main-and-advanced",
      heading: "JEE Main and JEE Advanced are connected, not interchangeable",
      concepts: [
        {
          id: "main-advanced-relationship",
          title: "JEE Main and JEE Advanced are connected, not interchangeable",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "JEE Main and JEE Advanced are separate examinations. For Indian-national candidates in 2026, performance in JEE Main Paper 1 was one of the eligibility criteria for JEE Advanced, alongside other official conditions. The official JEE Advanced eligibility page, not a summary article, owns the detailed rule.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [{ text: "Use the two exams differently:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "Start with the current official syllabus and paper instructions for the exam you will take." }],
                [{ text: "Use JEE Main preparation to build broad syllabus coverage, accurate execution and computer-based test discipline." }],
                [{ text: "Use the JEE Advanced route for deeper multi-concept reasoning and the official Advanced eligibility and paper framework." }],
                [{ text: "Never infer eligibility from a score estimate. Check the official cycle rule." }],
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "learning-route",
      heading: "Your JEE Main learning route",
      concepts: [
        {
          id: "learning-route-steps",
          title: "Your JEE Main learning route",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [
                  { text: "Confirm the cycle: Open ", bold: true },
                  { text: "JEE exam dates", href: "/jee/exam-dates" },
                  { text: " before relying on any date." },
                ],
                [
                  { text: "Map the scope: Use the ", bold: true },
                  { text: "JEE syllabus", href: "/jee/syllabus" },
                  { text: " to separate Main and Advanced coverage." },
                ],
                [
                  { text: "Choose a subject: Continue to ", bold: true },
                  { text: "Physics", href: "/jee/physics" },
                  { text: ", " },
                  { text: "Chemistry", href: "/jee/chemistry" },
                  { text: " or " },
                  { text: "Mathematics", href: "/jee/mathematics" },
                  { text: "." },
                ],
                [
                  { text: "Work chapter by chapter: Use the subject hub to select the chapter that matches the prerequisite path you have completed.", bold: true },
                ],
                [
                  { text: "Test against official papers: Use ", bold: true },
                  { text: "previous year papers", href: "/jee/previous-year-papers" },
                  { text: " with clear exam, year, session and source labels." },
                ],
                [
                  { text: "Verify event data: Use ", bold: true },
                  { text: "answer key", href: "/jee/answer-key" },
                  { text: " and " },
                  { text: "cutoff", href: "/jee/cutoff" },
                  { text: " pages only with their visible cycle and verification date." },
                ],
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE hub", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE syllabus", url: "/jee/syllabus", relation: "related", description: "Verify current academic scope" },
    { label: "Physics", url: "/jee/physics", relation: "forward", description: "Enter PCM preparation" },
    { label: "Chemistry", url: "/jee/chemistry", relation: "forward", description: "Enter PCM preparation" },
    { label: "Mathematics", url: "/jee/mathematics", relation: "forward", description: "Enter PCM preparation" },
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "related", description: "Understand the separate Advanced route" },
    { label: "Previous year papers", url: "/jee/previous-year-papers", relation: "related", description: "Use official papers" },
    { label: "Exam dates", url: "/jee/exam-dates", relation: "related", description: "Verify time-sensitive facts" },
    { label: "Answer key", url: "/jee/answer-key", relation: "related", description: "Verify time-sensitive facts" },
    { label: "Cutoff", url: "/jee/cutoff", relation: "related", description: "Verify time-sensitive facts" },
  ],
  faqs: [
    {
      question: "Who conducts JEE Main?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The National Testing Agency conducts JEE Main. The NTA JEE Main website and its official notices own current dates, instructions, answer keys and results.",
            },
          ],
        },
      ],
    },
    {
      question: "Which subjects are in JEE Main Paper 1?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "For 2026, Paper 1 covered Mathematics, Physics and Chemistry. The next cycle must be rechecked against its official bulletin.",
            },
          ],
        },
      ],
    },
    {
      question: "Is JEE Main the same as JEE Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. They are separate examinations with different purposes, authorities and eligibility rules. JEE Main Paper 1 performance formed one part of the 2026 JEE Advanced eligibility route for Indian-national candidates.",
            },
          ],
        },
      ],
    },
    {
      question: "When is JEE Main 2027?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official schedule had not been announced on the NTA channels checked on 9 September 2026. Treat every unsourced date as unverified.",
            },
          ],
        },
      ],
    },
  ],
  sourceRefs: ["nta-jee-main-home", "nta-jee-main-bulletin-2026", "nta-jee-main-documents", "nta-jee-main-public-notices"],
  contributorPolicy: [
    "Written by: Exam information editor with demonstrated JEE process knowledge",
    "Fact-checked by: Freshness Editor or Exam Process Reviewer",
    "Minimum qualification: Graduate-level qualification plus documented editorial experience with official Indian entrance-exam notices; legal or policy claims require escalation to a senior process reviewer",
    "Review scope: NTA ownership, paper purposes, cycle labelling, Main-to-Advanced wording, source links, date status and internal routing",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "JEE Main: Official Status, Syllabus and Preparation Routes",
    description: "Check the verified JEE Main cycle status, understand Paper 1, Paper 2A and Paper 2B, and enter the right Physics, Chemistry or Mathematics route.",
    ogTitle: "JEE Main Official Status and Preparation Routes",
    ogDescription: "Current official status first, then the correct JEE Main paper, syllabus and subject path.",
    ogType: "article",
  },
};
