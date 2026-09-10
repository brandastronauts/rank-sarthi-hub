import type { ChapterContent } from "@/content/types";

/**
 * NEET Thermodynamics: First Law, Isothermal and Adiabatic Processes — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsThermodynamics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Thermodynamics: First Law, Isothermal and Adiabatic Processes",
  "slug": "thermodynamics",
  "url": "/neet/physics/thermodynamics",
  "canonicalIntent": "Teach official Unit 8: thermal equilibrium, zeroth law, temperature concept, heat/work/internal energy, first law, isothermal and adiabatic processes, and second-law reversible/irreversible process distinction.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Thermodynamics tracks energy transfer and state changes of a macroscopic system. Rank Sarthi uses the sign convention Q = ΔU + W, where W is work done by the system. Every worked item must state that convention. Isothermal and adiabatic labels describe different process constraints and should never be used interchangeably."
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
      "label": "Thermal Properties",
      "url": "/neet/physics/thermal-properties",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "State vs process quantities",
      "Sign convention",
      "Isothermal and adiabatic",
      "Second law"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "thermodynamics-c1",
      "title": "1. State vs process quantities",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Internal energy is a state function. Heat and work describe energy transfer across the system boundary during a process and are not state functions. A page should state the system boundary before applying the first law."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-c2",
      "title": "2. Sign convention",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This package uses the NCERT-style form Q = ΔU + W, with Q>0 for heat supplied to the system and W>0 for work done by the system on the surroundings. Equivalent conventions are possible, but mixing them inside one solution produces sign errors."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-c3",
      "title": "3. Isothermal and adiabatic",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "An isothermal process occurs at constant temperature. For an ideal gas, internal energy depends only on temperature, so ΔU=0 in an isothermal process. An adiabatic process has no heat transfer, Q=0; temperature can change. Ideal-gas adiabatic relations require the additional quasistatic/reversible idealization when using PV^γ=constant."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-c4",
      "title": "4. Second law",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The second law introduces directionality and distinguishes reversible idealizations from irreversible real processes. Keep explanations within current syllabus scope and avoid adding unnecessary heat-engine depth not required by the official unit wording."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "First-law sign-convention card"
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
                "text": "State function vs path quantity matrix"
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
                "text": "Isothermal vs adiabatic condition table"
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Kinetic Theory",
      "url": "/neet/physics/kinetic-theory",
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
    "title": "NEET Thermodynamics: First Law, Isothermal & Adiabatic | Rank Sarthi",
    "description": "Study NEET Thermodynamics with a clear first-law sign convention, state/process quantities and isothermal/adiabatic validity conditions.",
    "ogTitle": "NEET Thermodynamics: First Law, Isothermal & Adiabatic | Rank Sarthi",
    "ogDescription": "Study NEET Thermodynamics with a clear first-law sign convention, state/process quantities and isothermal/adiabatic validity conditions.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "thermodynamics-f1",
      "expression": "Q = ΔU + W",
      "meaning": "First law, chosen convention",
      "variables": [],
      "useWhen": "J. Q>0 heat added to system; W>0 work done by system. State convention in every calculation.",
      "accessibleText": "First law, chosen convention: Q = ΔU + W. J. Q>0 heat added to system; W>0 work done by system. State convention in every calculation."
    },
    {
      "id": "thermodynamics-f2",
      "expression": "W = P(V_2-V_1)",
      "meaning": "Constant-pressure boundary work",
      "variables": [],
      "useWhen": "J. Quasistatic process at constant external/system pressure as modeled; expansion gives positive W under chosen convention.",
      "accessibleText": "Constant-pressure boundary work: W = P(V_2-V_1). J. Quasistatic process at constant external/system pressure as modeled; expansion gives positive W under chosen convention."
    },
    {
      "id": "thermodynamics-f3",
      "expression": "W = nRT ln(V_2/V_1)",
      "meaning": "Ideal-gas isothermal work",
      "variables": [],
      "useWhen": "J. Ideal gas, isothermal, quasistatic/reversible path; T K. For ideal gas ΔU=0 in isothermal process.",
      "accessibleText": "Ideal-gas isothermal work: W = nRT ln(V_2/V_1). J. Ideal gas, isothermal, quasistatic/reversible path; T K. For ideal gas ΔU=0 in isothermal process."
    },
    {
      "id": "thermodynamics-f4",
      "expression": "Q=0, so ΔU = -W under chosen convention",
      "meaning": "Adiabatic energy balance",
      "variables": [],
      "useWhen": "Adiabatic means no heat transfer. Sign follows chosen convention.",
      "accessibleText": "Adiabatic energy balance: Q=0, so ΔU = -W under chosen convention. Adiabatic means no heat transfer. Sign follows chosen convention."
    },
    {
      "id": "thermodynamics-f5",
      "expression": "PV^γ = constant",
      "meaning": "Ideal-gas reversible adiabatic",
      "variables": [],
      "useWhen": "Ideal gas with fixed composition, quasistatic/reversible adiabatic process and approximately constant γ over the range.",
      "accessibleText": "Ideal-gas reversible adiabatic: PV^γ = constant. Ideal gas with fixed composition, quasistatic/reversible adiabatic process and approximately constant γ over the range."
    }
  ],
  "mistakes": [
    {
      "id": "thermodynamics-m1",
      "mistake": "Mixing sign conventions for work",
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
              "text": "State the convention before writing the first law."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "thermodynamics-m2",
      "mistake": "Assuming adiabatic means constant temperature",
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
              "text": "Adiabatic means Q=0; temperature may change."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "thermodynamics-m3",
      "mistake": "Using PV^γ=constant for an arbitrary irreversible adiabatic process",
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
              "text": "Require the reversible/quasistatic ideal-gas condition."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "thermodynamics-m4",
      "mistake": "Treating heat as a state function",
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
              "text": "Heat and work are process/path transfers."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    }
  ],
  "workedExamples": [
    {
      "id": "thermodynamics-w1",
      "prompt": "A gas absorbs 500 J of heat and does 200 J of work on the surroundings. Using Q=ΔU+W, find ΔU.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: First law"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A gas absorbs 500 J of heat and does 200 J of work on the surroundings. Using Q=ΔU+W, find ΔU."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: The sign convention is stated; heat added and work done by system are both positive."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Rearrange ΔU = Q - W."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: ΔU = 500 - 200 = 300 J."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Energy unit is joule; positive ΔU means internal energy increased under this process description."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Execution Error if work sign is reversed without changing the first-law convention."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What sign convention does this page use?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Q = ΔU + W, with W positive for work done by the system."
            }
          ]
        }
      ]
    },
    {
      "question": "Does adiabatic mean constant temperature?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It means no heat transfer."
            }
          ]
        }
      ]
    },
    {
      "question": "When is PV^γ=constant valid?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For the ideal-gas quasistatic/reversible adiabatic model with appropriate constant γ."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Kinetic Theory",
      "url": "/neet/physics/kinetic-theory",
      "relation": "forward"
    }
  ]
};
