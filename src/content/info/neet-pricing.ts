import type { InfoPageContent } from "@/content/types";
import {
  formatInr,
  neetComparisonColumns,
  neetComparisonRows,
  neetPricing,
  neetStarterAdditionalPapers,
  neetStarterTopUpTotal,
  neetTestSeriesCta,
  neetTestSeriesPackages,
  neetTestSeriesTerms,
} from "@/content/offers/neet-test-series";

/** Decision-led pricing page. All monetary values come from the shared offer source. */
export const neetPricingPage: InfoPageContent = {
  url: "/neet/pricing",
  platform: "neet",
  slug: "pricing",
  exam: "NEET",
  contentStatus: "verified",
  eyebrow: "Inaugural / Promotional Pricing",
  title: "NEET Test Series Pricing",
  intent: "Compare tests, papers, analysis and practice access across all three plans.",
  answer: [{ type: "paragraph", children: [{ text: `Choose Starter at ${formatInr(neetPricing.starter)}, Test Series at ${formatInr(neetPricing.testSeries)} or Complete Bundle at ${formatInr(neetPricing.complete)}. Eligible Starter add-on tests cost ${formatInr(neetPricing.addOnTest)} each.` }] }],
  chips: ["Starter ₹499", "Test Series ₹1,599", "Complete ₹3,000", "Add-on ₹50"],
  blocks: [
    {
      kind: "offer-packages",
      id: "packages",
      heading: "Choose the Package That Matches Your Goal",
      intro: "All prices are inaugural promotional prices.",
      packages: neetTestSeriesPackages,
    },
    {
      kind: "table",
      id: "comparison",
      heading: "Plan Comparison",
      columns: neetComparisonColumns,
      rows: neetComparisonRows,
      note: "Launch-period practice and custom-test benefits may change or end. Complete Bundle includes those facilities for the full package validity.",
    },
    {
      kind: "prose",
      id: "top-ups",
      heading: "Starter Add-On Calculation",
      concepts: [{
        id: "starter-maths",
        title: `${formatInr(neetPricing.addOnTest)} per additional eligible test`,
        body: [
          { type: "paragraph", children: [{ text: `Starter includes ${neetPricing.starterPapers} papers. Reaching ${neetPricing.testSeriesPapers} papers requires ${neetStarterAdditionalPapers} additional papers.` }] },
          { type: "note", tone: "info", children: [{ text: `${formatInr(neetPricing.starter)} + (${neetStarterAdditionalPapers} × ${formatInr(neetPricing.addOnTest)}) = ${formatInr(neetStarterTopUpTotal)}, compared with ${formatInr(neetPricing.testSeries)} for NEET Test Series.` }] },
        ],
      }],
    },
    {
      kind: "prose",
      id: "terms",
      heading: "Important Terms",
      concepts: [{ id: "terms-note", title: "Before choosing a plan", body: [{ type: "paragraph", children: [{ text: neetTestSeriesTerms }] }] }],
    },
    { kind: "offer-cta", id: "enrolment", cta: { ...neetTestSeriesCta, inPage: { label: "View Full Offer", href: "/neet/mock-tests" } } },
  ],
  relatedLinks: [
    { label: "NEET Test Series Offers 2026", url: "/neet/mock-tests", relation: "related", description: "See the full product experience, analysis and practice cycle." },
    { label: "NEET preparation hub", url: "/neet", relation: "up", description: "Return to the verified NEET preparation hub." },
  ],
  sourceNote: "This pricing page reflects the approved Rank Sarthi NEET inaugural offer. NEET and NTA references describe the examination and test format only.",
  seo: {
    title: "NEET Test Series Pricing 2026 | Rank Sarthi",
    description: "Compare NEET Starter ₹499, Test Series ₹1,599 and Complete Bundle ₹3,000, including eligible ₹50 add-on tests and practice access.",
    ogTitle: "NEET Test Series Pricing 2026",
    ogDescription: "Compare three inaugural NEET plans and eligible ₹50 add-on tests.",
    ogType: "website",
  },
};