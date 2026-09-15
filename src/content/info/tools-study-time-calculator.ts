import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsStudyTimeCalculator: InfoPageContent = {
  "url": "/tools/study-time-calculator",
  "platform": "main",
  "slug": "study-time-calculator",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Study Time Calculator",
  "eyebrow": "Interactive tool",
  "intent": "Count the study hours that actually exist between today and your exam",
  "chips": [
    "Weekday and weekend hours",
    "Buffer days",
    "Optional subject split"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Enter your start date, your exam date and the hours you can study on weekdays and weekends. The calculator counts the days between them and returns the study hours you actually have."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "This is calendar and hour arithmetic. It does not recommend how to spend the time or how to divide it between subjects."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate your available study hours",
      "tool": "study-time-calculator",
      "intro": "The start date is counted as a study day and the exam date is excluded from study days, so the total reflects the days you can actually work."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the Study Time Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formulas",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Study days run from your start date up to, but not including, the exam date. Those days are split into weekdays (Monday to Friday) and weekend days (Saturday and Sunday)."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "plannedHours = (weekdayCount × weekdayHours) + (weekendCount × weekendHours). Buffer days are then removed at your own average rate: averageDailyHours = plannedHours ÷ studyDays, bufferHours = bufferDays × averageDailyHours, and effectiveHours = plannedHours − bufferHours, never below zero."
                }
              ]
            }
          ],
          "keyIdea": "Buffer days must be fewer than the study window, otherwise the calculation would leave no study days at all."
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
                  "text": "1. Set the start date and your exam date."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Enter realistic weekday and weekend study hours, not ideal ones."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. Add buffer days for travel, illness or slack if you want the total to allow for them."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "4. Optionally pick a 3 or 4 subject split to see the hours divided equally."
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
          "title": "A four-week run-up",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A window with 20 weekdays at 4 hours and 8 weekend days at 8 hours gives 80 + 64 = 144 planned hours across 28 study days, an average of about 5.14 hours a day."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Reserving 3 buffer days removes about 15.4 hours, leaving roughly 128.6 effective hours. Split equally across 3 subjects that is about 42.9 hours each."
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
                  "text": "Effective hours are the hours your own inputs imply, not a target set by Rank Sarthi. The subject split is a plain equal division of that total."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Average hours per week is the same total expressed weekly, useful when your exam date is months away rather than weeks."
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
                  "text": "It assumes weekends are Saturday and Sunday, that the start date is a study day and the exam date is not, and that buffer days are as productive on average as any other day. Public holidays are not detected — add them as buffer days if you want them excluded."
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
          "url": "/jee",
          "label": "JEE home",
          "type": "Exam Hub"
        },
        {
          "url": "/jee/exam-dates",
          "label": "JEE exam dates",
          "type": "Exam Information"
        },
        {
          "url": "/neet/exam-dates",
          "label": "NEET exam dates",
          "type": "Exam Information"
        },
        {
          "url": "/nda/exam-dates",
          "label": "NDA exam dates",
          "type": "Exam Information"
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
          "url": "/tools/daily-question-target-calculator",
          "label": "Daily Question Target Calculator",
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
    "title": "Study Time Calculator: Hours Available Before Your Exam | Rank Sarthi",
    "description": "Count the weekday, weekend and effective study hours between today and your exam date, with optional buffer days and an equal subject split."
  }
};
