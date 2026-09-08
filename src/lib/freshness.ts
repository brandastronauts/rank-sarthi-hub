import {
  freshDataRecords,
  getFreshnessSource,
  isApprovedSourceUrl,
  type ChangePolicy,
  type FreshDataRecord,
  type FreshnessChangeCandidate,
  type FreshnessStatus,
  type FreshnessValue,
} from "@/content/freshness";

/**
 * FreshnessWatch runner — reusable across JEE, NEET and NDA.
 *
 * The contract is deliberately conservative:
 *   check → normalise → compare → (no change: touch lastChecked only)
 *                                → (change: create a review candidate)
 * A no-change check NEVER regenerates page copy. A failed fetch, a failed
 * parse or a source conflict NEVER replaces a verified value with a guess.
 */

export type CheckOutcome =
  | { kind: "UNCHANGED"; recordId: string; lastChecked: string }
  | { kind: "CANDIDATE"; recordId: string; candidate: FreshnessChangeCandidate }
  | { kind: "FAILED"; recordId: string; status: FreshnessStatus; publicMessage: string; reason: string }
  | { kind: "SKIPPED"; recordId: string; reason: string };

/** Deterministic normalisation. No AI summarisation is permitted here. */
export function normaliseValue(value: FreshnessValue): string {
  if (Array.isArray(value)) return value.map((v) => normaliseValue(v)).join("|");
  if (value !== null && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .map((k) => `${k}=${String((value as Record<string, unknown>[string])[k as never])}`)
      .join("|");
  }
  return String(value).replace(/\s+/g, " ").trim().toLowerCase();
}

export function valuesDiffer(a: FreshnessValue, b: FreshnessValue): boolean {
  return normaliseValue(a) !== normaliseValue(b);
}

const CADENCE_DAYS: Record<string, number | null> = {
  DAILY: 1,
  WEEKLY: 7,
  MONTHLY: 31,
  EVENT_TRIGGERED: null,
  PAUSED: null,
};

/** A record past its cadence window is STALE — value preserved, warning shown. */
export function isStale(record: FreshDataRecord, now = new Date()): boolean {
  const window = CADENCE_DAYS[record.refreshCadence];
  if (!window) return false;
  const checked = Date.parse(record.lastChecked);
  if (Number.isNaN(checked)) return false;
  return (now.getTime() - checked) / 86_400_000 > window;
}

export function makeCandidate(
  record: FreshDataRecord,
  newValue: FreshnessValue,
  evidenceSnapshotRef: string,
  detectedAt = new Date().toISOString(),
): FreshnessChangeCandidate {
  const policy: ChangePolicy = record.changePolicy;
  return {
    id: `${record.id}--${detectedAt}`,
    freshDataRecordId: record.id,
    oldValue: record.currentValue,
    newValue,
    sourceRef: record.sourceRef,
    sourceUrl: record.sourceUrl,
    detectedAt,
    affectedUrls: [record.pageUrl],
    changePolicy: policy,
    // Only deterministic supporting metadata may auto-publish; every monitored
    // exam fact in this batch is REVIEW_REQUIRED or NEVER_AUTO_PUBLISH.
    reviewStatus: policy === "AUTO_SAFE" ? "NOT_REQUIRED" : "PENDING",
    evidenceSnapshotRef,
  };
}

/** One deterministic observation of an approved source. */
export interface SourceObservation {
  ok: boolean;
  /** Deterministically parsed value, when and only when parsing succeeded. */
  parsedValue?: FreshnessValue;
  /** Stable evidence reference (hash, ETag, resolved URL). */
  evidenceRef: string;
  reason?: string;
}

/**
 * Fetch an approved source and produce a deterministic observation.
 * Availability + fingerprint only: labelled-field extraction is added per
 * source as its parser is written and tested. Anything not deterministically
 * parsable is reported as unparsed, which forces REVIEW_REQUIRED.
 */
export async function observeSource(sourceId: string): Promise<SourceObservation> {
  const source = getFreshnessSource(sourceId);
  if (!source || !source.enabled) {
    return { ok: false, evidenceRef: "", reason: "source-not-enabled" };
  }
  if (!isApprovedSourceUrl(source.sourceUrl)) {
    return { ok: false, evidenceRef: "", reason: "url-not-allow-listed" };
  }
  try {
    const response = await fetch(source.sourceUrl, { method: "GET", redirect: "follow" });
    if (!response.ok) return { ok: false, evidenceRef: "", reason: `http-${response.status}` };
    const body = await response.text();
    const evidenceRef = `${source.id}:${body.length}:${response.headers.get("etag") ?? "no-etag"}`;
    // No parser is registered yet for any source, so no value is claimed.
    return { ok: true, evidenceRef };
  } catch (error) {
    return { ok: false, evidenceRef: "", reason: `fetch-failed:${String(error)}` };
  }
}

/** Run one record through the workflow. Returns an outcome; never mutates public copy. */
export async function checkRecord(record: FreshDataRecord): Promise<CheckOutcome> {
  if (record.refreshCadence === "PAUSED" || record.refreshCadence === "EVENT_TRIGGERED") {
    return { kind: "SKIPPED", recordId: record.id, reason: `cadence-${record.refreshCadence}` };
  }

  const observation = await observeSource(record.sourceRef);
  if (!observation.ok) {
    return {
      kind: "FAILED",
      recordId: record.id,
      status: "VERIFICATION_REQUIRED",
      publicMessage: record.fallback.publicMessage,
      reason: observation.reason ?? "unknown",
    };
  }

  if (observation.parsedValue === undefined) {
    // Source reachable, value not deterministically parsable → human review.
    return {
      kind: "FAILED",
      recordId: record.id,
      status: "REVIEW_REQUIRED",
      publicMessage: record.fallback.publicMessage,
      reason: "no-deterministic-parser",
    };
  }

  if (!valuesDiffer(record.currentValue, observation.parsedValue)) {
    // No change: only internal lastChecked moves. Page copy is untouched.
    return { kind: "UNCHANGED", recordId: record.id, lastChecked: new Date().toISOString() };
  }

  return {
    kind: "CANDIDATE",
    recordId: record.id,
    candidate: makeCandidate(record, observation.parsedValue, observation.evidenceRef),
  };
}

export async function runFreshnessWatch(platform?: "JEE" | "NEET" | "NDA"): Promise<CheckOutcome[]> {
  const scope = platform ? freshDataRecords.filter((r) => r.platform === platform) : freshDataRecords;
  const outcomes: CheckOutcome[] = [];
  for (const record of scope) outcomes.push(await checkRecord(record));
  return outcomes;
}
