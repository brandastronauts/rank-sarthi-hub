import type { ChapterContent } from "@/content/types";

/**
 * NEET Laws of Motion: Free-Body Diagrams, Friction, Momentum and Circular Dynamics — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsLawsOfMotion: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Laws of Motion: Free-Body Diagrams, Friction, Momentum and Circular Dynamics",
  "slug": "laws-of-motion",
  "url": "/neet/physics/laws-of-motion",
  "canonicalIntent": "Teach official Unit 3 through force diagrams, Newton laws, momentum/impulse, equilibrium, friction and centripetal-force applications, with explicit static-friction inequality and banked-road conditions.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Laws of Motion problems become reliable when the system is isolated, all external forces are drawn, axes are chosen and only then is ΣF = ma applied. Static friction adjusts up to its limiting value; it is not automatically equal to μ_s N. Centripetal force is the inward net-force requirement, not an extra force to add to the diagram."
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
      "label": "Kinematics",
      "url": "/neet/physics/kinematics",
      "relation": "prerequisite"
    },
    {
      "label": "Motion in Plane",
      "url": "/neet/physics/motion-in-plane",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Free-body diagram before equation",
      "Newton laws and momentum",
      "Friction",
      "Circular dynamics"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "laws-of-motion-c1",
      "title": "1. Free-body diagram before equation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Identify the object/system, then draw only the external forces acting on it. Weight acts vertically downward near Earth's surface; the normal force is perpendicular to the contact surface; tension follows the string direction; friction acts to oppose relative motion or its tendency."
            }
          ]
        }
      ]
    },
    {
      "id": "laws-of-motion-c2",
      "title": "2. Newton laws and momentum",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Newton's second law connects net external force to acceleration. In constant-mass school-level problems, ΣF = ma is the working form. Momentum is a vector, and impulse equals change in momentum. Conservation of linear momentum applies to an isolated system when net external impulse is negligible over the interval."
            }
          ]
        }
      ]
    },
    {
      "id": "laws-of-motion-c3",
      "title": "3. Friction",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Static friction is self-adjusting: 0 ≤ f_s ≤ μ_s N in magnitude, reaching μ_s N only at limiting impending motion under the ideal Coulomb model. Kinetic friction is commonly modeled as f_k = μ_k N once sliding occurs. Direction must be determined from relative motion/tendency, not guessed from the object's velocity alone."
            }
          ]
        }
      ]
    },
    {
      "id": "laws-of-motion-c4",
      "title": "4. Circular dynamics",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For circular motion, the radial component of net force must equal mv^2/r. Do not draw a separate mysterious 'centripetal force' if the real inward forces are already on the diagram. On a frictionless banked road, the horizontal component of the normal supplies the radial force and the vertical component balances weight."
            }
          ]
        }
      ]
    },
    {
      "id": "laws-of-motion-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Free-body diagram checklist"
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
                "text": "Static-friction decision ladder"
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
                "text": "Centripetal-force myth vs net-force model graphic"
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
    "title": "NEET Laws of Motion: Friction, FBDs & Momentum | Rank Sarthi",
    "description": "Learn NEET Laws of Motion with free-body diagrams, Newton laws, friction conditions, momentum, impulse and circular dynamics.",
    "ogTitle": "NEET Laws of Motion: Friction, FBDs & Momentum | Rank Sarthi",
    "ogDescription": "Learn NEET Laws of Motion with free-body diagrams, Newton laws, friction conditions, momentum, impulse and circular dynamics.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "laws-of-motion-f1",
      "expression": "ΣF = ma",
      "meaning": "Newton second law",
      "variables": [],
      "useWhen": "Vector relation for constant-mass school-level problems. Force N = kg m s^-2. Sum only external forces on the chosen system.",
      "accessibleText": "Newton second law: ΣF = ma. Vector relation for constant-mass school-level problems. Force N = kg m s^-2. Sum only external forces on the chosen system."
    },
    {
      "id": "laws-of-motion-f2",
      "expression": "p = mv",
      "meaning": "Momentum",
      "variables": [],
      "useWhen": "Vector; kg m s^-1. For constant mass. Direction follows velocity.",
      "accessibleText": "Momentum: p = mv. Vector; kg m s^-1. For constant mass. Direction follows velocity."
    },
    {
      "id": "laws-of-motion-f3",
      "expression": "J = Δp = ∫F dt; constant force J=FΔt",
      "meaning": "Impulse",
      "variables": [],
      "useWhen": "Vector; N s = kg m s^-1. Use net force for system momentum change.",
      "accessibleText": "Impulse: J = Δp = ∫F dt; constant force J=FΔt. Vector; N s = kg m s^-1. Use net force for system momentum change."
    },
    {
      "id": "laws-of-motion-f4",
      "expression": "0 ≤ f_s ≤ μ_s N",
      "meaning": "Static friction",
      "variables": [],
      "useWhen": "Magnitude under ideal dry-contact model. Equality only at limiting static friction.",
      "accessibleText": "Static friction: 0 ≤ f_s ≤ μ_s N. Magnitude under ideal dry-contact model. Equality only at limiting static friction."
    },
    {
      "id": "laws-of-motion-f5",
      "expression": "f_k = μ_k N",
      "meaning": "Kinetic friction",
      "variables": [],
      "useWhen": "Ideal Coulomb model during sliding; direction opposes relative sliding.",
      "accessibleText": "Kinetic friction: f_k = μ_k N. Ideal Coulomb model during sliding; direction opposes relative sliding."
    },
    {
      "id": "laws-of-motion-f6",
      "expression": "ΣF_radial = mv^2/r",
      "meaning": "Radial force requirement",
      "variables": [],
      "useWhen": "Choose inward radial direction; this is a net-force condition, not an additional physical force.",
      "accessibleText": "Radial force requirement: ΣF_radial = mv^2/r. Choose inward radial direction; this is a net-force condition, not an additional physical force."
    },
    {
      "id": "laws-of-motion-f7",
      "expression": "tanθ = v^2/(rg)",
      "meaning": "Frictionless bank angle",
      "variables": [],
      "useWhen": "Ideal banked curve with no friction; vehicle follows radius r at speed v under weight and normal only.",
      "accessibleText": "Frictionless bank angle: tanθ = v^2/(rg). Ideal banked curve with no friction; vehicle follows radius r at speed v under weight and normal only."
    }
  ],
  "mistakes": [
    {
      "id": "laws-of-motion-m1",
      "mistake": "Writing f_s=μ_sN for every static situation",
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
              "text": "Use the inequality and solve for the friction actually required."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "laws-of-motion-m2",
      "mistake": "Adding centripetal force as an extra force",
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
              "text": "Resolve the real forces; their radial net must equal mv^2/r."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "laws-of-motion-m3",
      "mistake": "Assuming normal force always equals mg",
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
              "text": "Resolve forces perpendicular to the contact surface; acceleration/other forces can change N."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "laws-of-motion-m4",
      "mistake": "Using momentum conservation despite significant external impulse",
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
              "text": "Check system isolation over the interaction interval."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    }
  ],
  "workedExamples": [
    {
      "id": "laws-of-motion-w1",
      "prompt": "A 5 kg block rests on a horizontal rough surface with μ_s=0.4. A horizontal force of 15 N is applied. Take g=10 m s^-2. Does it move and what is friction?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Static friction"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A 5 kg block rests on a horizontal rough surface with μ_s=0.4. A horizontal force of 15 N is applied. Take g=10 m s^-2. Does it move and what is friction?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Maximum static friction is μ_sN; compare the required friction with the limit."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: N=mg=50 N, so f_s,max=20 N. The applied 15 N can be balanced by static friction."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: The block remains at rest and static friction has magnitude 15 N, opposite the applied force."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Force unit N; acceleration is zero. The decisive condition is 15 < 20, so equality f_s=μ_sN does not apply."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Knowledge Gap if 20 N is used automatically; Execution Error if friction direction is wrong."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is static friction always μ_sN?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Static friction adjusts up to a maximum μ_sN."
            }
          ]
        }
      ]
    },
    {
      "question": "Is centripetal force an extra force?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It is the inward net-force requirement supplied by real forces."
            }
          ]
        }
      ]
    },
    {
      "question": "When can momentum be conserved?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When net external impulse on the chosen system is negligible over the interval."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Work Energy Power",
      "url": "/neet/physics/work-energy-power",
      "relation": "forward"
    },
    {
      "label": "Rotational Motion",
      "url": "/neet/physics/rotational-motion",
      "relation": "forward"
    }
  ]
};
