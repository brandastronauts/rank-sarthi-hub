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
  "title": null,
  "eyebrow": "Probability",
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
                  "text": "https://ranksarthi.com/nda/mathematics/probability"
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
                  "text": "Probability"
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
                  "text": "NDA Probability: Events, Conditional Probability, Bayes and Binomial Distribution"
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
                  "text": "NDA Probability covers events and sample spaces, probability laws, conditional probability, Bayes theorem, random variables and binomial distribution."
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
                    "text": "P(A^c)=1-P(A)"
                  }
                ],
                [
                  {
                    "text": "P(A union B)=P(A)+P(B)-P(A intersection B)"
                  }
                ],
                [
                  {
                    "text": "P(A|B)=P(A intersection B)/P(B), P(B)>0"
                  }
                ],
                [
                  {
                    "text": "If independent: P(A intersection B)=P(A)P(B)"
                  }
                ],
                [
                  {
                    "text": "Bayes: P(A_i|B)=P(B|A_i)P(A_i)/sum_j P(B|A_j)P(A_j)"
                  }
                ],
                [
                  {
                    "text": "Binomial: P(X=r)=C(n,r)p^r(1-p)^(n-r), r=0,...,n"
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
                  "text": "/nda/mathematics/statistics"
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
                    "text": "SEO title: NDA Probability 2026: Concepts, Formulas & Exam Approach | Rank Sarthi"
                  }
                ],
                [
                  {
                    "text": "Meta description: Learn the NDA-specific Probability scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage."
                  }
                ],
                [
                  {
                    "text": "Canonical: https://ranksarthi.com/nda/mathematics/probability"
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
                  "text": " What should I know for NDA Probability? "
                },
                {
                  "text": "Answer:",
                  "bold": true
                },
                {
                  "text": " NDA Probability covers events and sample spaces, probability laws, conditional probability, Bayes theorem, random variables and binomial distribution."
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
      "label": "Statistics",
      "url": "/nda/mathematics/statistics",
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
