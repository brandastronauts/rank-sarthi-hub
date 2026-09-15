import type {
  OfferCtaData,
  OfferHighlight,
  OfferPackage,
  PartTestSyllabusData,
} from "@/content/types";

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
 * Ten part-test records per track, each with its three subject slots and an
 * EMPTY topic list. The academic team populates `topics` later; the page
 * architecture does not change when they do.
 */
function partTests(trackId: string) {
  return Array.from({ length: 10 }, (_, i) => ({
    id: `${trackId}-part-test-${i + 1}`,
    name: `Part Test ${i + 1}`,
    subjects: PART_TEST_SUBJECTS.map((subject) => ({ subject, topics: [] as string[] })),
  }));
}

export const jeeTestSeriesPartTestSyllabus: PartTestSyllabusData = {
  statusMessage:
    "Detailed Part-Test syllabus will be published here once finalised by the academic team.",
  tracks: [
    { id: "jee-main", label: "JEE Main Part Tests", tests: partTests("jee-main") },
    { id: "jee-advanced", label: "JEE Advanced Part Tests", tests: partTests("jee-advanced") },
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
  inPage: { label: "View Packages", href: "#packages" },
  pendingNote: "Enrolment details will be available here once confirmed.",
};
