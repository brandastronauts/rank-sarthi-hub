/**
 * FreshnessWatch v1 — platform-agnostic contract.
 *
 * One record = one monitored field, for one exam, for one cycle.
 * Pages read APPROVED records only; nothing here scrapes an official source
 * during a student's request. JEE is the first consumer; NEET and NDA plug
 * into the same model by adding sources and records, never new types.
 */

export type FreshnessPlatform = "JEE" | "NEET" | "NDA";

export type FreshnessStatus =
  | "NOT_ANNOUNCED"
  | "SOURCE_AVAILABLE"
  | "VERIFIED"
  | "CHANGE_DETECTED"
  | "REVIEW_REQUIRED"
  | "STALE"
  | "VERIFICATION_REQUIRED"
  | "WITHDRAWN";

export type RefreshCadence = "DAILY" | "WEEKLY" | "MONTHLY" | "EVENT_TRIGGERED" | "PAUSED";

export type FreshnessConfidence = "HIGH" | "MEDIUM" | "LOW";

export type ChangePolicy = "AUTO_SAFE" | "REVIEW_REQUIRED" | "NEVER_AUTO_PUBLISH";

export type ReviewStatus = "NOT_REQUIRED" | "PENDING" | "APPROVED" | "REJECTED" | "CORRECTION_REQUIRED";

export type FreshnessValue = string | number | boolean | string[] | Record<string, unknown>;

export interface FreshDataRecord {
  id: string;
  /** Registry path (no origin), e.g. "/jee/exam-dates". */
  pageUrl: string;
  platform: FreshnessPlatform;
  exam: string;
  cycle: string;
  field: string;
  /** Human-readable label for the monitored field, shown in the panel. */
  fieldLabel: string;
  currentValue: FreshnessValue;
  status: FreshnessStatus;
  sourceRef: string;
  sourceUrl: string;
  sourceAuthority: string;
  publishedAt?: string;
  lastChecked: string;
  lastVerified: string;
  refreshCadence: RefreshCadence;
  refreshTrigger: string[];
  confidence: FreshnessConfidence;
  changePolicy: ChangePolicy;
  fallback: {
    publicValue: "PRESERVE_LAST_VERIFIED" | "SHOW_NOT_ANNOUNCED" | "HIDE_FIELD";
    publicMessage: string;
    actionState: "KEEP" | "HIDE" | "ROUTE_TO_SOURCE_INDEX";
  };
  reviewRequired: boolean;
  reviewStatus: ReviewStatus;
  previousValue?: FreshnessValue;
  changeDetectedAt?: string;
}

export interface FreshnessSource {
  id: string;
  authority: string;
  sourceUrl: string;
  sourceType:
    | "HTML_INDEX"
    | "HTML_STATUS_PAGE"
    | "PDF_NOTICE"
    | "PDF_BULLETIN"
    | "PDF_DATA_TABLE"
    | "INTERACTIVE_PORTAL";
  platform: FreshnessPlatform;
  monitoredSignals: string[];
  expectedUpdateBehaviour: string;
  parserStrategy: string;
  fallbackStrategy: string;
  trustTier: "PRIMARY_OWNER";
  enabled: boolean;
}

export interface FreshnessChangeCandidate {
  id: string;
  freshDataRecordId: string;
  oldValue: FreshnessValue;
  newValue: FreshnessValue;
  sourceRef: string;
  sourceUrl: string;
  sourcePublishedAt?: string;
  detectedAt: string;
  affectedUrls: string[];
  changePolicy: ChangePolicy;
  reviewStatus: ReviewStatus;
  evidenceSnapshotRef: string;
  reviewerNote?: string;
}

export interface FreshnessChangeLogEntry {
  id: string;
  approvedAt: string;
  approvedByContributorId: string;
  field: string;
  oldValue: FreshnessValue;
  newValue: FreshnessValue;
  sourceAuthority: string;
  sourceUrl: string;
  affectedUrls: string[];
  publicSummary: string;
  visible: boolean;
}
