import type { ChapterContent } from "@/content/types";

/**
 * Redox Reactions for NEET: Oxidation Number, Agents and Balancing — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryRedoxReactions: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Redox Reactions for NEET: Oxidation Number, Agents and Balancing",
  "slug": "redox-reactions",
  "url": "/neet/chemistry/redox-reactions",
  "canonicalIntent": "Teach the redox half of official Unit 7: oxidation/reduction, oxidation number, oxidising/reducing agents and balanced redox equations. The page is a prerequisite for Electrochemistry and must not duplicate cell-potential or conductivity content.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "A redox reaction contains simultaneous oxidation and reduction. Assign oxidation numbers, identify which species loses and gains electrons, label the reducing and oxidising agents, and balance atoms plus charge in the stated medium. The oxidising agent is itself reduced; the reducing agent is itself oxidised."
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
      "label": "Some Basic Concepts",
      "url": "/neet/chemistry/some-basic-concepts",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused part of a larger current official unit",
    "topics": [
      "Oxidation/reduction and agents",
      "Oxidation-number controls",
      "Ion-electron balancing"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "redox-reactions-c1",
      "title": "1. Oxidation/reduction and agents",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Oxidation is an increase in oxidation number and loss of electrons; reduction is a decrease in oxidation number and gain of electrons. These changes occur together."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For Fe2+ -> Fe3+ + e-, Fe is oxidised. For Ce4+ + e- -> Ce3+, Ce is reduced. Combining gives the balanced ionic reaction Fe2+ + Ce4+ -> Fe3+ + Ce3+."
            }
          ]
        }
      ]
    },
    {
      "id": "redox-reactions-c2",
      "title": "2. Oxidation-number controls",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A free element has oxidation number 0; a monatomic ion equals its charge; fluorine is -1 in compounds; oxygen is usually -2 with known exceptions such as peroxides; hydrogen is usually +1 with nonmetals and -1 in many metal hydrides. The sum of oxidation numbers equals the species charge. Classify exceptional compound type before applying a default rule."
            }
          ]
        }
      ]
    },
    {
      "id": "redox-reactions-c3",
      "title": "3. Ion-electron balancing",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In acidic medium:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "split oxidation and reduction half-reactions;"
              }
            ],
            [
              {
                "text": "balance non-O/H atoms;"
              }
            ],
            [
              {
                "text": "balance O with H2O;"
              }
            ],
            [
              {
                "text": "balance H with H+;"
              }
            ],
            [
              {
                "text": "balance charge with electrons;"
              }
            ],
            [
              {
                "text": "equalise electron counts;"
              }
            ],
            [
              {
                "text": "add and cancel;"
              }
            ],
            [
              {
                "text": "recheck atoms and charge."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A balanced example is MnO4^- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For basic medium, a safe workflow is to first obtain a balanced acidic form, then add OH- to both sides to neutralise residual H+, cancel water where possible, and recheck total charge. Do not merely substitute OH- for H+."
            }
          ]
        }
      ]
    },
    {
      "id": "redox-reactions-gain",
      "title": "4. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Redox Role Resolver: oxidation-number change -> electron change -> species role."
              }
            ],
            [
              {
                "text": "Balance Audit Strip: atoms, charge and electrons are separate pass/fail fields."
              }
            ],
            [
              {
                "text": "Medium Decision Card: acidic/basic medium is selected before balancing."
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
    "title": "Redox Reactions for NEET: Oxidation Number & Balancing | Rank Sarthi",
    "description": "Learn NEET Redox Reactions with oxidation numbers, oxidising/reducing agents, ion-electron balancing, medium conditions and charge checks.",
    "ogTitle": "Redox Reactions for NEET: Oxidation Number & Balancing | Rank Sarthi",
    "ogDescription": "Learn NEET Redox Reactions with oxidation numbers, oxidising/reducing agents, ion-electron balancing, medium conditions and charge checks.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "redox-reactions-f1",
      "expression": "Compare same element before/after",
      "meaning": "oxidation number rises -> oxidation",
      "variables": [],
      "useWhen": "Electron loss consistent",
      "accessibleText": "oxidation number rises -> oxidation: Compare same element before/after. Electron loss consistent"
    },
    {
      "id": "redox-reactions-f2",
      "expression": "Same element",
      "meaning": "oxidation number falls -> reduction",
      "variables": [],
      "useWhen": "Electron gain consistent",
      "accessibleText": "oxidation number falls -> reduction: Same element. Electron gain consistent"
    },
    {
      "id": "redox-reactions-f3",
      "expression": "Aqueous ionic form",
      "meaning": "Fe2+ + Ce4+ -> Fe3+ + Ce3+",
      "variables": [],
      "useWhen": "atoms/charge balanced",
      "accessibleText": "Fe2+ + Ce4+ -> Fe3+ + Ce3+: Aqueous ionic form. atoms/charge balanced"
    },
    {
      "id": "redox-reactions-f4",
      "expression": "Acidic medium",
      "meaning": "MnO4^- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+",
      "variables": [],
      "useWhen": "5 e transfer; atoms/charge balanced",
      "accessibleText": "MnO4^- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+: Acidic medium. 5 e transfer; atoms/charge balanced"
    }
  ],
  "mistakes": [
    {
      "id": "redox-reactions-m1",
      "mistake": "Cannot connect oxidation number with electron transfer",
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
              "text": "Write both changes explicitly."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "redox-reactions-m2",
      "mistake": "Forgets oxidation-number defaults/exceptions",
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
              "text": "Retrieve rule with exception cue."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "redox-reactions-m3",
      "mistake": "Balances atoms but not charge",
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
              "text": "Run final charge audit."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "redox-reactions-m4",
      "mistake": "Selects oxidising agent because it contains oxygen",
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
              "text": "Identify which species is reduced."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "redox-reactions-m5",
      "mistake": "Reaction medium/product is unclear",
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
              "text": "Do not force a memorised equation without condition."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "redox-reactions-w1",
      "prompt": "In acidic solution, MnO4^- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+. Identify the oxidising agent, reducing agent and electron count transferred per permanganate ion.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: In acidic solution, MnO4^- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+. Identify the oxidising agent, reducing agent and electron count transferred per permanganate ion."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Mn changes +7 to +2, gaining 5 electrons, so permanganate is reduced and is the oxidising agent. Each Fe2+ loses one electron to become Fe3+, so Fe2+ is the reducing agent. Five Fe2+ supply the 5 electrons accepted per MnO4^-."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is the oxidising agent?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The species that is reduced by gaining electrons and thereby oxidises the other species."
            }
          ]
        }
      ]
    },
    {
      "question": "How do I verify a redox equation?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Check every atom, total charge and equality of electrons lost/gained."
            }
          ]
        }
      ]
    },
    {
      "question": "Can an acidic-medium equation be used unchanged in basic medium?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not automatically; balancing and sometimes product form depend on medium."
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
    },
    {
      "label": "D and F Block Elements",
      "url": "/neet/chemistry/d-and-f-block-elements",
      "relation": "forward"
    }
  ]
};
