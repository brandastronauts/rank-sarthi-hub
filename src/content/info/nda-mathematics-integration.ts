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
  "title": "NDA Integration: Standard Integrals, Substitution, Parts and Definite Integrals",
  "eyebrow": "Integration",
  "intent": "Learn the NDA-specific Integration scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
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
                    "text": "int x^n dx=x^(n+1)/(n+1)+C, n!=-1",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "int 1/x dx=ln|x|+C",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "int e^x dx=e^x+C",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "int sin x dx=-cos x+C; int cos x dx=sin x+C",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Integration by parts: int u dv = uv - int v du",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Definite integral: int_a^b f(x)dx=F(b)-F(a) when F'=f",
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
                    "text": "/nda/mock-tests",
                    "code": true
                  },
                  {
                    "text": " -> PRODUCT_BLOCKED: no functioning NDA mock engine evidenced."
                  }
                ],
                [
                  {
                    "text": "/nda/toppers",
                    "code": true
                  },
                  {
                    "text": " -> EVIDENCE_BLOCKED: no verified Rank Sarthi NDA result / topper proof supplied."
                  }
                ],
                [
                  {
                    "text": "/nda/pricing",
                    "code": true
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
                  "text": "STOP. No platform integration performed. NDA-B not started. NDA-C not started."
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
  "faqs": [
    {
      "question": "What should I know for NDA Integration?",
      "answer": [
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
    "title": "NDA Integration 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Integration scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
