import type { ChapterContent } from "@/content/types";

/**
 * NEET Chemistry Biomolecules: Carbohydrates, Proteins, Vitamins and Nucleic Acids — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryBiomolecules: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Chemistry Biomolecules: Carbohydrates, Proteins, Vitamins and Nucleic Acids",
  "slug": "biomolecules",
  "url": "/neet/chemistry/biomolecules",
  "canonicalIntent": "Own the Chemistry Unit 19 intent and remain distinct from /neet/biology/biomolecules.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Current Chemistry Unit 19 covers the chemical classes and relationships of carbohydrates, proteins, enzymes, vitamins, nucleic acids and a general introduction to hormones. This page should explain structures/classes and chemical relationships; the Biology Biomolecules page should own cell-biological and physiological-system context."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE). Official relationship: Unit 19: Biomolecules."
        }
      ]
    }
  ],
  "heroChips": [
    "Current official NEET UG 2026 scope",
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
      "label": "Organic Chemistry",
      "url": "/neet/chemistry/organic-chemistry",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Chemistry vs Biology boundary",
      "Carbohydrates",
      "Amino acids and proteins",
      "Enzymes",
      "Vitamins",
      "Nucleic acids and hormones"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "biomolecules-c1",
      "title": "1. Chemistry vs Biology boundary",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This Chemistry route answers: what is the molecular class, what functional groups/bonds define it, how are units connected, and what chemical distinction matters?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "/neet/biology/biomolecules should answer broader biological-system and cell-context questions. Avoid duplicating entire Biology explanations."
            }
          ]
        }
      ]
    },
    {
      "id": "biomolecules-c2",
      "title": "2. Carbohydrates",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official syllabus names:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "aldoses and ketoses,"
              }
            ],
            [
              {
                "text": "monosaccharides glucose and fructose,"
              }
            ],
            [
              {
                "text": "constituent monosaccharides of sucrose, lactose and maltose."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach classification by carbonyl type and degree of polymerisation. For disaccharides, focus on constituent monosaccharides and the existence of glycosidic linkage at current NCERT depth. Do not invent advanced stereochemical detail outside current scope."
            }
          ]
        }
      ]
    },
    {
      "id": "biomolecules-c3",
      "title": "3. Amino acids and proteins",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach the elementary alpha-amino-acid structure and formation of the peptide bond."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Generic condensation:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "H2N-CHR-COOH + H2N-CHR'-COOH -> H2N-CHR-CONH-CHR'-COOH + H2O"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "as a conceptual peptide-bond formation model."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Protein structure levels:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "primary: amino-acid sequence,"
              }
            ],
            [
              {
                "text": "secondary: local regular folding motifs,"
              }
            ],
            [
              {
                "text": "tertiary: overall 3D folding of one polypeptide,"
              }
            ],
            [
              {
                "text": "quaternary: association of multiple polypeptide subunits."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The syllabus calls for qualitative ideas only for structural levels. Do not overbuild molecular-biophysics detail."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Denaturation changes higher-order structure/function without normally meaning hydrolysis of every peptide bond."
            }
          ]
        }
      ]
    },
    {
      "id": "biomolecules-c4",
      "title": "4. Enzymes",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Enzymes are biological catalysts. Keep chemistry emphasis on catalytic role and protein relationship where applicable; specific physiology/metabolic pathways belong to Biology child pages."
            }
          ]
        }
      ]
    },
    {
      "id": "biomolecules-c5",
      "title": "5. Vitamins",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official wording calls for classification and functions. Use fat-soluble vs water-soluble classification and only source-verified function summaries. Avoid dosage, deficiency treatment or personal medical advice."
            }
          ]
        }
      ]
    },
    {
      "id": "biomolecules-c6",
      "title": "6. Nucleic acids and hormones",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach chemical constitution of DNA/RNA at current scope: nucleotide components and polymeric relationship, plus biological functions. Hormones receive only a general introduction in Chemistry Unit 19; endocrine-system detail remains Biology Human Physiology."
            }
          ]
        }
      ]
    },
    {
      "id": "biomolecules-c7",
      "title": "7. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Peptide-bond formation is shown as a condensation relationship, not as a laboratory synthesis procedure."
              }
            ],
            [
              {
                "text": "Hydrolysis relationships may be explained conceptually only when useful and source-verified."
              }
            ],
            [
              {
                "text": "No medical dosage or supplement recommendations."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "biomolecules-gain",
      "title": "8. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Chemistry Biomolecule Entity Map: monomer/building block -> linkage -> macromolecule/class -> chemistry-level distinction -> Biology handoff."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "biomolecules-m1",
      "mistake": "Uses Biology-system detail to answer a chemistry structure question",
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
              "text": "Identify whether the question asks composition/bond/class or biological function/system."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "biomolecules-m2",
      "mistake": "Confuses peptide bond with hydrogen bond",
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
              "text": "Separate covalent backbone linkage from secondary-structure interactions."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "biomolecules-m3",
      "mistake": "Says denaturation necessarily breaks primary structure",
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
              "text": "Distinguish higher-order disruption from peptide-bond hydrolysis."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "biomolecules-m4",
      "mistake": "Cannot recall disaccharide constituents",
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
              "text": "Use a constituent-pair retrieval table."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "biomolecules-m5",
      "mistake": "Vitamin function wording drifts into medical treatment",
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
              "text": "Keep to syllabus classification/functions only."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "relatedChapters": [
    {
      "label": "Biomolecules",
      "url": "/neet/biology/biomolecules",
      "relation": "related"
    },
    {
      "label": "Amines",
      "url": "/neet/chemistry/amines",
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
    "title": "NEET Chemistry Biomolecules: Carbohydrates, Proteins, Vitamins | Rank Sarthi",
    "description": "Learn Chemistry Biomolecules for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Chemistry Biomolecules: Carbohydrates, Proteins, Vitamins | Rank Sarthi",
    "ogDescription": "Learn Chemistry Biomolecules for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "biomolecules-w1",
      "prompt": "A protein loses its native 3D shape after heating but its peptide-chain sequence remains intact. Is this best described as denaturation or complete hydrolysis?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: A protein loses its native 3D shape after heating but its peptide-chain sequence remains intact. Is this best described as denaturation or complete hydrolysis?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: denaturation."
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
              "text": "Yes. Its verified official relationship is Unit 19: Biomolecules."
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
