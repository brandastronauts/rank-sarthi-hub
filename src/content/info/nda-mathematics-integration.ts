import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsIntegration: InfoPageContent = {
  "url": "/nda/mathematics/integration",
  "platform": "nda",
  "slug": "mathematics/integration",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "FINAL READINESS REPORT",
  "eyebrow": "Integration",
  "intent": "",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Expected = 25 Accounted = 25"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "CONTENT_COMPLETE = 22 PRODUCT_BLOCKED = 1 EVIDENCE_BLOCKED = 1 COMMERCIAL_INPUT_BLOCKED = 1 SME_REVIEW_REQUIRED = 0 SOURCE_BLOCKED = 0"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "TOTAL = 25"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Mathematics topics expected = 12 Mathematics topics production-complete = 12"
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
                  "text": "https://ranksarthi.com/nda/mathematics/integration"
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
                  "text": "Integration"
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Integration as inverse differentiation; integration by substitution and by parts; standard integrals involving algebraic, trigonometric, exponential and related functions within syllabus scope; definite integrals and elementary area applications."
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
                  "text": "NDA Integration: Standard Integrals, Substitution, Parts and Definite Integrals"
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
                  "text": "NDA Integration covers antiderivatives, substitution, integration by parts, standard integrals, definite integrals and elementary area applications."
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
                  "text": "Integration as inverse differentiation; integration by substitution and by parts; standard integrals involving algebraic, trigonometric, exponential and related functions within syllabus scope; definite integrals and elementary area applications."
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
                  "text": "Differentiation, algebraic manipulation, trigonometric identities and functions."
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
                    "text": "Antiderivative"
                  }
                ],
                [
                  {
                    "text": "Indefinite integral"
                  }
                ],
                [
                  {
                    "text": "Definite integral"
                  }
                ],
                [
                  {
                    "text": "Constant of integration"
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
                    "text": "int x^n dx=x^(n+1)/(n+1)+C, n!=-1"
                  }
                ],
                [
                  {
                    "text": "int 1/x dx=ln|x|+C"
                  }
                ],
                [
                  {
                    "text": "int e^x dx=e^x+C"
                  }
                ],
                [
                  {
                    "text": "int sin x dx=-cos x+C; int cos x dx=sin x+C"
                  }
                ],
                [
                  {
                    "text": "Integration by parts: int u dv = uv - int v du"
                  }
                ],
                [
                  {
                    "text": "Definite integral: int_a^b f(x)dx=F(b)-F(a) when F'=f"
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
                    "text": "Indefinite integrals require +C."
                  }
                ],
                [
                  {
                    "text": "Power rule excludes n=-1."
                  }
                ],
                [
                  {
                    "text": "Substitution should account for the differential factor."
                  }
                ],
                [
                  {
                    "text": "By-parts method is useful when choosing u and dv simplifies the remaining integral."
                  }
                ],
                [
                  {
                    "text": "For geometric area, split intervals where the integrand changes sign if the question asks for total area."
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
                    "text": "int (3x^2+2)dx=x^3+2x+C."
                  }
                ],
                [
                  {
                    "text": "int x e^x dx: choose u=x, dv=e^x dx, giving x e^x - e^x + C."
                  }
                ],
                [
                  {
                    "text": "int_0^1 2x dx=[x^2]_0^1=1."
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
                    "text": "Dropping +C."
                  }
                ],
                [
                  {
                    "text": "Using power rule on 1/x."
                  }
                ],
                [
                  {
                    "text": "Choosing by-parts components that make the integral harder."
                  }
                ],
                [
                  {
                    "text": "Not changing limits or back-substituting consistently after definite-integral substitution."
                  }
                ],
                [
                  {
                    "text": "Calling a negative definite integral a negative geometric area."
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
                  "text": "Look first for a direct standard form or an inner derivative suggesting substitution. Use by parts for products where one factor simplifies when differentiated. In definite integrals, preserve exact values until the final step. If the item is really a differential-equation problem, switch to the dedicated method rather than forcing integration alone."
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
                  "text": "/nda/mathematics/calculus"
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
                    "text": "SEO title: NDA Integration 2026: Concepts, Formulas & Exam Approach | Rank Sarthi"
                  }
                ],
                [
                  {
                    "text": "Meta description: Learn the NDA-specific Integration scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage."
                  }
                ],
                [
                  {
                    "text": "Canonical: https://ranksarthi.com/nda/mathematics/integration"
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
                  "text": " What should I know for NDA Integration? "
                },
                {
                  "text": "Answer:",
                  "bold": true
                },
                {
                  "text": " NDA Integration covers antiderivatives, substitution, integration by parts, standard integrals, definite integrals and elementary area applications."
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
    },
    {
      "kind": "prose",
      "id": "blocked-route-summary",
      "heading": "Blocked-route summary",
      "concepts": [
        {
          "id": "blocked-route-summary-intro",
          "title": "Blocked-route summary",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "/nda/mock-tests"
                  },
                  {
                    "text": " -> PRODUCT_BLOCKED: no functioning NDA mock engine evidenced."
                  }
                ],
                [
                  {
                    "text": "/nda/toppers"
                  },
                  {
                    "text": " -> EVIDENCE_BLOCKED: no verified Rank Sarthi NDA result / topper proof supplied."
                  }
                ],
                [
                  {
                    "text": "/nda/pricing"
                  },
                  {
                    "text": " -> COMMERCIAL_INPUT_BLOCKED: no approved NDA commercial plan / pricing input supplied."
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "STOP. No Lovable integration performed. NDA-B not started. NDA-C not started."
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
      "label": "Calculus",
      "url": "/nda/mathematics/calculus",
      "relation": "related"
    },
    {
      "label": "Differential Equations",
      "url": "/nda/mathematics/differential-equations",
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
    "title": "FINAL READINESS REPORT | Rank Sarthi",
    "description": "",
    "ogType": "article"
  }
};
