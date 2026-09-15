import type {
  OfferCtaData,
  OfferHighlight,
  OfferPackage,
  PartTestRecord,
  PartTestSyllabusData,
} from "@/content/types";
import { jeeAdvancedPartTests } from "@/content/offers/jee-advanced-part-tests";

/**
 * JEE Test Series 2026 — inaugural offer.
 *
 * Commercial authority: the approved inaugural-offer document only. Nothing
 * here may be inferred. Access duration, attempt rules, test dates, question
 * counts, marks, durations and the payment/enrolment destination are NOT in
 * the approved document, so they are absent by design rather than estimated.
 */

export const jeeTestSeriesHighlight: OfferHighlight = {
  badge: "Inaugural offer",
  title: "Complete JEE Bundle",
  includes: [
    "10 JEE Main Part Tests",
    "10 JEE Advanced Part Tests",
    "10 JEE Main Full Tests",
    "5 JEE Advanced Full Tests",
  ],
  bonus: "JEE Main 2025 and 2026 papers in CBT-style online practice.",
  price: "₹2,500",
  priceLabel: "Inaugural Price • All Inclusive",
  primary: { label: "View Packages", href: "#packages" },
  secondary: { label: "View Part-Test Syllabus", href: "#part-test-syllabus" },
};

export const jeeTestSeriesPackages: OfferPackage[] = [
  {
    id: "complete-jee-bundle",
    name: "Complete JEE Bundle",
    badge: "Recommended",
    featured: true,
    price: "₹2,500",
    includes: [
      "10 JEE Main Part Tests",
      "10 JEE Main Full Tests",
      "10 JEE Advanced Part Tests",
      "5 JEE Advanced Full Tests",
      "JEE Main 2025 + 2026 CBT paper access",
    ],
    bestFor: "Balanced Main + Advanced preparation",
  },
  {
    id: "jee-main-complete",
    name: "JEE Main Complete",
    price: "₹2,000",
    includes: [
      "10 JEE Main Part Tests",
      "10 JEE Main Full Tests",
      "JEE Main 2025 + 2026 CBT paper access",
    ],
    bestFor: "JEE Main-focused preparation",
  },
  {
    id: "cbt-previous-year-practice",
    name: "CBT Previous-Year Practice",
    price: "From ₹500",
    options: [
      { label: "Single Session", detail: "10 papers", price: "₹500" },
      { label: "Full Year", detail: "20 papers", price: "₹750" },
      { label: "Five-Year CBT Archive", detail: "2022–2026", price: "₹2,500" },
    ],
  },
  {
    id: "bumper-offer",
    name: "Bumper Offer",
    badge: "Bumper offer",
    price: "₹4,000",
    includes: [
      "All JEE Main papers from 2022–2026",
      "10 Main Part Tests",
      "10 Main Full Tests",
      "10 Advanced Part Tests",
      "5 Advanced Full Tests",
    ],
    bestFor: "Most comprehensive practice package",
  },
];

export const jeeTestSeriesValueCallout =
  "Single Session CBT works out to ₹50 per paper, including detailed analysis.";

export const jeeTestSeriesTerms =
  "All prices shown are inaugural offer prices. Availability, access duration and attempt rules will be governed by the terms displayed on Rank Sarthi at the time of enrolment. JEE and NTA references describe the examination and test format only.";

const PART_TEST_SUBJECTS = ["Physics", "Chemistry", "Mathematics"] as const;

/**
 * Ten part-test records with three EMPTY subject allocations. Used for JEE Main,
 * whose test-wise syllabus has not been supplied yet. The academic team fills
 * `groups` later; the page architecture does not change when they do.
 */
function emptyPartTests(trackId: string): PartTestRecord[] {
  return Array.from({ length: 10 }, (_, i) => ({
    id: `${trackId}-part-test-${i + 1}`,
    name: `Part Test ${i + 1}`,
    subjects: PART_TEST_SUBJECTS.map((subject) => ({ subject, groups: [] })),
  }));
}

export const jeeTestSeriesPartTestSyllabus: PartTestSyllabusData = {
  statusMessage:
    "Detailed JEE Main Part-Test syllabus is awaiting final academic confirmation.",
  tracks: [
    {
      id: "jee-main",
      label: "JEE Main Part Tests",
      tests: emptyPartTests("jee-main"),
      statusMessage:
        "Detailed JEE Main Part-Test syllabus is awaiting final academic confirmation.",
    },
    {
      id: "jee-advanced",
      label: "JEE Advanced Part Tests",
      tests: jeeAdvancedPartTests,
      sourceLabel: "Academic-team supplied syllabus",
      reviewNote:
        "Human review pending. This is the Rank Sarthi Part-Test allocation, not the official JEE Advanced syllabus document, even where topics derive from official exam scope.",
    },
  ],
};

/**
 * Enrolment contract. `enrolmentUrl` stays undefined until a real
 * payment/enrolment destination is supplied; the block then renders the live
 * action with no page redesign.
 */
export const jeeTestSeriesCta: OfferCtaData = {
  heading: "Interested in the JEE Test Series?",
  body: "Compare the inaugural packages and check the part-test structure while enrolment is being finalised.",
  inPage: { label: "Proceed with Pricing", href: "#packages" },
  pendingNote: "Enrolment details will be available here once confirmed.",
};

/**
 * JEE Advanced test-pattern allocation, as supplied by the academic team.
 *
 * Academic team confirmed (15 Sep 2026): Pattern 3 is a 20-question paper, not 18.
 * Patterns 1 and 2 remain unchanged.
 */
export const jeeAdvancedTestPatterns = [
  {
    id: "pattern-1",
    label: "Pattern 1",
    papers: "Papers 1, 4, 7",
    components: [
      "Single Option Correct: 5",
      "Multiple Option Correct: 3",
      "Comprehension Based: 2 passages (each with 2 questions)",
      "Integer/Numerical Type: 3",
      "Multiple Statement Questions: 1 (single option correct)",
      "Match the Column: 2",
    ],
    total: "18 questions",
    confirmed: true,
  },
  {
    id: "pattern-2",
    label: "Pattern 2",
    papers: "Papers 2, 5, 8, 10",
    components: [
      "Multiple Option Correct: 7",
      "Comprehension Based: 2 passages (each with 2 questions)",
      "Integer/Numerical Type: 3",
      "Multiple Statement Questions: 2",
      "Match the Column: 2",
    ],
    total: "18 questions",
    confirmed: true,
  },
  {
    id: "pattern-3",
    label: "Pattern 3",
    papers: "Papers 3, 6, 9",
    components: [
      "Single Option Correct: 4",
      "Multiple Option Correct: 4",
      "Comprehension Based: 2 passages (each with 2 questions)",
      "Integer/Numerical Type: 4",
      "Multiple Statement Questions: 2",
      "Match the Column: 2",
    ],
    total: "20 questions",
    confirmed: true,
  },
] as const;

/** JEE Main pattern exactly as supplied. No marks, negative marking or duration. */
export const jeeMainTestPattern = {
  perSubject: "25 Questions",
  components: ["20 MCQs", "5 Numerical Type"],
};
