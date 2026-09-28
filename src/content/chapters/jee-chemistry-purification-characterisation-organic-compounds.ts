import type { ChapterContent } from "@/content/types";

/**
 * /jee/chemistry/purification-characterisation-organic-compounds — final syllabus-gap page (production package 2026-09-28).
 * Copy is taken from the approved content package; review is assigned
 * internally (pageReview) and no completed-review claim is shown until sign-off.
 */
export const jeeChemistryPurificationCharacterisation: ChapterContent = {
  "exam": "JEE",
  "examVariant": "Main",
  "platform": "jee",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Purification and Characterisation of Organic Compounds for JEE Main",
  "slug": "purification-characterisation-organic-compounds",
  "url": "/jee/chemistry/purification-characterisation-organic-compounds",
  "canonicalIntent": "Learn which purification method to choose and why, then connect qualitative/quantitative elemental analysis to empirical and molecular formula determination.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Purifying an organic compound means separating the target from impurities while preserving the target. The method is chosen from a property difference:"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "property difference -> separation method -> collected fraction/crystals/band -> purity check",
          "code": true
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Characterisation then asks what elements or composition the purified sample contains:"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "sample -> qualitative evidence -> quantitative composition -> simplest mole ratio -> empirical formula -> molecular formula when molar mass is known",
          "code": true
        }
      ]
    }
  ],
  "tables": [],
  "sections": [
    {
      "id": "exam-ownership",
      "slot": "scope",
      "heading": "Exam ownership",
      "concepts": [
        {
          "id": "exam-ownership-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "JEE Main 2026:",
                    "bold": true
                  },
                  {
                    "text": " CURRENT, owns Unit 13."
                  }
                ],
                [
                  {
                    "text": "JEE Advanced:",
                    "bold": true
                  },
                  {
                    "text": " This page may support overlapping laboratory/organic reasoning, but Advanced ownership is controlled separately by the Advanced syllabus and the Practical Chemistry page."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "official-mapping",
      "slot": "scope",
      "heading": "Official 2026 syllabus mapping",
      "concepts": [
        {
          "id": "official-mapping-overview",
          "title": "",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Own the Main Unit 13 scope:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "crystallisation;"
                  }
                ],
                [
                  {
                    "text": "sublimation;"
                  }
                ],
                [
                  {
                    "text": "distillation;"
                  }
                ],
                [
                  {
                    "text": "differential extraction;"
                  }
                ],
                [
                  {
                    "text": "chromatography;"
                  }
                ],
                [
                  {
                    "text": "qualitative detection of nitrogen, sulphur, phosphorus and halogens;"
                  }
                ],
                [
                  {
                    "text": "quantitative estimation principles for carbon, hydrogen, nitrogen, halogens, sulphur and phosphorus;"
                  }
                ],
                [
                  {
                    "text": "calculations of empirical and molecular formulae."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "scope-boundary",
      "slot": "scope",
      "heading": "Scope boundary",
      "concepts": [
        {
          "id": "scope-boundary-overview",
          "title": "",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "This page focuses on "
                },
                {
                  "text": "separation choice + analytical reasoning + composition calculation",
                  "bold": true
                },
                {
                  "text": ". It does not duplicate:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Organic Basics reaction-mechanism instruction;"
                  }
                ],
                [
                  {
                    "text": "full salt-analysis schemes;"
                  }
                ],
                [
                  {
                    "text": "JEE Advanced practical-organic scope;"
                  }
                ],
                [
                  {
                    "text": "laboratory procedural detail that is not needed to understand the syllabus principle."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "core-reasoning",
      "slot": "prerequisites",
      "heading": "Method-selection map",
      "concepts": [
        {
          "id": "core-reasoning-method-selection-map",
          "title": "Method-selection map",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Crystallisation:",
                    "bold": true
                  },
                  {
                    "text": " use a strong temperature dependence of solubility or selective solubility."
                  }
                ],
                [
                  {
                    "text": "Sublimation:",
                    "bold": true
                  },
                  {
                    "text": " use when one solid sublimes appreciably while the major impurity does not."
                  }
                ],
                [
                  {
                    "text": "Distillation:",
                    "bold": true
                  },
                  {
                    "text": " use volatility/boiling-point differences. The exact distillation mode depends on thermal stability, miscibility and boiling-point separation."
                  }
                ],
                [
                  {
                    "text": "Differential extraction:",
                    "bold": true
                  },
                  {
                    "text": " distribute a solute between largely immiscible phases according to relative solubility/partitioning."
                  }
                ],
                [
                  {
                    "text": "Chromatography:",
                    "bold": true
                  },
                  {
                    "text": " separate components because they interact differently with stationary and mobile phases."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "relationships",
      "slot": "formulas",
      "heading": "Formulae and relationships",
      "concepts": [
        {
          "id": "formula-partitioning",
          "title": "Partitioning",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A simple distribution coefficient may be represented as: "
                },
                {
                  "text": "K = C_organic / C_aqueous",
                  "code": true
                },
                {
                  "text": " at equilibrium for a defined solute form and temperature."
                }
              ]
            }
          ]
        },
        {
          "id": "formula-chromatography",
          "title": "Chromatography",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "R_f = d_solute / d_solvent-front",
                  "code": true
                },
                {
                  "text": ", with "
                },
                {
                  "text": "0 ≤ R_f ≤ 1",
                  "code": true
                },
                {
                  "text": " in a normal planar run."
                }
              ]
            }
          ]
        },
        {
          "id": "formula-element-percentage",
          "title": "Element percentage",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "% element = (mass of element in sample / mass of sample) × 100",
                  "code": true
                }
              ]
            }
          ]
        },
        {
          "id": "formula-empirical-formula",
          "title": "Empirical formula",
          "body": [
            {
              "type": "list",
              "ordered": true,
              "items": [
                [
                  {
                    "text": "Assume 100 g if percentages are supplied."
                  }
                ],
                [
                  {
                    "text": "Convert mass of each element to moles: "
                  },
                  {
                    "text": "n = mass / atomic mass",
                    "code": true
                  },
                  {
                    "text": "."
                  }
                ],
                [
                  {
                    "text": "Divide by the smallest mole amount."
                  }
                ],
                [
                  {
                    "text": "Convert near-simple ratios to the smallest whole-number set."
                  }
                ]
              ]
            }
          ]
        },
        {
          "id": "formula-molecular-formula",
          "title": "Molecular formula",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "n = molar mass / empirical-formula mass",
                  "code": true
                },
                {
                  "text": " "
                },
                {
                  "text": "molecular formula = (empirical formula)_n",
                  "code": true
                },
                {
                  "text": " where "
                },
                {
                  "text": "n",
                  "code": true
                },
                {
                  "text": " should be consistent with a positive whole-number multiple within the data precision."
                }
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "applicability",
      "slot": "formulas",
      "heading": "Applicability conditions",
      "concepts": [
        {
          "id": "applicability-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Choose crystallisation only when the solubility behaviour supports useful separation."
                  }
                ],
                [
                  {
                    "text": "Use extraction logic for species that can distribute between separate phases; ionisation state can change partitioning."
                  }
                ],
                [
                  {
                    "text": "Compare chromatography "
                  },
                  {
                    "text": "R_f",
                    "code": true
                  },
                  {
                    "text": " values only under comparable experimental conditions."
                  }
                ],
                [
                  {
                    "text": "Formula determination assumes the composition data are internally consistent and refer to the same pure compound."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "exceptions",
      "slot": "formulas",
      "heading": "Important exceptions",
      "concepts": [
        {
          "id": "exceptions-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "A lower boiling point alone does not guarantee an easy separation if components have close volatilities or form non-ideal mixtures."
                  }
                ],
                [
                  {
                    "text": "“Insoluble impurity” and “soluble impurity” require different handling in crystallisation."
                  }
                ],
                [
                  {
                    "text": "An "
                  },
                  {
                    "text": "R_f",
                    "code": true
                  },
                  {
                    "text": " match supports comparison but is not by itself proof of identity."
                  }
                ],
                [
                  {
                    "text": "Empirical and molecular formulae are identical only when the molar mass equals the empirical-formula mass."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "concept-relationships",
      "slot": "concepts",
      "heading": "Concept relationships",
      "concepts": [
        {
          "id": "concept-relationships-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Organic Basics supplies structure, bonding, nomenclature and functional-group language."
                  }
                ],
                [
                  {
                    "text": "States of Matter and Solutions support volatility/solubility ideas where relevant."
                  }
                ],
                [
                  {
                    "text": "Equilibrium supports partitioning and extraction."
                  }
                ],
                [
                  {
                    "text": "Practical Chemistry owns broader test/observation and titrimetric/salt-analysis scope."
                  }
                ],
                [
                  {
                    "text": "Mole Concept supports composition and formula calculation."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "common-errors",
      "slot": "mistakes",
      "heading": "Common execution and concept errors",
      "concepts": [
        {
          "id": "common-errors-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Choosing purification methods by memorised compound lists rather than property differences."
                  }
                ],
                [
                  {
                    "text": "Treating chromatography as “heaviest moves least.”"
                  }
                ],
                [
                  {
                    "text": "Measuring "
                  },
                  {
                    "text": "R_f",
                    "code": true
                  },
                  {
                    "text": " from the plate edge instead of the reference origin."
                  }
                ],
                [
                  {
                    "text": "Confusing empirical formula with molecular formula."
                  }
                ],
                [
                  {
                    "text": "Forgetting to convert percent composition to mole ratios."
                  }
                ],
                [
                  {
                    "text": "Ignoring an ionisation change that alters extraction behaviour."
                  }
                ],
                [
                  {
                    "text": "Calling a qualitative observation quantitative evidence."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "revision-checklist",
      "slot": "practice",
      "heading": "Revision checklist",
      "concepts": [
        {
          "id": "revision-checklist-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Can I choose a separation method from the relevant physical-property difference?"
                  }
                ],
                [
                  {
                    "text": "Can I state what crystallisation, distillation, extraction and chromatography each exploit?"
                  }
                ],
                [
                  {
                    "text": "Can I compute and interpret "
                  },
                  {
                    "text": "R_f",
                    "code": true
                  },
                  {
                    "text": "?"
                  }
                ],
                [
                  {
                    "text": "Can I distinguish qualitative detection from quantitative estimation?"
                  }
                ],
                [
                  {
                    "text": "Can I move from mass percentages to empirical and molecular formulae?"
                  }
                ],
                [
                  {
                    "text": "Can I explain why a method may fail?"
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "practice-questions",
      "slot": "practice",
      "heading": "Practice and reasoning questions",
      "concepts": [
        {
          "id": "practice-questions-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "ordered": true,
              "items": [
                [
                  {
                    "text": "Why can excess solvent reduce crystallisation recovery?"
                  }
                ],
                [
                  {
                    "text": "When is sublimation a better conceptual choice than crystallisation?"
                  }
                ],
                [
                  {
                    "text": "Explain why repeated extractions can outperform one extraction using the same total solvent volume."
                  }
                ],
                [
                  {
                    "text": "A spot travels 5.1 cm and solvent front 8.5 cm. Calculate "
                  },
                  {
                    "text": "R_f",
                    "code": true
                  },
                  {
                    "text": "."
                  }
                ],
                [
                  {
                    "text": "A compound has empirical formula "
                  },
                  {
                    "text": "NO₂",
                    "code": true
                  },
                  {
                    "text": " and molar mass 92. Determine the molecular formula."
                  }
                ],
                [
                  {
                    "text": "Why is an "
                  },
                  {
                    "text": "R_f",
                    "code": true
                  },
                  {
                    "text": " value not a universal constant for a compound?"
                  }
                ],
                [
                  {
                    "text": "Distinguish “element detected” from “percentage of element determined.”"
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    }
  ],
  "prerequisites": [
    {
      "label": "JEE Chemistry",
      "url": "/jee/chemistry",
      "relation": "up"
    },
    {
      "label": "Chemistry Syllabus",
      "url": "/jee/syllabus/chemistry",
      "relation": "up"
    },
    {
      "label": "Mole Concept",
      "url": "/jee/chemistry/mole-concept",
      "relation": "prerequisite"
    },
    {
      "label": "Organic Basics",
      "url": "/jee/chemistry/organic-basics",
      "relation": "prerequisite"
    },
    {
      "label": "Equilibrium",
      "url": "/jee/chemistry/equilibrium",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Purification and Characterisation of Organic Compounds (JEE Main Unit 13)",
    "topics": [
      "crystallisation",
      "sublimation",
      "distillation",
      "differential extraction",
      "chromatography",
      "qualitative detection of nitrogen, sulphur, phosphorus and halogens",
      "quantitative estimation principles for carbon, hydrogen, nitrogen, halogens, sulphur and phosphorus",
      "calculations of empirical and molecular formulae"
    ],
    "syllabusUrl": "/jee/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "crystallisation",
      "title": "Crystallisation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A good recrystallisation logic is: dissolve the impure solid under conditions where the target is substantially more soluble, then lower the solubility so the target crystallises while as much impurity as possible remains separated. “More solvent” is not always better because it can reduce recovery."
            }
          ]
        }
      ]
    },
    {
      "id": "sublimation",
      "title": "Sublimation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A sublimable solid changes directly between solid and vapour under suitable conditions. Separation works only if the target/impurity volatility contrast is useful."
            }
          ]
        }
      ]
    },
    {
      "id": "distillation",
      "title": "Distillation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Distillation relies on vapour-liquid behaviour. A large boiling-point difference may allow simple separation; closer boiling points require stronger vapour-liquid enrichment logic. If a compound decomposes at its normal boiling point, reduced-pressure logic may be relevant conceptually."
            }
          ]
        }
      ]
    },
    {
      "id": "differential-extraction",
      "title": "Differential extraction",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At equilibrium, a solute partitions between two phases. Multiple smaller extractions can be more effective than one extraction with the same total solvent volume because equilibrium is re-established each time."
            }
          ]
        }
      ]
    },
    {
      "id": "chromatography",
      "title": "Chromatography",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In planar chromatography: "
            },
            {
              "text": "R_f = distance travelled by solute / distance travelled by solvent front",
              "code": true
            },
            {
              "text": " for the same run and reference origin. An "
            },
            {
              "text": "R_f",
              "code": true
            },
            {
              "text": " value is condition-dependent and should not be treated as a universal identity number."
            }
          ]
        }
      ]
    },
    {
      "id": "qualitative-characterisation",
      "title": "Qualitative characterisation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Qualitative tests establish the "
            },
            {
              "text": "presence/absence of an element or functional evidence",
              "bold": true
            },
            {
              "text": " through a chemical transformation and an observation. The inference is valid only when interfering possibilities and the test boundary are respected."
            }
          ]
        }
      ]
    },
    {
      "id": "quantitative-characterisation",
      "title": "Quantitative characterisation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Measured product mass, gas volume, titration-equivalent or another analytical quantity is converted into the amount of the element and then its mass percentage."
            }
          ]
        }
      ]
    }
  ],
  "workedExamples": [
    {
      "id": "example-a-choose-a-method",
      "prompt": "Example A: choose a method",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A solid target is highly soluble in hot solvent, sparingly soluble in cold solvent, while a soluble impurity remains appreciably soluble even after cooling. "
            },
            {
              "text": "Crystallisation",
              "bold": true
            },
            {
              "text": " is a defensible choice because cooling selectively reduces the target's solubility."
            }
          ]
        }
      ]
    },
    {
      "id": "example-b-chromatography",
      "prompt": "Example B: chromatography",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A component moves "
            },
            {
              "text": "3.2 cm",
              "code": true
            },
            {
              "text": " while the solvent front moves "
            },
            {
              "text": "8.0 cm",
              "code": true
            },
            {
              "text": ". "
            },
            {
              "text": "R_f = 3.2/8.0 = 0.40",
              "code": true
            },
            {
              "text": ". The result is meaningful only for the stated stationary/mobile phase and run conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "example-c-empirical-and-molecular-formula",
      "prompt": "Example C: empirical and molecular formula",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A compound contains approximately "
            },
            {
              "text": "40.0% C",
              "code": true
            },
            {
              "text": ", "
            },
            {
              "text": "6.7% H",
              "code": true
            },
            {
              "text": ", "
            },
            {
              "text": "53.3% O",
              "code": true
            },
            {
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For 100 g:"
            }
          ]
        },
        {
          "type": "list",
          "items": [
            [
              {
                "text": "C: "
              },
              {
                "text": "40.0/12 ≈ 3.33 mol",
                "code": true
              }
            ],
            [
              {
                "text": "H: "
              },
              {
                "text": "6.7/1 ≈ 6.7 mol",
                "code": true
              }
            ],
            [
              {
                "text": "O: "
              },
              {
                "text": "53.3/16 ≈ 3.33 mol",
                "code": true
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Divide by 3.33 -> approximately "
            },
            {
              "text": "1 : 2 : 1",
              "code": true
            },
            {
              "text": ", so empirical formula is "
            },
            {
              "text": "CH₂O",
              "code": true
            },
            {
              "text": ". Empirical-formula mass ≈ 30. If molar mass is 180, "
            },
            {
              "text": "n=180/30=6",
              "code": true
            },
            {
              "text": ", so molecular formula is "
            },
            {
              "text": "C₆H₁₂O₆",
              "code": true
            },
            {
              "text": "."
            }
          ]
        }
      ]
    },
    {
      "id": "example-d-extraction-logic",
      "prompt": "Example D: extraction logic",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If a neutral solute strongly prefers an organic phase over water, repeated contact with fresh smaller organic portions can remove more solute than a single contact of equal total volume because each extraction establishes a new equilibrium."
            }
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Practical Chemistry",
      "url": "/jee/chemistry/practical-chemistry",
      "relation": "related"
    },
    {
      "label": "States Of Matter",
      "url": "/jee/chemistry/states-of-matter",
      "relation": "related"
    },
    {
      "label": "Solutions",
      "url": "/jee/chemistry/solutions",
      "relation": "related"
    }
  ],
  "sources": [
    "nta-jee-main-2026-syllabus-pdf",
    "ncert-textbooks-index"
  ],
  "sourceNote": "Official scope: JEE Main: Unit 13 Purification and Characterisation of Organic Compounds; Concept support: Separation, organic analysis and formula concepts. NCERT is concept support only; the official 2026 syllabus controls exam ownership. All sources checked 28 September 2026.",
  "pageReview": {
    "reviewerProfileId": "adarsh-kumar",
    "reviewStatus": "REVIEWER_ASSIGNED",
    "contentVersion": "2026-09-28"
  },
  "updated": "28 September 2026",
  "contentStatus": "draft",
  "meta": {
    "title": "JEE Purification & Characterisation of Organic Compounds 2026 | Rank Sarthi",
    "description": "Study crystallisation, sublimation, distillation, extraction, chromatography, elemental analysis and empirical/molecular-formula reasoning for JEE Main 2026.",
    "ogType": "article"
  }
};
