import type { ChapterContent } from "@/content/types";

/**
 * NEET Haloalkanes and Haloarenes: C-X Bond, Substitution and Elimination Logic — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryHaloalkanesHaloarenes: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Haloalkanes and Haloarenes: C-X Bond, Substitution and Elimination Logic",
  "slug": "haloalkanes-haloarenes",
  "url": "/neet/chemistry/haloalkanes-haloarenes",
  "canonicalIntent": "Own Unit 16 halogen-compound scope, clearly separating haloalkanes from haloarenes and connecting C-X bond behaviour to substitution/elimination decisions.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The 2026 syllabus explicitly includes preparation, properties and reactions of organic halogen compounds, nature of the C-X bond, mechanisms of substitution reactions, uses and environmental effects of chloroform, iodoform, freons and DDT. This page should distinguish haloalkane and haloarene reactivity rather than treating all C-X bonds as equivalent."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE). Official relationship: Unit 16: Organic Compounds Containing Halogens."
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
      "id": "haloalkanes-haloarenes-t1",
      "slot": "formulas",
      "heading": "Reaction / condition records",
      "intro": "Reagent and condition records; every transformation is condition-dependent and must be read with its stated boundary.",
      "columns": [
        "Substrate",
        "Reagent/condition",
        "Product/pathway",
        "Key boundary"
      ],
      "rows": [
        [
          "C2H5Br",
          "aq. KOH/OH-",
          "C2H5OH",
          "Substitution favoured under aqueous nucleophilic conditions."
        ],
        [
          "C2H5Br",
          "alc. KOH, heat",
          "CH2=CH2",
          "Elimination pathway."
        ],
        [
          "R-X",
          "Nu-",
          "R-Nu",
          "Generic substitution only after substrate/condition check."
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
    },
    {
      "label": "Hydrocarbons",
      "url": "/neet/chemistry/hydrocarbons",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "C-X bond and substrate class",
      "Nucleophilic substitution",
      "Haloarenes",
      "Uses and environmental effects"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "haloalkanes-haloarenes-c1",
      "title": "1. C-X bond and substrate class",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In a haloalkane, halogen is bonded to an sp3 carbon; in a haloarene, halogen is directly bonded to an aromatic sp2 carbon. This structural difference changes bond character and reaction behaviour. The page should make the structure distinction before teaching any mechanism."
            }
          ]
        }
      ]
    },
    {
      "id": "haloalkanes-haloarenes-c2",
      "title": "2. Nucleophilic substitution",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use substrate structure, leaving group, nucleophile and medium as decision inputs. At NEET level:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "A one-step backside displacement is the core SN2 model."
              }
            ],
            [
              {
                "text": "A stepwise pathway via carbocation formation is the core SN1 model."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not teach these as “primary always SN2 / tertiary always SN1” without conditions. Solvent, nucleophile strength, steric hindrance and carbocation stability matter."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Representative substitution:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "C2H5Br + OH- -> C2H5OH + Br-"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "under aqueous conditions."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "With alcoholic base and heat, elimination may compete:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "C2H5Br + KOH(alc) -> CH2=CH2 + KBr + H2O."
            }
          ]
        }
      ]
    },
    {
      "id": "haloalkanes-haloarenes-c3",
      "title": "3. Haloarenes",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Aryl C-X bonds behave differently from ordinary alkyl C-X bonds because the carbon is sp2 and resonance gives the bond partial double-bond character. Therefore direct nucleophilic substitution under ordinary haloalkane conditions is less facile. Keep explanation at NCERT/NEET depth; do not import advanced benzyne chemistry unless explicitly needed."
            }
          ]
        }
      ]
    },
    {
      "id": "haloalkanes-haloarenes-c4",
      "title": "4. Uses and environmental effects",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official syllabus specifically names chloroform, iodoform, freons and DDT. Teach only accurate, source-safe context: historical/industrial or laboratory use where appropriate and environmental/health concerns at the textbook level. Do not present obsolete uses as present-day recommendations."
            }
          ]
        }
      ]
    },
    {
      "id": "haloalkanes-haloarenes-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "C-X Reactivity Decision Matrix: haloalkane/haloarene -> carbon hybridisation -> leaving-group bond context -> nucleophile/base -> medium/heat -> substitution vs elimination."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "haloalkanes-haloarenes-m1",
      "mistake": "Treats haloarene like a primary haloalkane",
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
              "text": "Check whether X is bonded to sp2 aromatic carbon."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "haloalkanes-haloarenes-m2",
      "mistake": "Chooses substitution despite strong-base/heated elimination conditions",
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
              "text": "Read reagent + solvent + temperature together."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "haloalkanes-haloarenes-m3",
      "mistake": "States tertiary substrates are 'always SN1'",
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
              "text": "Replace with condition-dependent reasoning."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    },
    {
      "id": "haloalkanes-haloarenes-m4",
      "mistake": "Forgets that aqueous vs alcoholic KOH changes the expected pathway",
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
              "text": "Store reagent-state and condition together."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "haloalkanes-haloarenes-m5",
      "mistake": "Misidentifies leaving group position",
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
              "text": "Redraw the carbon bearing X before solving."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    }
  ],
  "relatedChapters": [
    {
      "label": "Environmental Chemistry",
      "url": "/neet/chemistry/environmental-chemistry",
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
    "title": "NEET Haloalkanes and Haloarenes: C-X Bond, Substitution and El | Rank Sarthi",
    "description": "Learn Haloalkanes and Haloarenes for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Haloalkanes and Haloarenes: C-X Bond, Substitution and El | Rank Sarthi",
    "ogDescription": "Learn Haloalkanes and Haloarenes for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "haloalkanes-haloarenes-w1",
      "prompt": "Two compounds both contain C-Cl: chlorobenzene and chloroethane. Should their substitution behaviour be assumed identical because the leaving group is Cl?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: Two compounds both contain C-Cl: chlorobenzene and chloroethane. Should their substitution behaviour be assumed identical because the leaving group is Cl?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: No. The carbon framework and C-X bond context are different."
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
              "text": "Yes. Its verified official relationship is Unit 16: Organic Compounds Containing Halogens."
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
      "label": "Alcohols Phenols Ethers",
      "url": "/neet/chemistry/alcohols-phenols-ethers",
      "relation": "forward"
    },
    {
      "label": "Amines",
      "url": "/neet/chemistry/amines",
      "relation": "forward"
    }
  ]
};
