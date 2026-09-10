import type { ChapterContent } from "@/content/types";

/**
 * NEET Gravitation: g, Potential, Escape Velocity and Satellites — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsGravitation: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Gravitation: g, Potential, Escape Velocity and Satellites",
  "slug": "gravitation",
  "url": "/neet/physics/gravitation",
  "canonicalIntent": "Own the complete official Unit 6 Gravitation intent: universal law, variation of g, Kepler laws, potential/potential energy, escape velocity, circular satellite motion, orbital velocity, time period and satellite energy.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Gravitation is the single canonical Rank Sarthi owner for official Unit 6. Use inverse-square force outside a spherically symmetric mass, distinguish gravitational potential from potential energy, and apply satellite/escape formulas only under the central spherical-body and idealized orbit conditions stated with each relation."
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
      "Universal gravitation and spherical bodies",
      "Potential vs potential energy",
      "Satellites",
      "Escape"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "gravitation-c1",
      "title": "1. Universal gravitation and spherical bodies",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For point masses, gravitational force follows the inverse-square law along the line joining them. For a spherically symmetric body, the external field behaves as if the mass were concentrated at the center. Inside a real Earth, simple depth formulas require model assumptions about density; the common linear g with depth result assumes uniform density."
            }
          ]
        }
      ]
    },
    {
      "id": "gravitation-c2",
      "title": "2. Potential vs potential energy",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Gravitational potential is energy per unit test mass and is a scalar. With zero potential at infinity, potential outside a spherical mass is negative: V=-GM/r. Potential energy of a mass m is U=mV=-GMm/r."
            }
          ]
        }
      ]
    },
    {
      "id": "gravitation-c3",
      "title": "3. Satellites",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Circular-orbit formulas require a circular orbit around a dominant central mass, with other interactions neglected. Orbital speed and period depend on orbital radius measured from the central body's center, not height above the surface unless radius is first converted."
            }
          ]
        }
      ]
    },
    {
      "id": "gravitation-c4",
      "title": "4. Escape",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Escape speed is obtained by the minimum-energy condition for reaching infinity with zero residual speed in the ideal central-field model. It is not the same as orbital speed; at the same radius, v_escape = sqrt(2) v_orbit for the standard spherical central-mass model."
            }
          ]
        }
      ]
    },
    {
      "id": "gravitation-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Potential vs potential-energy comparison card"
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
                "text": "Orbit radius vs altitude diagram"
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
                "text": "g-variation assumptions panel"
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [],
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
    "title": "NEET Gravitation: g, Potential, Escape & Satellites | Rank Sarthi",
    "description": "Master NEET Gravitation with inverse-square force, variation of g, potential, escape velocity, orbital speed, period and satellite energy.",
    "ogTitle": "NEET Gravitation: g, Potential, Escape & Satellites | Rank Sarthi",
    "ogDescription": "Master NEET Gravitation with inverse-square force, variation of g, potential, escape velocity, orbital speed, period and satellite energy.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "gravitation-f1",
      "expression": "F = G m1 m2 / r^2",
      "meaning": "Universal law",
      "variables": [],
      "useWhen": "Magnitude; N. Point masses or external field of spherical masses; force is attractive along line joining centers.",
      "accessibleText": "Universal law: F = G m1 m2 / r^2. Magnitude; N. Point masses or external field of spherical masses; force is attractive along line joining centers."
    },
    {
      "id": "gravitation-f2",
      "expression": "g = GM/r^2",
      "meaning": "Surface/outside gravity",
      "variables": [],
      "useWhen": "m s^-2. Outside spherical mass or at surface r=R; direction inward.",
      "accessibleText": "Surface/outside gravity: g = GM/r^2. m s^-2. Outside spherical mass or at surface r=R; direction inward."
    },
    {
      "id": "gravitation-f3",
      "expression": "g_h = g_0 [R/(R+h)]^2",
      "meaning": "Altitude variation",
      "variables": [],
      "useWhen": "Spherical-body model; h measured above surface.",
      "accessibleText": "Altitude variation: g_h = g_0 [R/(R+h)]^2. Spherical-body model; h measured above surface."
    },
    {
      "id": "gravitation-f4",
      "expression": "g_d = g_0(1-d/R)",
      "meaning": "Depth variation, uniform density",
      "variables": [],
      "useWhen": "Requires uniform-density spherical Earth model; d depth below surface. Do not present as exact for real Earth.",
      "accessibleText": "Depth variation, uniform density: g_d = g_0(1-d/R). Requires uniform-density spherical Earth model; d depth below surface. Do not present as exact for real Earth."
    },
    {
      "id": "gravitation-f5",
      "expression": "V = -GM/r",
      "meaning": "Potential",
      "variables": [],
      "useWhen": "Scalar; J kg^-1 = m^2 s^-2. Zero chosen at infinity.",
      "accessibleText": "Potential: V = -GM/r. Scalar; J kg^-1 = m^2 s^-2. Zero chosen at infinity."
    },
    {
      "id": "gravitation-f6",
      "expression": "U = -GMm/r",
      "meaning": "Potential energy",
      "variables": [],
      "useWhen": "Scalar; J. Same zero-at-infinity convention.",
      "accessibleText": "Potential energy: U = -GMm/r. Scalar; J. Same zero-at-infinity convention."
    },
    {
      "id": "gravitation-f7",
      "expression": "v_o = sqrt(GM/r)",
      "meaning": "Circular orbital speed",
      "variables": [],
      "useWhen": "Circular orbit about dominant spherical central mass; r from center.",
      "accessibleText": "Circular orbital speed: v_o = sqrt(GM/r). Circular orbit about dominant spherical central mass; r from center."
    },
    {
      "id": "gravitation-f8",
      "expression": "T = 2π sqrt(r^3/GM)",
      "meaning": "Circular orbital period",
      "variables": [],
      "useWhen": "Circular orbit; gives Kepler T^2 ∝ r^3 for same central mass.",
      "accessibleText": "Circular orbital period: T = 2π sqrt(r^3/GM). Circular orbit; gives Kepler T^2 ∝ r^3 for same central mass."
    },
    {
      "id": "gravitation-f9",
      "expression": "v_e = sqrt(2GM/r)",
      "meaning": "Escape speed",
      "variables": [],
      "useWhen": "Minimum launch speed in ideal central field neglecting atmosphere/rotation; from radius r.",
      "accessibleText": "Escape speed: v_e = sqrt(2GM/r). Minimum launch speed in ideal central field neglecting atmosphere/rotation; from radius r."
    },
    {
      "id": "gravitation-f10",
      "expression": "E = -GMm/(2r)",
      "meaning": "Circular-orbit total energy",
      "variables": [],
      "useWhen": "Circular orbit under Newtonian gravity around dominant central mass.",
      "accessibleText": "Circular-orbit total energy: E = -GMm/(2r). Circular orbit under Newtonian gravity around dominant central mass."
    }
  ],
  "mistakes": [
    {
      "id": "gravitation-m1",
      "mistake": "Using height h directly as orbital radius",
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
              "text": "Use r=R+h from the center."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "gravitation-m2",
      "mistake": "Confusing potential V with potential energy U",
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
              "text": "Remember U=mV."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "gravitation-m3",
      "mistake": "Using linear depth formula without the uniform-density assumption",
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
              "text": "State the model assumption or use a more appropriate model."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "gravitation-m4",
      "mistake": "Treating escape speed as orbital speed",
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
              "text": "At the same radius in the ideal model, v_e=sqrt(2)v_o."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    }
  ],
  "workedExamples": [
    {
      "id": "gravitation-w1",
      "prompt": "At some radius from a spherical planet, the circular orbital speed is 4.0 km s^-1. What is the ideal escape speed from the same radius?",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Escape vs orbit"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: At some radius from a spherical planet, the circular orbital speed is 4.0 km s^-1. What is the ideal escape speed from the same radius?"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Same radius and same central-field model; use the exact relation v_e=sqrt(2)v_o."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Multiply the circular orbital speed by sqrt(2)."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: v_e≈1.414×4.0=5.66 km s^-1."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Both are speeds in km s^-1. The relation assumes the same radius and ideal central Newtonian field."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Recall Gap if the relation is forgotten; Decision / Selection Error if values from different radii are compared directly."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the canonical Rank Sarthi Gravitation page?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "/neet/physics/gravitation."
            }
          ]
        }
      ]
    },
    {
      "question": "What is the relation between escape and circular orbital speed at the same radius?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "v_e = sqrt(2) v_o in the ideal spherical central-field model."
            }
          ]
        }
      ]
    },
    {
      "question": "What does the simple linear depth formula for g assume?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A uniform-density spherical Earth model."
            }
          ]
        }
      ]
    }
  ]
};
