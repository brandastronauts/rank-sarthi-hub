import type { ChapterContent } from "@/content/types";

/**
 * Chemical Kinetics for NEET: Rate Laws, Order and Arrhenius Equation — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryChemicalKinetics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Chemical Kinetics for NEET: Rate Laws, Order and Arrhenius Equation",
  "slug": "chemical-kinetics",
  "url": "/neet/chemistry/chemical-kinetics",
  "canonicalIntent": "Own official Unit 8 as a model-selection chapter: rate, factors affecting rate, rate law, order and molecularity, zero- and first-order integrated relations, half-life, Arrhenius equation, activation energy and qualitative collision theory at current NEET depth.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Chemical Kinetics describes reaction rate. Do not choose an integrated equation until reaction order is established. Zero-order and first-order reactions have different concentration-time and half-life relations, while Arrhenius connects rate constant with absolute temperature and activation energy."
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
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Reaction rate",
      "Rate law, order and molecularity",
      "Units of rate constant",
      "Zero order",
      "First order",
      "Arrhenius and collision theory"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "chemical-kinetics-c1",
      "title": "1. Reaction rate",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For aA + bB -> cC + dD, a stoichiometrically normalised rate may be written: rate = -(1/a)d[A]/dt = -(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt. The sign convention reports positive forward rate while reactant concentrations fall."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-kinetics-c2",
      "title": "2. Rate law, order and molecularity",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "An empirical rate law can be rate = k[A]^m[B]^n; overall order is m+n. These exponents are determined kinetically and need not match coefficients in the overall balanced equation. Molecularity belongs to an elementary step and counts the reacting species in that step; it is conceptually different from overall reaction order."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-kinetics-c3",
      "title": "3. Units of rate constant",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If rate uses mol L^-1 s^-1 and total order is N, then k units are (mol L^-1)^(1-N) s^-1. This is a high-value dimensional check."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-kinetics-c4",
      "title": "4. Zero order",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For rate=k, integration gives [A]=[A]0-kt and t1/2=[A]0/(2k). The half-life depends on starting concentration."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-kinetics-c5",
      "title": "5. First order",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For rate=k[A], ln([A]0/[A])=kt, or k=(2.303/t)log10([A]0/[A]). The half-life is t1/2=ln2/k, approximately 0.693/k, independent of initial concentration within the first-order model."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-kinetics-c6",
      "title": "6. Arrhenius and collision theory",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "k=A exp(-Ea/RT). Between two temperatures, ln(k2/k1)=(Ea/R)(1/T1-1/T2). T must be kelvin and Ea units must match R. Collision theory remains qualitative at this level: effective collisions need sufficient energy and suitable orientation; no unnecessary advanced derivation is added."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-kinetics-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Order-to-Equation Decision Tree: order -> integrated law -> half-life relation -> k units."
              }
            ],
            [
              {
                "text": "Dimensional Order Checker: observed k units -> implied order."
              }
            ],
            [
              {
                "text": "Arrhenius Sign Sanity Check: for positive Ea, higher T should normally give larger k in the model."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Equilibrium",
      "url": "/neet/chemistry/equilibrium",
      "relation": "related"
    },
    {
      "label": "Thermodynamics",
      "url": "/neet/chemistry/thermodynamics",
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
    "title": "Chemical Kinetics for NEET: Rate Law, Order & Arrhenius | Rank Sarthi",
    "description": "Learn NEET Chemical Kinetics with rate law, order vs molecularity, zero/first-order equations, half-life, Arrhenius relation and unit checks.",
    "ogTitle": "Chemical Kinetics for NEET: Rate Law, Order & Arrhenius | Rank Sarthi",
    "ogDescription": "Learn NEET Chemical Kinetics with rate law, order vs molecularity, zero/first-order equations, half-life, Arrhenius relation and unit checks.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "chemical-kinetics-f1",
      "expression": "concentration/time",
      "meaning": "Normalised rate expression",
      "variables": [],
      "useWhen": "Balanced stoichiometry",
      "accessibleText": "Normalised rate expression: concentration/time. Balanced stoichiometry"
    },
    {
      "id": "chemical-kinetics-f2",
      "expression": "k units depend on order",
      "meaning": "rate=k[A]^m[B]^n",
      "variables": [],
      "useWhen": "Experimentally specified rate law",
      "accessibleText": "rate=k[A]^m[B]^n: k units depend on order. Experimentally specified rate law"
    },
    {
      "id": "chemical-kinetics-f3",
      "expression": "N total order",
      "meaning": "k units=(mol L^-1)^(1-N)s^-1",
      "variables": [],
      "useWhen": "Rate unit mol L^-1 s^-1",
      "accessibleText": "k units=(mol L^-1)^(1-N)s^-1: N total order. Rate unit mol L^-1 s^-1"
    },
    {
      "id": "chemical-kinetics-f4",
      "expression": "concentration/time",
      "meaning": "[A]=[A]0-kt",
      "variables": [],
      "useWhen": "Zero order",
      "accessibleText": "[A]=[A]0-kt: concentration/time. Zero order"
    },
    {
      "id": "chemical-kinetics-f5",
      "expression": "time",
      "meaning": "t1/2=[A]0/(2k)",
      "variables": [],
      "useWhen": "Zero order",
      "accessibleText": "t1/2=[A]0/(2k): time. Zero order"
    },
    {
      "id": "chemical-kinetics-f6",
      "expression": "dimensionless ratio",
      "meaning": "ln([A]0/[A])=kt",
      "variables": [],
      "useWhen": "First order",
      "accessibleText": "ln([A]0/[A])=kt: dimensionless ratio. First order"
    },
    {
      "id": "chemical-kinetics-f7",
      "expression": "time",
      "meaning": "t1/2=0.693/k",
      "variables": [],
      "useWhen": "First order",
      "accessibleText": "t1/2=0.693/k: time. First order"
    },
    {
      "id": "chemical-kinetics-f8",
      "expression": "T K; compatible Ea/R units",
      "meaning": "k=A exp(-Ea/RT)",
      "variables": [],
      "useWhen": "Arrhenius model",
      "accessibleText": "k=A exp(-Ea/RT): T K; compatible Ea/R units. Arrhenius model"
    },
    {
      "id": "chemical-kinetics-f9",
      "expression": "dimensionless log",
      "meaning": "ln(k2/k1)=(Ea/R)(1/T1-1/T2)",
      "variables": [],
      "useWhen": "Same reaction/model",
      "accessibleText": "ln(k2/k1)=(Ea/R)(1/T1-1/T2): dimensionless log. Same reaction/model"
    }
  ],
  "mistakes": [
    {
      "id": "chemical-kinetics-m1",
      "mistake": "Cannot distinguish order from molecularity",
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
              "text": "Tie order to rate law and molecularity to elementary step."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "chemical-kinetics-m2",
      "mistake": "Forgets zero/first-order relations",
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
              "text": "Retrieve equation with model condition."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "chemical-kinetics-m3",
      "mistake": "Uses Celsius in Arrhenius",
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
              "text": "Convert to kelvin."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "chemical-kinetics-m4",
      "mistake": "Chooses first-order half-life because problem mentions half-life",
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
              "text": "Determine order first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "chemical-kinetics-m5",
      "mistake": "Order/mechanism is not stated or evidenced",
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
              "text": "Do not infer from overall stoichiometry."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "chemical-kinetics-w1",
      "prompt": "A first-order reaction has a half-life of 20.0 min. Calculate k in min^-1.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: A first-order reaction has a half-life of 20.0 min. Calculate k in min^-1."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: k=0.693/t1/2=0.693/20.0=0.03465 min^-1, approximately 3.47 x 10^-2 min^-1. This result is valid because the reaction is explicitly first order."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is reaction order the same as molecularity?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Order comes from the observed rate law; molecularity describes an elementary step."
            }
          ]
        }
      ]
    },
    {
      "question": "Which integrated orders are explicitly in the current NEET unit?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Zero-order and first-order integrated equations and half-lives are explicitly included."
            }
          ]
        }
      ]
    },
    {
      "question": "Why must Arrhenius temperature be in kelvin?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The equation uses absolute thermodynamic temperature in Ea/RT."
            }
          ]
        }
      ]
    }
  ]
};
