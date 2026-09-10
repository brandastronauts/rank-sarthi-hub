import type { ChapterContent } from "@/content/types";

/**
 * Coordination Compounds for NEET: Nomenclature, Isomerism, VBT and CFT — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryCoordinationCompounds: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Coordination Compounds for NEET: Nomenclature, Isomerism, VBT and CFT",
  "slug": "coordination-compounds",
  "url": "/neet/chemistry/coordination-compounds",
  "canonicalIntent": "Own official Unit 12: Werner framework, ligands/coordination number/denticity/chelation, nomenclature, isomerism, VBT, basic CFT, colour/magnetism and source-verified importance/applications.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Start every coordination-compound problem by separating the bracketed coordination entity from counter-ions. Determine the complex charge, solve the metal oxidation state from ligand charges, count donor atoms for coordination number, and only then apply nomenclature, isomerism, VBT or basic crystal-field reasoning."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE)."
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
      "label": "Chemical Bonding",
      "url": "/neet/chemistry/chemical-bonding",
      "relation": "prerequisite"
    },
    {
      "label": "Periodic Classification",
      "url": "/neet/chemistry/periodic-classification",
      "relation": "prerequisite"
    },
    {
      "label": "D and F Block Elements",
      "url": "/neet/chemistry/d-and-f-block-elements",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Core terms",
      "Oxidation-state workflow",
      "Nomenclature",
      "Isomerism",
      "VBT and basic CFT",
      "Importance"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "coordination-compounds-c1",
      "title": "1. Core terms",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A coordination entity contains a central metal atom/ion surrounded by ligands. A ligand donates one or more donor-atom lone pairs to the metal. Denticity counts donor atoms from one ligand that bind the same centre. Coordination number counts donor atoms directly attached to the metal, not simply the number of ligand molecules."
            }
          ]
        }
      ]
    },
    {
      "id": "coordination-compounds-c2",
      "title": "2. Oxidation-state workflow",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Identify the charge on the bracketed entity using any counter-ions. Let metal oxidation state be x, add ligand charges, and set the sum equal to the complex-ion charge."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Example: [Co(NH3)6]Cl3 contains a +3 complex ion; NH3 is neutral, so Co is +3 and coordination number is 6."
            }
          ]
        }
      ]
    },
    {
      "id": "coordination-compounds-c3",
      "title": "3. Nomenclature",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Source-controlled examples:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "[Co(NH3)6]Cl3: hexaamminecobalt(III) chloride."
              }
            ],
            [
              {
                "text": "K4[Fe(CN)6]: potassium hexacyanidoferrate(II)."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Anionic coordination entities use the appropriate metal-name form such as ferrate. Ligand spelling/order and Roman-numeral oxidation state should follow the current NCERT/IUPAC teaching convention."
            }
          ]
        }
      ]
    },
    {
      "id": "coordination-compounds-c4",
      "title": "4. Isomerism",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Geometrical: cis/trans arrangements, e.g. square-planar [Pt(NH3)2Cl2]."
              }
            ],
            [
              {
                "text": "Linkage: ambidentate ligand binds through different donor atoms, e.g. nitro/nitrito concept."
              }
            ],
            [
              {
                "text": "Optical: chiral arrangements such as [Co(en)3]3+."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use original diagrams."
            }
          ]
        }
      ]
    },
    {
      "id": "coordination-compounds-c5",
      "title": "5. VBT and basic CFT",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "VBT provides a geometry/hybridisation bonding model at current depth. In octahedral CFT, t2g lies lower and eg higher. In tetrahedral CFT, e lies lower and t2 higher, with smaller splitting than a comparable octahedral field. Do not add advanced ligand-field derivations."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Magnetic behaviour depends on oxidation state, d count, geometry and field context. The basic spin-only relation may be used where appropriate after these are known."
            }
          ]
        }
      ]
    },
    {
      "id": "coordination-compounds-c6",
      "title": "6. Importance",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Applications may include source-verified roles in qualitative analysis, extraction/metallurgy and biological systems. Avoid unsupported medical/industrial claims."
            }
          ]
        }
      ]
    },
    {
      "id": "coordination-compounds-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Complex Decoder: counter-ions -> complex charge -> metal oxidation state -> denticity -> coordination number -> name."
              }
            ],
            [
              {
                "text": "Isomerism Decision Grid: connectivity/donor atom/spatial arrangement/chirality -> isomerism class."
              }
            ],
            [
              {
                "text": "Geometry/CFT Sketch Set: original octahedral and tetrahedral energy-level diagrams."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "P Block Elements",
      "url": "/neet/chemistry/p-block-elements",
      "relation": "related"
    }
  ],
  "sources": [
    "ncert-chemistry-11-contents",
    "ncert-chemistry-12-contents",
    "ncert-exemplar-index",
    "nmc-neet-ug-2026-syllabus"
  ],
  "sourceNote": "Official scope is taken from the NEET (UG) 2026 syllabus and official NTA documents; concept structure follows current NCERT contents. No performance, weightage or question-frequency data is asserted.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible"
  ],
  "contentStatus": "draft",
  "meta": {
    "title": "Coordination Compounds for NEET: Nomenclature, VBT & CFT | Rank Sarthi",
    "description": "Learn NEET Coordination Compounds with oxidation state, ligands, coordination number, nomenclature, isomerism, VBT, basic CFT and magnetic reasoning.",
    "ogTitle": "Coordination Compounds for NEET: Nomenclature, VBT & CFT | Rank Sarthi",
    "ogDescription": "Learn NEET Coordination Compounds with oxidation state, ligands, coordination number, nomenclature, isomerism, VBT, basic CFT and magnetic reasoning.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "coordination-compounds-f1",
      "expression": "Use bracketed entity charge",
      "meaning": "metal oxidation state + sum ligand charges = complex charge",
      "variables": [],
      "useWhen": "Including counter-ions inside bracket equation.",
      "accessibleText": "metal oxidation state + sum ligand charges = complex charge: Use bracketed entity charge. Including counter-ions inside bracket equation."
    },
    {
      "id": "coordination-compounds-f2",
      "expression": "Count denticity",
      "meaning": "coordination number = donor atoms bound to metal",
      "variables": [],
      "useWhen": "Calling one bidentate ligand one coordination site.",
      "accessibleText": "coordination number = donor atoms bound to metal: Count denticity. Calling one bidentate ligand one coordination site."
    },
    {
      "id": "coordination-compounds-f3",
      "expression": "Basic spin-only model after d count/field state",
      "meaning": "mu=sqrt(n(n+2)) BM",
      "variables": [],
      "useWhen": "Counting n before oxidation state.",
      "accessibleText": "mu=sqrt(n(n+2)) BM: Basic spin-only model after d count/field state. Counting n before oxidation state."
    },
    {
      "id": "coordination-compounds-f4",
      "expression": "Standard octahedral CFT",
      "meaning": "Octahedral: t2g lower, eg higher",
      "variables": [],
      "useWhen": "Reversing with tetrahedral.",
      "accessibleText": "Octahedral: t2g lower, eg higher: Standard octahedral CFT. Reversing with tetrahedral."
    },
    {
      "id": "coordination-compounds-f5",
      "expression": "Basic tetrahedral CFT",
      "meaning": "Tetrahedral: e lower, t2 higher",
      "variables": [],
      "useWhen": "Assuming same splitting order/magnitude as octahedral.",
      "accessibleText": "Tetrahedral: e lower, t2 higher: Basic tetrahedral CFT. Assuming same splitting order/magnitude as octahedral."
    }
  ],
  "mistakes": [
    {
      "id": "coordination-compounds-m1",
      "mistake": "Cannot distinguish ligand count from coordination number",
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
              "text": "Count donor atoms explicitly."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "coordination-compounds-m2",
      "mistake": "Forgets ligand naming/order",
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
              "text": "Retrieve rule with one verified example."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "coordination-compounds-m3",
      "mistake": "Solves metal oxidation state using neutral formula instead of complex charge",
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
              "text": "Separate brackets and counter-ions first."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "coordination-compounds-m4",
      "mistake": "Chooses isomerism type before checking connectivity/donor atom/geometry",
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
              "text": "Run isomerism grid."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "coordination-compounds-m5",
      "mistake": "Field/geometry assumption not given",
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
              "text": "Do not infer magnetic state beyond supported context."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "coordination-compounds-w1",
      "prompt": "For [Co(NH3)5Cl]Cl2, determine Co oxidation state and coordination number.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: For [Co(NH3)5Cl]Cl2, determine Co oxidation state and coordination number."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Two external Cl- counter-ions mean the bracketed complex is +2. NH3 is neutral and coordinated Cl is -1. x-1=+2, so Co is +3. Five N donor atoms plus one Cl donor atom give coordination number 6."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "How is coordination number calculated?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Count donor atoms directly attached to the central metal; a bidentate ligand contributes two."
            }
          ]
        }
      ]
    },
    {
      "question": "How do I find metal oxidation state?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Determine bracketed complex charge, add known ligand charges and solve for the metal."
            }
          ]
        }
      ]
    },
    {
      "question": "What is basic octahedral CFT ordering?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "t2g is lower and eg higher in the standard octahedral convention."
            }
          ]
        }
      ]
    }
  ]
};
