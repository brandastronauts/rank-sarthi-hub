import type { ChapterContent } from "@/content/types";

/**
 * NEET Mechanics: Concept Map, Study Order and Problem-Selection Guide — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsMechanics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Mechanics: Concept Map, Study Order and Problem-Selection Guide",
  "slug": "mechanics",
  "url": "/neet/physics/mechanics",
  "canonicalIntent": "Serve as a broad mechanics navigation and concept-architecture page. It should connect measurement, motion, force, energy, rotation, gravitation and mechanical properties without duplicating the focused child routes.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Mechanics in Rank Sarthi is a navigation umbrella rather than an official standalone NEET UG 2026 unit. Use it to move from measurement and kinematics into force, energy, rotation, gravitation and material/fluid mechanics, then open the focused route that owns the formulas and worked reasoning."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Rank Sarthi learning umbrella, not an official standalone unit (CONTEXTUAL_UMBRELLA)."
        }
      ]
    }
  ],
  "heroChips": [
    "Rank Sarthi learning umbrella, not an official standalone unit",
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
    "unit": "Rank Sarthi learning umbrella, not an official standalone unit",
    "topics": [
      "What mechanics means here",
      "Dependency order",
      "Method selection"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "mechanics-c1",
      "title": "1. What mechanics means here",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The official syllabus is organized into multiple units rather than one unit called Mechanics. Rank Sarthi uses Mechanics as an editorial learning umbrella across the foundational units that describe motion, forces, energy, rotation, gravitation and mechanical behavior of solids/fluids."
            }
          ]
        }
      ]
    },
    {
      "id": "mechanics-c2",
      "title": "2. Dependency order",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A defensible default sequence is:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "Units & Measurements"
              }
            ],
            [
              {
                "text": "Kinematics, with Motion in Plane as a focused child"
              }
            ],
            [
              {
                "text": "Laws of Motion"
              }
            ],
            [
              {
                "text": "Work, Energy and Power"
              }
            ],
            [
              {
                "text": "Rotational Motion"
              }
            ],
            [
              {
                "text": "Gravitation"
              }
            ],
            [
              {
                "text": "Properties of Matter"
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This is a learning sequence, not an official priority ranking."
            }
          ]
        }
      ]
    },
    {
      "id": "mechanics-c3",
      "title": "3. Method selection",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A mechanics question should first be classified by what is conserved or what causes change:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Position/velocity/acceleration with known time behavior: Kinematics."
              }
            ],
            [
              {
                "text": "Net force, momentum, impulse or friction: Laws of Motion."
              }
            ],
            [
              {
                "text": "Work, energy or power and path/force relationships: Work Energy Power."
              }
            ],
            [
              {
                "text": "Torque, angular momentum, moment of inertia or rigid-body rotation: Rotational Motion."
              }
            ],
            [
              {
                "text": "Central gravitational field, satellite or escape/orbit quantities: Gravitation."
              }
            ],
            [
              {
                "text": "Stress/strain, pressure, viscosity, Bernoulli or surface tension: Properties of Matter."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The umbrella should train route selection, not reprint each chapter's formula sheet."
            }
          ]
        }
      ]
    },
    {
      "id": "mechanics-gain",
      "title": "4. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Mechanics dependency graph"
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
                "text": "Question-to-route selector"
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
                "text": "Conservation vs force vs kinematics method matrix"
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
    "title": "NEET Mechanics: Concept Map & Study Order | Rank Sarthi",
    "description": "Use a NEET mechanics concept map to choose the right route for motion, forces, energy, rotation, gravitation and mechanical properties.",
    "ogTitle": "NEET Mechanics: Concept Map & Study Order | Rank Sarthi",
    "ogDescription": "Use a NEET mechanics concept map to choose the right route for motion, forces, energy, rotation, gravitation and mechanical properties.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "mechanics-f1",
      "expression": "No duplicate master formula sheet.",
      "meaning": "Umbrella formula policy",
      "variables": [],
      "useWhen": "Focused child routes own formulas and validity conditions.",
      "accessibleText": "Umbrella formula policy: No duplicate master formula sheet.. Focused child routes own formulas and validity conditions."
    },
    {
      "id": "mechanics-f2",
      "expression": "Identify the governing model before choosing an equation.",
      "meaning": "Method-selection check",
      "variables": [],
      "useWhen": "Prevents mixing kinematics, dynamics and energy methods.",
      "accessibleText": "Method-selection check: Identify the governing model before choosing an equation.. Prevents mixing kinematics, dynamics and energy methods."
    }
  ],
  "mistakes": [
    {
      "id": "mechanics-m1",
      "mistake": "Trying to solve every mechanics problem with kinematic equations",
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
              "text": "Choose force, energy or momentum methods when they match the governing relationship."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "mechanics-m2",
      "mistake": "Skipping units/dimensions in a numerical answer",
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
              "text": "Perform a final SI/dimensional check."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "mechanics-m3",
      "mistake": "Using the mechanics umbrella as a source for leaf formulas",
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
              "text": "Open the focused route that owns formula conditions."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    }
  ],
  "workedExamples": [
    {
      "id": "mechanics-w1",
      "prompt": "A block slides down a rough incline and the question asks for acceleration.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Route selection"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A block slides down a rough incline and the question asks for acceleration."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: The decisive condition is that friction and the component of weight determine net force."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Use Laws of Motion, not Work Energy Power, when acceleration from force balance is the immediate target."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: Write the force balance along the incline, then apply ΣF = ma; no numerical data are needed in this routing item."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Check the stated model/scope condition, sign convention and SI units where a numerical quantity is involved; for routing/ownership items, verify source ownership and do not invent a numerical check."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Decision / Selection Error if a method is chosen before identifying the target and known quantities."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is Mechanics an official NEET UG 2026 Physics unit?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Rank Sarthi uses it as a contextual learning umbrella across several official units."
            }
          ]
        }
      ]
    },
    {
      "question": "Should the Mechanics page contain every mechanics formula?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Focused routes own formulas and conditions."
            }
          ]
        }
      ]
    },
    {
      "question": "Where do friction questions belong?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Laws of Motion unless the specific task is better modeled through energy and the given data support that method."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Kinematics",
      "url": "/neet/physics/kinematics",
      "relation": "forward"
    },
    {
      "label": "Motion in Plane",
      "url": "/neet/physics/motion-in-plane",
      "relation": "forward"
    },
    {
      "label": "Laws of Motion",
      "url": "/neet/physics/laws-of-motion",
      "relation": "forward"
    },
    {
      "label": "Work Energy Power",
      "url": "/neet/physics/work-energy-power",
      "relation": "forward"
    },
    {
      "label": "Rotational Motion",
      "url": "/neet/physics/rotational-motion",
      "relation": "forward"
    },
    {
      "label": "Gravitation",
      "url": "/neet/physics/gravitation",
      "relation": "forward"
    },
    {
      "label": "Properties of Matter",
      "url": "/neet/physics/properties-of-matter",
      "relation": "forward"
    }
  ]
};
