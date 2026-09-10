import type { ChapterContent } from "@/content/types";

/**
 * NEET Organic Chemistry: Purification, Nomenclature, Isomerism and Reaction Logic — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryOrganicChemistry: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Organic Chemistry: Purification, Nomenclature, Isomerism and Reaction Logic",
  "slug": "organic-chemistry",
  "url": "/neet/chemistry/organic-chemistry",
  "canonicalIntent": "Own the broad current Organic Chemistry architecture where no dedicated frozen route fully matches Units 13 and 14, then route into Hydrocarbons and functional-group children without duplicating them.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "For NEET UG 2026, this route should own the current foundational organic scope that sits before the functional-group chapters: purification and characterisation, classification and nomenclature, structural/stereoisomerism, bond fission, reactive intermediates, electrophiles/nucleophiles, electronic effects and the logic of substitution, addition, elimination and rearrangement. It should then route students into Hydrocarbons, Halogen, Oxygen, Nitrogen and Biomolecules pages."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (umbrella route) (CURRENT_OFFICIAL_SCOPE_UMBRELLA). Official relationship: Units 13-14: Purification and Characterisation of Organic Compounds + Some Basic Principles of Organic Chemistry."
        }
      ]
    }
  ],
  "heroChips": [
    "Current official NEET UG 2026 scope (umbrella route)",
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
    "unit": "Current official NEET UG 2026 scope (umbrella route)",
    "topics": [
      "Purification and characterisation",
      "Classification, nomenclature and isomerism",
      "Bond fission, intermediates and reactive roles",
      "Electronic effects",
      "Organic reaction decision model"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "organic-chemistry-c1",
      "title": "1. Purification and characterisation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use the official Unit 13 boundary. Teach purification as a property-based selection problem, not as a list:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Crystallisation: choose when the desired solid and impurities differ sufficiently in solubility with temperature."
              }
            ],
            [
              {
                "text": "Sublimation: useful when one solid sublimes while non-subliming impurities remain."
              }
            ],
            [
              {
                "text": "Distillation: separates liquids using volatility/boiling-point differences; the exact form used depends on the mixture."
              }
            ],
            [
              {
                "text": "Differential extraction: transfers a solute between immiscible phases according to relative solubility."
              }
            ],
            [
              {
                "text": "Chromatography: separates components by different affinities between stationary and mobile phases."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Characterisation coverage includes qualitative detection of N, S, P and halogens, and only the *basic principles* of quantitative estimation required by the official syllabus. Calculations of empirical and molecular formulae belong here because Unit 13 explicitly includes them."
            }
          ]
        }
      ]
    },
    {
      "id": "organic-chemistry-c2",
      "title": "2. Classification, nomenclature and isomerism",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Organic compounds should first be classified by carbon skeleton and functional group. The student then applies nomenclature in a consistent order: identify the principal functional group, choose the parent chain/ring, number for the correct lowest locants under IUPAC rules, identify substituents and assemble the name. Trivial names may be taught only where current NCERT/official scope uses them."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Isomerism must separate structural isomerism from stereoisomerism. Do not introduce JEE Advanced-only stereochemical machinery. The page should focus on the distinctions necessary to recognise that the same molecular formula can represent different connectivities or spatial arrangements."
            }
          ]
        }
      ]
    },
    {
      "id": "organic-chemistry-c3",
      "title": "3. Bond fission, intermediates and reactive roles",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Homolytic fission: each fragment takes one electron; free radicals are produced."
              }
            ],
            [
              {
                "text": "Heterolytic fission: one fragment takes the bonding pair; ionic intermediates can form."
              }
            ],
            [
              {
                "text": "Carbocation: electron-deficient carbon centre."
              }
            ],
            [
              {
                "text": "Carbanion: electron-rich carbon centre."
              }
            ],
            [
              {
                "text": "Free radical: species with an unpaired electron."
              }
            ],
            [
              {
                "text": "Electrophile: electron-pair acceptor."
              }
            ],
            [
              {
                "text": "Nucleophile: electron-pair donor."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Stability comparisons should only use relationships supported by current NCERT-level electronic effects and the specific substrate context. Avoid universal shortcut statements detached from structure."
            }
          ]
        }
      ]
    },
    {
      "id": "organic-chemistry-c4",
      "title": "4. Electronic effects",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach the effects as *electron-density explanations*:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Inductive effect: permanent sigma-bond polarisation transmitted through the chain and decreasing with distance."
              }
            ],
            [
              {
                "text": "Electromeric effect: temporary complete shift of pi electrons under an attacking reagent, within the textbook scope."
              }
            ],
            [
              {
                "text": "Resonance: delocalisation represented by contributing structures; the real species is not rapidly switching between them."
              }
            ],
            [
              {
                "text": "Hyperconjugation: delocalisation involving adjacent sigma bonds in the current NCERT-level treatment."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Each effect should answer: what causes it, where electron density moves, what centre becomes more/less reactive, and which stability/acidity/basicity/reactivity conclusion is justified."
            }
          ]
        }
      ]
    },
    {
      "id": "organic-chemistry-c5",
      "title": "5. Organic reaction decision model",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use the factory model:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "structure -> electronic effect -> reactive site -> reagent/condition -> mechanistic class -> product -> exception/competing pathway -> PI diagnosis."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The four current reaction classes named in Unit 14 are substitution, addition, elimination and rearrangement. This route owns their *logic*, not the detailed reaction inventory of each child page."
            }
          ]
        }
      ]
    },
    {
      "id": "organic-chemistry-c6",
      "title": "6. Reaction / formula / condition records",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "No large reaction list belongs on this umbrella."
              }
            ],
            [
              {
                "text": "Illustration: heterolytic cleavage of a polar C-X bond is represented generically as R-X -> R+ + X- only as a conceptual fission model, not as a claim that a free carbocation necessarily forms in every substitution."
              }
            ],
            [
              {
                "text": "Reaction-class examples should link to verified child records rather than duplicating them."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "organic-chemistry-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Organic Reaction Decision Tree: substrate/functional group -> electron-density cue -> likely reactive site -> reagent class -> substitution/addition/elimination/rearrangement -> product check -> competing pathway check."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "organic-chemistry-m1",
      "mistake": "Treats reagent memorisation as the first step",
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
              "text": "Classify substrate and reactive site before choosing a reaction pattern."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "organic-chemistry-m2",
      "mistake": "Confuses nucleophile with negative charge only",
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
              "text": "Rebuild electron-pair donor/acceptor logic; neutral nucleophiles can exist."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "organic-chemistry-m3",
      "mistake": "Recalls an electronic effect name but applies it in the wrong structural context",
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
              "text": "Identify the bond system and distance before applying the effect."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "organic-chemistry-m4",
      "mistake": "Cannot retrieve nomenclature sequence",
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
              "text": "Use a fixed naming checklist on fresh examples."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "organic-chemistry-m5",
      "mistake": "A mechanism claim exceeds verified NEET scope",
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
              "text": "Hold the claim and route it to Organic Chemistry SME review."
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
    "title": "NEET Organic Chemistry: Purification, Nomenclature, Isomerism | Rank Sarthi",
    "description": "Learn Organic Chemistry for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Organic Chemistry: Purification, Nomenclature, Isomerism | Rank Sarthi",
    "ogDescription": "Learn Organic Chemistry for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "organic-chemistry-w1",
      "prompt": "A compound has formula C4H8 and decolourises bromine under suitable conditions. Before naming a product, what should you decide first: (a) which functional class/unsaturation is present, (b) which carbon is 'more important', or (c) which memorised named reaction matches?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: A compound has formula C4H8 and decolourises bromine under suitable conditions. Before naming a product, what should you decide first: (a) which functional class/unsaturation is present, (b) which carbon is 'more important', or (c) which memorised named reaction matches?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: (a). The structure/reactive-site decision comes before reaction recall."
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
              "text": "Yes. Its verified official relationship is Units 13-14: Purification and Characterisation of Organic Compounds + Some Basic Principles of Organic Chemistry."
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
      "label": "Hydrocarbons",
      "url": "/neet/chemistry/hydrocarbons",
      "relation": "forward"
    },
    {
      "label": "Haloalkanes Haloarenes",
      "url": "/neet/chemistry/haloalkanes-haloarenes",
      "relation": "forward"
    },
    {
      "label": "Alcohols Phenols Ethers",
      "url": "/neet/chemistry/alcohols-phenols-ethers",
      "relation": "forward"
    },
    {
      "label": "Aldehydes Ketones",
      "url": "/neet/chemistry/aldehydes-ketones",
      "relation": "forward"
    },
    {
      "label": "Carboxylic Acids",
      "url": "/neet/chemistry/carboxylic-acids",
      "relation": "forward"
    },
    {
      "label": "Amines",
      "url": "/neet/chemistry/amines",
      "relation": "forward"
    },
    {
      "label": "Biomolecules",
      "url": "/neet/chemistry/biomolecules",
      "relation": "forward"
    }
  ]
};
