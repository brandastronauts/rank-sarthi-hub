import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsVectorAlgebra: InfoPageContent = {
  "url": "/nda/mathematics/vector-algebra",
  "platform": "nda",
  "slug": "mathematics/vector-algebra",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Vector Algebra: Dot Product, Cross Product and Geometry",
  "eyebrow": "Vector Algebra",
  "intent": "Learn the NDA-specific Vector Algebra scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Vector Algebra covers 2D / 3D vectors, magnitude, unit vectors, addition, scalar multiplication, dot product, cross product and applications."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Vectors in two and three dimensions; magnitude and direction; unit and null vectors; vector addition; scalar multiplication; dot product; cross product; applications to work done by a force, moment of a force and geometrical problems."
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
                  "text": "Vectors in two and three dimensions; magnitude and direction; unit and null vectors; vector addition; scalar multiplication; dot product; cross product; applications to work done by a force, moment of a force and geometrical problems."
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
                  "text": "Coordinate geometry, Pythagoras, basic trigonometry and algebra."
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
                    "text": "Scalar vs vector"
                  }
                ],
                [
                  {
                    "text": "Magnitude"
                  }
                ],
                [
                  {
                    "text": "Unit vector"
                  }
                ],
                [
                  {
                    "text": "Dot product"
                  }
                ],
                [
                  {
                    "text": "Cross product"
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
                    "text": "|a|=sqrt(a1^2+a2^2+a3^2)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Unit vector along a: a/|a| for a!=0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "a.b=|a||b|cos theta",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "|a x b|=|a||b|sin theta",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "a.b=0 for perpendicular non-zero vectors",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "a x b=0 for parallel non-zero vectors",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Work W=F.s",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Moment about origin can be represented by r x F",
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
                    "text": "Unit vector formula excludes the zero vector."
                  }
                ],
                [
                  {
                    "text": "Dot-product angle formula requires non-zero vectors."
                  }
                ],
                [
                  {
                    "text": "Cross-product direction follows right-hand convention."
                  }
                ],
                [
                  {
                    "text": "Parallel / perpendicular conclusions require attention to zero vectors."
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
                    "text": "For a=(3,4), |a|=5 and unit vector is (3/5,4/5)."
                  }
                ],
                [
                  {
                    "text": "For a=(1,0,0), b=(0,2,0), a.b=0 so they are perpendicular; a x b=(0,0,2)."
                  }
                ],
                [
                  {
                    "text": "A constant force (2,3) moving an object through displacement (4,1) does work 2x4+3x1=11 in consistent units."
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
                    "text": "Using dot product where cross product is required."
                  }
                ],
                [
                  {
                    "text": "Forgetting cross-product order changes sign."
                  }
                ],
                [
                  {
                    "text": "Normalising the zero vector."
                  }
                ],
                [
                  {
                    "text": "Dropping square roots incorrectly in magnitude."
                  }
                ],
                [
                  {
                    "text": "Confusing scalar product result with a vector."
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
                  "text": "Write components clearly and decide whether the target is scalar, direction, area / moment or angle. Dot product is usually the efficient route for angles and work. Cross product is the route for perpendicular direction, area and moment. Component arithmetic should be checked before interpreting the result."
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
      "label": "Analytical Geometry",
      "url": "/nda/mathematics/analytical-geometry",
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
      "question": "What should I know for NDA Vector Algebra?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Vector Algebra covers 2D / 3D vectors, magnitude, unit vectors, addition, scalar multiplication, dot product, cross product and applications."
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
    "title": "NDA Vector Algebra 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Vector Algebra scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
