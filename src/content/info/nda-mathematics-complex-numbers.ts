import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsComplexNumbers: InfoPageContent = {
  "url": "/nda/mathematics/complex-numbers",
  "platform": "nda",
  "slug": "mathematics/complex-numbers",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Complex Numbers: Form, Modulus, Argument and Roots",
  "eyebrow": "Complex Numbers",
  "intent": "Learn the NDA-specific Complex Numbers scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Complex Numbers covers a+ib form, conjugates, modulus, argument and cube roots of unity as part of official Algebra."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Complex numbers and basic properties; modulus and argument; cube roots of unity within the official Algebra syllabus."
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
                  "text": "Complex numbers and basic properties; modulus and argument; cube roots of unity within the official Algebra syllabus."
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
                  "text": "Quadratic equations, coordinate plane, exponent laws and basic trigonometry."
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
                    "text": "Imaginary unit i with i^2=-1"
                  }
                ],
                [
                  {
                    "text": "Complex number z=a+ib"
                  }
                ],
                [
                  {
                    "text": "Real and imaginary parts"
                  }
                ],
                [
                  {
                    "text": "Conjugate"
                  }
                ],
                [
                  {
                    "text": "Modulus"
                  }
                ],
                [
                  {
                    "text": "Argument"
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
                    "text": "If z=a+ib, conjugate zbar=a-ib",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "|z|=sqrt(a^2+b^2)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "z zbar=|z|^2",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "1/z = zbar/|z|^2 for z!=0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "i powers cycle: i, -1, -i, 1",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Cube roots of unity: 1, omega, omega^2 with omega^3=1 and 1+omega+omega^2=0",
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
                    "text": "Argument depends on quadrant; arctan(b/a) alone can give a wrong quadrant."
                  }
                ],
                [
                  {
                    "text": "Reciprocal formula excludes z=0."
                  }
                ],
                [
                  {
                    "text": "Cube-root identities refer to the non-real cube roots omega and omega^2 with the stated relation."
                  }
                ],
                [
                  {
                    "text": "When solving quadratics, complex roots appear in conjugate pairs for real coefficients."
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
                    "text": "z=3+4i has |z|=5 and conjugate 3-4i."
                  }
                ],
                [
                  {
                    "text": "1/(2+i)=(2-i)/5 after multiplying numerator and denominator by the conjugate."
                  }
                ],
                [
                  {
                    "text": "For omega a non-real cube root of unity, 1+omega+omega^2=0, so expressions containing this sum collapse immediately."
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
                    "text": "Using i^2=1."
                  }
                ],
                [
                  {
                    "text": "Getting argument quadrant wrong."
                  }
                ],
                [
                  {
                    "text": "Forgetting conjugate in division."
                  }
                ],
                [
                  {
                    "text": "Expanding cube-root identities instead of using 1+omega+omega^2=0."
                  }
                ],
                [
                  {
                    "text": "Assuming every square root is real."
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
                  "text": "Convert division to conjugate form early. For powers of i, reduce exponent modulo 4. For modulus / argument, use the coordinate point (a,b). For cube roots of unity, test whether standard identities simplify the expression before multiplying out."
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
      "label": "Quadratic Equations",
      "url": "/nda/mathematics/quadratic-equations",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Complex Numbers?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Complex Numbers covers a+ib form, conjugates, modulus, argument and cube roots of unity as part of official Algebra."
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
    "title": "NDA Complex Numbers 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Complex Numbers scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
