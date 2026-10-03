import type { DiagnosticExam } from "./acquisition";

export type AcquisitionEvent =
  | "homepage_view"
  | "diagnostic_cta_click"
  | "exam_chooser_view"
  | "exam_selected"
  | "rankup_handoff";

export type AcquisitionProperties = {
  exam?: DiagnosticExam;
  entry_path?: string;
  cta?: string;
  destination_origin?: string;
};

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  analytics?: { track?: (event: string, properties?: Record<string, unknown>) => void };
};

/** Instrumentation only: safely emits when the host has configured a receiver. */
export function emitAcquisitionEvent(event: AcquisitionEvent, properties: AcquisitionProperties = {}): boolean {
  if (typeof window === "undefined") return false;
  const host = window as AnalyticsWindow;
  const payload = { event, ...properties };
  let emitted = false;

  if (Array.isArray(host.dataLayer)) {
    host.dataLayer.push(payload);
    emitted = true;
  }
  if (typeof host.analytics?.track === "function") {
    host.analytics.track(event, properties);
    emitted = true;
  }
  return emitted;
}