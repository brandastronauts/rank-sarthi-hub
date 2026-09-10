import type { ChapterContent } from "@/content/types";

/**
 * NEET Aldehydes and Ketones: Carbonyl Reactivity and Named Reactions — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryAldehydesKetones: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Aldehydes and Ketones: Carbonyl Reactivity and Named Reactions",
  "slug": "aldehydes-ketones",
  "url": "/neet/chemistry/aldehydes-ketones",
  "canonicalIntent": "Own carbonyl-group behaviour and the explicitly named aldehyde/ketone reactions in Unit 17.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The current syllabus explicitly includes nature of the carbonyl group, nucleophilic addition, relative reactivity of aldehydes and ketones, HCN/ammonia-derivative additions, Grignard reagent, oxidation/reduction, alpha-hydrogen acidity, aldol condensation, Cannizzaro, haloform and chemical tests that distinguish aldehydes from ketones."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE). Official relationship: Unit 17: Organic Compounds Containing Oxygen - Aldehydes and Ketones segment."
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
      "id": "aldehydes-ketones-t1",
      "slot": "formulas",
      "heading": "Reaction / condition records",
      "intro": "Reagent and condition records; every transformation is condition-dependent and must be read with its stated boundary.",
      "columns": [
        "Reaction",
        "Conditions",
        "Core product relationship",
        "Limitation"
      ],
      "rows": [
        [
          "HCN addition",
          "HCN / suitable cyanide catalysis",
          "Cyanohydrin",
          "Carbonyl nucleophilic addition."
        ],
        [
          "Aldol",
          "dilute base; heat for condensation",
          "beta-hydroxy carbonyl -> dehydrated product",
          "Requires suitable alpha-H."
        ],
        [
          "Cannizzaro",
          "concentrated base",
          "carboxylate + alcohol",
          "Aldehyde lacking alpha-H."
        ],
        [
          "Clemmensen",
          "Zn(Hg)/conc. HCl",
          "C=O -> CH2",
          "Acidic conditions."
        ],
        [
          "Wolff-Kishner",
          "NH2NH2, strong base, heat",
          "C=O -> CH2",
          "Basic conditions."
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
      "Carbonyl group and reactive site",
      "Aldehyde vs ketone reactivity",
      "Nucleophilic addition",
      "Grignard reagent",
      "Oxidation and reduction",
      "Alpha-hydrogen, aldol and Cannizzaro"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "aldehydes-ketones-c1",
      "title": "1. Carbonyl group and reactive site",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The C=O bond is polarised toward oxygen, making the carbonyl carbon electrophilic. This is the organising reason for nucleophilic addition. Students should identify the carbonyl carbon before recalling a named reaction."
            }
          ]
        }
      ]
    },
    {
      "id": "aldehydes-ketones-c2",
      "title": "2. Aldehyde vs ketone reactivity",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At NEET depth, aldehydes are generally more reactive than ketones toward nucleophilic addition because of lower steric hindrance and less electron donation from alkyl groups. Present this as a general trend with substrate context, not an absolute law for every possible reagent."
            }
          ]
        }
      ]
    },
    {
      "id": "aldehydes-ketones-c3",
      "title": "3. Nucleophilic addition",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Representative HCN addition:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "R-CHO + HCN <=> R-CH(OH)-CN"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "(or corresponding ketone cyanohydrin)."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Ammonia derivatives form addition-elimination products such as oximes/hydrazones within textbook scope. Reagent identity determines the derivative."
            }
          ]
        }
      ]
    },
    {
      "id": "aldehydes-ketones-c4",
      "title": "4. Grignard reagent",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Grignard reagents add to carbonyl compounds, followed by hydrolysis. The alcohol class depends on the starting carbonyl:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "formaldehyde -> primary alcohol,"
              }
            ],
            [
              {
                "text": "other aldehydes -> secondary alcohol,"
              }
            ],
            [
              {
                "text": "ketones -> tertiary alcohol."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Keep the reaction anhydrous before hydrolysis because Grignard reagents are destroyed by protic water/alcohol."
            }
          ]
        }
      ]
    },
    {
      "id": "aldehydes-ketones-c5",
      "title": "5. Oxidation and reduction",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Aldehydes oxidise readily to carboxylic acids under common oxidising conditions; ketones are comparatively resistant to mild oxidation. Reduction converts C=O to alcohol."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The named reduction methods in official wording include Wolff-Kishner and Clemmensen, which reduce the carbonyl group to methylene under strongly basic and strongly acidic conditions respectively. Do not interchange conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "aldehydes-ketones-c6",
      "title": "6. Alpha-hydrogen, aldol and Cannizzaro",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Aldol condensation requires an aldehyde/ketone with suitable alpha-hydrogen. A standard example:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "2 CH3CHO --dil. NaOH--> CH3CH(OH)CH2CHO, followed by dehydration on heating to an alpha,beta-unsaturated aldehyde."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Cannizzaro is characteristic of aldehydes without alpha-hydrogen under concentrated base, producing one oxidised and one reduced product. Do not apply it to an aldehyde that clearly has alpha-hydrogen."
            }
          ]
        }
      ]
    },
    {
      "id": "aldehydes-ketones-c7",
      "title": "7. Haloform and distinguishing tests",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Haloform reaction is associated with the required structural motif (e.g., methyl ketone or oxidisable precursor under the textbook scope), not “all ketones.” Chemical tests should be taught with correct selectivity and limitations; do not claim one reagent universally distinguishes every carbonyl compound under every condition."
            }
          ]
        }
      ]
    },
    {
      "id": "aldehydes-ketones-gain",
      "title": "8. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Carbonyl Reaction Eligibility Grid: alpha-H present? aldehyde/ketone? methyl-ketone motif? protic sensitivity? -> eligible named reaction."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "aldehydes-ketones-m1",
      "mistake": "Applies Cannizzaro to ethanal",
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
              "text": "Check alpha-hydrogen first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "aldehydes-ketones-m2",
      "mistake": "Calls every ketone haloform-positive",
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
              "text": "Check the required methyl-ketone/convertible structural motif."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "aldehydes-ketones-m3",
      "mistake": "Interchanges Clemmensen and Wolff-Kishner conditions",
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
              "text": "Tag each reduction with acidic vs basic condition."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "aldehydes-ketones-m4",
      "mistake": "Chooses carbonyl oxygen as electrophilic centre",
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
              "text": "Use C=O polarisation to identify the carbonyl carbon as the typical nucleophilic-attack site."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "aldehydes-ketones-m5",
      "mistake": "A qualitative test is claimed universal without limitation",
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
              "text": "State test scope and interference limits."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "relatedChapters": [
    {
      "label": "Alcohols Phenols Ethers",
      "url": "/neet/chemistry/alcohols-phenols-ethers",
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
    "title": "NEET Aldehydes and Ketones: Carbonyl Reactivity and Named Reac | Rank Sarthi",
    "description": "Learn Aldehydes and Ketones for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Aldehydes and Ketones: Carbonyl Reactivity and Named Reac | Rank Sarthi",
    "ogDescription": "Learn Aldehydes and Ketones for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "aldehydes-ketones-w1",
      "prompt": "An aldehyde has no alpha-hydrogen. Under concentrated alkali, should you first consider aldol or Cannizzaro?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: An aldehyde has no alpha-hydrogen. Under concentrated alkali, should you first consider aldol or Cannizzaro?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Cannizzaro, because aldol requires a suitable alpha-hydrogen."
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
              "text": "Yes. Its verified official relationship is Unit 17: Organic Compounds Containing Oxygen - Aldehydes and Ketones segment."
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
