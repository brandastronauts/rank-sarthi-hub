import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsTrigonometry: InfoPageContent = {
  "url": "/nda/mathematics/trigonometry",
  "platform": "nda",
  "slug": "mathematics/trigonometry",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Trigonometry: Identities, Angles, Heights and Distances",
  "eyebrow": "Trigonometry",
  "intent": "Learn the NDA-specific Trigonometry scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Trigonometry covers angle measure, ratios, identities, sum / difference and multiple-angle relations, inverse trigonometric functions, heights and distances and triangle properties."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Angles and measures in degrees and radians; trigonometric ratios; identities; sum and difference formulae; multiple and sub-multiple angles; inverse trigonometric functions; heights and distances; properties of triangles."
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
                  "text": "Angles and measures in degrees and radians; trigonometric ratios; identities; sum and difference formulae; multiple and sub-multiple angles; inverse trigonometric functions; heights and distances; properties of triangles."
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
                  "text": "Right-triangle geometry, algebraic manipulation, coordinate signs, basic similarity."
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
                    "text": "Radian and degree measure"
                  }
                ],
                [
                  {
                    "text": "Sine, cosine and tangent"
                  }
                ],
                [
                  {
                    "text": "Quadrant signs"
                  }
                ],
                [
                  {
                    "text": "Principal-value idea for inverse trigonometric functions"
                  }
                ],
                [
                  {
                    "text": "Angle of elevation / depression"
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
                    "text": "sin^2 x + cos^2 x = 1",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "1 + tan^2 x = sec^2 x; 1 + cot^2 x = csc^2 x",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "sin(A +/- B)=sinA cosB +/- cosA sinB",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "cos(A +/- B)=cosA cosB -/+ sinA sinB",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "tan(A +/- B)=(tanA +/- tanB)/(1 -/+ tanA tanB), denominator non-zero",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "sin 2A=2sinA cosA; cos 2A=cos^2 A - sin^2 A",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Degree-radian: theta radians = theta degrees x pi/180",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Sine rule: a/sin A = b/sin B = c/sin C; cosine rule: c^2=a^2+b^2-2ab cos C",
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
                    "text": "Tangent identities require denominators to be non-zero."
                  }
                ],
                [
                  {
                    "text": "Inverse-trig simplification must respect principal-value ranges."
                  }
                ],
                [
                  {
                    "text": "Height-distance sketches require a horizontal reference and correct elevation / depression angle."
                  }
                ],
                [
                  {
                    "text": "Triangle rules apply to the corresponding opposite sides and angles."
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
                    "text": "Convert 150 degrees to radians: 150 x pi/180 = 5pi/6."
                  }
                ],
                [
                  {
                    "text": "If tan theta=3/4 in an acute angle, use a 3-4-5 triangle to get sin theta=3/5 and cos theta=4/5 without calculating theta."
                  }
                ],
                [
                  {
                    "text": "A tower seen at elevation 45 degrees from distance 40 m on level ground has height 40 m if observer height is ignored. The diagram is part of the method, not decoration."
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
                    "text": "Using degree values directly in a radian-based identity."
                  }
                ],
                [
                  {
                    "text": "Ignoring quadrant signs."
                  }
                ],
                [
                  {
                    "text": "Cancelling terms across addition in identities."
                  }
                ],
                [
                  {
                    "text": "Using inverse-trig identities outside principal ranges."
                  }
                ],
                [
                  {
                    "text": "Drawing height-distance geometry without marking horizontal / vertical lines."
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
                  "text": "Reduce the expression before substituting numbers. For triangle / height problems, draw and label first. For identities, convert to sine and cosine only when it simplifies structure. Under negative marking, avoid long identity transformations unless each step has a clear target."
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
      "label": "Calculus",
      "url": "/nda/mathematics/calculus",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Trigonometry?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Trigonometry covers angle measure, ratios, identities, sum / difference and multiple-angle relations, inverse trigonometric functions, heights and distances and triangle properties."
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
    "title": "NDA Trigonometry 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Trigonometry scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
