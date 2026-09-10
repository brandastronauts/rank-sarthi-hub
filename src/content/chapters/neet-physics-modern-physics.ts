import type { ChapterContent } from "@/content/types";

/**
 * NEET Modern Physics: Dual Nature, Atoms, Nuclei and Electronic Devices Map — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsModernPhysics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Modern Physics: Dual Nature, Atoms, Nuclei and Electronic Devices Map",
  "slug": "modern-physics",
  "url": "/neet/physics/modern-physics",
  "canonicalIntent": "Own the student-facing overview and routing intent commonly described as \"modern physics\" without pretending that \"Modern Physics\" is an official NEET UG 2026 syllabus unit. The page connects the current official Units 17, 18 and 19 to the focused child routes for Dual Nature of Matter and Radiation, Atoms, Nuclei and Semiconductor Electronics.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "For NEET UG 2026, the content students often call \"modern physics\" is distributed across three official units: Dual Nature of Matter and Radiation, Atoms and Nuclei, and Electronic Devices. Use this page to identify the physical phenomenon and move to the focused route that owns the depth. Photoelectric effect and matter waves belong to Dual Nature; Rutherford, Bohr and hydrogen spectrum belong to Atoms; mass defect, binding energy, fission and fusion belong to Nuclei; semiconductor devices and logic gates belong to Electronic Devices."
        }
      ]
    },
    {
      "type": "note",
      "tone": "info",
      "children": [
        {
          "text": "Scope status: Rank Sarthi learning umbrella, not an official standalone unit (CONTEXTUAL_UMBRELLA)."
        }
      ]
    }
  ],
  "heroChips": [
    "Rank Sarthi learning umbrella, not an official standalone unit",
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
    }
  ],
  "syllabusMapping": {
    "unit": "Official mapping: - Unit 17: Dual Nature of Matter and Radiation. - Unit 18: Atoms and Nuclei. - Unit 19: Electronic Devices. \"Modern Physics\" is an editorial navigation umbrella, not the exact official unit name. It must never be shown as if NMC/NTA published a single Unit named Modern Physics",
    "topics": [
      "Why this page exists",
      "Unit 17: photons, photoelectric effect and matter waves",
      "Unit 18: atoms vs nuclei",
      "Unit 19: electronic devices",
      "Shared method selector",
      "Current-scope correction"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "modern-physics-c1",
      "title": "1. Why this page exists",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "\"Modern physics\" is a useful student search label, but it is broader than the official naming in the 2026 syllabus. Rank Sarthi should therefore use it as a map, not as a fifth competing depth page. Its job is to answer one question quickly: which focused physical model should I use?"
            }
          ]
        }
      ]
    },
    {
      "id": "modern-physics-c2",
      "title": "2. Unit 17: photons, photoelectric effect and matter waves",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If the physical situation involves incident radiation ejecting electrons, threshold frequency, stopping potential, maximum photoelectron kinetic energy, or the wavelength associated with a material particle, the focused owner is /neet/physics/dual-nature-radiation."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The conceptual shift is from a purely classical wave description to quantised energy exchange for the photoelectric phenomenon, while matter waves associate wavelength with particle momentum. Detailed experimental observations, Einstein's equation and de Broglie calculations belong on the child page."
            }
          ]
        }
      ]
    },
    {
      "id": "modern-physics-c3",
      "title": "3. Unit 18: atoms vs nuclei",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit 18 contains two clearly separable reasoning families."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Atoms owns:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "alpha-particle scattering and Rutherford's nuclear model,"
              }
            ],
            [
              {
                "text": "Bohr's model,"
              }
            ],
            [
              {
                "text": "energy levels,"
              }
            ],
            [
              {
                "text": "the hydrogen spectrum."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Nuclei owns:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "composition and size of nuclei,"
              }
            ],
            [
              {
                "text": "atomic masses,"
              }
            ],
            [
              {
                "text": "mass-energy equivalence,"
              }
            ],
            [
              {
                "text": "mass defect and binding energy,"
              }
            ],
            [
              {
                "text": "binding energy per nucleon and its variation,"
              }
            ],
            [
              {
                "text": "nuclear fission and fusion."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The verified 2026 Unit 18 text does not explicitly list radioactivity, radioactive decay law or half-life. Those topics must not be silently imported as current-core content on the Nuclei child page."
            }
          ]
        }
      ]
    },
    {
      "id": "modern-physics-c4",
      "title": "4. Unit 19: electronic devices",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If the problem concerns semiconductor diode behaviour, rectification, LED, photodiode, solar cell, Zener diode/regulation or the listed logic gates, route to /neet/physics/semiconductor-electronics. The child page owns the device behaviour and truth-table work. This umbrella does not duplicate it."
            }
          ]
        }
      ]
    },
    {
      "id": "modern-physics-c5",
      "title": "5. Shared method selector",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use the observed quantity to choose the model:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "incident-light frequency, work function or stopping potential -> photoelectric model;"
              }
            ],
            [
              {
                "text": "momentum or accelerating potential connected to wavelength -> matter-wave model;"
              }
            ],
            [
              {
                "text": "discrete atomic levels or spectral transition -> Bohr/atomic model;"
              }
            ],
            [
              {
                "text": "mass difference and released/binding energy -> nuclear mass-energy model;"
              }
            ],
            [
              {
                "text": "junction bias, device output or Boolean input -> semiconductor/electronic-device model."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This method selector is more useful than a single \"modern physics formula sheet\" because equations from these subdomains are not interchangeable."
            }
          ]
        }
      ]
    },
    {
      "id": "modern-physics-c6",
      "title": "6. Current-scope correction",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not add historical topics merely because older books or coaching lists place them under Modern Physics. Current exam scope is controlled by the official 2026 syllabus. When a source and the frozen route differ, the route remains, but its page must state the exact current relationship."
            }
          ]
        }
      ]
    },
    {
      "id": "modern-physics-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "Phenomenon-to-route chooser: starts from the observable or data type and points to one of the four focused children."
              }
            ],
            [
              {
                "text": "Official vs editorial label card: clearly shows that \"Modern Physics\" is a Rank Sarthi umbrella while Units 17-19 are the official source boundary."
              }
            ],
            [
              {
                "text": "Model-misuse matrix: identifies equations that look similar but answer different physical questions."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Electromagnetic Waves",
      "url": "/neet/physics/electromagnetic-waves",
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
    "title": "NEET Modern Physics: Dual Nature, Atoms, Nuclei & Devices | Rank Sarthi",
    "description": "Map NEET modern-physics intent to the official 2026 units for dual nature, atoms and nuclei, and electronic devices, then open the focused topic owner.",
    "ogTitle": "NEET Modern Physics: Dual Nature, Atoms, Nuclei & Devices | Rank Sarthi",
    "ogDescription": "Map NEET modern-physics intent to the official 2026 units for dual nature, atoms and nuclei, and electronic devices, then open the focused topic owner.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "modern-physics-f1",
      "expression": "E = hν = hc/λ",
      "meaning": "Photon energy",
      "variables": [],
      "useWhen": "E in J or eV; ν in Hz; λ in m",
      "accessibleText": "Photon energy: E = hν = hc/λ. E in J or eV; ν in Hz; λ in m"
    },
    {
      "id": "modern-physics-f2",
      "expression": "hν = φ + K_max",
      "meaning": "Photoelectric energy balance",
      "variables": [],
      "useWhen": "φ and K in J or eV",
      "accessibleText": "Photoelectric energy balance: hν = φ + K_max. φ and K in J or eV"
    },
    {
      "id": "modern-physics-f3",
      "expression": "λ = h/p",
      "meaning": "Matter wave",
      "variables": [],
      "useWhen": "λ in m; p in kg m s^-1",
      "accessibleText": "Matter wave: λ = h/p. λ in m; p in kg m s^-1"
    },
    {
      "id": "modern-physics-f4",
      "expression": "E_n = -13.6 Z^2/n^2 eV",
      "meaning": "Hydrogen-like level",
      "variables": [],
      "useWhen": "n positive integer",
      "accessibleText": "Hydrogen-like level: E_n = -13.6 Z^2/n^2 eV. n positive integer"
    },
    {
      "id": "modern-physics-f5",
      "expression": "E = Δm c^2",
      "meaning": "Mass-energy",
      "variables": [],
      "useWhen": "Δm in kg gives J",
      "accessibleText": "Mass-energy: E = Δm c^2. Δm in kg gives J"
    }
  ],
  "mistakes": [
    {
      "id": "modern-physics-m1",
      "mistake": "Treats \"Modern Physics\" as the official unit name",
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
              "text": "Re-anchor to Units 17-19."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "modern-physics-m2",
      "mistake": "Chooses a nuclear formula for an atomic-level transition",
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
              "text": "Identify the observable before selecting the model."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "modern-physics-m3",
      "mistake": "Remembers an equation but not its units/domain",
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
              "text": "Retrieve equation plus conditions as one record."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "modern-physics-m4",
      "mistake": "Makes an eV/J or nm/m conversion error",
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
              "text": "Run unit check before substitution."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "modern-physics-m5",
      "mistake": "Source list contains an old topic not explicit in 2026",
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
              "text": "Hold the current-scope claim and verify the official syllabus."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "modern-physics-w1",
      "prompt": "A question gives a metal surface, incident-light frequency above threshold and asks how the stopping potential changes when light frequency is increased while intensity is held fixed.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: method selection across the umbrella."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: A question gives a metal surface, incident-light frequency above threshold and asks how the stopping potential changes when light frequency is increased while intensity is held fixed."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: This is a photoelectric-effect problem, so route to Dual Nature. Use the energy balance, not atomic-level or nuclear formulas."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: Increasing photon frequency raises photon energy hν. For fixed work function, K_max = hν - φ increases. Because eV_s = K_max for stopping-potential magnitude, the stopping potential magnitude increases."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: frequency in Hz; stopping potential in V. State whether using the magnitude of electron charge and stopping potential to avoid an unnecessary sign mistake."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Decision / Selection Error if the student chooses the wrong subdomain; Execution Error if the model is correct but units/sign are mishandled."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is \"Modern Physics\" an official NEET UG 2026 unit?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It is a useful editorial umbrella. The relevant official units are Unit 17 Dual Nature of Matter and Radiation, Unit 18 Atoms and Nuclei, and Unit 19 Electronic Devices."
            }
          ]
        }
      ]
    },
    {
      "question": "Where should photoelectric effect be studied?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "/neet/physics/dual-nature-radiation."
            }
          ]
        }
      ]
    },
    {
      "question": "Does the current Nuclei scope explicitly list radioactive decay and half-life?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not in the verified 2026 Unit 18 wording used by this package, so Rank Sarthi does not treat them as current-core bullets here."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Dual Nature Radiation",
      "url": "/neet/physics/dual-nature-radiation",
      "relation": "forward"
    },
    {
      "label": "Atoms",
      "url": "/neet/physics/atoms",
      "relation": "forward"
    },
    {
      "label": "Nuclei",
      "url": "/neet/physics/nuclei",
      "relation": "forward"
    },
    {
      "label": "Semiconductor Electronics",
      "url": "/neet/physics/semiconductor-electronics",
      "relation": "forward"
    }
  ]
};
