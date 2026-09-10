import type { ChapterContent } from "@/content/types";

/**
 * Solutions for NEET: Raoult Law, Colligative Properties and van't Hoff Factor — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistrySolutions: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Solutions for NEET: Raoult Law, Colligative Properties and van't Hoff Factor",
  "slug": "solutions",
  "url": "/neet/chemistry/solutions",
  "canonicalIntent": "Own official Unit 5: concentration terms, vapour pressure/Raoult law, ideal and non-ideal solutions at current depth, colligative properties, molecular-mass determination and van't Hoff factor with applicability conditions.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Solution calculations are reliable only when the concentration basis and physical model are stated. Molarity depends on solution volume and therefore temperature; molality depends on solvent mass. Raoult-law and colligative-property equations apply under their stated ideal/dilute assumptions, while the van't Hoff factor accounts for effective particle-number changes from association or dissociation."
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
      "label": "Some Basic Concepts",
      "url": "/neet/chemistry/some-basic-concepts",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Concentration terms",
      "Vapour pressure and Raoult law",
      "Colligative properties",
      "Molecular-mass reasoning"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "solutions-c1",
      "title": "1. Concentration terms",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Molarity M is moles of solute per litre of solution and changes if solution volume changes with temperature. Molality m is moles of solute per kilogram of solvent and is independent of volume. Mole fraction is dimensionless and the mole fractions in a mixture sum to one. Mass percentage uses a mass/mass basis unless another basis is explicitly stated."
            }
          ]
        }
      ]
    },
    {
      "id": "solutions-c2",
      "title": "2. Vapour pressure and Raoult law",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For an ideal solution component i, p_i = x_i p_i°, and total vapour pressure is the sum of component partial pressures. For a nonvolatile solute in an ideal dilute model, the relative lowering of solvent vapour pressure is related to solute mole fraction. Non-ideal solutions show positive or negative deviations from Raoult-law behaviour depending on intermolecular-interaction changes; do not assume ideality if the question explicitly signals association or strong interaction differences."
            }
          ]
        }
      ]
    },
    {
      "id": "solutions-c3",
      "title": "3. Colligative properties",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Colligative properties depend on the number of solute particles rather than their chemical identity in the ideal dilute treatment. The current-scope relations include:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "boiling-point elevation Delta Tb = i Kb m;"
              }
            ],
            [
              {
                "text": "freezing-point depression Delta Tf = i Kf m;"
              }
            ],
            [
              {
                "text": "osmotic pressure pi = i C R T."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "i is the van't Hoff factor. For a non-electrolyte with no association/dissociation, i is approximately 1. Electrolyte dissociation can raise the effective particle count; association can lower it. The actual model must match the species and concentration regime."
            }
          ]
        }
      ]
    },
    {
      "id": "solutions-c4",
      "title": "4. Molecular-mass reasoning",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A colligative measurement can be combined with sample mass and concentration definitions to infer molar mass. The workflow must show which amount basis is measured and whether an i correction is justified; do not automatically insert a textbook integer dissociation count when the problem gives an observed van't Hoff factor."
            }
          ]
        }
      ]
    },
    {
      "id": "solutions-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Concentration Basis Switcher: molarity/molality/mole fraction/mass % with denominator highlighted."
              }
            ],
            [
              {
                "text": "Colligative Model Selector: property -> required concentration -> i assumption -> unit set -> result."
              }
            ],
            [
              {
                "text": "Particle Count Ledger: formula units introduced, effective particles, observed i and whether association/dissociation is implied."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Equilibrium",
      "url": "/neet/chemistry/equilibrium",
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
    "title": "Solutions for NEET: Raoult Law & Colligative Properties | Rank Sarthi",
    "description": "Learn NEET Solutions with molarity, molality, mole fraction, Raoult law, boiling/freezing changes, osmotic pressure and van't Hoff factor.",
    "ogTitle": "Solutions for NEET: Raoult Law & Colligative Properties | Rank Sarthi",
    "ogDescription": "Learn NEET Solutions with molarity, molality, mole fraction, Raoult law, boiling/freezing changes, osmotic pressure and van't Hoff factor.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "solutions-f1",
      "expression": "mol L^-1 if V in L",
      "meaning": "M = n_solute / V_solution",
      "variables": [],
      "useWhen": "Solution volume at stated T",
      "accessibleText": "M = n_solute / V_solution: mol L^-1 if V in L. Solution volume at stated T"
    },
    {
      "id": "solutions-f2",
      "expression": "mol kg^-1",
      "meaning": "m = n_solute / mass_solvent(kg)",
      "variables": [],
      "useWhen": "Solvent mass basis",
      "accessibleText": "m = n_solute / mass_solvent(kg): mol kg^-1. Solvent mass basis"
    },
    {
      "id": "solutions-f3",
      "expression": "dimensionless",
      "meaning": "x_i = n_i / sum(n)",
      "variables": [],
      "useWhen": "Mole basis",
      "accessibleText": "x_i = n_i / sum(n): dimensionless. Mole basis"
    },
    {
      "id": "solutions-f4",
      "expression": "pressure",
      "meaning": "p_i = x_i p_i°",
      "variables": [],
      "useWhen": "Ideal-solution component model",
      "accessibleText": "p_i = x_i p_i°: pressure. Ideal-solution component model"
    },
    {
      "id": "solutions-f5",
      "expression": "K; Kb in K kg mol^-1",
      "meaning": "Delta Tb = i Kb m",
      "variables": [],
      "useWhen": "Dilute colligative model",
      "accessibleText": "Delta Tb = i Kb m: K; Kb in K kg mol^-1. Dilute colligative model"
    },
    {
      "id": "solutions-f6",
      "expression": "K",
      "meaning": "Delta Tf = i Kf m",
      "variables": [],
      "useWhen": "Dilute colligative model",
      "accessibleText": "Delta Tf = i Kf m: K. Dilute colligative model"
    },
    {
      "id": "solutions-f7",
      "expression": "pressure; C mol volume^-1; T K",
      "meaning": "pi = i C R T",
      "variables": [],
      "useWhen": "Dilute solution/osmotic ideal model",
      "accessibleText": "pi = i C R T: pressure; C mol volume^-1; T K. Dilute solution/osmotic ideal model"
    },
    {
      "id": "solutions-f8",
      "expression": "dimensionless",
      "meaning": "i = observed colligative effect / ideal effect for same formula amount",
      "variables": [],
      "useWhen": "Defined comparison",
      "accessibleText": "i = observed colligative effect / ideal effect for same formula amount: dimensionless. Defined comparison"
    }
  ],
  "mistakes": [
    {
      "id": "solutions-m1",
      "mistake": "Cannot distinguish molarity from molality denominator",
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
              "text": "Identify solution volume vs solvent mass before formula selection."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "solutions-m2",
      "mistake": "Forgets colligative equations",
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
              "text": "Retrieve property + concentration basis + i together."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "solutions-m3",
      "mistake": "Uses Celsius in pi=iCRT",
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
              "text": "Convert to kelvin."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "solutions-m4",
      "mistake": "Assumes i=2 for every 1:1 electrolyte regardless of data",
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
              "text": "Use stated/observed model and concentration context."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "solutions-m5",
      "mistake": "Ideality or association state is ambiguous",
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
              "text": "State the assumption or hold the exact numerical inference."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "solutions-w1",
      "prompt": "A 0.100 mol kg^-1 aqueous solution of a non-electrolyte has Kf = 1.86 K kg mol^-1. Assuming i=1, estimate the freezing-point depression.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: A 0.100 mol kg^-1 aqueous solution of a non-electrolyte has Kf = 1.86 K kg mol^-1. Assuming i=1, estimate the freezing-point depression."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Delta Tf = i Kf m = 1 x 1.86 x 0.100 = 0.186 K. This is the magnitude of the depression; the new freezing point would be lower than the pure solvent value by that amount."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Why is molality less temperature-sensitive than molarity?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Molality uses solvent mass, while molarity uses solution volume, which can change with temperature."
            }
          ]
        }
      ]
    },
    {
      "question": "What does the van't Hoff factor represent?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It compares the effective particle-number effect in a colligative measurement with the ideal effect expected from the formula amount."
            }
          ]
        }
      ]
    },
    {
      "question": "Which concentration is used in freezing-point depression?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The standard relation Delta Tf=iKf m uses molality."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Ionic Equilibrium",
      "url": "/neet/chemistry/ionic-equilibrium",
      "relation": "forward"
    },
    {
      "label": "Electrochemistry",
      "url": "/neet/chemistry/electrochemistry",
      "relation": "forward"
    }
  ]
};
