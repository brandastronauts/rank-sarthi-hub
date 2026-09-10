import type { ChapterContent } from "@/content/types";

/**
 * Surface Chemistry: Adsorption, Colloids and Current NEET UG 2026 Status — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistrySurfaceChemistry: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Surface Chemistry: Adsorption, Colloids and Current NEET UG 2026 Status",
  "slug": "surface-chemistry",
  "url": "/neet/chemistry/surface-chemistry",
  "canonicalIntent": "Keep Surface Chemistry as contextual foundation while accurately noting the narrow practical-chemistry overlap involving sols.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Surface Chemistry is not explicitly listed as a standalone NEET UG 2026 Chemistry unit. However, current Unit 20 Practical Chemistry includes preparation of lyophilic and lyophobic sols. This page can explain foundation concepts but must not claim the full historical Surface Chemistry chapter is currently examinable."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Historical / not currently listed in NEET UG 2026 (HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_UNIT20_PRACTICAL_OVERLAP). Official relationship: No standalone Surface Chemistry unit; Unit 20 Practical Chemistry includes preparation of lyophilic and lyophobic sols."
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
      "Adsorption foundation",
      "Colloids and sols",
      "Practical handoff"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "surface-chemistry-c1",
      "title": "1. Scope truth",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The current official syllabus has no standalone Surface Chemistry unit. Unit 20 does explicitly mention preparation of lyophilic and lyophobic sols. Therefore the route is contextual with a narrow current practical overlap."
            }
          ]
        }
      ]
    },
    {
      "id": "surface-chemistry-c2",
      "title": "2. Adsorption foundation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Adsorption is accumulation at a surface/interface, distinct from absorption into the bulk. If physisorption and chemisorption are taught, use broad contrasts such as intermolecular-force-dominated vs chemical-bond involvement, reversibility tendencies and specificity, without pretending the full historical chapter is current."
            }
          ]
        }
      ]
    },
    {
      "id": "surface-chemistry-c3",
      "title": "3. Colloids and sols",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A colloid contains a dispersed phase and dispersion medium at an intermediate scale. Lyophilic sols have strong affinity between dispersed phase and medium and are generally easier to form/re-form; lyophobic sols have weaker affinity and typically require special preparation/stabilisation. This conceptual distinction directly supports the current Unit 20 practical item."
            }
          ]
        }
      ]
    },
    {
      "id": "surface-chemistry-c4",
      "title": "4. Practical handoff",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The actual current-syllabus checklist and any experiment-specific preparation should be owned by /neet/syllabus/chemistry or the Chemistry hub (C01), not by this historical route. C02 should provide a link/data delta only."
            }
          ]
        }
      ]
    },
    {
      "id": "surface-chemistry-c5",
      "title": "5. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "No chemical reaction is necessary for the core page. Practical preparation procedures should not be invented here; use current Unit 20 source-controlled data."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "surface-chemistry-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Surface vs Bulk + Sol Classification Card with a visible banner: Standalone route not currently listed; Unit 20 sol-preparation overlap exists."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "surface-chemistry-m1",
      "mistake": "Confuses adsorption and absorption",
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
              "text": "Ask whether accumulation is surface or bulk."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "surface-chemistry-m2",
      "mistake": "Treats all colloids as lyophilic",
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
              "text": "Classify affinity to medium."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "surface-chemistry-m3",
      "mistake": "Turns practical sol overlap into full current Surface Chemistry chapter",
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
              "text": "Limit current claim to the exact Unit 20 item."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "surface-chemistry-m4",
      "mistake": "Adds historical formulas as current",
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
              "text": "Remove exam framing unless official source supports it."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "relatedChapters": [
    {
      "label": "NEET Organic Chemistry",
      "url": "/neet/chemistry/organic-chemistry",
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
    "title": "Surface Chemistry: Adsorption, Colloids and NEET 2026 Status | Rank Sarthi",
    "description": "See the current NEET UG 2026 status of Surface Chemistry, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogTitle": "Surface Chemistry: Adsorption, Colloids and NEET 2026 Status | Rank Sarthi",
    "ogDescription": "See the current NEET UG 2026 status of Surface Chemistry, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "surface-chemistry-w1",
      "prompt": "A syllabus line asks about preparation of lyophilic and lyophobic sols. Does that make adsorption isotherms automatically current too?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: A syllabus line asks about preparation of lyophilic and lyophobic sols. Does that make adsorption isotherms automatically current too?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: No. Current scope must follow the exact official wording."
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
              "text": "No. Status: HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_UNIT20_PRACTICAL_OVERLAP."
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
