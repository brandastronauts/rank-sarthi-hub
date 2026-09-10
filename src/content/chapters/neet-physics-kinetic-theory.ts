import type { ChapterContent } from "@/content/types";

/**
 * NEET Kinetic Theory of Gases: RMS Speed, Equipartition and Gas Model Assumptions — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsKineticTheory: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Kinetic Theory of Gases: RMS Speed, Equipartition and Gas Model Assumptions",
  "slug": "kinetic-theory",
  "url": "/neet/physics/kinetic-theory",
  "canonicalIntent": "Teach official Unit 9 through perfect-gas state relation, microscopic pressure/temperature model, RMS speed, degrees of freedom, equipartition, gas heat capacities, mean free path and Avogadro constant with model assumptions visible.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Kinetic Theory connects macroscopic gas pressure and temperature to molecular motion under an idealized gas model. The formulas are only meaningful when their assumptions are visible: many molecules, random motion, negligible molecular volume/interactions except collisions, and classical equipartition where applicable."
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
      "label": "NEET Physics",
      "url": "/neet/physics",
      "relation": "up"
    },
    {
      "label": "NEET Physics syllabus",
      "url": "/neet/syllabus/physics",
      "relation": "up"
    },
    {
      "label": "Thermodynamics",
      "url": "/neet/physics/thermodynamics",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Model assumptions",
      "Pressure and temperature",
      "Degrees of freedom and equipartition",
      "Mean free path"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "kinetic-theory-c1",
      "title": "1. Model assumptions",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The school-level ideal-gas kinetic model treats molecules as a large collection in random motion with negligible molecular size compared with container volume and negligible intermolecular forces except during collisions; collisions are idealized as elastic. These assumptions explain why the model cannot be transferred blindly to dense gases or strong-interaction conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "kinetic-theory-c2",
      "title": "2. Pressure and temperature",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Microscopic momentum transfer to container walls gives the pressure relation. Temperature connects to average translational kinetic energy in the classical ideal-gas model. RMS speed depends on absolute temperature and molecular/molar mass."
            }
          ]
        }
      ]
    },
    {
      "id": "kinetic-theory-c3",
      "title": "3. Degrees of freedom and equipartition",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Equipartition assigns (1/2)kT per active quadratic degree of freedom in the classical regime. The number of active degrees can depend on molecular structure and temperature regime; do not blindly freeze one f value for all gases and all temperatures."
            }
          ]
        }
      ]
    },
    {
      "id": "kinetic-theory-c4",
      "title": "4. Mean free path",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Mean free path is the average distance between successive collisions in the idealized gas picture. Any explicit molecular-diameter formula must define number density and the hard-sphere model."
            }
          ]
        }
      ]
    },
    {
      "id": "kinetic-theory-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Kinetic-model assumptions card"
              }
            ]
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Macro-to-micro relation map: P/T -> molecular motion"
              }
            ]
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Degrees-of-freedom condition table"
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Thermal Properties",
      "url": "/neet/physics/thermal-properties",
      "relation": "related"
    }
  ],
  "sources": [
    "ncert-exemplar-index",
    "ncert-physics-11-contents",
    "ncert-physics-12-contents",
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
    "title": "NEET Kinetic Theory: RMS Speed & Equipartition | Rank Sarthi",
    "description": "Learn NEET Kinetic Theory with ideal-gas assumptions, pressure relation, RMS speed, degrees of freedom, equipartition and mean free path.",
    "ogTitle": "NEET Kinetic Theory: RMS Speed & Equipartition | Rank Sarthi",
    "ogDescription": "Learn NEET Kinetic Theory with ideal-gas assumptions, pressure relation, RMS speed, degrees of freedom, equipartition and mean free path.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "kinetic-theory-f1",
      "expression": "PV = nRT = NkT",
      "meaning": "Ideal-gas equation",
      "variables": [],
      "useWhen": "P Pa, V m^3, T K. n moles, N molecules, R gas constant, k Boltzmann constant. Ideal-gas model.",
      "accessibleText": "Ideal-gas equation: PV = nRT = NkT. P Pa, V m^3, T K. n moles, N molecules, R gas constant, k Boltzmann constant. Ideal-gas model."
    },
    {
      "id": "kinetic-theory-f2",
      "expression": "P = (1/3)ρ c_rms^2",
      "meaning": "Pressure relation",
      "variables": [],
      "useWhen": "ρ gas mass density kg m^-3; c_rms m s^-1. Ideal kinetic model, isotropic random motion.",
      "accessibleText": "Pressure relation: P = (1/3)ρ c_rms^2. ρ gas mass density kg m^-3; c_rms m s^-1. Ideal kinetic model, isotropic random motion."
    },
    {
      "id": "kinetic-theory-f3",
      "expression": "c_rms = sqrt(3RT/M)",
      "meaning": "RMS speed molar form",
      "variables": [],
      "useWhen": "m s^-1; M kg mol^-1, T K. Ideal gas.",
      "accessibleText": "RMS speed molar form: c_rms = sqrt(3RT/M). m s^-1; M kg mol^-1, T K. Ideal gas."
    },
    {
      "id": "kinetic-theory-f4",
      "expression": "<K_trans> = (3/2)kT",
      "meaning": "Mean translational KE per molecule",
      "variables": [],
      "useWhen": "J. Classical ideal-gas translational degrees of freedom.",
      "accessibleText": "Mean translational KE per molecule: <K_trans> = (3/2)kT. J. Classical ideal-gas translational degrees of freedom."
    },
    {
      "id": "kinetic-theory-f5",
      "expression": "U = (f/2)nRT",
      "meaning": "Equipartition internal energy",
      "variables": [],
      "useWhen": "J. Classical ideal gas with f active quadratic degrees of freedom.",
      "accessibleText": "Equipartition internal energy: U = (f/2)nRT. J. Classical ideal gas with f active quadratic degrees of freedom."
    },
    {
      "id": "kinetic-theory-f6",
      "expression": "C_V = (f/2)R, C_P = C_V + R, γ=C_P/C_V=1+2/f",
      "meaning": "Heat capacities under equipartition",
      "variables": [],
      "useWhen": "Molar heat capacities in J mol^-1 K^-1 under the ideal-gas/equipartition model with fixed active f.",
      "accessibleText": "Heat capacities under equipartition: C_V = (f/2)R, C_P = C_V + R, γ=C_P/C_V=1+2/f. Molar heat capacities in J mol^-1 K^-1 under the ideal-gas/equipartition model with fixed active f."
    },
    {
      "id": "kinetic-theory-f7",
      "expression": "λ = 1/(sqrt(2) π d^2 n_N)",
      "meaning": "Mean free path, hard-sphere model",
      "variables": [],
      "useWhen": "λ m, molecular diameter d m, number density n_N=N/V m^-3. Dilute hard-sphere gas model.",
      "accessibleText": "Mean free path, hard-sphere model: λ = 1/(sqrt(2) π d^2 n_N). λ m, molecular diameter d m, number density n_N=N/V m^-3. Dilute hard-sphere gas model."
    }
  ],
  "mistakes": [
    {
      "id": "kinetic-theory-m1",
      "mistake": "Using Celsius temperature inside RMS-speed formula",
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
              "text": "Use kelvin absolute temperature."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "kinetic-theory-m2",
      "mistake": "Assuming lighter and heavier gases have the same RMS speed at the same temperature",
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
              "text": "c_rms ∝ 1/sqrt(M)."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "kinetic-theory-m3",
      "mistake": "Using one fixed f without checking active degrees of freedom",
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
              "text": "State the molecular/classical model and active modes."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "kinetic-theory-m4",
      "mistake": "Applying ideal-gas microscopic formulas to dense/strongly interacting conditions without caveat",
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
              "text": "Check model assumptions."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "kinetic-theory-w1",
      "prompt": "Hydrogen H2 and oxygen O2 are ideal gases at the same temperature. Compare their RMS speeds using molar masses 2 and 32 g mol^-1.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: RMS speed comparison"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: Hydrogen H2 and oxygen O2 are ideal gases at the same temperature. Compare their RMS speeds using molar masses 2 and 32 g mol^-1."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: At equal T, c_rms ∝ 1/sqrt(M)."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: c_H2/c_O2 = sqrt(M_O2/M_H2)."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: sqrt(32/2)=sqrt(16)=4. Hydrogen has four times the RMS speed."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: The ratio is dimensionless; both molar masses must use the same units in the ratio."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Recall Gap if inverse-square-root dependence is forgotten; Execution Error if the mass ratio is inverted."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "How does RMS speed depend on molar mass at fixed temperature?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It is proportional to 1/sqrt(M)."
            }
          ]
        }
      ]
    },
    {
      "question": "What temperature scale is used in kinetic-theory formulas?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Kelvin."
            }
          ]
        }
      ]
    },
    {
      "question": "What does equipartition assume?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A classical regime with the specified quadratic degrees of freedom active."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Oscillations",
      "url": "/neet/physics/oscillations",
      "relation": "forward"
    }
  ]
};
