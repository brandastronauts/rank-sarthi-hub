import type { OfferCtaData, OfferHighlight, OfferPackage } from "@/content/types";

/**
 * NEET Test Series 2026 — approved inaugural offer.
 *
 * Commercial authority: Rank_Sarthi_NEET_Inaugural_Offers_2.docx, with the
 * later business instruction that every additional eligible test costs ₹50.
 */
export const NEET_OFFER_URL = "/neet/mock-tests";
export const NEET_PRICING_URL = "/neet/pricing";

export const neetPricing = {
  starter: 499,
  testSeries: 1599,
  complete: 3000,
  addOnTest: 50,
  starterPapers: 8,
  testSeriesPapers: 35,
} as const;

export const neetStarterAdditionalPapers =
  neetPricing.testSeriesPapers - neetPricing.starterPapers;
export const neetStarterTopUpTotal =
  neetPricing.starter + neetStarterAdditionalPapers * neetPricing.addOnTest;

export function formatInr(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

export const neetTestSeriesHighlight: OfferHighlight = {
  badge: "Inaugural offer",
  title: "Complete NEET Bundle",
  support: "Test, analyse and practise through one complete preparation package.",
  includes: [
    "10 Part Tests",
    "10 Full Tests",
    "Last 15 years of NEET papers in CBT mode",
    "Chapter-wise and topic-wise practice",
    "Custom test generator",
  ],
  price: formatInr(neetPricing.complete),
  priceLabel: "Inaugural Price • All Inclusive",
  primary: { label: "View Packages", href: "#packages" },
  secondary: { label: "Compare Plans", href: NEET_PRICING_URL },
};

export const neetTestSeriesPackages: OfferPackage[] = [
  {
    id: "neet-starter",
    name: "NEET Starter",
    price: formatInr(neetPricing.starter),
    includes: [
      "5 full tests",
      "Last 3 years of NEET papers",
      "8 papers as stated in the commercial offer",
      "Detailed analysis",
      `Additional eligible tests at ${formatInr(neetPricing.addOnTest)} each`,
      "Launch-period topic-wise practice",
      "Launch-period custom test generator",
    ],
    bestFor: "Students who want to pay only for the tests they need.",
  },
  {
    id: "neet-test-series",
    name: "NEET Test Series",
    badge: "Structured series",
    featured: true,
    price: formatInr(neetPricing.testSeries),
    includes: [
      "10 Part Tests",
      "10 Full Tests",
      "Last 15 years of NEET papers",
      "35 papers as stated in the commercial offer",
      "Detailed analysis and topic suggestions",
      "Launch-period topic-wise practice",
      "Launch-period custom test generator",
    ],
    bestFor: "Students who want the complete structured test series.",
  },
  {
    id: "complete-neet-bundle",
    name: "Complete NEET Bundle",
    badge: "All inclusive",
    price: formatInr(neetPricing.complete),
    includes: [
      "Everything in NEET Test Series",
      "Online chapter-wise practice",
      "Online topic-wise practice",
      "Custom test generator",
      "Practice facilities for the full package validity",
    ],
    bestFor: "Complete preparation: test, analyse and practise.",
  },
];

export const neetComparisonColumns = [
  "Feature",
  `Starter ${formatInr(neetPricing.starter)}`,
  `Test Series ${formatInr(neetPricing.testSeries)}`,
  `Complete ${formatInr(neetPricing.complete)}`,
];

export const neetComparisonRows: string[][] = [
  ["Full-length NEET tests", "5", "10", "10"],
  ["Part tests", `${formatInr(neetPricing.addOnTest)} each`, "10", "10"],
  ["Previous NEET papers", "Last 3 years", "Last 15 years", "Last 15 years"],
  ["Additional tests", `${formatInr(neetPricing.addOnTest)} each`, "Included according to package", "Included according to package"],
  ["Analysis and topic suggestions", "Included", "Included", "Included"],
  ["Topic-wise online practice", "Launch period", "Launch period", "Full validity"],
  ["Custom test generator", "Launch period", "Launch period", "Full validity"],
];

export const neetStudentBenefits = [
  "Exam-style NEET UG CBT practice",
  "Paper-wise performance analysis",
  "Subject-wise review across Physics, Chemistry, Botany and Zoology",
  "Chapter-wise and topic-wise strengths and improvement areas",
  "Suggestions for topics needing additional practice",
  "Accuracy guidance",
  "Speed and time-allocation guidance",
  "Online chapter and topic practice where included",
] as const;

export const neetAnalysisAreas = [
  ["Performance snapshot", "Overall and subject-wise performance across Physics, Chemistry, Botany and Zoology."],
  ["Accuracy review", "Correct, incorrect and unattempted questions."],
  ["Time-management review", "Slow or rushed areas and time-use patterns."],
  ["Strong areas and areas of improvement", "Strong, moderate and weak chapters and topics."],
  ["Attempt strategy", "Question selection, sequencing, accuracy and intelligent skipping."],
  ["Topics to practise more", "Specific areas linked to further practice."],
] as const;

export const neetPracticeCapabilities = [
  "Ready-made chapter-wise papers for structured revision",
  "Topic-wise tests for areas flagged in the analysis",
  "Focused concept practice",
  "Customised tests using subject, chapter, topic and question-count selection",
  "Subsequent performance reports to measure improvement",
] as const;

export const neetImprovementCycle = [
  "Attempt a paper",
  "Study the analysis",
  "Practise weak areas",
  "Retest",
  "Track improvement",
] as const;

export const neetLaunchBenefits = [
  "Limited-period chapter-wise and topic-wise practice",
  "Custom test generator access according to package",
  "Performance or reward coupons may be offered under promotional rules",
] as const;

export const neetTestSeriesTerms =
  "All prices shown are inaugural promotional prices. Launch-period benefits may change or end. Paper availability, package validity and attempt rules follow the terms displayed at enrolment. Coupons are promotional and are not guaranteed. NEET and NTA references describe the examination and test format only.";

export const neetTestSeriesCta: OfferCtaData = {
  heading: "Explore the NEET Test Series",
  body: "Compare the approved inaugural packages and choose the level of practice that matches your preparation goal.",
  inPage: { label: "Compare Plans", href: NEET_PRICING_URL },
  pendingNote: "Direct enrolment and payment are handled by the NEET product when available.",
};

export const neetCampaign = {
  platform: "neet",
  announcement: {
    ariaLabel: "NEET Test Series announcement",
    message: `NEET 2026 Inaugural Offer — Plans from ${formatInr(neetPricing.starter)} | Extra Tests ${formatInr(neetPricing.addOnTest)}`,
    ctaLabel: "View Offers",
    href: NEET_OFFER_URL,
  },
  popup: {
    ariaLabel: "NEET Test Series 2026 offer",
    sessionKey: "rs-neet-test-series-popup",
    delayMs: 5000,
    eyebrow: "Inaugural offer",
    title: "NEET Test Series Offers 2026",
    subtitle: "Real CBT practice with detailed performance analysis",
    points: ["Plans from ₹499", "Extra eligible tests at ₹50", "Part Tests, Full Tests and CBT papers"],
    priceLabel: "Plans from",
    price: formatInr(neetPricing.starter),
    ctaLabel: "View NEET Offers",
    href: NEET_OFFER_URL,
  },
} as const;
