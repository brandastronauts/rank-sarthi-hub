import type { InfoPageContent, ResourceAction } from "../types";

/**
 * /neet/answer-key — verified official NEET answer keys by examination event.
 * Only NTA-published provisional and final keys may carry an active action; a
 * coaching key is never substituted for a missing official key, and the 3 May
 * 2026 examination is kept separate from the 21 June 2026 re-examination.
 */

function key(label: string, detail: string, href: string): ResourceAction {
  return {
    provenance: "OFFICIAL_AUTHORITY_COPY",
    label,
    badge: "Official NTA",
    cta: "View Official Answer Key",
    href,
    owner: "National Testing Agency",
    detail,
  };
}

const notVerified = (label: string, detail: string): ResourceAction => ({
  provenance: "NOT_AVAILABLE",
  label,
  cta: "Not available / not verified",
  detail,
});

export const neetAnswerKey: InfoPageContent = {
  url: "/neet/answer-key",
  platform: "neet",
  slug: "answer-key",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Answer Key: Official Provisional and Final Key Status",
  eyebrow: "Official keys",
  intent: "Open the correct official key for the exact examination event you sat",
  chips: ["Official NTA only", "Event-separated", "Provisional vs final"],
  meta: [{ label: "Source owner", value: "National Testing Agency" }],
  lastVerified: "10 September 2026",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Only answer keys published by the National Testing Agency are shown here. The 2026 cycle has two separate examination events, and their keys are not interchangeable: the 3 May 2026 examination has a verified provisional key, while the 21 June 2026 re-examination has both a verified provisional key and a final key published on 16 July 2026.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "A provisional key can change after the official challenge window. Only the final key is used for score compilation. Where an official key was not verified, this page states that plainly instead of linking a coaching key.",
        },
      ],
    },
  ],
  freshness: {
    heading: "Official key status",
    recordIds: ["neet-2026-reexam-final-key", "neet-2026-original-final-key"],
    note: "Detection is automatic; publication is not. A newly detected official key appears here only after human review.",
  },
  blocks: [
    {
      kind: "resources",
      id: "keys-by-event",
      heading: "Answer keys by examination event",
      intro: "Latest event first. Each row is one examination event with its own key set.",
      rows: [
        {
          id: "ak-2026-reexam",
          eventLabel: "NEET UG 2026 Re-Examination",
          eventDate: "21 Jun 2026",
          cells: [
            {
              label: "Provisional key",
              actions: [key("Official provisional key", "Published 25 Jun 2026", "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/06/20260625208933797.pdf")],
            },
            {
              label: "Final key",
              actions: [key("Official final key", "Published 16 Jul 2026 · codes 50 / 60 / 70 / 80", "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/07/20260716131467523.pdf")],
            },
          ],
          note: "This is the result-bearing event of the 2026 cycle.",
        },
        {
          id: "ak-2026-original",
          eventLabel: "NEET UG 2026 examination",
          eventDate: "3 May 2026",
          cells: [
            {
              label: "Provisional key",
              actions: [key("Official provisional key", "Published 6 May 2026", "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/05/202605061448997112.pdf")],
            },
            {
              label: "Final key",
              actions: [
                notVerified(
                  "Final key",
                  "No verified official final key exists for this event in the current source set.",
                ),
              ],
            },
          ],
          note: "Do not apply the 21 June re-examination key to this paper.",
        },
        {
          id: "ak-2025",
          eventLabel: "NEET UG 2025",
          eventDate: "4 May 2025",
          cells: [
            {
              label: "Provisional key",
              actions: [key("Official provisional key", "Published 3 Jun 2025", "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2025/06/2025060369.pdf")],
            },
            {
              label: "Final key",
              actions: [key("Official final key", "Published 14 Jun 2025", "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2025/06/2025061450.pdf")],
            },
          ],
        },
        {
          id: "ak-2024-main",
          eventLabel: "NEET UG 2024 examination",
          eventDate: "5 May 2024",
          cells: [
            {
              label: "Provisional key",
              actions: [notVerified("Provisional key", "Not carried forward as a verified action.")],
            },
            {
              label: "Final key",
              actions: [key("Official revised final key", "Published 26 Jul 2024", "https://nta.ac.in/Download/Notice/Notice_20240726171027.pdf")],
            },
          ],
          note: "The revised final key is the operative official document for this event.",
        },
        {
          id: "ak-2024-reexam",
          eventLabel: "NEET UG 2024 Re-Examination",
          eventDate: "23 Jun 2024",
          cells: [
            {
              label: "Provisional key",
              actions: [notVerified("Provisional key", "Not carried forward as a verified action.")],
            },
            {
              label: "Final key",
              actions: [
                {
                  provenance: "SOURCE_NOT_VERIFIED",
                  label: "Final key",
                  badge: "Source pending",
                  detail: "The previously verified official destination is currently unavailable.",
                },
              ],
            },
          ],
        },
        {
          id: "ak-2023",
          eventLabel: "NEET UG 2023 examinations of 7 May and 6 June",
          eventDate: "7 May 2023 and 6 Jun 2023",
          cells: [
            {
              label: "Provisional key",
              actions: [notVerified("Provisional key", "Not carried forward as a verified action.")],
            },
            {
              label: "Final key",
              actions: [key("Official final key", "Published 15 Jun 2023 · one document covering both 2023 events", "https://www.nta.ac.in/Download/Notice/Notice_20230615172159.pdf")],
            },
          ],
          note: "Both 2023 events keep their own identity even though one official document carries the final key.",
        },
        {
          id: "ak-2022",
          eventLabel: "NEET UG 2022",
          eventDate: "17 Jul 2022",
          cells: [
            {
              label: "Final key",
              actions: [key("Official final key", "Published 7 Sep 2022", "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/09/2022090743.pdf")],
            },
          ],
        },
        {
          id: "ak-2021",
          eventLabel: "NEET UG 2021",
          cells: [
            {
              label: "Final key",
              actions: [key("Official final key", "Official NEET archive copy", "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021699.pdf")],
            },
          ],
        },
        {
          id: "ak-2020",
          eventLabel: "NEET UG 2020",
          eventDate: "13 Sep 2020",
          cells: [
            {
              label: "Final key",
              actions: [
                {
                  provenance: "SOURCE_NOT_VERIFIED",
                  label: "Official index only",
                  badge: "Source pending",
                  detail:
                    "The NTA notice-board archive confirms a 2020 final key, but no exact direct file was retained as a verified action.",
                },
              ],
            },
          ],
        },
      ],
      note: "Every key opens on the official NTA or official CDN destination in a new tab. Rank Sarthi does not host key files.",
    },
    {
      kind: "prose",
      id: "provisional-vs-final",
      heading: "Provisional key, challenge window, final key",
      concepts: [
        {
          id: "key-lifecycle",
          title: "How an official key changes",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "NTA publishes a provisional key with the recorded responses for the event." }],
                [{ text: "A paid, time-bound challenge window opens for candidates." }],
                [{ text: "A subject expert committee reviews challenges." }],
                [
                  {
                    text: "NTA publishes a final key. Where a question is dropped or an option corrected, the final key alone governs scoring.",
                  },
                ],
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "A self-evaluated score taken from a provisional key is an estimate, not a result. Recheck it against the final key for the same event before drawing any conclusion.",
                },
              ],
            },
          ],
        },
        {
          id: "event-identity",
          title: "Why event identity matters",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "NEET has had more than one examination event within a single cycle in 2023, 2024 and 2026. Each event has its own paper codes and its own key. Applying a key from one event to another produces a wrong score and a wrong conclusion about weak chapters.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    {
      label: "NEET previous year papers",
      url: "/neet/previous-year-papers",
      relation: "related",
      description: "Open the paper that matches this key.",
    },
    { label: "NEET cutoff", url: "/neet/cutoff", relation: "next", description: "Compare your score against official qualifying thresholds." },
    { label: "NEET exam dates", url: "/neet/exam-dates", relation: "related" },
    { label: "NEET home", url: "/neet", relation: "up" },
  ],
  faqs: [
    {
      question: "Which NEET answer key should I use to score my paper?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Use the final key published by NTA for the exact examination event you sat. Where only a provisional key is verified, treat your score as provisional.",
            },
          ],
        },
      ],
    },
    {
      question: "Is there a final key for the 3 May 2026 examination?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No verified official final key exists for that event in the current source set. Its provisional key is available." },
          ],
        },
      ],
    },
    {
      question: "Do you publish coaching answer keys?",
      answer: [
        { type: "paragraph", children: [{ text: "No. Only keys published by the National Testing Agency appear on this page." }] },
      ],
    },
  ],
  sourceRefs: [
    "neet-2026-reexam-final-key",
    "neet-2026-reexam-provisional-key",
    "neet-2026-original-provisional-key",
    "neet-2025-final-key",
    "neet-2024-revised-final-key",
    "neet-2023-final-key",
    "nta-notice-board-archive",
    "neet-official-archive",
  ],
  sourceNote:
    "Answer-key provenance is restricted to the National Testing Agency and its official document hosts. No coaching key is used as a substitute.",
  contributorPolicy: [
    "Prepared by: UNASSIGNED",
    "Verified against official source",
    "Last checked: 2026-09-10",
    "Last verified: 2026-09-10",
    "Exam process reviewer required before indexation.",
  ],
  seo: {
    title: "NEET Answer Key: Official Provisional and Final Key Status | Rank Sarthi",
    description:
      "Verified official NEET answer keys by exam event, with provisional and final keys kept separate and unverified keys clearly marked.",
    ogType: "article",
  },
};
