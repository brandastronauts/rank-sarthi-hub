import type { ChapterContent } from "@/content/types";

/**
 * Electrochemistry for NEET: Cells, Nernst Equation and Conductivity — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryElectrochemistry: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Electrochemistry for NEET: Cells, Nernst Equation and Conductivity",
  "slug": "electrochemistry",
  "url": "/neet/chemistry/electrochemistry",
  "canonicalIntent": "Teach the electrochemistry half of official Unit 7: metallic/electrolytic conduction, conductivity and molar conductivity, Kohlrausch relation, electrochemical cells, electrode/cell potentials, Nernst equation, Gibbs/equilibrium connection and current-scope named cells.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Electrochemistry connects redox reactions with electrical work. Under the standard reduction-potential convention, Ecell = Ecathode - Eanode; for the written reaction, positive E corresponds to negative Delta G = -nFE under the stated conditions. Conductivity and molar conductivity require consistent geometry and concentration units, and the Nernst quotient must match the balanced overall reaction."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Focused part of a larger current official unit (PARTIAL_OR_MERGED_SCOPE)."
        }
      ]
    }
  ],
  "heroChips": [
    "Focused part of a larger current official unit",
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
      "label": "Redox Reactions",
      "url": "/neet/chemistry/redox-reactions",
      "relation": "prerequisite"
    },
    {
      "label": "Equilibrium",
      "url": "/neet/chemistry/equilibrium",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused part of a larger current official unit",
    "topics": [
      "Conduction",
      "Molar conductivity",
      "Cell potentials",
      "Nernst and thermodynamics",
      "Named cells"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "electrochemistry-c1",
      "title": "1. Conduction",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Metallic conduction is carried by mobile electrons; electrolytic conduction is carried by ions in an electrolyte. Conductance is G=1/R, while conductivity removes sample geometry through kappa=Gl/A."
            }
          ]
        }
      ]
    },
    {
      "id": "electrochemistry-c2",
      "title": "2. Molar conductivity",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In strict SI form, with kappa in S m^-1 and concentration c in mol m^-3, Lambda_m=kappa/c in S m^2 mol^-1. In the common chemistry convention with kappa in S cm^-1 and C in mol L^-1, Lambda_m=1000 kappa/C in S cm^2 mol^-1. The factor 1000 belongs to that unit choice, not to a universal formula detached from units."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Kohlrausch's law allows limiting molar conductivity to be expressed from independent ionic contributions at infinite dilution in the standard treatment."
            }
          ]
        }
      ]
    },
    {
      "id": "electrochemistry-c3",
      "title": "3. Cell potentials",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Oxidation occurs at the anode and reduction at the cathode. With both tabulated values written as reduction potentials, Ecell=Ecathode-Eanode. Electrode potentials are intensive and are not multiplied by stoichiometric coefficients even though half-reactions must be balanced for electron transfer."
            }
          ]
        }
      ]
    },
    {
      "id": "electrochemistry-c4",
      "title": "4. Nernst and thermodynamics",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a balanced reaction transferring n electrons: E = E° - (RT/nF) ln Q. At 298 K: E = E° - (0.05916/n) log10 Q."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The quotient Q must correspond to the reaction as written. Delta G=-nFE, Delta G°=-nFE°, and Delta G°=-RT ln K, giving the equilibrium link for the same reaction convention."
            }
          ]
        }
      ]
    },
    {
      "id": "electrochemistry-c5",
      "title": "5. Named cells",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For lead accumulator discharge, a balanced overall reaction is Pb + PbO2 + 2H2SO4 -> 2PbSO4 + 2H2O. Half-reactions can be written: Pb + SO4^2- -> PbSO4 + 2e- and PbO2 + SO4^2- + 4H+ + 2e- -> PbSO4 + 2H2O."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A hydrogen-oxygen fuel-cell overall reaction can be written 2H2 + O2 -> 2H2O; exact electrode equations depend on the electrolyte medium."
            }
          ]
        }
      ]
    },
    {
      "id": "electrochemistry-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Electrochem Sign Checker: reaction -> anode/cathode -> reduction potentials -> E sign -> Delta G sign."
              }
            ],
            [
              {
                "text": "Conductivity Unit Switcher: SI and common laboratory conventions side by side."
              }
            ],
            [
              {
                "text": "Nernst Q Builder: balanced equation -> exponents -> activity/concentration terms -> Q."
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
    "title": "Electrochemistry for NEET: Nernst, Cells & Conductivity | Rank Sarthi",
    "description": "Learn NEET Electrochemistry with cell potential, Nernst equation, conductivity, molar conductivity, Gibbs energy, equilibrium and named-cell reactions.",
    "ogTitle": "Electrochemistry for NEET: Nernst, Cells & Conductivity | Rank Sarthi",
    "ogDescription": "Learn NEET Electrochemistry with cell potential, Nernst equation, conductivity, molar conductivity, Gibbs energy, equilibrium and named-cell reactions.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "electrochemistry-f1",
      "expression": "S, ohm",
      "meaning": "G=1/R",
      "variables": [],
      "useWhen": "Same conductor state",
      "accessibleText": "G=1/R: S, ohm. Same conductor state"
    },
    {
      "id": "electrochemistry-f2",
      "expression": "SI S m^-1 if geometry SI",
      "meaning": "kappa=Gl/A",
      "variables": [],
      "useWhen": "Defined cell geometry",
      "accessibleText": "kappa=Gl/A: SI S m^-1 if geometry SI. Defined cell geometry"
    },
    {
      "id": "electrochemistry-f3",
      "expression": "SI: c mol m^-3",
      "meaning": "Lambda_m=kappa/c",
      "variables": [],
      "useWhen": "Consistent SI units",
      "accessibleText": "Lambda_m=kappa/c: SI: c mol m^-3. Consistent SI units"
    },
    {
      "id": "electrochemistry-f4",
      "expression": "kappa S cm^-1; C mol L^-1",
      "meaning": "Lambda_m=1000kappa/C",
      "variables": [],
      "useWhen": "Common chemistry convention",
      "accessibleText": "Lambda_m=1000kappa/C: kappa S cm^-1; C mol L^-1. Common chemistry convention"
    },
    {
      "id": "electrochemistry-f5",
      "expression": "V",
      "meaning": "Ecell=Ecathode-Eanode",
      "variables": [],
      "useWhen": "Tabulated reduction potentials",
      "accessibleText": "Ecell=Ecathode-Eanode: V. Tabulated reduction potentials"
    },
    {
      "id": "electrochemistry-f6",
      "expression": "V; T K",
      "meaning": "E=E°-(RT/nF)lnQ",
      "variables": [],
      "useWhen": "Balanced reaction, defined Q",
      "accessibleText": "E=E°-(RT/nF)lnQ: V; T K. Balanced reaction, defined Q"
    },
    {
      "id": "electrochemistry-f7",
      "expression": "V",
      "meaning": "E=E°-(0.05916/n)logQ",
      "variables": [],
      "useWhen": "298 K approximation",
      "accessibleText": "E=E°-(0.05916/n)logQ: V. 298 K approximation"
    },
    {
      "id": "electrochemistry-f8",
      "expression": "J mol^-1 reaction",
      "meaning": "Delta G=-nFE",
      "variables": [],
      "useWhen": "n mol electrons per reaction as written",
      "accessibleText": "Delta G=-nFE: J mol^-1 reaction. n mol electrons per reaction as written"
    },
    {
      "id": "electrochemistry-f9",
      "expression": "compatible units",
      "meaning": "Delta G°=-RTlnK",
      "variables": [],
      "useWhen": "Standard-state thermodynamics",
      "accessibleText": "Delta G°=-RTlnK: compatible units. Standard-state thermodynamics"
    }
  ],
  "mistakes": [
    {
      "id": "electrochemistry-m1",
      "mistake": "Cannot explain anode/cathode via redox",
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
              "text": "Return to half-reactions."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "electrochemistry-m2",
      "mistake": "Forgets Ecell=Ecathode-Eanode convention",
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
              "text": "Retrieve with 'both are reduction potentials'."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "electrochemistry-m3",
      "mistake": "Multiplies E° by stoichiometric coefficient",
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
              "text": "Balance electrons, not voltage."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "electrochemistry-m4",
      "mistake": "Builds Q for the reverse reaction",
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
              "text": "Write overall reaction first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "electrochemistry-m5",
      "mistake": "T/unit convention missing",
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
              "text": "State temperature and concentration unit system."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "electrochemistry-w1",
      "prompt": "E°(Cu2+/Cu)=+0.34 V and E°(Zn2+/Zn)=-0.76 V. For Zn + Cu2+ -> Zn2+ + Cu, calculate E°cell and infer the sign of Delta G°.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: E°(Cu2+/Cu)=+0.34 V and E°(Zn2+/Zn)=-0.76 V. For Zn + Cu2+ -> Zn2+ + Cu, calculate E°cell and infer the sign of Delta G°."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Cu2+ is reduced at the cathode and Zn is oxidised at the anode. E°cell=0.34-(-0.76)=1.10 V. Since Delta G°=-nFE°, the standard Gibbs change is negative for the reaction as written."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "How is standard cell potential calculated from reduction potentials?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "E°cell=E°cathode-E°anode."
            }
          ]
        }
      ]
    },
    {
      "question": "Why does reaction direction matter in Nernst calculations?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Q and the sign of E correspond to the balanced reaction as written."
            }
          ]
        }
      ]
    },
    {
      "question": "What is the difference between conductivity and molar conductivity?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Conductivity is a material/solution conduction property at a state; molar conductivity normalises it by amount concentration with a defined unit convention."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Chemical Kinetics",
      "url": "/neet/chemistry/chemical-kinetics",
      "relation": "forward"
    }
  ]
};
