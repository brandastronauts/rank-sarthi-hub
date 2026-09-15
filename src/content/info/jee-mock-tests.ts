import type { InfoPageContent } from "../types";
import {
  jeeTestSeriesCta,
  jeeTestSeriesHighlight,
  jeeTestSeriesPackages,
  jeeTestSeriesPartTestSyllabus,
  jeeTestSeriesTerms,
  jeeTestSeriesValueCallout,
} from "@/content/offers/jee-test-series";

/**
 * /jee/mock-tests — JEE Test Series 2026 information + inaugural offer page.
 *
 * Commercial authority: the approved inaugural-offer document only.
 * Deliberately absent because they are not in the approved document: test
 * dates and schedules, access validity, attempt rules, question counts, marks,
 * durations, part-test topic lists, discount expiry and any payment or
 * enrolment destination. Page stays draft + noindex until commercial and
 * product review is complete.
 */
export const jeeMockTests: InfoPageContent = {
  url: "/jee/mock-tests",
  platform: "jee",
  slug: "mock-tests",
  exam: "JEE",
  contentStatus: "draft",
  title: "JEE Test Series 2026",
  eyebrow: "Inaugural offer",
  intent: "Part Tests • Full Tests • CBT Previous-Year Practice • Performance Analysis",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Practise in an exam-style environment with JEE Main and JEE Advanced part tests, full tests and CBT previous-year paper practice.",
        },
      ],
    },
  ],
  chips: [
    "Part Tests",
    "Full Tests",
    "CBT Previous-Year Practice",
    "Performance Analysis",
  ],
  blocks: [
    { kind: "offer-highlight", id: "offer", highlight: jeeTestSeriesHighlight },

    {
      kind: "prose",
      id: "what-you-get",
      heading: "What every student receives",
      concepts: [
        {
          id: "what-you-get-list",
          title: "Included with every package",
          body: [
            {
              type: "list",
              items: [
                [
                  {
                    text: "JEE Main practice in a CBT-style interface designed to feel like the actual computer-based examination.",
                  },
                ],
                [{ text: "Paper-wise individual performance analysis after each attempt." }],
                [
                  {
                    text: "Actionable guidance around accuracy, speed, time allocation and question selection.",
                  },
                ],
                [{ text: "Additional support content where identified gaps can be addressed." }],
                [
                  {
                    text: "Flexible online access for purposeful practice and repeated performance review.",
                  },
                ],
              ],
            },
          ],
        },
      ],
    },

    {
      kind: "offer-packages",
      id: "packages",
      heading: "Inaugural packages",
      intro: "All prices below are the approved inaugural offer prices.",
      packages: jeeTestSeriesPackages,
      valueCallout: jeeTestSeriesValueCallout,
    },

    {
      kind: "part-test-syllabus",
      id: "part-test-syllabus",
      heading: "Part-Test Syllabus",
      intro:
        "The detailed test-wise syllabus for JEE Main and JEE Advanced Part Tests is currently being finalised by the academic team.",
      data: jeeTestSeriesPartTestSyllabus,
    },

    {
      kind: "table",
      id: "full-tests",
      heading: "Full tests",
      intro: "Full-syllabus test counts in the current offer.",
      columns: ["Track", "Full-syllabus tests"],
      rows: [
        ["JEE Main", "10 full-syllabus tests"],
        ["JEE Advanced", "5 full-syllabus tests"],
      ],
      note: "Schedule, dates, question counts, marks and durations are not published yet and will appear here only once confirmed.",
    },

    {
      kind: "prose",
      id: "cbt-practice",
      heading: "CBT previous-year practice",
      concepts: [
        {
          id: "cbt-structure",
          title: "How the CBT practice packages are structured",
          body: [
            {
              type: "list",
              items: [
                [{ text: "JEE Main 2025 and 2026 CBT paper access is included in the Main packages." }],
                [{ text: "Single Session: 10 papers, ₹500." }],
                [{ text: "Full Year: 20 papers, ₹750." }],
                [{ text: "Five-Year CBT Archive: 2022–2026, ₹2,500." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "These paid CBT practice packages are separate from the free, verified previous-year paper resources published on Rank Sarthi. ",
                },
                { text: "Browse verified JEE paper resources", href: "/jee/previous-year-papers" },
                { text: "." },
              ],
            },
          ],
        },
      ],
    },

    {
      kind: "prose",
      id: "why-rank-sarthi",
      heading: "Why Rank Sarthi test practice",
      concepts: [
        {
          id: "real-exam-practice",
          title: "Real exam practice",
          body: [
            {
              type: "paragraph",
              children: [{ text: "Build familiarity with the JEE Main CBT format." }],
            },
          ],
        },
        {
          id: "personal-analysis",
          title: "Personal analysis",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Understand performance patterns including strengths, weak areas, accuracy and time management.",
                },
              ],
            },
          ],
        },
        {
          id: "clear-improvement-path",
          title: "Clear improvement path",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Provide practical recommendations and relevant support content where applicable.",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      kind: "prose",
      id: "terms",
      heading: "Important terms",
      concepts: [
        {
          id: "terms-note",
          title: "Offer terms",
          body: [{ type: "paragraph", children: [{ text: jeeTestSeriesTerms }] }],
        },
      ],
    },

    { kind: "offer-cta", id: "enrolment", cta: jeeTestSeriesCta },
  ],
  relatedLinks: [
    {
      label: "Verified JEE previous-year paper resources",
      url: "/jee/previous-year-papers",
      relation: "related",
      description: "Free, source-checked paper library — separate from the paid test series.",
    },
    {
      label: "JEE Main",
      url: "/jee/jee-main",
      relation: "up",
      description: "Exam structure and official status.",
    },
    {
      label: "JEE Advanced",
      url: "/jee/jee-advanced",
      relation: "related",
      description: "Advanced-stage exam information.",
    },
  ],
  contributorPolicy: [
    "Commercial content on this page is limited to the approved inaugural-offer document.",
    "Access duration, attempt rules and enrolment terms are published only after commercial review.",
  ],
  sourceNote:
    "This page describes a Rank Sarthi product offer. JEE and NTA references describe the examination and test format only.",
  seo: {
    title: "JEE Test Series 2026: Main & Advanced Tests | Rank Sarthi",
    description:
      "Explore Rank Sarthi's JEE Test Series 2026 with Main and Advanced part tests, full tests, CBT previous-year practice and inaugural packages from ₹500.",
    ogTitle: "JEE Test Series 2026: Main & Advanced Tests",
    ogDescription:
      "Main and Advanced part tests, full tests and CBT previous-year practice. Inaugural packages from ₹500.",
    ogType: "website",
  },
};
