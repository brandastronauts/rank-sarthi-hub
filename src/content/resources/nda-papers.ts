import type { ResourceRow } from "../types";

/**
 * Shared NDA question-paper registry (single source of truth for
 * `/nda/previous-year-papers` and its filtered event children).
 *
 * Transcribed from the approved Rank Sarthi NDA-B Verified Resource Registry
 * (12 September 2026). Event identities NDA-I-2026 and NDA-II-2026 are never
 * flattened into one generic "2026" event. A row with no verified official
 * source carries no href and therefore no active CTA.
 */

export type NdaExamEventId = "NDA-I-2026" | "NDA-II-2026";

export interface NdaPaperRecord {
  paperId: string;
  examEventId: NdaExamEventId;
  eventLabel: string;
  cycleYear: number;
  examNumber: 1 | 2;
  paper: "Mathematics" | "General Ability Test";
  paperCode: "01" | "02";
  questionPaperUrl?: string;
  studentPaperLabel: string;
  studentSourceBadge: string;
  sourceOwner: string;
  activeCTA: boolean;
  eventDate: string;
  note?: string;
}

export const ndaPaperRecords: NdaPaperRecord[] = [
  {
    paperId: "NDA-I-2026-MATH",
    examEventId: "NDA-I-2026",
    eventLabel: "NDA I 2026 · Mathematics (Code 01)",
    cycleYear: 2026,
    examNumber: 1,
    paper: "Mathematics",
    paperCode: "01",
    questionPaperUrl: "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-I-26-MATHEMATICS-130426.pdf",
    studentPaperLabel: "Official Question Paper",
    studentSourceBadge: "UPSC Official",
    sourceOwner: "Union Public Service Commission",
    activeCTA: true,
    eventDate: "Exam 12 Apr 2026 · paper uploaded 13 Apr 2026",
    note: "Direct official UPSC PDF. Linked, not rehosted.",
  },
  {
    paperId: "NDA-I-2026-GAT",
    examEventId: "NDA-I-2026",
    eventLabel: "NDA I 2026 · General Ability Test (Code 02)",
    cycleYear: 2026,
    examNumber: 1,
    paper: "General Ability Test",
    paperCode: "02",
    questionPaperUrl: "https://www.upsc.gov.in/sites/default/files/QP-NDA-NA-I-26-GENERAL-ABILITY-TEST-130426.pdf",
    studentPaperLabel: "Official Question Paper",
    studentSourceBadge: "UPSC Official",
    sourceOwner: "Union Public Service Commission",
    activeCTA: true,
    eventDate: "Exam 12 Apr 2026 · paper uploaded 13 Apr 2026",
    note: "Direct official UPSC PDF. Linked, not rehosted.",
  },
  {
    paperId: "NDA-II-2026-MATH",
    examEventId: "NDA-II-2026",
    eventLabel: "NDA II 2026 · Mathematics (Code 01)",
    cycleYear: 2026,
    examNumber: 2,
    paper: "Mathematics",
    paperCode: "01",
    studentPaperLabel: "Not Yet Published",
    studentSourceBadge: "No active source",
    sourceOwner: "Union Public Service Commission",
    activeCTA: false,
    eventDate: "Exam scheduled 13 Sep 2026",
    note: "UPSC has not published an official NDA-II-2026 question paper. Coaching or memory-based copies are not used as substitutes.",
  },
  {
    paperId: "NDA-II-2026-GAT",
    examEventId: "NDA-II-2026",
    eventLabel: "NDA II 2026 · General Ability Test (Code 02)",
    cycleYear: 2026,
    examNumber: 2,
    paper: "General Ability Test",
    paperCode: "02",
    studentPaperLabel: "Not Yet Published",
    studentSourceBadge: "No active source",
    sourceOwner: "Union Public Service Commission",
    activeCTA: false,
    eventDate: "Exam scheduled 13 Sep 2026",
    note: "UPSC has not published an official NDA-II-2026 question paper. Coaching or memory-based copies are not used as substitutes.",
  },
];

/** Answer-key state per event, kept separate from the paper record. */
const answerKeyState: Record<NdaExamEventId, string> = {
  "NDA-I-2026": "Official UPSC answer key not published yet",
  "NDA-II-2026": "Official UPSC answer key not published yet",
};

function toRow(record: NdaPaperRecord): ResourceRow {
  const paperCell = record.activeCTA && record.questionPaperUrl
    ? {
        label: "Question paper",
        actions: [
          {
            provenance: "OFFICIAL_AUTHORITY_COPY" as const,
            label: record.studentPaperLabel,
            badge: record.studentSourceBadge,
            cta: "Open official PDF",
            href: record.questionPaperUrl,
            owner: record.sourceOwner,
            detail: `Code ${record.paperCode} · ${record.paper}`,
          },
        ],
      }
    : {
        label: "Question paper",
        actions: [
          {
            provenance: "NOT_AVAILABLE" as const,
            label: record.studentPaperLabel,
            badge: record.studentSourceBadge,
            owner: record.sourceOwner,
            detail: `Code ${record.paperCode} · ${record.paper}`,
            trustNote: "No official UPSC resource exists for this event yet.",
          },
        ],
      };

  return {
    id: record.paperId.toLowerCase(),
    eventLabel: record.eventLabel,
    eventDate: record.eventDate,
    cells: [
      paperCell,
      {
        label: "Answer key",
        actions: [
          {
            provenance: "NOT_AVAILABLE" as const,
            label: answerKeyState[record.examEventId],
            badge: "Official only",
            owner: record.sourceOwner,
            trustNote: "A coaching or reconstructed solution is never shown as an official UPSC answer key.",
          },
        ],
      },
    ],
    ...(record.note ? { note: record.note } : {}),
  };
}

/** All paper rows, optionally filtered by event identity. */
export function ndaPaperRowsFor(examEventId?: NdaExamEventId): ResourceRow[] {
  return ndaPaperRecords
    .filter((r) => (examEventId ? r.examEventId === examEventId : true))
    .map(toRow);
}
