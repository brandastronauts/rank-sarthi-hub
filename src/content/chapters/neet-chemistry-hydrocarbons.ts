import type { ChapterContent } from "@/content/types";

/**
 * NEET Hydrocarbons: Alkanes, Alkenes, Alkynes and Aromatic Hydrocarbons — NEET Chemistry (T06).
 * Data-only record generated from the accepted C02 production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryHydrocarbons: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "NEET Hydrocarbons: Alkanes, Alkenes, Alkynes and Aromatic Hydrocarbons",
  "slug": "hydrocarbons",
  "url": "/neet/chemistry/hydrocarbons",
  "canonicalIntent": "Own verified Unit 15 hydrocarbon scope with preparation, properties and reaction logic at NEET depth.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The current 2026 syllabus explicitly includes alkanes, alkenes, alkynes and aromatic hydrocarbons, with preparation, properties and reactions. It also names alkane halogenation, electrophilic addition to alkenes, Markovnikov and peroxide-effect relationships, ozonolysis, polymerisation, alkyne additions, aromaticity and electrophilic substitution of benzene."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE). Official relationship: Unit 15: Hydrocarbons."
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
      "id": "hydrocarbons-t1",
      "slot": "formulas",
      "heading": "Reaction / condition records",
      "intro": "Reagent and condition records; every transformation is condition-dependent and must be read with its stated boundary.",
      "columns": [
        "Substrate",
        "Reagent/condition",
        "Verified transformation",
        "Safety note"
      ],
      "rows": [
        [
          "Alkane",
          "Cl2, hν",
          "Radical substitution",
          "Further substitution can continue."
        ],
        [
          "Alkene",
          "H2, Ni/Pt/Pd",
          "Alkane",
          "Catalyst required."
        ],
        [
          "Alkene",
          "Br2",
          "Vicinal dibromide",
          "Use as addition, not substitution."
        ],
        [
          "Unsymmetrical alkene",
          "HBr, peroxide",
          "Anti-Markovnikov bromide within textbook scope",
          "Do not extend peroxide rule to HCl/HI."
        ],
        [
          "Benzene",
          "HNO3/conc. H2SO4",
          "Nitrobenzene + H2O",
          "Electrophilic aromatic substitution."
        ],
        [
          "Benzene",
          "Br2/FeBr3",
          "Bromobenzene + HBr",
          "Lewis-acid catalyst required."
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
      "label": "Chemical Bonding",
      "url": "/neet/chemistry/chemical-bonding",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Alkanes",
      "Alkenes",
      "Alkynes",
      "Aromatic hydrocarbons"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "hydrocarbons-c1",
      "title": "1. Alkanes",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Cover nomenclature, isomerism, general preparation/property patterns and ethane conformations using Sawhorse/Newman representations as explicitly listed. For halogenation, teach free-radical substitution at the level needed to understand initiation, propagation and termination, without importing advanced radical kinetics."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A representative chlorination equation is:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "CH4 + Cl2 --hν--> CH3Cl + HCl"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Further substitution can occur with excess chlorine; therefore do not imply a single monochloro product is guaranteed under all conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "hydrocarbons-c2",
      "title": "2. Alkenes",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The central reactive feature is the pi bond. Electrophilic addition should be reasoned from electron density and reagent conditions."
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Hydrogenation: CH2=CH2 + H2 --Ni/Pt/Pd--> CH3-CH3."
              }
            ],
            [
              {
                "text": "Bromination: CH2=CH2 + Br2 -> BrCH2-CH2Br."
              }
            ],
            [
              {
                "text": "Hydration under acid catalysis gives an alcohol; orientation follows the verified substrate/reagent context."
              }
            ],
            [
              {
                "text": "Addition of hydrogen halides: Markovnikov orientation is the standard relationship for unsymmetrical alkenes under normal ionic conditions."
              }
            ],
            [
              {
                "text": "Peroxide effect: within the current NCERT/NEET scope, the anti-Markovnikov peroxide effect is associated with HBr, not HCl or HI. Example:"
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "CH3-CH=CH2 + HBr --peroxide--> CH3-CH2-CH2Br."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Ozonolysis should be used as a structural-diagnosis tool: cleavage products reveal the original double-bond substitution pattern. Do not overstate work-up variants beyond current scope."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Polymerisation is explicitly named in Unit 15, but this does not make the separate /polymers route a current standalone syllabus unit."
            }
          ]
        }
      ]
    },
    {
      "id": "hydrocarbons-c3",
      "title": "3. Alkynes",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach terminal-alkyne acidity as a relative property related to hybridisation, at NEET depth. Cover addition of H2, X2, H2O and HX only with correct conditions. For hydration, avoid presenting a single generic product without specifying substrate/conditions because enol formation and tautomerisation determine the observed carbonyl product."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Example hydrogenation:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "HC≡CH + 2H2 --Ni/Pt/Pd--> CH3-CH3."
            }
          ]
        }
      ]
    },
    {
      "id": "hydrocarbons-c4",
      "title": "4. Aromatic hydrocarbons",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Benzene should be treated through structure, aromatic stabilisation and electrophilic substitution. Current scope explicitly includes halogenation, nitration, Friedel-Crafts alkylation/acylation and directive influence in monosubstituted benzene."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Representative nitration:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "C6H6 + HNO3 --conc. H2SO4--> C6H5NO2 + H2O."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Representative bromination:"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "C6H6 + Br2 --FeBr3--> C6H5Br + HBr."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Directive effects should be tied to substituent electron donation/withdrawal and resonance/inductive effects; do not turn them into an unqualified memorisation chart detached from reaction conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "hydrocarbons-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Hydrocarbon Reaction Selector separating radical substitution, electrophilic addition and electrophilic aromatic substitution so students diagnose the reaction family before predicting products."
            }
          ]
        }
      ]
    }
  ],
  "mistakes": [
    {
      "id": "hydrocarbons-m1",
      "mistake": "Applies peroxide effect to every HX",
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
              "text": "Remember the current textbook exception: HBr is the relevant peroxide case."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "hydrocarbons-m2",
      "mistake": "Uses substitution logic on an alkene pi bond",
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
              "text": "Classify reaction centre before choosing mechanism class."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "hydrocarbons-m3",
      "mistake": "Forgets catalyst for benzene halogenation",
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
              "text": "Attach reagent and catalyst as one condition record."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "hydrocarbons-m4",
      "mistake": "Misreads ozonolysis fragments",
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
              "text": "Reconstruct the original C=C carbon by carbon."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "hydrocarbons-m5",
      "mistake": "Aromatic-directing claim is not justified for the stated substituent",
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
              "text": "Check resonance/inductive rationale with SME."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "relatedChapters": [
    {
      "label": "Polymers",
      "url": "/neet/chemistry/polymers",
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
    "title": "NEET Hydrocarbons: Alkanes, Alkenes, Alkynes and Aromatic Hydr | Rank Sarthi",
    "description": "Learn Hydrocarbons for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogTitle": "NEET Hydrocarbons: Alkanes, Alkenes, Alkynes and Aromatic Hydr | Rank Sarthi",
    "ogDescription": "Learn Hydrocarbons for NEET UG 2026 with verified scope, concept logic, reaction conditions, mistakes, reasoning checks and source-led boundaries.",
    "ogType": "article"
  },
  "workedExamples": [
    {
      "id": "hydrocarbons-w1",
      "prompt": "Propene reacts separately with HBr (no peroxide) and HBr in the presence of peroxide. Should both reactions be predicted with the same orientation?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style reasoning item: Propene reacts separately with HBr (no peroxide) and HBr in the presence of peroxide. Should both reactions be predicted with the same orientation?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: No. The peroxide condition changes the relevant pathway for HBr in the current textbook scope."
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
              "text": "Yes. Its verified official relationship is Unit 15: Hydrocarbons."
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
      "label": "Haloalkanes Haloarenes",
      "url": "/neet/chemistry/haloalkanes-haloarenes",
      "relation": "forward"
    },
    {
      "label": "Alcohols Phenols Ethers",
      "url": "/neet/chemistry/alcohols-phenols-ethers",
      "relation": "forward"
    }
  ]
};
