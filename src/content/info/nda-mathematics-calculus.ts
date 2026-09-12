import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsCalculus: InfoPageContent = {
  "url": "/nda/mathematics/calculus",
  "platform": "nda",
  "slug": "mathematics/calculus",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Calculus: Functions, Limits, Continuity and Derivatives",
  "eyebrow": "Calculus",
  "intent": "Learn the NDA-specific Calculus scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Calculus on this route focuses on functions, limits, continuity, derivatives, second derivatives, increasing / decreasing behaviour and maxima / minima. Integration and differential equations are handled on their dedicated frozen routes."
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
                  "text": "Owned by the "
                },
                {
                  "text": "Differential Calculus",
                  "bold": true
                },
                {
                  "text": " portion of the UPSC NDA Mathematics syllabus, with only a short bridge to the related integral-calculus route. Full integration methods are owned by "
                },
                {
                  "text": "/nda/mathematics/integration",
                  "code": true
                },
                {
                  "text": ", and differential equations are owned by "
                },
                {
                  "text": "/nda/mathematics/differential-equations",
                  "code": true
                },
                {
                  "text": "."
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
                  "text": "Real-valued functions; domain, range and graphs; composite, one-one, onto and inverse functions; limits; continuity; derivatives and their geometrical / physical interpretation; derivatives of sums, products, quotients and composite functions; second-order derivatives; increasing and decreasing functions; applications of derivatives to maxima and minima. Integration is linked but not duplicated here."
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
                  "text": "Algebraic manipulation, functions, trigonometric identities, basic coordinate geometry."
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
                    "text": "Function, domain, range and graph"
                  }
                ],
                [
                  {
                    "text": "Limit and continuity"
                  }
                ],
                [
                  {
                    "text": "Derivative as rate of change / slope"
                  }
                ],
                [
                  {
                    "text": "Antiderivative"
                  }
                ],
                [
                  {
                    "text": "Definite integral"
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
                    "text": "d(x^n)/dx = n x^(n-1)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "d(sin x)/dx=cos x; d(cos x)/dx=-sin x; d(e^x)/dx=e^x; d(ln x)/dx=1/x for x>0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Product: (uv)'=u'v+uv'; quotient: (u/v)'=(u'v-uv')/v^2, v!=0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Chain rule: d[f(g(x))]/dx=f'(g(x))g'(x)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "At a differentiable interior extremum, f'(x)=0 is a candidate condition, not a complete classification test.",
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
                    "text": "Continuity at a point requires the limit to exist and equal the function value."
                  }
                ],
                [
                  {
                    "text": "Differentiability implies continuity at that point, but continuity alone does not guarantee differentiability."
                  }
                ],
                [
                  {
                    "text": "Quotient rule requires a non-zero denominator."
                  }
                ],
                [
                  {
                    "text": "A stationary point is not automatically a maximum or minimum; classify by sign change, second derivative where valid, or endpoint comparison on a closed interval."
                  }
                ],
                [
                  {
                    "text": "Inverse-function work requires the stated one-one / onto conditions on the relevant domain and codomain."
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
                    "text": "For f(x)=x^3-3x, f'(x)=3x^2-3=3(x^2-1), so stationary points are x=+/-1. Classify using sign change or second derivative rather than assuming both are extrema of the same type."
                  }
                ],
                [
                  {
                    "text": "For lim x->2 (x^2-4)/(x-2), factor to (x-2)(x+2)/(x-2), giving limit 4 after cancellation for x != 2."
                  }
                ],
                [
                  {
                    "text": "For f(x)=x^2-4x+7, f'(x)=2x-4=0 gives x=2. Since f''(x)=2>0, x=2 is a local minimum."
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
                    "text": "Substituting into an indeterminate limit before simplifying."
                  }
                ],
                [
                  {
                    "text": "Forgetting chain-rule inner derivative."
                  }
                ],
                [
                  {
                    "text": "Treating f'(x)=0 as sufficient for maximum."
                  }
                ],
                [
                  {
                    "text": "Dropping +C in an indefinite integral."
                  }
                ],
                [
                  {
                    "text": "Confusing signed definite integral with geometric area."
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
                  "text": "Classify the item as function / mapping, limit, continuity, direct differentiation or application of derivative. Simplify algebra before taking a limit or derivative. For maxima / minima, write the candidate condition and then classify. If the item is dominated by integration or a differential equation, move to the dedicated frozen route rather than duplicating methods here."
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
      "label": "Integration",
      "url": "/nda/mathematics/integration",
      "relation": "related"
    },
    {
      "label": "Differential Equations",
      "url": "/nda/mathematics/differential-equations",
      "relation": "related"
    },
    {
      "label": "Maths Syllabus",
      "url": "/nda/syllabus/mathematics",
      "relation": "related"
    },
    {
      "label": "Trigonometry",
      "url": "/nda/mathematics/trigonometry",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Calculus?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Calculus on this route focuses on functions, limits, continuity, derivatives and derivative applications; integration and differential equations have separate frozen routes."
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
    "title": "NDA Calculus 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Calculus scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
