import type { InfoPageContent } from "../types";

export const jeeAdvanced: InfoPageContent = {
  url: "/jee/jee-advanced",
  platform: "jee",
  slug: "jee-advanced",
  exam: "JEE Advanced",
  contentStatus: "draft",
  title: "JEE Advanced: Official Status, Eligibility Boundary and Preparation Route",
  eyebrow: "JEE Advanced",
  intent: "Understand the Advanced exam, its verified eligibility boundary and how preparation differs from Main",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "JEE Advanced is a separate examination from JEE Main. It is the entrance examination used in the IIT admission process, subject to the official eligibility and admission rules for that cycle.",
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
        ["JEE Advanced 2027 schedule", "Not officially announced on the official channels checked on 9 September 2026"],
        ["Latest completed cycle", "2026"],
        ["2026 organising institute", "Indian Institute of Technology Roorkee"],
        ["2026 examination", "Held on 17 May 2026"],
        ["2026 result and final keys", "Published on 1 June 2026"],
        ["Official owner", "JEE Advanced 2026 organising authority"],
        ["Last verified", "9 September 2026, IST"],
      ],
      note: "The 2026 organising institute and dates are historical facts. They must not be carried into 2027 unless the next authority publishes them.",
      jump: true,
    },
    {
      kind: "prose",
      id: "main-to-advanced-boundary",
      heading: "The Main-to-Advanced boundary",
      concepts: [
        {
          id: "main-to-advanced-boundary-body",
          title: "The Main-to-Advanced boundary",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "For Indian-national candidates in 2026, the official eligibility page required candidates to be among the top 250,000 successful candidates, including all categories, in the JEE Main 2026 B.E./B.Tech paper. That was only one criterion. Other attempt, Class XII, age and prior-IIT-admission rules also applied.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "Do not use this summary to decide eligibility for another cycle. Open the official eligibility page and information brochure for the cycle in which you intend to appear. Foreign-national and OCI/PIO routes have separate official provisions.",
                },
              ],
            },
          ],
        },
      ],
      jump: true,
    },
    {
      kind: "prose",
      id: "verified-2026-paper-framework",
      heading: "What the verified 2026 paper framework required",
      concepts: [
        {
          id: "verified-2026-paper-framework-body",
          title: "What the verified 2026 paper framework required",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The official 2026 brochure specified two compulsory three-hour papers. Each paper contained Physics, Chemistry and Mathematics, and was designed to test comprehension, reasoning and analytical ability. The marking scheme could vary by question type and was supplied in the paper instructions.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "This is why Advanced preparation cannot be reduced to doing more Main-style questions. A stronger route is:",
                },
              ],
            },
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Build the concept in one chapter." }],
                [{ text: "connect it to prerequisites and adjacent chapters." }],
                [{ text: "identify the governing condition before selecting an equation or method." }],
                [{ text: "solve problems that combine representations or concepts." }],
                [{ text: "read the live marking instructions before deciding whether to attempt a question." }],
              ],
            },
          ],
        },
      ],
      jump: true,
    },
    {
      kind: "table",
      id: "main-vs-advanced-preparation",
      heading: "Main preparation and Advanced preparation serve different decisions",
      columns: ["Decision", "JEE Main preparation", "JEE Advanced preparation"],
      rows: [
        ["Scope control", "Secure complete current-syllabus coverage", "Preserve scope while building deeper relationships across concepts"],
        ["Method selection", "Recognise standard models accurately and efficiently", "Decide among competing models, constraints and multi-step routes"],
        ["Error review", "Diagnose knowledge, recall, execution and selection errors", "Add close review of hidden conditions, linked concepts and incomplete cases"],
        ["Paper use", "Practise session-aware CBT execution", "Practise both-paper stamina and the exact instructions of each official paper"],
      ],
      note: "This table is a preparation framework, not an official claim about difficulty or question frequency.",
      jump: true,
    },
    {
      kind: "prose",
      id: "advanced-learning-route",
      heading: "Your Advanced learning route",
      concepts: [
        {
          id: "advanced-learning-route-body",
          title: "Your Advanced learning route",
          body: [
            {
              type: "list",
              items: [
                [
                  { text: "Verify the current " },
                  { text: "JEE syllabus", href: "/jee/syllabus" },
                  { text: ", especially Main and Advanced distinctions." },
                ],
                [
                  { text: "Use " },
                  { text: "Physics", href: "/jee/physics" },
                  { text: ", " },
                  { text: "Chemistry", href: "/jee/chemistry" },
                  { text: " and " },
                  { text: "Mathematics", href: "/jee/mathematics" },
                  { text: " to follow prerequisite-led chapter paths." },
                ],
                [
                  { text: "Use " },
                  { text: "official previous year papers", href: "/jee/previous-year-papers" },
                  { text: " to experience the real paper and instructions." },
                ],
                [
                  { text: "Check " },
                  { text: "JEE Main", href: "/jee/jee-main" },
                  { text: " for the separate Main process." },
                ],
                [
                  { text: "Check " },
                  { text: "exam dates", href: "/jee/exam-dates" },
                  { text: ", " },
                  { text: "answer keys", href: "/jee/answer-key" },
                  { text: " and " },
                  { text: "cutoffs", href: "/jee/cutoff" },
                  { text: " only with visible cycle labels." },
                ],
              ],
            },
          ],
        },
      ],
      jump: true,
    },
    {
      kind: "prose",
      id: "information-gain-utility",
      heading: "Information-gain utility",
      concepts: [
        {
          id: "information-gain-utility-body",
          title: "Information-gain utility",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The page replaces a vague \u201cMain is easier, Advanced is harder\u201d comparison with a preparation-decision model: scope control, relationship depth, method selection, exact paper instructions and cycle-specific eligibility.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Understand the distinct Main process" },
    { label: "JEE Syllabus", url: "/jee/syllabus", relation: "related", description: "Compare verified syllabus coverage" },
    { label: "Physics", url: "/jee/physics", relation: "related", description: "Enter chapter learning paths" },
    { label: "Chemistry", url: "/jee/chemistry", relation: "related", description: "Enter chapter learning paths" },
    { label: "Mathematics", url: "/jee/mathematics", relation: "related", description: "Enter chapter learning paths" },
    { label: "Previous Year Papers", url: "/jee/previous-year-papers", relation: "related", description: "Use official Advanced papers" },
    { label: "Exam Dates", url: "/jee/exam-dates", relation: "related", description: "Verify cycle facts" },
    { label: "Answer Key", url: "/jee/answer-key", relation: "related", description: "Verify cycle facts" },
    { label: "Cutoff", url: "/jee/cutoff", relation: "related", description: "Verify cycle facts" },
  ],
  faqs: [
    {
      question: "Who organised JEE Advanced 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Indian Institute of Technology Roorkee was the organising institute for JEE Advanced 2026." }],
        },
      ],
    },
    {
      question: "Was JEE Advanced 2026 one paper or two?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official 2026 brochure specified two compulsory papers, each of three hours, with Physics, Chemistry and Mathematics sections.",
            },
          ],
        },
      ],
    },
    {
      question: "Does qualifying JEE Main automatically make a candidate fully eligible for Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. JEE Main performance was one of several official criteria for Indian-national candidates in 2026. Every other criterion also had to be satisfied.",
            },
          ],
        },
      ],
    },
    {
      question: "When is JEE Advanced 2027?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "The official schedule had not been announced on the channels checked on 9 September 2026." }],
        },
      ],
    },
  ],
  sourceRefs: ["jee-advanced-syllabus"],
  contributorPolicy: [
    "Written by: Senior JEE academic editor familiar with official Advanced processes",
    "Fact-checked by: Exam Process Reviewer",
    "Academic review: PCM faculty reviewer required for any preparation or reasoning interpretation retained on the final page",
    "Minimum qualification: Relevant postgraduate degree for academic review; documented experience with JEE Advanced papers and official instructions",
    "Review scope: Eligibility wording, two-paper framework, Main/Advanced distinction, academic preparation claims, date status and source ownership",
  ],
  lastVerified: "9 September 2026",
  seo: {
    title: "JEE Advanced: Official Status, Eligibility and Preparation",
    description:
      "Understand JEE Advanced, its verified relationship with JEE Main, the official 2026 paper framework and the right PCM preparation route.",
    ogTitle: "JEE Advanced Official Status and Preparation Route",
    ogDescription: "A cycle-safe guide to eligibility, paper structure, official sources and advanced PCM preparation.",
    ogType: "article",
  },
};
