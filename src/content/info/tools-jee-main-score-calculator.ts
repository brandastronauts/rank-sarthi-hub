import type { InfoPageContent } from "../types";

/**
 * Deterministic calculator page. Every number the page produces comes from a
 * published formula applied to the visitor's own inputs — no rank, percentile,
 * cutoff or admission prediction anywhere.
 */
export const toolsJeeMainScoreCalculator: InfoPageContent = {
  "url": "/tools/jee-main-score-calculator",
  "platform": "main",
  "slug": "jee-main-score-calculator",
  "exam": "JEE Main",
  "contentStatus": "draft",
  "title": "JEE Main Score Calculator 2026",
  "eyebrow": "Interactive tool",
  "intent": "Turn your JEE Main Paper 1 answer counts into raw marks out of 300",
  "chips": [
    "75 questions",
    "300 marks",
    "+4 / −1",
    "No rank prediction"
  ],
  "lastVerified": "15 September 2026",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "JEE Main Paper 1 currently awards +4 for a correct response, −1 for an incorrect response and 0 for an unanswered question. Enter your responses below to calculate your raw marks."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "This calculator produces marks only. It does not estimate percentile, rank, expected cutoff or college allotment."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "tool",
      "id": "calculator",
      "heading": "Calculate your JEE Main marks",
      "tool": "jee-main-score-calculator",
      "intro": "Use quick mode for paper totals, or switch to subject mode for Physics, Chemistry and Mathematics separately. Counts must add up to 75 in full-paper mode."
    },
    {
      "kind": "table",
      "id": "marking-rule",
      "heading": "Paper 1 structure and marking",
      "columns": [
        "Item",
        "Value",
        "Applies to"
      ],
      "rows": [
        [
          "Subjects",
          "Physics, Chemistry, Mathematics",
          "Paper 1 (B.E./B.Tech)"
        ],
        [
          "Questions",
          "75 in total, 25 per subject",
          "Paper 1"
        ],
        [
          "Maximum marks",
          "300",
          "Paper 1"
        ],
        [
          "Correct response",
          "+4",
          "MCQs and numerical value questions alike"
        ],
        [
          "Incorrect response",
          "−1",
          "MCQs and numerical value questions alike"
        ],
        [
          "Unanswered",
          "0",
          "Questions left blank"
        ]
      ],
      "note": "Configuration version JEE_MAIN_2026, verified against the NTA JEE (Main) 2026 Information Bulletin."
    },
    {
      "kind": "prose",
      "id": "how-it-works",
      "heading": "How the JEE Main Score Calculator Works",
      "concepts": [
        {
          "id": "formula",
          "title": "The formula",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Your raw score is the marks earned on correct responses minus one mark for each incorrect response: score = (correct × 4) − incorrect. Unanswered questions contribute nothing at all, so leaving a question blank is neutral in the arithmetic."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "If the final answer key drops a question or awards it to every candidate, those questions are added at the full +4 each: score = (correct × 4) − incorrect + (officialBonusQuestions × 4)."
                }
              ]
            }
          ],
          "keyIdea": "A dropped or bonus question is still one of the original 75 questions, so in full-paper mode correct + incorrect + unattempted + bonus must equal 75."
        },
        {
          "id": "modes",
          "title": "Quick mode and subject mode",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Quick mode takes three whole numbers for the whole paper. Subject mode takes the same three counts for Physics, Chemistry and Mathematics, each capped at 25 questions, and reports each subject's marks alongside the paper total."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Both modes use the same arithmetic, so the two never disagree for the same set of responses."
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
          "title": "Four steps",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "1. Count your correct responses against the official final answer key, not a coaching key."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "2. Enter incorrect and unanswered counts so that all responses add up to 75."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "3. If the final key dropped a question or granted it to all candidates, enter that count in the official dropped or bonus field."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "4. Read the score, then use Copy Result or Share Result to keep a record."
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
          "title": "60 correct, 10 incorrect, 5 unanswered",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Positive marks are 60 × 4 = 240. Negative marks are 10 × 1 = 10. The score is 240 − 10 = 230 out of 300, with 70 questions attempted out of 75."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Accuracy on attempted questions is 60 ÷ 70 = 85.71%, and the attempt rate is 70 ÷ 75 = 93.33%. A second tested case: 50 correct, 15 incorrect and 10 unanswered gives 200 − 15 = 185."
                }
              ]
            }
          ],
          "keyIdea": "An invalid entry such as 70 correct with 10 incorrect and 0 unanswered totals 80 responses and is rejected, not silently trimmed to 75."
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
                  "text": "The result is your raw marks out of 300 under the marking rule you selected. It is an arithmetic total, nothing more."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Percentile and rank are produced by the National Testing Agency from the marks of every candidate in your shift and session after normalisation. Nothing on this page can approximate that, and Rank Sarthi does not publish an estimate of it."
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
                  "text": "It assumes Paper 1 (B.E./B.Tech) with 75 questions, 25 per subject, and the +4 / −1 / 0 rule described in the NTA JEE (Main) 2026 Information Bulletin. Paper 2 drawing sections are not covered."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "It assumes your counts come from the official final answer key. Bonus handling assumes the key granted the question to every candidate; if the key states different treatment, use the rule printed there instead."
                }
              ]
            }
          ],
          "keyIdea": "Configuration version JEE_MAIN_2026 — the rule set is versioned so a later cycle can be added without rewriting the calculator."
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
          "url": "/tools/negative-marking-calculator",
          "label": "Negative Marking Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/target-score-calculator",
          "label": "Target Score Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/correct-answers-needed-calculator",
          "label": "Correct Answers Needed Calculator",
          "type": "Calculator"
        },
        {
          "url": "/tools/jee-advanced-score-calculator",
          "label": "JEE Advanced Score Calculator",
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
    "title": "JEE Main Score Calculator 2026: Calculate Marks | Rank Sarthi",
    "description": "Calculate your JEE Main 2026 Paper 1 score from correct, incorrect and unattempted answers using the current +4/-1 marking scheme."
  },
  "sourceRefs": [
    "nta-jee-main-bulletin-2026",
    "nta-jee-main-home"
  ],
  "sourceNote": "Marking rules are taken from the official NTA JEE (Main) information bulletin. Coaching websites are not used as authority for marking schemes."
};
