import type { ChapterContent } from "@/content/types";

/**
 * NEET Electromagnetic Induction: Flux, Faraday, Lenz and Inductance — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsElectromagneticInduction: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Electromagnetic Induction: Flux, Faraday, Lenz and Inductance",
  "slug": "electromagnetic-induction",
  "url": "/neet/physics/electromagnetic-induction",
  "canonicalIntent": "Own the induction half of official Unit 14 while keeping AC content separate. The current core is magnetic flux change, Faraday law, induced emf/current, Lenz law, eddy currents, self inductance and mutual inductance.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Electromagnetic induction describes emf produced by changing magnetic flux linkage. NEET UG 2026 explicitly includes Faraday law, induced emf/current, Lenz law, eddy currents, self inductance and mutual inductance. Motional-emf treatment can be used only as supporting induction context because it is not separately named in the official 2026 bullet list."
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
      "label": "NEET Physics",
      "url": "/neet/physics",
      "relation": "up"
    },
    {
      "label": "NEET Physics syllabus",
      "url": "/neet/syllabus/physics",
      "relation": "up"
    },
    {
      "label": "Magnetism",
      "url": "/neet/physics/magnetism",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused owner of the electromagnetic-induction portion of NEET UG 2026 Physics Unit 14",
    "topics": [
      "What changes matters",
      "Faraday and Lenz",
      "Induced emf vs induced current",
      "Eddy currents",
      "Self and mutual inductance",
      "Motional-emf boundary"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "electromagnetic-induction-c1",
      "title": "1. What changes matters",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Induction is controlled by change in flux linkage, not simply by the presence of a magnetic field. A loop can sit in a strong constant field and have zero induced emf if its flux linkage does not change."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-induction-c2",
      "title": "2. Faraday and Lenz",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use Faraday law for magnitude and Lenz law/sign convention for direction. The negative sign is not an instruction to force a numerical result negative; it encodes that the induced effect opposes the change in flux that produces it."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-induction-c3",
      "title": "3. Induced emf vs induced current",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "An emf can exist across an open conductor/loop segment even when there is no closed-path current. If a current is requested, the circuit resistance/path must be known or modeled."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-induction-c4",
      "title": "4. Eddy currents",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach eddy currents qualitatively as circulating currents induced in bulk conductors by changing flux, with magnetic/thermal consequences at NCERT depth."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-induction-c5",
      "title": "5. Self and mutual inductance",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Self inductance links changing current in a circuit to induced emf in the same circuit. Mutual inductance links changing current in one coil to induced emf in another. Sign/direction remains governed by Lenz law and coil orientation."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-induction-c6",
      "title": "6. Motional-emf boundary",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A moving conductor cutting magnetic flux is a useful NCERT induction example. Because the 2026 official bullet list does not separately name \"motional emf,\" keep it subordinate/contextual rather than giving it a false independent current-scope badge."
            }
          ]
        }
      ]
    },
    {
      "id": "electromagnetic-induction-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Flux-change cause map: changing B, area or orientation."
              }
            ],
            [
              {
                "text": "Lenz direction ladder: original flux -> flux change -> induced field opposing change -> current direction."
              }
            ],
            [
              {
                "text": "Open vs closed loop card: induced emf can exist without sustained closed-path current."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Alternating Current",
      "url": "/neet/physics/alternating-current",
      "relation": "related"
    }
  ],
  "sources": [
    "ncert-exemplar-index",
    "ncert-physics-11-contents",
    "ncert-physics-12-contents",
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
    "title": "NEET Electromagnetic Induction: Faraday & Lenz Law | Rank Sarthi",
    "description": "Learn NEET 2026 electromagnetic induction through magnetic flux, Faraday and Lenz laws, eddy currents, self inductance and mutual inductance.",
    "ogTitle": "NEET Electromagnetic Induction: Faraday & Lenz Law | Rank Sarthi",
    "ogDescription": "Learn NEET 2026 electromagnetic induction through magnetic flux, Faraday and Lenz laws, eddy currents, self inductance and mutual inductance.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "electromagnetic-induction-f1",
      "expression": "Phi_B = integral B.dA; uniform planar BA cos(theta)",
      "meaning": "Magnetic flux",
      "variables": [],
      "useWhen": "theta between B and area normal. Unit Wb.",
      "accessibleText": "Magnetic flux: Phi_B = integral B.dA; uniform planar BA cos(theta). theta between B and area normal. Unit Wb."
    },
    {
      "id": "electromagnetic-induction-f2",
      "expression": "epsilon = -N dPhi_B/dt",
      "meaning": "Faraday law",
      "variables": [],
      "useWhen": "N-turn coil with common flux per turn; sign follows chosen loop/area orientation and Lenz law. Unit V.",
      "accessibleText": "Faraday law: epsilon = -N dPhi_B/dt. N-turn coil with common flux per turn; sign follows chosen loop/area orientation and Lenz law. Unit V."
    },
    {
      "id": "electromagnetic-induction-f3",
      "expression": "",
      "meaning": "Average induced emf",
      "variables": [],
      "useWhen": "epsilon_avg",
      "accessibleText": "Average induced emf: . epsilon_avg"
    },
    {
      "id": "electromagnetic-induction-f4",
      "expression": "I = epsilon/R",
      "meaning": "Induced current",
      "variables": [],
      "useWhen": "Closed resistive circuit model when other transient effects are negligible/handled.",
      "accessibleText": "Induced current: I = epsilon/R. Closed resistive circuit model when other transient effects are negligible/handled."
    },
    {
      "id": "electromagnetic-induction-f5",
      "expression": "epsilon_L = -L dI/dt",
      "meaning": "Self-induced emf",
      "variables": [],
      "useWhen": "Linear inductor over range where L is effectively constant. L in H.",
      "accessibleText": "Self-induced emf: epsilon_L = -L dI/dt. Linear inductor over range where L is effectively constant. L in H."
    },
    {
      "id": "electromagnetic-induction-f6",
      "expression": "epsilon_2 = -M dI_1/dt",
      "meaning": "Mutual induction",
      "variables": [],
      "useWhen": "Fixed coupled coils in linear regime, chosen winding sign convention. M in H.",
      "accessibleText": "Mutual induction: epsilon_2 = -M dI_1/dt. Fixed coupled coils in linear regime, chosen winding sign convention. M in H."
    },
    {
      "id": "electromagnetic-induction-f7",
      "expression": "U = 1/2 L I^2",
      "meaning": "Inductor energy",
      "variables": [],
      "useWhen": "Ideal linear inductor. Unit J.",
      "accessibleText": "Inductor energy: U = 1/2 L I^2. Ideal linear inductor. Unit J."
    },
    {
      "id": "electromagnetic-induction-f8",
      "expression": "epsilon = B l v",
      "meaning": "Motional emf, contextual",
      "variables": [],
      "useWhen": "Straight rod length l moving perpendicular to both rod and uniform B in standard geometry.",
      "accessibleText": "Motional emf, contextual: epsilon = B l v. Straight rod length l moving perpendicular to both rod and uniform B in standard geometry."
    }
  ],
  "mistakes": [
    {
      "id": "electromagnetic-induction-m1",
      "mistake": "Thinks magnetic field presence alone guarantees emf",
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
              "text": "Check dPhi/dt, not B alone."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "electromagnetic-induction-m2",
      "mistake": "Uses Lenz law before deciding the flux change",
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
              "text": "Determine whether original flux is increasing/decreasing first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "electromagnetic-induction-m3",
      "mistake": "Claims current in an open circuit",
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
              "text": "Distinguish emf from closed-path current."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "electromagnetic-induction-m4",
      "mistake": "Uses Blv outside orthogonal rod geometry",
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
              "text": "Return to flux-change/Faraday model."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "electromagnetic-induction-m5",
      "mistake": "Winding/area-normal orientation is unclear",
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
              "text": "Define orientation before assigning sign."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "electromagnetic-induction-w1",
      "prompt": "a conducting loop moves into a region where a uniform magnetic field points into the page.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: Lenz-law direction."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: a conducting loop moves into a region where a uniform magnetic field points into the page."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: track flux change through the loop."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: as the loop enters, into-page flux increases. The induced field must point out of the page, so the induced current is counterclockwise. While fully inside a uniform field and moving rigidly, flux is constant and the net induced emf is zero."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: direction item; no numerical unit. Faraday sign is consistent with the chosen area normal."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Decision / Selection Error if the learner opposes B rather than the change in flux."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What causes induced emf?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A change in magnetic flux linkage with the circuit."
            }
          ]
        }
      ]
    },
    {
      "question": "What does the minus sign in Faraday law mean?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It encodes Lenz law: the induced effect opposes the change in flux producing it."
            }
          ]
        }
      ]
    },
    {
      "question": "Can there be induced emf without current?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. An open circuit can have induced emf but no sustained closed-path current."
            }
          ]
        }
      ]
    },
    {
      "question": "Is motional emf explicitly named in the NEET UG 2026 Unit 14 bullet?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It can be used as supporting induction context, but the explicit current list centers on Faraday, Lenz, eddy currents and inductance."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Electromagnetic Waves",
      "url": "/neet/physics/electromagnetic-waves",
      "relation": "forward"
    }
  ]
};
