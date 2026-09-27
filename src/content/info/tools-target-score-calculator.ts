import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsTargetScoreCalculator: InfoPageContent = {
  "url": "/tools/target-score-calculator",
  "platform": "main",
  "slug": "target-score-calculator",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Target Score Calculator",
  "eyebrow": "Interactive tool",
  "intent": "Find the correct and wrong answer combinations that reach a marks target",
  "chips": [
    "JEE, NEET and NDA presets",
    "Scenario table",
    "Marks only"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Enter the score you are aiming for and the marking scheme. The calculator returns the minimum correct answers needed with no wrong answers, the largest number of wrong answers that still works, and a table of feasible combinations."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "Reaching a marks target is arithmetic. It is not a rank, a percentile or an admission outcome."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate the combinations that reach your target",
      "tool": "target-score-calculator",
      "intro": "Choose a preset or enter your own marks and penalty values. A target above the theoretical maximum is rejected."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the Target Score Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formulas",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "With no wrong answers, the minimum correct answers needed is ceil(T ÷ P), where T is the target and P is the marks per correct answer."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "For any chosen number of wrong answers W, the minimum correct needed becomes ceil((T + (N × W)) ÷ P), where N is the penalty per wrong answer. A combination only counts if minimumCorrect + W fits inside the total question count Q."
                }
              ]
            }
          ],
          "keyIdea": "The largest feasible W is found by testing each value of W from 0 upwards, not by a shortcut assumption."
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
                  "text": "1. Pick the exam preset so the question count and marking rule are filled in."
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
                  "text": "3. Read the zero-wrong minimum and the maximum feasible wrong answers."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "4. Use the scenario table to see how the correct count rises as wrong answers rise."
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
          "title": "Target 200 in JEE Main Paper 1",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "With 75 questions at +4 and −1, zero wrong answers need ceil(200 ÷ 4) = 50 correct. With 4 wrong answers you need 51 correct, because 51 × 4 − 4 = 200."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "With 20 wrong answers you need 55 correct, and 55 + 20 = 75 exactly fills the paper. With 21 wrong answers you would need 56 correct, and 56 + 21 = 77 does not fit, so the maximum feasible wrong count is 20."
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
                  "text": "Each row of the table is the least number of correct answers that reaches your target for that number of wrong answers. Doing better than a row is always possible; doing worse misses the target."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The maximum feasible wrong count is a arithmetic limit imposed by the paper size, not a recommendation about how much to guess."
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
                  "text": "It assumes one uniform marking rule across the paper, which is true for the JEE Main, NEET and NDA presets but not for JEE Advanced. It assumes whole-number question counts and rounds correct answers up, because part of a question cannot be answered."
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
          "url": "/tools/correct-answers-needed-calculator",
          "label": "Correct Answers Needed Calculator",
          "type": "Calculator"
        },
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
          "url": "/tools",
          "label": "All free calculators and tools",
          "type": "Tool Hub"
        }
      ]
    }
  ],
  "seo": {
    "title": "Target Score Calculator: Correct & Wrong Answer Combinations | Rank Sarthi",
    "description": "Find how many correct answers you need for a target score in JEE, NEET or NDA, and the maximum wrong answers that still reach it."
  },
  "sourceRefs": [
    "nta-jee-main-bulletin-2026",
    "nta-neet-2026-bulletin",
    "upsc-nda-notification"
  ],
  "sourceNote": "Preset question counts and marking rules come from official NTA and UPSC documents."
};
