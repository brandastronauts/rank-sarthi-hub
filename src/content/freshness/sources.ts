import type { FreshnessSource } from "./types";

/**
 * Approved official sources for FreshnessWatch. This register is the ONLY
 * allow-list the watcher may fetch: an arbitrary URL is never monitored.
 * NEET and NDA sources are added here later with their own platform tag.
 */
export const freshnessSources: Record<string, FreshnessSource> = {
  "NTA-HOME": {
    id: "NTA-HOME",
    authority: "National Testing Agency",
    sourceUrl: "https://jeemain.nta.nic.in/",
    sourceType: "HTML_STATUS_PAGE",
    platform: "JEE",
    monitoredSignals: ["latest news", "candidate activity", "links to notices, keys and results"],
    expectedUpdateBehaviour: "Frequent changes during an active cycle",
    parserStrategy: "DOM headings and official link labels; allow-list NTA and official CDN hosts",
    fallbackStrategy: "Mark verification required; preserve last value; route user to NTA home",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  "NTA-DOCS": {
    id: "NTA-DOCS",
    authority: "National Testing Agency",
    sourceUrl: "https://jeemain.nta.nic.in/documents/",
    sourceType: "HTML_INDEX",
    platform: "JEE",
    monitoredSignals: ["information bulletin", "public notices", "final answer keys", "results"],
    expectedUpdateBehaviour: "New rows and reordered rows",
    parserStrategy: "Parse row title, year and resolved URL; row order alone is never chronology",
    fallbackStrategy: "Use NTA home and public-notices index; keep last verified record",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  "NTA-PUBLIC-NOTICES": {
    id: "NTA-PUBLIC-NOTICES",
    authority: "National Testing Agency",
    sourceUrl: "https://jeemain.nta.nic.in/public-notices/",
    sourceType: "HTML_INDEX",
    platform: "JEE",
    monitoredSignals: ["notice sequence", "schedule notice for the next cycle"],
    expectedUpdateBehaviour: "New notices appended during a cycle",
    parserStrategy: "Parse notice title, published date and resolved official URL",
    fallbackStrategy: "Preserve last verified value; route to NTA home",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  "NTA-FINAL-KEY-S2-P1-2026": {
    id: "NTA-FINAL-KEY-S2-P1-2026",
    authority: "National Testing Agency",
    sourceUrl:
      "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf",
    sourceType: "PDF_NOTICE",
    platform: "JEE",
    monitoredSignals: ["document availability", "revision or withdrawal", "official URL change"],
    expectedUpdateBehaviour: "Stable archival document; correction possible",
    parserStrategy: "Fingerprint the document; availability check only, never AI summarisation",
    fallbackStrategy: "Preserve last verified value; route to the official document index",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  "ADV-HOME-2026": {
    id: "ADV-HOME-2026",
    authority: "JEE Advanced official organising authority",
    sourceUrl: "https://jeeadv.ac.in/",
    sourceType: "HTML_STATUS_PAGE",
    platform: "JEE",
    monitoredSignals: ["organising authority", "dates", "papers", "answer keys", "results"],
    expectedUpdateBehaviour: "Announcements added through the cycle",
    parserStrategy: "Parse announcement headings, timestamps and official links",
    fallbackStrategy: "Preserve last value; route to homepage; review any conflict",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  "ADV-DATES-2026": {
    id: "ADV-DATES-2026",
    authority: "JEE Advanced official organising authority",
    sourceUrl: "https://jeeadv.ac.in/imp_dates.html",
    sourceType: "HTML_INDEX",
    platform: "JEE",
    monitoredSignals: ["registration", "admit card", "exam", "answer keys", "result"],
    expectedUpdateBehaviour: "Stable, but may be superseded by a notice",
    parserStrategy: "Parse activity, date, time and 'Last Updated'; compare with announcements",
    fallbackStrategy: "Prefer a reviewed superseding notice; never resolve a conflict automatically",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  "ADV-CUTOFF-2026": {
    id: "ADV-CUTOFF-2026",
    authority: "JEE Advanced 2026 organising authority",
    sourceUrl: "https://jeeadv.ac.in/documents/cutoffs_2026.pdf",
    sourceType: "PDF_DATA_TABLE",
    platform: "JEE",
    monitoredSignals: ["qualifying marks table", "replacement PDF"],
    expectedUpdateBehaviour: "Archival for the cycle; correction possible",
    parserStrategy: "Labelled table extraction after table QA; unparsable change becomes REVIEW_REQUIRED",
    fallbackStrategy: "Preserve last verified table; keep the official source link",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  JOSAA: {
    id: "JOSAA",
    authority: "Joint Seat Allocation Authority",
    sourceUrl: "https://josaa.nic.in/",
    sourceType: "INTERACTIVE_PORTAL",
    platform: "JEE",
    monitoredSignals: ["counselling schedule", "opening and closing rank archives"],
    expectedUpdateBehaviour: "Portal opens per counselling cycle",
    parserStrategy: "Portal availability and labelled archive entries only; no derived ranks",
    fallbackStrategy: "Route to the portal; never publish an unreviewed rank value",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  CSAB: {
    id: "CSAB",
    authority: "Central Seat Allocation Board",
    sourceUrl: "https://csab.nic.in/",
    sourceType: "INTERACTIVE_PORTAL",
    platform: "JEE",
    monitoredSignals: ["special round schedule", "closing rank archives"],
    expectedUpdateBehaviour: "Opens after the JoSAA rounds close",
    parserStrategy: "Portal availability and labelled archive entries only",
    fallbackStrategy: "Route to the portal; preserve last verified statement",
    trustTier: "PRIMARY_OWNER",
    enabled: true,
  },
  "INTERNAL-DATASET-REGISTER": {
    id: "INTERNAL-DATASET-REGISTER",
    authority: "Rank Sarthi editorial control",
    sourceUrl: "https://ranksarthi.com/jee/analysis",
    sourceType: "HTML_STATUS_PAGE",
    platform: "JEE",
    monitoredSignals: ["approved analysed dataset created, corrected or withdrawn"],
    expectedUpdateBehaviour: "Changes only through editorial sign-off",
    parserStrategy: "Internal register lookup; never an external fetch",
    fallbackStrategy: "Analysis remains unavailable until a reviewed dataset exists",
    trustTier: "PRIMARY_OWNER",
    enabled: false,
  },
};

export function getFreshnessSource(id: string): FreshnessSource | undefined {
  return freshnessSources[id];
}

/** The watcher may only fetch a URL that belongs to an enabled approved source. */
export function isApprovedSourceUrl(url: string): boolean {
  return Object.values(freshnessSources).some((s) => s.enabled && s.sourceUrl === url);
}
