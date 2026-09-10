import type { ChapterContent } from "@/content/types";

/**
 * NEET Amines and Diazonium Salts: Basicity, Identification and Synthetic Role — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryAmines: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Amines and Diazonium Salts: Basicity, Identification and Synthetic Role",
  "slug": "amines",
  "url": "/neet/chemistry/amines",
  "canonicalIntent": "Own all current Unit 18 scope, including diazonium salts even though the route slug is narrower.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The current Unit 18 includes preparation, properties, reactions and uses of nitrogen-containing organic compounds; amine nomenclature/classification/structure/basic character and identification of primary, secondary and tertiary amines; and diazonium salts with their importance in synthetic organic chemistry. This route must therefore include diazonium salts."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE). Official relationship: Unit 18: Organic Compounds Containing Nitrogen."
        }
      ]
    }
  ],
  "heroChips": [
    "Current official NEET UG 2026 scope",
    "Draft: pending human academic review",
    "No weightage, question counts or trend claims"
  ],
  "tables": [
    {
      "id": "amines-t1",
      "slot": "formulas",
      "heading": "Reaction / condition records",
      "intro": "Reagent and condition records; every transformation is condition-dependent and must be read with its stated boundary.",
      "columns": [
        "Process",
        "Conditions",
        "Product/role",
        "Boundary"
      ],
      "rows": [
        [
          "Aniline diazotisation",
          "NaNO2 + HCl, 273-278 K",
          "Benzenediazonium chloride",
          "Cold conditions are material."
        ],
        [
          "Amine protonation",
          "RNH2 + H+ <=> RNH3+",
          "Conjugate acid",
          "Basis of amine basicity."
        ],
        [
          "Diazonium substitution/coupling",
          "reaction-specific",
          "synthetic derivatives",
          "Include only NCERT-verified examples."
        ]
      ],
      "jump": true
    }
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
      "label": "Organic Chemistry",
      "url": "/neet/chemistry/organic-chemistry",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Classification and structure",
      "Basic character",
      "Identification",
      "Diazonium salts"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "amines-c1",
      "title": "1. Classification and structure",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Amines are classified according to the number of carbon groups attached to nitrogen: primary, secondary and tertiary. This classification is not the same as the classification of the carbon atom bonded to nitrogen."
            }
          ]
        }
      ]
    },
    {
      "id": "amines-c2",
      "title": "2. Basic character",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The nitrogen lone pair can accept a proton, so amines behave as bases. Relative basicity depends on electron donation/withdrawal, resonance, solvation and steric context. Avoid one-line orders claimed valid in every phase/solvent."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Aniline is less basic than many simple aliphatic amines because the lone pair is delocalised into the aromatic ring, reducing its availability for protonation."
            }
          ]
        }
      ]
    },
    {
      "id": "amines-c3",
      "title": "3. Identification",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official syllabus explicitly includes identification of primary, secondary and tertiary amines. Use only NCERT-supported qualitative distinctions and present test limitations; do not convert a classroom identification reaction into unsupervised lab instructions."
            }
          ]
        }
      ]
    },
    {
      "id": "amines-c4",
      "title": "4. Diazonium salts",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Because Unit 18 explicitly names diazonium salts, this route must own them."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Aromatic primary amines can form diazonium salts under cold acidic nitrite conditions. Representative formation:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "C6H5NH2 + NaNO2 + 2HCl (273-278 K) -> C6H5N2+Cl- + NaCl + 2H2O."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Temperature control is material because aromatic diazonium salts are typically handled cold in the textbook context."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Their importance lies in synthetic conversion: the diazonium group can be replaced to access other substituents, and azo coupling can form azo compounds/dyes under suitable conditions. Keep the exact reaction set to current NCERT depth."
            }
          ]
        }
      ]
    },
    {
      "id": "amines-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Nitrogen Functional-Group Decision Map separating amine class, basicity reasoning, identification and diazonium-salt synthetic routing."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "amines-m1",
      "mistake": "Classifies an amine by the degree of the attached carbon",
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
              "text": "Count carbon groups directly attached to nitrogen."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "amines-m2",
      "mistake": "Says aniline is more basic because phenyl is 'large'",
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
              "text": "Use lone-pair resonance availability."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "amines-m3",
      "mistake": "Forgets low temperature in diazotisation",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Recall Gap."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Store temperature with reagent set."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "amines-m4",
      "mistake": "Uses a gas-phase basicity order for aqueous questions without context",
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
              "text": "Check medium/solvation context."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "amines-m5",
      "mistake": "Identification test claimed beyond verified NCERT selectivity",
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
              "text": "State test limits or omit."
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
    },
    {
      "label": "Biomolecules",
      "url": "/neet/chemistry/biomolecules",
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
    "title": "NEET Amines and Diazonium Salts: Basicity, Identification and | Rank Sarthi",
    "description": "Learn Amines and Diazonium Salts for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Amines and Diazonium Salts: Basicity, Identification and | Rank Sarthi",
    "ogDescription": "Learn Amines and Diazonium Salts for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "amines-w1",
      "prompt": "Why can aniline be less basic than a simple alkyl amine even though both have a nitrogen lone pair?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: Why can aniline be less basic than a simple alkyl amine even though both have a nitrogen lone pair?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: in aniline the lone pair is delocalised into the aromatic ring, reducing its availability for protonation."
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
      "question": "Is this route current for NEET UG 2026?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. Its verified official relationship is Unit 18: Organic Compounds Containing Nitrogen."
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
