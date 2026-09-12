import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsMatricesDeterminants: InfoPageContent = {
  "url": "/nda/mathematics/matrices-determinants",
  "platform": "nda",
  "slug": "mathematics/matrices-determinants",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Matrices and Determinants: Operations, Inverse and Linear Equations",
  "eyebrow": "Matrices Determinants",
  "intent": "Learn the NDA-specific Matrices Determinants scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Matrices and Determinants covers matrix types and operations, determinants, adjoint and inverse, and solving two- or three-variable linear systems."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Types of matrices and matrix operations; determinants and basic properties; adjoint and inverse of a square matrix; solution of systems of two or three linear equations by Cramer's Rule and matrix method."
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
                  "text": "Types of matrices and matrix operations; determinants and basic properties; adjoint and inverse of a square matrix; solution of systems of two or three linear equations by Cramer's Rule and matrix method."
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
                  "text": "Linear equations, basic algebra and arithmetic with signed numbers."
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
                    "text": "Order of a matrix"
                  }
                ],
                [
                  {
                    "text": "Square, diagonal, identity, zero and transpose matrix"
                  }
                ],
                [
                  {
                    "text": "Determinant"
                  }
                ],
                [
                  {
                    "text": "Minor and cofactor"
                  }
                ],
                [
                  {
                    "text": "Adjoint and inverse"
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
                    "text": "For 2x2 A=[[a,b],[c,d]], det(A)=ad-bc",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "A^(-1)=adj(A)/det(A) when det(A)!=0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "For compatible matrices, (AB)_ij = sum a_ik b_kj",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Cramer's Rule: x=Dx/D, y=Dy/D, etc., only when D!=0",
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
                    "text": "Matrix addition requires the same order."
                  }
                ],
                [
                  {
                    "text": "AB is defined only when columns of A equal rows of B; AB generally != BA."
                  }
                ],
                [
                  {
                    "text": "A square matrix has an inverse only when det(A) != 0."
                  }
                ],
                [
                  {
                    "text": "Cramer's Rule in the standard unique-solution form requires non-zero determinant."
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
                    "text": "For A=[[2,1],[3,2]], det A=4-3=1, so an inverse exists."
                  }
                ],
                [
                  {
                    "text": "Solve x+y=5 and 2x-y=1: adding gives 3x=6, x=2, y=3. Matrix or Cramer methods should reproduce the same pair; use the shorter method unless the question specifically tests matrix machinery."
                  }
                ],
                [
                  {
                    "text": "If det A=0, do not write adj(A)/0. The inverse does not exist."
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
                    "text": "Multiplying matrices element-by-element instead of row-by-column."
                  }
                ],
                [
                  {
                    "text": "Reversing AB and BA."
                  }
                ],
                [
                  {
                    "text": "Sign errors in cofactors."
                  }
                ],
                [
                  {
                    "text": "Attempting inverse when determinant is zero."
                  }
                ],
                [
                  {
                    "text": "Using Cramer's Rule without checking D."
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
                  "text": "Check matrix dimensions first. For determinant questions, exploit zeros and simple row / column structure. For linear systems, determine whether the question tests method or just the solution. Under time pressure, avoid expanding a 3x3 determinant blindly if a simplification is available."
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
      "label": "Analytical Geometry",
      "url": "/nda/mathematics/analytical-geometry",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Matrices Determinants?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Matrices and Determinants covers matrix types and operations, determinants, adjoint and inverse, and solving two- or three-variable linear systems."
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
    "title": "NDA Matrices Determinants 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Matrices Determinants scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
