import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaMathematicsStatistics: InfoPageContent = {
  "url": "/nda/mathematics/statistics",
  "platform": "nda",
  "slug": "mathematics/statistics",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": null,
  "eyebrow": "Statistics",
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
                  "text": "https://ranksarthi.com/nda/mathematics/statistics"
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
                  "text": "Statistics"
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
                  "text": "Owned by UPSC NDA Mathematics syllabus. Exact NDA-relevant scope: Classification of data; frequency and cumulative frequency distributions; histogram, pie chart and frequency polygon; mean, median and mode; variance and standard deviation; correlation and regression."
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
                  "text": "NDA Statistics: Data, Central Tendency, Dispersion, Correlation and Regression"
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
                  "text": "NDA Statistics covers frequency distributions and graphs, mean / median / mode, variance and standard deviation, plus correlation and regression."
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
                  "text": "Classification of data; frequency and cumulative frequency distributions; histogram, pie chart and frequency polygon; mean, median and mode; variance and standard deviation; correlation and regression."
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
                  "text": "Arithmetic, percentages, ratios, algebraic substitution and graph reading."
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
                    "text": "Frequency distribution"
                  }
                ],
                [
                  {
                    "text": "Cumulative frequency"
                  }
                ],
                [
                  {
                    "text": "Mean, median and mode"
                  }
                ],
                [
                  {
                    "text": "Variance and standard deviation"
                  }
                ],
                [
                  {
                    "text": "Correlation"
                  }
                ],
                [
                  {
                    "text": "Regression"
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
                    "text": "Ungrouped mean: xbar = sum x / n"
                  }
                ],
                [
                  {
                    "text": "Frequency mean: xbar = sum f x / sum f"
                  }
                ],
                [
                  {
                    "text": "Population-style variance for a finite dataset: sigma^2 = sum (x-xbar)^2 / n, with denominator chosen to match the problem definition"
                  }
                ],
                [
                  {
                    "text": "Standard deviation sigma=sqrt(variance)"
                  }
                ],
                [
                  {
                    "text": "Pie-chart sector angle = category frequency / total x 360 degrees"
                  }
                ],
                [
                  {
                    "text": "For grouped median / mode, use the formula only when class structure and frequencies fit the standard grouped-data assumptions taught for the problem."
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
                    "text": "Always identify whether data are raw, discrete-frequency or grouped-continuous before choosing a formula."
                  }
                ],
                [
                  {
                    "text": "Grouped formulas depend on class intervals and the intended frequency treatment."
                  }
                ],
                [
                  {
                    "text": "Correlation measures association, not causation."
                  }
                ],
                [
                  {
                    "text": "Regression line use requires consistent variable roles and scale."
                  }
                ],
                [
                  {
                    "text": "Do not mix sample and population variance conventions without reading the question."
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
                    "text": "Data 2,4,4,6: mean=4; squared deviations 4,0,0,4 sum to 8; using denominator n gives variance 2 and SD sqrt2."
                  }
                ],
                [
                  {
                    "text": "A category with 30 observations out of 120 gets 30/120 x 360=90 degrees in a pie chart."
                  }
                ],
                [
                  {
                    "text": "If cumulative frequencies are 5, 12, 20, 31, the median class is located by the position near N/2, not by choosing the largest class frequency."
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
                    "text": "Using ordinary mean when frequencies are supplied."
                  }
                ],
                [
                  {
                    "text": "Confusing cumulative frequency with class frequency."
                  }
                ],
                [
                  {
                    "text": "Applying grouped-mode formula blindly to unsuitable or unequal-width classes."
                  }
                ],
                [
                  {
                    "text": "Treating high correlation as proof that one variable causes the other."
                  }
                ],
                [
                  {
                    "text": "Forgetting that SD is the square root of variance."
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
                  "text": "Identify the representation first: table, graph or raw list. For central tendency, choose the measure requested and avoid unnecessary conversion. For grouped data, write class boundaries / frequencies before formula use. For correlation / regression, interpret sign and relation cautiously and compute only what the question asks."
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
                  "text": "/nda/mathematics/probability"
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
                    "text": "SEO title: NDA Statistics 2026: Concepts, Formulas & Exam Approach | Rank Sarthi"
                  }
                ],
                [
                  {
                    "text": "Meta description: Learn the NDA-specific Statistics scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage."
                  }
                ],
                [
                  {
                    "text": "Canonical: https://ranksarthi.com/nda/mathematics/statistics"
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
                  "text": " What should I know for NDA Statistics? "
                },
                {
                  "text": "Answer:",
                  "bold": true
                },
                {
                  "text": " NDA Statistics covers frequency distributions and graphs, mean / median / mode, variance and standard deviation, plus correlation and regression."
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
      "label": "Probability",
      "url": "/nda/mathematics/probability",
      "relation": "related"
    },
    {
      "label": "Algebra",
      "url": "/nda/mathematics/algebra",
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
