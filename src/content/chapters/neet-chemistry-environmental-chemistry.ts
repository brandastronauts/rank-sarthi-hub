import type { ChapterContent } from "@/content/types";

/**
 * Environmental Chemistry: Foundation Concepts and Current NEET UG 2026 Status — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryEnvironmentalChemistry: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Environmental Chemistry: Foundation Concepts and Current NEET UG 2026 Status",
  "slug": "environmental-chemistry",
  "url": "/neet/chemistry/environmental-chemistry",
  "canonicalIntent": "Preserve environmental-chemistry context while restricting current NEET claims to the explicitly named Unit 16 environmental effects.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Environmental Chemistry is not explicitly listed as a standalone NEET UG 2026 Chemistry unit. Current Unit 16 does explicitly mention environmental effects of chloroform, iodoform, freons and DDT. This route should therefore be contextual, with any current claim limited to that verified overlap."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Historical / not currently listed in NEET UG 2026 (HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_UNIT16_OVERLAP). Official relationship: No standalone Environmental Chemistry unit; Unit 16 includes environmental effects of chloroform, iodoform, freons and DDT."
        }
      ]
    }
  ],
  "heroChips": [
    "Historical / not currently listed in NEET UG 2026",
    "Draft: pending human academic review",
    "No weightage, question counts or trend claims"
  ],
  "prerequisites": [
    {
      "label": "NEET Chemistry",
      "url": "/neet/chemistry",
      "relation": "up"
    },
    {
      "label": "NEET Chemistry syllabus",
      "url": "/neet/syllabus/chemistry",
      "relation": "up"
    }
  ],
  "syllabusMapping": {
    "unit": "Historical / not currently listed in NEET UG 2026",
    "topics": [
      "Scope truth",
      "Foundation model",
      "Current overlap"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "environmental-chemistry-c1",
      "title": "1. Scope truth",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The old standalone Environmental Chemistry chapter is not in the verified 2026 20-unit Chemistry list. Do not convert general environmental knowledge into exam relevance."
            }
          ]
        }
      ]
    },
    {
      "id": "environmental-chemistry-c2",
      "title": "2. Foundation model",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use chemical/source -> environmental medium -> transformation/persistence -> effect -> control context."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Examples may include greenhouse gases, ozone-depleting substances, particulate/acidic pollutants or water contaminants only as foundation and only with reliable source support. Avoid political or policy claims unrelated to Chemistry preparation."
            }
          ]
        }
      ]
    },
    {
      "id": "environmental-chemistry-c3",
      "title": "3. Current overlap",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit 16 explicitly names environmental effects of chloroform, iodoform, freons and DDT. Their exam-scope explanation belongs primarily on Haloalkanes/Haloarenes. This contextual page can provide a broader concept link but should not duplicate the current page or claim that all environmental chemistry topics are current."
            }
          ]
        }
      ]
    },
    {
      "id": "environmental-chemistry-c4",
      "title": "4. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "No broad atmospheric reaction mechanism set should be added unless individually verified and needed. Current Unit 16 compound effects can be linked rather than duplicated."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "environmental-chemistry-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Scope-tagged Environmental Concept Map where every card is labelled CURRENT UNIT 16 OVERLAP or CONTEXTUAL FOUNDATION."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "environmental-chemistry-m1",
      "mistake": "Calls all pollution topics current NEET Chemistry",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Decision / Selection Error."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Check official 2026 wording."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "environmental-chemistry-m2",
      "mistake": "Confuses persistence with immediate toxicity",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Knowledge Gap."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Separate chemical persistence, exposure and effect concepts."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "environmental-chemistry-m3",
      "mistake": "Duplicates Unit 16 named-compound content verbatim",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Execution Error."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use a handoff link instead."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "environmental-chemistry-m4",
      "mistake": "Uses unsourced environmental claims",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Needs Review."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Require authoritative chemistry/environment source."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "relatedChapters": [
    {
      "label": "Haloalkanes Haloarenes",
      "url": "/neet/chemistry/haloalkanes-haloarenes",
      "relation": "related"
    }
  ],
  "sources": [
    "ncert-chemistry-11-contents",
    "ncert-chemistry-12-contents",
    "ncert-exemplar-index",
    "nmc-neet-ug-2026-syllabus"
  ],
  "sourceNote": "Official scope is taken from the NEET (UG) 2026 syllabus and official NTA/NMC documents; concept structure follows current NCERT contents. No performance, weightage or question-frequency data is asserted.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible"
  ],
  "contentStatus": "draft",
  "meta": {
    "title": "Environmental Chemistry: Foundation Concepts and NEET 2026 Sta | Rank Sarthi",
    "description": "See the current NEET UG 2026 status of Environmental Chemistry, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogTitle": "Environmental Chemistry: Foundation Concepts and NEET 2026 Sta | Rank Sarthi",
    "ogDescription": "See the current NEET UG 2026 status of Environmental Chemistry, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "environmental-chemistry-w1",
      "prompt": "Freons are named under current Unit 16 environmental effects. Does that make the whole historical Environmental Chemistry chapter current?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: Freons are named under current Unit 16 environmental effects. Does that make the whole historical Environmental Chemistry chapter current?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: No; only the explicitly verified overlap can carry current-scope language."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original Rank Sarthi reasoning item. It is not a past-year question and carries no exam provenance."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is this a standalone current NEET UG 2026 Chemistry unit?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Status: HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_UNIT16_OVERLAP."
            }
          ]
        }
      ]
    },
    {
      "question": "Does this page publish official weightage or expected-question counts?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It uses verified scope and chemistry reasoning, not fabricated performance data."
            }
          ]
        }
      ]
    },
    {
      "question": "What should a student do when a reaction claim depends on conditions?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Read the substrate, reagent, medium/catalyst and temperature together before predicting the pathway or product."
            }
          ]
        }
      ]
    }
  ]
};
