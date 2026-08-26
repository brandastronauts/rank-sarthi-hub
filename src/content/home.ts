/** T01 — homepage content. Data only; no markup, no fabricated proof. */

export const homeFaqs = [
  {
    q: "Is Rank Sarthi another online coaching platform?",
    a: "No. Rank Sarthi is a preparation-intelligence layer above testing. You attempt a diagnostic, and the product explains where marks were lost, why the pattern exists and what deserves attention next.",
  },
  {
    q: "Does Rank Sarthi replace my coaching institute?",
    a: "It is designed to sit alongside your coaching or self-study. Your classes build the syllabus; Rank Sarthi tells you which parts of it are actually costing you marks.",
  },
  {
    q: "How is this different from a normal mock-test score?",
    a: "A score is a single number. Rank Sarthi breaks that number down by subject, chapter, topic, question type, error type and attempt behaviour, and converts it into a preparation priority.",
  },
  {
    q: "How does Rank Sarthi decide what I should work on next?",
    a: "Every question is tagged to a concept, a difficulty band and a likely error type. Your attempt is analysed against those tags, and gaps are ranked by the marks they are costing rather than by how many mistakes they produced.",
  },
  {
    q: "Can I use Rank Sarthi with another coaching institute?",
    a: "Yes. Rank Sarthi is exam-pattern based and independent of any single syllabus schedule, so it works whether you study at an institute, online or on your own.",
  },
  {
    q: "Does Rank Sarthi support JEE, NEET and NDA?",
    a: "Yes — through JeeRankUp, NeetRankUp and NDARankUp. All three share one diagnostic engine, with exam-specific analysis for each pattern.",
  },
  {
    q: "What can parents see?",
    a: "Parents get a plain-language view of preparation: which areas are strong, which need attention, whether accuracy is trending up and what the current priority is. It is visibility, not surveillance.",
  },
  {
    q: "How does NDARankUp work?",
    a: "NDARankUp analyses Mathematics and GAT performance with attention to speed, accuracy and attempt strategy, then highlights the part of preparation that deserves attention next.",
  },
  {
    q: "Can coaching institutes use Rank Sarthi?",
    a: "Yes. Institutes can use the diagnostic layer across batches to see performance patterns, common weak areas and where academic intervention is needed. Get in touch for a walkthrough.",
  },
];

export const howItWorksSteps = [
  { n: "01", title: "Attempt", body: "Take a Rank Sarthi diagnostic or a supported assessment in exam conditions." },
  {
    n: "02",
    title: "Diagnose",
    body: "Understand the concepts, mistakes and performance patterns influencing your score.",
  },
  {
    n: "03",
    title: "Improve",
    body: "Focus preparation on what deserves attention next, then measure whether it actually changed.",
  },
];

export const institutePoints = [
  "Batch-level performance patterns",
  "Student segmentation by weak area",
  "Chapter weakness trends across a cohort",
  "Common error patterns before the next test",
];

export interface PricingPlan {
  name: string;
  monthly: number;
  note: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthly: 0,
    note: "Experience the diagnostic",
    features: ["2 full-length tests / month", "Core diagnostic report", "Free resource library"],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    monthly: 499,
    note: "For serious aspirants",
    features: [
      "Unlimited tests",
      "Full diagnostic analysis",
      "Chapter and error-pattern insights",
      "Preparation priorities",
      "Progress tracking",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Premium",
    monthly: 1499,
    note: "Everything, plus guidance",
    features: [
      "Everything in Pro",
      "Personalised preparation plan",
      "Mentor review sessions",
      "Parent visibility",
      "Priority support",
    ],
    cta: "Get Premium",
    popular: false,
  },
];
