// Genuine JEE Rank Up portal screenshots supplied by the developer (October 2026).
// Files are compressed WebP copies of the originals; ids match the original file names.

const files = import.meta.glob("../../assets/presentation/screens/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export type Screen = {
  id: string;
  src: string;
  portal: "student" | "institute";
  caption: string;
  original: string;
  width: number;
  height: number;
};

const CAPTIONS: Record<string, [string, string]> = {
  "stud-student-dashbaord-1": ["Student dashboard", "Student Dashbaord 1.png"],
  "stud-student-dashbaord-2": ["Student dashboard — continued", "Student Dashbaord 2.png"],
  "stud-profile-details-of-student": ["Student profile details", "Profile Details of Student.png"],
  "stud-browse-test": ["Browse tests", "Browse test .png"],
  "stud-browse-test-pyq": ["Browse tests — previous-year papers", "Browse test PYQ.png"],
  "stud-create-self-test-1": ["Self-test builder", "Create Self test 1.png"],
  "stud-create-self-test-2": ["Self-test builder — continued", "Create Self Test 2.png"],
  "stud-assigned-test-or-started-test": ["My Tests — assigned and started tests", "Assigned Test or started Test.png"],
  "stud-performance-report-of-test": ["Performance report of a test", "Performance report of test.png"],
  "stud-past-attempted-test-details-and-individual-test-report": [
    "Past attempted tests and individual report",
    "Past attempted test details and individual test report.png",
  ],
  "stud-review-and-solution-of-individual-test": ["Review and solutions", "Review and Solution of individual test.png"],
  "stud-ai-insight-report-of-individual-test": ["AI insight report", "Ai insight report of individual test.png"],
  "stud-strategy-report-of-individual-test": ["Strategy report", "Strategy Report of individual Test.png"],
  "stud-download-report-of-test-performance": ["Downloadable performance report", "Download Report of Test Performance.png"],
  "stud-average-report-or-analytics-report-of-all-attempted-test-1": [
    "Analytics across all attempted tests",
    "Average Report or  Analytics report of all attempted test 1.png",
  ],
  "stud-average-report-or-analytics-report-of-all-attempted-test-2": [
    "Analytics across all attempted tests — continued",
    "Average Report or  Analytics report of all attempted test 2.png",
  ],
  "stud-average-report-or-analytics-report-of-all-attempted-test-3": [
    "Analytics across all attempted tests — continued",
    "Average Report or  Analytics report of all attempted test 3.png",
  ],
  "stud-plans-and-report-of-student-portal": ["Plans and reports", "Plans and Report of student Portal.png"],
  "stud-plan-details": ["Plan details", "Plan Details.png"],
  "stud-invoice-and-billing": ["Invoices and billing", "Invoice and billing.png"],
  "inst-dashboard": ["Institute dashboard", "Dashboard.png"],
  "inst-add-student": ["Add students", "add student.png"],
  "inst-make-group-of-student": ["Student groups (batches)", "Make group of student.png"],
  "inst-create-custom-test-and-asign": ["Create a custom test and assign", "Create custom Test and asign.png"],
  "inst-assign-test": ["Assign a test", "Assign test.png"],
  "inst-download-test-paper-for-offline-test": ["Download test paper for offline use", "Download test paper for offline test.png"],
  "inst-download-and-print-test-paper-asnwer-key-for-offiline": [
    "Printable paper and answer key",
    "download and print test paper asnwer key for offiline.png",
  ],
  "inst-print-paper-screen": ["Print paper", "print paper screen.png"],
  "inst-custom-test-list-screen": ["Custom test list", "custom test list screen.png"],
  "inst-view-question-of-test": ["View questions of a test", "View question of test.png"],
  "inst-view-assignment-detail": ["Assignment details", "View Assignment detail.png"],
  "inst-view-dedicated-report-of-test": ["Report for one test", "View dedicated report of test.png"],
  "inst-download-report-of-test": ["Download test report", "Download report of test.png"],
  "inst-student-performace-of-intutute-and-attendance-details": [
    "Student performance and attendance",
    "Student performace of intutute and attendance details .png",
  ],
  "inst-analytics-of-institute-all-student-group-wise-individual-student-and-test-wise": [
    "Institute analytics — all students, groups, individuals, tests",
    "Analytics of institute all student, group wise, individual student and test wise.png",
  ],
  "inst-analytics-of-institute-all-student-group-wise-individual-student-and-test-wise-screen-2": [
    "Institute analytics — continued",
    "Analytics of institute all student, group wise, individual student and test wise screen 2.png",
  ],
  "inst-test-analytics": ["Test analytics", "Test Analytics.png"],
  "inst-request-to-create-test-for-admin": ["Request a test from the Rank Sarthi team", "Request to create test for admin.png"],
  "inst-profile": ["Institute profile", "Profile.png"],
  "inst-institute-subscription-details": ["Institute subscription", "institute subscription details.png"],
};

const SIZE = { student: [1872, 928], institute: [1880, 960] } as const;

export const SCREENS: Screen[] = Object.entries(CAPTIONS).map(([id, [caption, original]]) => {
  const src = files[`../../assets/presentation/screens/${id}.webp`];
  if (!src) throw new Error(`Missing presentation screenshot: ${id}`);
  const portal = id.startsWith("inst-") ? "institute" : "student";
  const [width, height] = SIZE[portal];
  return { id, src, portal, caption, original: `${portal === "student" ? "JeeRankupStudent" : "JeeRankupB2b"}/${original}`, width, height };
});

export const SCREEN_BY_ID = Object.fromEntries(SCREENS.map((s) => [s.id, s])) as Record<string, Screen>;
