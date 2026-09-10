import type { ChapterContent } from "@/content/types";

/**
 * NEET Oscillations: SHM, Spring Energy and Simple Pendulum Conditions — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsOscillations: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Oscillations: SHM, Spring Energy and Simple Pendulum Conditions",
  "slug": "oscillations",
  "url": "/neet/physics/oscillations",
  "canonicalIntent": "Own the oscillation/SHM portion of official Unit 10: periodic motion, period/frequency/phase, ideal SHM equation, spring oscillator, SHM energy and simple pendulum with small-angle conditions.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Oscillations covers periodic motion and the ideal simple-harmonic model. SHM requires acceleration proportional to displacement and directed toward equilibrium, a=-ω^2x. The simple-pendulum period formula requires the small-angle approximation and an ideal pendulum model; it is not valid unchanged for large amplitudes."
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
      "label": "Kinematics",
      "url": "/neet/physics/kinematics",
      "relation": "prerequisite"
    },
    {
      "label": "Laws of Motion",
      "url": "/neet/physics/laws-of-motion",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused part of a larger current official unit",
    "topics": [
      "Periodic motion and SHM are not synonyms",
      "Phase relationships",
      "Spring oscillator",
      "Simple pendulum"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "oscillations-c1",
      "title": "1. Periodic motion and SHM are not synonyms",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Periodic motion repeats after a time interval. SHM is a special oscillatory motion in which the restoring acceleration is proportional to displacement and opposite in direction. The page must prevent students from labeling every periodic motion as SHM."
            }
          ]
        }
      ]
    },
    {
      "id": "oscillations-c2",
      "title": "2. Phase relationships",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If displacement is sinusoidal, velocity is shifted in phase relative to displacement and acceleration is exactly opposite in phase to displacement. At equilibrium, speed is maximum in ideal SHM; at extreme displacement, speed is zero and restoring acceleration magnitude is maximum."
            }
          ]
        }
      ]
    },
    {
      "id": "oscillations-c3",
      "title": "3. Spring oscillator",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For an ideal mass-spring oscillator with a light spring obeying Hooke's law, ω=sqrt(k/m) and the period follows. Real damping and nonlinear spring behavior are outside the ideal formula."
            }
          ]
        }
      ]
    },
    {
      "id": "oscillations-c4",
      "title": "4. Simple pendulum",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a point mass suspended by a light inextensible string of length L in uniform gravity, the exact restoring term involves sinθ. The standard period formula uses sinθ≈θ with angle in radians, requiring small oscillations."
            }
          ]
        }
      ]
    },
    {
      "id": "oscillations-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "SHM phase-state table"
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
                "text": "Small-angle validity card"
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
                "text": "Energy exchange diagram between kinetic and potential"
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Waves",
      "url": "/neet/physics/waves",
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
    "title": "NEET Oscillations: SHM, Springs & Pendulum | Rank Sarthi",
    "description": "Study NEET oscillations with SHM equations, phase, energy, spring period and simple-pendulum small-angle conditions.",
    "ogTitle": "NEET Oscillations: SHM, Springs & Pendulum | Rank Sarthi",
    "ogDescription": "Study NEET oscillations with SHM equations, phase, energy, spring period and simple-pendulum small-angle conditions.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "oscillations-f1",
      "expression": "x = A cos(ωt+φ)",
      "meaning": "SHM displacement",
      "variables": [],
      "useWhen": "m. Ideal SHM; A amplitude, ω rad s^-1, φ phase constant.",
      "accessibleText": "SHM displacement: x = A cos(ωt+φ). m. Ideal SHM; A amplitude, ω rad s^-1, φ phase constant."
    },
    {
      "id": "oscillations-f2",
      "expression": "a = -ω^2 x",
      "meaning": "SHM acceleration",
      "variables": [],
      "useWhen": "m s^-2. Defining dynamical signature of ideal SHM.",
      "accessibleText": "SHM acceleration: a = -ω^2 x. m s^-2. Defining dynamical signature of ideal SHM."
    },
    {
      "id": "oscillations-f3",
      "expression": "v^2 = ω^2(A^2-x^2)",
      "meaning": "SHM speed relation",
      "variables": [],
      "useWhen": "m^2 s^-2. Ideal SHM.",
      "accessibleText": "SHM speed relation: v^2 = ω^2(A^2-x^2). m^2 s^-2. Ideal SHM."
    },
    {
      "id": "oscillations-f4",
      "expression": "T=2π/ω, f=1/T",
      "meaning": "Period/frequency",
      "variables": [],
      "useWhen": "s and Hz. ω=2πf.",
      "accessibleText": "Period/frequency: T=2π/ω, f=1/T. s and Hz. ω=2πf."
    },
    {
      "id": "oscillations-f5",
      "expression": "T = 2π sqrt(m/k)",
      "meaning": "Mass-spring period",
      "variables": [],
      "useWhen": "Ideal light spring, Hooke-law linearity, effective mass assumptions as stated; k N m^-1.",
      "accessibleText": "Mass-spring period: T = 2π sqrt(m/k). Ideal light spring, Hooke-law linearity, effective mass assumptions as stated; k N m^-1."
    },
    {
      "id": "oscillations-f6",
      "expression": "E=(1/2)kA^2",
      "meaning": "SHM total energy spring",
      "variables": [],
      "useWhen": "J. Ideal undamped Hooke-law oscillator.",
      "accessibleText": "SHM total energy spring: E=(1/2)kA^2. J. Ideal undamped Hooke-law oscillator."
    },
    {
      "id": "oscillations-f7",
      "expression": "T = 2π sqrt(L/g)",
      "meaning": "Simple pendulum period",
      "variables": [],
      "useWhen": "Small-angle oscillations, point bob, light inextensible string, uniform g, negligible damping.",
      "accessibleText": "Simple pendulum period: T = 2π sqrt(L/g). Small-angle oscillations, point bob, light inextensible string, uniform g, negligible damping."
    }
  ],
  "mistakes": [
    {
      "id": "oscillations-m1",
      "mistake": "Calling every periodic motion SHM",
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
              "text": "Check whether a is proportional to -x."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "oscillations-m2",
      "mistake": "Using pendulum period at large amplitude without caveat",
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
              "text": "Require the small-angle approximation."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "oscillations-m3",
      "mistake": "Saying acceleration is zero at extreme displacement",
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
              "text": "Speed is zero there; acceleration magnitude is maximum."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "oscillations-m4",
      "mistake": "Using spring formula beyond the Hooke-law region",
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
              "text": "Check linear restoring-force condition."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    }
  ],
  "workedExamples": [
    {
      "id": "oscillations-w1",
      "prompt": "An ideal mass 0.25 kg is attached to a spring of constant 100 N m^-1. Find the SHM period.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Mass-spring period"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: An ideal mass 0.25 kg is attached to a spring of constant 100 N m^-1. Find the SHM period."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: The spring is ideal and Hooke-law conditions are implied, so use T=2πsqrt(m/k)."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Substitute m/k=0.25/100=0.0025 s^2."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: T=2π×0.05=0.1π≈0.314 s."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Seconds are correct because m/k has dimension s^2."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Execution Error if the square root is missed; Decision / Selection Error if non-Hookean behavior is ignored."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What condition defines SHM?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Acceleration is proportional to displacement and directed toward equilibrium: a=-ω^2x."
            }
          ]
        }
      ]
    },
    {
      "question": "When is T=2πsqrt(L/g) valid for a pendulum?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For small-angle oscillations of the ideal simple pendulum."
            }
          ]
        }
      ]
    },
    {
      "question": "Where is speed maximum in ideal SHM?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At equilibrium."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Waves",
      "url": "/neet/physics/waves",
      "relation": "forward"
    }
  ]
};
