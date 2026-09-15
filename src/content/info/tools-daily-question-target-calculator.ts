import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsDailyQuestionTargetCalculator: InfoPageContent = {
  "url": "/tools/daily-question-target-calculator",
  "platform": "main",
  "slug": "daily-question-target-calculator",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Daily Question Target Calculator",
  "eyebrow": "Interactive tool",
  "intent": "Turn a question goal and a deadline into a daily practice number",
  "chips": [
    "Rest days supported",
    "Milestones",
    "Plain division"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Enter the total questions you want to finish, how many you have already done, the days you have and any rest days you plan. The calculator returns the questions per active day needed to finish on time."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "This is division, not study advice. A question count does not guarantee any outcome."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate your daily question target",
      "tool": "daily-question-target-calculator",
      "intro": "Whole numbers only. Completed questions cannot exceed the goal, and rest days must be fewer than the days available."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the Daily Question Target Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formulas",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "remaining = max(goal − completed, 0), activeDays = daysAvailable − restDays, and dailyTarget = ceil(remaining ÷ activeDays)."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The weekly equivalent is dailyTarget × 7, and completion so far is (completed ÷ goal) × 100. Milestones report the question counts at 25%, 50%, 75% and 100% of the goal."
                }
              ]
            }
          ],
          "keyIdea": "The daily target is rounded up, because finishing a fraction of a question does not count."
        }
      ]
    },
    {
      "kind": "prose",
      "id": "how-to-use",
      "heading": "How to Use the Calculator",
      "concepts": [
        {
          "id": "steps",
          "title": "Four steps",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "1. Enter the total question goal you have set for yourself."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Enter how many you have already completed."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. Enter the days available and the rest days you intend to take."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "4. Read the questions per active day and check the milestone table."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "worked-example",
      "heading": "Worked Example",
      "concepts": [
        {
          "id": "example",
          "title": "1,000 questions with 200 done in 20 days",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Remaining questions are 1,000 − 200 = 800. With 4 rest days, the active days are 20 − 4 = 16, so the daily target is 800 ÷ 16 = 50 questions per active day, or 350 a week."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Completion so far is 200 ÷ 1,000 = 20%, and the 50% milestone is 500 questions."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "understanding",
      "heading": "Understanding Your Result",
      "concepts": [
        {
          "id": "meaning",
          "title": "What the numbers mean",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The daily target is the pace your own goal and deadline imply. Rank Sarthi does not claim that this number is the right amount of practice for you."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Once the goal is already met, the remaining count is zero and the daily target is zero rather than a negative number."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "assumptions",
      "heading": "Important Assumptions",
      "concepts": [
        {
          "id": "assumptions",
          "title": "What this calculator assumes",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "It assumes every active day carries the same load and that all questions count equally, regardless of difficulty or subject. Rest days are removed before the division, so the target rises as rest days rise."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "links",
      "id": "resources",
      "heading": "Related Rank Sarthi Resources",
      "items": [
        {
          "url": "/jee/previous-year-papers",
          "label": "JEE previous-year papers",
          "type": "Official Resource"
        },
        {
          "url": "/neet/previous-year-papers",
          "label": "NEET previous-year papers",
          "type": "Official Resource"
        },
        {
          "url": "/nda/previous-year-papers",
          "label": "NDA previous-year papers",
          "type": "Official Resource"
        }
      ],
      "intro": "Built Rank Sarthi pages that go with this calculation."
    },
    {
      "kind": "links",
      "id": "related-calculators",
      "heading": "Related Calculators",
      "items": [
        {
          "url": "/tools/study-time-calculator",
          "label": "Study Time Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/accuracy-calculator",
          "label": "Exam Accuracy Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/target-score-calculator",
          "label": "Target Score Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools",
          "label": "All free calculators and tools",
          "type": "Tool Hub"
        }
      ]
    }
  ],
  "seo": {
    "title": "Daily Question Target Calculator for JEE, NEET & NDA | Rank Sarthi",
    "description": "Turn a total question goal, your progress, the days available and planned rest days into a daily and weekly practice target."
  }
};
