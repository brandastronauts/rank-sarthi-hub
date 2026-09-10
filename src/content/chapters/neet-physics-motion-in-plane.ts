import type { ChapterContent } from "@/content/types";

/**
 * NEET Motion in Plane: Vectors, Projectiles and Circular Motion — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsMotionInPlane: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Motion in Plane: Vectors, Projectiles and Circular Motion",
  "slug": "motion-in-plane",
  "url": "/neet/physics/motion-in-plane",
  "canonicalIntent": "Own the two-dimensional/vector-focused subset of official Unit 2: vector operations, resolution, relative velocity, projectile motion and uniform circular motion.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Motion in Plane applies vector reasoning to two-dimensional motion. Resolve vectors along chosen axes, treat horizontal and vertical projectile motion with their correct accelerations, and use radial acceleration for uniform circular motion. Projectile shortcut formulas require ideal conditions and must not be used blindly."
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
      "label": "Kinematics",
      "url": "/neet/physics/kinematics",
      "relation": "up"
    },
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
      "label": "Kinematics",
      "url": "/neet/physics/kinematics",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused part of a larger current official unit",
    "topics": [
      "Vector model first",
      "Projectile motion",
      "Relative velocity",
      "Uniform circular motion"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "motion-in-plane-c1",
      "title": "1. Vector model first",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Choose perpendicular axes and resolve each vector into components. Addition and subtraction are performed component-wise; a vector's magnitude is not generally the sum of component magnitudes. Scalar and vector products must be distinguished by their output and geometric meaning."
            }
          ]
        }
      ]
    },
    {
      "id": "motion-in-plane-c2",
      "title": "2. Projectile motion",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In the ideal school-level projectile model, horizontal acceleration is zero and vertical acceleration is -g, with air resistance neglected and g treated as uniform. The horizontal and vertical motions share the same time variable. Range and maximum-height shortcuts depend on additional conditions, especially launch and landing at the same level for the standard range formula."
            }
          ]
        }
      ]
    },
    {
      "id": "motion-in-plane-c3",
      "title": "3. Relative velocity",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Relative velocity is the vector difference v_A/B = v_A - v_B. Draw or resolve vectors instead of subtracting speeds as scalars unless the motion is strictly collinear."
            }
          ]
        }
      ]
    },
    {
      "id": "motion-in-plane-c4",
      "title": "4. Uniform circular motion",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Uniform speed does not mean zero acceleration. The velocity direction changes continuously, producing inward radial acceleration of magnitude v^2/r = ω^2 r. The acceleration vector points toward the center."
            }
          ]
        }
      ]
    },
    {
      "id": "motion-in-plane-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Vector-resolution diagram template"
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
                "text": "Projectile condition card showing when shortcut formulas are valid"
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
                "text": "Circular-motion velocity/acceleration direction diagram"
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
    "title": "NEET Motion in Plane: Vectors & Projectile Motion | Rank Sarthi",
    "description": "Study NEET Motion in Plane with vectors, relative velocity, projectile formulas, circular motion and explicit validity conditions.",
    "ogTitle": "NEET Motion in Plane: Vectors & Projectile Motion | Rank Sarthi",
    "ogDescription": "Study NEET Motion in Plane with vectors, relative velocity, projectile formulas, circular motion and explicit validity conditions.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "motion-in-plane-f1",
      "expression": "A_x=A cosθ, A_y=A sinθ;",
      "meaning": "Vector components",
      "variables": [],
      "useWhen": "A",
      "accessibleText": "Vector components: A_x=A cosθ, A_y=A sinθ;. A"
    },
    {
      "id": "motion-in-plane-f2",
      "expression": "v_A/B = v_A - v_B",
      "meaning": "Relative velocity",
      "variables": [],
      "useWhen": "Vector equation; m s^-1. Use vector subtraction, not speed subtraction unless collinear.",
      "accessibleText": "Relative velocity: v_A/B = v_A - v_B. Vector equation; m s^-1. Use vector subtraction, not speed subtraction unless collinear."
    },
    {
      "id": "motion-in-plane-f3",
      "expression": "x=(u cosθ)t; y=(u sinθ)t-(1/2)gt^2",
      "meaning": "Projectile position",
      "variables": [],
      "useWhen": "Ideal projectile, constant downward g, no air resistance, axes with launch point as origin.",
      "accessibleText": "Projectile position: x=(u cosθ)t; y=(u sinθ)t-(1/2)gt^2. Ideal projectile, constant downward g, no air resistance, axes with launch point as origin."
    },
    {
      "id": "motion-in-plane-f4",
      "expression": "T = 2u sinθ/g",
      "meaning": "Time of flight, same level",
      "variables": [],
      "useWhen": "Requires launch and landing at same vertical level under the ideal projectile model.",
      "accessibleText": "Time of flight, same level: T = 2u sinθ/g. Requires launch and landing at same vertical level under the ideal projectile model."
    },
    {
      "id": "motion-in-plane-f5",
      "expression": "R = u^2 sin(2θ)/g",
      "meaning": "Range, same level",
      "variables": [],
      "useWhen": "Same-level launch/landing, constant g, no air resistance.",
      "accessibleText": "Range, same level: R = u^2 sin(2θ)/g. Same-level launch/landing, constant g, no air resistance."
    },
    {
      "id": "motion-in-plane-f6",
      "expression": "H = u^2 sin^2θ/(2g)",
      "meaning": "Maximum height",
      "variables": [],
      "useWhen": "Vertical component reaches zero; same ideal assumptions.",
      "accessibleText": "Maximum height: H = u^2 sin^2θ/(2g). Vertical component reaches zero; same ideal assumptions."
    },
    {
      "id": "motion-in-plane-f7",
      "expression": "a_c = v^2/r = ω^2 r",
      "meaning": "Uniform circular acceleration",
      "variables": [],
      "useWhen": "Magnitude of inward radial acceleration for uniform circular motion; m s^-2.",
      "accessibleText": "Uniform circular acceleration: a_c = v^2/r = ω^2 r. Magnitude of inward radial acceleration for uniform circular motion; m s^-2."
    }
  ],
  "mistakes": [
    {
      "id": "motion-in-plane-m1",
      "mistake": "Subtracting relative speeds instead of velocity vectors",
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
              "text": "Resolve directions and subtract vectors."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "motion-in-plane-m2",
      "mistake": "Using the standard range formula when launch and landing heights differ",
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
              "text": "Use component equations with the actual vertical condition."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "motion-in-plane-m3",
      "mistake": "Saying acceleration is zero in uniform circular motion because speed is constant",
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
              "text": "Velocity changes direction; radial acceleration is nonzero."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "motion-in-plane-m4",
      "mistake": "Dropping component signs after choosing axes",
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
              "text": "Carry signed components through the calculation."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    }
  ],
  "workedExamples": [
    {
      "id": "motion-in-plane-w1",
      "prompt": "A projectile is launched at 20 m s^-1 at 30° above horizontal and lands at the same level. Take g=10 m s^-2. Find time of flight and range.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Projectile motion"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A projectile is launched at 20 m s^-1 at 30° above horizontal and lands at the same level. Take g=10 m s^-2. Find time of flight and range."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Same-level launch/landing and ideal projectile conditions allow the shortcut formulas."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Use T=2u sinθ/g and R=u^2 sin2θ/g."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: T=2×20×0.5/10=2 s. R=400×sin60°/10≈34.6 m."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Time in seconds, range in metres. Horizontal direction is positive; g magnitude is used in the shortcut formulas."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Decision / Selection Error if same-level formulas are used without verifying the height condition."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What acceleration acts on an ideal projectile?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Zero horizontally and constant downward g vertically."
            }
          ]
        }
      ]
    },
    {
      "question": "When is R = u^2 sin2θ/g valid?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For the ideal projectile model when launch and landing are at the same level."
            }
          ]
        }
      ]
    },
    {
      "question": "Is acceleration zero in uniform circular motion?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Radial acceleration of magnitude v^2/r points inward."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Laws of Motion",
      "url": "/neet/physics/laws-of-motion",
      "relation": "forward"
    }
  ]
};
