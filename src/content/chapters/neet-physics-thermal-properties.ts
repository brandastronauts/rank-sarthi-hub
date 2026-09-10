import type { ChapterContent } from "@/content/types";

/**
 * NEET Thermal Properties: Expansion, Calorimetry, Latent Heat and Heat Transfer — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsThermalProperties: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Thermal Properties: Expansion, Calorimetry, Latent Heat and Heat Transfer",
  "slug": "thermal-properties",
  "url": "/neet/physics/thermal-properties",
  "canonicalIntent": "Own the thermal segment explicitly embedded in official Unit 7: heat, temperature, thermal expansion, specific heat, calorimetry, change of state, latent heat, and heat transfer by conduction, convection and radiation.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Thermal Properties owns the heat-and-temperature portion of official Unit 7. Use it for thermal expansion, specific heat, calorimetry, phase change, latent heat and heat transfer. Thermodynamics begins only when the question is about equilibrium, state variables, heat/work/internal energy and thermodynamic laws/processes."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Focused part of a larger current official unit (PARTIAL_OR_MERGED_SCOPE)."
        }
      ]
    }
  ],
  "heroChips": [
    "Focused part of a larger current official unit",
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
      "label": "Properties of Matter",
      "url": "/neet/physics/properties-of-matter",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused part of a larger current official unit",
    "topics": [
      "Temperature is not heat",
      "Expansion",
      "Calorimetry and phase change",
      "Heat transfer"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "thermal-properties-c1",
      "title": "1. Temperature is not heat",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Temperature characterizes thermal state; heat is energy transferred because of temperature difference. Avoid language that treats an object as 'containing heat' in the thermodynamic sense used by the syllabus."
            }
          ]
        }
      ]
    },
    {
      "id": "thermal-properties-c2",
      "title": "2. Expansion",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For small temperature changes over which expansion coefficients are approximately constant, linear expansion is proportional to original length and temperature change. Area and volume approximations for isotropic solids can be related to the linear coefficient under small-strain assumptions."
            }
          ]
        }
      ]
    },
    {
      "id": "thermal-properties-c3",
      "title": "3. Calorimetry and phase change",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Heating within one phase uses Q=mcΔT when specific heat is treated as constant over the interval. During an ideal phase change at constant transition temperature, latent heat uses Q=mL. Calorimetry problems should be solved by energy balance with a clearly defined insulated/closed model when heat loss is neglected."
            }
          ]
        }
      ]
    },
    {
      "id": "thermal-properties-c4",
      "title": "4. Heat transfer",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Conduction transfers energy through a material temperature gradient; convection involves bulk fluid motion; radiation transfers energy electromagnetically and does not require a material medium. Formula use must match the model and geometry."
            }
          ]
        }
      ]
    },
    {
      "id": "thermal-properties-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Heat vs temperature distinction card"
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
                "text": "Thermal process selector: temperature change vs phase change vs transfer"
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
                "text": "Unit 7 boundary diagram"
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Properties of Matter",
      "url": "/neet/physics/properties-of-matter",
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
    "title": "NEET Thermal Properties: Expansion, Calorimetry & Heat Transfer | Rank Sarthi",
    "description": "Learn NEET thermal expansion, specific heat, calorimetry, latent heat, conduction, convection and radiation with model conditions.",
    "ogTitle": "NEET Thermal Properties: Expansion, Calorimetry & Heat Transfer | Rank Sarthi",
    "ogDescription": "Learn NEET thermal expansion, specific heat, calorimetry, latent heat, conduction, convection and radiation with model conditions.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "thermal-properties-f1",
      "expression": "ΔL = α L_0 ΔT",
      "meaning": "Linear expansion",
      "variables": [],
      "useWhen": "m. α K^-1. Small expansion with approximately constant coefficient over ΔT.",
      "accessibleText": "Linear expansion: ΔL = α L_0 ΔT. m. α K^-1. Small expansion with approximately constant coefficient over ΔT."
    },
    {
      "id": "thermal-properties-f2",
      "expression": "ΔV ≈ βV_0ΔT, with β≈3α",
      "meaning": "Volume expansion isotropic solid",
      "variables": [],
      "useWhen": "β K^-1. Approximate small isotropic expansion relation.",
      "accessibleText": "Volume expansion isotropic solid: ΔV ≈ βV_0ΔT, with β≈3α. β K^-1. Approximate small isotropic expansion relation."
    },
    {
      "id": "thermal-properties-f3",
      "expression": "Q = mcΔT",
      "meaning": "Sensible heat",
      "variables": [],
      "useWhen": "J. m kg, c J kg^-1 K^-1. Use when no phase change occurs and c is treated constant.",
      "accessibleText": "Sensible heat: Q = mcΔT. J. m kg, c J kg^-1 K^-1. Use when no phase change occurs and c is treated constant."
    },
    {
      "id": "thermal-properties-f4",
      "expression": "Q = mL",
      "meaning": "Latent heat",
      "variables": [],
      "useWhen": "J. L J kg^-1. Ideal phase change; temperature remains at transition temperature under the simple model.",
      "accessibleText": "Latent heat: Q = mL. J. L J kg^-1. Ideal phase change; temperature remains at transition temperature under the simple model."
    },
    {
      "id": "thermal-properties-f5",
      "expression": "Q/t = kA(T_hot-T_cold)/L",
      "meaning": "Conduction rate slab",
      "variables": [],
      "useWhen": "W. Steady one-dimensional conduction through uniform slab, constant k, area A, thickness L.",
      "accessibleText": "Conduction rate slab: Q/t = kA(T_hot-T_cold)/L. W. Steady one-dimensional conduction through uniform slab, constant k, area A, thickness L."
    },
    {
      "id": "thermal-properties-f6",
      "expression": "P_net = εσA(T^4-T_s^4)",
      "meaning": "Net thermal radiation",
      "variables": [],
      "useWhen": "W. Grey-body approximation with emissivity ε; absolute temperatures in kelvin; surroundings represented by T_s.",
      "accessibleText": "Net thermal radiation: P_net = εσA(T^4-T_s^4). W. Grey-body approximation with emissivity ε; absolute temperatures in kelvin; surroundings represented by T_s."
    }
  ],
  "mistakes": [
    {
      "id": "thermal-properties-m1",
      "mistake": "Using Q=mcΔT during a phase change",
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
              "text": "Use latent heat for the ideal constant-temperature phase-change segment."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "thermal-properties-m2",
      "mistake": "Using Celsius values in T^4 radiation expressions",
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
              "text": "Use absolute temperature in kelvin."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "thermal-properties-m3",
      "mistake": "Calling heat a state variable stored in the body",
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
              "text": "Heat is energy transfer associated with temperature difference."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "thermal-properties-m4",
      "mistake": "Using β=3α without small isotropic-expansion assumptions",
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
              "text": "State the approximation and material model."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "thermal-properties-w1",
      "prompt": "A 2.0 m rod has linear expansion coefficient 2.0×10^-5 K^-1. It is heated by 50 K. Estimate the length increase.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Thermal expansion"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A 2.0 m rod has linear expansion coefficient 2.0×10^-5 K^-1. It is heated by 50 K. Estimate the length increase."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Small expansion and constant coefficient are assumed, so use linear expansion."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: ΔL=αLΔT."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: ΔL=2.0×10^-5 × 2.0 × 50 = 2.0×10^-3 m = 2.0 mm."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Kelvin difference equals Celsius-degree difference numerically for ΔT; final length change has unit m/mm."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Execution Error if ΔT is omitted or units are mishandled; Decision / Selection Error if the coefficient is not approximately constant."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is Thermal Properties a separate official Unit 7 title?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Rank Sarthi uses it as a focused split for the thermal content inside official Unit 7."
            }
          ]
        }
      ]
    },
    {
      "question": "When should Q=mcΔT be used?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For temperature change within a phase when specific heat is treated as constant."
            }
          ]
        }
      ]
    },
    {
      "question": "What temperature scale must be used in a T^4 radiation law?",
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
    }
  ],
  "links": [
    {
      "label": "Thermodynamics",
      "url": "/neet/physics/thermodynamics",
      "relation": "forward"
    },
    {
      "label": "Kinetic Theory",
      "url": "/neet/physics/kinetic-theory",
      "relation": "forward"
    }
  ]
};
