// Rank Sarthi interactive corporate showcase — scene registry.
// All headline, overlay and voiceover copy is taken verbatim from
// "Rank_Sarthi_Lovable_Master_Content.md" (V1). Do not rewrite here; update the
// master document first and mirror the change.

export type SceneKind =
  | "photo"
  | "scale"
  | "spectrum"
  | "sarthi"
  | "ecosystem"
  | "loop"
  | "screens"
  | "operations"
  | "benefits"
  | "closing";

export type Scene = {
  id: string;
  number: number;
  chapter: string;
  kind: SceneKind;
  durationSec: number;
  headline: string;
  secondary?: string;
  overlays?: string[];
  voiceover: string;
  /** Screenshot ids from src/content/presentation/screens.ts, in master-document order. */
  screens?: string[];
  /** Short qualification shown on screen where the master document requires one. */
  qualification?: string;
  photo?: "s01" | "s03" | "s05" | "s06" | "s20";
};

export const CHAPTERS = [
  "The aspiration",
  "The challenge",
  "Why Sarthi",
  "The platform",
  "For students",
  "For institutes",
  "Foundation & benefits",
  "Vision",
] as const;

export const SCENES: Scene[] = [
  {
    id: "s01",
    number: 1,
    chapter: "The aspiration",
    kind: "photo",
    photo: "s01",
    durationSec: 15,
    headline: "Millions of ambitions. Every journey deserves direction.",
    secondary: "JEE • NEET • NDA",
    voiceover:
      "Across India, millions of students work toward extraordinary goals. To become engineers. To become doctors. To serve the nation. Every journey begins with ambition—and the effort to turn that ambition into possibility.",
  },
  {
    id: "s02",
    number: 2,
    chapter: "The aspiration",
    kind: "scale",
    durationSec: 20,
    headline: "The scale of India's aspirations.",
    voiceover:
      "The scale is remarkable. In the 2026 examination cycle, roughly fifteen lakh candidates appeared for JEE Main and around twenty lakh for NEET. Behind every number is a student, a family, and years of preparation.",
  },
  {
    id: "s03",
    number: 3,
    chapter: "The challenge",
    kind: "photo",
    photo: "s03",
    durationSec: 20,
    headline: "A score tells you what happened. Not always why.",
    overlays: ["Where did marks go?", "What needs attention?", "What comes next?"],
    voiceover:
      "Students are surrounded by content, coaching and practice tests. But after each test, a crucial question remains. What caused those lost marks? Which areas need attention? And what should the student do next?",
  },
  {
    id: "s04",
    number: 4,
    chapter: "The challenge",
    kind: "spectrum",
    durationSec: 20,
    headline: "More content is not the same as clearer direction.",
    overlays: ["Coaching", "Video learning", "Question banks", "Mock tests", "Performance guidance"],
    voiceover:
      "India's preparation ecosystem offers rich teaching, content and testing options. Rank Sarthi's intended role is to complement those resources with diagnostic insight—helping students turn performance into more informed next steps.",
  },
  {
    id: "s05",
    number: 5,
    chapter: "Why Sarthi",
    kind: "sarthi",
    photo: "s05",
    durationSec: 25,
    headline: "Even Arjuna needed a Sarthi.",
    secondary: "Guidance does not replace effort. It gives effort direction.",
    voiceover:
      "In the Mahabharata, Arjuna had talent, training and determination. Yet at a defining moment, he needed clarity and perspective. His Sarthi did not fight his battle for him. He helped him understand the path ahead. That is the inspiration behind our name.",
  },
  {
    id: "s06",
    number: 6,
    chapter: "Why Sarthi",
    kind: "photo",
    photo: "s06",
    durationSec: 18,
    headline: "Why Rank Sarthi exists.",
    secondary: "From test results to better-informed preparation.",
    voiceover:
      "We are not here to replace teachers, coaching institutes or hard work. We are here to make preparation more understandable, focused and actionable—for students and the people guiding them.",
  },
  {
    id: "s07",
    number: 7,
    chapter: "The platform",
    kind: "ecosystem",
    durationSec: 16,
    headline: "One platform. Multiple exam pathways.",
    secondary: "JEE • NEET • NDA",
    voiceover:
      "Rank Sarthi brings together student preparation, institution-led testing and platform operations. JEE, NEET and NDA are exam pathways within the wider ecosystem.",
  },
  {
    id: "s08",
    number: 8,
    chapter: "The platform",
    kind: "loop",
    durationSec: 15,
    headline: "Attempt → Analyse → Diagnose → Prioritise → Act.",
    overlays: ["Attempt", "Analyse", "Diagnose", "Prioritise", "Act"],
    voiceover:
      "The principle is simple. Practise. Understand the result. Recognise strengths and weaknesses. Choose the next action. Keep learning with a clearer sense of direction.",
  },
  {
    id: "s09",
    number: 9,
    chapter: "For students",
    kind: "screens",
    durationSec: 20,
    headline: "Your preparation, in view.",
    overlays: ["Target exam and goal", "Weak topics", "Next steps"],
    screens: ["stud-student-dashbaord-1", "stud-student-dashbaord-2", "stud-profile-details-of-student"],
    voiceover:
      "Students can begin with their own dashboard, set a target rank, score or percentile, and review progress, weak areas and suggested next steps.",
  },
  {
    id: "s10",
    number: 10,
    chapter: "For students",
    kind: "screens",
    durationSec: 20,
    headline: "The right practice begins with the right questions.",
    overlays: ["Free diagnostic", "Full and part tests", "PYQs", "Self-tests"],
    screens: ["stud-browse-test", "stud-browse-test-pyq", "stud-create-self-test-1", "stud-create-self-test-2"],
    voiceover:
      "From a free diagnostic to full tests, part tests, previous-year questions and a self-test builder, students can choose preparation aligned with their needs.",
  },
  {
    id: "s11",
    number: 11,
    chapter: "For students",
    kind: "screens",
    durationSec: 18,
    headline: "Practise in a realistic examination environment.",
    overlays: ["Timed testing", "Question palette", "Review & resume"],
    screens: ["stud-assigned-test-or-started-test"],
    qualification:
      "The supplied screenshot shows the My Tests list, not the in-exam screen. Exam-screen capabilities are summarised from the developer's feature list.",
    voiceover:
      "The test environment supports exam-style navigation, a timer, question review and a variety of question formats. Answers save during a test and can resume after an interrupted connection.",
  },
  {
    id: "s12",
    number: 12,
    chapter: "For students",
    kind: "screens",
    durationSec: 20,
    headline: "A result is the beginning of insight.",
    overlays: ["Score and percentile", "Question-level review", "Performance patterns"],
    screens: [
      "stud-performance-report-of-test",
      "stud-past-attempted-test-details-and-individual-test-report",
      "stud-review-and-solution-of-individual-test",
    ],
    voiceover:
      "Students receive results and can examine answers, solutions and performance across subjects, question types and difficulty levels. The purpose is to understand more than the final number.",
  },
  {
    id: "s13",
    number: 13,
    chapter: "For students",
    kind: "screens",
    durationSec: 20,
    headline: "From analysis to action.",
    overlays: ["Personalised AI insights", "Strategy suggestions", "Recommended tests"],
    screens: [
      "stud-ai-insight-report-of-individual-test",
      "stud-strategy-report-of-individual-test",
      "stud-download-report-of-test-performance",
    ],
    qualification: "Insights are decision support, not guarantees of score improvement.",
    voiceover:
      "AI-supported feedback highlights strengths, mistakes and areas to practise. Recommended tests and downloadable reports help students plan their next preparation step.",
  },
  {
    id: "s14",
    number: 14,
    chapter: "For students",
    kind: "screens",
    durationSec: 16,
    headline: "A preparation journey students can revisit.",
    overlays: ["Trends and analytics", "Free and paid access", "Test bundles and top-ups"],
    screens: [
      "stud-average-report-or-analytics-report-of-all-attempted-test-1",
      "stud-plans-and-report-of-student-portal",
      "stud-invoice-and-billing",
    ],
    qualification: "Prices visible in product screenshots are illustrative until marketing approves current prices.",
    voiceover:
      "Students can revisit their performance trends and choose from available free, paid and additional practice options as their preparation evolves.",
  },
  {
    id: "s15",
    number: 15,
    chapter: "For institutes",
    kind: "screens",
    durationSec: 20,
    headline: "Built for the people who guide students.",
    overlays: ["Your institute brand", "Students and batches", "Teacher access"],
    screens: ["inst-dashboard", "inst-add-student", "inst-make-group-of-student"],
    voiceover:
      "For schools and coaching institutes, Rank Sarthi offers an institution-facing experience—supporting branded student journeys, student and batch management, and teacher access according to plan.",
  },
  {
    id: "s16",
    number: 16,
    chapter: "For institutes",
    kind: "screens",
    durationSec: 20,
    headline: "Create. Assign. Track.",
    overlays: ["Custom test builder", "Assign to students or batches", "Print for offline use"],
    screens: ["inst-create-custom-test-and-asign", "inst-assign-test", "inst-download-test-paper-for-offline-test"],
    voiceover:
      "Institutes can build tests from available questions and their own content, schedule assignments and prepare branded printable papers for offline testing.",
  },
  {
    id: "s17",
    number: 17,
    chapter: "For institutes",
    kind: "screens",
    durationSec: 20,
    headline: "Every batch tells a different story.",
    overlays: ["Attendance", "Student progress", "Batch analysis"],
    screens: [
      "inst-student-performace-of-intutute-and-attendance-details",
      "inst-analytics-of-institute-all-student-group-wise-individual-student-and-test-wise",
      "inst-test-analytics",
    ],
    voiceover:
      "Attendance, individual reports, score distributions and batch-level insights can help educators identify students who may need additional attention.",
  },
  {
    id: "s18",
    number: 18,
    chapter: "Foundation & benefits",
    kind: "operations",
    durationSec: 18,
    headline: "The operational foundation behind the experience.",
    overlays: ["Question quality workflow", "Content import", "Roles and billing"],
    voiceover:
      "Behind the student and institute experiences, the platform supports content quality checks, question imports, paper creation, plans and offers, billing, access permissions and operational records.",
  },
  {
    id: "s19",
    number: 19,
    chapter: "Foundation & benefits",
    kind: "benefits",
    durationSec: 22,
    headline: "Better guidance, across the learning ecosystem.",
    overlays: [
      "Students — clearer preparation priorities.",
      "Parents — more meaningful progress conversations.",
      "Teachers — better visibility into learning needs.",
      "Institutes — flexible tests and reports.",
    ],
    qualification: "Intended benefits, not independently proven outcomes.",
    voiceover:
      "The value extends beyond a single test. Students gain clearer priorities. Parents can ask better questions. Educators see where support is needed. Institutions can coordinate testing and reporting with greater visibility.",
  },
  {
    id: "s20",
    number: 20,
    chapter: "Vision",
    kind: "photo",
    photo: "s20",
    durationSec: 18,
    headline: "From scores to understanding. From effort to direction.",
    voiceover:
      "We believe an exam result should begin a more useful conversation—not end it. Rank Sarthi is building toward an educational journey where insight supports effort, and direction supports ambition.",
  },
  {
    id: "s21",
    number: 21,
    chapter: "Vision",
    kind: "closing",
    durationSec: 14,
    headline: "Rank Sarthi",
    overlays: ["Your rank has a reason.", "Every Arjuna Deserves a Sarthi.", "ranksarthi.com"],
    voiceover: "“Rank Sarthi. Your rank has a reason. Every Arjuna Deserves a Sarthi.”",
  },
];

export const TOTAL_DURATION_SEC = SCENES.reduce((t, s) => t + s.durationSec, 0);

/** Exam-participation figures from the master content. All remain provisional until verified. */
export const PARTICIPATION = {
  jeeMain: { label: "JEE Main 2026", lakh: 15.38, note: "approximately 15.38 lakh appeared" },
  neet: { label: "NEET UG 2026", lakh: 20, note: "approximately 20 lakh appeared" },
  combinedLakh: 35.38,
  status: "VERIFY" as const,
};

export const DATA_SOURCES = [
  {
    figure: "JEE Main 2026 — approximately 15.38 lakh appeared",
    source: "Rank Sarthi master content (V1), to be checked against the final NTA release",
    status: "Requires verification",
  },
  {
    figure: "NEET UG 2026 — approximately 20 lakh appeared",
    source: "Rank Sarthi master content (V1), to be checked against the NTA release",
    status: "Requires verification",
  },
  {
    figure: "JEE Main + NEET — approximately 35.38 lakh exam participations",
    source: "Sum of the two figures above; not deduplicated unique students, not market size",
    status: "Depends on the two figures above",
  },
  {
    figure: "NDA",
    source: "Shown as an exam pathway only; no number until independently confirmed",
    status: "No figure shown",
  },
  {
    figure: "India boundary",
    source: "Natural Earth 1:10m Admin 0, India point-of-view edition (public domain)",
    status: "Geographic outline only; no demand or density data",
  },
  {
    figure: "Product capabilities",
    source: "Developer's Rank Up Feature List, live as of 23 October 2026",
    status: "Supplied by developer",
  },
];
