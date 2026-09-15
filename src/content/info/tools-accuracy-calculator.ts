import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsAccuracyCalculator: InfoPageContent = {
  "url": "/tools/accuracy-calculator",
  "platform": "main",
  "slug": "accuracy-calculator",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Exam Accuracy Calculator",
  "eyebrow": "Interactive tool",
  "intent": "Convert a mock-test attempt into accuracy, attempt rate and error rate",
  "chips": [
    "Works for any test",
    "Ratios only",
    "No exam rules needed"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Enter the total questions in your test, how many you attempted and how many were correct. The calculator returns your accuracy on attempted questions along with attempt rate, error rate and overall correct rate."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "These are ratios calculated from your own counts. They are not a score, a rank or an assessment of your preparation."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate your accuracy",
      "tool": "accuracy-calculator",
      "intro": "Whole numbers only. Correct answers cannot exceed attempted questions, and attempted cannot exceed the total."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the Accuracy Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formulas",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Wrong answers are attempted minus correct, and unattempted questions are total minus attempted."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Accuracy is (correct ÷ attempted) × 100, error rate is (wrong ÷ attempted) × 100, attempt rate is (attempted ÷ total) × 100 and overall correct rate is (correct ÷ total) × 100."
                }
              ]
            }
          ],
          "keyIdea": "With zero attempts, accuracy and error rate are reported as 0% rather than dividing by zero."
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
          "title": "Three steps",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "1. Enter the number of questions in the paper."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Enter how many you attempted, then how many of those were correct."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. Read accuracy first, then compare it with attempt rate to see the shape of the attempt."
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
          "title": "75 questions, 65 attempted, 50 correct",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Wrong answers are 65 − 50 = 15 and unattempted questions are 75 − 65 = 10. Accuracy is 50 ÷ 65 = 76.92%, attempt rate is 65 ÷ 75 = 86.67%, error rate is 23.08% and overall correct rate is 66.67%."
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
                  "text": "Accuracy describes only the questions you chose to attempt, while overall correct rate describes the whole paper. The two differ whenever you leave questions blank."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A high accuracy with a low attempt rate and a lower accuracy with a high attempt rate are simply different arithmetic profiles of the same paper. This page does not interpret them for you."
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
                  "text": "It assumes every attempted question is either correct or wrong, and that your counts are whole numbers taken from a marked paper or an answer key. It uses no exam-specific marking rule, so it works for any test."
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
          "url": "/neet",
          "label": "NEET home",
          "type": "Exam Hub"
        },
        {
          "url": "/nda",
          "label": "NDA home",
          "type": "Exam Hub"
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
          "url": "/tools/negative-marking-calculator",
          "label": "Negative Marking Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/jee-main-score-calculator",
          "label": "JEE Main Score Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/correct-answers-needed-calculator",
          "label": "Correct Answers Needed Calculator",
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
    "title": "Accuracy Calculator for Mock Tests & Exams | Rank Sarthi",
    "description": "Calculate accuracy, attempt rate, error rate and overall correct rate from any mock test using your total, attempted and correct question counts."
  }
};
