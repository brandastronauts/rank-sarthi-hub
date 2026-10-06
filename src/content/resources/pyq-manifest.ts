import type { ResourceAction } from "@/content/types";

/**
 * Single PYQ asset manifest for operator-supplied paper copies hosted by
 * Rank Sarthi. Pages consume this mapping by record id; no component holds a
 * hard-coded PDF URL. Dates, shifts and codes are the supplied labels.
 * Provenance is never "Official NTA": these are Rank Sarthi-hosted copies.
 */
import jee0 from "@/assets/pyq/jee/2025/JEE-Main-2025-22-Jan-Shift-1.pdf.asset.json";
import jee1 from "@/assets/pyq/jee/2025/JEE-Main-2025-22-Jan-Shift-2.pdf.asset.json";
import jee2 from "@/assets/pyq/jee/2025/JEE-Main-2025-23-Jan-Shift-1.pdf.asset.json";
import jee3 from "@/assets/pyq/jee/2025/JEE-Main-2025-23-Jan-Shift-2.pdf.asset.json";
import jee4 from "@/assets/pyq/jee/2025/JEE-Main-2025-24-Jan-Shift-1.pdf.asset.json";
import jee5 from "@/assets/pyq/jee/2025/JEE-Main-2025-24-Jan-Shift-2.pdf.asset.json";
import jee6 from "@/assets/pyq/jee/2025/JEE-Main-2025-28-Jan-Shift-1.pdf.asset.json";
import jee7 from "@/assets/pyq/jee/2025/JEE-Main-2025-28-Jan-Shift-2.pdf.asset.json";
import jee8 from "@/assets/pyq/jee/2025/JEE-Main-2025-29-Jan-Shift-1.pdf.asset.json";
import jee9 from "@/assets/pyq/jee/2025/JEE-Main-2025-29-Jan-Shift-2.pdf.asset.json";
import jee10 from "@/assets/pyq/jee/2025/JEE-Main-2025-2-Apr-Shift-1.pdf.asset.json";
import jee11 from "@/assets/pyq/jee/2025/JEE-Main-2025-2-Apr-Shift-2.pdf.asset.json";
import jee12 from "@/assets/pyq/jee/2025/JEE-Main-2025-4-Apr-Shift-1.pdf.asset.json";
import jee13 from "@/assets/pyq/jee/2025/JEE-Main-2025-4-Apr-Shift-2.pdf.asset.json";
import jee14 from "@/assets/pyq/jee/2025/JEE-Main-2025-5-Apr-Shift-1.pdf.asset.json";
import jee15 from "@/assets/pyq/jee/2025/JEE-Main-2025-5-Apr-Shift-2.pdf.asset.json";
import jee16 from "@/assets/pyq/jee/2025/JEE-Main-2025-6-Apr-Shift-1.pdf.asset.json";
import jee17 from "@/assets/pyq/jee/2025/JEE-Main-2025-6-Apr-Shift-2.pdf.asset.json";
import jee18 from "@/assets/pyq/jee/2025/JEE-Main-2025-8-Apr-Shift-2.pdf.asset.json";
import neet0 from "@/assets/pyq/neet/NEET-UG-2021-Code-O4.pdf.asset.json";
import neet1 from "@/assets/pyq/neet/NEET-UG-2022-Code-R1.pdf.asset.json";
import neet2 from "@/assets/pyq/neet/NEET-UG-2023-Code-E1.pdf.asset.json";
import neet3 from "@/assets/pyq/neet/NEET-UG-2024-Code-T1.pdf.asset.json";
import neet4 from "@/assets/pyq/neet/RENEET-UG-2024-Code-C1.pdf.asset.json";
import neet5 from "@/assets/pyq/neet/NEET-UG-2025-Code-45.pdf.asset.json";
import neet6 from "@/assets/pyq/neet/NEET-UG-2026-Code-12.pdf.asset.json";
import neet7 from "@/assets/pyq/neet/RENEET-UG-2026-Code-50.pdf.asset.json";

export const STUDENT_LABEL = "Rank Sarthi-hosted Question Paper";

export interface PyqAsset {
  recordId: string;
  exam: "JEE Main" | "NEET UG";
  year: number;
  session?: "Session 1" | "Session 2";
  date?: string;
  shift?: string;
  paperCode?: string;
  examType: "regular" | "re-exam";
  file: string;
  href: string;
  provenance: "RANK_SARTHI_HOSTED_COPY";
  label: string;
}

export const pyqAssets: PyqAsset[] = [
  { recordId: "jee-main-2025-s1-20250122-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "22 Jan 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-22-Jan-Shift-1.pdf", href: jee0.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250122-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "22 Jan 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-22-Jan-Shift-2.pdf", href: jee1.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250123-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "23 Jan 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-23-Jan-Shift-1.pdf", href: jee2.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250123-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "23 Jan 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-23-Jan-Shift-2.pdf", href: jee3.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250124-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "24 Jan 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-24-Jan-Shift-1.pdf", href: jee4.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250124-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "24 Jan 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-24-Jan-Shift-2.pdf", href: jee5.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250128-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "28 Jan 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-28-Jan-Shift-1.pdf", href: jee6.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250128-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "28 Jan 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-28-Jan-Shift-2.pdf", href: jee7.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250129-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "29 Jan 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-29-Jan-Shift-1.pdf", href: jee8.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s1-20250129-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 1", date: "29 Jan 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-29-Jan-Shift-2.pdf", href: jee9.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250402-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "2 Apr 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-2-Apr-Shift-1.pdf", href: jee10.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250402-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "2 Apr 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-2-Apr-Shift-2.pdf", href: jee11.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250404-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "4 Apr 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-4-Apr-Shift-1.pdf", href: jee12.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250404-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "4 Apr 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-4-Apr-Shift-2.pdf", href: jee13.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250405-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "5 Apr 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-5-Apr-Shift-1.pdf", href: jee14.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250405-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "5 Apr 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-5-Apr-Shift-2.pdf", href: jee15.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250406-shift1-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "6 Apr 2025", shift: "Shift 1", examType: "regular", file: "JEE-Main-2025-6-Apr-Shift-1.pdf", href: jee16.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250406-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "6 Apr 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-6-Apr-Shift-2.pdf", href: jee17.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "jee-main-2025-s2-20250408-shift2-p1", exam: "JEE Main", year: 2025, session: "Session 2", date: "8 Apr 2025", shift: "Shift 2", examType: "regular", file: "JEE-Main-2025-8-Apr-Shift-2.pdf", href: jee18.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2021", exam: "NEET UG", year: 2021, paperCode: "O4", examType: "regular", file: "NEET-UG-2021-Code-O4.pdf", href: neet0.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2022", exam: "NEET UG", year: 2022, paperCode: "R1", examType: "regular", file: "NEET-UG-2022-Code-R1.pdf", href: neet1.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2023-main", exam: "NEET UG", year: 2023, paperCode: "E1", examType: "regular", file: "NEET-UG-2023-Code-E1.pdf", href: neet2.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2024-main", exam: "NEET UG", year: 2024, paperCode: "T1", examType: "regular", file: "NEET-UG-2024-Code-T1.pdf", href: neet3.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2024-reexam", exam: "NEET UG", year: 2024, paperCode: "C1", examType: "re-exam", file: "RENEET-UG-2024-Code-C1.pdf", href: neet4.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2025", exam: "NEET UG", year: 2025, paperCode: "45", examType: "regular", file: "NEET-UG-2025-Code-45.pdf", href: neet5.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2026-original", exam: "NEET UG", year: 2026, paperCode: "12", examType: "regular", file: "NEET-UG-2026-Code-12.pdf", href: neet6.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
  { recordId: "neet-2026-reexam", exam: "NEET UG", year: 2026, paperCode: "50", examType: "re-exam", file: "RENEET-UG-2026-Code-50.pdf", href: neet7.url, provenance: "RANK_SARTHI_HOSTED_COPY", label: STUDENT_LABEL },
];

const byRecord = new Map(pyqAssets.map((a) => [a.recordId, a]));
export function pyqAssetFor(recordId: string): PyqAsset | undefined {
  return byRecord.get(recordId);
}

/** The one active paper action for a Rank Sarthi-hosted copy. */
export function hostedPaperAction(a: PyqAsset): ResourceAction {
  const identity = a.exam === "JEE Main"
    ? `${a.date} · ${a.shift} · Paper 1`
    : `Code ${a.paperCode} · ${a.examType === "re-exam" ? "Re-Examination" : "Regular examination"}`;
  return {
    provenance: a.provenance,
    label: a.label,
    badge: "Rank Sarthi-hosted",
    cta: "View Question Paper",
    href: a.href,
    owner: "Rank Sarthi (hosted paper copy)",
    detail: identity,
    trustNote: "This is a paper copy hosted by Rank Sarthi, not an NTA-hosted file. Check answers against the official NTA answer key.",
  };
}

/** Replace a row's pending question-paper state only when a mapped file exists. */
export function withHostedPaper<R extends { id: string; cells: { label: string; actions: ResourceAction[] }[] }>(row: R): R {
  const asset = pyqAssetFor(row.id);
  if (!asset) return row;
  return {
    ...row,
    cells: row.cells.map((c) =>
      c.label === "Question paper" ? { ...c, actions: [hostedPaperAction(asset)] } : c,
    ),
  };
}
