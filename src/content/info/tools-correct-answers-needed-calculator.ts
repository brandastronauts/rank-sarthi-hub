import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsCorrectAnswersNeededCalculator: InfoPageContent = {
  "url": "/tools/correct-answers-needed-calculator",
  "platform": "main",
  "slug": "correct-answers-needed-calculator",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Correct Answers Needed Calculator",
  "eyebrow": "Interactive tool",
  "intent": "Work out how many of your planned attempts must be correct to hit a target",
  "chips": [
    "Planned attempts",
    "Required accuracy",
    "Marks only"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "If you already know how many questions you plan to attempt, enter that number with your target score. The calculator returns the minimum correct answers needed, the wrong answers you can afford within those attempts and the accuracy that implies."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "This is arithmetic on your own plan, not a rank, percentile or admission prediction."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate the correct answers you need",
      "tool": "correct-answers-needed-calculator",
      "intro": "Every attempted question counts as correct or wrong, so wrong answers are whatever is left over from your attempts."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the Correct Answers Needed Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formula",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Because wrong = A − C for A planned attempts, the score is P × C − N × (A − C), which rearranges to (P + N)C − NA."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Setting that equal to the target T and solving for C gives minimumCorrect = ceil((T + (N × A)) ÷ (P + N))."
                }
              ]
            }
          ],
          "keyIdea": "If the minimum correct exceeds your planned attempts, the target cannot be reached: increase attempted questions or change your target."
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
                  "text": "1. Choose the exam preset so the marking rule is filled in."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Enter your target score."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. Enter how many questions you plan to attempt."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "4. Read the minimum correct answers and the required accuracy."
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
          "title": "Target 200 from 60 attempts in JEE Main",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "With P = 4 and N = 1, the minimum correct is ceil((200 + (1 × 60)) ÷ 5) = ceil(260 ÷ 5) = 52. That leaves 8 wrong answers, and 52 × 4 − 8 = 200 exactly."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The required accuracy is 52 ÷ 60 = 86.67% within the attempts you planned."
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
                  "text": "The required accuracy applies only to the questions you plan to attempt, not to the whole paper. Attempting more questions lowers the accuracy needed but raises the exposure to negative marking, and the arithmetic shows both effects."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "How this differs from the Target Score Calculator: there you choose a number of wrong answers, here you fix the total attempts."
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
                  "text": "It assumes every attempted question receives either full marks or the full penalty, which holds for uniform +P / −N papers such as JEE Main, NEET and NDA, and not for JEE Advanced sections with partial credit."
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
          "url": "/tools/target-score-calculator",
          "label": "Target Score Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/accuracy-calculator",
          "label": "Exam Accuracy Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/negative-marking-calculator",
          "label": "Negative Marking Calculator",
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
    "title": "Correct Answers Needed for Target Marks Calculator | Rank Sarthi",
    "description": "Enter your target score and planned attempts to find the minimum correct answers, affordable wrong answers and required accuracy."
  }
};
