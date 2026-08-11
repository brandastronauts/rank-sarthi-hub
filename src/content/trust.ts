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

/**
 * DEMO CONTENT — clearly labelled in the UI as illustrative sample voices.
 * Replace with real, attributed feedback before publishing.
 */
export const isDemoContent = true;

export const voices: Voice[] = [
  {
    kind: "aspirant",
    quote:
      "I used to finish a mock and only see the score. The report showed me that most of my lost marks came from three chapters and one habit — rushing the first ten questions.",
    name: "Aarav Mehta",
    role: "JEE Aspirant, Class XII",
    organisation: "Demo voice",
  },
  {
    kind: "parent",
    quote:
      "I could finally see whether the hours were working, without asking her about every test.",
    name: "Sunita Rao",
    role: "Parent of a NEET aspirant",
    organisation: "Demo voice",
  },
  {
    kind: "educator",
    quote:
      "The error-type tagging is what a good teacher does by hand — done consistently across every attempt.",
    name: "Rakesh Verma",
    role: "Physics Faculty",
    organisation: "Demo voice",
  },
];

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

/** DEMO CONTENT — illustrative profiles, labelled as such in the UI. */
export const people: Person[] = [
  {
    name: "Dr. Ananya Iyer",
    role: "Academic Lead",
    qualification: "PhD, Physics",
    experience: "12 years teaching JEE Physics",
    organisation: "Demo profile",
  },
  {
    name: "Mohit Bansal",
    role: "Subject Faculty — Mathematics",
    qualification: "B.Tech",
    experience: "9 years in competitive Maths",
    organisation: "Demo profile",
  },
  {
    name: "Cdr. Vikram Singh (Retd.)",
    role: "NDA Specialist",
    qualification: "Ex-Armed Forces",
    experience: "8 years mentoring NDA aspirants",
    organisation: "Demo profile",
  },
  {
    name: "Priya Nair",
    role: "Product & Data",
    qualification: "M.Sc, Data Science",
    experience: "7 years in learning analytics",
    organisation: "Demo profile",
  },
];
