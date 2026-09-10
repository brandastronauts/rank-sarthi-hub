import type { ChapterContent } from "@/content/types";

/**
 * Equilibrium for NEET: Kc, Kp, Reaction Quotient and Le Chatelier Principle — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryEquilibrium: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Equilibrium for NEET: Kc, Kp, Reaction Quotient and Le Chatelier Principle",
  "slug": "equilibrium",
  "url": "/neet/chemistry/equilibrium",
  "canonicalIntent": "Own the complete official Unit 6 architecture: physical and chemical equilibrium, law-of-mass-action expressions, Kc/Kp relationships, reaction quotient, Gibbs relationship, Le Chatelier principle and the bridge to the focused Ionic Equilibrium child route.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Equilibrium is dynamic: forward and reverse processes continue while macroscopic composition remains constant under fixed conditions. Write the balanced reaction first, construct the appropriate equilibrium expression, compare Q with K to infer direction, and use Le Chatelier reasoning only after identifying which variable is externally changed. Ionic Equilibrium is part of this official unit but its detailed pH/buffer/Ksp calculations live on the focused child page."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Current official NEET UG 2026 scope (CURRENT_OFFICIAL_SCOPE)."
        }
      ]
    }
  ],
  "heroChips": [
    "Current official NEET UG 2026 scope",
    "Draft: pending human academic review",
    "No weightage, question counts or trend claims"
  ],
  "prerequisites": [
    {
      "label": "NEET Chemistry",
      "url": "/neet/chemistry",
      "relation": "up"
    },
    {
      "label": "NEET Chemistry syllabus",
      "url": "/neet/syllabus/chemistry",
      "relation": "up"
    },
    {
      "label": "Some Basic Concepts",
      "url": "/neet/chemistry/some-basic-concepts",
      "relation": "prerequisite"
    },
    {
      "label": "Thermodynamics",
      "url": "/neet/chemistry/thermodynamics",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Dynamic equilibrium",
      "Equilibrium constants",
      "Q versus K",
      "Kp and Kc",
      "Gibbs connection",
      "Le Chatelier reasoning"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "equilibrium-c1",
      "title": "1. Dynamic equilibrium",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At equilibrium, microscopic forward and reverse changes continue at equal rates, so bulk composition remains constant. Equilibrium is not a state where reaction has stopped."
            }
          ]
        }
      ]
    },
    {
      "id": "equilibrium-c2",
      "title": "2. Equilibrium constants",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a balanced reaction, the equilibrium expression is built from activities; routine NEET concentration/partial-pressure models use the specified powers from stoichiometric coefficients. Pure solids and pure liquids are omitted from variable concentration/pressure terms in the usual heterogeneous-equilibrium treatment because their activities are treated as unity."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Kc uses concentration-form quantities, while Kp uses partial-pressure-form quantities for gaseous species. The numerical value of an equilibrium constant depends on temperature and on the reaction as written."
            }
          ]
        }
      ]
    },
    {
      "id": "equilibrium-c3",
      "title": "3. Q versus K",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The reaction quotient Q has the same algebraic form as K but uses the current composition. For the forward reaction:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Q < K: net forward change is favoured until equilibrium;"
              }
            ],
            [
              {
                "text": "Q > K: net reverse change is favoured;"
              }
            ],
            [
              {
                "text": "Q = K: the system is at equilibrium."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "equilibrium-c4",
      "title": "4. Kp and Kc",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For an ideal-gas reaction model, Kp = Kc (RT)^Delta n_g, where Delta n_g is gaseous-product stoichiometric moles minus gaseous-reactant stoichiometric moles. Use a consistent standard/concentration convention; do not treat K dimensions casually when moving beyond textbook concentration models."
            }
          ]
        }
      ]
    },
    {
      "id": "equilibrium-c5",
      "title": "5. Gibbs connection",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Delta G = Delta G° + RT ln Q. At equilibrium Delta G=0 and Q=K, giving Delta G° = -RT ln K. This connects thermodynamic driving force to equilibrium position without saying that a large K makes the reaction fast."
            }
          ]
        }
      ]
    },
    {
      "id": "equilibrium-c6",
      "title": "6. Le Chatelier reasoning",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A system responds to an imposed change by shifting in the direction that tends to oppose that disturbance. Concentration changes affect Q immediately. Pressure/volume changes matter particularly for gaseous equilibria and depend on Delta n_g. A catalyst changes rates of approach to equilibrium but does not change K or equilibrium composition. Temperature changes K because heat effects change the thermodynamic balance."
            }
          ]
        }
      ]
    },
    {
      "id": "equilibrium-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Q-vs-K Direction Engine: balanced reaction -> Q expression -> current Q -> compare K -> predicted net direction."
              }
            ],
            [
              {
                "text": "Le Chatelier Cause Matrix: disturbance, immediate quantity changed, effect on Q/K, direction rationale."
              }
            ],
            [
              {
                "text": "Unit 6 Parent/Child Map: broad Equilibrium topics shown once, Ionic Equilibrium depth delegated explicitly."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Solutions",
      "url": "/neet/chemistry/solutions",
      "relation": "related"
    }
  ],
  "sources": [
    "ncert-chemistry-11-contents",
    "ncert-chemistry-12-contents",
    "ncert-exemplar-index",
    "nmc-neet-ug-2026-syllabus"
  ],
  "sourceNote": "Official scope is taken from the NEET (UG) 2026 syllabus and official NTA documents; concept structure follows current NCERT contents. No performance, weightage or question-frequency data is asserted.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible"
  ],
  "contentStatus": "draft",
  "meta": {
    "title": "Equilibrium for NEET: Kc, Kp & Le Chatelier | Rank Sarthi",
    "description": "Learn NEET Equilibrium with dynamic equilibrium, Kc, Kp, reaction quotient, Q vs K, Gibbs relation, Le Chatelier principle and ionic-equilibrium routing.",
    "ogTitle": "Equilibrium for NEET: Kc, Kp & Le Chatelier | Rank Sarthi",
    "ogDescription": "Learn NEET Equilibrium with dynamic equilibrium, Kc, Kp, reaction quotient, Q vs K, Gibbs relation, Le Chatelier principle and ionic-equilibrium routing.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "equilibrium-f1",
      "expression": "Powers from stoichiometric coefficients",
      "meaning": "K expression from balanced equation",
      "variables": [],
      "useWhen": "Including pure solid/liquid concentration terms as variables.",
      "accessibleText": "K expression from balanced equation: Powers from stoichiometric coefficients. Including pure solid/liquid concentration terms as variables."
    },
    {
      "id": "equilibrium-f2",
      "expression": "Current, not equilibrium, composition",
      "meaning": "Q same form as K",
      "variables": [],
      "useWhen": "Comparing Q for one written reaction with K for its reverse.",
      "accessibleText": "Q same form as K: Current, not equilibrium, composition. Comparing Q for one written reaction with K for its reverse."
    },
    {
      "id": "equilibrium-f3",
      "expression": "Same T and same reaction definition",
      "meaning": "Q<K forward; Q>K reverse",
      "variables": [],
      "useWhen": "Calling Q a new equilibrium constant.",
      "accessibleText": "Q<K forward; Q>K reverse: Same T and same reaction definition. Calling Q a new equilibrium constant."
    },
    {
      "id": "equilibrium-f4",
      "expression": "Ideal-gas relation; T K",
      "meaning": "Kp = Kc(RT)^Delta n_g",
      "variables": [],
      "useWhen": "Counting solids/liquids in Delta n_g.",
      "accessibleText": "Kp = Kc(RT)^Delta n_g: Ideal-gas relation; T K. Counting solids/liquids in Delta n_g."
    },
    {
      "id": "equilibrium-f5",
      "expression": "Compatible energy/R units; T K",
      "meaning": "Delta G = Delta G° + RT ln Q",
      "variables": [],
      "useWhen": "Using log10 without factor.",
      "accessibleText": "Delta G = Delta G° + RT ln Q: Compatible energy/R units; T K. Using log10 without factor."
    },
    {
      "id": "equilibrium-f6",
      "expression": "Standard-state equilibrium relation",
      "meaning": "Delta G° = -RT ln K",
      "variables": [],
      "useWhen": "Inferring reaction speed from K.",
      "accessibleText": "Delta G° = -RT ln K: Standard-state equilibrium relation. Inferring reaction speed from K."
    }
  ],
  "mistakes": [
    {
      "id": "equilibrium-m1",
      "mistake": "Thinks equilibrium means reactions stop",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Knowledge Gap."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Rebuild equal forward/reverse rate concept."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "equilibrium-m2",
      "mistake": "Forgets Q/K direction rule",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Recall Gap."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Retrieve Q<K forward, Q>K reverse with reaction orientation."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "equilibrium-m3",
      "mistake": "Counts liquid/solid terms in Delta n_g",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Execution Error."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Count gaseous stoichiometric coefficients only."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "equilibrium-m4",
      "mistake": "Uses pressure change to predict shift without checking gaseous mole difference",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Decision / Selection Error."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Calculate Delta n_g first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "equilibrium-m5",
      "mistake": "Temperature or reaction orientation is not defined",
      "why": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Preparation Intelligence classification: Needs Review."
            }
          ]
        }
      ],
      "fix": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not compare K values until both are fixed."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "equilibrium-w1",
      "prompt": "For N2O4(g) <=> 2NO2(g), express the relationship between Kp and Kc using the ideal-gas textbook relation.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: For N2O4(g) <=> 2NO2(g), express the relationship between Kp and Kc using the ideal-gas textbook relation."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Delta n_g = 2 - 1 = 1. Therefore Kp = Kc(RT)^1 = Kc RT. The exponent comes only from gaseous stoichiometric coefficients."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the difference between Q and K?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "They have the same algebraic form for a given reaction, but Q uses the current composition while K describes equilibrium at a specified temperature."
            }
          ]
        }
      ]
    },
    {
      "question": "Does a catalyst change the equilibrium constant?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It changes rates of approach to equilibrium, not the thermodynamic equilibrium constant."
            }
          ]
        }
      ]
    },
    {
      "question": "When does Kp=Kc(RT)^Delta n apply?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In the standard ideal-gas textbook treatment, with Delta n counting gaseous stoichiometric coefficients."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Ionic Equilibrium",
      "url": "/neet/chemistry/ionic-equilibrium",
      "relation": "forward"
    },
    {
      "label": "Electrochemistry",
      "url": "/neet/chemistry/electrochemistry",
      "relation": "forward"
    }
  ]
};
