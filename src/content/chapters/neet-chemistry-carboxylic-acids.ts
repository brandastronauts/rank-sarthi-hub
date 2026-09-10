import type { ChapterContent } from "@/content/types";

/**
 * NEET Carboxylic Acids: Acidity and Factors Affecting Acid Strength — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryCarboxylicAcids: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Carboxylic Acids: Acidity and Factors Affecting Acid Strength",
  "slug": "carboxylic-acids",
  "url": "/neet/chemistry/carboxylic-acids",
  "canonicalIntent": "Own the carboxylic-acid segment of Unit 17, especially acidic strength and substituent effects, without inventing a larger reaction syllabus than the official wording.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "For the 2026 syllabus, the explicitly named carboxylic-acid focus inside Unit 17 is acidic strength and the factors affecting it. This page should build that reasoning from conjugate-base stability and electronic effects, while keeping only the preparation/properties context needed for a coherent current-scope lesson."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE). Official relationship: Unit 17: Organic Compounds Containing Oxygen - Carboxylic Acids segment."
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
      "Why carboxylic acids are acidic",
      "Substituent effects",
      "Comparison with alcohols and phenols",
      "Scope discipline"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "carboxylic-acids-c1",
      "title": "1. Why carboxylic acids are acidic",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For RCOOH <=> RCOO- + H+, the carboxylate ion is stabilised by resonance over two oxygen atoms. The acidity discussion should therefore centre on stability of the conjugate base, not on memorising a pKa order with no explanation."
            }
          ]
        }
      ]
    },
    {
      "id": "carboxylic-acids-c2",
      "title": "2. Substituent effects",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Electron-withdrawing groups generally stabilise the carboxylate ion through inductive effects and increase acidity; electron-donating groups generally have the opposite tendency. The magnitude depends on the substituent, distance and molecular context."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Example qualitative comparison:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "ClCH2COOH is more acidic than CH3COOH because the -I effect of chlorine stabilises the conjugate base."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The inductive effect diminishes with distance, so a halogen farther from the -COOH group usually has a weaker effect than the same halogen closer to it."
            }
          ]
        }
      ]
    },
    {
      "id": "carboxylic-acids-c3",
      "title": "3. Comparison with alcohols and phenols",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use the conjugate-base framework:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "carboxylate: resonance delocalisation over two electronegative oxygens,"
              }
            ],
            [
              {
                "text": "phenoxide: resonance-stabilised but with a different charge-distribution pattern,"
              }
            ],
            [
              {
                "text": "alkoxide: no comparable resonance delocalisation."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Avoid turning this into a universal numeric ranking without specifying structures."
            }
          ]
        }
      ]
    },
    {
      "id": "carboxylic-acids-c4",
      "title": "4. Scope discipline",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official Unit 17 heading says general methods of preparation, properties, reactions and uses for oxygen compounds, but the explicit carboxylic-acid subline names acidic strength and factors affecting it. Include representative preparation/property context only if verified in the current NCERT chapter; do not create an oversized named-reaction inventory that belongs to old or broader board syllabi."
            }
          ]
        }
      ]
    },
    {
      "id": "carboxylic-acids-c5",
      "title": "5. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Acid dissociation model: RCOOH + H2O <=> RCOO- + H3O+."
              }
            ],
            [
              {
                "text": "Neutralisation example: RCOOH + NaOH -> RCOONa + H2O."
              }
            ],
            [
              {
                "text": "Any additional preparation/reaction equation must be checked against the current NCERT-visible scope before publication."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "carboxylic-acids-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Acidity Causal Map: substituent -> electronic effect -> carboxylate stability -> relative acidity, with a distance-effect visual."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "carboxylic-acids-m1",
      "mistake": "Memorises acid order without conjugate-base reasoning",
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
              "text": "Compare carboxylate stability first."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "carboxylic-acids-m2",
      "mistake": "Assumes -I effect is equally strong at any distance",
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
              "text": "Account for distance attenuation."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "carboxylic-acids-m3",
      "mistake": "Uses resonance arrows incorrectly to move atoms",
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
              "text": "Only electron placement changes among contributors."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "carboxylic-acids-m4",
      "mistake": "Imports non-current named reactions to fill the page",
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
              "text": "Keep to verified current NCERT/syllabus scope."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    },
    {
      "id": "carboxylic-acids-m5",
      "mistake": "Confuses acid strength with concentration",
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
              "text": "Separate equilibrium tendency from amount present."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    }
  ],
  "relatedChapters": [
    {
      "label": "Alcohols Phenols Ethers",
      "url": "/neet/chemistry/alcohols-phenols-ethers",
      "relation": "related"
    },
    {
      "label": "Aldehydes Ketones",
      "url": "/neet/chemistry/aldehydes-ketones",
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
    "title": "NEET Carboxylic Acids: Acidity and Factors Affecting Acid Stre | Rank Sarthi",
    "description": "Learn Carboxylic Acids for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Carboxylic Acids: Acidity and Factors Affecting Acid Stre | Rank Sarthi",
    "ogDescription": "Learn Carboxylic Acids for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "carboxylic-acids-w1",
      "prompt": "Which change more directly explains why ClCH2COOH is stronger than CH3COOH: higher molar mass or stabilisation of the conjugate base by an electron-withdrawing effect?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: Which change more directly explains why ClCH2COOH is stronger than CH3COOH: higher molar mass or stabilisation of the conjugate base by an electron-withdrawing effect?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: conjugate-base stabilisation by the -I effect."
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
              "text": "Yes. Its verified official relationship is Unit 17: Organic Compounds Containing Oxygen - Carboxylic Acids segment."
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
