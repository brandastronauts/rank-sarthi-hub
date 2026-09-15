import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const ndaScoreCalculator: InfoPageContent = {
  "url": "/nda/score-calculator",
  "platform": "nda",
  "slug": "score-calculator",
  "exam": "NDA (UPSC)",
  "contentStatus": "draft",
  "title": "NDA Score Calculator: Mathematics & GAT Written Marks",
  "eyebrow": "Interactive tool",
  "intent": "Calculate the NDA written-examination score for Mathematics and GAT",
  "chips": [
    "Mathematics 300 marks",
    "GAT 600 marks",
    "Written score only"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The NDA written examination has two papers: Mathematics, with 120 questions worth 2.5 marks each, and the General Ability Test, with 150 questions worth 4 marks each. UPSC deducts one third of a question's marks for a wrong answer. Enter your response counts for each paper to calculate the written score out of 900."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "This calculates the written-examination score only. SSB interview marks are not included, and no rank, merit position or selection outcome is produced."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate your NDA written score",
      "tool": "nda-score-calculator",
      "intro": "Mathematics counts must add up to 120 and GAT counts to 150. Penalties are held at full precision internally and displayed to two decimal places."
    },
    {
      "kind": "table",
      "id": "structure",
      "heading": "Written examination structure and penalty",
      "columns": [
        "Paper",
        "Questions",
        "Marks per question",
        "Maximum marks",
        "Wrong-answer penalty"
      ],
      "rows": [
        [
          "Mathematics",
          "120",
          "2.5",
          "300",
          "2.5 ÷ 3 = 0.8333… (one third of the question's marks)"
        ],
        [
          "General Ability Test",
          "150",
          "4",
          "600",
          "4 ÷ 3 = 1.3333… (one third of the question's marks)"
        ],
        [
          "Written total",
          "270",
          "—",
          "900",
          "—"
        ]
      ],
      "note": "Configuration version NDA_2026. The approximate values 0.83 and 1.33 are shown for explanation only; the calculation itself uses the exact fractions."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the NDA Score Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formulas",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "mathScore = (correctMath × 2.5) − (wrongMath × (2.5 ÷ 3)), with unanswered questions scoring 0 and correctMath + wrongMath + unansweredMath = 120."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "gatScore = (correctGat × 4) − (wrongGat × (4 ÷ 3)), with correctGat + wrongGat + unansweredGat = 150. The written score is mathScore + gatScore, out of a maximum of 900."
                }
              ]
            }
          ],
          "keyIdea": "Penalties are never rounded inside the calculation. Only the displayed figures are rounded to two decimal places."
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
                  "text": "1. Enter your Mathematics correct, wrong and unanswered counts so they total 120."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Enter your GAT correct, wrong and unanswered counts so they total 150."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. Read each paper's marks and the combined written total, then copy or share the result."
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
          "title": "80 / 20 / 20 in Mathematics and 100 / 30 / 20 in GAT",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Mathematics: 80 × 2.5 = 200 positive marks, and 20 wrong answers cost 20 × 0.8333… = 16.666…, giving 183.33 as displayed."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "GAT: 100 × 4 = 400 positive marks, and 30 wrong answers cost 30 × 1.3333… = 40, giving 360. The written total displayed is 543.33."
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
                  "text": "The result is your written-examination marks out of 900 under the official penalty rule. It is not a merit position and it excludes the SSB interview stage entirely."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Because the penalty is a fraction, exact totals often carry recurring decimals. The calculator keeps that precision internally so repeated additions do not drift."
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
                  "text": "It assumes the current UPSC NDA written structure of 120 Mathematics questions at 2.5 marks and 150 GAT questions at 4 marks, with one third of the question's marks deducted for a wrong answer."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "It assumes your counts come from your own response sheet checked against the official answer key. Always confirm the structure and penalty in the UPSC notification for your examination cycle."
                }
              ]
            }
          ],
          "keyIdea": "Configuration version NDA_2026, verified against the UPSC NDA notification."
        }
      ]
    },
    {
      "kind": "links",
      "id": "resources",
      "heading": "Related Rank Sarthi Resources",
      "items": [
        {
          "url": "/nda",
          "label": "NDA home",
          "type": "Exam Hub"
        },
        {
          "url": "/nda/exam-dates",
          "label": "NDA exam dates",
          "type": "Exam Information"
        },
        {
          "url": "/nda/previous-year-papers",
          "label": "NDA previous-year papers",
          "type": "Official Resource"
        },
        {
          "url": "/nda/selection-process",
          "label": "NDA selection process",
          "type": "Exam Information"
        }
      ]
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
  "sourceRefs": [
    "upsc-nda-notification",
    "upsc-nda-exam-page"
  ],
  "sourceNote": "The written structure and the one-third wrong-answer penalty come from the official UPSC NDA notification. Coaching sites are not used as authority.",
  "seo": {
    "title": "NDA Score Calculator 2026: Maths & GAT Marks | Rank Sarthi",
    "description": "Calculate your UPSC NDA written exam score for Mathematics and GAT using correct, incorrect and unanswered responses."
  }
};
