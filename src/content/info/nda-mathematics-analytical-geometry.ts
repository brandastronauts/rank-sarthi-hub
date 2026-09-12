import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsAnalyticalGeometry: InfoPageContent = {
  "url": "/nda/mathematics/analytical-geometry",
  "platform": "nda",
  "slug": "mathematics/analytical-geometry",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Analytical Geometry: Lines, Conics, Planes and Spheres",
  "eyebrow": "Analytical Geometry",
  "intent": "Learn the NDA-specific Analytical Geometry scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Analytical Geometry covers 2D lines and conics plus 3D points, direction ratios, lines, planes and spheres."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Rectangular Cartesian coordinates; distance formula; equations of a line in various forms; angle between lines; distance of a point from a line; circle in standard and general form; standard parabola, ellipse and hyperbola; eccentricity and axes. In 3D: points, distance, direction cosines / ratios, line and plane equations, angles, sphere."
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
                  "text": "Rectangular Cartesian coordinates; distance formula; equations of a line in various forms; angle between lines; distance of a point from a line; circle in standard and general form; standard parabola, ellipse and hyperbola; eccentricity and axes. In 3D: points, distance, direction cosines / ratios, line and plane equations, angles, sphere."
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
                  "text": "Algebra, quadratic manipulation, basic trigonometry and coordinate plotting."
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
                    "text": "Slope and intercept"
                  }
                ],
                [
                  {
                    "text": "Conic section and eccentricity"
                  }
                ],
                [
                  {
                    "text": "Direction ratios and direction cosines"
                  }
                ],
                [
                  {
                    "text": "Plane normal"
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
                    "text": "2D distance: sqrt[(x2-x1)^2+(y2-y1)^2]",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Slope through two points: (y2-y1)/(x2-x1), x2!=x1",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Point-slope line: y-y1=m(x-x1)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Point to Ax+By+C=0 distance: |Ax0+By0+C|/sqrt(A^2+B^2)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Circle: (x-h)^2+(y-k)^2=r^2",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Parabola: y^2=4ax or x^2=4ay in standard orientation",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Ellipse: x^2/a^2+y^2/b^2=1, a>b>0; e=sqrt(1-b^2/a^2)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Hyperbola: x^2/a^2-y^2/b^2=1; e=sqrt(1+b^2/a^2)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "3D distance: sqrt[(x2-x1)^2+(y2-y1)^2+(z2-z1)^2]",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Sphere: (x-a)^2+(y-b)^2+(z-c)^2=r^2",
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
                    "text": "Slope formula excludes vertical lines; use x=constant instead."
                  }
                ],
                [
                  {
                    "text": "Distance-to-line formula assumes standard line coefficients not all zero."
                  }
                ],
                [
                  {
                    "text": "Conic formulas depend on orientation and positive semi-axis parameters."
                  }
                ],
                [
                  {
                    "text": "Direction cosines l,m,n satisfy l^2+m^2+n^2=1."
                  }
                ],
                [
                  {
                    "text": "Angle formulas must use correct line / plane direction data."
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
                    "text": "Line through (2,3) with slope 4: y-3=4(x-2)."
                  }
                ],
                [
                  {
                    "text": "Circle x^2+y^2-6x+4y-12=0 becomes (x-3)^2+(y+2)^2=25 by completing squares."
                  }
                ],
                [
                  {
                    "text": "Distance between (1,2,3) and (4,6,3) is sqrt(9+16)=5."
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
                    "text": "Treating a vertical line as having finite slope."
                  }
                ],
                [
                  {
                    "text": "Forgetting absolute value in point-to-line distance."
                  }
                ],
                [
                  {
                    "text": "Mixing ellipse and hyperbola eccentricity relations."
                  }
                ],
                [
                  {
                    "text": "Completing the square incorrectly in a circle."
                  }
                ],
                [
                  {
                    "text": "Using direction ratios as direction cosines without normalisation when the formula requires cosines."
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
                  "text": "Sketch the geometry when possible. Convert equations to a recognisable standard form before extracting centre, radius, axes or eccentricity. In 3D, separate point, line and plane objects carefully. Choose vector methods only if they reduce algebra, not by habit."
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
      "label": "Trigonometry",
      "url": "/nda/mathematics/trigonometry",
      "relation": "related"
    },
    {
      "label": "Vector Algebra",
      "url": "/nda/mathematics/vector-algebra",
      "relation": "related"
    },
    {
      "label": "Quadratic Equations",
      "url": "/nda/mathematics/quadratic-equations",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Analytical Geometry?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Analytical Geometry covers 2D lines and conics plus 3D points, direction ratios, lines, planes and spheres."
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
    "title": "NDA Analytical Geometry 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Analytical Geometry scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
