import type { ChapterContent } from "@/content/types";

/**
 * NEET Kinematics: Motion in a Straight Line, Graphs and Constant Acceleration — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsKinematics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Kinematics: Motion in a Straight Line, Graphs and Constant Acceleration",
  "slug": "kinematics",
  "url": "/neet/physics/kinematics",
  "canonicalIntent": "Own official Unit 2 at unit level while giving focused depth to one-dimensional motion, graphs and uniformly accelerated motion; Motion in Plane owns the vector/projectile/circular-motion child depth.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Kinematics describes motion without first asking what force caused it. For one-dimensional NEET problems, define the axis and sign convention, identify whether acceleration is constant, then choose graph relationships or the constant-acceleration equations only when their conditions are satisfied."
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
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Describe motion before calculating",
      "Graph interpretation",
      "Uniform acceleration",
      "Route split"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "kinematics-c1",
      "title": "1. Describe motion before calculating",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Choose a frame of reference and a positive direction. Position and displacement are signed in one dimension; distance is path length. Average velocity is displacement divided by elapsed time, whereas average speed uses total distance. Instantaneous velocity and acceleration describe local rates of change."
            }
          ]
        }
      ]
    },
    {
      "id": "kinematics-c2",
      "title": "2. Graph interpretation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The slope of a position-time graph gives velocity. The slope of a velocity-time graph gives acceleration. The signed area under a velocity-time graph gives displacement. Students should inspect axes and signs before treating every area as distance."
            }
          ]
        }
      ]
    },
    {
      "id": "kinematics-c3",
      "title": "3. Uniform acceleration",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The familiar kinematic equations are not universal motion equations. They require constant acceleration over the interval. If acceleration changes with time or position, use the appropriate graph or calculus relationship if it is inside the expected level; do not force constant-acceleration formulas."
            }
          ]
        }
      ]
    },
    {
      "id": "kinematics-c4",
      "title": "4. Route split",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Official Unit 2 also includes scalars/vectors, vector operations, relative velocity, Motion in Plane, projectile motion and uniform circular motion. Those two-dimensional components are owned in depth by /neet/physics/motion-in-plane; this Kinematics page remains the unit owner and one-dimensional foundation."
            }
          ]
        }
      ]
    },
    {
      "id": "kinematics-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Graph slope/area interpretation panel"
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
                "text": "Sign-convention checklist"
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
                "text": "Equation-selection matrix keyed to known/unknown variables"
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
    "title": "NEET Kinematics: Motion, Graphs & Equations | Rank Sarthi",
    "description": "Learn NEET Kinematics with motion graphs, velocity, acceleration and constant-acceleration equations, including validity conditions and sign checks.",
    "ogTitle": "NEET Kinematics: Motion, Graphs & Equations | Rank Sarthi",
    "ogDescription": "Learn NEET Kinematics with motion graphs, velocity, acceleration and constant-acceleration equations, including validity conditions and sign checks.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "kinematics-f1",
      "expression": "v_avg = Δx/Δt; instantaneous v = dx/dt",
      "meaning": "Velocity definition",
      "variables": [],
      "useWhen": "x in m, t in s, velocity in m s^-1; vector/sign-bearing in 1D. Average uses displacement, not distance.",
      "accessibleText": "Velocity definition: v_avg = Δx/Δt; instantaneous v = dx/dt. x in m, t in s, velocity in m s^-1; vector/sign-bearing in 1D. Average uses displacement, not distance."
    },
    {
      "id": "kinematics-f2",
      "expression": "a_avg = Δv/Δt; instantaneous a = dv/dt",
      "meaning": "Acceleration",
      "variables": [],
      "useWhen": "m s^-2. Sign depends on axis choice; negative acceleration does not always mean slowing down.",
      "accessibleText": "Acceleration: a_avg = Δv/Δt; instantaneous a = dv/dt. m s^-2. Sign depends on axis choice; negative acceleration does not always mean slowing down."
    },
    {
      "id": "kinematics-f3",
      "expression": "v = u + at",
      "meaning": "Constant acceleration 1",
      "variables": [],
      "useWhen": "Valid only for constant acceleration over the interval. u,v m s^-1; a m s^-2; t s.",
      "accessibleText": "Constant acceleration 1: v = u + at. Valid only for constant acceleration over the interval. u,v m s^-1; a m s^-2; t s."
    },
    {
      "id": "kinematics-f4",
      "expression": "s = ut + (1/2)at^2",
      "meaning": "Constant acceleration 2",
      "variables": [],
      "useWhen": "Constant acceleration; s is signed displacement from the chosen origin/reference.",
      "accessibleText": "Constant acceleration 2: s = ut + (1/2)at^2. Constant acceleration; s is signed displacement from the chosen origin/reference."
    },
    {
      "id": "kinematics-f5",
      "expression": "v^2 = u^2 + 2as",
      "meaning": "Constant acceleration 3",
      "variables": [],
      "useWhen": "Constant acceleration. Useful when time is not needed or given.",
      "accessibleText": "Constant acceleration 3: v^2 = u^2 + 2as. Constant acceleration. Useful when time is not needed or given."
    },
    {
      "id": "kinematics-f6",
      "expression": "v_avg = (u+v)/2",
      "meaning": "Average velocity under constant acceleration",
      "variables": [],
      "useWhen": "Only for constant acceleration in one dimension over the interval.",
      "accessibleText": "Average velocity under constant acceleration: v_avg = (u+v)/2. Only for constant acceleration in one dimension over the interval."
    }
  ],
  "mistakes": [
    {
      "id": "kinematics-m1",
      "mistake": "Using v = u + at when acceleration changes",
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
              "text": "Verify constant acceleration first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "kinematics-m2",
      "mistake": "Treating negative acceleration as automatically slowing down",
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
              "text": "Compare velocity and acceleration signs."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "kinematics-m3",
      "mistake": "Using area under a velocity-time graph as distance without sign handling",
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
              "text": "Signed area gives displacement; distance needs total path treatment."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "kinematics-m4",
      "mistake": "Confusing average speed and average velocity",
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
              "text": "Check distance vs displacement in the numerator."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    }
  ],
  "workedExamples": [
    {
      "id": "kinematics-w1",
      "prompt": "A car moves in a straight line with initial velocity 5 m s^-1 and constant acceleration 2 m s^-2 for 4 s. Find final velocity and displacement.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Constant-acceleration motion"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A car moves in a straight line with initial velocity 5 m s^-1 and constant acceleration 2 m s^-2 for 4 s. Find final velocity and displacement."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Acceleration is explicitly constant, so the standard kinematic equations apply."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Use v=u+at and s=ut+(1/2)at^2."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: v=5+2×4=13 m s^-1; s=5×4 + 0.5×2×16 = 36 m."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Units are m s^-1 and m. Positive signs follow the chosen forward direction."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Execution Error if a wrong sign or unit is used; Decision / Selection Error if constant-acceleration equations are used without checking the condition."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "When can I use the standard kinematic equations?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When acceleration is constant over the interval."
            }
          ]
        }
      ]
    },
    {
      "question": "What does the area under a velocity-time graph give?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Signed displacement."
            }
          ]
        }
      ]
    },
    {
      "question": "Does negative acceleration always mean an object is slowing down?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Speed decreases when velocity and acceleration are opposite in sign/direction."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Motion in Plane",
      "url": "/neet/physics/motion-in-plane",
      "relation": "forward"
    },
    {
      "label": "Laws of Motion",
      "url": "/neet/physics/laws-of-motion",
      "relation": "forward"
    }
  ]
};
