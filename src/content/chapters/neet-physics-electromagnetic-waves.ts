import type { ChapterContent } from "@/content/types";

/**
 * NEET Electromagnetic Waves: Displacement Current, Properties and Spectrum — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsElectromagneticWaves: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Electromagnetic Waves: Displacement Current, Properties and Spectrum",
  "slug": "electromagnetic-waves",
  "url": "/neet/physics/electromagnetic-waves",
  "canonicalIntent": "Teach the complete current Unit 15 at qualitative NEET depth: displacement current, transverse electromagnetic waves, field relationships, spectrum order and applications, while avoiding university-level Maxwell-equation derivations.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NEET UG 2026 Unit 15 explicitly includes displacement current, electromagnetic-wave characteristics, transverse nature, the electromagnetic spectrum from radio waves through gamma rays, and applications. The page should explain the field relationships qualitatively and use only the compact vacuum relations needed at NEET depth."
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
      "label": "Electromagnetic Induction",
      "url": "/neet/physics/electromagnetic-induction",
      "relation": "prerequisite"
    },
    {
      "label": "Waves",
      "url": "/neet/physics/waves",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Exact owner of NEET UG 2026 Physics Unit 15: Electromagnetic Waves",
    "topics": [
      "Displacement-current concept",
      "Transverse electromagnetic wave",
      "Speed, frequency and wavelength",
      "Spectrum",
      "Application restraint"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "electromagnetic-waves-c1",
      "title": "1. Displacement-current concept",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use the capacitor-gap thought experiment at qualitative level: changing electric flux plays the continuity role associated with displacement current. Do not expand into a full Maxwell derivation."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-waves-c2",
      "title": "2. Transverse electromagnetic wave",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a plane EM wave in vacuum, electric field and magnetic field are mutually perpendicular and perpendicular to the direction of propagation. The propagation direction follows E x B."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-waves-c3",
      "title": "3. Speed, frequency and wavelength",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In vacuum, EM waves travel at c. Frequency is set by the source and wavelength follows from c = nu lambda. When entering a material, speed and wavelength can change while frequency remains continuous across a stationary interface."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-waves-c4",
      "title": "4. Spectrum",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Order by increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Wavelength order is the reverse. If photon-energy language is used, E=h nu should be a bridge to Dual Nature, not a duplicate photoelectric section."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-waves-c5",
      "title": "5. Application restraint",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use broad, accurate applications such as communication, heating/sensing, imaging or sterilization only at the level appropriate to the band. Avoid unsupported medical-treatment or safety claims."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-waves-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Orthogonal-field visual: E, B and propagation direction."
              }
            ],
            [
              {
                "text": "Spectrum ladder: same ordered band list with arrows for increasing frequency/energy and decreasing wavelength."
              }
            ],
            [
              {
                "text": "Medium-change card: frequency continuity vs speed/wavelength change."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Alternating Current",
      "url": "/neet/physics/alternating-current",
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
    "title": "NEET Electromagnetic Waves: Spectrum & Properties | Rank Sarthi",
    "description": "Learn NEET 2026 electromagnetic waves through displacement current, transverse E-B fields, wave relations, spectrum order and applications.",
    "ogTitle": "NEET Electromagnetic Waves: Spectrum & Properties | Rank Sarthi",
    "ogDescription": "Learn NEET 2026 electromagnetic waves through displacement current, transverse E-B fields, wave relations, spectrum order and applications.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "electromagnetic-waves-f1",
      "expression": "I_d = epsilon_0 dPhi_E/dt",
      "meaning": "Displacement current",
      "variables": [],
      "useWhen": "Vacuum form through a surface; qualitative NEET context. Unit A.",
      "accessibleText": "Displacement current: I_d = epsilon_0 dPhi_E/dt. Vacuum form through a surface; qualitative NEET context. Unit A."
    },
    {
      "id": "electromagnetic-waves-f2",
      "expression": "c = 1/sqrt(mu_0 epsilon_0)",
      "meaning": "Vacuum wave speed",
      "variables": [],
      "useWhen": "Vacuum electromagnetic wave. Unit m/s.",
      "accessibleText": "Vacuum wave speed: c = 1/sqrt(mu_0 epsilon_0). Vacuum electromagnetic wave. Unit m/s."
    },
    {
      "id": "electromagnetic-waves-f3",
      "expression": "c = nu lambda in vacuum",
      "meaning": "Wave relation",
      "variables": [],
      "useWhen": "nu in Hz, lambda in m.",
      "accessibleText": "Wave relation: c = nu lambda in vacuum. nu in Hz, lambda in m."
    },
    {
      "id": "electromagnetic-waves-f4",
      "expression": "E0/B0 = c",
      "meaning": "Field amplitudes",
      "variables": [],
      "useWhen": "Plane EM wave in vacuum. E in V/m, B in T.",
      "accessibleText": "Field amplitudes: E0/B0 = c. Plane EM wave in vacuum. E in V/m, B in T."
    },
    {
      "id": "electromagnetic-waves-f5",
      "expression": "proportional to E x B",
      "meaning": "Propagation direction",
      "variables": [],
      "useWhen": "Plane-wave orientation.",
      "accessibleText": "Propagation direction: proportional to E x B. Plane-wave orientation."
    }
  ],
  "mistakes": [
    {
      "id": "electromagnetic-waves-m1",
      "mistake": "Places E, B and propagation in the same direction",
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
              "text": "Rebuild the perpendicular triad."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "electromagnetic-waves-m2",
      "mistake": "Reverses spectrum frequency order",
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
              "text": "Use one ordered spectrum ladder."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "electromagnetic-waves-m3",
      "mistake": "Says frequency changes at a stationary medium boundary",
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
              "text": "Hold frequency constant and change speed/wavelength."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "electromagnetic-waves-m4",
      "mistake": "Treats displacement current as free-charge flow through vacuum",
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
              "text": "Return to changing-electric-flux concept."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "electromagnetic-waves-m5",
      "mistake": "Application wording becomes medical/safety advice",
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
              "text": "Keep to physics description and official educational scope."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "electromagnetic-waves-w1",
      "prompt": "an electromagnetic wave in vacuum has frequency doubled while remaining in vacuum.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: frequency-wavelength relation."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: an electromagnetic wave in vacuum has frequency doubled while remaining in vacuum."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: use c=nu lambda with constant c."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: if nu doubles, lambda must halve so the product remains c."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: frequency stays in Hz and wavelength in metres; speed remains positive m/s."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Recall Gap if the inverse relation is forgotten; Execution Error if both frequency and wavelength are doubled."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Are electromagnetic waves transverse?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. In the standard plane-wave model, E and B are perpendicular to each other and to the propagation direction."
            }
          ]
        }
      ]
    },
    {
      "question": "What is displacement current in the NEET syllabus?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It is the current-equivalent associated with changing electric flux, introduced qualitatively in Unit 15."
            }
          ]
        }
      ]
    },
    {
      "question": "What is the order of the electromagnetic spectrum by increasing frequency?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma."
            }
          ]
        }
      ]
    },
    {
      "question": "Does frequency change when light enters a stationary medium?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Frequency remains continuous; speed and wavelength can change."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Optics",
      "url": "/neet/physics/optics",
      "relation": "forward"
    },
    {
      "label": "Dual Nature Radiation",
      "url": "/neet/physics/dual-nature-radiation",
      "relation": "forward"
    }
  ]
};
