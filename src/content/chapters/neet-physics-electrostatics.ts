import type { ChapterContent } from "@/content/types";

/**
 * NEET Electrostatics: Electric Fields, Potential, Gauss Law and Capacitance — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsElectrostatics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Electrostatics: Electric Fields, Potential, Gauss Law and Capacitance",
  "slug": "electrostatics",
  "url": "/neet/physics/electrostatics",
  "canonicalIntent": "Teach the complete current Unit 11 as one coherent electrostatic model: charge interactions -> field -> flux/Gauss law -> potential/energy -> conductors/dielectrics -> capacitance. Because the frozen Physics registry has no separate capacitance route, this page owns the capacitor portion rather than treating it as an orphan.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Electrostatics studies charges at rest and the fields, potentials and stored electrical energy associated with them. The verified 2026 NEET scope includes Coulomb interaction and superposition, electric field and dipoles, electric flux and Gauss law with named symmetric applications, electric potential and potential energy, conductors/insulators, dielectrics and the full listed capacitance block."
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
    },
    {
      "label": "Motion in Plane",
      "url": "/neet/physics/motion-in-plane",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Exact owner of NEET UG 2026 Physics Unit 11: Electrostatics",
    "topics": [
      "Physical situation and concept model",
      "Electric field and dipoles",
      "Gauss law and symmetry",
      "Potential and energy",
      "Conductors and dielectrics",
      "Capacitance ownership"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "electrostatics-c1",
      "title": "1. Physical situation and concept model",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Start with electric charge. Use conservation of charge and superposition as control rules. For a discrete charge system, field and potential contributions combine, but field is a vector while potential is a scalar. That distinction is a major method-choice boundary."
            }
          ]
        }
      ]
    },
    {
      "id": "electrostatics-c2",
      "title": "2. Electric field and dipoles",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Define the electric field operationally as force per unit positive test charge. Field-line diagrams must encode direction and relative field density without implying that lines are physical objects. Dipole content should show dipole-moment direction from negative to positive charge, torque in a uniform field, and axial/equatorial directions."
            }
          ]
        }
      ]
    },
    {
      "id": "electrostatics-c3",
      "title": "3. Gauss law and symmetry",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official syllabus explicitly names applications to an infinitely long uniformly charged straight wire, uniformly charged infinite plane sheet and uniformly charged thin spherical shell. Gauss law is always valid, but it becomes a practical field-calculation method only when symmetry lets the field magnitude and direction simplify on a chosen Gaussian surface."
            }
          ]
        }
      ]
    },
    {
      "id": "electrostatics-c4",
      "title": "4. Potential and energy",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Potential is scalar and is often the faster route when only energy or potential difference is asked. A zero electric field at a point does not imply zero potential there. Equipotential surfaces are perpendicular to the electric field in electrostatics. Potential-energy sign must be tied to the chosen zero reference and charge configuration."
            }
          ]
        }
      ]
    },
    {
      "id": "electrostatics-c5",
      "title": "5. Conductors and dielectrics",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For electrostatic equilibrium in an ideal conductor, the field inside the conducting material is zero and the conductor is at one potential. Dielectric polarization changes the effective field/capacitance response. Keep the treatment at NEET depth."
            }
          ]
        }
      ]
    },
    {
      "id": "electrostatics-c6",
      "title": "6. Capacitance ownership",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Capacitance is explicitly inside Unit 11 and there is no separate frozen capacitor route. This page therefore owns series/parallel combinations, parallel-plate capacitance with and without a dielectric, and stored energy. Battery-connected and isolated-capacitor situations must be distinguished before applying energy or charge relations."
            }
          ]
        }
      ]
    },
    {
      "id": "electrostatics-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Field vs potential decision map: vector addition for field, scalar addition for potential, symmetry gate for Gauss."
              }
            ],
            [
              {
                "text": "Gauss-law symmetry chooser: line, plane and thin spherical shell with matching Gaussian surface and why it works."
              }
            ],
            [
              {
                "text": "Capacitor control-state card: isolated capacitor vs battery-connected capacitor before any dielectric/energy reasoning."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Current Electricity",
      "url": "/neet/physics/current-electricity",
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
    "title": "NEET Electrostatics: Field, Gauss Law, Potential & Capacitance | Rank Sarthi",
    "description": "Learn current NEET 2026 Electrostatics through electric fields, dipoles, Gauss law, potential, dielectrics, capacitors and condition-aware formulas.",
    "ogTitle": "NEET Electrostatics: Field, Gauss Law, Potential & Capacitance | Rank Sarthi",
    "ogDescription": "Learn current NEET 2026 Electrostatics through electric fields, dipoles, Gauss law, potential, dielectrics, capacitors and condition-aware formulas.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "electrostatics-f1",
      "expression": "F = (1/(4πepsilon_0)) q1 q2 / r^2 along line of centres",
      "meaning": "Coulomb force",
      "variables": [],
      "useWhen": "Point charges, electrostatic situation, vacuum/air approximation. Vector direction follows attraction/repulsion. F in N.",
      "accessibleText": "Coulomb force: F = (1/(4πepsilon_0)) q1 q2 / r^2 along line of centres. Point charges, electrostatic situation, vacuum/air approximation. Vector direction follows attraction/repulsion. F in N."
    },
    {
      "id": "electrostatics-f2",
      "expression": "E = (1/(4πepsilon_0)) q/r^2 r_hat",
      "meaning": "Point-charge field",
      "variables": [],
      "useWhen": "Field points away from positive and toward negative source. E in N/C or V/m.",
      "accessibleText": "Point-charge field: E = (1/(4πepsilon_0)) q/r^2 r_hat. Field points away from positive and toward negative source. E in N/C or V/m."
    },
    {
      "id": "electrostatics-f3",
      "expression": "p = q d",
      "meaning": "Dipole moment",
      "variables": [],
      "useWhen": "p points from negative to positive. Unit C m.",
      "accessibleText": "Dipole moment: p = q d. p points from negative to positive. Unit C m."
    },
    {
      "id": "electrostatics-f4",
      "expression": "tau = p x E,",
      "meaning": "Dipole torque",
      "variables": [],
      "useWhen": "tau",
      "accessibleText": "Dipole torque: tau = p x E,. tau"
    },
    {
      "id": "electrostatics-f5",
      "expression": "Phi_E = integral E.dA; uniform planar EA cos(theta)",
      "meaning": "Electric flux",
      "variables": [],
      "useWhen": "theta is between E and area normal. Unit N m^2/C.",
      "accessibleText": "Electric flux: Phi_E = integral E.dA; uniform planar EA cos(theta). theta is between E and area normal. Unit N m^2/C."
    },
    {
      "id": "electrostatics-f6",
      "expression": "closed integral E.dA = Q_enclosed/epsilon_0",
      "meaning": "Gauss law",
      "variables": [],
      "useWhen": "Any closed surface; direct field calculation needs useful symmetry.",
      "accessibleText": "Gauss law: closed integral E.dA = Q_enclosed/epsilon_0. Any closed surface; direct field calculation needs useful symmetry."
    },
    {
      "id": "electrostatics-f7",
      "expression": "V = (1/(4πepsilon_0)) q/r",
      "meaning": "Point-charge potential",
      "variables": [],
      "useWhen": "Zero at infinity for isolated point charge. Unit V.",
      "accessibleText": "Point-charge potential: V = (1/(4πepsilon_0)) q/r. Zero at infinity for isolated point charge. Unit V."
    },
    {
      "id": "electrostatics-f8",
      "expression": "U = (1/(4πepsilon_0)) q1 q2/r",
      "meaning": "Pair potential energy",
      "variables": [],
      "useWhen": "Zero at infinite separation. Unit J.",
      "accessibleText": "Pair potential energy: U = (1/(4πepsilon_0)) q1 q2/r. Zero at infinite separation. Unit J."
    },
    {
      "id": "electrostatics-f9",
      "expression": "U = -p.E = -pE cos(theta)",
      "meaning": "Dipole potential energy",
      "variables": [],
      "useWhen": "Uniform external field.",
      "accessibleText": "Dipole potential energy: U = -p.E = -pE cos(theta). Uniform external field."
    },
    {
      "id": "electrostatics-f10",
      "expression": "C = Q/Delta V",
      "meaning": "Capacitance",
      "variables": [],
      "useWhen": "Linear capacitor definition. Unit F.",
      "accessibleText": "Capacitance: C = Q/Delta V. Linear capacitor definition. Unit F."
    },
    {
      "id": "electrostatics-f11",
      "expression": "C = epsilon A/d",
      "meaning": "Parallel-plate capacitor",
      "variables": [],
      "useWhen": "Edge effects neglected; epsilon=epsilon_0 in vacuum or epsilon_r epsilon_0 for fully filled linear dielectric.",
      "accessibleText": "Parallel-plate capacitor: C = epsilon A/d. Edge effects neglected; epsilon=epsilon_0 in vacuum or epsilon_r epsilon_0 for fully filled linear dielectric."
    },
    {
      "id": "electrostatics-f12",
      "expression": "C_eq = sum C_i",
      "meaning": "Capacitors in parallel",
      "variables": [],
      "useWhen": "Same potential difference across each.",
      "accessibleText": "Capacitors in parallel: C_eq = sum C_i. Same potential difference across each."
    },
    {
      "id": "electrostatics-f13",
      "expression": "1/C_eq = sum 1/C_i",
      "meaning": "Capacitors in series",
      "variables": [],
      "useWhen": "Same magnitude series charge in the ideal steady arrangement.",
      "accessibleText": "Capacitors in series: 1/C_eq = sum 1/C_i. Same magnitude series charge in the ideal steady arrangement."
    },
    {
      "id": "electrostatics-f14",
      "expression": "U = 1/2 C V^2 = Q^2/(2C) = 1/2 QV",
      "meaning": "Stored energy",
      "variables": [],
      "useWhen": "Choose form according to what remains fixed. Unit J.",
      "accessibleText": "Stored energy: U = 1/2 C V^2 = Q^2/(2C) = 1/2 QV. Choose form according to what remains fixed. Unit J."
    }
  ],
  "mistakes": [
    {
      "id": "electrostatics-m1",
      "mistake": "Adds electric fields as scalars",
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
              "text": "Resolve vectors or exploit symmetry before summing."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "electrostatics-m2",
      "mistake": "Assumes zero field means zero potential",
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
              "text": "Rebuild field-vs-potential distinction."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "electrostatics-m3",
      "mistake": "Uses Gauss law on geometry with no exploitable symmetry",
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
              "text": "Switch to Coulomb/superposition or potential method."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "electrostatics-m4",
      "mistake": "Applies capacitor energy formula without checking battery connection",
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
              "text": "Identify what is held fixed first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "electrostatics-m5",
      "mistake": "Exact sign/direction remains ambiguous",
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
              "text": "Draw axes, source charges and area normal before algebra."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "electrostatics-w1",
      "prompt": "two identical positive point charges +q are placed at equal distance a on opposite sides of the origin.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: field and potential are different mathematical objects."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: two identical positive point charges +q are placed at equal distance a on opposite sides of the origin."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: use vector superposition for E and scalar superposition for V."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: at the origin, equal and opposite field vectors cancel, so E=0. Each potential is kq/a, so V=2kq/a, not zero."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: E is N/C; V is V and positive for positive source charges with zero at infinity."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Knowledge Gap if the learner assumes E=0 forces V=0; otherwise Execution Error if vector cancellation was missed."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is capacitance part of NEET UG 2026 Electrostatics?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. Unit 11 explicitly includes capacitors, series/parallel combinations, parallel-plate capacitance with/without dielectric and stored energy."
            }
          ]
        }
      ]
    },
    {
      "question": "When is Gauss law the best calculation method?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When the charge distribution has enough symmetry that E is constant or has a simple directional relation on a suitable closed surface."
            }
          ]
        }
      ]
    },
    {
      "question": "Can electric field be zero while potential is non-zero?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. Field is a vector and can cancel while scalar potentials add."
            }
          ]
        }
      ]
    },
    {
      "question": "What direction does electric dipole moment point?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "From the negative charge toward the positive charge."
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
