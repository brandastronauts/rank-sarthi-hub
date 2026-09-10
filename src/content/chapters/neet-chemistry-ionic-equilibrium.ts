import type { ChapterContent } from "@/content/types";

/**
 * Ionic Equilibrium for NEET: pH, Buffers, Hydrolysis and Ksp — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryIonicEquilibrium: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Ionic Equilibrium for NEET: pH, Buffers, Hydrolysis and Ksp",
  "slug": "ionic-equilibrium",
  "url": "/neet/chemistry/ionic-equilibrium",
  "canonicalIntent": "Own the focused ionic part of official Unit 6: acid-base models, ionisation constants, pH, buffers, salt hydrolysis, common-ion effect and solubility product, with every approximation condition made explicit.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Ionic Equilibrium is a focused child of official Unit 6. Write the balanced ionisation or dissolution equilibrium first, identify the correct constant, and test approximations before using them. Kw is temperature dependent; the familiar pH + pOH = 14 is the 25 C dilute-solution form, not a universal identity at all temperatures."
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
      "label": "Equilibrium",
      "url": "/neet/chemistry/equilibrium",
      "relation": "up"
    },
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
      "label": "Equilibrium",
      "url": "/neet/chemistry/equilibrium",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused part of a larger current official unit",
    "topics": [
      "Acid-base models",
      "Weak-electrolyte equilibrium",
      "Water ionisation and pH",
      "Buffers",
      "Hydrolysis, common ion and Ksp"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "ionic-equilibrium-c1",
      "title": "1. Acid-base models",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Arrhenius focuses on H+/OH- formation in aqueous systems, Bronsted-Lowry on proton donor/acceptor pairs, and Lewis on electron-pair acceptor/donor behaviour. Select the model that matches the reaction rather than forcing every acid-base case into one definition."
            }
          ]
        }
      ]
    },
    {
      "id": "ionic-equilibrium-c2",
      "title": "2. Weak-electrolyte equilibrium",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a monoprotic weak acid HA <=> H+ + A-, Ka quantifies ionisation in the concentration approximation. Separate initial, change and equilibrium amounts before making a 'small x' approximation. A comparable logic applies to weak bases."
            }
          ]
        }
      ]
    },
    {
      "id": "ionic-equilibrium-c3",
      "title": "3. Water ionisation and pH",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Kw = [H+][OH-] in the usual concentration-form classroom model, with Kw temperature dependent. At 25 C, pKw is approximately 14, giving the familiar pH+pOH=14 relation under the dilute-solution model. Thermodynamically, pH is defined from hydrogen-ion activity; routine NEET calculations commonly approximate activity with concentration when appropriate."
            }
          ]
        }
      ]
    },
    {
      "id": "ionic-equilibrium-c4",
      "title": "4. Buffers",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A buffer contains a weak acid/base and its conjugate partner in appreciable amounts. When strong acid/base is added, perform the stoichiometric neutralisation first. Only then apply the buffer ratio to the remaining pair. Henderson-type relations are not valid for a solution that no longer contains a functional conjugate buffer pair."
            }
          ]
        }
      ]
    },
    {
      "id": "ionic-equilibrium-c5",
      "title": "5. Hydrolysis, common ion and Ksp",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Salt hydrolysis depends on the acid/base nature of the parent species. A common ion shifts an ionisation or dissolution equilibrium. For a sparingly soluble salt, Ksp is built from the balanced dissolution stoichiometry and does not equal molar solubility except in simple one-to-one cases."
            }
          ]
        }
      ]
    },
    {
      "id": "ionic-equilibrium-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Approximation Validator: estimated ionisation fraction compared with initial concentration before accepting a square-root shortcut."
              }
            ],
            [
              {
                "text": "Buffer Order-of-Operations Card: strong reagent stoichiometry first, equilibrium ratio second."
              }
            ],
            [
              {
                "text": "Ksp Stoichiometry Builder: dissolution equation -> ion amounts in s -> Ksp expression."
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
    "title": "Ionic Equilibrium for NEET: pH, Buffers & Ksp | Rank Sarthi",
    "description": "Learn NEET Ionic Equilibrium with acid-base constants, pH, buffers, salt hydrolysis, common-ion effect, Ksp and condition-aware approximations.",
    "ogTitle": "Ionic Equilibrium for NEET: pH, Buffers & Ksp | Rank Sarthi",
    "ogDescription": "Learn NEET Ionic Equilibrium with acid-base constants, pH, buffers, salt hydrolysis, common-ion effect, Ksp and condition-aware approximations.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "ionic-equilibrium-f1",
      "expression": "concentration-form approximation",
      "meaning": "Ka=[H+][A-]/[HA]",
      "variables": [],
      "useWhen": "Weak acid equilibrium",
      "accessibleText": "Ka=[H+][A-]/[HA]: concentration-form approximation. Weak acid equilibrium"
    },
    {
      "id": "ionic-equilibrium-f2",
      "expression": "concentration-form approximation",
      "meaning": "Kb=[BH+][OH-]/[B]",
      "variables": [],
      "useWhen": "Weak base equilibrium",
      "accessibleText": "Kb=[BH+][OH-]/[B]: concentration-form approximation. Weak base equilibrium"
    },
    {
      "id": "ionic-equilibrium-f3",
      "expression": "conjugate acid-base pair",
      "meaning": "Ka Kb = Kw",
      "variables": [],
      "useWhen": "Same temperature",
      "accessibleText": "Ka Kb = Kw: conjugate acid-base pair. Same temperature"
    },
    {
      "id": "ionic-equilibrium-f4",
      "expression": "concentration approximation",
      "meaning": "Kw=[H+][OH-]",
      "variables": [],
      "useWhen": "Aqueous system; T dependent",
      "accessibleText": "Kw=[H+][OH-]: concentration approximation. Aqueous system; T dependent"
    },
    {
      "id": "ionic-equilibrium-f5",
      "expression": "dimensionless pH",
      "meaning": "pH approx -log[H+]",
      "variables": [],
      "useWhen": "Dilute model where activity coefficient is approximated",
      "accessibleText": "pH approx -log[H+]: dimensionless pH. Dilute model where activity coefficient is approximated"
    },
    {
      "id": "ionic-equilibrium-f6",
      "expression": "mol L^-1",
      "meaning": "[H+] approx sqrt(Ka C)",
      "variables": [],
      "useWhen": "Simple monoprotic weak acid, small ionisation, water contribution negligible",
      "accessibleText": "[H+] approx sqrt(Ka C): mol L^-1. Simple monoprotic weak acid, small ionisation, water contribution negligible"
    },
    {
      "id": "ionic-equilibrium-f7",
      "expression": "dimensionless",
      "meaning": "pH=pKa+log([A-]/[HA])",
      "variables": [],
      "useWhen": "Functional buffer after stoichiometry, compatible volume basis",
      "accessibleText": "pH=pKa+log([A-]/[HA]): dimensionless. Functional buffer after stoichiometry, compatible volume basis"
    },
    {
      "id": "ionic-equilibrium-f8",
      "expression": "stoichiometric ion powers",
      "meaning": "Ksp expression",
      "variables": [],
      "useWhen": "Saturated dissolution equilibrium",
      "accessibleText": "Ksp expression: stoichiometric ion powers. Saturated dissolution equilibrium"
    }
  ],
  "mistakes": [
    {
      "id": "ionic-equilibrium-m1",
      "mistake": "Cannot distinguish Ka/Kb/Kw/Ksp roles",
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
              "text": "Tie each constant to its balanced equilibrium."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "ionic-equilibrium-m2",
      "mistake": "Forgets common pH/buffer relations",
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
              "text": "Retrieve formula with validity conditions."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "ionic-equilibrium-m3",
      "mistake": "Applies Henderson relation before strong acid/base stoichiometry",
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
              "text": "Neutralise first."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "ionic-equilibrium-m4",
      "mistake": "Uses weak-acid square-root shortcut despite large ionisation",
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
              "text": "Test approximation or solve without it."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "ionic-equilibrium-m5",
      "mistake": "Temperature/activity conditions are unspecified",
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
              "text": "State the model and temperature before exact claims."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "ionic-equilibrium-w1",
      "prompt": "A 0.010 mol L^-1 monoprotic weak acid has Ka=1.0 x 10^-5. Estimate [H+] with the small-ionisation approximation and test its self-consistency.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: A 0.010 mol L^-1 monoprotic weak acid has Ka=1.0 x 10^-5. Estimate [H+] with the small-ionisation approximation and test its self-consistency."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: [H+] approx sqrt(Ka C)=sqrt(10^-7)=3.16 x 10^-4 mol L^-1. The estimated fraction ionised is about 3.16 x 10^-4 / 10^-2 = 0.0316, or 3.16%, which is reasonably small for the common approximate treatment at this level."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is pH+pOH=14 always true?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It is the familiar dilute aqueous form at about 25 C when pKw is about 14; Kw changes with temperature."
            }
          ]
        }
      ]
    },
    {
      "question": "When can [H+]=sqrt(Ka C) be used?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a simple weak monoprotic acid when ionisation is small relative to initial concentration and other contributions are negligible."
            }
          ]
        }
      ]
    },
    {
      "question": "Does Ksp equal molar solubility?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not generally. The dissolution stoichiometry determines the relationship."
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
