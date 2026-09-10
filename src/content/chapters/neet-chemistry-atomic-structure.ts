import type { ChapterContent } from "@/content/types";

/**
 * Atomic Structure for NEET: Bohr Model, Quantum Numbers and Orbitals — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryAtomicStructure: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Atomic Structure for NEET: Bohr Model, Quantum Numbers and Orbitals",
  "slug": "atomic-structure",
  "url": "/neet/chemistry/atomic-structure",
  "canonicalIntent": "Own official Unit 2 as the canonical Rank Sarthi content route: electromagnetic/quantum foundations at Chemistry depth, Bohr model, de Broglie relation, uncertainty principle, quantum numbers, orbitals, electronic configuration and the stability of half/full subshell arrangements.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Atomic Structure explains how electrons are described through quantised energy and orbitals rather than fixed classical paths. For NEET, use the Bohr model only for hydrogen-like species, apply c = nu lambda, E = h nu, de Broglie and uncertainty relations with their conditions, then use quantum-number rules, Pauli exclusion, Hund's rule and Aufbau ordering to build electronic configurations."
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
      "Radiation and quantisation",
      "Bohr model",
      "Matter-wave and uncertainty foundations",
      "Orbitals and quantum numbers",
      "Electronic configuration"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "atomic-structure-c1",
      "title": "1. Radiation and quantisation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For electromagnetic radiation, frequency and wavelength satisfy c = nu lambda. Photon energy is E = h nu = hc/lambda. These relations require consistent SI or explicitly converted units."
            }
          ]
        }
      ]
    },
    {
      "id": "atomic-structure-c2",
      "title": "2. Bohr model",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a one-electron hydrogen-like ion, Bohr energy levels may be written E_n = -13.6 Z^2/n^2 eV. A transition photon satisfies Delta E = h nu; use the magnitude of the energy difference for photon energy. Do not apply the hydrogen-like energy formula to many-electron atoms as though electron-electron interactions were absent."
            }
          ]
        }
      ]
    },
    {
      "id": "atomic-structure-c3",
      "title": "3. Matter-wave and uncertainty foundations",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The de Broglie wavelength is lambda = h/p, or approximately h/(mv) in a non-relativistic particle model. Heisenberg uncertainty is represented by Delta x Delta p >= h/(4 pi). It limits simultaneous precision of conjugate variables; it is not an instrument-quality statement."
            }
          ]
        }
      ]
    },
    {
      "id": "atomic-structure-c4",
      "title": "4. Orbitals and quantum numbers",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "An orbital is described by quantum numbers:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "n = 1,2,3,...;"
              }
            ],
            [
              {
                "text": "l = 0...n-1, corresponding to s, p, d, f for 0,1,2,3;"
              }
            ],
            [
              {
                "text": "m_l = -l...+l;"
              }
            ],
            [
              {
                "text": "electron spin m_s = +1/2 or -1/2."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A subshell with angular quantum number l has 2l+1 orbitals and can hold up to 2(2l+1) electrons."
            }
          ]
        }
      ]
    },
    {
      "id": "atomic-structure-c5",
      "title": "5. Electronic configuration",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Pauli exclusion limits an orbital to two electrons with opposite spin. Hund's rule fills degenerate orbitals singly with parallel spin before pairing in the ground-state model. Aufbau ordering provides a filling sequence, while recognised configuration exceptions must be handled from the source rather than forced into a simple mnemonic. Half-filled and completely filled subshell arrangements can show extra stability in relevant cases."
            }
          ]
        }
      ]
    },
    {
      "id": "atomic-structure-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Quantum Number Validator: n -> allowed l -> allowed ml -> orbital count -> electron capacity."
              }
            ],
            [
              {
                "text": "Model Applicability Flag: Bohr hydrogen-like calculation vs many-electron electronic-configuration reasoning."
              }
            ],
            [
              {
                "text": "Transition Sanity Card: energy level direction -> absorption/emission -> positive photon energy."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [],
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
    "title": "Atomic Structure for NEET: Bohr Model & Quantum Numbers | Rank Sarthi",
    "description": "Learn NEET Atomic Structure with photon relations, Bohr hydrogen-like levels, de Broglie, uncertainty, orbitals, quantum numbers and electronic configuration.",
    "ogTitle": "Atomic Structure for NEET: Bohr Model & Quantum Numbers | Rank Sarthi",
    "ogDescription": "Learn NEET Atomic Structure with photon relations, Bohr hydrogen-like levels, de Broglie, uncertainty, orbitals, quantum numbers and electronic configuration.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "atomic-structure-f1",
      "expression": "c m s^-1; nu s^-1; lambda m",
      "meaning": "c = nu lambda",
      "variables": [],
      "useWhen": "Electromagnetic radiation in vacuum for c",
      "accessibleText": "c = nu lambda: c m s^-1; nu s^-1; lambda m. Electromagnetic radiation in vacuum for c"
    },
    {
      "id": "atomic-structure-f2",
      "expression": "E J per photon unless converted",
      "meaning": "E = h nu = hc/lambda",
      "variables": [],
      "useWhen": "Photon model",
      "accessibleText": "E = h nu = hc/lambda: E J per photon unless converted. Photon model"
    },
    {
      "id": "atomic-structure-f3",
      "expression": "n principal level, Z nuclear charge",
      "meaning": "E_n = -13.6 Z^2/n^2 eV",
      "variables": [],
      "useWhen": "One-electron hydrogen-like species",
      "accessibleText": "E_n = -13.6 Z^2/n^2 eV: n principal level, Z nuclear charge. One-electron hydrogen-like species"
    },
    {
      "id": "atomic-structure-f4",
      "expression": "Delta E",
      "meaning": "",
      "variables": [],
      "useWhen": "= h nu",
      "accessibleText": ": Delta E. = h nu"
    },
    {
      "id": "atomic-structure-f5",
      "expression": "wavelength m; momentum kg m s^-1",
      "meaning": "lambda = h/p",
      "variables": [],
      "useWhen": "de Broglie matter wave",
      "accessibleText": "lambda = h/p: wavelength m; momentum kg m s^-1. de Broglie matter wave"
    },
    {
      "id": "atomic-structure-f6",
      "expression": "SI conjugate uncertainties",
      "meaning": "Delta x Delta p >= h/(4 pi)",
      "variables": [],
      "useWhen": "Quantum uncertainty relation",
      "accessibleText": "Delta x Delta p >= h/(4 pi): SI conjugate uncertainties. Quantum uncertainty relation"
    },
    {
      "id": "atomic-structure-f7",
      "expression": "l integer 0 to n-1",
      "meaning": "subshell orbitals = 2l+1",
      "variables": [],
      "useWhen": "Allowed quantum numbers",
      "accessibleText": "subshell orbitals = 2l+1: l integer 0 to n-1. Allowed quantum numbers"
    },
    {
      "id": "atomic-structure-f8",
      "expression": "electrons",
      "meaning": "max subshell electrons = 2(2l+1)",
      "variables": [],
      "useWhen": "Pauli rule",
      "accessibleText": "max subshell electrons = 2(2l+1): electrons. Pauli rule"
    }
  ],
  "mistakes": [
    {
      "id": "atomic-structure-m1",
      "mistake": "Treats orbit as the same thing as orbital",
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
              "text": "Separate Bohr model language from quantum-mechanical orbital probability language."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "atomic-structure-m2",
      "mistake": "Forgets allowed l or m_l values",
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
              "text": "Use the quantum-number validator."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "atomic-structure-m3",
      "mistake": "Uses nm directly in hc/lambda with SI h,c",
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
              "text": "Convert wavelength to metres or use a compatible constant."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "atomic-structure-m4",
      "mistake": "Applies -13.6 Z^2/n^2 to a many-electron atom",
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
              "text": "Confirm hydrogen-like species first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "atomic-structure-m5",
      "mistake": "A configuration exception is not source-verified",
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
              "text": "Use NCERT/SME verification rather than inventing an exception rule."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "atomic-structure-w1",
      "prompt": "For a hydrogen atom, calculate the magnitude of the energy released in an electron transition from n=3 to n=2 using E_n = -13.6/n^2 eV.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: For a hydrogen atom, calculate the magnitude of the energy released in an electron transition from n=3 to n=2 using E_n = -13.6/n^2 eV."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: E_3 = -13.6/9 = -1.511 eV and E_2 = -13.6/4 = -3.400 eV. The atom loses |-3.400 - (-1.511)| = 1.889 eV, so the emitted photon has energy about 1.89 eV."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What values can the azimuthal quantum number l take?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a given principal quantum number n, l ranges from 0 to n-1."
            }
          ]
        }
      ]
    },
    {
      "question": "When is the Bohr energy formula -13.6 Z^2/n^2 eV applicable?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "To one-electron hydrogen-like species in the Bohr model."
            }
          ]
        }
      ]
    },
    {
      "question": "How many orbitals are in a d subshell?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For d, l=2, so 2l+1 = 5 orbitals, with maximum capacity 10 electrons."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Periodic Classification",
      "url": "/neet/chemistry/periodic-classification",
      "relation": "forward"
    },
    {
      "label": "Chemical Bonding",
      "url": "/neet/chemistry/chemical-bonding",
      "relation": "forward"
    }
  ]
};
