import type { ChapterContent } from "@/content/types";

/**
 * NEET Work, Energy and Power: Work-Energy Theorem, Springs and Collisions — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsWorkEnergyPower: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Work, Energy and Power: Work-Energy Theorem, Springs and Collisions",
  "slug": "work-energy-power",
  "url": "/neet/physics/work-energy-power",
  "canonicalIntent": "Teach official Unit 4 with work by constant/variable forces, kinetic/potential energy, work-energy theorem, power, spring energy, mechanical-energy conservation, conservative/non-conservative forces, vertical-circle context and collisions at NEET depth.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Work-energy methods connect the net work done on a particle to its change in kinetic energy. Use them when force-displacement information or energy changes are more direct than time/acceleration. Mechanical energy is conserved only when the modeled interactions satisfy the conservative-force condition; collision kinetic energy is conserved only for elastic collisions."
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
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Work is model-dependent",
      "Work-energy theorem",
      "Potential energy and conservation",
      "Collisions"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "work-energy-power-c1",
      "title": "1. Work is model-dependent",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a constant force, work is the scalar product of force and displacement. The sign follows the angle between them. A force perpendicular to displacement does zero work even if its magnitude is large. For a varying force, work is the area under the force-position curve in one dimension or the path integral in vector form."
            }
          ]
        }
      ]
    },
    {
      "id": "work-energy-power-c2",
      "title": "2. Work-energy theorem",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Net work equals the change in kinetic energy. This often avoids solving for time or acceleration. It does not require each individual force to be conservative; it uses the net work of all forces."
            }
          ]
        }
      ]
    },
    {
      "id": "work-energy-power-c3",
      "title": "3. Potential energy and conservation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Potential energy is introduced for conservative interactions. If only conservative forces do work within the chosen system, mechanical energy can remain constant. If friction or another non-conservative interaction transfers energy, include that work/energy transfer explicitly rather than forcing K+U=constant."
            }
          ]
        }
      ]
    },
    {
      "id": "work-energy-power-c4",
      "title": "4. Collisions",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Linear momentum conservation depends on external impulse; kinetic-energy conservation is an additional condition that distinguishes an elastic collision. Do not assume an inelastic collision conserves kinetic energy."
            }
          ]
        }
      ]
    },
    {
      "id": "work-energy-power-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Force-position area diagram"
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
                "text": "Energy-accounting table: conservative vs non-conservative"
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
                "text": "Collision condition decision card"
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
    "title": "NEET Work Energy Power: Theorem, Springs & Collisions | Rank Sarthi",
    "description": "Study NEET Work, Energy and Power with work-energy theorem, potential energy, springs, power, conservation conditions and collision checks.",
    "ogTitle": "NEET Work Energy Power: Theorem, Springs & Collisions | Rank Sarthi",
    "ogDescription": "Study NEET Work, Energy and Power with work-energy theorem, potential energy, springs, power, conservation conditions and collision checks.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "work-energy-power-f1",
      "expression": "W = F s cosθ",
      "meaning": "Constant-force work",
      "variables": [],
      "useWhen": "Scalar; joule = N m. Constant force over displacement s; θ is angle between force and displacement.",
      "accessibleText": "Constant-force work: W = F s cosθ. Scalar; joule = N m. Constant force over displacement s; θ is angle between force and displacement."
    },
    {
      "id": "work-energy-power-f2",
      "expression": "W = ∫ F·dr",
      "meaning": "Variable-force work",
      "variables": [],
      "useWhen": "Scalar line integral. In 1D, signed area under F-x curve.",
      "accessibleText": "Variable-force work: W = ∫ F·dr. Scalar line integral. In 1D, signed area under F-x curve."
    },
    {
      "id": "work-energy-power-f3",
      "expression": "K = (1/2)mv^2",
      "meaning": "Kinetic energy",
      "variables": [],
      "useWhen": "Scalar; J. Non-relativistic mechanics.",
      "accessibleText": "Kinetic energy: K = (1/2)mv^2. Scalar; J. Non-relativistic mechanics."
    },
    {
      "id": "work-energy-power-f4",
      "expression": "W_net = ΔK",
      "meaning": "Work-energy theorem",
      "variables": [],
      "useWhen": "Net work of all forces on the particle/system model.",
      "accessibleText": "Work-energy theorem: W_net = ΔK. Net work of all forces on the particle/system model."
    },
    {
      "id": "work-energy-power-f5",
      "expression": "U_s = (1/2)kx^2",
      "meaning": "Spring potential energy",
      "variables": [],
      "useWhen": "Ideal Hooke-law spring; x from equilibrium, k N m^-1; J.",
      "accessibleText": "Spring potential energy: U_s = (1/2)kx^2. Ideal Hooke-law spring; x from equilibrium, k N m^-1; J."
    },
    {
      "id": "work-energy-power-f6",
      "expression": "P = dW/dt; instantaneous mechanical P = F·v",
      "meaning": "Power",
      "variables": [],
      "useWhen": "Watt = J s^-1. F·v for force acting at point with velocity v.",
      "accessibleText": "Power: P = dW/dt; instantaneous mechanical P = F·v. Watt = J s^-1. F·v for force acting at point with velocity v."
    },
    {
      "id": "work-energy-power-f7",
      "expression": "K_i+U_i = K_f+U_f",
      "meaning": "Mechanical-energy condition",
      "variables": [],
      "useWhen": "Use only when the modeled mechanical system has no non-conservative energy transfer.",
      "accessibleText": "Mechanical-energy condition: K_i+U_i = K_f+U_f. Use only when the modeled mechanical system has no non-conservative energy transfer."
    },
    {
      "id": "work-energy-power-f8",
      "expression": "Momentum conserved and total kinetic energy conserved",
      "meaning": "Elastic collision condition",
      "variables": [],
      "useWhen": "Requires negligible external impulse and an elastic interaction; do not apply KE conservation to inelastic collisions.",
      "accessibleText": "Elastic collision condition: Momentum conserved and total kinetic energy conserved. Requires negligible external impulse and an elastic interaction; do not apply KE conservation to inelastic collisions."
    }
  ],
  "mistakes": [
    {
      "id": "work-energy-power-m1",
      "mistake": "Using W=Fs when force is not parallel to displacement",
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
              "text": "Use the scalar product and angle."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "work-energy-power-m2",
      "mistake": "Assuming mechanical energy is always conserved",
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
              "text": "Check whether non-conservative work/energy transfer is present."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "work-energy-power-m3",
      "mistake": "Conserving kinetic energy in an inelastic collision",
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
              "text": "Momentum may conserve under isolation, but KE does not unless elastic."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "work-energy-power-m4",
      "mistake": "Ignoring sign of work",
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
              "text": "Use F·s and interpret angle/direction."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    }
  ],
  "workedExamples": [
    {
      "id": "work-energy-power-w1",
      "prompt": "A 2 kg object starts from rest. The net work done on it is 36 J. Find its speed.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Work-energy theorem"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A 2 kg object starts from rest. The net work done on it is 36 J. Find its speed."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Net work is given directly, so the work-energy theorem is the shortest method."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Set 36 = ΔK = (1/2)mv^2 - 0."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: 36 = (1/2)×2×v^2, so v=6 m s^-1."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Joule equals kg m^2 s^-2, consistent with kinetic energy. Speed is non-negative."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Decision / Selection Error if a time-based kinematic method is invented despite net work being given directly."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What does the work-energy theorem say?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Net work equals change in kinetic energy."
            }
          ]
        }
      ]
    },
    {
      "question": "When is mechanical energy conserved?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When the chosen model has no non-conservative energy transfer affecting K+U."
            }
          ]
        }
      ]
    },
    {
      "question": "Is kinetic energy conserved in every collision?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It is conserved in elastic collisions, not generally in inelastic ones."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Rotational Motion",
      "url": "/neet/physics/rotational-motion",
      "relation": "forward"
    },
    {
      "label": "Gravitation",
      "url": "/neet/physics/gravitation",
      "relation": "forward"
    }
  ]
};
