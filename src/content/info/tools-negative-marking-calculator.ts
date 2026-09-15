import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsNegativeMarkingCalculator: InfoPageContent = {
  "url": "/tools/negative-marking-calculator",
  "platform": "main",
  "slug": "negative-marking-calculator",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Negative Marking Calculator",
  "eyebrow": "Interactive tool",
  "intent": "See exactly how many marks wrong answers cost you in any exam",
  "chips": [
    "JEE, NEET and NDA presets",
    "Custom marking scheme",
    "Marks only"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Enter how many questions you answered correctly and incorrectly, along with the marks per correct answer and the penalty per wrong answer. The calculator returns your score and the marks lost to negative marking."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "This is a marks calculation. It does not produce a rank, percentile or cutoff estimate."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate the cost of negative marking",
      "tool": "negative-marking-calculator",
      "intro": "Pick an exam preset or choose Custom and enter your own marks and penalty values."
    },
    {
      "kind": "table",
      "id": "presets",
      "heading": "Preset marking schemes",
      "columns": [
        "Preset",
        "Questions",
        "Marks per correct",
        "Penalty per wrong"
      ],
      "rows": [
        [
          "JEE Main Paper 1",
          "75",
          "4",
          "1"
        ],
        [
          "NEET (UG)",
          "180",
          "4",
          "1"
        ],
        [
          "NDA Mathematics",
          "120",
          "2.5",
          "2.5 ÷ 3 (one third of the question's marks)"
        ],
        [
          "NDA GAT",
          "150",
          "4",
          "4 ÷ 3 (one third of the question's marks)"
        ],
        [
          "Custom",
          "Your value",
          "Your value",
          "Your value"
        ]
      ],
      "note": "JEE Advanced is deliberately absent: its marking varies by paper and question type, so use the JEE Advanced Score Calculator instead."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the Negative Marking Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formula",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "positiveMarks = correct × P, negativeMarks = incorrect × N, and score = positiveMarks − negativeMarks, where P is marks per correct answer and N is the penalty per wrong answer."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Correct, incorrect and unattempted must add up to the total question count, so the calculator can also report accuracy and attempt rate."
                }
              ]
            }
          ],
          "keyIdea": "NDA penalties are held at full precision inside the calculation (2.5 ÷ 3 and 4 ÷ 3) and rounded only for display."
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
                  "text": "1. Choose the exam preset, or Custom for a scheme not listed."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Enter your correct, incorrect and unattempted counts so they add up to the total."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. Read the score and the marks-lost figure, then copy or share the result."
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
          "title": "50 correct and 10 wrong at +4 / −1",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Positive marks are 50 × 4 = 200 and negative marks are 10 × 1 = 10, so the score is 190. Ten wrong answers cost 10 marks directly, on top of the 40 marks not earned."
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
          "title": "What the number is",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The marks-lost figure is exactly the penalty arithmetic for the wrong answers you entered. It is not a judgement about guessing strategy, and Rank Sarthi does not claim an optimal number of attempts."
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
                  "text": "Presets follow the official rules published by NTA for JEE Main and NEET and by UPSC for NDA, versioned as JEE_MAIN_2026, NEET_UG_2026 and NDA_2026. For any other exam, use Custom and enter the rule printed in your own information bulletin."
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
          "url": "/tools/jee-main-score-calculator",
          "label": "JEE Main Score Calculator",
          "type": "Calculator"
        },
        {
          "url": "/neet/score-calculator",
          "label": "NEET Score Calculator",
          "type": "Calculator"
        },
        {
          "url": "/nda/score-calculator",
          "label": "NDA Score Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/accuracy-calculator",
          "label": "Exam Accuracy Calculator",
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
    "title": "Negative Marking Calculator for Competitive Exams | Rank Sarthi",
    "description": "Calculate your score and the marks lost to negative marking for JEE Main, NEET, NDA Mathematics, NDA GAT or any custom marking scheme."
  },
  "sourceRefs": [
    "nta-jee-main-bulletin-2026",
    "nta-neet-2026-bulletin",
    "upsc-nda-notification"
  ],
  "sourceNote": "Preset marking rules come from official NTA and UPSC documents only."
};
