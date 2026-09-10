import type { ChapterContent } from "@/content/types";

/**
 * NEET Rotational Motion: Torque, Angular Momentum and Moment of Inertia — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsRotationalMotion: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Rotational Motion: Torque, Angular Momentum and Moment of Inertia",
  "slug": "rotational-motion",
  "url": "/neet/physics/rotational-motion",
  "canonicalIntent": "Teach official Unit 5 through center of mass, torque, angular momentum, moment of inertia, axis theorems, rigid-body equilibrium and fixed-axis rotational motion with exact body/axis conditions on inertia formulas.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Rotational Motion translates linear-mechanics ideas into angular form, but moment of inertia is never just a property of the material or body name. It depends on the mass distribution and the specified axis. Define the axis, use vector torque/angular momentum where required, then apply rigid-body equations only under their stated conditions."
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
      "label": "Laws of Motion",
      "url": "/neet/physics/laws-of-motion",
      "relation": "prerequisite"
    },
    {
      "label": "Work Energy Power",
      "url": "/neet/physics/work-energy-power",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Center of mass",
      "Torque and angular momentum",
      "Moment of inertia and axis conditions",
      "Equilibrium"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "rotational-motion-c1",
      "title": "1. Center of mass",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a particle system, center of mass is the mass-weighted mean position. It provides a useful translational description of the whole system under external force. The page should distinguish center of mass from geometric center, which coincide only for appropriate symmetric uniform bodies."
            }
          ]
        }
      ]
    },
    {
      "id": "rotational-motion-c2",
      "title": "2. Torque and angular momentum",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Torque is the vector product r × F; its direction follows the right-hand rule. Angular momentum of a particle is r × p. About a fixed axis for a rigid body under the standard model, angular momentum and rotational kinetic energy can be expressed using the moment of inertia."
            }
          ]
        }
      ]
    },
    {
      "id": "rotational-motion-c3",
      "title": "3. Moment of inertia and axis conditions",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Every tabulated I value must name both body and axis. A thin ring about its symmetry axis, a disc about its central perpendicular axis and a rod about its center each have different formulas. The parallel-axis and perpendicular-axis theorems have specific geometric conditions and cannot be applied to arbitrary 3D axes."
            }
          ]
        }
      ]
    },
    {
      "id": "rotational-motion-c4",
      "title": "4. Equilibrium",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Rigid-body equilibrium requires both zero net force and zero net torque under the chosen inertial-frame model."
            }
          ]
        }
      ]
    },
    {
      "id": "rotational-motion-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Axis-first moment-of-inertia table"
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
                "text": "Torque direction/right-hand diagram"
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
                "text": "Linear vs rotational analogy matrix with limits"
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Mechanics",
      "url": "/neet/physics/mechanics",
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
    "title": "NEET Rotational Motion: Torque, Angular Momentum & MOI | Rank Sarthi",
    "description": "Learn NEET Rotational Motion with torque, angular momentum, moment of inertia, axis theorems and rigid-body condition checks.",
    "ogTitle": "NEET Rotational Motion: Torque, Angular Momentum & MOI | Rank Sarthi",
    "ogDescription": "Learn NEET Rotational Motion with torque, angular momentum, moment of inertia, axis theorems and rigid-body condition checks.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "rotational-motion-f1",
      "expression": "R_cm = (Σ m_i r_i)/(Σ m_i)",
      "meaning": "Center of mass",
      "variables": [],
      "useWhen": "Vector position; m. Discrete particle system. Continuous form uses mass integration.",
      "accessibleText": "Center of mass: R_cm = (Σ m_i r_i)/(Σ m_i). Vector position; m. Discrete particle system. Continuous form uses mass integration."
    },
    {
      "id": "rotational-motion-f2",
      "expression": "τ = r × F; magnitude τ=rF sinθ",
      "meaning": "Torque",
      "variables": [],
      "useWhen": "Vector; N m. r from chosen origin/axis to force application point.",
      "accessibleText": "Torque: τ = r × F; magnitude τ=rF sinθ. Vector; N m. r from chosen origin/axis to force application point."
    },
    {
      "id": "rotational-motion-f3",
      "expression": "L = r × p",
      "meaning": "Angular momentum particle",
      "variables": [],
      "useWhen": "Vector; kg m^2 s^-1.",
      "accessibleText": "Angular momentum particle: L = r × p. Vector; kg m^2 s^-1."
    },
    {
      "id": "rotational-motion-f4",
      "expression": "τ_net = Iα",
      "meaning": "Rotational dynamics fixed axis",
      "variables": [],
      "useWhen": "For rigid body about a fixed axis with constant I about that axis; I kg m^2, α rad s^-2.",
      "accessibleText": "Rotational dynamics fixed axis: τ_net = Iα. For rigid body about a fixed axis with constant I about that axis; I kg m^2, α rad s^-2."
    },
    {
      "id": "rotational-motion-f5",
      "expression": "K_rot = (1/2)Iω^2",
      "meaning": "Rotational kinetic energy",
      "variables": [],
      "useWhen": "Rigid body about a fixed axis; J.",
      "accessibleText": "Rotational kinetic energy: K_rot = (1/2)Iω^2. Rigid body about a fixed axis; J."
    },
    {
      "id": "rotational-motion-f6",
      "expression": "I = Mk^2",
      "meaning": "Radius of gyration",
      "variables": [],
      "useWhen": "k in m about the specified axis.",
      "accessibleText": "Radius of gyration: I = Mk^2. k in m about the specified axis."
    },
    {
      "id": "rotational-motion-f7",
      "expression": "I = I_cm + Md^2",
      "meaning": "Parallel-axis theorem",
      "variables": [],
      "useWhen": "Axis parallel to an axis through center of mass; d perpendicular distance between axes.",
      "accessibleText": "Parallel-axis theorem: I = I_cm + Md^2. Axis parallel to an axis through center of mass; d perpendicular distance between axes."
    },
    {
      "id": "rotational-motion-f8",
      "expression": "I_z = I_x + I_y",
      "meaning": "Perpendicular-axis theorem",
      "variables": [],
      "useWhen": "For a planar lamina; x,y are perpendicular axes in its plane through same point and z perpendicular to plane.",
      "accessibleText": "Perpendicular-axis theorem: I_z = I_x + I_y. For a planar lamina; x,y are perpendicular axes in its plane through same point and z perpendicular to plane."
    },
    {
      "id": "rotational-motion-f9",
      "expression": "L_total = constant",
      "meaning": "Angular momentum conservation",
      "variables": [],
      "useWhen": "Requires zero net external torque about the chosen origin/axis over the interval.",
      "accessibleText": "Angular momentum conservation: L_total = constant. Requires zero net external torque about the chosen origin/axis over the interval."
    }
  ],
  "mistakes": [
    {
      "id": "rotational-motion-m1",
      "mistake": "Using an I formula without checking the axis",
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
              "text": "Name body geometry and axis before substitution."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "rotational-motion-m2",
      "mistake": "Treating torque as always rF",
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
              "text": "Use the perpendicular component: rF sinθ."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "rotational-motion-m3",
      "mistake": "Using perpendicular-axis theorem for a non-planar 3D body",
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
              "text": "Apply it only to a planar lamina with the stated axes."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "rotational-motion-m4",
      "mistake": "Conserving angular momentum despite external torque",
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
              "text": "Check net external torque about the chosen origin."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    }
  ],
  "workedExamples": [
    {
      "id": "rotational-motion-w1",
      "prompt": "A uniform solid disc has mass 2 kg, radius 0.5 m, and rotates about its central axis perpendicular to its plane. A net torque of 1 N m acts. Find angular acceleration.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Rotational dynamics"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A uniform solid disc has mass 2 kg, radius 0.5 m, and rotates about its central axis perpendicular to its plane. A net torque of 1 N m acts. Find angular acceleration."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: The body and axis are specified, so use the solid-disc moment of inertia about the central perpendicular axis and τ=Iα."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: I=(1/2)MR^2=(1/2)×2×0.25=0.25 kg m^2; then α=τ/I."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: α=1/0.25=4 rad s^-2."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: N m/(kg m^2)=s^-2; radian is dimensionless. Axis condition is essential."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Decision / Selection Error if a ring/rod inertia formula is used; Execution Error if units are mishandled."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Does moment of inertia depend on the axis?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. It depends on mass distribution relative to the specified axis."
            }
          ]
        }
      ]
    },
    {
      "question": "When can τ=Iα be used?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For the standard rigid-body fixed-axis model with I defined about that axis."
            }
          ]
        }
      ]
    },
    {
      "question": "When is angular momentum conserved?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When net external torque about the chosen origin/axis is zero."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Gravitation",
      "url": "/neet/physics/gravitation",
      "relation": "forward"
    }
  ]
};
