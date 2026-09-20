/**
 * Public-copy guard.
 *
 * Internal production/governance state (draft, review workflow, verification
 * queues) is useful in the data contracts but must never reach students,
 * parents or crawlers. Presentation blocks filter user-visible label lists
 * through these helpers instead of each content file being hand-edited.
 */

const INTERNAL_PATTERNS: RegExp[] = [
  /human\s+review\s+pending/i,
  /pending\s+human\s+(academic\s+)?review/i,
  /review\s+pending/i,
  /pending\s+review/i,
  /\bunassigned\b/i,
  /profile\s+verification/i,
  /reviewer\s+pool/i,
  /reviewer\s+requirement/i,
  /methodology\s+stated/i,
  /content\s+status/i,
  /has not been loaded yet/i,
  /content not loaded/i,
  /^draft\b/i,
  /:\s*draft\b/i,
  /sources checked:/i,
  /written by:/i,
  /academically reviewed by:/i,
  /last reviewed:/i,
  /review_pending|reviewer_assigned/i,
];

/** True when a label is internal workflow state rather than student content. */
export function isInternalGovernanceLabel(value: string): boolean {
  return INTERNAL_PATTERNS.some((pattern) => pattern.test(value));
}

/** Keeps only student-facing labels from a chip / policy / note list. */
export function publicLabels(values?: string[]): string[] {
  return (values ?? []).filter((value) => !isInternalGovernanceLabel(value));
}
