import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const mainTools: InfoPageContent = {
  "url": "/tools",
  "platform": "main",
  "slug": "tools",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Free JEE, NEET & NDA Calculators & Study Tools",
  "eyebrow": "Free tools",
  "intent": "Open every free Rank Sarthi calculator for marks, accuracy, targets and study planning",
  "chips": [
    "10 tools",
    "No login",
    "Instant results",
    "No predictions"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Simple calculators for marks, accuracy, negative marking, target scores and study planning across JEE, NEET and NDA. Every tool runs in your browser, needs no login and shows the formula it used."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "None of these tools predict rank, percentile, cutoff or college admission. They calculate exactly what you enter, using published official marking rules where an exam rule is involved."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tools-grid",
      "id": "featured-tools",
      "heading": "Featured calculators",
      "intro": "The three score calculators students open most often.",
      "filters": [
        "All"
      ],
      "items": [
        {
          "url": "/tools/jee-main-score-calculator",
          "name": "JEE Main Score Calculator 2026",
          "tagline": "Raw marks out of 300 from your correct, incorrect and unattempted counts under the +4 / −1 rule.",
          "filters": [
            "JEE",
            "Marks & Scores"
          ],
          "badges": [
            "JEE",
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator",
          "featured": true
        },
        {
          "url": "/neet/score-calculator",
          "name": "NEET Score Calculator 2026",
          "tagline": "Marks out of 720 under the official +4 / −1 rule, including all-candidate bonus questions.",
          "filters": [
            "NEET",
            "Marks & Scores"
          ],
          "badges": [
            "NEET",
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator",
          "featured": true
        },
        {
          "url": "/nda/score-calculator",
          "name": "NDA Score Calculator",
          "tagline": "Mathematics and GAT written marks with the UPSC one-third penalty held at full precision.",
          "filters": [
            "NDA",
            "Marks & Scores"
          ],
          "badges": [
            "NDA",
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator",
          "featured": true
        }
      ]
    },
    {
      "kind": "tools-grid",
      "id": "all-tools",
      "heading": "All 10 free calculators and tools",
      "intro": "Filter by exam or by what you are trying to work out. Filtering happens in your browser and does not create separate pages.",
      "filters": [
        "All",
        "JEE",
        "NEET",
        "NDA",
        "Marks & Scores",
        "Planning",
        "General"
      ],
      "items": [
        {
          "url": "/tools/jee-main-score-calculator",
          "name": "JEE Main Score Calculator 2026",
          "tagline": "Raw marks out of 300 from your correct, incorrect and unattempted counts under the +4 / −1 rule.",
          "filters": [
            "JEE",
            "Marks & Scores"
          ],
          "badges": [
            "JEE",
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/neet/score-calculator",
          "name": "NEET Score Calculator 2026",
          "tagline": "Marks out of 720 under the official +4 / −1 rule, including all-candidate bonus questions.",
          "filters": [
            "NEET",
            "Marks & Scores"
          ],
          "badges": [
            "NEET",
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/nda/score-calculator",
          "name": "NDA Score Calculator",
          "tagline": "Mathematics and GAT written marks with the UPSC one-third penalty held at full precision.",
          "filters": [
            "NDA",
            "Marks & Scores"
          ],
          "badges": [
            "NDA",
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/tools/jee-advanced-score-calculator",
          "name": "JEE Advanced Score Calculator",
          "tagline": "Enter your paper's printed section rules, including optional partial credit, and get Paper 1, Paper 2 and combined marks.",
          "filters": [
            "JEE",
            "Marks & Scores"
          ],
          "badges": [
            "JEE",
            "No Login",
            "Configurable"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/tools/negative-marking-calculator",
          "name": "Negative Marking Calculator",
          "tagline": "See exactly how many marks wrong answers cost, with JEE, NEET, NDA and custom presets.",
          "filters": [
            "JEE",
            "NEET",
            "NDA",
            "Marks & Scores",
            "General"
          ],
          "badges": [
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/tools/accuracy-calculator",
          "name": "Exam Accuracy Calculator",
          "tagline": "Accuracy, attempt rate, error rate and overall correct rate from any mock test.",
          "filters": [
            "General",
            "Marks & Scores"
          ],
          "badges": [
            "Any exam",
            "No Login"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/tools/target-score-calculator",
          "name": "Target Score Calculator",
          "tagline": "The correct and wrong answer combinations that reach a marks target.",
          "filters": [
            "JEE",
            "NEET",
            "NDA",
            "Planning"
          ],
          "badges": [
            "No Login",
            "Scenario table"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/tools/correct-answers-needed-calculator",
          "name": "Correct Answers Needed Calculator",
          "tagline": "How many of your planned attempts must be correct to reach a target score.",
          "filters": [
            "JEE",
            "NEET",
            "NDA",
            "Planning"
          ],
          "badges": [
            "No Login",
            "Instant Result"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/tools/study-time-calculator",
          "name": "Study Time Calculator",
          "tagline": "The study hours that actually exist between today and your exam date.",
          "filters": [
            "Planning",
            "General"
          ],
          "badges": [
            "No Login",
            "Buffer days"
          ],
          "cta": "Open Calculator"
        },
        {
          "url": "/tools/daily-question-target-calculator",
          "name": "Daily Question Target Calculator",
          "tagline": "A daily and weekly practice number from your question goal and deadline.",
          "filters": [
            "Planning",
            "General"
          ],
          "badges": [
            "No Login",
            "Milestones"
          ],
          "cta": "Open Calculator"
        }
      ],
      "note": "Every tool is free, needs no login and stores nothing about you on our servers."
    },
    {
      "kind": "prose",
      "id": "listicle",
      "heading": "10 Free Calculators and Tools for JEE, NEET & NDA Aspirants",
      "concepts": [
        {
          "id": "tool-1",
          "title": "1. JEE Main Score Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates raw JEE Main Paper 1 marks out of 300 from correct, incorrect and unattempted counts, including official dropped or bonus questions. Useful the moment the final answer key is out. Example: 60 correct, 10 incorrect and 5 unanswered gives 240 − 10 = 230."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-2",
          "title": "2. NEET Score Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates NEET (UG) marks out of 720 under the official +4 / −1 rule and handles bonus questions granted to every candidate. Useful after the final key is published. Example: 150 correct and 20 incorrect gives 600 − 20 = 580."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-3",
          "title": "3. NDA Score Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates the NDA written score for Mathematics and GAT, applying the UPSC one-third penalty at full precision. Useful for estimating written marks from your own response sheet. Example: 80 correct and 20 wrong in Mathematics gives 200 − 16.67 = 183.33."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-4",
          "title": "4. JEE Advanced Score Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates section-wise and combined JEE Advanced marks from the rules printed in your own paper, with optional partial credit. Useful because JEE Advanced marking varies by paper and question type. Example: 3 fully correct and 2 wrong in a +4 / −2 section gives 12 − 4 = 8."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-5",
          "title": "5. Negative Marking Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates a score and the marks lost to penalties for any marking scheme, with JEE, NEET and NDA presets. Useful when comparing how costly wrong answers are across exams. Example: 50 correct and 10 wrong at +4 / −1 gives 190."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-6",
          "title": "6. Exam Accuracy Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates accuracy on attempted questions plus attempt rate, error rate and overall correct rate. Useful after any mock test, whatever the marking rule. Example: 65 attempted with 50 correct out of 75 gives 76.92% accuracy and an 86.67% attempt rate."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-7",
          "title": "7. Target Score Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates the minimum correct answers for a target score and lists feasible correct and wrong combinations. Useful when planning how many questions to attempt. Example: 200 marks in JEE Main needs 50 correct with no wrong answers, or 55 correct with 20 wrong."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-8",
          "title": "8. Correct Answers Needed Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates the minimum correct answers within a fixed number of planned attempts, plus the accuracy that requires. Useful when your attempt count is already decided. Example: 200 marks from 60 attempts in JEE Main needs 52 correct."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-9",
          "title": "9. Study Time Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates the weekday, weekend and effective study hours between two dates, after removing buffer days. Useful at the start of a revision block. Example: 20 weekdays at 4 hours plus 8 weekend days at 8 hours gives 144 planned hours."
                }
              ]
            }
          ]
        },
        {
          "id": "tool-10",
          "title": "10. Daily Question Target Calculator",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculates the questions per active day needed to finish a question goal by a deadline, allowing for rest days. Useful for pacing question practice. Example: 800 questions remaining across 16 active days is 50 a day."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "how-we-build",
      "heading": "How these tools are built",
      "concepts": [
        {
          "id": "deterministic",
          "title": "Deterministic arithmetic only",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Each calculator takes your inputs, applies one published formula and shows the result together with the equation it used. There is no model, no estimate and no hidden adjustment."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Calculation logic lives in shared, unit-tested TypeScript functions rather than inside the interface, so the same inputs always produce the same result."
                }
              ]
            }
          ]
        },
        {
          "id": "no-predictions",
          "title": "No predictions",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Rank, percentile, expected cutoff and college allotment depend on the performance of every other candidate and on official normalisation. Rank Sarthi does not publish estimates of them, so no tool here offers one."
                }
              ]
            }
          ]
        },
        {
          "id": "versioned-rules",
          "title": "Versioned exam rules",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Exam-specific configurations are versioned as JEE_MAIN_2026, NEET_UG_2026 and NDA_2026, each recording the authority and the date it was last verified, so a later cycle can be added without rewriting the calculator."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "links",
      "id": "exam-hubs",
      "heading": "Exam hubs these tools support",
      "items": [
        {
          "url": "/jee",
          "label": "JEE home",
          "type": "Exam Hub"
        },
        {
          "url": "/neet",
          "label": "NEET home",
          "type": "Exam Hub"
        },
        {
          "url": "/nda",
          "label": "NDA home",
          "type": "Exam Hub"
        },
        {
          "url": "/resources",
          "label": "Free resources hub",
          "type": "Resources"
        }
      ]
    }
  ],
  "sourceRefs": [
    "nta-jee-main-bulletin-2026",
    "nta-neet-2026-bulletin",
    "upsc-nda-notification",
    "jee-advanced-home-2026"
  ],
  "sourceNote": "Official marking rules come from NTA (JEE Main, NEET), UPSC (NDA) and the JEE (Advanced) organising institute. Coaching websites are never used as authority for marking schemes.",
  "seo": {
    "title": "10 Free JEE, NEET & NDA Calculators & Study Tools | Rank Sarthi",
    "description": "Use Rank Sarthi's free score, negative-marking, accuracy, target-score, study-time and question-target calculators for JEE, NEET and NDA preparation."
  }
};
