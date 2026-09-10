import type { ChapterContent } from "@/content/types";

/**
 * NEET Alcohols, Phenols and Ethers: Structure, Acidity and Reactions — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryAlcoholsPhenolsEthers: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Alcohols, Phenols and Ethers: Structure, Acidity and Reactions",
  "slug": "alcohols-phenols-ethers",
  "url": "/neet/chemistry/alcohols-phenols-ethers",
  "canonicalIntent": "Own the alcohol/phenol/ether segment of Unit 17 without duplicating carbonyl or carboxylic-acid routes.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Within official Unit 17, this page owns alcohols, phenols and ethers. Current wording explicitly includes identification of primary/secondary/tertiary alcohols, alcohol dehydration, phenol acidity and electrophilic substitution including halogenation, nitration, sulphonation and Reimer-Tiemann reaction, plus ether structure."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE). Official relationship: Unit 17: Organic Compounds Containing Oxygen - Alcohols, Phenols and Ethers segment."
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
      "id": "alcohols-phenols-ethers-t1",
      "slot": "formulas",
      "heading": "Reaction / condition records",
      "intro": "Reagent and condition records; every transformation is condition-dependent and must be read with its stated boundary.",
      "columns": [
        "Transformation",
        "Reagent/condition",
        "Product",
        "Note"
      ],
      "rows": [
        [
          "Ethanol dehydration",
          "conc. H2SO4, ~443 K",
          "Ethene + H2O",
          "Elimination; conditions matter."
        ],
        [
          "Phenol Reimer-Tiemann",
          "CHCl3, aq. NaOH; acid work-up",
          "mainly o-hydroxybenzaldehyde",
          "Current named reaction."
        ],
        [
          "Phenol bromination",
          "condition-dependent Br2",
          "bromophenol product(s)",
          "Do not omit condition dependence."
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
      "Alcohols",
      "Phenols",
      "Ethers",
      "Ownership boundary inside Unit 17"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "alcohols-phenols-ethers-c1",
      "title": "1. Alcohols",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Classify alcohols by the carbon bearing -OH: primary, secondary or tertiary. Identification methods should be presented only when source-verified and within current NCERT scope; do not introduce unsafe laboratory procedure detail beyond textbook learning."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Dehydration is an elimination process requiring acid/heat conditions. A representative equation:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "CH3CH2OH --conc. H2SO4, 443 K--> CH2=CH2 + H2O."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Product distribution for higher alcohols depends on substrate and conditions; do not reduce every case to one memorised alkene."
            }
          ]
        }
      ]
    },
    {
      "id": "alcohols-phenols-ethers-c2",
      "title": "2. Phenols",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Phenol is more acidic than typical aliphatic alcohols because the phenoxide conjugate base is resonance-stabilised. This explanation should be linked to Unit 14 resonance rather than stated as a fact without cause."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Electrophilic substitution is favoured on the activated aromatic ring. The current syllabus names halogenation, nitration and sulphonation. Conditions matter because they influence substitution extent/product."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reimer-Tiemann: phenol under chloroform/alkali conditions gives mainly ortho-hydroxybenzaldehyde after work-up in the standard textbook treatment. Do not omit that this is an aromatic formylation relationship."
            }
          ]
        }
      ]
    },
    {
      "id": "alcohols-phenols-ethers-c3",
      "title": "3. Ethers",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official wording explicitly lists structure. Teach the C-O-C linkage, basic nomenclature/structural distinction and its relationship to alcohol isomers only to current scope. Do not inflate this segment into a full advanced cleavage/mechanism chapter unless the live NCERT/SME review supports it."
            }
          ]
        }
      ]
    },
    {
      "id": "alcohols-phenols-ethers-c4",
      "title": "4. Ownership boundary inside Unit 17",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "This page: alcohols, phenols, ethers."
              }
            ],
            [
              {
                "text": "/aldehydes-ketones: carbonyl compounds and their named current reactions."
              }
            ],
            [
              {
                "text": "/carboxylic-acids: acidic strength and factors affecting it, plus only the preparation/property context needed to make the page coherent."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "alcohols-phenols-ethers-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Oxygen Functional-Group Ownership Map showing the three Rank Sarthi pages that collectively cover Unit 17 and the handoff points between them."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "alcohols-phenols-ethers-m1",
      "mistake": "Explains phenol acidity without conjugate-base resonance",
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
              "text": "Compare phenoxide vs alkoxide stabilisation."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "alcohols-phenols-ethers-m2",
      "mistake": "Predicts dehydration product without checking substrate/conditions",
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
              "text": "Identify possible elimination positions first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "alcohols-phenols-ethers-m3",
      "mistake": "Treats ether as if it owns all oxygen-compound reactions",
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
              "text": "Use the Unit 17 ownership map."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "alcohols-phenols-ethers-m4",
      "mistake": "Forgets Reimer-Tiemann reagent set",
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
              "text": "Store reaction as phenol + CHCl3/alkali + work-up."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "alcohols-phenols-ethers-m5",
      "mistake": "Phenol substitution condition/product is overgeneralised",
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
              "text": "Verify concentration/solvent condition before naming product."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "relatedChapters": [
    {
      "label": "Aldehydes Ketones",
      "url": "/neet/chemistry/aldehydes-ketones",
      "relation": "related"
    },
    {
      "label": "Carboxylic Acids",
      "url": "/neet/chemistry/carboxylic-acids",
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
    "title": "NEET Alcohols, Phenols and Ethers: Structure, Acidity and Reac | Rank Sarthi",
    "description": "Learn Alcohols, Phenols and Ethers for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Alcohols, Phenols and Ethers: Structure, Acidity and Reac | Rank Sarthi",
    "ogDescription": "Learn Alcohols, Phenols and Ethers for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "alcohols-phenols-ethers-w1",
      "prompt": "Why is phenol appreciably more acidic than ethanol even though both contain O-H?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: Why is phenol appreciably more acidic than ethanol even though both contain O-H?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: compare stability of the conjugate bases; phenoxide has resonance delocalisation that ethoxide lacks."
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
              "text": "Yes. Its verified official relationship is Unit 17: Organic Compounds Containing Oxygen - Alcohols, Phenols and Ethers segment."
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
  ],
  "links": [
    {
      "label": "Biomolecules",
      "url": "/neet/chemistry/biomolecules",
      "relation": "forward"
    }
  ]
};
