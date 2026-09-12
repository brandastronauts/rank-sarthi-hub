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
  "title": null,
  "eyebrow": "Calculus",
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
                  "text": "https://ranksarthi.com/nda/mathematics/calculus"
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
                  "text": "Calculus"
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
                  "text": "/nda/mathematics/integration"
                },
                {
                  "text": ", and differential equations are owned by "
                },
                {
                  "text": "/nda/mathematics/differential-equations"
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
                  "text": "NDA Calculus: Functions, Limits, Continuity and Derivatives"
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
                  "text": "NDA Calculus on this route focuses on functions, limits, continuity, derivatives, second derivatives, increasing / decreasing behaviour and maxima / minima. Integration and differential equations are handled on their dedicated frozen routes."
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
                    "text": "d(x^n)/dx = n x^(n-1)"
                  }
                ],
                [
                  {
                    "text": "d(sin x)/dx=cos x; d(cos x)/dx=-sin x; d(e^x)/dx=e^x; d(ln x)/dx=1/x for x>0"
                  }
                ],
                [
                  {
                    "text": "Product: (uv)'=u'v+uv'; quotient: (u/v)'=(u'v-uv')/v^2, v!=0"
                  }
                ],
                [
                  {
                    "text": "Chain rule: d[f(g(x))]/dx=f'(g(x))g'(x)"
                  }
                ],
                [
                  {
                    "text": "At a differentiable interior extremum, f'(x)=0 is a candidate condition, not a complete classification test."
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
                  "text": "/nda/mathematics/integration"
                },
                {
                  "text": ", "
                },
                {
                  "text": "/nda/mathematics/differential-equations"
                },
                {
                  "text": ", "
                },
                {
                  "text": "/nda/mathematics/trigonometry"
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
                    "text": "SEO title: NDA Calculus 2026: Concepts, Formulas & Exam Approach | Rank Sarthi"
                  }
                ],
                [
                  {
                    "text": "Meta description: Learn the NDA-specific Calculus scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage."
                  }
                ],
                [
                  {
                    "text": "Canonical: https://ranksarthi.com/nda/mathematics/calculus"
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
                  "text": " What should I know for NDA Calculus? "
                },
                {
                  "text": "Answer:",
                  "bold": true
                },
                {
                  "text": " NDA Calculus on this route focuses on functions, limits, continuity, derivatives and derivative applications; integration and differential equations have separate frozen routes."
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
