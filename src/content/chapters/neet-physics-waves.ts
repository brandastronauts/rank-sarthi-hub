import type { ChapterContent } from "@/content/types";

/**
 * NEET Waves: Progressive Waves, Standing Waves, Organ Pipes and Beats — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsWaves: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Waves: Progressive Waves, Standing Waves, Organ Pipes and Beats",
  "slug": "waves",
  "url": "/neet/physics/waves",
  "canonicalIntent": "Own the wave portion of official Unit 10: wave motion, longitudinal/transverse waves, travelling-wave speed/relation, superposition/reflection, standing waves in strings and organ pipes, harmonics and beats.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Waves carry a disturbance through space while the medium particles, where a medium is involved, oscillate about local positions. Use v=fλ for a periodic travelling wave, apply string/pipe standing-wave conditions to the correct boundary geometry, and use beat frequency only when two nearby frequencies superpose under the standard model."
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
      "label": "Oscillations",
      "url": "/neet/physics/oscillations",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused part of a larger current official unit",
    "topics": [
      "Propagation vs particle motion",
      "Progressive waves",
      "Standing waves",
      "Strings and pipes",
      "Beats"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "waves-c1",
      "title": "1. Propagation vs particle motion",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A travelling mechanical wave transports energy through a medium while particles undergo local oscillatory motion. Distinguish the wave's propagation speed from the instantaneous speed of a medium particle."
            }
          ]
        }
      ]
    },
    {
      "id": "waves-c2",
      "title": "2. Progressive waves",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A sinusoidal travelling-wave expression encodes amplitude, wave number, angular frequency and phase. The sign in kx-ωt or kx+ωt indicates propagation direction under the chosen convention."
            }
          ]
        }
      ]
    },
    {
      "id": "waves-c3",
      "title": "3. Standing waves",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Standing waves arise from superposition of waves of the same frequency travelling in opposite directions under suitable coherence. Nodes and antinodes are spatially fixed. Boundary conditions determine allowed wavelengths and frequencies."
            }
          ]
        }
      ]
    },
    {
      "id": "waves-c4",
      "title": "4. Strings and pipes",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A string fixed at both ends has nodes at the ends and supports integer harmonics. An open pipe has displacement antinodes at open ends and also supports integer harmonics in the ideal model. A pipe closed at one end has a displacement node at the closed end and antinode at the open end, supporting odd harmonics in the ideal uniform-pipe model."
            }
          ]
        }
      ]
    },
    {
      "id": "waves-c5",
      "title": "5. Beats",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When two waves of close frequencies superpose, intensity/amplitude modulation occurs at the difference frequency under the standard beat model. If frequencies are not close enough for distinct beats to be perceived, the simple interpretation should not be applied blindly."
            }
          ]
        }
      ]
    },
    {
      "id": "waves-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Travelling-wave direction/sign graphic"
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
                "text": "String vs open-pipe vs closed-pipe boundary-condition table"
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
                "text": "Beat-frequency condition card"
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Oscillations",
      "url": "/neet/physics/oscillations",
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
    "title": "NEET Waves: Standing Waves, Organ Pipes & Beats | Rank Sarthi",
    "description": "Learn NEET Waves with progressive-wave relations, string speed, standing waves, organ-pipe harmonics and beat-frequency conditions.",
    "ogTitle": "NEET Waves: Standing Waves, Organ Pipes & Beats | Rank Sarthi",
    "ogDescription": "Learn NEET Waves with progressive-wave relations, string speed, standing waves, organ-pipe harmonics and beat-frequency conditions.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "waves-f1",
      "expression": "y=A sin(kx-ωt+φ)",
      "meaning": "Travelling wave",
      "variables": [],
      "useWhen": "Displacement y and amplitude A in m for a mechanical displacement wave; k m^-1, ω rad s^-1. Sign convention shown propagates in +x.",
      "accessibleText": "Travelling wave: y=A sin(kx-ωt+φ). Displacement y and amplitude A in m for a mechanical displacement wave; k m^-1, ω rad s^-1. Sign convention shown propagates in +x."
    },
    {
      "id": "waves-f2",
      "expression": "v = fλ = ω/k",
      "meaning": "Wave speed",
      "variables": [],
      "useWhen": "m s^-1. Applies to periodic travelling wave; medium determines mechanical-wave speed.",
      "accessibleText": "Wave speed: v = fλ = ω/k. m s^-1. Applies to periodic travelling wave; medium determines mechanical-wave speed."
    },
    {
      "id": "waves-f3",
      "expression": "v = sqrt(T/μ)",
      "meaning": "String wave speed",
      "variables": [],
      "useWhen": "m s^-1. Ideal stretched string under tension T N with linear density μ kg m^-1; small transverse disturbances.",
      "accessibleText": "String wave speed: v = sqrt(T/μ). m s^-1. Ideal stretched string under tension T N with linear density μ kg m^-1; small transverse disturbances."
    },
    {
      "id": "waves-f4",
      "expression": "f_n = n v/(2L), n=1,2,3...",
      "meaning": "String fixed ends",
      "variables": [],
      "useWhen": "Ideal string length L fixed at both ends.",
      "accessibleText": "String fixed ends: f_n = n v/(2L), n=1,2,3.... Ideal string length L fixed at both ends."
    },
    {
      "id": "waves-f5",
      "expression": "f_n = n v/(2L), n=1,2,3...",
      "meaning": "Open pipe",
      "variables": [],
      "useWhen": "Ideal pipe open at both ends; effective-length/end corrections neglected unless explicitly included.",
      "accessibleText": "Open pipe: f_n = n v/(2L), n=1,2,3.... Ideal pipe open at both ends; effective-length/end corrections neglected unless explicitly included."
    },
    {
      "id": "waves-f6",
      "expression": "f_n = (2n-1)v/(4L), n=1,2,3...",
      "meaning": "Closed pipe",
      "variables": [],
      "useWhen": "Ideal pipe closed at one end; odd harmonics only in simple model.",
      "accessibleText": "Closed pipe: f_n = (2n-1)v/(4L), n=1,2,3.... Ideal pipe closed at one end; odd harmonics only in simple model."
    },
    {
      "id": "waves-f7",
      "expression": "f_b =",
      "meaning": "Beat frequency",
      "variables": [],
      "useWhen": "f_1-f_2",
      "accessibleText": "Beat frequency: f_b =. f_1-f_2"
    }
  ],
  "mistakes": [
    {
      "id": "waves-m1",
      "mistake": "Confusing wave speed with particle oscillation speed",
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
              "text": "Separate propagation from local particle motion."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "waves-m2",
      "mistake": "Using the open-pipe harmonic series for a one-end-closed pipe",
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
              "text": "Apply the correct boundary conditions."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "waves-m3",
      "mistake": "Forgetting that string speed uses linear density",
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
              "text": "Use μ in kg m^-1."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "waves-m4",
      "mistake": "Using beat formula without nearby frequencies/superposition context",
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
              "text": "Check the standard beat-model condition."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    }
  ],
  "workedExamples": [
    {
      "id": "waves-w1",
      "prompt": "A string of length 1.2 m is fixed at both ends and supports waves at 120 m s^-1. Find its fundamental frequency.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Standing wave on a string"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A string of length 1.2 m is fixed at both ends and supports waves at 120 m s^-1. Find its fundamental frequency."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Fixed ends imply nodes at both ends; fundamental wavelength is 2L."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Use f_1=v/(2L)."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: f_1=120/(2×1.2)=50 Hz."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: m s^-1 / m = s^-1 = Hz. Boundary condition is the decisive step."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Decision / Selection Error if an organ-pipe or closed-pipe formula is used."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the relation between wave speed, frequency and wavelength?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "v=fλ."
            }
          ]
        }
      ]
    },
    {
      "question": "Which harmonics occur in an ideal pipe closed at one end?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Odd harmonics."
            }
          ]
        }
      ]
    },
    {
      "question": "What is beat frequency?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The magnitude of the frequency difference, |f1-f2|, under the standard close-frequency superposition model."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Electromagnetic Waves",
      "url": "/neet/physics/electromagnetic-waves",
      "relation": "forward"
    }
  ]
};
