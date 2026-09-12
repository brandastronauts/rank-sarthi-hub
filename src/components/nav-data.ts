/**
 * Visible information architecture.
 *
 * This file answers ONE question: should the user know this section exists?
 * It deliberately does NOT decide whether an item is clickable — that is
 * destination availability (see src/content/destinations.ts) — and it does
 * not decide indexation, which lives on the URL record.
 *
 * A planned route can therefore be visible here, non-clickable in the UI,
 * and absent from the sitemap at the same time.
 */

export type NavLink = {
  label: string;
  /** Registry path, in-page anchor, or absolute external URL. */
  href: string;
  /** Force an item out of the UI without deleting the IA entry. */
  suppressed?: boolean;
};

export type MenuColumn = { title: string; links: NavLink[] };

export type NavItem = {
  label: string;
  href: string;
  tint?: "jee" | "neet" | "nda";
  columns?: MenuColumn[];
  simple?: NavLink[];
  blurb?: string;
};

export const navItems: NavItem[] = [
  {
    label: "JEE",
    href: "/jee",
    tint: "jee",
    blurb: "JeeRankUp — diagnosis-led preparation for JEE Main and Advanced.",
    columns: [
      {
        title: "Overview",
        links: [
          { label: "JEE Main", href: "/jee/jee-main" },
          { label: "JEE Advanced", href: "/jee/jee-advanced" },
          { label: "How it works", href: "/how-it-works" },
          { label: "Pricing", href: "/#pricing" },
        ],
      },
      {
        title: "Study",
        links: [
          { label: "JEE Syllabus", href: "/jee/syllabus" },
          { label: "Physics", href: "/jee/physics" },
          { label: "Chemistry", href: "/jee/chemistry" },
          { label: "Mathematics", href: "/jee/mathematics" },
        ],
      },
      {
        title: "Practice",
        links: [
          { label: "Mock tests", href: "/jee/mock-tests" },
          { label: "Previous year papers", href: "/jee/previous-year-papers" },
          { label: "Answer key", href: "/jee/answer-key" },
          { label: "Paper analysis", href: "/jee/analysis" },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "Rank predictor", href: "/jee/rank-predictor" },
          { label: "College predictor", href: "/jee/college-predictor" },
          { label: "Cutoff", href: "/jee/cutoff" },
          { label: "Exam dates", href: "/jee/exam-dates" },
        ],
      },
    ],
  },
  {
    label: "NEET",
    href: "/neet",
    tint: "neet",
    blurb: "NeetRankUp — NCERT-anchored diagnosis for NEET aspirants.",
    columns: [
      {
        title: "Overview",
        links: [
          { label: "NEET exam", href: "/neet/neet-exam" },
          { label: "NCERT mapping", href: "/neet/ncert-mapping" },
          { label: "How it works", href: "/how-it-works" },
          { label: "Pricing", href: "/#pricing" },
        ],
      },
      {
        title: "Study",
        links: [
          { label: "NEET Syllabus", href: "/neet/syllabus" },
          { label: "Biology", href: "/neet/biology" },
          { label: "Physics", href: "/neet/physics" },
          { label: "Chemistry", href: "/neet/chemistry" },
          { label: "NCERT important pages", href: "/neet/ncert-important-pages" },
        ],
      },
      {
        title: "Practice",
        links: [
          { label: "Mock tests", href: "/neet/mock-tests" },
          { label: "Previous year papers", href: "/neet/previous-year-papers" },
          { label: "Answer key", href: "/neet/answer-key" },
          { label: "Paper analysis", href: "/neet/analysis" },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "Rank predictor", href: "/neet/rank-predictor" },
          { label: "Score calculator", href: "/neet/score-calculator" },
          { label: "Cutoff", href: "/neet/cutoff" },
          { label: "Study plan", href: "/neet/study-plan" },
          { label: "Exam dates", href: "/neet/exam-dates" },
        ],
      },
    ],
  },
  {
    label: "NDA",
    href: "/nda",
    tint: "nda",
    blurb: "NDARankUp — written paper and SSB readiness read as one pathway.",
    columns: [
      {
        title: "Overview",
        links: [
          { label: "NDA exam", href: "/nda" },
          { label: "Selection process", href: "/nda/selection-process" },
          { label: "Eligibility", href: "/nda/eligibility" },
          { label: "Pricing", href: "/#pricing" },
        ],
      },
      {
        title: "Study",
        links: [
          { label: "NDA Syllabus", href: "/nda/syllabus" },
          { label: "Mathematics", href: "/nda/syllabus/mathematics" },
          { label: "GAT", href: "/nda/syllabus/gat" },
          { label: "General knowledge", href: "/nda/syllabus/general-knowledge" },
          { label: "Current affairs", href: "/nda/gat/current-affairs" },
        ],
      },
      {
        title: "Practice",
        links: [
          { label: "Mock tests", href: "/nda/mock-tests" },
          { label: "Previous year papers", href: "/nda/previous-year-papers" },
          { label: "Answer key", href: "/nda/answer-key/2026-2" },
          { label: "Paper analysis", href: "/nda/analysis" },
        ],
      },
      {
        title: "SSB & more",
        links: [
          { label: "SSB interview guide", href: "/nda/ssb-interview" },
          { label: "Physical standards", href: "/nda/physical-standards" },
          { label: "Girls in NDA", href: "/nda/girls-in-nda" },
          { label: "CPSS / PABT (aviation selection)", href: "/nda/pabt-test" },
          { label: "Army wing", href: "/nda/wings/army" },
        ],
      },
    ],
  },
  {
    label: "For institutes",
    href: "/institutes",
    simple: [
      { label: "Overview", href: "/#institutes" },
      { label: "B2B pricing", href: "/#pricing" },
      { label: "Case studies", href: "/institutes/case-studies" },
      { label: "Request a demo", href: "/institutes/request-demo" },
    ],
  },
  {
    label: "Free resources",
    href: "/resources",
    columns: [
      {
        title: "JEE resources",
        links: [
          { label: "JEE Syllabus", href: "/jee/syllabus" },
          { label: "Formula sheets", href: "/resources/jee-formula-sheet" },
          { label: "Previous year papers", href: "/jee/previous-year-papers" },
        ],
      },
      {
        title: "NEET resources",
        links: [
          { label: "NEET Syllabus", href: "/neet/syllabus" },
          { label: "NCERT resources", href: "/resources/neet-ncert-guide" },
          { label: "Previous year papers", href: "/neet/previous-year-papers" },
        ],
      },
      {
        title: "NDA resources",
        links: [
          { label: "NDA Syllabus", href: "/nda/syllabus" },
          { label: "NDA syllabus PDF", href: "/resources/nda-syllabus-pdf" },
          { label: "Previous year papers", href: "/nda/previous-year-papers" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
];

/**
 * Footer IA. Curated and concise: the footer is a navigation aid, not a
 * keyword matrix. Deep links live in page content and related-content blocks.
 */
export const footerGroups: MenuColumn[] = [
  {
    title: "Platforms",
    links: [
      { label: "JeeRankUp", href: "/jee" },
      { label: "NeetRankUp", href: "/neet" },
      { label: "NDARankUp", href: "/nda" },
    ],
  },
  {
    title: "Study & practice",
    links: [
      { label: "JEE Syllabus", href: "/jee/syllabus" },
      { label: "NEET Syllabus", href: "/neet/syllabus" },
      { label: "NDA Syllabus", href: "/nda/syllabus" },
      { label: "Previous year papers", href: "/jee/previous-year-papers" },
      { label: "Mock tests", href: "/jee/mock-tests" },
      { label: "Free resources", href: "/resources" },
    ],
  },
  {
    title: "Rank Sarthi",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Preparation Intelligence", href: "/#idea" },
      { label: "For parents", href: "/#parents" },
      { label: "For institutes", href: "/for-institutes" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Refund policy", href: "/refund-policy" },
    ],
  },
];
