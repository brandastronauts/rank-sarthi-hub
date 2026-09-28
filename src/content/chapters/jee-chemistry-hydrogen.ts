import type { ChapterContent } from "@/content/types";

/**
 * /jee/chemistry/hydrogen — final syllabus-gap page (production package 2026-09-28).
 * Copy is taken from the approved content package; review is assigned
 * internally (pageReview) and no completed-review claim is shown until sign-off.
 */
export const jeeChemistryHydrogen: ChapterContent = {
  "exam": "JEE",
  "examVariant": "Advanced",
  "platform": "jee",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Hydrogen for JEE Advanced: Isotopes, Hydrides, Water and Hydrogen Peroxide",
  "slug": "hydrogen",
  "url": "/jee/chemistry/hydrogen",
  "canonicalIntent": "Master the full named JEE Advanced Hydrogen chapter and connect periodicity, bonding and redox behaviour to hydrides, H₂O, D₂O and H₂O₂.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Hydrogen is unusual because its single electron allows it to resemble more than one periodic family without fitting perfectly into either. Its chemistry is best organised through "
        },
        {
          "text": "oxidation state, bond type and electron availability",
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
          "text": "Hydrogen can occur with oxidation state:"
        }
      ]
    },
    {
      "type": "list",
      "items": [
        [
          {
            "text": "+1",
            "code": true
          },
          {
            "text": " in many compounds with more electronegative elements;"
          }
        ],
        [
          {
            "text": "-1",
            "code": true
          },
          {
            "text": " in saline/ionic hydrides with highly electropositive metals;"
          }
        ],
        [
          {
            "text": "0",
            "code": true
          },
          {
            "text": " in elemental H₂."
          }
        ]
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "This flexibility links the chapter to periodicity, chemical bonding and redox chemistry."
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
                    "text": " Do not label this as a standalone Main unit."
                  }
                ],
                [
                  {
                    "text": "Main pages may be prerequisites/related context only."
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
                  "text": "Cover:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "position of hydrogen in the periodic table;"
                  }
                ],
                [
                  {
                    "text": "occurrence and isotopes;"
                  }
                ],
                [
                  {
                    "text": "preparation, properties and uses of hydrogen;"
                  }
                ],
                [
                  {
                    "text": "hydrides: ionic, covalent and interstitial;"
                  }
                ],
                [
                  {
                    "text": "physical and chemical properties of water and heavy water;"
                  }
                ],
                [
                  {
                    "text": "hydrogen peroxide: preparation, reactions, use and structure;"
                  }
                ],
                [
                  {
                    "text": "hydrogen as a fuel."
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
                  "text": "This page owns the Advanced Hydrogen chapter. It does not turn into:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "an encyclopaedia of every hydride compound;"
                  }
                ],
                [
                  {
                    "text": "a duplicate s-block chapter;"
                  }
                ],
                [
                  {
                    "text": "industrial hydrogen-process engineering;"
                  }
                ],
                [
                  {
                    "text": "a claim that Hydrogen is a standalone JEE Main 2026 unit."
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
      "heading": "Isotopes",
      "concepts": [
        {
          "id": "core-reasoning-isotopes",
          "title": "Isotopes",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Protium:",
                    "bold": true
                  },
                  {
                    "text": " ¹H"
                  }
                ],
                [
                  {
                    "text": "Deuterium:",
                    "bold": true
                  },
                  {
                    "text": " ²H or D"
                  }
                ],
                [
                  {
                    "text": "Tritium:",
                    "bold": true
                  },
                  {
                    "text": " ³H or T"
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "They share atomic number 1 but differ in neutron count and mass. Chemical behaviour is broadly related because electron configuration is the same, while mass-dependent physical/kinetic effects can differ."
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
          "id": "formula-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Oxidation-state bookkeeping for H/O species."
                  }
                ],
                [
                  {
                    "text": "Reaction enthalpy can be related to bond/formation enthalpies where data are supplied:"
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "ΔH_rxn = ΣνΔH_f(products) - ΣνΔH_f(reactants)",
                  "code": true
                },
                {
                  "text": "."
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Gas stoichiometry follows the balanced equation and mole concept under the stated gas conditions."
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
                    "text": "Assign hydrogen "
                  },
                  {
                    "text": "+1",
                    "code": true
                  },
                  {
                    "text": " in most covalent compounds with nonmetals, but check for metal hydrides where "
                  },
                  {
                    "text": "-1",
                    "code": true
                  },
                  {
                    "text": " is appropriate."
                  }
                ],
                [
                  {
                    "text": "Assign peroxide oxygen "
                  },
                  {
                    "text": "-1",
                    "code": true
                  },
                  {
                    "text": " only when the O-O peroxide linkage is present."
                  }
                ],
                [
                  {
                    "text": "Use ideal-gas volume relationships only under conditions where the question permits the model."
                  }
                ],
                [
                  {
                    "text": "Fuel comparisons require a clearly stated basis: per mole, per unit mass, per unit volume, or whole system."
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
                    "text": "Hydrogen's periodic position is not captured fully by Group 1 or Group 17 analogy."
                  }
                ],
                [
                  {
                    "text": "Hydrides do not all share one bonding model."
                  }
                ],
                [
                  {
                    "text": "H₂O₂ is not “always an oxidising agent.”"
                  }
                ],
                [
                  {
                    "text": "Heavy water is not simply water with “extra hydrogen”; it contains a different hydrogen isotope."
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
                    "text": "Periodic Table -> anomalous placement and electronegativity trends."
                  }
                ],
                [
                  {
                    "text": "Chemical Bonding -> H-H bond, hydrides, water geometry, hydrogen bonding."
                  }
                ],
                [
                  {
                    "text": "Redox Reactions -> variable oxidation states and H₂O₂ behaviour."
                  }
                ],
                [
                  {
                    "text": "Thermodynamics -> hydrogen combustion/fuel energetics."
                  }
                ],
                [
                  {
                    "text": "s-Block Elements -> ionic hydride context."
                  }
                ],
                [
                  {
                    "text": "Electrochemistry -> hydrogen-related redox couples where appropriate."
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
                    "text": "Forcing hydrogen into one normal periodic group."
                  }
                ],
                [
                  {
                    "text": "Assigning H = "
                  },
                  {
                    "text": "+1",
                    "code": true
                  },
                  {
                    "text": " in metal hydrides."
                  }
                ],
                [
                  {
                    "text": "Assigning peroxide oxygen = "
                  },
                  {
                    "text": "-2",
                    "code": true
                  },
                  {
                    "text": "."
                  }
                ],
                [
                  {
                    "text": "Treating isotope mass differences as electron-configuration differences."
                  }
                ],
                [
                  {
                    "text": "Confusing hydrogen bonding with the covalent O-H bond."
                  }
                ],
                [
                  {
                    "text": "Calling all hydrides ionic."
                  }
                ],
                [
                  {
                    "text": "Saying H₂O₂ has only oxidising behaviour."
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
                    "text": "Can I explain why hydrogen's periodic position is unusual?"
                  }
                ],
                [
                  {
                    "text": "Can I identify the three isotopes and what differs?"
                  }
                ],
                [
                  {
                    "text": "Can I classify ionic, covalent and interstitial hydrides?"
                  }
                ],
                [
                  {
                    "text": "Can I connect water properties to geometry/polarity/hydrogen bonding?"
                  }
                ],
                [
                  {
                    "text": "Can I assign peroxide oxidation states correctly?"
                  }
                ],
                [
                  {
                    "text": "Can I explain why H₂O₂ may oxidise or reduce?"
                  }
                ],
                [
                  {
                    "text": "Can I distinguish combustion chemistry from whole-system fuel claims?"
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
                    "text": "Why does hydrogen show analogies with both Group 1 and Group 17?"
                  }
                ],
                [
                  {
                    "text": "Classify a hydride from bonding evidence rather than a memorised list."
                  }
                ],
                [
                  {
                    "text": "Determine oxygen's oxidation state in H₂O₂ and compare it with H₂O and O₂."
                  }
                ],
                [
                  {
                    "text": "Why is D₂O chemically related to H₂O but physically distinguishable?"
                  }
                ],
                [
                  {
                    "text": "Balance a simple redox transformation involving H₂O₂ when the medium is specified."
                  }
                ],
                [
                  {
                    "text": "Explain why H₂ can be thermodynamically attractive as a fuel while storage remains a separate engineering issue."
                  }
                ],
                [
                  {
                    "text": "What structural feature distinguishes a peroxide from an oxide?"
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
      "label": "Periodic Table",
      "url": "/jee/chemistry/periodic-table",
      "relation": "prerequisite"
    },
    {
      "label": "Chemical Bonding",
      "url": "/jee/chemistry/chemical-bonding",
      "relation": "prerequisite"
    },
    {
      "label": "Redox Reactions",
      "url": "/jee/chemistry/redox-reactions",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Hydrogen (JEE Advanced 2026)",
    "topics": [
      "position of hydrogen in the periodic table",
      "occurrence and isotopes",
      "preparation, properties and uses of hydrogen",
      "hydrides: ionic, covalent and interstitial",
      "physical and chemical properties of water and heavy water",
      "hydrogen peroxide: preparation, reactions, use and structure",
      "hydrogen as a fuel"
    ],
    "syllabusUrl": "/jee/jee-advanced/syllabus"
  },
  "conceptBlocks": [
    {
      "id": "position-in-the-periodic-table",
      "title": "Position in the periodic table",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Hydrogen has one valence electron like Group 1 but is a nonmetal and can also gain an electron to reach a helium-like configuration, giving analogies with Group 17. Treat its position as "
            },
            {
              "text": "chemically distinctive",
              "bold": true
            },
            {
              "text": ", not as “simply an alkali metal.”"
            }
          ]
        }
      ]
    },
    {
      "id": "molecular-hydrogen",
      "title": "Molecular hydrogen",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "H₂ contains a strong H-H covalent bond. Its reactions often require activation because bond breaking is energetically significant even when product formation is favourable."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Representative combustion: "
            },
            {
              "text": "2H₂ + O₂ -> 2H₂O",
              "code": true
            }
          ]
        }
      ]
    },
    {
      "id": "hydrides",
      "title": "Hydrides",
      "body": [
        {
          "type": "list",
          "items": [
            [
              {
                "text": "Ionic/saline hydrides:",
                "bold": true
              },
              {
                "text": " hydride-ion character, generally with very electropositive metals."
              }
            ],
            [
              {
                "text": "Covalent/molecular hydrides:",
                "bold": true
              },
              {
                "text": " hydrogen covalently bonded in discrete molecules or extended structures."
              }
            ],
            [
              {
                "text": "Interstitial/metallic hydrides:",
                "bold": true
              },
              {
                "text": " hydrogen accommodated in metal lattices with non-stoichiometric/metallic features in many cases."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Classification should follow bonding/electronic behaviour, not only a memorised element list."
            }
          ]
        }
      ]
    },
    {
      "id": "water",
      "title": "Water",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Water's bent geometry and polar O-H bonds create a molecular dipole. Hydrogen bonding explains many anomalous physical properties, including relatively high boiling point and structured liquid/solid behaviour."
            }
          ]
        }
      ]
    },
    {
      "id": "heavy-water",
      "title": "Heavy water",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "D₂O contains deuterium instead of ordinary protium. Its larger isotope mass changes physical properties and rates of processes involving hydrogen transfer. Do not describe it as a different “element”; it is isotopically substituted water."
            }
          ]
        }
      ]
    },
    {
      "id": "hydrogen-peroxide",
      "title": "Hydrogen peroxide",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In H₂O₂, oxygen has oxidation state "
            },
            {
              "text": "-1",
              "code": true
            },
            {
              "text": ", intermediate between O₂ ("
            },
            {
              "text": "0",
              "code": true
            },
            {
              "text": ") and normal oxide oxygen ("
            },
            {
              "text": "-2",
              "code": true
            },
            {
              "text": "). This allows H₂O₂ to act as either an oxidising or reducing agent depending on the reacting partner."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Decomposition: "
            },
            {
              "text": "2H₂O₂ -> 2H₂O + O₂",
              "code": true
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The molecule contains an O-O bond and is non-planar in its stable molecular geometry."
            }
          ]
        }
      ]
    },
    {
      "id": "hydrogen-as-fuel",
      "title": "Hydrogen as fuel",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The chemical attraction is high energy release per unit mass and water as the direct combustion product. A complete engineering/environmental comparison must also include production source, storage, transport and system efficiency; the chemistry page should not reduce the issue to “zero-emission fuel” without system boundaries."
            }
          ]
        }
      ]
    }
  ],
  "workedExamples": [
    {
      "id": "example-a-oxidation-state-in-peroxide",
      "prompt": "Example A: oxidation state in peroxide",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For neutral H₂O₂, hydrogen is "
            },
            {
              "text": "+1",
              "code": true
            },
            {
              "text": " each. Let each oxygen be "
            },
            {
              "text": "x",
              "code": true
            },
            {
              "text": ": "
            },
            {
              "text": "2(+1) + 2x = 0",
              "code": true
            },
            {
              "text": ", so "
            },
            {
              "text": "x = -1",
              "code": true
            },
            {
              "text": ". That intermediate oxidation state helps explain why peroxide can move either toward "
            },
            {
              "text": "0",
              "code": true
            },
            {
              "text": " (oxidation of peroxide oxygen) or "
            },
            {
              "text": "-2",
              "code": true
            },
            {
              "text": " (reduction of peroxide oxygen), depending on the partner."
            }
          ]
        }
      ]
    },
    {
      "id": "example-b-hydride-classification",
      "prompt": "Example B: hydride classification",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A compound formed between a highly electropositive metal and hydrogen is more plausibly analysed with substantial "
            },
            {
              "text": "H⁻",
              "code": true
            },
            {
              "text": " character than a molecular hydride such as a covalent nonmetal hydride. The classification follows bonding/electronic character, not just the presence of H."
            }
          ]
        }
      ]
    },
    {
      "id": "example-c-combustion-stoichiometry",
      "prompt": "Example C: combustion stoichiometry",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "2H₂ + O₂ -> 2H₂O",
              "code": true
            },
            {
              "text": ". If "
            },
            {
              "text": "3.0 mol",
              "code": true
            },
            {
              "text": " O₂ reacts completely with excess H₂, "
            },
            {
              "text": "6.0 mol",
              "code": true
            },
            {
              "text": " H₂ is required and "
            },
            {
              "text": "6.0 mol",
              "code": true
            },
            {
              "text": " H₂O is formed by stoichiometry."
            }
          ]
        }
      ]
    },
    {
      "id": "example-d-fuel-statement-critique",
      "prompt": "Example D: fuel statement critique",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "“Hydrogen combustion produces water, so hydrogen is always carbon-free” is incomplete. The "
            },
            {
              "text": "combustion step",
              "bold": true
            },
            {
              "text": " contains no carbon, but total carbon impact depends on how hydrogen is produced and the system boundary. For the exam chapter, separate chemical combustion products from lifecycle claims."
            }
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "S Block Elements",
      "url": "/jee/chemistry/s-block-elements",
      "relation": "related"
    },
    {
      "label": "Thermodynamics",
      "url": "/jee/chemistry/thermodynamics",
      "relation": "related"
    },
    {
      "label": "Electrochemistry",
      "url": "/jee/chemistry/electrochemistry",
      "relation": "related"
    }
  ],
  "sources": [
    "jee-advanced-syllabus",
    "ncert-textbooks-index"
  ],
  "sourceNote": "Official scope: JEE Advanced: Hydrogen; Concept support: Hydrogen, hydrides, water and peroxide concepts. NCERT is concept support only; the official 2026 syllabus controls exam ownership. All sources checked 28 September 2026.",
  "pageReview": {
    "reviewerProfileId": "vinod-kumar",
    "reviewStatus": "REVIEWER_ASSIGNED",
    "contentVersion": "2026-09-28"
  },
  "updated": "28 September 2026",
  "contentStatus": "draft",
  "meta": {
    "title": "JEE Advanced Hydrogen 2026: Hydrides, Water, H₂O₂ & Fuel | Rank Sarthi",
    "description": "Study the JEE Advanced Hydrogen chapter: periodic position, isotopes, H₂, hydrides, water and heavy water, hydrogen peroxide, reactions, structures and hydrogen as fuel.",
    "ogType": "article"
  }
};
