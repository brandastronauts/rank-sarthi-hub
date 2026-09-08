/**
 * Presentation-safe surface for FreshnessWatch. UI imports only this module,
 * so no component can reach the watcher or an unapproved candidate.
 */
export type { FreshDataRecord, FreshnessChangeLogEntry } from "./types";
export { formatFreshnessValue, recordsForPage, recordsByIds, changeLogForPage } from "./index";

import type { FreshDataRecord } from "./types";

/** True when the record's own status asks for a visible caution line. */
export function isStaleLabel(record: FreshDataRecord): boolean {
  return (
    record.status === "STALE" ||
    record.status === "VERIFICATION_REQUIRED" ||
    record.status === "REVIEW_REQUIRED" ||
    record.status === "WITHDRAWN"
  );
}
