import type { ChapterContent } from "@/content/types";

/**
 * NEET Units and Measurements: SI Units, Errors, Significant Figures and Dimensions — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsUnitsMeasurements: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Units and Measurements: SI Units, Errors, Significant Figures and Dimensions",
  "slug": "units-measurements",
  "url": "/neet/physics/units-measurements",
  "canonicalIntent": "Teach official Unit 1 measurement concepts with SI units, significant figures, errors, dimensions and dimensional analysis, emphasizing how measurement precision constrains later Physics calculations.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NEET Units and Measurements covers systems of units, SI base and derived units, least count, significant figures, measurement errors, dimensions and dimensional analysis. The key habit is to report only precision justified by the measurement and to use dimensional analysis as a consistency check, not as a substitute for physical reasoning."
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
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Measurement as a physical statement",
      "Errors",
      "Dimensions",
      "Significant figures"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "units-measurements-c1",
      "title": "1. Measurement as a physical statement",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A measured quantity is not only a number. It carries a unit and a precision limit set by the instrument and procedure. The page should teach students to read the least count, record consistent significant figures, and avoid reporting more digits than the data support."
            }
          ]
        }
      ]
    },
    {
      "id": "units-measurements-c2",
      "title": "2. Errors",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For repeated measurements, the mean value can represent the best estimate under the school-level model, while absolute deviations quantify spread. For calculated quantities, small independent measurement uncertainties are commonly combined using first-order fractional-error rules for products, quotients and powers. These rules are approximations and should not be presented as exact probability statements."
            }
          ]
        }
      ]
    },
    {
      "id": "units-measurements-c3",
      "title": "3. Dimensions",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A physical quantity may be represented by powers of the base dimensions, for example velocity [L T^-1], acceleration [L T^-2], force [M L T^-2] and energy [M L^2 T^-2]. Dimensional analysis can test homogeneity, help infer power-law dependence when the variable set is complete, and convert between unit systems. It cannot determine dimensionless numerical constants such as 2 or π and cannot prove a physically wrong but dimensionally consistent equation is correct."
            }
          ]
        }
      ]
    },
    {
      "id": "units-measurements-c4",
      "title": "4. Significant figures",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Addition/subtraction are limited by decimal place precision; multiplication/division are limited by the factor with the fewest significant figures. Editorial examples must state the convention being applied so students do not mix rules."
            }
          ]
        }
      ]
    },
    {
      "id": "units-measurements-gain",
      "title": "5. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Original dimensional-homogeneity checklist"
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
                "text": "Instrument-resolution to reporting-precision flowchart"
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
                "text": "Error-propagation decision table"
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
    "title": "NEET Units and Measurements: Errors, SI Units & Dimensions | Rank Sarthi",
    "description": "Master NEET Units and Measurements with SI units, significant figures, measurement errors, dimensional analysis and condition-aware examples.",
    "ogTitle": "NEET Units and Measurements: Errors, SI Units & Dimensions | Rank Sarthi",
    "ogDescription": "Master NEET Units and Measurements with SI units, significant figures, measurement errors, dimensional analysis and condition-aware examples.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "units-measurements-f1",
      "expression": "x_bar = (x1 + x2 + ... + xn)/n",
      "meaning": "Mean value",
      "variables": [],
      "useWhen": "x has the measured quantity unit; scalar. Use for repeated readings under the simple averaging model. Trap: do not invent precision beyond the readings.",
      "accessibleText": "Mean value: x_bar = (x1 + x2 + ... + xn)/n. x has the measured quantity unit; scalar. Use for repeated readings under the simple averaging model. Trap: do not invent precision beyond the readings."
    },
    {
      "id": "units-measurements-f2",
      "expression": "relative error = Δx/x_bar; percentage error = (Δx/x_bar) × 100%",
      "meaning": "Relative and percentage error",
      "variables": [],
      "useWhen": "Dimensionless. Δx and x_bar must use the same unit. Trap: percentage error is not an SI unit.",
      "accessibleText": "Relative and percentage error: relative error = Δx/x_bar; percentage error = (Δx/x_bar) × 100%. Dimensionless. Δx and x_bar must use the same unit. Trap: percentage error is not an SI unit."
    },
    {
      "id": "units-measurements-f3",
      "expression": "For z = x^a y^b, Δz/z ≈",
      "meaning": "Product/quotient error approximation",
      "variables": [],
      "useWhen": "a",
      "accessibleText": "Product/quotient error approximation: For z = x^a y^b, Δz/z ≈. a"
    },
    {
      "id": "units-measurements-f4",
      "expression": "[Q] = M^a L^b T^c ...",
      "meaning": "Dimensional form",
      "variables": [],
      "useWhen": "Exponents identify dimensional dependence. Use for homogeneity checks. Trap: dimensions cannot fix dimensionless constants or distinguish all physical quantities with the same dimensions.",
      "accessibleText": "Dimensional form: [Q] = M^a L^b T^c .... Exponents identify dimensional dependence. Use for homogeneity checks. Trap: dimensions cannot fix dimensionless constants or distinguish all physical quantities with the same dimensions."
    }
  ],
  "mistakes": [
    {
      "id": "units-measurements-m1",
      "mistake": "Writing a unitless numerical result for a dimensional quantity",
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
              "text": "Restore SI unit and perform a dimensional check."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "units-measurements-m2",
      "mistake": "Adding fractional errors for a sum/difference",
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
              "text": "Use the operation-appropriate uncertainty rule; do not transfer the product/quotient rule blindly."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "units-measurements-m3",
      "mistake": "Using dimensions to claim a formula is proven",
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
              "text": "Dimensional consistency is necessary in many equations but not sufficient for physical correctness."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "units-measurements-m4",
      "mistake": "Keeping extra calculator digits as significant",
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
              "text": "Round according to measurement precision and operation rules."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    }
  ],
  "workedExamples": [
    {
      "id": "units-measurements-w1",
      "prompt": "A length is measured as 2.50 ± 0.02 m and a time as 1.20 ± 0.01 s. Estimate speed and its first-order uncertainty.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concept being tested: Measurement uncertainty"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prompt: A length is measured as 2.50 ± 0.02 m and a time as 1.20 ± 0.01 s. Estimate speed and its first-order uncertainty."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decisive condition: Speed is a quotient and the uncertainties are small, so fractional uncertainties add approximately."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method choice: Compute v = L/t; then Δv/v ≈ ΔL/L + Δt/t."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: v = 2.083... m s^-1. Fractional uncertainty ≈ 0.02/2.50 + 0.01/1.20 ≈ 0.0163, so Δv ≈ 0.034 m s^-1. Report about 2.08 ± 0.03 m s^-1."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit/sign/condition check: Unit check: metre/second. Precision should not exceed the inputs."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI if answered incorrectly: Execution Error if calculator digits are reported without uncertainty or rounding."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What does dimensional analysis check?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It checks dimensional homogeneity and can help infer power-law relations when the variable set is complete."
            }
          ]
        }
      ]
    },
    {
      "question": "Can dimensional analysis determine numerical constants?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Dimensionless constants such as 2 or π cannot be obtained from dimensions alone."
            }
          ]
        }
      ]
    },
    {
      "question": "How do fractional errors combine in a product or quotient?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For small uncertainties, the magnitudes of the fractional contributions are added in the standard first-order approximation."
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
    }
  ]
};
