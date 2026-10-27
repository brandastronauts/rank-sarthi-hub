// Verbatim from the developer's "Rank Up Feature List" (live on JEE, NEET and NDA Rank Up as of 23 October 2026).
// Do not edit wording here without an updated developer inventory.
export type FeatureItem = { title: string; detail: string };
export type FeatureGroup = { name: string; items: FeatureItem[] };
export type FeaturePortal = { id: string; title: string; who: string; groups: FeatureGroup[] };

export const FEATURE_INVENTORY_DATE = "23 October 2026";
export const FEATURE_PORTALS: FeaturePortal[] = [
  {
    "id": "student",
    "title": "Student portal",
    "who": "For students preparing on their own, and for students of an institute.",
    "groups": [
      {
        "name": "Sign up and sign in",
        "items": [
          {
            "title": "Quick sign-up",
            "detail": "with email and mobile, confirmed by a one-time code; students land on their dashboard straight away."
          },
          {
            "title": "Log in with a password or a mobile code",
            "detail": "and reset a forgotten password with a code on the phone."
          },
          {
            "title": "One device at a time",
            "detail": "stops account sharing."
          }
        ]
      },
      {
        "name": "Dashboard and goals",
        "items": [
          {
            "title": "Personal dashboard",
            "detail": "with target exam, performance trend, weak topics, next steps and recent activity."
          },
          {
            "title": "Getting started checklist",
            "detail": "that guides a new student through the first steps."
          },
          {
            "title": "My Goals",
            "detail": "set a target rank, percentile or score for each exam, with a short self-assessment and an at-a-glance summary."
          },
          {
            "title": "Free diagnostic test",
            "detail": "for each exam: shows weak areas, then suggests the plan that fits, with the reason."
          }
        ]
      },
      {
        "name": "Practice",
        "items": [
          {
            "title": "Browse Tests",
            "detail": "full tests, part tests, previous-year papers (PYQ) by year, and topic practice, filtered by exam, subject, topic and subtopic."
          },
          {
            "title": "Self-Test builder",
            "detail": "pick subjects, topics, difficulty mix or previous-year questions only, up to 50 questions; it only offers choices with enough questions."
          },
          {
            "title": "Exam-pattern presets",
            "detail": "that fill the self-test like the real exam in one tap."
          },
          {
            "title": "Clear lock messages",
            "detail": "on any paper the plan doesn't cover, with an unlock offer (for example, one more test for ₹50)."
          }
        ]
      },
      {
        "name": "Exam screen",
        "items": [
          {
            "title": "Real NTA-style screen",
            "detail": "or a simple one, with timer, sections, paper instructions, question palette and mark for review."
          },
          {
            "title": "Every question type",
            "detail": "single and multiple correct, numerical, assertion–reason, Statement I/II, multi-statement, match the list, matrix match and comprehension."
          },
          {
            "title": "Maths and chemistry shown properly",
            "detail": "formulas, equations and reactions."
          },
          {
            "title": "Auto-submit",
            "detail": "when time ends; answers are saved as the student goes and the test resumes after a lost connection."
          }
        ]
      },
      {
        "name": "Results and analytics",
        "items": [
          {
            "title": "Instant result",
            "detail": "with score, rank, percentile and leaderboard."
          },
          {
            "title": "Question-by-question review",
            "detail": "with full solutions, mistake analysis and strategy tips."
          },
          {
            "title": "Accuracy heatmap",
            "detail": "by concept type and difficulty (Easy, Moderate, Difficult, Critical thinking)."
          },
          {
            "title": "AI insights",
            "detail": "personal feedback on strengths, mistakes and what to practise next."
          },
          {
            "title": "Analytics page",
            "detail": "subject accuracy, weak topics, score trend, time per question, comparison with other students and projected performance."
          },
          {
            "title": "Recommended tests",
            "detail": "with a \"why these\" explanation, and a downloadable PDF report of each result."
          }
        ]
      },
      {
        "name": "Plans and payments",
        "items": [
          {
            "title": "Free plan",
            "detail": "to start, and paid plans with separate allowances for full tests, part tests and PYQ papers."
          },
          {
            "title": "Bundles",
            "detail": "of tests that never expire, and one-off top-ups such as an extra test."
          },
          {
            "title": "Secure payment",
            "detail": "through Razorpay (UPI, cards, net banking), with a GST invoice for every order."
          },
          {
            "title": "Coupon codes",
            "detail": "at checkout, including links that apply a code automatically."
          },
          {
            "title": "Launch offer",
            "detail": "free practice or a free bundle for the first students, claimed from a pop-up."
          },
          {
            "title": "Billing page",
            "detail": "with every invoice and refund."
          }
        ]
      }
    ]
  },
  {
    "id": "institute",
    "title": "Institute portal (B2B)",
    "who": "For coaching institutes and schools that run tests for their own students. What each institute gets depends on its plan (Basic, Standard or Advanced).",
    "groups": [
      {
        "name": "Your brand",
        "items": [
          {
            "title": "Institute profile and logo",
            "detail": "edited by the institute itself."
          },
          {
            "title": "Logo everywhere",
            "detail": "in the institute portal, in its students' portal and on every student's result PDF."
          }
        ]
      },
      {
        "name": "Students and batches",
        "items": [
          {
            "title": "Add students",
            "detail": "one by one or from a spreadsheet, within the plan's seats."
          },
          {
            "title": "Groups for batches",
            "detail": "to assign tests and see reports batch by batch."
          },
          {
            "title": "More admin logins",
            "detail": "for teachers, as the plan allows."
          }
        ]
      },
      {
        "name": "Tests",
        "items": [
          {
            "title": "Test library",
            "detail": "browse every paper the institute can assign, filtered by exam, subject, topic, PYQ year, paper kind, concept type and difficulty, and view the questions (without answers)."
          },
          {
            "title": "Assign tests",
            "detail": "to all students, a batch or named students, with a start and end time."
          },
          {
            "title": "Build your own tests",
            "detail": "(1–300 questions) from the Rank Sarthi question bank and your own questions; new questions only, swap any question, choose the NTA or simple screen, publish."
          },
          {
            "title": "Own question bank",
            "detail": "that only your students see."
          },
          {
            "title": "Printable question paper and answer key",
            "detail": "for offline tests, with your logo and contact details on every page."
          }
        ]
      },
      {
        "name": "Attendance and reports",
        "items": [
          {
            "title": "Attendance for every assigned test",
            "detail": "present, left early, absent or not yet taken."
          },
          {
            "title": "Student report",
            "detail": "attendance, average against the batch, growth, rank in the institute, all-India percentile, strong and weak topics."
          },
          {
            "title": "Batch overview",
            "detail": "with the students who need attention."
          },
          {
            "title": "Report for one test",
            "detail": "rank list, score spread, and for each question how many got it right and the most common wrong answer."
          },
          {
            "title": "Reports as PDF",
            "detail": "with the institute's logo."
          },
          {
            "title": "AI insights",
            "detail": "for the institute's students."
          }
        ]
      },
      {
        "name": "Plan and renewal",
        "items": [
          {
            "title": "Subscription page",
            "detail": "with the plan, seats used and an activation code box."
          },
          {
            "title": "7 days to renew",
            "detail": "after the plan's last day the institute keeps working for a week, with a reminder on every page."
          }
        ]
      }
    ]
  },
  {
    "id": "admin",
    "title": "Platform admin",
    "who": "For the Rank Sarthi team that runs the content, plans and sales of all three sites. Useful for sales calls and partner decks.",
    "groups": [
      {
        "name": "Question bank and quality",
        "items": [
          {
            "title": "Quality check before going live",
            "detail": "a question is published only when it has its exam, subject, topic, subtopic, type, difficulty, concept type, marks, negative marks, answer and full solution."
          },
          {
            "title": "Team roles",
            "detail": "operators, subject experts limited to their subjects, and proofreaders, with a record of who tagged, checked and edited each question."
          },
          {
            "title": "AI auto-tagging",
            "detail": "of subject, topic and difficulty for new and imported questions."
          }
        ]
      },
      {
        "name": "Bringing content in",
        "items": [
          {
            "title": "PDF import",
            "detail": "reads a question paper PDF into questions, recognises a full paper, a question set or an answer key, and joins a paper with its answer key."
          },
          {
            "title": "Spreadsheet and database import",
            "detail": "with column matching, a preview and one-click undo."
          },
          {
            "title": "Duplicate check",
            "detail": "so the same question isn't added twice."
          }
        ]
      },
      {
        "name": "Building papers",
        "items": [
          {
            "title": "Test builder",
            "detail": "with sections, paper and section instructions, and real exam marking (negative and partial marks)."
          },
          {
            "title": "Paper kinds",
            "detail": "full test, part test, topic practice, previous-year paper with year."
          },
          {
            "title": "Scheduled publishing",
            "detail": "question sets and exam-pattern presets."
          },
          {
            "title": "Free diagnostic paper",
            "detail": "chosen for each exam."
          }
        ]
      },
      {
        "name": "Plans, offers and coupons",
        "items": [
          {
            "title": "Plans built from a checklist",
            "detail": "of limits and features, for students and for institutes; bundles inside plans."
          },
          {
            "title": "Coupons",
            "detail": "percentage or flat, dates and limits, codes for one student, campaign links, partner share links, and coupons shown on ranksarthi.com."
          },
          {
            "title": "Coupon results",
            "detail": "signups, paid orders and revenue for each code."
          },
          {
            "title": "Launch offer",
            "detail": "by end date or number of places, with a website bar and pop-up showing real places left."
          },
          {
            "title": "Engagement controls",
            "detail": "switch student portal sections on or off, and a \"students online\" note using real numbers."
          }
        ]
      },
      {
        "name": "Money and records",
        "items": [
          {
            "title": "Billing",
            "detail": "payments, GST invoices, full and part refunds, and cash, bank or cheque payments recorded by hand."
          },
          {
            "title": "Accounts",
            "detail": "revenue, monthly recurring revenue and the GST report, with spreadsheet downloads."
          },
          {
            "title": "Contact-us leads",
            "detail": "from the website in one list."
          }
        ]
      },
      {
        "name": "Running the platform",
        "items": [
          {
            "title": "Three branded sites",
            "detail": "(JEE, NEET, NDA Rank Up) from one platform."
          },
          {
            "title": "Users, institutes, roles and permissions",
            "detail": "managed from screens."
          },
          {
            "title": "Activity log",
            "detail": "of every sensitive action, and automatic database backups."
          },
          {
            "title": "Public website",
            "detail": "with landing page, contact form and policy pages, built to be found on Google and AI search."
          }
        ]
      }
    ]
  }
];
