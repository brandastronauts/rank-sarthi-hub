import type { ChapterContent } from "@/content/types";

/**
 * Chemical Thermodynamics for NEET: Delta U, Enthalpy, Entropy and Gibbs Energy — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryThermodynamics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Chemical Thermodynamics for NEET: Delta U, Enthalpy, Entropy and Gibbs Energy",
  "slug": "thermodynamics",
  "url": "/neet/chemistry/thermodynamics",
  "canonicalIntent": "Own official Unit 4 with explicit chemistry sign conventions: system/surroundings, state functions, internal energy, heat/work, enthalpy, heat capacity, Hess law and enthalpy changes, entropy, Gibbs energy, spontaneity and the standard Gibbs/equilibrium relation.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Thermodynamics tracks energy and state changes. With the chemistry convention used here, Delta U = q + w, where work done on the system is positive; pressure-volume expansion against an external pressure has w = -P_ext Delta V. At constant temperature and pressure, Gibbs energy provides the spontaneity criterion: negative Delta G favours spontaneous change in the stated direction, and equilibrium has Delta G = 0."
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
      "State and path quantities",
      "First law",
      "Enthalpy",
      "Entropy and Gibbs energy",
      "Equilibrium connection"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "thermodynamics-c1",
      "title": "1. State and path quantities",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Internal energy U, enthalpy H, entropy S and Gibbs energy G are state functions: their changes depend only on initial and final equilibrium states. Heat q and work w describe energy transfer along a process path and are not state functions."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-c2",
      "title": "2. First law",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Using the chemistry convention, Delta U = q + w: heat absorbed by the system is positive, and work done on the system is positive. For pressure-volume expansion against a constant external pressure, w = -P_ext Delta V; expansion gives positive Delta V and therefore negative work."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-c3",
      "title": "3. Enthalpy",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "H = U + PV. At constant pressure with only PV work in the standard treatment, the heat exchanged is related to Delta H. Heat capacity must be tied to the specified condition or quantity basis. Hess's law follows from enthalpy being a state function: enthalpy changes for reaction steps can be added algebraically when equations are added, with reaction reversal changing the sign and stoichiometric multiplication scaling Delta H."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-c4",
      "title": "4. Entropy and Gibbs energy",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Entropy is a thermodynamic state function used with the second law to describe directionality. Gibbs energy is G = H - TS, so at constant T for a state change, Delta G = Delta H - T Delta S when the quantities are applied consistently. At constant T and P, Delta G < 0 indicates spontaneous change in the written direction, Delta G > 0 the reverse direction is favoured, and equilibrium has Delta G = 0."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-c5",
      "title": "5. Equilibrium connection",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For standard states, Delta G° = -RT ln K. A large K corresponds to a more negative standard Gibbs energy for the reaction as written. Do not confuse Delta G under the current composition with Delta G° under standard-state reference conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "thermodynamics-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Thermodynamic Sign Ledger: heat direction, volume change, work sign and resulting Delta U shown before arithmetic."
              }
            ],
            [
              {
                "text": "Hess Equation Transformer: reverse/multiply reaction -> transform Delta H -> add steps -> verify final equation."
              }
            ],
            [
              {
                "text": "Spontaneity Matrix: signs of Delta H/Delta S plus temperature dependence, without turning qualitative cases into absolute predictions when values matter."
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
      "label": "Chemical Kinetics",
      "url": "/neet/chemistry/chemical-kinetics",
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
    "title": "Chemical Thermodynamics for NEET: Enthalpy, Entropy & Gibbs | Rank Sarthi",
    "description": "Learn NEET Chemical Thermodynamics with first-law signs, PV work, enthalpy, Hess law, entropy, Gibbs energy, spontaneity and equilibrium connection.",
    "ogTitle": "Chemical Thermodynamics for NEET: Enthalpy, Entropy & Gibbs | Rank Sarthi",
    "ogDescription": "Learn NEET Chemical Thermodynamics with first-law signs, PV work, enthalpy, Hess law, entropy, Gibbs energy, spontaneity and equilibrium connection.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "thermodynamics-f1",
      "expression": "energy, usually J or kJ",
      "meaning": "Delta U = q + w",
      "variables": [],
      "useWhen": "Chemistry sign convention stated",
      "accessibleText": "Delta U = q + w: energy, usually J or kJ. Chemistry sign convention stated"
    },
    {
      "id": "thermodynamics-f2",
      "expression": "P x V energy units",
      "meaning": "w = -P_ext Delta V",
      "variables": [],
      "useWhen": "Constant external pressure PV work",
      "accessibleText": "w = -P_ext Delta V: P x V energy units. Constant external pressure PV work"
    },
    {
      "id": "thermodynamics-f3",
      "expression": "energy",
      "meaning": "H = U + PV",
      "variables": [],
      "useWhen": "Definition",
      "accessibleText": "H = U + PV: energy. Definition"
    },
    {
      "id": "thermodynamics-f4",
      "expression": "kJ mol^-1 reaction as written",
      "meaning": "Delta H via Hess law",
      "variables": [],
      "useWhen": "Same thermodynamic states; equations added consistently",
      "accessibleText": "Delta H via Hess law: kJ mol^-1 reaction as written. Same thermodynamic states; equations added consistently"
    },
    {
      "id": "thermodynamics-f5",
      "expression": "energy per amount; T K",
      "meaning": "Delta G = Delta H - T Delta S",
      "variables": [],
      "useWhen": "Same T and compatible units",
      "accessibleText": "Delta G = Delta H - T Delta S: energy per amount; T K. Same T and compatible units"
    },
    {
      "id": "thermodynamics-f6",
      "expression": "R and Delta G units compatible",
      "meaning": "Delta G° = -RT ln K",
      "variables": [],
      "useWhen": "Standard reaction, thermodynamic K",
      "accessibleText": "Delta G° = -RT ln K: R and Delta G units compatible. Standard reaction, thermodynamic K"
    }
  ],
  "mistakes": [
    {
      "id": "thermodynamics-m1",
      "mistake": "Cannot separate state function from path function",
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
              "text": "Classify U/H/S/G vs q/w."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "thermodynamics-m2",
      "mistake": "Forgets chemistry work sign",
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
              "text": "Retrieve w=-Pext Delta V with expansion sign."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "thermodynamics-m3",
      "mistake": "Mixes L bar with J directly",
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
              "text": "Convert 1 L bar = 100 J."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "thermodynamics-m4",
      "mistake": "Uses Delta G sign criterion without constant T,P context",
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
              "text": "State the criterion conditions."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "thermodynamics-m5",
      "mistake": "Standard state or phase is unclear",
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
              "text": "Do not compare enthalpy/Gibbs values without state definitions."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "thermodynamics-w1",
      "prompt": "A system absorbs 500 J of heat and expands by 2.00 L against a constant external pressure of 1.00 bar. Using the chemistry convention and 1 L bar = 100 J, calculate work and Delta U.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: A system absorbs 500 J of heat and expands by 2.00 L against a constant external pressure of 1.00 bar. Using the chemistry convention and 1 L bar = 100 J, calculate work and Delta U."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Expansion gives w = -P_ext Delta V = -(1.00)(2.00) L bar = -200 J. Therefore Delta U = q+w = 500-200 = +300 J."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the chemistry sign convention for PV work?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "With Delta U=q+w, work done on the system is positive; expansion against external pressure gives w=-P_ext Delta V."
            }
          ]
        }
      ]
    },
    {
      "question": "Is enthalpy the same as heat?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Enthalpy is a state function; under specified constant-pressure conditions, heat transfer can equal the enthalpy change."
            }
          ]
        }
      ]
    },
    {
      "question": "What does Delta G=0 mean?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For the stated constant-temperature/pressure equilibrium condition, there is no net Gibbs driving force for the reaction direction."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Electrochemistry",
      "url": "/neet/chemistry/electrochemistry",
      "relation": "forward"
    }
  ]
};
