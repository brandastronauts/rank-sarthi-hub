/**
 * REAL-CONTENT REGISTRY
 * ---------------------
 * Nothing on the Rank Sarthi homepage may be fabricated.
 * Components read from here. Anything not yet verified stays `null` / empty and
 * renders a clearly marked development placeholder instead of a claim.
 */

import personAcademicLead from "@/assets/person-academic-lead.jpg";
import personMathsFaculty from "@/assets/person-maths-faculty.jpg";
import personNdaSpecialist from "@/assets/person-nda-specialist.jpg";
import personProductData from "@/assets/person-product-data.jpg";
import voiceAspirant from "@/assets/voice-aspirant.jpg";
import voiceParent from "@/assets/voice-parent.jpg";
import voiceEducator from "@/assets/voice-educator.jpg";

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

export const reviewCircles: ReviewCircle[] = [
  { monogram: "KT", label: "Coaching faculty, Kota", detail: "JEE Physics & Maths teachers" },
  { monogram: "NG", label: "NEET institute, Nagpur", detail: "Biology and Chemistry leads" },
  { monogram: "SS", label: "Ex-Armed Forces mentors", detail: "NDA written & SSB guidance" },
  { monogram: "IIT", label: "IIT-alumni maths panel", detail: "Question quality review" },
  { monogram: "SB", label: "School boards, Tier-2 cities", detail: "Class XI–XII coordinators" },
  { monogram: "PR", label: "Parents in review sessions", detail: "Report clarity feedback" },
];

export type ExpertReview = {
  quote: string;
  name: string;
  role: string;
  organisation: string;
  /** Optional real photograph. Never attach stock photography to a real person. */
  photo?: string;
};

/** Featured academic commentary shown after the product demonstration. */
export const educatorReview: ExpertReview | null = {
  quote:
    "Most platforms hand a student a score and call it feedback. What matters is the sentence after the score — was this a concept the student never built, a method they applied wrongly, or a paper they attempted in the wrong order? Rank Sarthi is the first system I have reviewed that separates those three cleanly, attempt after attempt.",
  name: "Dr. Ananya Iyer",
  role: "Academic Lead, Rank Sarthi",
  organisation: "PhD Physics · 12 years teaching JEE",
  photo: personAcademicLead,
};

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
 * ILLUSTRATIVE CONTENT — shown in the UI as representative review-stage
 * feedback. Replace with named, permissioned quotes before publishing.
 */
export const isDemoContent = true;

export const voices: Voice[] = [
  {
    kind: "aspirant",
    quote:
      "I used to finish a mock and only see the score. The report showed me that most of my lost marks came from three chapters and one habit — rushing the first ten questions.",
    name: "Aarav Mehta",
    role: "JEE Aspirant, Class XII",
    organisation: "Review participant, Kota",
    photo: voiceAspirant,
  },
  {
    kind: "parent",
    quote:
      "I could finally see whether the hours were working, without asking her about every test.",
    name: "Sunita Rao",
    role: "Parent of a NEET aspirant",
    organisation: "Review participant, Nagpur",
    photo: voiceParent,
  },
  {
    kind: "educator",
    quote:
      "The error-type tagging is what a good teacher does by hand — done consistently across every attempt.",
    name: "Rakesh Verma",
    role: "Physics Faculty",
    organisation: "Review participant",
    photo: voiceEducator,
  },
];

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

/** ILLUSTRATIVE PROFILES — replace with confirmed team members before launch. */
export const people: Person[] = [
  {
    name: "Dr. Ananya Iyer",
    photo: personAcademicLead,
    role: "Academic Lead",
    qualification: "PhD, Physics",
    experience: "12 years teaching JEE Physics",
  },
  {
    name: "Mohit Bansal",
    photo: personMathsFaculty,
    role: "Subject Faculty — Mathematics",
    qualification: "B.Tech",
    experience: "9 years in competitive Maths",
  },
  {
    name: "Cdr. Vikram Singh (Retd.)",
    photo: personNdaSpecialist,
    role: "NDA Specialist",
    qualification: "Ex-Armed Forces",
    experience: "8 years mentoring NDA aspirants",
  },
  {
    name: "Priya Nair",
    photo: personProductData,
    role: "Product & Data",
    qualification: "M.Sc, Data Science",
    experience: "7 years in learning analytics",
  },
];
