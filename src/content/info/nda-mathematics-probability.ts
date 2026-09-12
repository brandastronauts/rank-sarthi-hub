import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsProbability: InfoPageContent = {
  "url": "/nda/mathematics/probability",
  "platform": "nda",
  "slug": "mathematics/probability",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Probability: Events, Conditional Probability, Bayes and Binomial Distribution",
  "eyebrow": "Probability",
  "intent": "Learn the NDA-specific Probability scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Probability covers events and sample spaces, probability laws, conditional probability, Bayes theorem, random variables and binomial distribution."
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Random experiments; outcomes and sample space; mutually exclusive and exhaustive, impossible and certain events; union, intersection and complement; classical and statistical probability; elementary probability theorems; conditional probability; Bayes theorem; random variables; binomial distribution and relevant experiments."
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
                  "text": "Random experiments; outcomes and sample space; mutually exclusive and exhaustive, impossible and certain events; union, intersection and complement; classical and statistical probability; elementary probability theorems; conditional probability; Bayes theorem; random variables; binomial distribution and relevant experiments."
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
                  "text": "Sets, fractions, combinations and algebra."
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
                    "text": "Sample space"
                  }
                ],
                [
                  {
                    "text": "Event"
                  }
                ],
                [
                  {
                    "text": "Mutually exclusive events"
                  }
                ],
                [
                  {
                    "text": "Independent events"
                  }
                ],
                [
                  {
                    "text": "Conditional probability"
                  }
                ],
                [
                  {
                    "text": "Random variable"
                  }
                ],
                [
                  {
                    "text": "Binomial experiment"
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
                    "text": "P(A^c)=1-P(A)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "P(A union B)=P(A)+P(B)-P(A intersection B)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "P(A|B)=P(A intersection B)/P(B), P(B)>0",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "If independent: P(A intersection B)=P(A)P(B)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Bayes: P(A_i|B)=P(B|A_i)P(A_i)/sum_j P(B|A_j)P(A_j)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Binomial: P(X=r)=C(n,r)p^r(1-p)^(n-r), r=0,...,n",
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
                    "text": "Classical equally-likely formula requires equally likely outcomes."
                  }
                ],
                [
                  {
                    "text": "Mutually exclusive is not the same as independent."
                  }
                ],
                [
                  {
                    "text": "Conditional probability denominator must be non-zero."
                  }
                ],
                [
                  {
                    "text": "Binomial model requires fixed number of trials, two outcomes per trial under the chosen success definition, constant p and independent trials."
                  }
                ],
                [
                  {
                    "text": "Bayes categories should form an appropriate partition for the standard form."
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
                    "text": "A fair die: P(even)=3/6=1/2."
                  }
                ],
                [
                  {
                    "text": "If P(A)=0.6, P(B)=0.5 and P(A intersection B)=0.3, then P(A union B)=0.8. Since 0.3=0.6x0.5, A and B are independent in this numerical case."
                  }
                ],
                [
                  {
                    "text": "For 4 independent trials with success p=0.25, probability of exactly 2 successes is C(4,2)(0.25)^2(0.75)^2."
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
                    "text": "Adding probabilities of overlapping events without subtracting intersection."
                  }
                ],
                [
                  {
                    "text": "Treating mutually exclusive events as independent."
                  }
                ],
                [
                  {
                    "text": "Using nPr instead of nCr in binomial probability."
                  }
                ],
                [
                  {
                    "text": "Forgetting to check binomial assumptions."
                  }
                ],
                [
                  {
                    "text": "Reversing P(A|B) and P(B|A)."
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
                  "text": "Translate words into events before calculating. Draw a small set diagram, tree or table when conditional structure is unclear. Decide whether the task is counting, union / intersection, conditional probability, Bayes or binomial. Under negative marking, stop if the event model itself is uncertain rather than forcing arithmetic on a wrong model."
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
      "label": "Statistics",
      "url": "/nda/mathematics/statistics",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What should I know for NDA Probability?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "NDA Probability covers events and sample spaces, probability laws, conditional probability, Bayes theorem, random variables and binomial distribution."
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
    "title": "NDA Probability 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Probability scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
