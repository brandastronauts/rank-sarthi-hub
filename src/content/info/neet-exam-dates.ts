import type { InfoPageContent, ResourceAction } from "../types";

/**
 * /neet/exam-dates — official NEET milestone timeline.
 * The 3 May 2026 examination and the 21 June 2026 re-examination remain two
 * separate events. The 2027 cycle carries no invented dates: an unannounced
 * field is stated as "Not officially announced".
 */

function notice(label: string, detail: string, href: string): ResourceAction {
  return {
    provenance: "OFFICIAL_AUTHORITY_COPY",
    label,
    badge: "Official NTA",
    cta: "Open Official Notice",
    href,
    owner: "National Testing Agency",
    detail,
  };
}

export const neetExamDates: InfoPageContent = {
  url: "/neet/exam-dates",
  platform: "neet",
  slug: "exam-dates",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Exam Dates: Official Milestone Timeline and Current Status",
  eyebrow: "Official timeline",
  intent: "See what is officially announced now, separated from the completed 2026 cycle",
  chips: ["Official NTA", "Event-separated", "No predicted dates"],
  meta: [{ label: "Source owner", value: "National Testing Agency" }],
  lastVerified: "10 September 2026",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Monitored cycle: 2027. The NEET UG 2027 schedule was not officially announced on the NTA channels checked on 10 September 2026. Latest completed cycle: 2026, which had two separate examination events, the 3 May 2026 examination and the 21 June 2026 re-examination, with the final answer key and result published on 16 July 2026.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "A customary month or a coaching estimate is never converted into an official date here. Where a milestone was officially extended, the extended date is shown as the effective value and the change is recorded.",
        },
      ],
    },
  ],
  freshness: {
    heading: "Official schedule status",
    recordIds: ["neet-2027-schedule-status", "neet-2026-cycle-timeline"],
    note: "Checking runs against the official NTA sources only; a new date is published after human review.",
  },
  blocks: [
    {
      kind: "table",
      id: "neet-2027-status",
      heading: "NEET UG 2027 official status",
      intro: "Every 2027 field stays explicit until the owning authority publishes a source.",
      columns: ["Milestone", "Status", "Value", "Source owner", "Last verified"],
      rows: [
        ["Information bulletin", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Application opens", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Application closes", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Correction window", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["City intimation", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Admit card", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Examination", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Provisional answer key", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Final answer key", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
        ["Result", "NOT_ANNOUNCED", "Not officially announced", "National Testing Agency", "10 Sep 2026"],
      ],
    },
    {
      kind: "table",
      id: "neet-2026-original-timeline",
      heading: "Completed cycle: NEET UG 2026 examination of 3 May 2026",
      intro: "This is a historical record of a completed event, not a forecast for 2027.",
      columns: ["Milestone", "Official date", "Status", "Note"],
      rows: [
        ["Application opens", "8 Feb 2026", "Completed", "Official application notice"],
        [
          "Application closes",
          "11 Mar 2026",
          "Completed",
          "Extended deadline. This is the effective final application date, not the original 8 Mar deadline.",
        ],
        ["Correction window", "12 Mar to 14 Mar 2026", "Completed", "Official correction-window notice"],
        ["City intimation", "12 Apr 2026", "Completed", "Official city-intimation notice"],
        ["Admit card", "26 Apr 2026", "Completed", "Official admit-card release notice"],
        ["Examination", "3 May 2026", "Completed", "Original examination event, separate from the re-examination"],
        ["Provisional answer key", "6 May 2026", "Completed", "Provisional key for the 3 May event"],
      ],
    },
    {
      kind: "table",
      id: "neet-2026-reexam-timeline",
      heading: "Completed cycle: NEET UG 2026 Re-Examination of 21 June 2026",
      intro: "A separate examination event with its own milestones, key and result.",
      columns: ["Milestone", "Official date", "Status", "Note"],
      rows: [
        ["Re-examination announced", "15 May 2026", "Completed", "Official announcement notice"],
        ["City intimation", "7 Jun 2026", "Completed", "Official city-intimation notice"],
        ["Admit card", "14 Jun 2026", "Completed", "Official admit-card release notice"],
        ["Examination", "21 Jun 2026", "Completed", "Re-examination event"],
        ["Provisional answer key", "25 Jun 2026", "Completed", "Official provisional key"],
        ["Answer-key challenge window", "25 Jun to 28 Jun 2026", "Completed", "Challenge window for the provisional key"],
        ["Recorded-response window", "13 Jul to 15 Jul 2026", "Completed", "Dates stated in the official result press release"],
        ["Final answer key", "16 Jul 2026", "Completed", "Official final key publication"],
        ["Result", "16 Jul 2026", "Completed", "Official result press release"],
      ],
    },
    {
      kind: "resources",
      id: "official-notices",
      heading: "Official notices behind these dates",
      intro: "Each date above is traceable to an authority document. Open the source before acting on a deadline.",
      rows: [
        {
          id: "notice-application",
          eventLabel: "Application for NEET UG 2026",
          cells: [
            {
              label: "Official notices",
              actions: [
                notice(
                  "Application notice",
                  "Inviting online applications, 8 Feb 2026",
                  "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/02/20260208399987696.pdf",
                ),
                notice(
                  "Deadline extension notice",
                  "Extended last date, effective 11 Mar 2026",
                  "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/03/20260308653856316.pdf",
                ),
              ],
            },
          ],
        },
        {
          id: "notice-reexam",
          eventLabel: "NEET UG 2026 Re-Examination",
          cells: [
            {
              label: "Official notices",
              actions: [
                notice(
                  "Re-examination announcement",
                  "Published 15 May 2026",
                  "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/05/20260515960654684.pdf",
                ),
                notice(
                  "Final answer key",
                  "Published 16 Jul 2026",
                  "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/07/20260716131467523.pdf",
                ),
                notice(
                  "Result press release",
                  "Published 16 Jul 2026",
                  "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/07/20260716477215762.pdf",
                ),
              ],
            },
          ],
        },
        {
          id: "notice-index",
          eventLabel: "Current official channels",
          cells: [
            {
              label: "Authority index",
              actions: [
                notice("NEET official homepage", "Latest notices for the running cycle", "https://neet.nta.nic.in/"),
                notice("NTA notice board archive", "Historical notices", "https://www.nta.ac.in/NoticeBoardArchive"),
              ],
            },
          ],
        },
      ],
      note: "Notices open on the official NTA destination in a new tab.",
    },
    {
      kind: "prose",
      id: "how-to-use-dates",
      heading: "How to use this timeline safely",
      concepts: [
        {
          id: "date-discipline",
          title: "Read status, not only the date",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Check the monitored cycle at the top before reading any table." }],
                [{ text: "Treat \u201cNot officially announced\u201d as a real status, not as missing work." }],
                [{ text: "Confirm the official notice before an application, examination or challenge deadline." }],
                [{ text: "Never apply a re-examination milestone to the original examination event, or the reverse." }],
                [{ text: "Where an official extension exists, the extended date governs." }],
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "NEET answer key", url: "/neet/answer-key", relation: "related", description: "Official keys by event." },
    { label: "NEET cutoff", url: "/neet/cutoff", relation: "related", description: "Official qualifying thresholds." },
    { label: "NEET previous year papers", url: "/neet/previous-year-papers", relation: "related" },
    { label: "NEET home", url: "/neet", relation: "up" },
  ],
  faqs: [
    {
      question: "When is NEET 2027?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "Not officially announced on the NTA channels checked on 10 September 2026." }],
        },
      ],
    },
    {
      question: "Why are two examination dates shown for 2026?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "NTA held the examination on 3 May 2026 and a re-examination on 21 June 2026. They are separate events with separate keys, and the 21 June event carried the final key and result.",
            },
          ],
        },
      ],
    },
    {
      question: "What was the final application deadline for 2026?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "11 March 2026, after the official extension of the original 8 March deadline." }],
        },
      ],
    },
  ],
  sourceRefs: [
    "neet-2026-application-notice",
    "neet-2026-application-extension",
    "neet-2026-reexam-notice",
    "neet-2026-reexam-final-key",
    "neet-2026-result-press-release",
    "neet-official-home",
    "nta-notice-board-archive",
  ],
  sourceNote:
    "Milestones are transcribed from official NTA notices and the official result press release. No date is inferred from a previous cycle.",
  contributorPolicy: [
    "Prepared by: UNASSIGNED",
    "Verified against official source",
    "Last checked: 2026-09-10",
    "Last verified: 2026-09-10",
    "Exam process reviewer required before indexation.",
  ],
  seo: {
    title: "NEET Exam Dates: Official Milestone Timeline and Status | Rank Sarthi",
    description:
      "Official NEET UG date status with the completed 2026 examination and re-examination timelines kept separate, and unannounced 2027 milestones stated plainly.",
    ogType: "article",
  },
};
