import { freshDataRecords, freshnessChangeLog } from "./records";
import type { FreshDataRecord, FreshnessChangeLogEntry, FreshnessValue } from "./types";

export * from "./types";
export { freshnessSources, getFreshnessSource, isApprovedSourceUrl } from "./sources";
export { freshDataRecords, freshnessChangeLog };

/** Approved records only — a candidate never reaches a page. */
export function recordsForPage(pageUrl: string): FreshDataRecord[] {
  return freshDataRecords.filter((r) => r.pageUrl === pageUrl && r.reviewStatus === "APPROVED");
}

export function recordById(id: string): FreshDataRecord | undefined {
  return freshDataRecords.find((r) => r.id === id);
}

export function recordsByIds(ids: string[]): FreshDataRecord[] {
  return ids.map(recordById).filter((r): r is FreshDataRecord => Boolean(r));
}

/** Visible change-log entries for a page, newest first. */
export function changeLogForPage(pageUrl: string): FreshnessChangeLogEntry[] {
  return freshnessChangeLog
    .filter((e) => e.visible && e.affectedUrls.includes(pageUrl))
    .sort((a, b) => (a.approvedAt < b.approvedAt ? 1 : -1));
}

/** Presentation-safe rendering of a monitored value. */
export function formatFreshnessValue(value: FreshnessValue): string {
  if (Array.isArray(value)) return value.join(", ");
  if (value !== null && typeof value === "object") {
    return Object.entries(value)
      .map(([k, v]) => `${k}: ${String(v)}`)
      .join(" · ");
  }
  return String(value);
}
