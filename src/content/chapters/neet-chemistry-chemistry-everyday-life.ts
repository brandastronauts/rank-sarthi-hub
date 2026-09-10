import type { ChapterContent } from "@/content/types";

/**
 * Chemistry in Everyday Life: Foundation Concepts and Current NEET UG 2026 Status — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryChemistryEverydayLife: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Chemistry in Everyday Life: Foundation Concepts and Current NEET UG 2026 Status",
  "slug": "chemistry-everyday-life",
  "url": "/neet/chemistry/chemistry-everyday-life",
  "canonicalIntent": "Retain the old everyday-life chemistry route as contextual foundation with strong safety controls and no fake current exam relevance.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Chemistry in Everyday Life is not explicitly listed as a standalone unit in the verified NEET UG 2026 Chemistry syllabus. Keep it as a contextual foundation only. Any medicine-related content must remain chemistry education, not diagnosis, dosage or treatment advice."
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
    }
  ],
  "syllabusMapping": {
    "unit": "Historical / not currently listed in NEET UG 2026",
    "topics": [
      "Current status",
      "Foundation approach",
      "Cleansing-agent foundation",
      "Safety"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "chemistry-everyday-life-c1",
      "title": "1. Current status",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not explicitly listed in the verified official NEET UG 2026 Chemistry syllabus. It should not appear in current-syllabus navigation."
            }
          ]
        }
      ]
    },
    {
      "id": "chemistry-everyday-life-c2",
      "title": "2. Foundation approach",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Rather than memorising commercial products, teach chemical purpose and interaction at a high level:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "a chemical may act through a defined molecular/physical function,"
              }
            ],
            [
              {
                "text": "structure influences solubility, interaction and use,"
              }
            ],
            [
              {
                "text": "classification names do not substitute for medical guidance."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If older NCERT coverage of drug classes, food additives or cleansing agents is retained, label it historical/contextual and verify the exact edition. Do not recommend medicines, doses, combinations or treatment."
            }
          ]
        }
      ]
    },
    {
      "id": "chemistry-everyday-life-c3",
      "title": "3. Cleansing-agent foundation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At chemistry level, soaps are salts of long-chain fatty acids and detergents are surfactants with hydrophilic/hydrophobic regions. Micelle formation can explain removal of oily dirt at a conceptual level. Detailed historical examples should remain source-controlled."
            }
          ]
        }
      ]
    },
    {
      "id": "chemistry-everyday-life-c4",
      "title": "4. Safety",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No content on this page may be phrased as personal health advice. Statements about pharmaceuticals are limited to chemistry classification/mechanism concepts already supported by the source and human review."
            }
          ]
        }
      ]
    },
    {
      "id": "chemistry-everyday-life-c5",
      "title": "5. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "No medication synthesis or dosage information. A soap/surfactant structural diagram can be used without a reaction procedure."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "chemistry-everyday-life-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Chemistry Function vs Health Advice Boundary Card separating molecular/classification learning from prohibited personalised medical guidance."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "chemistry-everyday-life-m1",
      "mistake": "Treats a drug class description as treatment advice",
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
              "text": "Keep chemistry education separate from clinical use."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "chemistry-everyday-life-m2",
      "mistake": "Assumes historical NCERT chapter is current",
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
              "text": "Use current official syllabus."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "chemistry-everyday-life-m3",
      "mistake": "Confuses soap and detergent only by brand/use",
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
              "text": "Compare surfactant head/tail chemistry and ionic group."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "chemistry-everyday-life-m4",
      "mistake": "Adds unsourced health claims",
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
              "text": "Require authoritative source and safety review."
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
    "title": "Chemistry in Everyday Life: Foundation Concepts and NEET 2026 | Rank Sarthi",
    "description": "See the current NEET UG 2026 status of Chemistry in Everyday Life, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogTitle": "Chemistry in Everyday Life: Foundation Concepts and NEET 2026 | Rank Sarthi",
    "ogDescription": "See the current NEET UG 2026 status of Chemistry in Everyday Life, with contextual foundation content, clear scope boundaries and no fabricated exam relevance.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "chemistry-everyday-life-w1",
      "prompt": "A molecule has a long hydrophobic chain and an ionic hydrophilic head. What property best explains its cleansing action?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: A molecule has a long hydrophobic chain and an ionic hydrophilic head. What property best explains its cleansing action?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: amphiphilic structure enabling aggregation/micelle-type solubilisation of oily material."
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
