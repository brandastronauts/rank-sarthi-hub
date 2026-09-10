import type { ChapterContent } from "@/content/types";

/**
 * NEET Magnetism: Magnetic Forces, Fields, Dipoles and Galvanometer — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsMagnetism: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Magnetism: Magnetic Forces, Fields, Dipoles and Galvanometer",
  "slug": "magnetism",
  "url": "/neet/physics/magnetism",
  "canonicalIntent": "Merge the official Unit 13 content into one defensible route without inventing removed topics. The page covers fields produced by currents, force on moving charges/current conductors, current loops/dipoles, bar-magnet equivalence, magnetic materials and moving-coil galvanometer. Earth magnetism is deliberately excluded from the current core because it is not explicitly listed in the verified 2026 unit.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NEET UG 2026 Unit 13 combines magnetic effects of current with magnetism. The current scope includes Biot-Savart and Ampere-law applications, forces on charges and conductors, torque on current loops, moving-coil galvanometer, current-loop and bar-magnet dipoles, and para/diamagnetic/ferromagnetic substances. Earth magnetism is not listed as a current Unit 13 bullet."
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
      "label": "Motion in Plane",
      "url": "/neet/physics/motion-in-plane",
      "relation": "prerequisite"
    },
    {
      "label": "Current Electricity",
      "url": "/neet/physics/current-electricity",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Editorial route owning the full current content of NEET UG 2026 Physics Unit 13: Magnetic Effects of Current and Magnetism",
    "topics": [
      "Direction first, algebra second",
      "Force on a moving charge",
      "Fields due to current",
      "Current loops and galvanometer",
      "Bar magnets and materials",
      "Current-scope exclusion"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "magnetism-c1",
      "title": "1. Direction first, algebra second",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Magnetic-force questions fail when the learner substitutes magnitudes before fixing the direction of v, I, B and the relevant cross product. Every diagram should carry coordinate arrows or a right-hand-rule cue."
            }
          ]
        }
      ]
    },
    {
      "id": "magnetism-c2",
      "title": "2. Force on a moving charge",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The magnetic component of Lorentz force is perpendicular to velocity and magnetic field. A magnetic field alone does no work on a point charge, so it can change direction of motion without changing speed. Circular motion occurs for the perpendicular component in a uniform magnetic field; an oblique velocity produces a helix."
            }
          ]
        }
      ]
    },
    {
      "id": "magnetism-c3",
      "title": "3. Fields due to current",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use Biot-Savart for current elements/finite high-symmetry arrangements and Ampere's law as a practical shortcut when symmetry supports a simple constant-field path. The official named Ampere applications are an infinitely long straight current-carrying wire and solenoid."
            }
          ]
        }
      ]
    },
    {
      "id": "magnetism-c4",
      "title": "4. Current loops and galvanometer",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A current loop behaves as a magnetic dipole with moment normal to the loop according to the right-hand rule. The moving-coil galvanometer should connect torque balance to current sensitivity and then to idealized conversion into ammeter/voltmeter, with added resistance chosen for the required measurement role."
            }
          ]
        }
      ]
    },
    {
      "id": "magnetism-c5",
      "title": "5. Bar magnets and materials",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The current syllabus explicitly includes bar magnet as equivalent solenoid, magnetic dipole fields along axis/perpendicular direction, torque on a magnetic dipole, and para-/dia-/ferromagnetic substances with temperature effects. Keep this at NCERT/NEET depth."
            }
          ]
        }
      ]
    },
    {
      "id": "magnetism-c6",
      "title": "6. Current-scope exclusion",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not import Earth magnetism merely because older chapter structures or coaching notes include it. It is not an explicit 2026 Unit 13 bullet in the verified source."
            }
          ]
        }
      ]
    },
    {
      "id": "magnetism-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Magnetic direction board: positive-charge force, negative-charge force, current-element field and loop magnetic moment."
              }
            ],
            [
              {
                "text": "Method chooser: Lorentz/centripetal vs Biot-Savart vs Ampere."
              }
            ],
            [
              {
                "text": "Current-scope boundary card: magnetic materials included; Earth magnetism not explicitly listed for 2026."
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
    "title": "NEET Magnetism: Lorentz Force, Fields & Dipoles | Rank Sarthi",
    "description": "Learn current NEET 2026 magnetism: Lorentz force, Biot-Savart, Ampere law, charged-particle motion, dipoles, galvanometer and magnetic materials.",
    "ogTitle": "NEET Magnetism: Lorentz Force, Fields & Dipoles | Rank Sarthi",
    "ogDescription": "Learn current NEET 2026 magnetism: Lorentz force, Biot-Savart, Ampere law, charged-particle motion, dipoles, galvanometer and magnetic materials.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "magnetism-f1",
      "expression": "F = q(E + v x B)",
      "meaning": "Lorentz force",
      "variables": [],
      "useWhen": "Uniform/local fields as applied; charge sign changes force direction. Unit N.",
      "accessibleText": "Lorentz force: F = q(E + v x B). Uniform/local fields as applied; charge sign changes force direction. Unit N."
    },
    {
      "id": "magnetism-f2",
      "expression": "",
      "meaning": "Magnetic-force magnitude",
      "variables": [],
      "useWhen": "F_B",
      "accessibleText": "Magnetic-force magnitude: . F_B"
    },
    {
      "id": "magnetism-f3",
      "expression": "r = m v_perp/(",
      "meaning": "Circular radius",
      "variables": [],
      "useWhen": "q",
      "accessibleText": "Circular radius: r = m v_perp/(. q"
    },
    {
      "id": "magnetism-f4",
      "expression": "T = 2πm/(",
      "meaning": "Period",
      "variables": [],
      "useWhen": "q",
      "accessibleText": "Period: T = 2πm/(. q"
    },
    {
      "id": "magnetism-f5",
      "expression": "F = I L x B",
      "meaning": "Conductor force",
      "variables": [],
      "useWhen": "Straight segment in uniform B; L points with conventional current.",
      "accessibleText": "Conductor force: F = I L x B. Straight segment in uniform B; L points with conventional current."
    },
    {
      "id": "magnetism-f6",
      "expression": "dB = (mu_0/4π) I dl x r_hat / r^2",
      "meaning": "Biot-Savart",
      "variables": [],
      "useWhen": "Steady current element.",
      "accessibleText": "Biot-Savart: dB = (mu_0/4π) I dl x r_hat / r^2. Steady current element."
    },
    {
      "id": "magnetism-f7",
      "expression": "B = mu_0 N I/(2R)",
      "meaning": "Circular loop centre",
      "variables": [],
      "useWhen": "At centre of N-turn circular loop in air/vacuum.",
      "accessibleText": "Circular loop centre: B = mu_0 N I/(2R). At centre of N-turn circular loop in air/vacuum."
    },
    {
      "id": "magnetism-f8",
      "expression": "closed integral B.dl = mu_0 I_enclosed",
      "meaning": "Ampere law",
      "variables": [],
      "useWhen": "Magnetostatic current; practical simplification needs symmetry.",
      "accessibleText": "Ampere law: closed integral B.dl = mu_0 I_enclosed. Magnetostatic current; practical simplification needs symmetry."
    },
    {
      "id": "magnetism-f9",
      "expression": "B = mu_0 I/(2πr)",
      "meaning": "Long straight wire",
      "variables": [],
      "useWhen": "Infinitely long/very long straight wire approximation.",
      "accessibleText": "Long straight wire: B = mu_0 I/(2πr). Infinitely long/very long straight wire approximation."
    },
    {
      "id": "magnetism-f10",
      "expression": "B approx mu_0 n I",
      "meaning": "Long solenoid",
      "variables": [],
      "useWhen": "Ideal long solenoid, interior away from ends.",
      "accessibleText": "Long solenoid: B approx mu_0 n I. Ideal long solenoid, interior away from ends."
    },
    {
      "id": "magnetism-f11",
      "expression": "m = N I A",
      "meaning": "Magnetic dipole moment",
      "variables": [],
      "useWhen": "Area vector by right-hand rule. Unit A m^2.",
      "accessibleText": "Magnetic dipole moment: m = N I A. Area vector by right-hand rule. Unit A m^2."
    },
    {
      "id": "magnetism-f12",
      "expression": "tau = m x B;",
      "meaning": "Loop torque",
      "variables": [],
      "useWhen": "tau",
      "accessibleText": "Loop torque: tau = m x B;. tau"
    },
    {
      "id": "magnetism-f13",
      "expression": "B = (mu_0/4π)(2m/r^3)",
      "meaning": "Dipole axial field",
      "variables": [],
      "useWhen": "Dipole/far-field axis model.",
      "accessibleText": "Dipole axial field: B = (mu_0/4π)(2m/r^3). Dipole/far-field axis model."
    },
    {
      "id": "magnetism-f14",
      "expression": "B = (mu_0/4π)(m/r^3) opposite m",
      "meaning": "Dipole equatorial field",
      "variables": [],
      "useWhen": "Dipole/far-field equatorial line.",
      "accessibleText": "Dipole equatorial field: B = (mu_0/4π)(m/r^3) opposite m. Dipole/far-field equatorial line."
    },
    {
      "id": "magnetism-f15",
      "expression": "I = (k/(NAB)) theta",
      "meaning": "Galvanometer current",
      "variables": [],
      "useWhen": "Linear torsion k theta, radial/uniform field idealization.",
      "accessibleText": "Galvanometer current: I = (k/(NAB)) theta. Linear torsion k theta, radial/uniform field idealization."
    }
  ],
  "mistakes": [
    {
      "id": "magnetism-m1",
      "mistake": "Uses right-hand rule for an electron without reversing sign",
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
              "text": "Find force for positive q, then reverse for negative charge."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "magnetism-m2",
      "mistake": "Assumes magnetic field changes particle speed",
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
              "text": "Check that magnetic force is perpendicular to v."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "magnetism-m3",
      "mistake": "Uses Ampere shortcut without symmetry",
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
              "text": "Switch to Biot-Savart or another model."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "magnetism-m4",
      "mistake": "Mixes loop plane angle with magnetic-moment angle",
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
              "text": "Draw area normal first."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "magnetism-m5",
      "mistake": "Adds Earth magnetism as current 2026 content",
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
              "text": "Remove current-scope badge; official Unit 13 does not list it."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "magnetism-w1",
      "prompt": "a positive charge enters a uniform magnetic field with speed v at angle 30 degrees to B.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: charged-particle motion in a uniform magnetic field."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: a positive charge enters a uniform magnetic field with speed v at angle 30 degrees to B."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: split velocity into parallel and perpendicular components."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: v_parallel = v cos30 remains unchanged; v_perp = v sin30 = v/2 produces circular motion with r = m(v/2)/(qB). Combined motion is helical."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: m v/(qB) has unit metres; helix handedness depends on positive charge and B direction."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Decision / Selection Error if total v is used for radius; Execution Error if vector direction is mishandled."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is Earth magnetism explicitly in NEET UG 2026 Unit 13?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. The verified Unit 13 lists current-produced fields, forces, dipoles, galvanometer and magnetic materials, but not Earth magnetism."
            }
          ]
        }
      ]
    },
    {
      "question": "Does a magnetic field do work on a charged particle?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The magnetic force is perpendicular to velocity, so a magnetic field alone changes direction rather than speed."
            }
          ]
        }
      ]
    },
    {
      "question": "When should Ampere's law be used to calculate B directly?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When symmetry lets the field magnitude/direction simplify on the chosen Amperian path."
            }
          ]
        }
      ]
    },
    {
      "question": "What direction is a current loop's magnetic moment?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Normal to the loop according to the right-hand rule."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Electromagnetic Induction",
      "url": "/neet/physics/electromagnetic-induction",
      "relation": "forward"
    },
    {
      "label": "Alternating Current",
      "url": "/neet/physics/alternating-current",
      "relation": "forward"
    }
  ]
};
