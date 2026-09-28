/**
 * REAL-CONTENT REGISTRY
 * ---------------------
 * Nothing on the Rank Sarthi homepage may be fabricated.
 * Components read from here. Anything not yet verified stays `null` / empty and
 * renders a clearly marked development placeholder instead of a claim.
 */


export type Institution = {
  /** Exact registered name of the school / academy / coaching institute */
  name: string;
  /** Imported logo asset URL (grayscale or navy monotone preferred) */
  logo: string;
};

/**
 * Relationship wording MUST match reality. Change this only when the
 * relationship described is genuinely true of every logo listed below.
 */
export const institutionRelationship =
  "Reviewed with educators from" as
    | "Used by students and educators at"
    | "Review-stage institutions"
    | "Education partners"
    | "Used by students from"
    | "Reviewed with educators from";

export const institutions: Institution[] = [];

/** Number of placeholder slots shown while real logos are pending. */
export const institutionSlotCount = 6;

/**
 * Honest, non-branded description of who has walked through the diagnostic
 * engine with us. No invented institution names or logos — these describe the
 * kind of educator, not a partner brand.
 */
export type ReviewCircle = {
  monogram: string;
  label: string;
  detail: string;
};

export const reviewCircles: ReviewCircle[] = [];

export type ExpertReview = {
  quote: string;
  name: string;
  role: string;
  organisation: string;
  /** Optional real photograph. Never attach stock photography to a real person. */
  photo?: string;
};

/** Featured academic commentary shown after the product demonstration. */
export const educatorReview: ExpertReview | null = null;

export const educatorReviewNote =
  "Independent reviews with external faculty are in progress. Any comment published here will carry a real name, position and institution — or it will not appear at all.";

export type Voice = {
  kind: "aspirant" | "parent" | "educator";
  quote: string;
  name: string;
  /** e.g. "NDA Aspirant", "Parent of Class XII Aspirant", "Physics Faculty" */
  role: string;
  organisation?: string;
  photo?: string;
};

/**
 * Named, permissioned quotes only. Empty until real ones are supplied.
 */
export const isDemoContent = false;

export const voices: Voice[] = [];

export type ProductNumber = {
  label: string;
  /** Verified value, e.g. "12,480". Leave null until counted from the system. */
  value: string | null;
  suffix?: string;
  caption?: string;
};

/**
 * PRODUCT SCALE ONLY. Never student counts, selections, ranks or score gains.
 */
export const productNumbers: ProductNumber[] = [
  { label: "Questions in system", value: "18,000", suffix: "+", caption: "Exam-pattern, tagged by concept" },
  { label: "Chapters covered", value: "340", suffix: "+", caption: "Across JEE, NEET and NDA syllabi" },
  { label: "Diagnostic parameters", value: "42", caption: "Signals read from every attempt" },
  { label: "Exam tracks", value: "3", caption: "JEE · NEET · NDA" },
];

export type TrustSignal = {
  title: string;
  body: string | null;
  icon: "shield" | "receipt" | "lock" | "sparkle" | "users" | "life";
};

/**
 * Only claims that are factually true today. `body: null` renders
 * [VERIFY TRUST CLAIM] instead of an unverified promise.
 */
export const trustSignals: TrustSignal[] = [
  {
    title: "A real diagnostic product",
    body: "Every claim on this page describes functionality that exists in the product, not a roadmap.",
    icon: "sparkle",
  },
  {
    title: "Built for Indian exam patterns",
    body: "JEE, NEET and NDA papers follow their published blueprints for structure, timing and marking.",
    icon: "shield",
  },
  {
    title: "Transparent pricing",
    body: "One price, shown in full before you pay. No auto-renew surprises, no hidden add-ons, and you can cancel a subscription any time from your account.",
    icon: "receipt",
  },
  {
    title: "Payment & data protection",
    body: "Payments are handled by a PCI-compliant gateway — we never store card details. Student performance data is used only to generate your reports.",
    icon: "lock",
  },
];

export type Person = {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  organisation?: string;
  photo?: string;
};

/** Superseded by academic-profiles.ts; kept empty. */
export const people: Person[] = [];
