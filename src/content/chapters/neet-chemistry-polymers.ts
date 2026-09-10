import type { ChapterContent } from "@/content/types";

/**
 * Polymers: Foundation Chemistry and Current NEET UG 2026 Status — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryPolymers: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Polymers: Foundation Chemistry and Current NEET UG 2026 Status",
  "slug": "polymers",
  "url": "/neet/chemistry/polymers",
  "canonicalIntent": "Preserve the frozen Polymers route as a transparent foundation/context page without implying a current standalone NEET unit.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Polymers is not explicitly listed as a standalone unit in the verified NEET UG 2026 Chemistry syllabus. Polymerisation does appear as a reaction within current Unit 15 Hydrocarbons. This page should therefore remain a contextual foundation and must not appear in current-syllabus navigation as an examinable standalone unit."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Historical / not currently listed in NEET UG 2026 (HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_UNIT15_OVERLAP). Official relationship: No standalone Polymers unit in verified NEET UG 2026 Chemistry syllabus; polymerisation appears within Unit 15 Hydrocarbons."
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
      "label": "Hydrocarbons",
      "url": "/neet/chemistry/hydrocarbons",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Historical / not currently listed in NEET UG 2026",
    "topics": [
      "Current NEET UG 2026 status",
      "Foundation concepts",
      "Connection to current Hydrocarbons",
      "Context-only examples"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "polymers-c1",
      "title": "1. Current NEET UG 2026 status",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not explicitly listed in the verified official syllabus as a standalone unit. The current Hydrocarbons unit explicitly includes polymerisation under alkene and alkyne reactions. That narrow overlap must not be inflated into a current “Polymers” chapter claim."
            }
          ]
        }
      ]
    },
    {
      "id": "polymers-c2",
      "title": "2. Foundation concepts",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A monomer is a smaller molecular unit capable of joining into a larger macromolecular chain/network; a polymer contains repeating structural units derived from monomers."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Two useful foundation patterns:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Chain-growth/addition polymerisation: unsaturated monomers add without eliminating a small molecule in the simple overall representation. Example:"
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "n CH2=CH2 -> (-CH2-CH2-)n (polyethene)."
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Step-growth/condensation polymerisation: bifunctional/polyfunctional monomers form links, often with elimination of small molecules in classic examples."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not use this contextual page to imply that every named commercial polymer is current NEET 2026 scope."
            }
          ]
        }
      ]
    },
    {
      "id": "polymers-c3",
      "title": "3. Connection to current Hydrocarbons",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When an alkene undergoes polymerisation, the pi bond is consumed as new sigma bonds connect monomer units. This structural relationship can help students understand the official Unit 15 reaction line without needing a separate current syllabus unit."
            }
          ]
        }
      ]
    },
    {
      "id": "polymers-c4",
      "title": "4. Context-only examples",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If older NCERT examples such as nylon, Buna-S, neoprene or biodegradable polymers are retained, label them CONTEXTUAL / HISTORICAL FOUNDATION and verify against the exact textbook edition before publication. Do not attach weightage, PYQ frequency or “must study” labels."
            }
          ]
        }
      ]
    },
    {
      "id": "polymers-c5",
      "title": "5. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Current-safe overlap example: n CH2=CH2 -> (-CH2-CH2-)n as the general polyethene formation relationship. Conditions/catalyst details should be added only when source-verified and relevant."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "polymers-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Current-vs-Context Polymerisation Panel: current Unit 15 polymerisation concept on one side; historical standalone polymer taxonomy on the other."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "polymers-m1",
      "mistake": "Assumes frozen URL means current syllabus",
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
              "text": "Check the visible current-status block first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "polymers-m2",
      "mistake": "Confuses polymerisation overlap with a standalone current unit",
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
              "text": "Separate a reaction named in Unit 15 from a deleted/absent chapter title."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "polymers-m3",
      "mistake": "Calls every polymerisation a condensation process",
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
              "text": "Classify chain-growth/addition vs step-growth relationships."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "polymers-m4",
      "mistake": "Recalls an old named polymer as a current exam requirement",
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
              "text": "Verify against the live official syllabus before using exam language."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    },
    {
      "id": "polymers-m5",
      "mistake": "Misreads repeat-unit brackets",
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
              "text": "Identify monomer-derived repeat unit before counting atoms."
            }
          ]
        }
      ],
      "errorType": "execution-error"
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
    "title": "Polymers: Foundation Chemistry and NEET 2026 Status | Rank Sarthi",
    "description": "See the current NEET UG 2026 status of Polymers, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogTitle": "Polymers: Foundation Chemistry and NEET 2026 Status | Rank Sarthi",
    "ogDescription": "See the current NEET UG 2026 status of Polymers, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "polymers-w1",
      "prompt": "The current syllabus mentions polymerisation under alkenes. Does that alone prove a standalone 'Polymers' unit is current?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: The current syllabus mentions polymerisation under alkenes. Does that alone prove a standalone 'Polymers' unit is current?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: No. It proves only that polymerisation is part of the Hydrocarbons reaction scope."
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
              "text": "No. Status: HISTORICAL_OR_NOT_CURRENTLY_LISTED_WITH_UNIT15_OVERLAP."
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
