import type { InfoPageContent, ResourceAction } from "../types";

/**
 * /neet/previous-year-papers — NEET PYQ resource library (T10 treatment on the
 * generic information/resource architecture).
 *
 * Data is transcribed from the accepted R01 Verified Resource Registry with the
 * R01B trust-label correction applied: an authority-hosted file is the only
 * resource that may carry "Official Question Paper" / "Official NTA". Validated
 * third-party booklet scans and reconstructions are labelled as such, always
 * with their source owner visible, and a reconstruction additionally carries the
 * required disclosure line. An unverified paper never becomes a link.
 */

const RECONSTRUCTION_NOTE =
  "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.";

const AAKASH = "Aakash Educational Services Limited / Aakash Digital";

function scan(detail: string, href: string): ResourceAction {
  return {
    provenance: "VERIFIED_TEST_BOOKLET_SCAN",
    label: "Verified Paper Scan",
    badge: "Verified reference",
    cta: "View Paper",
    href,
    owner: AAKASH,
    detail,
  };
}

function reconstruction(detail: string, href: string): ResourceAction {
  return {
    provenance: "VERIFIED_PAPER_RECONSTRUCTION",
    label: "Verified Paper Reconstruction",
    badge: "Verified reference",
    cta: "View Paper",
    href,
    owner: AAKASH,
    detail,
    trustNote: RECONSTRUCTION_NOTE,
  };
}

function officialKey(detail: string, href: string): ResourceAction {
  return {
    provenance: "OFFICIAL_AUTHORITY_COPY",
    label: "Official NTA answer key",
    badge: "Official NTA",
    cta: "View Official Answer Key",
    href,
    owner: "National Testing Agency",
    detail,
  };
}

const ANALYSIS_PENDING: ResourceAction = {
  provenance: "NOT_AVAILABLE",
  label: "Rank Sarthi analysis",
  cta: "Analysis pending",
  detail: "Detailed paper analysis pending verified paper ingestion.",
};

const paperCol = (actions: ResourceAction[]) => ({ label: "Question paper", actions });
const keyCol = (actions: ResourceAction[]) => ({ label: "Official answer key", actions });
const analysisCol = { label: "Rank Sarthi analysis", actions: [ANALYSIS_PENDING] };

const official2020 = (code: string, language: string, href: string) => ({
  id: `qp20-${code.toLowerCase()}`,
  eventLabel: `NEET UG 2020 main examination — Code ${code}`,
  eventDate: language,
  cells: [
    paperCol([
      {
        provenance: "OFFICIAL_AUTHORITY_COPY" as const,
        label: "Official Question Paper",
        badge: "Official NTA",
        cta: "View Official Paper",
        href,
        owner: "National Testing Agency",
        detail: `Code ${code} · ${language}`,
      },
    ]),
  ],
});

export const neetPreviousYearPapers: InfoPageContent = {
  url: "/neet/previous-year-papers",
  platform: "neet",
  slug: "previous-year-papers",
  exam: "NEET (UG)",
  contentStatus: "draft",
  title: "NEET Previous Year Question Papers: Verified Official Source Archive",
  eyebrow: "Resource library",
  intent: "Open a real NEET paper by examination event, then check it against the official answer key",
  chips: ["Official NTA", "Verified reference", "Source pending"],
  meta: [
    { label: "Source owner", value: "National Testing Agency" },
    { label: "Local rehosting", value: "Rights review required" },
  ],
  lastVerified: "10 September 2026",
  answer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Practise real NEET papers and check them against verified official answer keys. Authority-hosted question-paper files are verified for the 2020 examination. For 2021 to 2026 no authority-hosted paper file was verified, so those events show a validated third-party paper copy, clearly labelled as a copy with its source owner, and never as an official NTA paper.",
        },
      ],
    },
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Official Question Paper means the file is hosted by NTA or the official NEET archive. A Verified Paper Scan or Verified Paper Reconstruction is a third-party copy that Rank Sarthi validated against the event, paper code and paper structure. They are not the same thing.",
        },
      ],
    },
  ],
  freshness: {
    heading: "Official paper-source status",
    recordIds: ["neet-official-paper-archive"],
    note: "Checking is automatic; publishing is not. A new paper resource reaches this page only after human source and rights review.",
  },
  blocks: [
    {
      kind: "resources",
      id: "event-archive",
      heading: "Papers and keys by examination event",
      intro:
        "Latest examination event first. The 3 May 2026 examination and the 21 June 2026 re-examination are separate events and are never merged.",
      rows: [
        {
          id: "neet-2026-reexam",
          eventLabel: "NEET UG 2026 Re-Examination",
          eventDate: "21 Jun 2026",
          cells: [
            paperCol([
              reconstruction(
                "Code 50 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Questions&Answers_ReNEET-2026_(Code-50).pdf",
              ),
            ]),
            keyCol([
              officialKey(
                "Final key · published 16 Jul 2026 · codes 50 / 60 / 70 / 80",
                "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/07/20260716131467523.pdf",
              ),
              officialKey(
                "Provisional key · published 25 Jun 2026",
                "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/06/20260625208933797.pdf",
              ),
            ]),
            analysisCol,
          ],
          note: "Latest result-bearing event in the verified 2026 source set.",
        },
        {
          id: "neet-2026-original",
          eventLabel: "NEET UG 2026 examination",
          eventDate: "3 May 2026",
          cells: [
            paperCol([
              reconstruction(
                "Code 11 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Aakash-Questions&Answers_NEET-2026%20(Code-11).pdf",
              ),
            ]),
            keyCol([
              officialKey(
                "Provisional key · published 6 May 2026",
                "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/05/202605061448997112.pdf",
              ),
              {
                provenance: "NOT_AVAILABLE",
                label: "Final key",
                cta: "Not available / not verified",
                detail: "No verified official final key for this event in the current source set.",
              },
            ]),
            analysisCol,
          ],
          note: "Separate historical event. Do not use the re-examination key with this paper.",
        },
        {
          id: "neet-2025",
          eventLabel: "NEET UG 2025",
          eventDate: "4 May 2025",
          cells: [
            paperCol([
              scan(
                "Code 45 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Paper_20251004204701_227d5d1f.pdf",
              ),
            ]),
            keyCol([
              officialKey(
                "Final key · published 14 Jun 2025",
                "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2025/06/2025061450.pdf",
              ),
              officialKey(
                "Provisional key · published 3 Jun 2025",
                "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2025/06/2025060369.pdf",
              ),
            ]),
            analysisCol,
          ],
        },
        {
          id: "neet-2024-main",
          eventLabel: "NEET UG 2024 examination",
          eventDate: "5 May 2024",
          cells: [
            paperCol([
              scan(
                "Code T1 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Paper_20250124132822.pdf",
              ),
            ]),
            keyCol([
              officialKey(
                "Revised final key · published 26 Jul 2024",
                "https://nta.ac.in/Download/Notice/Notice_20240726171027.pdf",
              ),
            ]),
            analysisCol,
          ],
        },
        {
          id: "neet-2024-reexam",
          eventLabel: "NEET UG 2024 Re-Examination for affected candidates",
          eventDate: "23 Jun 2024",
          cells: [
            paperCol([
              reconstruction(
                "Code C1 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ques&Ans_Re-Examniation%20NEET-2024_(Code-C1)_Revised.pdf",
              ),
            ]),
            keyCol([
              {
                provenance: "SOURCE_NOT_VERIFIED",
                label: "Final key",
                badge: "Source pending",
                detail: "The previously verified official destination is currently unavailable.",
              },
            ]),
            analysisCol,
          ],
          note: "Separate event from the 5 May 2024 examination.",
        },
        {
          id: "neet-2023-main",
          eventLabel: "NEET UG 2023 examination",
          eventDate: "7 May 2023",
          cells: [
            paperCol([
              scan(
                "Code E1 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Paper_20231108004734.pdf",
              ),
            ]),
            keyCol([
              officialKey(
                "Final key · published 15 Jun 2023",
                "https://www.nta.ac.in/Download/Notice/Notice_20230615172159.pdf",
              ),
            ]),
            analysisCol,
          ],
        },
        {
          id: "neet-2023-june",
          eventLabel: "NEET UG 2023 examination event",
          eventDate: "6 Jun 2023",
          cells: [
            paperCol([
              {
                provenance: "SOURCE_NOT_VERIFIED",
                label: "Paper source verification pending",
                badge: "Source pending",
                detail: "No paper resource has passed source verification for this event.",
              },
            ]),
            keyCol([
              officialKey(
                "Final key · published 15 Jun 2023 · same official document also covers the 7 May event",
                "https://www.nta.ac.in/Download/Notice/Notice_20230615172159.pdf",
              ),
            ]),
            analysisCol,
          ],
          note: "A separate examination event with its own identity. The official final-key document covers both 2023 events.",
        },
        {
          id: "neet-2022",
          eventLabel: "NEET UG 2022",
          eventDate: "17 Jul 2022",
          cells: [
            paperCol([
              reconstruction(
                "Code Q1 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/sm_sa/Code-Q1__Ques%20&%20Ans_NEET-2022.pdf",
              ),
            ]),
            keyCol([
              officialKey(
                "Final key · published 7 Sep 2022",
                "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/09/2022090743.pdf",
              ),
            ]),
            analysisCol,
          ],
        },
        {
          id: "neet-2021",
          eventLabel: "NEET UG 2021",
          cells: [
            paperCol([
              scan(
                "Code M4 · English",
                "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Paper_20211218095515.pdf",
              ),
            ]),
            keyCol([
              officialKey(
                "Final key from the official NEET archive",
                "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021699.pdf",
              ),
            ]),
            analysisCol,
          ],
        },
        {
          id: "neet-2020",
          eventLabel: "NEET UG 2020 main examination",
          eventDate: "13 Sep 2020",
          cells: [
            paperCol([
              {
                provenance: "OFFICIAL_AUTHORITY_COPY",
                label: "Official Question Paper",
                badge: "Official NTA",
                cta: "View Official Paper",
                href:
                  "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021525.pdf",
                owner: "National Testing Agency",
                detail: "Code E2 · English · more codes listed below",
              },
            ]),
            keyCol([
              {
                provenance: "SOURCE_NOT_VERIFIED",
                label: "Official final key",
                badge: "Source pending",
                detail:
                  "The NTA notice-board archive confirms a 2020 final key, but no exact direct file was retained as a verified action.",
              },
            ]),
            analysisCol,
          ],
        },
      ],
      note: "Rank Sarthi does not host these files. Every external resource opens on its owner's site in a new tab. Local rehosting stays blocked pending a rights review.",
    },
    {
      kind: "resources",
      id: "official-2020-codes",
      heading: "Authority-hosted 2020 paper files by code",
      intro:
        "These files are hosted by the official NEET archive. Only files that resolved successfully during verification are activated; additional archive codes exist but are not carried forward as active links.",
      rows: [
        official2020(
          "E2",
          "English",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021525.pdf",
        ),
        official2020(
          "E3",
          "English",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021543.pdf",
        ),
        official2020(
          "E5",
          "English",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021519.pdf",
        ),
        official2020(
          "F1",
          "English",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021671.pdf",
        ),
        official2020(
          "F5",
          "English",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021619.pdf",
        ),
        official2020(
          "F6",
          "English",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021613.pdf",
        ),
        official2020(
          "G3",
          "English",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/2022021627.pdf",
        ),
        official2020(
          "E4",
          "English and Hindi",
          "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2022/02/20220215100.pdf",
        ),
      ],
    },
    {
      kind: "table",
      id: "how-to-read-labels",
      heading: "How to read the paper labels",
      intro: "Every paper action on this page carries one of these four states.",
      columns: ["Label", "What it means", "Action shown"],
      rows: [
        [
          "Official Question Paper",
          "The file is hosted by NTA or the official NEET archive.",
          "View Official Paper",
        ],
        [
          "Verified Paper Scan",
          "A third-party hosted scan of the test booklet, validated against the event, code and paper structure.",
          "View Paper, with the source owner shown",
        ],
        [
          "Verified Paper Reconstruction",
          "A third-party questions-and-answers reproduction of the paper, validated against the event and structure. Not an authority file.",
          "View Paper, with the source owner and a reconstruction disclosure",
        ],
        [
          "Paper source verification pending",
          "No resource has passed source verification for this event.",
          "No link is shown",
        ],
      ],
    },
    {
      kind: "prose",
      id: "what-is-official",
      heading: "What official means here",
      concepts: [
        {
          id: "official-definitions",
          title: "Official paper, official key, Rank Sarthi analysis",
          body: [
            {
              type: "definition",
              term: "Official Question Paper",
              children: [
                { text: "A paper file whose owner is NTA or NEET, or a verified legacy official archive." },
              ],
            },
            {
              type: "definition",
              term: "Official NTA Answer Key",
              children: [
                { text: "A provisional or final key published by NTA for the identified examination event." },
              ],
            },
            {
              type: "definition",
              term: "Rank Sarthi Analysis or Solution",
              children: [
                {
                  text: "Editorial work produced by Rank Sarthi. It can never carry the label Official.",
                },
              ],
            },
          ],
        },
        {
          id: "why-copies-exist",
          title: "Why recent years show a verified copy instead of an official file",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "No exact authority-hosted question-paper file was found for the 2021 to 2026 events in the official source stack that was searched. A downloadable coaching-site file is not promoted into an official paper simply because it can be opened. Instead, each recent event links to a copy that was individually validated for event identity, paper code, question count, duration, mark total and subject structure, with the source owner shown beside the action.",
                },
              ],
            },
            {
              type: "list",
              items: [
                [{ text: "Anonymous file shares, user-upload sites and scraped mirrors are rejected outright." }],
                [{ text: "A copy is never relabelled as an authority file." }],
                [
                  {
                    text: "Rank Sarthi does not rehost any of these files: redistribution rights review is still required.",
                  },
                ],
              ],
            },
          ],
        },
        {
          id: "enrichment-model",
          title: "What comes next for this library",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Future enrichment connects paper to question to subject to chapter to concept to NCERT relationship to error pattern. That work is not done yet, and this page does not claim that historical questions are already tagged.",
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
      label: "NEET answer key",
      url: "/neet/answer-key",
      relation: "next",
      description: "Open the verified official key for the event you just practised.",
    },
    {
      label: "NEET exam dates",
      url: "/neet/exam-dates",
      relation: "related",
      description: "Event-level timeline for the current cycle.",
    },
    {
      label: "NEET cutoff",
      url: "/neet/cutoff",
      relation: "related",
      description: "Official qualifying thresholds once you have scored a paper.",
    },
    { label: "NEET home", url: "/neet", relation: "up" },
  ],
  faqs: [
    {
      question: "Where can I find official NEET previous year papers?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Authority-hosted NEET question papers are verified for the 2020 examination and are linked here by paper code. For 2021 to 2026, no authority-hosted paper file was verified, so this page links a validated third-party copy instead and labels it as a copy.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does the 6 June 2023 event show no paper?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No paper resource for that separate examination event passed source verification, so the row stays at paper source verification pending and shows no link. The official final answer key for that event is available.",
            },
          ],
        },
      ],
    },
    {
      question: "Can I download these papers from Rank Sarthi?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Rank Sarthi links to the file owner and does not rehost any paper. Local hosting stays blocked until a redistribution rights review is complete.",
            },
          ],
        },
      ],
    },
  ],
  sourceRefs: [
    "neet-official-archive",
    "neet-official-home",
    "nta-notice-board-archive",
    "neet-2020-official-paper-e2",
    "neet-2026-reexam-final-key",
    "neet-2025-final-key",
    "neet-2024-revised-final-key",
  ],
  sourceNote:
    "Question-paper provenance is taken only from the National Testing Agency and the official NEET archive. Education portals are never used as the provenance authority for a paper.",
  contributorPolicy: [
    "Prepared by: UNASSIGNED",
    "Verified against official source",
    "Last checked: 2026-09-10",
    "Last verified: 2026-09-10",
    "Source and rights reviewer required before indexation.",
  ],
  seo: {
    title: "NEET Previous Year Question Papers: Official Source Archive | Rank Sarthi",
    description:
      "Find verified official NEET question papers where public NTA archive files are available, plus official answer-key status by exam event, code and year.",
    ogType: "article",
  },
};
