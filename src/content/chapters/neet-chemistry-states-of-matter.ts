import type { ChapterContent } from "@/content/types";

/**
 * States of Matter: Gas and Intermolecular Foundations with Current NEET UG 2026 Status — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryStatesOfMatter: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "States of Matter: Gas and Intermolecular Foundations with Current NEET UG 2026 Status",
  "slug": "states-of-matter",
  "url": "/neet/chemistry/states-of-matter",
  "canonicalIntent": "Keep the route as contextual foundation for gas/liquid/solid ideas without mislabelling it as a current Chemistry unit.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "States of Matter is not explicitly listed as a standalone Chemistry unit in the verified NEET UG 2026 syllabus. Some related ideas remain distributed elsewhere, such as physical equilibria in Chemistry Unit 6 and gas kinetic theory in Physics Unit 9. This route must remain contextual."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Historical / not currently listed in NEET UG 2026 (HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_PHYSICAL_CHEMISTRY_OVERLAP). Official relationship: No standalone States of Matter unit; current Equilibrium includes physical equilibria and Physics has Kinetic Theory of Gases."
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
      "Current status and distributed overlap",
      "Foundation",
      "Handoffs"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "states-of-matter-c1",
      "title": "1. Current status and distributed overlap",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "There is no standalone Chemistry States of Matter unit in the verified 20-unit Chemistry list. Related concepts should be routed to their actual current owners rather than used to imply this page is current."
            }
          ]
        }
      ]
    },
    {
      "id": "states-of-matter-c2",
      "title": "2. Foundation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For an ideal-gas model:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PV = nRT."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At constant temperature for a fixed amount of ideal gas, pressure varies inversely with volume; at constant pressure, volume is proportional to absolute temperature. These are foundational relationships, not a current standalone Chemistry chapter claim."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Intermolecular forces help explain why real substances differ in boiling point, condensation behaviour and ideality, but detailed van der Waals derivations should not be imported without current scope support."
            }
          ]
        }
      ]
    },
    {
      "id": "states-of-matter-c3",
      "title": "3. Handoffs",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Physical phase equilibria and Henry's law -> /neet/chemistry/equilibrium (C01)."
              }
            ],
            [
              {
                "text": "Kinetic theory of gases -> current NEET Physics, not this Chemistry route."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "states-of-matter-c4",
      "title": "4. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Formula records only: PV=nRT as contextual foundation. No reaction records required."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "states-of-matter-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Distributed-Scope Map showing which old States-of-Matter concepts now belong to current Chemistry Equilibrium or Physics Kinetic Theory."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "states-of-matter-m1",
      "mistake": "Uses Celsius directly in gas proportionality",
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
              "text": "Use absolute temperature where the law requires it."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "states-of-matter-m2",
      "mistake": "Treats ideal-gas equation as exact for all conditions",
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
              "text": "Recognise it as a model."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "states-of-matter-m3",
      "mistake": "Assumes old chapter title is current",
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
              "text": "Follow distributed current owners."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "states-of-matter-m4",
      "mistake": "Imports real-gas derivations not in current scope",
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
              "text": "Omit unless source/syllabus supports them."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "relatedChapters": [
    {
      "label": "Equilibrium",
      "url": "/neet/chemistry/equilibrium",
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
    "title": "States of Matter: Gas and Intermolecular Foundations with NEET | Rank Sarthi",
    "description": "See the current NEET UG 2026 status of States of Matter, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogTitle": "States of Matter: Gas and Intermolecular Foundations with NEET | Rank Sarthi",
    "ogDescription": "See the current NEET UG 2026 status of States of Matter, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "states-of-matter-w1",
      "prompt": "At constant temperature, an ideal gas is compressed to half its volume. What happens to pressure?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: At constant temperature, an ideal gas is compressed to half its volume. What happens to pressure?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: it doubles, from the inverse P-V relationship for fixed n,T."
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
              "text": "No. Status: HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_PHYSICAL_CHEMISTRY_OVERLAP."
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
