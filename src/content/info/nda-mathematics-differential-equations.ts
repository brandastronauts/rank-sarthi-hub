import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsDifferentialEquations: InfoPageContent = {
  "url": "/nda/mathematics/differential-equations",
  "platform": "nda",
  "slug": "mathematics/differential-equations",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Differential Equations: Order, Degree and First-Order Solutions",
  "eyebrow": "Differential Equations",
  "intent": "Learn the NDA-specific Differential Equations scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Differential Equations covers order and degree, formation, general and particular solutions, first-order first-degree methods and elementary growth / decay applications."
        }
      ]
    }
  ],
  "chips": [
    "Official-source checked",
    "Human review pending"
  ],
  "blocks": [
    {
      "kind": "prose",
      "id": "official-syllabus-ownership",
      "heading": "Official syllabus ownership",
      "concepts": [
        {
          "id": "official-syllabus-ownership-intro",
          "title": "Official syllabus ownership",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Definition of order and degree; formation of differential equations by examples; general and particular solutions; first-order and first-degree differential equations of various types; applications to growth and decay."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "exact-nda-relevant-scope",
      "heading": "Exact NDA-relevant scope",
      "concepts": [
        {
          "id": "exact-nda-relevant-scope-intro",
          "title": "Exact NDA-relevant scope",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Definition of order and degree; formation of differential equations by examples; general and particular solutions; first-order and first-degree differential equations of various types; applications to growth and decay."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "prerequisite-concepts",
      "heading": "Prerequisite concepts",
      "concepts": [
        {
          "id": "prerequisite-concepts-intro",
          "title": "Prerequisite concepts",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Differentiation, integration, algebraic rearrangement and logarithms."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "core-definitions",
      "heading": "Core definitions",
      "concepts": [
        {
          "id": "core-definitions-intro",
          "title": "Core definitions",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Differential equation"
                  }
                ],
                [
                  {
                    "text": "Order"
                  }
                ],
                [
                  {
                    "text": "Degree, where polynomial in derivatives"
                  }
                ],
                [
                  {
                    "text": "General solution"
                  }
                ],
                [
                  {
                    "text": "Particular solution"
                  }
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "formula-set",
      "heading": "Formula set",
      "concepts": [
        {
          "id": "formula-set-intro",
          "title": "Formula set",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Separable form: dy/dx = g(x)h(y) -> dy/h(y)=g(x)dx, when division is valid",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Linear first order: dy/dx + P(x)y = Q(x), integrating factor IF=e^(int P dx)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "After IF: y*IF = int Q*IF dx + C",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Growth / decay model: dy/dt=ky -> y=Ce^(kt)",
                    "code": true
                  }
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "conditions-applicability",
      "heading": "Conditions / applicability",
      "concepts": [
        {
          "id": "conditions-applicability-intro",
          "title": "Conditions / applicability",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Degree is defined after the equation is made polynomial in derivatives; it may be undefined otherwise."
                  }
                ],
                [
                  {
                    "text": "When separating variables, do not divide by an expression that may be zero without checking lost constant solutions."
                  }
                ],
                [
                  {
                    "text": "Linear integrating-factor method requires standard first-order linear form."
                  }
                ],
                [
                  {
                    "text": "Growth / decay sign and initial condition determine k and C."
                  }
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "worked-reasoning-examples",
      "heading": "Worked reasoning examples",
      "concepts": [
        {
          "id": "worked-reasoning-examples-intro",
          "title": "Worked reasoning examples",
          "body": [
            {
              "type": "list",
              "ordered": true,
              "items": [
                [
                  {
                    "text": "dy/dx=3x^2 gives y=x^3+C. If y(0)=2, particular solution y=x^3+2."
                  }
                ],
                [
                  {
                    "text": "dy/dx + y = e^x: IF=e^x, so d(y e^x)/dx=e^(2x); y e^x=(1/2)e^(2x)+C, hence y=(1/2)e^x+Ce^(-x)."
                  }
                ],
                [
                  {
                    "text": "If quantity doubles from Q0 at t=0 to 2Q0 at t=T in y=Q0 e^(kt), then k=ln2/T."
                  }
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "common-execution-errors",
      "heading": "Common execution errors",
      "concepts": [
        {
          "id": "common-execution-errors-intro",
          "title": "Common execution errors",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Confusing order with degree."
                  }
                ],
                [
                  {
                    "text": "Forgetting constant of integration."
                  }
                ],
                [
                  {
                    "text": "Dropping a solution by dividing by y or another factor."
                  }
                ],
                [
                  {
                    "text": "Using an integrating factor for a non-linear equation without first checking form."
                  }
                ],
                [
                  {
                    "text": "Sign error in exponential decay."
                  }
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "manual-pi-v1-1-error-mapping",
      "heading": "Manual PI v1.1 error mapping",
      "concepts": [
        {
          "id": "manual-pi-v1-1-error-mapping-intro",
          "title": "Manual PI v1.1 error mapping",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Knowledge Gap:",
                    "bold": true
                  },
                  {
                    "text": " The concept, definition or theorem needed to solve the item is not understood."
                  }
                ],
                [
                  {
                    "text": "Recall Gap:",
                    "bold": true
                  },
                  {
                    "text": " The concept was learned but a formula, condition or relation cannot be retrieved accurately."
                  }
                ],
                [
                  {
                    "text": "Execution Error:",
                    "bold": true
                  },
                  {
                    "text": " The correct method is known but algebra, arithmetic, sign, substitution, diagram or step execution fails."
                  }
                ],
                [
                  {
                    "text": "Decision / Selection Error:",
                    "bold": true
                  },
                  {
                    "text": " The candidate chooses an inefficient method, continues a time-heavy path, or attempts a low-confidence item without adequate basis."
                  }
                ],
                [
                  {
                    "text": "Needs Review:",
                    "bold": true
                  },
                  {
                    "text": " Evidence is insufficient or contradictory; do not mislabel the error until another worked item is checked."
                  }
                ],
                [
                  {
                    "text": "Time pressure note:",
                    "bold": true
                  },
                  {
                    "text": " Time pressure is treated as a contributing condition, not automatically as the root cause."
                  }
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "exam-specific-question-approach",
      "heading": "Exam-specific question approach",
      "concepts": [
        {
          "id": "exam-specific-question-approach-intro",
          "title": "Exam-specific question approach",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Identify the equation type before manipulating it. If separable, separate cleanly and inspect possible lost solutions. If first-order linear, write P and Q explicitly before calculating the integrating factor. Apply initial conditions only after obtaining the general solution unless the method clearly benefits from earlier substitution."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Negative marking is a real exam condition, but this page does not promise a universal attempt threshold. Use method certainty and option evidence before committing to a low-confidence answer."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "reviewer-requirement",
      "heading": "Reviewer requirement",
      "concepts": [
        {
          "id": "reviewer-requirement-intro",
          "title": "Reviewer requirement",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Written by: UNASSIGNED"
                  }
                ],
                [
                  {
                    "text": "Academically reviewed by: UNASSIGNED"
                  }
                ],
                [
                  {
                    "text": "Last reviewed: pending human review"
                  }
                ],
                [
                  {
                    "text": "Required reviewer: NDA Mathematics faculty with demonstrable subject competence."
                  }
                ],
                [
                  {
                    "text": "Sources checked: visible."
                  }
                ]
              ]
            }
          ]
        }
      ]
    }
  ],
  "relatedLinks": [
    {
      "label": "Maths Syllabus",
      "url": "/nda/syllabus/mathematics",
      "relation": "related"
    },
    {
      "label": "Calculus",
      "url": "/nda/mathematics/calculus",
      "relation": "related"
    },
    {
      "label": "Integration",
      "url": "/nda/mathematics/integration",
      "relation": "related"
    },
    {
      "label": "Algebra",
      "url": "/nda/mathematics/algebra",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Differential Equations?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Differential Equations covers order and degree, formation, general and particular solutions, first-order first-degree methods and elementary growth / decay applications."
            }
          ]
        }
      ]
    }
  ],
  "sourceRefs": [
    "upsc-nda-ii-2026-notification",
    "upsc-previous-question-papers"
  ],
  "sourceNote": "Official UPSC and Armed Forces sources are the authority for every exam fact on this page. Rank Sarthi explanation is kept separate from official wording.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Differential Equations 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Differential Equations scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
