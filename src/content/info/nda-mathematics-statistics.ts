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
  "title": "NDA Statistics: Data, Central Tendency, Dispersion, Correlation and Regression",
  "eyebrow": "Statistics",
  "intent": "Learn the NDA-specific Statistics scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA Statistics covers frequency distributions and graphs, mean / median / mode, variance and standard deviation, plus correlation and regression."
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
                    "text": "Ungrouped mean: xbar = sum x / n",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Frequency mean: xbar = sum f x / sum f",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Population-style variance for a finite dataset: sigma^2 = sum (x-xbar)^2 / n, with denominator chosen to match the problem definition",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Standard deviation sigma=sqrt(variance)",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "Pie-chart sector angle = category frequency / total x 360 degrees",
                    "code": true
                  }
                ],
                [
                  {
                    "text": "For grouped median / mode, use the formula only when class structure and frequencies fit the standard grouped-data assumptions taught for the problem.",
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
  "faqs": [
    {
      "question": "What should I know for NDA Statistics?",
      "answer": [
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
    "title": "NDA Statistics 2026: Concepts, Formulas & Exam Approach | Rank Sarthi",
    "description": "Learn the NDA-specific Statistics scope, formulas, conditions, worked reasoning, common errors and question approach without invented weightage.",
    "ogType": "article"
  }
};
