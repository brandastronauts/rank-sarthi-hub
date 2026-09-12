import type { InfoPageContent } from "../types";

/**
 * Transcribed from the accepted Rank Sarthi Final Main / Core Buildable
 * Production Package (production date 13 September 2026). Data only.
 */
export const mainHowItWorks: InfoPageContent = {
  "url": "/how-it-works",
  "platform": "main",
  "slug": "how-it-works",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "How Rank Sarthi Works: From Attempt Evidence to the Next Priority",
  "eyebrow": "Methodology",
  "intent": "See how Preparation Intelligence turns one attempt into a prioritised repair plan.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Preparation Intelligence is a decision framework: collect evidence from an attempt, classify why marks were lost, prioritise the next repair, then test whether the repair worked."
        }
      ]
    },
    {
      "type": "note",
      "tone": "caution",
      "children": [
        {
          "text": "This page explains the method only. It does not claim that an automated diagnostic product is currently operational."
        }
      ]
    }
  ],
  "chips": [
    "Method explained",
    "Product automation not live"
  ],
  "blocks": [
    {
      "kind": "prose",
      "id": "the-four-steps",
      "heading": "The four steps",
      "concepts": [
        {
          "id": "step-1",
          "title": "Step 1. Attempt and evidence",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Start from something observable: a mock, practice set, solved paper, revision check or another reviewed attempt record. Preserve question identity, answer state and the student's reasoning evidence where available."
                }
              ]
            }
          ]
        },
        {
          "id": "step-2",
          "title": "Step 2. Diagnose",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "PI v1.1 uses a manual control taxonomy:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Knowledge Gap: the required concept, fact, formula, relationship or method is not sufficiently known."
                  }
                ],
                [
                  {
                    "text": "Recall Gap: the learner has learned the material but cannot reliably retrieve it when needed."
                  }
                ],
                [
                  {
                    "text": "Execution Error: the intended method is appropriate but arithmetic, algebra, units, signs, transcription, reaction handling or procedural execution fails."
                  }
                ],
                [
                  {
                    "text": "Decision or Selection Error: the learner chooses the wrong method, question order, level of effort, assumption or attempt decision."
                  }
                ],
                [
                  {
                    "text": "Needs Review: evidence is insufficient or ambiguous, so the error is not forced into another category."
                  }
                ]
              ]
            }
          ]
        },
        {
          "id": "step-3",
          "title": "Step 3. Prioritise",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Do not treat every error equally. Prioritise by repeatability, prerequisite impact, severity, time-to-fix and the student's next exam or revision need. The exact automated scoring logic is not invented while the product is not operational."
                }
              ]
            }
          ]
        },
        {
          "id": "step-4",
          "title": "Step 4. Improve and re-test",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Apply the repair, then test the same underlying concept or decision pattern again. Improvement is evidence of changed performance, not completion of a checklist."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "what-is-not-live-here",
      "heading": "What is not live here",
      "concepts": [
        {
          "id": "not-live-intro",
          "title": "What is not live here",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "This page does not provide a working AI diagnosis, mock engine, predictor or personalised recommendation engine. Links to those products stay hidden until they work end to end."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The methodology is real and explainable. Product automation remains a separate verification gate."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "links",
      "id": "apply-the-method",
      "heading": "Apply the method on a real route",
      "items": [
        {
          "url": "/resources",
          "label": "Study resources",
          "type": "Hub"
        },
        {
          "url": "/jee",
          "label": "JEE preparation",
          "type": "Exam"
        },
        {
          "url": "/neet",
          "label": "NEET preparation",
          "type": "Exam"
        },
        {
          "url": "/nda",
          "label": "NDA preparation",
          "type": "Exam"
        }
      ]
    }
  ],
  "relatedLinks": [
    {
      "label": "Rank Sarthi home",
      "url": "/",
      "relation": "up"
    },
    {
      "label": "About Rank Sarthi",
      "url": "/about",
      "relation": "related"
    },
    {
      "label": "Study resources",
      "url": "/resources",
      "relation": "related"
    }
  ],
  "sourceNote": "Destinations resolve against the frozen Rank Sarthi route registry, so planned and blocked routes never appear as links.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible",
    "Reviewer requirement: PI methodology owner"
  ],
  "lastVerified": "13 September 2026",
  "seo": {
    "title": "How Rank Sarthi Works: Preparation Intelligence Method | Rank Sarthi",
    "description": "See Rank Sarthi's evidence-led Preparation Intelligence method: attempt, diagnose the error type, prioritise the next repair and re-test improvement.",
    "ogType": "website"
  }
};
