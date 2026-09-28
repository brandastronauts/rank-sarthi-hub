import type { ChapterContent } from "@/content/types";

/**
 * /jee/chemistry/practical-chemistry — final syllabus-gap page (production package 2026-09-28).
 * Copy is taken from the approved content package; review is assigned
 * internally (pageReview) and no completed-review claim is shown until sign-off.
 */
export const jeeChemistryPracticalChemistry: ChapterContent = {
  "exam": "JEE",
  "examVariant": "Main + Advanced",
  "platform": "jee",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "JEE Practical Chemistry: Observations, Titration, Salt Analysis and Organic Tests",
  "slug": "practical-chemistry",
  "url": "/jee/chemistry/practical-chemistry",
  "canonicalIntent": "Create one dependable academic destination for practical Chemistry instead of scattering functional-group tests, salt analysis, titration and experimental principles across thin pages.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Practical Chemistry can be reduced to four questions:"
        }
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        [
          {
            "text": "What chemical property is being probed?",
            "bold": true
          }
        ],
        [
          {
            "text": "What controlled reaction or measurement reveals it?",
            "bold": true
          }
        ],
        [
          {
            "text": "What observation is expected?",
            "bold": true
          }
        ],
        [
          {
            "text": "What conclusion is justified, and what alternative explanation must be excluded?",
            "bold": true
          }
        ]
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The learning model is:"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "sample / solution -> reagent or measurement principle -> chemical change -> observation -> inference -> confirmation / calculation -> limitation",
          "code": true
        }
      ]
    }
  ],
  "tables": [
    {
      "id": "formulas",
      "slot": "formulas",
      "heading": "Formulae and relationships",
      "columns": [
        "Application",
        "Relationship",
        "Boundary"
      ],
      "rows": [
        [
          "Titration stoichiometry",
          "C₁V₁/ν₁ = C₂V₂/ν₂",
          "Species and balanced-reaction coefficients must be defined"
        ],
        [
          "Calorimetry",
          "q=mcΔT",
          "Add container/calorimeter contribution if material"
        ],
        [
          "Molar enthalpy",
          "ΔH≈-q/n",
          "State the reaction amount basis and heat-loss assumption"
        ],
        [
          "Average reaction rate",
          "rate = ±ΔC/(νΔt)",
          "Sign and stoichiometric coefficient depend on species"
        ],
        [
          "pH (where relevant)",
          "pH=-log₁₀[H⁺]",
          "Simple concentration use requires the usual activity approximation"
        ]
      ],
      "jump": true
    }
  ],
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
                    "text": " CURRENT owner of Unit 20 Principles Related to Practical Chemistry."
                  }
                ],
                [
                  {
                    "text": "JEE Advanced 2026:",
                    "bold": true
                  },
                  {
                    "text": " CURRENT owner, through clearly labelled sections, of Principles of Qualitative Analysis and Practical Organic Chemistry."
                  }
                ],
                [
                  {
                    "text": "Main and Advanced ion/test lists must remain separately visible because they are not identical."
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
          "id": "official-mapping-main-unit-20",
          "title": "Main Unit 20",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Cover:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "detection of extra elements in organic compounds;"
                  }
                ],
                [
                  {
                    "text": "detection of hydroxyl, carbonyl, carboxyl and amino functional groups;"
                  }
                ],
                [
                  {
                    "text": "preparation principles for Mohr's salt and potash alum;"
                  }
                ],
                [
                  {
                    "text": "preparation principles for acetanilide, p-nitroacetanilide, aniline yellow and iodoform;"
                  }
                ],
                [
                  {
                    "text": "acid-base titrations with indicators;"
                  }
                ],
                [
                  {
                    "text": "oxalic acid versus KMnO₄ titration;"
                  }
                ],
                [
                  {
                    "text": "Mohr's salt versus KMnO₄ titration;"
                  }
                ],
                [
                  {
                    "text": "qualitative salt-analysis principles for the official Main cation/anion list;"
                  }
                ],
                [
                  {
                    "text": "enthalpy of solution of CuSO₄;"
                  }
                ],
                [
                  {
                    "text": "enthalpy of neutralisation of strong acid and strong base;"
                  }
                ],
                [
                  {
                    "text": "preparation of lyophilic and lyophobic sols;"
                  }
                ],
                [
                  {
                    "text": "kinetics of the iodide-H₂O₂ reaction at room temperature."
                  }
                ]
              ]
            }
          ]
        },
        {
          "id": "official-mapping-advanced-principles-of-qualitative-analysis",
          "title": "Advanced: Principles of Qualitative Analysis",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Create anchor "
                },
                {
                  "text": "#qualitative-analysis",
                  "code": true
                },
                {
                  "text": ". Preserve the Advanced official cation grouping and anion scope exactly in the implementation dataset rather than silently substituting the Main list."
                }
              ]
            }
          ]
        },
        {
          "id": "official-mapping-advanced-practical-organic-chemistry",
          "title": "Advanced: Practical Organic Chemistry",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Create anchor "
                },
                {
                  "text": "#practical-organic-chemistry",
                  "code": true
                },
                {
                  "text": ". Include detection principles for the Advanced-specified extra elements and functional groups, including the Advanced nitro-group scope."
                }
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
                  "text": "This page explains "
                },
                {
                  "text": "principles, observations, reaction logic, stoichiometry, selectivity, interference and inference",
                  "bold": true
                },
                {
                  "text": ". It should not become:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "a hazardous unsupervised laboratory manual;"
                  }
                ],
                [
                  {
                    "text": "a synthesis recipe with operational quantities;"
                  }
                ],
                [
                  {
                    "text": "a memorised colour-chart without chemical reasoning;"
                  }
                ],
                [
                  {
                    "text": "an invented extension of the official ion lists;"
                  }
                ],
                [
                  {
                    "text": "a claim that Main and Advanced have identical practical scope."
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
      "heading": "Observation is not the same as inference",
      "concepts": [
        {
          "id": "core-reasoning-observation-is-not-the-same-as-inference",
          "title": "Observation is not the same as inference",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "“Precipitate formed” is an observation. “The sample contains ion X” is an inference that is valid only if the test is selective enough or is followed by the required confirmation logic."
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
                    "text": "A qualitative test is useful only within its selectivity/interference boundary."
                  }
                ],
                [
                  {
                    "text": "Titration calculations require a balanced chemical equation."
                  }
                ],
                [
                  {
                    "text": "Indicator choice depends on the titration curve, not a fixed “one indicator for all acids/bases” rule."
                  }
                ],
                [
                  {
                    "text": "Calorimetry requires a declared heat-capacity model."
                  }
                ],
                [
                  {
                    "text": "Practical organic tests must be interpreted with the functional context, not as isolated colour memory."
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
                    "text": "Main and Advanced salt-analysis lists differ."
                  }
                ],
                [
                  {
                    "text": "Not every precipitate colour is unique."
                  }
                ],
                [
                  {
                    "text": "Oxidation-reduction stoichiometry changes with medium."
                  }
                ],
                [
                  {
                    "text": "M₁V₁=M₂V₂",
                    "code": true
                  },
                  {
                    "text": " is not universal."
                  }
                ],
                [
                  {
                    "text": "A negative single test may be inconclusive if the sample/test conditions were unsuitable."
                  }
                ],
                [
                  {
                    "text": "A preparation reaction and a purification step test different skills and should not be conflated."
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
                    "text": "Organic Basics -> functional groups, reaction types and electron movement."
                  }
                ],
                [
                  {
                    "text": "Redox Reactions -> permanganate titration and qualitative redox tests."
                  }
                ],
                [
                  {
                    "text": "Equilibrium/Ionic Equilibrium -> precipitation, complexation, acid-base and solubility logic."
                  }
                ],
                [
                  {
                    "text": "Coordination Compounds -> complex-ion reasoning in qualitative analysis."
                  }
                ],
                [
                  {
                    "text": "Thermodynamics -> enthalpy experiments."
                  }
                ],
                [
                  {
                    "text": "Chemical Kinetics -> iodide/H₂O₂ rate experiment."
                  }
                ],
                [
                  {
                    "text": "Proposed Purification & Characterisation page -> separation and elemental-analysis background."
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
                    "text": "Memorising colours without identifying the chemical basis."
                  }
                ],
                [
                  {
                    "text": "Mixing the Main and Advanced official ion lists."
                  }
                ],
                [
                  {
                    "text": "Using a titration formula without balancing the reaction."
                  }
                ],
                [
                  {
                    "text": "Confusing endpoint with the exact conceptual equivalence point."
                  }
                ],
                [
                  {
                    "text": "Ignoring the redox medium in permanganate reactions."
                  }
                ],
                [
                  {
                    "text": "Treating a preparation's purification step as the reaction itself."
                  }
                ],
                [
                  {
                    "text": "Reporting an inference as though it were the raw observation."
                  }
                ],
                [
                  {
                    "text": "Forgetting calorimeter/container heat capacity when the question supplies it."
                  }
                ],
                [
                  {
                    "text": "Adding historical practical topics not present in current official scope."
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
                    "text": "Can I separate observation from inference?"
                  }
                ],
                [
                  {
                    "text": "Can I state the Main and Advanced practical boundaries separately?"
                  }
                ],
                [
                  {
                    "text": "Can I balance the reaction before titration calculation?"
                  }
                ],
                [
                  {
                    "text": "Can I explain why a reagent/test is selective enough for the intended distinction?"
                  }
                ],
                [
                  {
                    "text": "Can I connect qualitative analysis to equilibrium/redox/coordination principles?"
                  }
                ],
                [
                  {
                    "text": "Can I perform a simple calorimetric energy balance?"
                  }
                ],
                [
                  {
                    "text": "Can I explain the listed preparation as a reaction class plus isolation/purification logic?"
                  }
                ],
                [
                  {
                    "text": "Can I identify where confirmatory evidence is needed?"
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
                    "text": "Why is "
                  },
                  {
                    "text": "M₁V₁=M₂V₂",
                    "code": true
                  },
                  {
                    "text": " unsafe as a universal titration formula?"
                  }
                ],
                [
                  {
                    "text": "Explain endpoint versus equivalence point."
                  }
                ],
                [
                  {
                    "text": "Why should Main and Advanced qualitative-analysis ion lists be displayed separately?"
                  }
                ],
                [
                  {
                    "text": "A 1:2 analyte:titrant reaction consumes "
                  },
                  {
                    "text": "15.0 mL",
                    "code": true
                  },
                  {
                    "text": " of "
                  },
                  {
                    "text": "0.200 M",
                    "code": true
                  },
                  {
                    "text": " titrant for "
                  },
                  {
                    "text": "25.0 mL",
                    "code": true
                  },
                  {
                    "text": " analyte. Find analyte concentration."
                  }
                ],
                [
                  {
                    "text": "Why can the same visible observation require different interpretations under different reagent conditions?"
                  }
                ],
                [
                  {
                    "text": "Design a reasoning sequence, not a procedure, for distinguishing an acidic functional group from a neutral one."
                  }
                ],
                [
                  {
                    "text": "What assumption is made when "
                  },
                  {
                    "text": "q=mcΔT",
                    "code": true
                  },
                  {
                    "text": " is the only calorimetry term used?"
                  }
                ],
                [
                  {
                    "text": "Why is a confirmatory test conceptually important in qualitative analysis?"
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
      "label": "Organic Basics",
      "url": "/jee/chemistry/organic-basics",
      "relation": "prerequisite"
    },
    {
      "label": "Redox Reactions",
      "url": "/jee/chemistry/redox-reactions",
      "relation": "prerequisite"
    },
    {
      "label": "Equilibrium",
      "url": "/jee/chemistry/equilibrium",
      "relation": "prerequisite"
    },
    {
      "label": "Ionic Equilibrium",
      "url": "/jee/chemistry/ionic-equilibrium",
      "relation": "prerequisite"
    },
    {
      "label": "Coordination Compounds",
      "url": "/jee/chemistry/coordination-compounds",
      "relation": "prerequisite"
    },
    {
      "label": "Thermodynamics",
      "url": "/jee/chemistry/thermodynamics",
      "relation": "prerequisite"
    },
    {
      "label": "Chemical Kinetics",
      "url": "/jee/chemistry/chemical-kinetics",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Principles Related to Practical Chemistry (JEE Main Unit 20); Principles of Qualitative Analysis and Practical Organic Chemistry (JEE Advanced)",
    "topics": [
      "detection of extra elements in organic compounds",
      "detection of hydroxyl, carbonyl, carboxyl and amino functional groups",
      "preparation principles for Mohr's salt and potash alum",
      "preparation principles for acetanilide, p-nitroacetanilide, aniline yellow and iodoform",
      "acid-base titrations with indicators",
      "oxalic acid versus KMnO₄ titration",
      "Mohr's salt versus KMnO₄ titration",
      "qualitative salt-analysis principles for the official Main cation/anion list",
      "enthalpy of solution of CuSO₄",
      "enthalpy of neutralisation of strong acid and strong base",
      "preparation of lyophilic and lyophobic sols",
      "kinetics of the iodide-H₂O₂ reaction at room temperature"
    ],
    "syllabusUrl": "/jee/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "practical-organic-chemistry",
      "title": "A. Organic element and functional-group detection",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach the purpose of converting covalently bound elements into detectable ionic/chemical forms where relevant, then applying a selective test. Keep nitrogen, sulphur and halogen reasoning separate. For Advanced, include nitro-group identification in its own labelled subsection rather than expanding the Main boundary."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Functional-group testing should connect:"
            }
          ]
        },
        {
          "type": "list",
          "items": [
            [
              {
                "text": "alcohol/phenol hydroxyl chemistry;"
              }
            ],
            [
              {
                "text": "aldehyde/ketone carbonyl chemistry;"
              }
            ],
            [
              {
                "text": "carboxylic-acid acidity;"
              }
            ],
            [
              {
                "text": "amine basicity/nucleophilicity;"
              }
            ],
            [
              {
                "text": "nitro-group scope for Advanced."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A test result should be presented as "
            },
            {
              "text": "evidence",
              "bold": true
            },
            {
              "text": ", not absolute proof in isolation."
            }
          ]
        }
      ]
    },
    {
      "id": "preparations",
      "title": "B. Preparations",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For every listed preparation, teach: "
            },
            {
              "text": "starting functional relationship -> intended transformation -> key reaction class -> isolation/purification principle -> identity/purity evidence -> common conceptual trap",
              "code": true
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not publish unsupervised operational quantities or unsafe procedural shortcuts."
            }
          ]
        }
      ]
    },
    {
      "id": "titrimetry",
      "title": "C. Titrimetry",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At equivalence: "
            },
            {
              "text": "stoichiometric amount of titrant = stoichiometric amount required by analyte reaction",
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
              "text": "A general stoichiometric relation can be written as: "
            },
            {
              "text": "n₁/ν₁ = n₂/ν₂",
              "code": true
            },
            {
              "text": ", where "
            },
            {
              "text": "n",
              "code": true
            },
            {
              "text": " is amount in moles and "
            },
            {
              "text": "ν",
              "code": true
            },
            {
              "text": " is the balanced-equation coefficient for the reacting species."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For solutions: "
            },
            {
              "text": "C₁V₁/ν₁ = C₂V₂/ν₂",
              "code": true
            },
            {
              "text": " when "
            },
            {
              "text": "C",
              "code": true
            },
            {
              "text": " and "
            },
            {
              "text": "V",
              "code": true
            },
            {
              "text": " are defined consistently for the species in the balanced reaction."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not use "
            },
            {
              "text": "M₁V₁=M₂V₂",
              "code": true
            },
            {
              "text": " blindly unless the reacting mole ratio is 1:1."
            }
          ]
        }
      ]
    },
    {
      "id": "indicator-logic",
      "title": "D. Acid-base indicator logic",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "An indicator changes colour over a transition range. Indicator choice should be compatible with the steep pH change near the equivalence region of the titration."
            }
          ]
        }
      ]
    },
    {
      "id": "permanganate-titration",
      "title": "E. Permanganate redox titration",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Permanganate changes oxidation state according to medium and reaction conditions. The balanced redox equation controls stoichiometry. Do not use a memorised factor without matching the reaction medium."
            }
          ]
        }
      ]
    },
    {
      "id": "qualitative-analysis",
      "title": "F. Qualitative salt analysis",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The logic is selective precipitation/complexation/redox or gas-evolution behaviour, organised so that an earlier step does not invalidate a later inference. For publication, show the "
            },
            {
              "text": "official ion scope by exam",
              "bold": true
            },
            {
              "text": " in separate tables."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "#### Main cation scope to preserve "
            },
            {
              "text": "Pb²⁺, Cu²⁺, Al³⁺, Fe³⁺, Zn²⁺, Ni²⁺, Ca²⁺, Ba²⁺, Mg²⁺, NH₄⁺",
              "code": true
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "#### Main anion scope to preserve "
            },
            {
              "text": "CO₃²⁻, S²⁻, SO₄²⁻, NO₃⁻, NO₂⁻, Cl⁻, Br⁻, I⁻",
              "code": true
            },
            {
              "text": " with the official insoluble-salt boundary retained."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "#### Advanced cation scope to preserve "
            },
            {
              "text": "Ag⁺, Hg²⁺, Cu²⁺, Pb²⁺, Fe³⁺, Cr³⁺, Al³⁺, Ca²⁺, Ba²⁺, Zn²⁺, Mn²⁺, Mg²⁺",
              "code": true
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "#### Advanced anion scope to preserve nitrate; halides excluding fluoride; carbonate/bicarbonate; sulfate; sulfide."
            }
          ]
        }
      ]
    },
    {
      "id": "calorimetry",
      "title": "G. Calorimetric experiments",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use an energy balance: "
            },
            {
              "text": "q = mcΔT",
              "code": true
            },
            {
              "text": " for a body/solution when "
            },
            {
              "text": "m",
              "code": true
            },
            {
              "text": ", "
            },
            {
              "text": "c",
              "code": true
            },
            {
              "text": " and "
            },
            {
              "text": "ΔT",
              "code": true
            },
            {
              "text": " describe that component and heat loss is negligible. Add calorimeter heat capacity when supplied or material."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For molar reaction enthalpy: "
            },
            {
              "text": "ΔH ≈ -q_surroundings / n_reaction",
              "code": true
            },
            {
              "text": " under the stated calorimetric assumptions."
            }
          ]
        }
      ]
    },
    {
      "id": "sols",
      "title": "H. Sols",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Distinguish lyophilic and lyophobic sols by the strength/nature of dispersed-phase–medium interaction and stability behaviour. Keep this as colloid preparation/observation reasoning, not a historical Surface Chemistry chapter claim for Main."
            }
          ]
        }
      ]
    },
    {
      "id": "kinetics-experiment",
      "title": "I. Kinetics experiment",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Average rate may be expressed as concentration change over time with stoichiometric sign convention: "
            },
            {
              "text": "rate = -Δ[reactant]/(νΔt) = Δ[product]/(νΔt)",
              "code": true
            },
            {
              "text": ". The experiment connects observable time/rate changes to concentration and reaction conditions."
            }
          ]
        }
      ]
    }
  ],
  "workedExamples": [
    {
      "id": "example-a-titration-stoichiometry",
      "prompt": "Example A: titration stoichiometry",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Suppose "
            },
            {
              "text": "25.0 mL",
              "code": true
            },
            {
              "text": " of an analyte reacts with "
            },
            {
              "text": "20.0 mL",
              "code": true
            },
            {
              "text": " of "
            },
            {
              "text": "0.100 mol L⁻¹",
              "code": true
            },
            {
              "text": " titrant, and the balanced reaction requires "
            },
            {
              "text": "2 mol titrant per 1 mol analyte",
              "bold": true
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
              "text": "Titrant moles = "
            },
            {
              "text": "0.100 × 0.0200 = 0.00200 mol",
              "code": true
            },
            {
              "text": ". Analyte moles = "
            },
            {
              "text": "0.00200 / 2 = 0.00100 mol",
              "code": true
            },
            {
              "text": ". Analyte concentration = "
            },
            {
              "text": "0.00100 / 0.0250 = 0.0400 mol L⁻¹",
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
              "text": "The key is the reaction ratio; "
            },
            {
              "text": "M₁V₁=M₂V₂",
              "code": true
            },
            {
              "text": " would give the wrong result."
            }
          ]
        }
      ]
    },
    {
      "id": "example-b-observation-to-inference",
      "prompt": "Example B: observation-to-inference",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A student observes a precipitate after adding a test reagent. The correct reasoning is not “therefore ion X is present.” Ask:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "Which official ions can give a precipitate under this condition?"
              }
            ],
            [
              {
                "text": "Was the separation/group condition correct?"
              }
            ],
            [
              {
                "text": "Is a confirmatory reaction required?"
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This converts colour-memory into analytical reasoning."
            }
          ]
        }
      ]
    },
    {
      "id": "example-c-neutralisation-calorimetry",
      "prompt": "Example C: neutralisation calorimetry",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If the reacting solution absorbs/releases enough heat to raise "
            },
            {
              "text": "100 g",
              "code": true
            },
            {
              "text": " of effective solution by "
            },
            {
              "text": "6.0 K",
              "code": true
            },
            {
              "text": ", with "
            },
            {
              "text": "c≈4.18 J g⁻¹ K⁻¹",
              "code": true
            },
            {
              "text": " and negligible calorimeter heat capacity: "
            },
            {
              "text": "q_solution = 100×4.18×6.0 ≈ 2.51 kJ",
              "code": true
            },
            {
              "text": ". For an exothermic reaction, the reaction heat is approximately "
            },
            {
              "text": "-2.51 kJ",
              "code": true
            },
            {
              "text": " for the reacted amount. Divide by reaction moles to obtain a molar enthalpy."
            }
          ]
        }
      ]
    },
    {
      "id": "example-d-functional-group-test-choice",
      "prompt": "Example D: functional-group test choice",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If the problem asks how to distinguish a carboxylic acid from a neutral carbonyl compound, begin with the "
            },
            {
              "text": "acid-base property difference",
              "bold": true
            },
            {
              "text": ", not an aldehyde/ketone carbonyl test. Method selection should target the most discriminating property first."
            }
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Purification and Characterisation of Organic Compounds",
      "url": "/jee/chemistry/purification-characterisation-organic-compounds",
      "relation": "related"
    }
  ],
  "sources": [
    "nta-jee-main-2026-syllabus-pdf",
    "jee-advanced-syllabus",
    "ncert-textbooks-index"
  ],
  "sourceNote": "Official scope: JEE Main: Unit 20 Principles Related to Practical Chemistry; JEE Advanced: Principles of Qualitative Analysis; Practical Organic Chemistry; Concept support: Acid-base, redox, equilibrium, organic, thermochemistry and kinetics concepts. NCERT is concept support only; the official 2026 syllabus controls exam ownership. All sources checked 28 September 2026.",
  "pageReview": {
    "reviewerProfileId": "prabhat-kumar",
    "contributorProfileIds": [
      "adarsh-kumar"
    ],
    "reviewStatus": "REVIEWER_ASSIGNED",
    "contentVersion": "2026-09-28"
  },
  "updated": "28 September 2026",
  "contentStatus": "draft",
  "meta": {
    "title": "JEE Practical Chemistry 2026: Tests, Titration & Qualitative Analysis | Rank Sarthi",
    "description": "Master JEE Main practical Chemistry and JEE Advanced qualitative/practical organic scope through observations, inference, titration logic, salt analysis, preparations and experiment reasoning.",
    "ogType": "article"
  }
};
