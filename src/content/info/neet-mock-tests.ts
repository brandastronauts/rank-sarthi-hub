import type { InfoPageContent } from "@/content/types";
import {
  formatInr,
  neetAnalysisAreas,
  neetComparisonColumns,
  neetComparisonRows,
  neetImprovementCycle,
  neetLaunchBenefits,
  neetPracticeCapabilities,
  neetPricing,
  neetStarterAdditionalPapers,
  neetStarterTopUpTotal,
  neetStudentBenefits,
  neetTestSeriesCta,
  neetTestSeriesHighlight,
  neetTestSeriesPackages,
  neetTestSeriesTerms,
} from "@/content/offers/neet-test-series";

const listConcept = (id: string, title: string, items: readonly string[]) => ({
  id,
  title,
  body: [{ type: "list" as const, items: items.map((text) => [{ text }]) }],
});

/** Product-led NEET offer page sourced from the approved inaugural-offer document. */
export const neetMockTests: InfoPageContent = {
  url: "/neet/mock-tests",
  platform: "neet",
  slug: "mock-tests",
  exam: "NEET",
  contentStatus: "verified",
  eyebrow: "Rank Sarthi | Inaugural Offer",
  title: "NEET Test Series Offers 2026",
  intent: "Real CBT Practice | Detailed Performance Analysis | Personal Improvement Path",
  answer: [
    {
      type: "paragraph",
      children: [{ text: "Prepare for NEET UG in an exam-like online environment, understand where marks are being lost, and practise again through chapter-wise and topic-wise tests built around improvement needs." }],
    },
  ],
  chips: ["CBT Practice", "Performance Analysis", "Topic Practice", "Custom Tests"],
  blocks: [
    { kind: "offer-highlight", id: "offer", highlight: neetTestSeriesHighlight },
    {
      kind: "offer-packages",
      id: "packages",
      heading: "Choose the Package That Matches Your Goal",
      intro: "Three inaugural options for flexible practice, a structured test series or complete test-and-practice access.",
      packages: neetTestSeriesPackages,
      valueCallout: `Starter students can add an eligible test for ${formatInr(neetPricing.addOnTest)} each.`,
    },
    {
      kind: "table",
      id: "comparison",
      heading: "Compare the Three Plans",
      intro: "Compare test access, analysis and practice facilities before choosing a package.",
      columns: neetComparisonColumns,
      rows: neetComparisonRows,
    },
    {
      kind: "prose",
      id: "top-ups",
      heading: "Flexible ₹50 Test Top-Ups",
      concepts: [
        {
          id: "starter-top-up",
          title: `${formatInr(neetPricing.addOnTest)} each`,
          keyIdea: `Starter includes ${neetPricing.starterPapers} papers. Reaching ${neetPricing.testSeriesPapers} papers requires ${neetStarterAdditionalPapers} additional papers.`,
          body: [
            { type: "paragraph", children: [{ text: `Starter students can add an additional eligible test at ${formatInr(neetPricing.addOnTest)} each, with the same applicable performance analysis. Students may upgrade according to the approved product rules.` }] },
            { type: "note", tone: "info", children: [{ text: `${neetStarterAdditionalPapers} additional papers × ${formatInr(neetPricing.addOnTest)} = ${formatInr(neetStarterAdditionalPapers * neetPricing.addOnTest)}. With Starter at ${formatInr(neetPricing.starter)}, the total is ${formatInr(neetStarterTopUpTotal)}, compared with ${formatInr(neetPricing.testSeries)} for the NEET Test Series.` }] },
          ],
        },
      ],
    },
    {
      kind: "prose",
      id: "what-you-get",
      heading: "What Every Student Receives",
      concepts: [listConcept("student-benefits", "Practice with a clearer improvement path", neetStudentBenefits)],
    },
    {
      kind: "table",
      id: "analysis",
      heading: "Detailed Analysis After Every Paper",
      intro: "A score alone does not explain how to improve.",
      columns: ["Analysis area", "What the student receives"],
      rows: neetAnalysisAreas.map(([area, detail]) => [area, detail]),
    },
    {
      kind: "prose",
      id: "targeted-practice",
      heading: "Targeted Topic Practice and Custom Tests",
      concepts: [
        listConcept("practice-capabilities", "From identified gap to focused practice", neetPracticeCapabilities),
        {
          id: "practice-access",
          title: "Access by package",
          body: [
            { type: "list", items: [
              [{ text: "Starter: Launch-period benefit" }],
              [{ text: "Test Series: Launch-period benefit" }],
              [{ text: "Complete Bundle: Full package validity" }],
            ] },
          ],
        },
      ],
    },
    {
      kind: "table",
      id: "improvement-cycle",
      heading: "A Continuous Improvement Cycle",
      columns: ["Step", "Action"],
      rows: neetImprovementCycle.map((step, index) => [String(index + 1).padStart(2, "0"), step]),
    },
    {
      kind: "prose",
      id: "launch-benefits",
      heading: "Inaugural Launch Benefits",
      concepts: [
        listConcept("launch-benefit-list", "Promotional access", neetLaunchBenefits),
        {
          id: "coupon-note",
          title: "Coupon qualification",
          body: [{ type: "note", tone: "caution", children: [{ text: "Coupons may be offered based on promotional rules. They are not guaranteed after every test or attempt." }] }],
        },
      ],
    },
    {
      kind: "prose",
      id: "terms",
      heading: "Important Terms",
      concepts: [{ id: "terms-note", title: "Inaugural / Promotional", body: [{ type: "paragraph", children: [{ text: neetTestSeriesTerms }] }] }],
    },
    { kind: "offer-cta", id: "enrolment", cta: neetTestSeriesCta },
  ],
  relatedLinks: [
    { label: "Compare NEET plans", url: "/neet/pricing", relation: "related", description: "A decision-focused comparison of all three inaugural packages." },
    { label: "Verified NEET previous-year papers", url: "/neet/previous-year-papers", relation: "related", description: "Free, source-checked paper resources, separate from paid CBT practice." },
    { label: "NEET exam overview", url: "/neet/neet-exam", relation: "up", description: "Verified exam structure and official status." },
  ],
  sourceNote: "This page describes a Rank Sarthi product offer. NEET and NTA references describe the examination and test format only.",
  contributorPolicy: ["Commercial content is limited to the approved NEET inaugural-offer document and the later ₹50 add-on instruction."],
  seo: {
    title: "NEET Test Series Offers 2026 | Rank Sarthi",
    description: "Compare Rank Sarthi NEET Test Series inaugural offers: Starter ₹499, Test Series ₹1,599 and Complete Bundle ₹3,000, with eligible add-on tests at ₹50.",
    ogTitle: "NEET Test Series Offers 2026",
    ogDescription: "NEET CBT practice, detailed analysis and inaugural plans from ₹499, with eligible add-on tests at ₹50.",
    ogType: "website",
  },
};
