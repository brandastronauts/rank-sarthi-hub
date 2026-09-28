import type { ChapterContent } from "@/content/types";

/**
 * /jee/chemistry/isolation-of-metals — final syllabus-gap page (production package 2026-09-28).
 * Copy is taken from the approved content package; review is assigned
 * internally (pageReview) and no completed-review claim is shown until sign-off.
 */
export const jeeChemistryIsolationOfMetals: ChapterContent = {
  "exam": "JEE",
  "examVariant": "Advanced",
  "platform": "jee",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Isolation of Metals for JEE Advanced: Concentration, Extraction and Refining",
  "slug": "isolation-of-metals",
  "url": "/jee/chemistry/isolation-of-metals",
  "canonicalIntent": "Understand why a metal is isolated by a particular route, using reactivity, oxide stability, thermodynamics, electrochemistry, complex formation and impurity behaviour.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Metal extraction is a "
        },
        {
          "text": "chemical-potential and electron-transfer problem",
          "bold": true
        },
        {
          "text": " built on a physical separation problem."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "A useful decision chain is:"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "ore/mineral + gangue -> concentration -> chemical form suitable for reduction -> choose reduction/electrolysis route -> crude metal -> refining",
          "code": true
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The best route depends on:"
        }
      ]
    },
    {
      "type": "list",
      "items": [
        [
          {
            "text": "how strongly the metal is bound in its compound;"
          }
        ],
        [
          {
            "text": "stability of the oxide/other intermediate;"
          }
        ],
        [
          {
            "text": "availability of a reducing agent;"
          }
        ],
        [
          {
            "text": "temperature dependence of reaction free energy;"
          }
        ],
        [
          {
            "text": "whether aqueous chemistry is possible;"
          }
        ],
        [
          {
            "text": "whether electrolysis is required;"
          }
        ],
        [
          {
            "text": "how impurities differ from the metal during refining."
          }
        ]
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
                    "text": "JEE Advanced 2026:",
                    "bold": true
                  },
                  {
                    "text": " CURRENT standalone chapter."
                  }
                ],
                [
                  {
                    "text": "JEE Main 2026:",
                    "bold": true
                  },
                  {
                    "text": " Do not label as a standalone current Main unit."
                  }
                ],
                [
                  {
                    "text": "Thermodynamics, Redox Reactions and Electrochemistry are prerequisites, not substitutes for this chapter."
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
                  "text": "Own:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "ores and concentration;"
                  }
                ],
                [
                  {
                    "text": "extraction of crude metals from concentrated ores;"
                  }
                ],
                [
                  {
                    "text": "thermodynamic principles for extraction of iron, copper and zinc;"
                  }
                ],
                [
                  {
                    "text": "electrochemical principles for extraction of aluminium;"
                  }
                ],
                [
                  {
                    "text": "cyanide-process principles for silver and gold;"
                  }
                ],
                [
                  {
                    "text": "refining of metals."
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
                  "text": "This is an exam-preparation chemistry page, not industrial process design. It should explain process-selection principles and reaction/energy logic without operational instructions for hazardous extraction reagents. Cyanide chemistry is treated "
                },
                {
                  "text": "conceptually only",
                  "bold": true
                },
                {
                  "text": " because cyanide compounds are acutely hazardous."
                }
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
          "id": "formula-gibbs-free-energy",
          "title": "Gibbs free energy",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "ΔG = ΔH - TΔS",
                  "code": true
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "For a reaction built from standard formation free energies: "
                },
                {
                  "text": "ΔG°_rxn = ΣνΔG°_f(products) - ΣνΔG°_f(reactants)",
                  "code": true
                }
              ]
            }
          ]
        },
        {
          "id": "formula-electrochemical-extraction-faradays-law",
          "title": "Electrochemical extraction / Faraday's law",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "For an electrode process "
                },
                {
                  "text": "M^(n+) + ne⁻ -> M",
                  "code": true
                },
                {
                  "text": ": "
                },
                {
                  "text": "m = ItM/(nF)",
                  "code": true
                },
                {
                  "text": " where:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "m",
                    "code": true
                  },
                  {
                    "text": " = deposited/produced metal mass,"
                  }
                ],
                [
                  {
                    "text": "I",
                    "code": true
                  },
                  {
                    "text": " = current,"
                  }
                ],
                [
                  {
                    "text": "t",
                    "code": true
                  },
                  {
                    "text": " = time,"
                  }
                ],
                [
                  {
                    "text": "M",
                    "code": true
                  },
                  {
                    "text": " = molar mass,"
                  }
                ],
                [
                  {
                    "text": "n",
                    "code": true
                  },
                  {
                    "text": " = electrons per metal ion,"
                  }
                ],
                [
                  {
                    "text": "F",
                    "code": true
                  },
                  {
                    "text": " = Faraday constant."
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Use only when current efficiency and reaction stoichiometry assumptions match the question."
                }
              ]
            }
          ]
        },
        {
          "id": "formula-cell-free-energy",
          "title": "Cell free energy",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Where a cell potential is relevant: "
                },
                {
                  "text": "ΔG = -nFE",
                  "code": true
                },
                {
                  "text": " under the standard electrochemical sign convention for the cell reaction."
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
                    "text": "Negative "
                  },
                  {
                    "text": "ΔG",
                    "code": true
                  },
                  {
                    "text": " addresses thermodynamic feasibility, not rate."
                  }
                ],
                [
                  {
                    "text": "Ellingham comparisons require reactions written on a consistent oxygen basis."
                  }
                ],
                [
                  {
                    "text": "Faraday-law calculations require the correct electron number and, unless otherwise stated, ideal/current-efficiency assumptions."
                  }
                ],
                [
                  {
                    "text": "A concentration method is selected from ore/gangue properties, not merely from the metal name."
                  }
                ],
                [
                  {
                    "text": "Refining method depends on impurity behaviour as well as the metal."
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
                    "text": "A thermodynamically feasible reduction may be kinetically slow."
                  }
                ],
                [
                  {
                    "text": "More reactive metals are not automatically extracted by “stronger heating.”"
                  }
                ],
                [
                  {
                    "text": "Carbon is not a universal reductant."
                  }
                ],
                [
                  {
                    "text": "Electrolysis is not restricted to aqueous solutions; highly reactive metals may require molten systems because water itself would be reduced preferentially."
                  }
                ],
                [
                  {
                    "text": "A refining technique that works for one metal/impurity set may be unsuitable for another."
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
                    "text": "Thermodynamics -> oxide stability and reduction feasibility."
                  }
                ],
                [
                  {
                    "text": "Redox Reactions -> electron transfer and oxidation states."
                  }
                ],
                [
                  {
                    "text": "Electrochemistry -> electrolytic extraction and refining."
                  }
                ],
                [
                  {
                    "text": "Chemical Bonding -> ionic lattice/compound stability background."
                  }
                ],
                [
                  {
                    "text": "Coordination Compounds -> complex formation relevant to selective leaching principles."
                  }
                ],
                [
                  {
                    "text": "Equilibrium -> distribution/complexation and process direction."
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
                    "text": "Treating mineral and ore as synonyms in every context."
                  }
                ],
                [
                  {
                    "text": "Choosing an extraction method from a memorised reactivity list without considering the chemical form."
                  }
                ],
                [
                  {
                    "text": "Reading an Ellingham diagram without balancing oxygen."
                  }
                ],
                [
                  {
                    "text": "Confusing thermodynamic feasibility with fast kinetics."
                  }
                ],
                [
                  {
                    "text": "Using Faraday's law with the wrong electron number."
                  }
                ],
                [
                  {
                    "text": "Assuming 100% current efficiency when the question supplies a different value."
                  }
                ],
                [
                  {
                    "text": "Giving operational cyanide-process instructions instead of exam-level chemical principles."
                  }
                ],
                [
                  {
                    "text": "Treating refining as the same step as initial reduction."
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
                    "text": "Can I distinguish ore, mineral and gangue?"
                  }
                ],
                [
                  {
                    "text": "Can I state what property a concentration method exploits?"
                  }
                ],
                [
                  {
                    "text": "Can I connect extraction feasibility to "
                  },
                  {
                    "text": "ΔG",
                    "code": true
                  },
                  {
                    "text": "?"
                  }
                ],
                [
                  {
                    "text": "Can I interpret the qualitative meaning of an Ellingham diagram?"
                  }
                ],
                [
                  {
                    "text": "Can I explain why Al is extracted electrochemically?"
                  }
                ],
                [
                  {
                    "text": "Can I perform a Faraday-law mass calculation?"
                  }
                ],
                [
                  {
                    "text": "Can I state the cyanide-process principle without unsafe procedural detail?"
                  }
                ],
                [
                  {
                    "text": "Can I distinguish crude extraction from refining?"
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
                    "text": "Why does thermodynamic feasibility not guarantee a fast extraction reaction?"
                  }
                ],
                [
                  {
                    "text": "Explain why oxide stability matters when choosing a reductant."
                  }
                ],
                [
                  {
                    "text": "For "
                  },
                  {
                    "text": "M²⁺ + 2e⁻ -> M",
                    "code": true
                  },
                  {
                    "text": ", calculate the ideal mass deposited by a supplied charge and molar mass."
                  }
                ],
                [
                  {
                    "text": "Why can aqueous electrolysis be unsuitable for isolating a highly reactive metal?"
                  }
                ],
                [
                  {
                    "text": "What property difference could justify a physical concentration method?"
                  }
                ],
                [
                  {
                    "text": "Explain conceptually why complex formation can assist selective leaching."
                  }
                ],
                [
                  {
                    "text": "Distinguish concentration, extraction and refining in one sentence each."
                  }
                ],
                [
                  {
                    "text": "What consistency check is needed before comparing two Ellingham reactions?"
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
      "label": "Advanced Syllabus",
      "url": "/jee/jee-advanced/syllabus",
      "relation": "up"
    },
    {
      "label": "Thermodynamics",
      "url": "/jee/chemistry/thermodynamics",
      "relation": "prerequisite"
    },
    {
      "label": "Redox Reactions",
      "url": "/jee/chemistry/redox-reactions",
      "relation": "prerequisite"
    },
    {
      "label": "Electrochemistry",
      "url": "/jee/chemistry/electrochemistry",
      "relation": "prerequisite"
    },
    {
      "label": "Equilibrium",
      "url": "/jee/chemistry/equilibrium",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Isolation of Metals (JEE Advanced 2026)",
    "topics": [
      "ores and concentration",
      "extraction of crude metals from concentrated ores",
      "thermodynamic principles for extraction of iron, copper and zinc",
      "electrochemical principles for extraction of aluminium",
      "cyanide-process principles for silver and gold",
      "refining of metals"
    ],
    "syllabusUrl": "/jee/jee-advanced/syllabus"
  },
  "conceptBlocks": [
    {
      "id": "ore-mineral-and-gangue",
      "title": "Ore, mineral and gangue",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A "
            },
            {
              "text": "mineral",
              "bold": true
            },
            {
              "text": " is a naturally occurring substance containing a metal or metal compound. An "
            },
            {
              "text": "ore",
              "bold": true
            },
            {
              "text": " is a mineral/resource from which extraction is chemically/economically meaningful in the stated context. "
            },
            {
              "text": "Gangue",
              "bold": true
            },
            {
              "text": " refers to unwanted earthy/rocky material associated with the ore."
            }
          ]
        }
      ]
    },
    {
      "id": "concentration",
      "title": "Concentration",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Concentration enriches the desired mineral before chemical extraction. The method exploits a difference such as density, surface/wetting behaviour, magnetic response or selective chemical solubility. The syllabus intent is method principle, not a universal one-method-per-metal table."
            }
          ]
        }
      ]
    },
    {
      "id": "conversion-before-reduction",
      "title": "Conversion before reduction",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Many extraction routes first convert the metal-containing species into an oxide or another form more suitable for reduction. Whether heating occurs with or without plentiful oxygen depends on the chemical transformation required; do not memorise “roasting versus calcination” without the reaction."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamic-feasibility",
      "title": "Thermodynamic feasibility",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a proposed extraction reaction: "
            },
            {
              "text": "ΔG = ΔH - TΔS",
              "code": true
            },
            {
              "text": ". A negative "
            },
            {
              "text": "ΔG",
              "code": true
            },
            {
              "text": " under the stated conditions indicates thermodynamic feasibility, not automatically a fast reaction."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Ellingham-style reasoning compares the relative free-energy stability of oxides as temperature changes. A reducing agent can reduce a metal oxide when the coupled oxidation/reduction free-energy change is favourable under the relevant conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "iron-copper-and-zinc",
      "title": "Iron, copper and zinc",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach the official metals as "
            },
            {
              "text": "case studies in extraction logic",
              "bold": true
            },
            {
              "text": ", not as isolated flowcharts:"
            }
          ]
        },
        {
          "type": "list",
          "items": [
            [
              {
                "text": "choose/concentrate the ore;"
              }
            ],
            [
              {
                "text": "identify the oxidation state/compound being reduced;"
              }
            ],
            [
              {
                "text": "connect reduction feasibility to thermodynamics and reducing-agent chemistry;"
              }
            ],
            [
              {
                "text": "identify why process conditions differ."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "aluminium",
      "title": "Aluminium",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Aluminium is strongly electropositive and its oxide is very stable. The chapter should connect this to "
            },
            {
              "text": "electrochemical reduction",
              "bold": true
            },
            {
              "text": " rather than pretending carbon reduction is universally applicable."
            }
          ]
        }
      ]
    },
    {
      "id": "silver-and-gold-cyanide-process-principle",
      "title": "Silver and gold: cyanide-process principle",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Treat only the chemical principle: selective complex formation/leaching can transfer the noble metal into a soluble complex form and later recover the metal by a suitable redox/displacement route. Do not give operational cyanide quantities, preparation instructions or handling procedures."
            }
          ]
        }
      ]
    },
    {
      "id": "refining",
      "title": "Refining",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Refining separates the target metal from residual impurities by exploiting differences such as electrode potential, volatility, phase behaviour or chemical affinity. The chosen method must match the metal/impurity system."
            }
          ]
        }
      ]
    }
  ],
  "workedExamples": [
    {
      "id": "example-a-choose-chemical-vs-electrochemical-route",
      "prompt": "Example A: choose chemical vs electrochemical route",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If a metal forms an exceptionally stable oxide and is very difficult to reduce with common chemical reducing agents under practical conditions, electrochemical reduction becomes a more plausible route. The reasoning is based on relative free-energy/electrochemical stability, not the statement “all metals above carbon use electrolysis” without qualification."
            }
          ]
        }
      ]
    },
    {
      "id": "example-b-faraday-calculation",
      "prompt": "Example B: Faraday calculation",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For "
            },
            {
              "text": "Al³⁺ + 3e⁻ -> Al",
              "code": true
            },
            {
              "text": ", suppose a question passes "
            },
            {
              "text": "9650 C",
              "code": true
            },
            {
              "text": " with 100% current efficiency. Moles of electrons = "
            },
            {
              "text": "9650/F ≈ 0.100 mol e⁻",
              "code": true
            },
            {
              "text": " using "
            },
            {
              "text": "F≈96500 C mol⁻¹",
              "code": true
            },
            {
              "text": ". Moles Al = "
            },
            {
              "text": "0.100/3 ≈ 0.0333 mol",
              "code": true
            },
            {
              "text": ". Mass Al ≈ "
            },
            {
              "text": "0.0333 × 27.0 ≈ 0.90 g",
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
              "text": "The electron stoichiometry is the critical step."
            }
          ]
        }
      ]
    },
    {
      "id": "example-c-ellingham-style-reasoning",
      "prompt": "Example C: Ellingham-style reasoning",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If oxidation of reducing agent R has a more negative free-energy line than formation of metal oxide MO at a given temperature, the coupled reaction "
            },
            {
              "text": "MO + R -> M + oxidised R",
              "code": true
            },
            {
              "text": " may be thermodynamically favourable. Always compare balanced reactions on a consistent oxygen basis."
            }
          ]
        }
      ]
    },
    {
      "id": "example-d-refining-logic",
      "prompt": "Example D: refining logic",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If the target metal can be selectively dissolved/deposited electrochemically while certain impurities remain as anode residue or stay in solution, electrorefining can exploit electrode-potential differences. The exact behaviour is metal-specific and should be derived from supplied data/known chemistry."
            }
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Coordination Compounds",
      "url": "/jee/chemistry/coordination-compounds",
      "relation": "related"
    },
    {
      "label": "Chemical Bonding",
      "url": "/jee/chemistry/chemical-bonding",
      "relation": "related"
    }
  ],
  "sources": [
    "jee-advanced-syllabus",
    "ncert-textbooks-index"
  ],
  "sourceNote": "Official scope: JEE Advanced: Isolation of Metals; Concept support: Metallurgy, thermodynamics, redox and electrochemistry concepts. NCERT is concept support only; the official 2026 syllabus controls exam ownership. All sources checked 28 September 2026.",
  "pageReview": {
    "reviewerProfileId": "prabhat-kumar",
    "reviewStatus": "REVIEWER_ASSIGNED",
    "contentVersion": "2026-09-28"
  },
  "updated": "28 September 2026",
  "contentStatus": "draft",
  "meta": {
    "title": "JEE Advanced Isolation of Metals 2026: Extraction & Refining | Rank Sarthi",
    "description": "Learn JEE Advanced Isolation of Metals through ore concentration, thermodynamic and electrochemical extraction, cyanide-process principles, refining and method-selection reasoning.",
    "ogType": "article"
  }
};
