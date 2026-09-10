import type { ChapterContent } from "@/content/types";

/**
 * Solid State Chemistry: Crystal Foundations and Current NEET UG 2026 Status — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistrySolidState: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Solid State Chemistry: Crystal Foundations and Current NEET UG 2026 Status",
  "slug": "solid-state",
  "url": "/neet/chemistry/solid-state",
  "canonicalIntent": "Retain Solid State as a foundational physical-chemistry resource while clearly marking it not currently listed.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Solid State is not explicitly listed as a unit in the verified NEET UG 2026 Chemistry syllabus. Keep this route only as a contextual foundation, visibly separated from current 20-unit Chemistry navigation."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Historical / not currently listed in NEET UG 2026 (HISTORICAL_OR_NOT_CURRENTLY_LISTED). Official relationship: Not explicitly listed in verified NEET UG 2026 Chemistry syllabus."
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
    },
    {
      "label": "Chemical Bonding",
      "url": "/neet/chemistry/chemical-bonding",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Historical / not currently listed in NEET UG 2026",
    "topics": [
      "Current status",
      "Foundation concepts",
      "Structural reasoning"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "solid-state-c1",
      "title": "1. Current status",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not explicitly listed in the verified official NEET UG 2026 Chemistry syllabus. No current exam relevance should be manufactured."
            }
          ]
        }
      ]
    },
    {
      "id": "solid-state-c2",
      "title": "2. Foundation concepts",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A crystalline solid has long-range periodic order; an amorphous solid lacks that same long-range periodicity. A crystal lattice is an idealised periodic array; a unit cell is the repeating geometric unit used to describe it."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a cubic unit cell, a standard foundation density relationship is:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "density = (Z × M) / (a^3 × N_A)"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "where Z is the number of formula units per unit cell, M molar mass, a edge length and N_A Avogadro constant. This is contextual foundation only and must not be tagged as a current NEET formula."
            }
          ]
        }
      ]
    },
    {
      "id": "solid-state-c3",
      "title": "3. Structural reasoning",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Students should distinguish lattice points from actual particles, and unit-cell sharing from simply counting visible corner/face/body particles. If defect chemistry or electrical/magnetic properties are included from older NCERT, keep them compact and clearly historical/contextual."
            }
          ]
        }
      ]
    },
    {
      "id": "solid-state-c4",
      "title": "4. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "No reaction inventory is needed. Formula records are contextual and must be labelled as such."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "solid-state-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit-Cell Counting Visual Specification: corner contribution 1/8, face 1/2, edge 1/4, body-centred 1, with an explicit CONTEXTUAL FOUNDATION badge."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "solid-state-m1",
      "mistake": "Counts a corner particle as one whole particle per unit cell",
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
              "text": "Apply geometric sharing."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "solid-state-m2",
      "mistake": "Treats amorphous solid as a crystal with a very large unit cell",
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
              "text": "Use order/periodicity distinction."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "solid-state-m3",
      "mistake": "Labels density formula 'must know for NEET 2026'",
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
              "text": "Remove current-exam framing."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    },
    {
      "id": "solid-state-m4",
      "mistake": "Assumes old NCERT chapter equals current official scope",
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
              "text": "Use official syllabus as scope authority."
            }
          ]
        }
      ],
      "errorType": "decision-error"
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
    "title": "Solid State Chemistry: Crystal Foundations and NEET 2026 Status | Rank Sarthi",
    "description": "See the current NEET UG 2026 status of Solid State Chemistry, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogTitle": "Solid State Chemistry: Crystal Foundations and NEET 2026 Status | Rank Sarthi",
    "ogDescription": "See the current NEET UG 2026 status of Solid State Chemistry, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "solid-state-w1",
      "prompt": "A particle lies at one corner of a cubic unit cell shared by eight neighbouring cells. What fraction belongs to one unit cell?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: A particle lies at one corner of a cubic unit cell shared by eight neighbouring cells. What fraction belongs to one unit cell?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: 1/8."
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
              "text": "No. Status: HISTORICAL_OR_NOT_CURRENTLY_LISTED."
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
