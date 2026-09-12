import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsQuadraticEquations: InfoPageContent = {
  "url": "/nda/mathematics/quadratic-equations",
  "platform": "nda",
  "slug": "mathematics/quadratic-equations",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Quadratic Equations: Roots, Discriminant and Coefficient Relations",
  "eyebrow": "Quadratic Equations",
  "intent": "Learn the NDA-specific Quadratic Equations scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Quadratic Equations covers solving real-coefficient quadratics, discriminant-based root nature and relations between roots and coefficients."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Quadratic equations with real coefficients within the official Algebra syllabus, including solution methods and root-coefficient relationships needed for NDA-style objective problems."
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
                  "text": "Quadratic equations with real coefficients within the official Algebra syllabus, including solution methods and root-coefficient relationships needed for NDA-style objective problems."
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
                  "text": "Factorisation, linear equations, squares / roots and algebraic identities."
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
                    "text": "Quadratic equation ax^2+bx+c=0 with a!=0"
                  }
                ],
                [
                  {
                    "text": "Discriminant D=b^2-4ac"
                  }
                ],
                [
                  {
                    "text": "Roots / zeros"
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
                    "text": "x=[-b +/- sqrt(D)]/(2a)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "D>0: two distinct real roots; D=0: equal real roots; D<0: non-real conjugate roots for real coefficients",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "alpha+beta=-b/a",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "alpha beta=c/a",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Equation with roots alpha,beta: x^2-(alpha+beta)x+alpha beta=0 up to a non-zero scale factor",
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
                    "text": "a must be non-zero."
                  }
                ],
                [
                  {
                    "text": "Discriminant classification assumes real coefficients."
                  }
                ],
                [
                  {
                    "text": "Root-sum / product relations use the same coefficients and equation scale consistently."
                  }
                ],
                [
                  {
                    "text": "Squaring both sides in related algebra can introduce extraneous roots, so substitute back when relevant."
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
                    "text": "x^2-5x+6=0 factors to roots 2 and 3; sum 5 and product 6 match coefficient relations."
                  }
                ],
                [
                  {
                    "text": "For 2x^2+4x+5=0, D=16-40=-24, so no real roots."
                  }
                ],
                [
                  {
                    "text": "If roots have sum 7 and product 10, the monic equation is x^2-7x+10=0."
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
                    "text": "Forgetting 2a in the denominator."
                  }
                ],
                [
                  {
                    "text": "Sign error in -b/a."
                  }
                ],
                [
                  {
                    "text": "Calling D=0 'no roots' rather than repeated real root."
                  }
                ],
                [
                  {
                    "text": "Factoring incorrectly and not checking."
                  }
                ],
                [
                  {
                    "text": "Using root relations on a linear equation after accidental cancellation."
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
                  "text": "Try factorisation when coefficients are simple. Use discriminant first if the question asks about nature of roots. Use sum / product relations for symmetric root expressions instead of solving individual roots. Keep the quadratic formula as the general fallback."
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
      "label": "Algebra",
      "url": "/nda/mathematics/algebra",
      "relation": "related"
    },
    {
      "label": "Complex Numbers",
      "url": "/nda/mathematics/complex-numbers",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Quadratic Equations?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Quadratic Equations covers solving real-coefficient quadratics, discriminant-based root nature and relations between roots and coefficients."
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
    "title": "NDA Quadratic Equations 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Quadratic Equations scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
