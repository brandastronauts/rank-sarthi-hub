import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsJeeAdvancedScoreCalculator: InfoPageContent = {
  "url": "/tools/jee-advanced-score-calculator",
  "platform": "main",
  "slug": "jee-advanced-score-calculator",
  "exam": "JEE Advanced",
  "contentStatus": "draft",
  "title": "JEE Advanced Score Calculator",
  "eyebrow": "Interactive tool",
  "intent": "Enter your paper's printed marking rules section by section and get the combined score",
  "chips": [
    "Paper 1 and Paper 2",
    "Your own section rules",
    "Partial credit optional",
    "No rank prediction"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "JEE Advanced marking can vary by question type and paper. This calculator lets students enter the exact scoring rules printed for each section of their paper and calculates the combined score."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "No rank, All India Rank, IIT allotment or cutoff probability is produced. Rank Sarthi does not publish a permanent JEE Advanced marking preset, because the official instructions define marking per paper and question type."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Configure your sections and calculate",
      "tool": "jee-advanced-score-calculator",
      "intro": "Add one block per section, enter that section's marking rules from your paper instructions, then enter your response counts. Every section's counts must equal its question count."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the JEE Advanced Score Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "Section formula",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Each section is scored on its own rules: sectionScore = (fullCorrectCount × fullCorrectMarks) + (partialACount × partialAMarks) + (partialBCount × partialBMarks) + (partialCCount × partialCMarks) − (wrongCount × wrongPenalty) + (unattemptedCount × unattemptedMarks)."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Paper scores are the sum of that paper's sections, and the combined score is Paper 1 plus Paper 2."
                }
              ]
            }
          ],
          "keyIdea": "Partial credit is switched off by default. Turn it on only when your paper prints partial marks, and enter those marks yourself."
        },
        {
          "id": "validation",
          "title": "Validation",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "For every section, full correct, partial, wrong and unattempted counts must add up to that section's question count. A mismatch is reported and no score is produced for the paper until it is fixed."
                }
              ]
            }
          ]
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
          "title": "Five steps",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "1. Open the instruction page of the paper you are calculating."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Add a section block for each marking scheme in the paper and name it as the paper does."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. Enter the question count, full correct marks, wrong-answer penalty and unattempted marks exactly as printed."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "4. Switch on partial credit only if the section grants it, and enter the partial values."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "5. Enter your response counts for each section and read the paper and combined totals."
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
          "title": "One section with a +4 / −2 rule",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Suppose a section has 6 questions, +4 for a fully correct answer, −2 for a wrong answer and 0 for unattempted, with partial credit switched off. With 3 fully correct, 2 wrong and 1 unattempted, the section score is (3 × 4) − (2 × 2) = 12 − 4 = 8."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "If a second section on the other paper is configured the same way and scores 4, the combined score displayed is 12, split as Paper 1 and Paper 2 in the result panel."
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
                  "text": "The combined score is the arithmetic total of the rules you entered. Its accuracy depends entirely on those rules matching your paper's instructions."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Subject and section breakdowns show where the marks came from, including how much came from partial credit and how much was lost to penalties. None of it implies a rank or a qualifying position."
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
                  "text": "It assumes you copy the marking scheme from the official JEE (Advanced) instructions for your paper. It assumes each section applies one rule uniformly to its questions."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "It does not assume any permanent marking pattern for JEE Advanced, and it deliberately ships without a preset."
                }
              ]
            }
          ],
          "keyIdea": "Verify your rules against the official JEE (Advanced) information brochure and the instruction page of the paper itself."
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
          "url": "/jee/jee-main",
          "label": "JEE Main",
          "type": "Exam Information"
        },
        {
          "url": "/jee/exam-dates",
          "label": "JEE exam dates",
          "type": "Exam Information"
        },
        {
          "url": "/jee/previous-year-papers",
          "label": "JEE previous-year papers",
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
          "url": "/tools/jee-main-score-calculator",
          "label": "JEE Main Score Calculator",
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
    "title": "JEE Advanced Score Calculator: Section-Wise Marks | Rank Sarthi",
    "description": "Enter the marking rules printed for each section of your JEE Advanced paper and calculate Paper 1, Paper 2 and combined marks, including optional partial credit."
  },
  "sourceRefs": [
    "jee-advanced-home-2026",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive"
  ],
  "sourceNote": "Marking rules must come from the official JEE (Advanced) brochure and the printed instructions of the paper you are calculating."
};
