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
  "title": null,
  "eyebrow": "Matrices Determinants",
  "intent": "",
  "answer": [],
  "chips": [
    "Official-source checked",
    "Human review pending"
  ],
  "blocks": [
    {
      "kind": "prose",
      "id": "1-url",
      "heading": "1. URL",
      "concepts": [
        {
          "id": "1-url-intro",
          "title": "1. URL",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "https://ranksarthi.com/nda/mathematics/matrices-determinants"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "2-frozen-route-name",
      "heading": "2. Frozen route name",
      "concepts": [
        {
          "id": "2-frozen-route-name-intro",
          "title": "2. Frozen route name",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Matrices Determinants"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "3-official-syllabus-ownership",
      "heading": "3. Official syllabus ownership",
      "concepts": [
        {
          "id": "3-official-syllabus-ownership-intro",
          "title": "3. Official syllabus ownership",
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
      "id": "4-h1",
      "heading": "4. H1",
      "concepts": [
        {
          "id": "4-h1-intro",
          "title": "4. H1",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "NDA Matrices and Determinants: Operations, Inverse and Linear Equations"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "5-direct-answer",
      "heading": "5. Direct answer",
      "concepts": [
        {
          "id": "5-direct-answer-intro",
          "title": "5. Direct answer",
          "body": [
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
      ]
    },
    {
      "kind": "prose",
      "id": "6-exact-nda-relevant-scope",
      "heading": "6. Exact NDA-relevant scope",
      "concepts": [
        {
          "id": "6-exact-nda-relevant-scope-intro",
          "title": "6. Exact NDA-relevant scope",
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
      "id": "7-prerequisite-concepts",
      "heading": "7. Prerequisite concepts",
      "concepts": [
        {
          "id": "7-prerequisite-concepts-intro",
          "title": "7. Prerequisite concepts",
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
      "id": "8-core-definitions",
      "heading": "8. Core definitions",
      "concepts": [
        {
          "id": "8-core-definitions-intro",
          "title": "8. Core definitions",
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
      "id": "9-formula-set",
      "heading": "9. Formula set",
      "concepts": [
        {
          "id": "9-formula-set-intro",
          "title": "9. Formula set",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "For 2x2 A=[[a,b],[c,d]], det(A)=ad-bc"
                  }
                ],
                [
                  {
                    "text": "A^(-1)=adj(A)/det(A) when det(A)!=0"
                  }
                ],
                [
                  {
                    "text": "For compatible matrices, (AB)_ij = sum a_ik b_kj"
                  }
                ],
                [
                  {
                    "text": "Cramer's Rule: x=Dx/D, y=Dy/D, etc., only when D!=0"
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
      "id": "10-conditions-applicability",
      "heading": "10. Conditions / applicability",
      "concepts": [
        {
          "id": "10-conditions-applicability-intro",
          "title": "10. Conditions / applicability",
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
      "id": "11-worked-reasoning-examples",
      "heading": "11. Worked reasoning examples",
      "concepts": [
        {
          "id": "11-worked-reasoning-examples-intro",
          "title": "11. Worked reasoning examples",
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
      "id": "12-common-execution-errors",
      "heading": "12. Common execution errors",
      "concepts": [
        {
          "id": "12-common-execution-errors-intro",
          "title": "12. Common execution errors",
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
      "id": "13-manual-pi-v1-1-error-mapping",
      "heading": "13. Manual PI v1.1 error mapping",
      "concepts": [
        {
          "id": "13-manual-pi-v1-1-error-mapping-intro",
          "title": "13. Manual PI v1.1 error mapping",
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
      "id": "14-exam-specific-question-approach",
      "heading": "14. Exam-specific question approach",
      "concepts": [
        {
          "id": "14-exam-specific-question-approach-intro",
          "title": "14. Exam-specific question approach",
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
      "id": "15-internal-links",
      "heading": "15. Internal links",
      "concepts": [
        {
          "id": "15-internal-links-intro",
          "title": "15. Internal links",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "/nda/syllabus/mathematics"
                },
                {
                  "text": ", "
                },
                {
                  "text": "/nda/mathematics/algebra"
                },
                {
                  "text": ", "
                },
                {
                  "text": "/nda/mathematics/analytical-geometry"
                },
                {
                  "text": ", "
                },
                {
                  "text": "/nda/previous-year-papers"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Mock-test actions must remain disabled or hidden until "
                },
                {
                  "text": "/nda/mock-tests"
                },
                {
                  "text": " has a verified functioning product."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "16-metadata",
      "heading": "16. Metadata",
      "concepts": [
        {
          "id": "16-metadata-intro",
          "title": "16. Metadata",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "SEO title: NDA Matrices Determinants 2026: Concepts, Formulas & Exam Approach | Rank Sarthi"
                  }
                ],
                [
                  {
                    "text": "Meta description: Learn the NDA-specific Matrices Determinants scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage."
                  }
                ],
                [
                  {
                    "text": "Canonical: https://ranksarthi.com/nda/mathematics/matrices-determinants"
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
      "id": "17-aeo",
      "heading": "17. AEO",
      "concepts": [
        {
          "id": "17-aeo-intro",
          "title": "17. AEO",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Question:",
                  "bold": true
                },
                {
                  "text": " What should I know for NDA Matrices Determinants? "
                },
                {
                  "text": "Answer:",
                  "bold": true
                },
                {
                  "text": " NDA Matrices and Determinants covers matrix types and operations, determinants, adjoint and inverse, and solving two- or three-variable linear systems."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "18-official-sources",
      "heading": "18. Official sources",
      "concepts": [
        {
          "id": "18-official-sources-intro",
          "title": "18. Official sources",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "UPSC NDA & NA Examination (II), 2026 notice: https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf"
                  }
                ],
                [
                  {
                    "text": "UPSC Previous Question Papers: https://www.upsc.gov.in/examinations/previous-question-papers"
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
      "id": "19-reviewer-requirement",
      "heading": "19. Reviewer requirement",
      "concepts": [
        {
          "id": "19-reviewer-requirement-intro",
          "title": "19. Reviewer requirement",
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
    },
    {
      "kind": "prose",
      "id": "20-schema-recommendation",
      "heading": "20. Schema recommendation",
      "concepts": [
        {
          "id": "20-schema-recommendation-intro",
          "title": "20. Schema recommendation",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Article + LearningResource + BreadcrumbList. This is a content-level recommendation for the frozen T08 page and does not request a Lovable architecture change. No Person schema for unassigned contributors."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "21-indexation",
      "heading": "21. Indexation",
      "concepts": [
        {
          "id": "21-indexation-intro",
          "title": "21. Indexation",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "draft noindex Hold until human academic review and rendered-page QA."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "22-qa",
      "heading": "22. QA",
      "concepts": [
        {
          "id": "22-qa-intro",
          "title": "22. QA",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "NDA scope only, not copied from JEE depth."
                  }
                ],
                [
                  {
                    "text": "Formula conditions are stated beside formulas where material."
                  }
                ],
                [
                  {
                    "text": "Worked examples are instructional examples, not claimed PYQs."
                  }
                ],
                [
                  {
                    "text": "No chapter-frequency, high-weightage or guaranteed-marks claim."
                  }
                ],
                [
                  {
                    "text": "No invented product action."
                  }
                ],
                [
                  {
                    "text": "Zero em dash rule applied."
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "---"
                }
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
  "sourceRefs": [],
  "sourceNote": "Official UPSC and Armed Forces sources are the authority for every exam fact on this page. Rank Sarthi explanation is kept separate from official wording.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "None | Rank Sarthi",
    "description": "",
    "ogType": "article"
  }
};
