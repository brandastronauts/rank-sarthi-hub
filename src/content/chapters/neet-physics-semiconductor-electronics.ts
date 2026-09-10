import type { ChapterContent } from "@/content/types";

/**
 * NEET Semiconductor Electronics: Diodes, Rectifiers, Optoelectronic Devices and Logic Gates — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsSemiconductorElectronics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Semiconductor Electronics: Diodes, Rectifiers, Optoelectronic Devices and Logic Gates",
  "slug": "semiconductor-electronics",
  "url": "/neet/physics/semiconductor-electronics",
  "canonicalIntent": "Own the frozen semiconductor route while accurately mapping it to official Unit 19, Electronic Devices. Teach the listed diode/device/logic content and use intrinsic/extrinsic and p-type/n-type ideas only as supporting foundations where academically necessary, not as invented official sub-bullets.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The current NEET electronic-devices scope centres on semiconductor diode behaviour and applications: forward/reverse I-V characteristics, rectification, LED, photodiode, solar cell, Zener diode with voltage regulation, and the OR, AND, NOT, NAND and NOR logic gates. Rank Sarthi uses basic semiconductor and p-n-junction ideas only to explain why these devices behave as they do, while keeping historical or unlisted electronics topics out of current-core teaching."
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
      "label": "Modern Physics",
      "url": "/neet/physics/modern-physics",
      "relation": "up"
    },
    {
      "label": "NEET Physics",
      "url": "/neet/physics",
      "relation": "up"
    },
    {
      "label": "Current Electricity",
      "url": "/neet/physics/current-electricity",
      "relation": "prerequisite"
    },
    {
      "label": "NEET Physics syllabus",
      "url": "/neet/syllabus/physics",
      "relation": "up"
    }
  ],
  "syllabusMapping": {
    "unit": "Official mapping: Unit 19, Electronic Devices. Verified explicit current content includes: - semiconductors, - semiconductor diode: I-V characteristics in forward and reverse bias, - diode as rectifier, - I-V characteristics of LED, - photodiode, - solar cell, - Zener diode, - Zener diode as voltage regulator, - logic gates OR, AND, NOT, NAND and NOR. The frozen route title \"Semiconductor Electronics\" is an editorial owner for this official unit. Supporting intrinsic/extrinsic, p-type/n-type and p-n-junction explanations may be used to make the listed devices understandable, but they must not be presented as extra official syllabus bullets without source support",
    "topics": [
      "Minimum foundation",
      "Diode behaviour",
      "Rectifier",
      "Optoelectronic devices",
      "Zener diode and voltage regulation",
      "Logic gates",
      "Practical-skill relationship"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "semiconductor-electronics-c1",
      "title": "1. Minimum foundation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A semiconductor has electrical behaviour between idealised conductor and insulator descriptions, and its carrier population/conductivity can be changed through material properties and doping. Intrinsic/extrinsic and p-type/n-type language is useful to explain a p-n junction. Keep this foundation concise and source-checked because the official Unit 19 emphasis is on the listed devices and their characteristics."
            }
          ]
        }
      ]
    },
    {
      "id": "semiconductor-electronics-c2",
      "title": "2. Diode behaviour",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A p-n-junction diode behaves differently in forward and reverse bias. The page should teach the shape and meaning of the current-voltage characteristic rather than replace the real device with an unconditional ideal-switch statement."
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Forward bias can produce significant current after the relevant junction behaviour is reached."
              }
            ],
            [
              {
                "text": "Reverse bias normally gives much smaller current before breakdown, depending on device/model."
              }
            ],
            [
              {
                "text": "Axis direction, current sign and bias polarity must be clear on every graph."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not introduce the Shockley diode equation as required NEET core when it is not part of the explicit current unit."
            }
          ]
        }
      ]
    },
    {
      "id": "semiconductor-electronics-c3",
      "title": "3. Rectifier",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A diode's directional conduction allows AC-to-pulsating-DC rectification. Teach the functional role and current path with an original circuit diagram. Do not add unnecessary electronics engineering depth."
            }
          ]
        }
      ]
    },
    {
      "id": "semiconductor-electronics-c4",
      "title": "4. Optoelectronic devices",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Keep device roles distinct:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "LED: electrical input produces light under appropriate forward operation; current must be limited appropriately in a real circuit."
              }
            ],
            [
              {
                "text": "Photodiode: light changes the device response and it is commonly used as a detector; bias/operation must match the intended school-level model."
              }
            ],
            [
              {
                "text": "Solar cell: converts incident light energy into electrical output using photovoltaic operation."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The page should not flatten all three into \"light diodes.\""
            }
          ]
        }
      ]
    },
    {
      "id": "semiconductor-electronics-c5",
      "title": "5. Zener diode and voltage regulation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A Zener diode is designed to operate in a controlled reverse-breakdown region for regulation. In the simple regulator model, output is approximately the Zener voltage only while the diode remains in its intended regulation range and a suitable series resistance/current limit is present. A formula without that condition is incomplete."
            }
          ]
        }
      ]
    },
    {
      "id": "semiconductor-electronics-c6",
      "title": "6. Logic gates",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Current explicit gates:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "OR,"
              }
            ],
            [
              {
                "text": "AND,"
              }
            ],
            [
              {
                "text": "NOT,"
              }
            ],
            [
              {
                "text": "NAND,"
              }
            ],
            [
              {
                "text": "NOR."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use truth tables as the primary representation. Do not import XOR/XNOR as current official gate scope unless a later official source explicitly includes them."
            }
          ]
        }
      ]
    },
    {
      "id": "semiconductor-electronics-c7",
      "title": "7. Practical-skill relationship",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Official Unit 20 experimental skills include:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "characteristic curves of a p-n junction diode in forward and reverse bias,"
              }
            ],
            [
              {
                "text": "characteristic curves of a Zener diode and reverse-breakdown voltage,"
              }
            ],
            [
              {
                "text": "identification of diode, LED, resistor and capacitor from mixed components."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "These can be linked as practical interpretation assets without turning the T06 page into a lab-manual copy."
            }
          ]
        }
      ]
    },
    {
      "id": "semiconductor-electronics-gain",
      "title": "8. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "Device-function comparison matrix: diode, LED, photodiode, solar cell and Zener, with input/output and operating idea."
              }
            ],
            [
              {
                "text": "Bias-and-I-V interpreter: prompts the user to identify forward/reverse region before making a claim."
              }
            ],
            [
              {
                "text": "Five-gate truth-table grid: OR/AND/NOT/NAND/NOR only, with a current-scope note."
              }
            ],
            [
              {
                "text": "Unit 19 vs supporting foundation panel: shows which items are explicit official bullets and which are explanatory prerequisites."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Nuclei",
      "url": "/neet/physics/nuclei",
      "relation": "related"
    },
    {
      "label": "Dual Nature Radiation",
      "url": "/neet/physics/dual-nature-radiation",
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
    "title": "NEET Semiconductor Electronics: Diodes, Zener & Logic Gates | Rank Sarthi",
    "description": "Learn current NEET Electronic Devices scope: diode I-V, rectifier, LED, photodiode, solar cell, Zener regulation and OR/AND/NOT/NAND/NOR gates.",
    "ogTitle": "NEET Semiconductor Electronics: Diodes, Zener & Logic Gates | Rank Sarthi",
    "ogDescription": "Learn current NEET Electronic Devices scope: diode I-V, rectifier, LED, photodiode, solar cell, Zener regulation and OR/AND/NOT/NAND/NOR gates.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "semiconductor-electronics-f1",
      "expression": "σ = q(nμ_n + pμ_p)",
      "meaning": "Supporting conductivity",
      "variables": [],
      "useWhen": "σ S m^-1; carrier density m^-3; mobility m^2 V^-1 s^-1",
      "accessibleText": "Supporting conductivity: σ = q(nμ_n + pμ_p). σ S m^-1; carrier density m^-3; mobility m^2 V^-1 s^-1"
    },
    {
      "id": "semiconductor-electronics-f2",
      "expression": "qualitative characteristic, not one mandatory algebraic law",
      "meaning": "Diode I-V",
      "variables": [],
      "useWhen": "V in V; I in A",
      "accessibleText": "Diode I-V: qualitative characteristic, not one mandatory algebraic law. V in V; I in A"
    },
    {
      "id": "semiconductor-electronics-f3",
      "expression": "V_out ≈ V_Z",
      "meaning": "Zener regulator",
      "variables": [],
      "useWhen": "volts",
      "accessibleText": "Zener regulator: V_out ≈ V_Z. volts"
    },
    {
      "id": "semiconductor-electronics-f4",
      "expression": "Y = A.B",
      "meaning": "AND",
      "variables": [],
      "useWhen": "Boolean 0/1",
      "accessibleText": "AND: Y = A.B. Boolean 0/1"
    },
    {
      "id": "semiconductor-electronics-f5",
      "expression": "Y = A + B",
      "meaning": "OR",
      "variables": [],
      "useWhen": "Boolean 0/1",
      "accessibleText": "OR: Y = A + B. Boolean 0/1"
    },
    {
      "id": "semiconductor-electronics-f6",
      "expression": "Y = NOT A",
      "meaning": "NOT",
      "variables": [],
      "useWhen": "Boolean 0/1",
      "accessibleText": "NOT: Y = NOT A. Boolean 0/1"
    },
    {
      "id": "semiconductor-electronics-f7",
      "expression": "Y = NOT(A.B)",
      "meaning": "NAND",
      "variables": [],
      "useWhen": "Boolean 0/1",
      "accessibleText": "NAND: Y = NOT(A.B). Boolean 0/1"
    },
    {
      "id": "semiconductor-electronics-f8",
      "expression": "Y = NOT(A+B)",
      "meaning": "NOR",
      "variables": [],
      "useWhen": "Boolean 0/1",
      "accessibleText": "NOR: Y = NOT(A+B). Boolean 0/1"
    }
  ],
  "mistakes": [
    {
      "id": "semiconductor-electronics-m1",
      "mistake": "Treats every diode as ideal under all conditions",
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
              "text": "Read the I-V region and device type first."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "semiconductor-electronics-m2",
      "mistake": "Forgets NAND/NOR inversion",
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
              "text": "Reconstruct from AND/OR then invert."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "semiconductor-electronics-m3",
      "mistake": "Reads graph axes/bias polarity incorrectly",
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
              "text": "Mark voltage/current directions before interpreting."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "semiconductor-electronics-m4",
      "mistake": "Chooses Ohm's law as universal diode law",
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
              "text": "Identify non-ohmic semiconductor device behaviour."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "semiconductor-electronics-m5",
      "mistake": "Adds XOR/XNOR or historical electronics as current scope",
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
              "text": "Re-check the official Unit 19 list."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "semiconductor-electronics-w1",
      "prompt": "A two-input NAND gate has A = 1 and B = 1.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: NAND logic."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: A two-input NAND gate has A = 1 and B = 1."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: Evaluate AND first, then invert."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: A.B = 1."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: Boolean states are dimensionless; no electrical voltage level should be invented unless the problem defines a logic-voltage convention."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Execution Error if the final inversion is missed; Recall Gap if NAND definition cannot be retrieved."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Which logic gates are explicitly in the verified NEET UG 2026 syllabus?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "OR, AND, NOT, NAND and NOR."
            }
          ]
        }
      ]
    },
    {
      "question": "Is a diode always an ideal switch?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. The current syllabus explicitly requires forward/reverse I-V characteristics, so the operating region matters."
            }
          ]
        }
      ]
    },
    {
      "question": "When is V_out ≈ V_Z a valid simple Zener-regulator statement?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When the Zener diode is operating in its intended reverse-breakdown regulation region with appropriate current limiting."
            }
          ]
        }
      ]
    },
    {
      "question": "Are XOR and XNOR included on this page as current official gates?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No, not unless a later official syllabus explicitly adds them."
            }
          ]
        }
      ]
    }
  ]
};
