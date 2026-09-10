import type { ChapterContent } from "@/content/types";

/**
 * NEET Current Electricity: Drift, Ohm's Law, Circuits and Bridges — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsCurrentElectricity: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Current Electricity: Drift, Ohm's Law, Circuits and Bridges",
  "slug": "current-electricity",
  "url": "/neet/physics/current-electricity",
  "canonicalIntent": "Teach charge flow from microscopic drift to macroscopic circuit laws, while making the validity limits of Ohm's law and each network formula visible. The page owns the full Unit 12 current scope, including cells, Kirchhoff laws, Wheatstone bridge and metre bridge.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The 2026 NEET Current Electricity unit connects microscopic carrier drift with current, resistance and circuit behavior. It explicitly includes Ohmic and non-Ohmic V-I characteristics, resistivity/conductivity and temperature dependence, cell emf/internal resistance, resistor and cell combinations, Kirchhoff laws, Wheatstone bridge and metre bridge."
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
      "label": "Units Measurements",
      "url": "/neet/physics/units-measurements",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Exact owner of NEET UG 2026 Physics Unit 12: Current Electricity",
    "topics": [
      "From drift to conventional current",
      "Ohm's law with a condition",
      "Resistance and resistivity",
      "Cells and emf",
      "Kirchhoff and bridges",
      "Experimental-skill linkage"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "current-electricity-c1",
      "title": "1. From drift to conventional current",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Define conventional current as the direction of positive-charge flow. In a metallic conductor, electron drift is opposite conventional current. Use the drift relation only with a clearly defined carrier density, charge magnitude and cross-sectional area."
            }
          ]
        }
      ]
    },
    {
      "id": "current-electricity-c2",
      "title": "2. Ohm's law with a condition",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not write \"V = IR always.\" Ohm's law is a material/device behavior under fixed relevant physical conditions when current is proportional to applied potential difference. The official syllabus explicitly includes both Ohmic and non-Ohmic V-I characteristics, so the page should use graphs to distinguish constant-resistance behavior from nonlinear devices."
            }
          ]
        }
      ]
    },
    {
      "id": "current-electricity-c3",
      "title": "3. Resistance and resistivity",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Separate geometry (R) from material property (rho). The relation R = rho L/A assumes a uniform conductor of length L, constant cross-section A and a defined temperature/state. Temperature dependence should be shown as an approximation over the range where a constant temperature coefficient is reasonable."
            }
          ]
        }
      ]
    },
    {
      "id": "current-electricity-c4",
      "title": "4. Cells and emf",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Emf is energy supplied per unit charge by the source, not simply \"voltage flowing.\" Terminal voltage depends on current direction and internal resistance. The sign convention must distinguish a discharging cell from a cell being charged."
            }
          ]
        }
      ]
    },
    {
      "id": "current-electricity-c5",
      "title": "5. Kirchhoff and bridges",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Kirchhoff's junction rule follows charge conservation; loop rule follows energy conservation around a closed circuit under the lumped-circuit model. A bridge formula is valid only for the matching circuit topology and balance condition. The metre-bridge length ratio must use the same left/right resistor assignment shown in the diagram."
            }
          ]
        }
      ]
    },
    {
      "id": "current-electricity-c6",
      "title": "6. Experimental-skill linkage",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official 2026 Unit 20 includes measuring a wire's resistivity with a metre bridge and resistance using Ohm's law. Surface this as a short \"syllabus practical connection\" rather than as invented separate weightage."
            }
          ]
        }
      ]
    },
    {
      "id": "current-electricity-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Ohmic vs non-Ohmic graph discriminator with a rule for what slope means on V-I vs I-V axes."
              }
            ],
            [
              {
                "text": "Kirchhoff sign-convention worksheet that stores current arrow and loop direction before equations."
              }
            ],
            [
              {
                "text": "Metre-bridge topology card tying the length ratio to the drawn resistor placement."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Electrostatics",
      "url": "/neet/physics/electrostatics",
      "relation": "related"
    },
    {
      "label": "Semiconductor Electronics",
      "url": "/neet/physics/semiconductor-electronics",
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
    "title": "NEET Current Electricity: Ohm Law, Circuits & Bridges | Rank Sarthi",
    "description": "Learn NEET 2026 Current Electricity with drift current, Ohmic/non-Ohmic V-I behavior, resistivity, cells, Kirchhoff laws, Wheatstone and metre bridge.",
    "ogTitle": "NEET Current Electricity: Ohm Law, Circuits & Bridges | Rank Sarthi",
    "ogDescription": "Learn NEET 2026 Current Electricity with drift current, Ohmic/non-Ohmic V-I behavior, resistivity, cells, Kirchhoff laws, Wheatstone and metre bridge.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "current-electricity-f1",
      "expression": "I = dQ/dt",
      "meaning": "Current",
      "variables": [],
      "useWhen": "Conventional current direction. Unit A.",
      "accessibleText": "Current: I = dQ/dt. Conventional current direction. Unit A."
    },
    {
      "id": "current-electricity-f2",
      "expression": "I = n q A v_d",
      "meaning": "Drift-current magnitude",
      "variables": [],
      "useWhen": "q is carrier charge magnitude; uniform carrier density and cross-section.",
      "accessibleText": "Drift-current magnitude: I = n q A v_d. q is carrier charge magnitude; uniform carrier density and cross-section."
    },
    {
      "id": "current-electricity-f3",
      "expression": "v_d = mu E in magnitude form",
      "meaning": "Mobility",
      "variables": [],
      "useWhen": "Low-field linear transport model used at NCERT/NEET depth. mu in m^2 V^-1 s^-1.",
      "accessibleText": "Mobility: v_d = mu E in magnitude form. Low-field linear transport model used at NCERT/NEET depth. mu in m^2 V^-1 s^-1."
    },
    {
      "id": "current-electricity-f4",
      "expression": "V = IR",
      "meaning": "Ohm law",
      "variables": [],
      "useWhen": "Ohmic conductor under fixed physical conditions where V-I is linear.",
      "accessibleText": "Ohm law: V = IR. Ohmic conductor under fixed physical conditions where V-I is linear."
    },
    {
      "id": "current-electricity-f5",
      "expression": "R = rho L/A",
      "meaning": "Uniform wire",
      "variables": [],
      "useWhen": "Uniform material/cross-section at specified temperature. rho in ohm m.",
      "accessibleText": "Uniform wire: R = rho L/A. Uniform material/cross-section at specified temperature. rho in ohm m."
    },
    {
      "id": "current-electricity-f6",
      "expression": "sigma = 1/rho",
      "meaning": "Conductivity",
      "variables": [],
      "useWhen": "Linear homogeneous material model. Unit S/m.",
      "accessibleText": "Conductivity: sigma = 1/rho. Linear homogeneous material model. Unit S/m."
    },
    {
      "id": "current-electricity-f7",
      "expression": "R = R0[1 + alpha(T-T0)]",
      "meaning": "Temperature approximation",
      "variables": [],
      "useWhen": "Approximate over a range where alpha is effectively constant.",
      "accessibleText": "Temperature approximation: R = R0[1 + alpha(T-T0)]. Approximate over a range where alpha is effectively constant."
    },
    {
      "id": "current-electricity-f8",
      "expression": "P = VI; resistor forms I^2R, V^2/R",
      "meaning": "Electrical power",
      "variables": [],
      "useWhen": "Steady DC resistor for derived forms. Unit W.",
      "accessibleText": "Electrical power: P = VI; resistor forms I^2R, V^2/R. Steady DC resistor for derived forms. Unit W."
    },
    {
      "id": "current-electricity-f9",
      "expression": "R_eq = sum R_i",
      "meaning": "Series resistors",
      "variables": [],
      "useWhen": "Same current in ideal series branch.",
      "accessibleText": "Series resistors: R_eq = sum R_i. Same current in ideal series branch."
    },
    {
      "id": "current-electricity-f10",
      "expression": "1/R_eq = sum 1/R_i",
      "meaning": "Parallel resistors",
      "variables": [],
      "useWhen": "Same potential difference across branches.",
      "accessibleText": "Parallel resistors: 1/R_eq = sum 1/R_i. Same potential difference across branches."
    },
    {
      "id": "current-electricity-f11",
      "expression": "V = E - Ir",
      "meaning": "Discharging cell terminal voltage",
      "variables": [],
      "useWhen": "Current leaves positive terminal; E emf, r internal resistance.",
      "accessibleText": "Discharging cell terminal voltage: V = E - Ir. Current leaves positive terminal; E emf, r internal resistance."
    },
    {
      "id": "current-electricity-f12",
      "expression": "sum I_in = sum I_out",
      "meaning": "Kirchhoff junction",
      "variables": [],
      "useWhen": "Lumped steady circuit.",
      "accessibleText": "Kirchhoff junction: sum I_in = sum I_out. Lumped steady circuit."
    },
    {
      "id": "current-electricity-f13",
      "expression": "algebraic sum of potential changes = 0",
      "meaning": "Kirchhoff loop",
      "variables": [],
      "useWhen": "Use one traversal direction and consistent source/resistor signs.",
      "accessibleText": "Kirchhoff loop: algebraic sum of potential changes = 0. Use one traversal direction and consistent source/resistor signs."
    },
    {
      "id": "current-electricity-f14",
      "expression": "P/Q = R/S",
      "meaning": "Wheatstone balance",
      "variables": [],
      "useWhen": "Balance condition with named four-arm layout and zero galvanometer current.",
      "accessibleText": "Wheatstone balance: P/Q = R/S. Balance condition with named four-arm layout and zero galvanometer current."
    },
    {
      "id": "current-electricity-f15",
      "expression": "R_left/R_right = l/(100-l)",
      "meaning": "Metre bridge",
      "variables": [],
      "useWhen": "At balance for uniform bridge wire; exact ratio depends on diagram assignment.",
      "accessibleText": "Metre bridge: R_left/R_right = l/(100-l). At balance for uniform bridge wire; exact ratio depends on diagram assignment."
    }
  ],
  "mistakes": [
    {
      "id": "current-electricity-m1",
      "mistake": "Treats electron drift direction as conventional current direction",
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
              "text": "Redraw carrier and conventional-current arrows."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "current-electricity-m2",
      "mistake": "Uses V=IR with one constant R for a nonlinear V-I curve",
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
              "text": "First classify the device as Ohmic/non-Ohmic."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "current-electricity-m3",
      "mistake": "Uses R=rho L/A while temperature/cross-section is changing",
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
              "text": "Recheck model assumptions before substitution."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "current-electricity-m4",
      "mistake": "Gets Kirchhoff loop sign wrong",
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
              "text": "Fix a loop direction and annotate each rise/drop before writing equations."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "current-electricity-m5",
      "mistake": "Bridge ratio does not match diagram labels",
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
              "text": "Re-derive from balance rather than relying on memorized orientation."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "current-electricity-w1",
      "prompt": "a cell of emf 12 V and internal resistance 1 ohm supplies 2 A.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: terminal voltage and internal resistance."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: a cell of emf 12 V and internal resistance 1 ohm supplies 2 A."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: use the discharging-cell terminal relation because current leaves the positive terminal."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: V = E - Ir = 12 - (2)(1) = 10 V."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: Ir is a voltage drop in volts; terminal voltage is lower than emf during discharge."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Decision / Selection Error if the charging sign is chosen; Execution Error for arithmetic/sign loss."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Does Ohm's law apply to every device?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. The 2026 syllabus explicitly includes Ohmic and non-Ohmic V-I characteristics. V=IR with constant R describes the Ohmic linear case under fixed physical conditions."
            }
          ]
        }
      ]
    },
    {
      "question": "What is the difference between resistance and resistivity?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Resistance depends on material and geometry; resistivity is a material property at a specified physical state/temperature."
            }
          ]
        }
      ]
    },
    {
      "question": "What is emf?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Energy supplied by the source per unit charge. Terminal voltage can differ from emf when current flows through internal resistance."
            }
          ]
        }
      ]
    },
    {
      "question": "Is metre bridge in the current syllabus?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. Unit 12 explicitly lists metre bridge, and Unit 20 also links resistivity measurement to the metre-bridge experiment."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Magnetism",
      "url": "/neet/physics/magnetism",
      "relation": "forward"
    },
    {
      "label": "Electromagnetic Induction",
      "url": "/neet/physics/electromagnetic-induction",
      "relation": "forward"
    }
  ]
};
