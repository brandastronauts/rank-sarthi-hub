import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsAlgebra: InfoPageContent = {
  "url": "/nda/mathematics/algebra",
  "platform": "nda",
  "slug": "mathematics/algebra",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Algebra: Sets, Progressions, Complex Numbers, Quadratics and Counting",
  "eyebrow": "Algebra",
  "intent": "Learn the NDA-specific Algebra scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Algebra covers sets, complex numbers, progressions, quadratics, permutations and combinations, the binomial theorem, logarithms and related official syllabus concepts."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Sets and set operations, Venn diagrams, De Morgan laws, Cartesian products, relations and equivalence relations; real numbers; complex numbers; binary number system; arithmetic, geometric and harmonic progressions; quadratic equations with real coefficients; graphical solution of linear inequations in two variables; permutations and combinations; binomial theorem; logarithms and applications."
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
                  "text": "Sets and set operations, Venn diagrams, De Morgan laws, Cartesian products, relations and equivalence relations; real numbers; complex numbers; binary number system; arithmetic, geometric and harmonic progressions; quadratic equations with real coefficients; graphical solution of linear inequations in two variables; permutations and combinations; binomial theorem; logarithms and applications."
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
                  "text": "Arithmetic fluency, factorisation, linear equations, exponent laws, basic coordinate graph reading."
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
                    "text": "Set, subset, universal set, complement, union and intersection"
                  }
                ],
                [
                  {
                    "text": "Relation and equivalence relation"
                  }
                ],
                [
                  {
                    "text": "Complex number z = a + ib, modulus and argument"
                  }
                ],
                [
                  {
                    "text": "Arithmetic, geometric and harmonic progression"
                  }
                ],
                [
                  {
                    "text": "Permutation, combination and factorial"
                  }
                ],
                [
                  {
                    "text": "Quadratic equation and roots"
                  }
                ],
                [
                  {
                    "text": "Logarithm and base conditions"
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
                    "text": "AP: a_n = a + (n-1)d; S_n = n/2[2a + (n-1)d]",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "GP: a_n = ar^(n-1); S_n = a(r^n - 1)/(r - 1), r != 1; infinite sum a/(1-r) only for |r| < 1",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Quadratic roots: x = [-b +/- sqrt(b^2 - 4ac)]/(2a), a != 0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "For roots alpha, beta: alpha + beta = -b/a; alpha beta = c/a",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "nPr = n!/(n-r)!; nCr = n!/[r!(n-r)!]",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Binomial: (x+y)^n = sum C(n,r)x^(n-r)y^r for non-negative integer n",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "log_a(xy)=log_a x + log_a y; log_a(x/y)=log_a x - log_a y; log_a(x^k)=k log_a x with a>0, a!=1, x>0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "For z=a+ib: |z| = sqrt(a^2+b^2)",
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
                    "text": "Infinite GP formula requires |r| < 1."
                  }
                ],
                [
                  {
                    "text": "Logarithm arguments must be positive in real-number work; base must be positive and not 1."
                  }
                ],
                [
                  {
                    "text": "Quadratic formula requires a != 0; discriminant controls real-root nature."
                  }
                ],
                [
                  {
                    "text": "nPr and nCr standard formulas use integers n >= r >= 0."
                  }
                ],
                [
                  {
                    "text": "Equivalence relation requires reflexive, symmetric and transitive properties."
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
                    "text": "A sequence 5, 9, 13, ... is an AP with d=4. The 20th term is 5+19x4=81. Method choice: use the nth-term formula, not repeated addition."
                  }
                ],
                [
                  {
                    "text": "For x^2-7x+10=0, factorisation gives (x-5)(x-2)=0. If factorisation is not obvious, the quadratic formula is the safer general method."
                  }
                ],
                [
                  {
                    "text": "From 8 students, choosing 3 for a committee uses 8C3 because order does not matter; assigning president, secretary and treasurer uses 8P3 because roles make order matter."
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
                    "text": "Confusing permutation with combination."
                  }
                ],
                [
                  {
                    "text": "Using infinite-GP sum when |r| >= 1."
                  }
                ],
                [
                  {
                    "text": "Dropping logarithm domain conditions."
                  }
                ],
                [
                  {
                    "text": "Changing sign incorrectly in sum/product of quadratic roots."
                  }
                ],
                [
                  {
                    "text": "Treating a non-equivalence relation as equivalence after checking only one property."
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
                  "text": "First identify the algebra family. Check whether the question is structural (sets / relation), formula-led (progressions), root-led (quadratics), counting-led (P&C) or representation-led (complex numbers). Use the shortest valid identity. If the algebra expands rapidly, look for symmetry, roots, factorisation or a counting complement before committing."
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
      "label": "Complex Numbers",
      "url": "/nda/mathematics/complex-numbers",
      "relation": "related"
    },
    {
      "label": "Quadratic Equations",
      "url": "/nda/mathematics/quadratic-equations",
      "relation": "related"
    },
    {
      "label": "Probability",
      "url": "/nda/mathematics/probability",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Algebra?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Algebra covers sets, complex numbers, progressions, quadratics, permutations and combinations, the binomial theorem, logarithms and related official syllabus concepts."
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
    "title": "NDA Algebra 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Algebra scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
