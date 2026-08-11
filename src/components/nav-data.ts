export type MenuLink = { label: string; href: string };
export type MenuColumn = { title: string; links: MenuLink[] };
export type NavItem = {
  label: string;
  href: string;
  tint?: "jee" | "neet" | "nda";
  columns?: MenuColumn[];
  simple?: MenuLink[];
  blurb?: string;
};

const p = (s: string) => `/coming-soon?topic=${encodeURIComponent(s)}`;

export const navItems: NavItem[] = [
  {
    label: "JEE",
    href: "#platforms",
    tint: "jee",
    blurb: "JeeRankUp — AI mock tests and rank diagnostics for JEE Main & Advanced.",
    columns: [
      {
        title: "Overview",
        links: [
          { label: "JEE Main", href: p("JEE Main") },
          { label: "JEE Advanced", href: p("JEE Advanced") },
          { label: "How It Works", href: "#how" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Study",
        links: [
          { label: "JEE Syllabus", href: p("JEE Syllabus") },
          { label: "Physics", href: p("JEE Physics") },
          { label: "Chemistry", href: p("JEE Chemistry") },
          { label: "Mathematics", href: p("JEE Mathematics") },
        ],
      },
      {
        title: "Practice",
        links: [
          { label: "Mock Tests", href: p("JEE Mock Tests") },
          { label: "Previous Year Papers", href: p("JEE Previous Year Papers") },
          { label: "Answer Key", href: p("JEE Answer Key") },
          { label: "Paper Analysis", href: p("JEE Paper Analysis") },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "Rank Predictor", href: p("JEE Rank Predictor") },
          { label: "College Predictor", href: p("JEE College Predictor") },
          { label: "Cutoff", href: p("JEE Cutoff") },
          { label: "Exam Dates", href: p("JEE Exam Dates") },
        ],
      },
    ],
  },
  {
    label: "NEET",
    href: "#platforms",
    tint: "neet",
    blurb: "NeetRankUp — NCERT-mapped practice with concept-level diagnosis.",
    columns: [
      {
        title: "Overview",
        links: [
          { label: "NEET Exam", href: p("NEET Exam") },
          { label: "NCERT Mapping", href: p("NEET NCERT Mapping") },
          { label: "How It Works", href: "#how" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Study",
        links: [
          { label: "NEET Syllabus", href: p("NEET Syllabus") },
          { label: "Biology", href: p("NEET Biology") },
          { label: "Physics", href: p("NEET Physics") },
          { label: "Chemistry", href: p("NEET Chemistry") },
          { label: "NCERT Important Pages", href: p("NCERT Important Pages") },
        ],
      },
      {
        title: "Practice",
        links: [
          { label: "Mock Tests", href: p("NEET Mock Tests") },
          { label: "Previous Year Papers", href: p("NEET Previous Year Papers") },
          { label: "Answer Key", href: p("NEET Answer Key") },
          { label: "Paper Analysis", href: p("NEET Paper Analysis") },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "Rank Predictor", href: p("NEET Rank Predictor") },
          { label: "Score Calculator", href: p("NEET Score Calculator") },
          { label: "Cutoff", href: p("NEET Cutoff") },
          { label: "Study Plan", href: p("NEET Study Plan") },
          { label: "Exam Dates", href: p("NEET Exam Dates") },
        ],
      },
    ],
  },
  {
    label: "NDA",
    href: "#platforms",
    tint: "nda",
    blurb: "NDARankUp — India's first AI-powered NDA written + SSB prep platform.",
    columns: [
      {
        title: "Overview",
        links: [
          { label: "NDA Exam", href: p("NDA Exam") },
          { label: "Selection Process", href: p("NDA Selection Process") },
          { label: "Eligibility", href: p("NDA Eligibility") },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Study",
        links: [
          { label: "NDA Syllabus", href: p("NDA Syllabus") },
          { label: "Mathematics", href: p("NDA Mathematics") },
          { label: "GAT", href: p("NDA GAT") },
          { label: "General Knowledge", href: p("NDA General Knowledge") },
          { label: "Current Affairs", href: p("NDA Current Affairs") },
        ],
      },
      {
        title: "Practice",
        links: [
          { label: "Mock Tests", href: p("NDA Mock Tests") },
          { label: "Previous Year Papers", href: p("NDA Previous Year Papers") },
          { label: "Answer Key", href: p("NDA Answer Key") },
          { label: "Paper Analysis", href: p("NDA Paper Analysis") },
        ],
      },
      {
        title: "SSB & More",
        links: [
          { label: "SSB Interview Guide", href: p("SSB Interview Guide") },
          { label: "Physical Standards", href: p("NDA Physical Standards") },
          { label: "Girls in NDA", href: p("Girls in NDA") },
          { label: "PABT Test", href: p("PABT Test") },
          { label: "Army / Navy / Air Force Wings", href: p("NDA Service Wings") },
        ],
      },
    ],
  },
  {
    label: "For Institutes",
    href: "#institutes",
    simple: [
      { label: "Overview", href: "#institutes" },
      { label: "B2B Pricing", href: p("B2B Pricing") },
      { label: "Case Studies", href: p("Case Studies") },
      { label: "Request Demo", href: p("Request a Demo") },
    ],
  },
  {
    label: "Free Resources",
    href: "#why",
    simple: [
      { label: "NDA Syllabus PDF", href: p("NDA Syllabus PDF") },
      { label: "JEE Formula Sheet", href: p("JEE Formula Sheet") },
      { label: "NEET NCERT Guide", href: p("NEET NCERT Guide") },
      { label: "All Resources", href: p("All Free Resources") },
    ],
  },
  { label: "Blog", href: p("Blog") },
];

export const placeholder = p;
