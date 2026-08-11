/**
 * REAL-CONTENT REGISTRY
 * ---------------------
 * Nothing on the Rank Sarthi homepage may be fabricated.
 * Every array below is intentionally EMPTY until verified, real content exists.
 * Components read from here and render a clearly marked development placeholder
 * (e.g. [REAL INSTITUTION LOGO REQUIRED]) whenever data is missing.
 *
 * Fill these in only with content you can evidence.
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
    | "Pilot & early access institutions"
    | "Education partners"
    | "Used by students from"
    | "Reviewed with educators from";

export const institutions: Institution[] = [];

/** Number of placeholder slots shown while real logos are pending. */
export const institutionSlotCount = 6;

export type ExpertReview = {
  quote: string;
  name: string;
  role: string;
  organisation: string;
  /** Optional real photograph. Never attach stock photography to a real person. */
  photo?: string;
};

/** Featured academic/expert commentary shown after the product demonstration. */
export const educatorReview: ExpertReview | null = null;

export type Voice = {
  kind: "aspirant" | "parent" | "educator";
  quote: string;
  name: string;
  /** e.g. "NDA Aspirant", "Parent of Class XII Aspirant", "Physics Faculty" */
  role: string;
  organisation?: string;
  photo?: string;
};

/** Genuine feedback only. Featured voice is the first entry. */
export const voices: Voice[] = [];

export type ProductNumber = {
  label: string;
  /** Verified value, e.g. "12,480". Leave null until counted from the system. */
  value: string | null;
  suffix?: string;
};

/**
 * PRODUCT SCALE ONLY. Never student counts, selections, ranks or score gains.
 */
export const productNumbers: ProductNumber[] = [
  { label: "Questions in system", value: null },
  { label: "Chapters covered", value: null },
  { label: "Diagnostic parameters", value: null },
  { label: "Exam tracks", value: "3" },
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
  { title: "Transparent pricing", body: null, icon: "receipt" },
  { title: "Payment & data protection", body: null, icon: "lock" },
];

export type Person = {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  organisation?: string;
  photo?: string;
};

/** Verified founders / academic advisors only. Max 4. */
export const people: Person[] = [];
