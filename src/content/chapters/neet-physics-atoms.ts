import type { ChapterContent } from "@/content/types";

/**
 * NEET Atoms: Rutherford, Bohr Model, Energy Levels and Hydrogen Spectrum — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsAtoms: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Atoms: Rutherford, Bohr Model, Energy Levels and Hydrogen Spectrum",
  "slug": "atoms",
  "url": "/neet/physics/atoms",
  "canonicalIntent": "Teach the atomic half of official Unit 18: Rutherford scattering/model, Bohr model, quantised energy levels and hydrogen spectrum, while making the model domain and limitations explicit.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Rutherford scattering established that an atom's positive charge and most of its mass are concentrated in a very small nucleus, but the classical Rutherford model did not explain atomic stability or discrete spectra. The Bohr model introduces quantised allowed states for hydrogen-like one-electron systems. For hydrogen, E_n = -13.6/n^2 eV; radiation is emitted or absorbed when the atom changes between allowed energy levels."
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
      "label": "Dual Nature Radiation",
      "url": "/neet/physics/dual-nature-radiation",
      "relation": "prerequisite"
    },
    {
      "label": "NEET Physics syllabus",
      "url": "/neet/syllabus/physics",
      "relation": "up"
    }
  ],
  "syllabusMapping": {
    "unit": "Exact mapping: atomic portion of Unit 18, Atoms and Nuclei: - alpha-particle scattering experiment, - Rutherford model, - Bohr model, - energy levels, - hydrogen spectrum",
    "topics": [
      "Rutherford scattering: evidence before model",
      "Why Rutherford is not enough",
      "Bohr model",
      "Energy sign",
      "Spectral transitions"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "atoms-c1",
      "title": "1. Rutherford scattering: evidence before model",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The page should begin with what is observed rather than memorising the final model:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "most alpha particles pass with relatively small deflection;"
              }
            ],
            [
              {
                "text": "a small fraction undergo large deflections."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The qualitative inference is that most atomic volume is comparatively empty, while positive charge and most mass are concentrated in a small central nucleus. Do not turn this into a probability/frequency claim not supplied by the source."
            }
          ]
        }
      ]
    },
    {
      "id": "atoms-c2",
      "title": "2. Why Rutherford is not enough",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A purely classical picture of an electron orbiting the nucleus does not explain atomic stability or the discrete line spectrum of hydrogen. This limitation is the reason a new model is introduced."
            }
          ]
        }
      ]
    },
    {
      "id": "atoms-c3",
      "title": "3. Bohr model",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a hydrogen-like one-electron atom/ion, the Bohr model uses discrete allowed stationary states. Angular momentum is quantised: mvr = n h/(2π) = nħ."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The model yields discrete radii and energies. It is a model with a domain, not a universal description of all multi-electron atoms."
            }
          ]
        }
      ]
    },
    {
      "id": "atoms-c4",
      "title": "4. Energy sign",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Taking the separated electron and nucleus at infinite separation as zero energy, bound-state energies are negative. For hydrogen: E_n = -13.6/n^2 eV."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "As n increases, the energy approaches zero from below. Ionisation from a bound level requires energy sufficient to reach the zero-energy continuum reference."
            }
          ]
        }
      ]
    },
    {
      "id": "atoms-c5",
      "title": "5. Spectral transitions",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For emission from an initial upper level n_i to a lower final level n_f, hν = E_i - E_f > 0."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For absorption, the atom gains the energy gap: hν = E_f - E_i > 0."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The Rydberg relation for a hydrogen-like one-electron species can be written with the appropriate transition order. The page should state the order explicitly rather than relying on a memorised sign."
            }
          ]
        }
      ]
    },
    {
      "id": "atoms-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "Evidence -> inference -> model -> limitation flow for Rutherford and Bohr."
              }
            ],
            [
              {
                "text": "Bound-state energy ladder with zero-energy reference visible."
              }
            ],
            [
              {
                "text": "Transition-direction checker that labels emission vs absorption before formula selection."
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
    "title": "NEET Atoms: Rutherford, Bohr Model & Hydrogen Spectrum | Rank Sarthi",
    "description": "Learn Rutherford scattering, Bohr's hydrogen-like model, energy levels and hydrogen spectral transitions with formulas, conditions and sign checks.",
    "ogTitle": "NEET Atoms: Rutherford, Bohr Model & Hydrogen Spectrum | Rank Sarthi",
    "ogDescription": "Learn Rutherford scattering, Bohr's hydrogen-like model, energy levels and hydrogen spectral transitions with formulas, conditions and sign checks.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "atoms-f1",
      "expression": "angular momentum kg m^2 s^-1",
      "meaning": "mvr = nħ",
      "variables": [],
      "useWhen": "Bohr hydrogen-like model",
      "accessibleText": "mvr = nħ: angular momentum kg m^2 s^-1. Bohr hydrogen-like model"
    },
    {
      "id": "atoms-f2",
      "expression": "r in m; a0 Bohr radius",
      "meaning": "r_n = a_0 n^2/Z",
      "variables": [],
      "useWhen": "Hydrogen-like one-electron species",
      "accessibleText": "r_n = a_0 n^2/Z: r in m; a0 Bohr radius. Hydrogen-like one-electron species"
    },
    {
      "id": "atoms-f3",
      "expression": "energy eV",
      "meaning": "E_n = -13.6 Z^2/n^2 eV",
      "variables": [],
      "useWhen": "Hydrogen-like one-electron species",
      "accessibleText": "E_n = -13.6 Z^2/n^2 eV: energy eV. Hydrogen-like one-electron species"
    },
    {
      "id": "atoms-f4",
      "expression": "energy J/eV",
      "meaning": "hν = E_i - E_f",
      "variables": [],
      "useWhen": "Emission with E_i > E_f",
      "accessibleText": "hν = E_i - E_f: energy J/eV. Emission with E_i > E_f"
    },
    {
      "id": "atoms-f5",
      "expression": "energy J/eV",
      "meaning": "hν = E_f - E_i",
      "variables": [],
      "useWhen": "Absorption with E_f > E_i",
      "accessibleText": "hν = E_f - E_i: energy J/eV. Absorption with E_f > E_i"
    },
    {
      "id": "atoms-f6",
      "expression": "λ m; R m^-1",
      "meaning": "1/λ = R Z^2(1/n_f^2 - 1/n_i^2)",
      "variables": [],
      "useWhen": "Hydrogen-like emission, n_i > n_f",
      "accessibleText": "1/λ = R Z^2(1/n_f^2 - 1/n_i^2): λ m; R m^-1. Hydrogen-like emission, n_i > n_f"
    }
  ],
  "mistakes": [
    {
      "id": "atoms-m1",
      "mistake": "Treats Bohr model as universal atomic theory",
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
              "text": "State hydrogen-like one-electron domain."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "atoms-m2",
      "mistake": "Forgets negative sign in bound-state energy",
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
              "text": "Tie sign to zero-energy reference at infinity."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "atoms-m3",
      "mistake": "Reverses initial/final levels in emission",
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
              "text": "Mark higher and lower level before subtracting."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "atoms-m4",
      "mistake": "Uses nuclear binding-energy model for an atomic spectral transition",
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
              "text": "Identify atomic energy-level phenomenon."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "atoms-m5",
      "mistake": "Source/model wording is overgeneralised",
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
              "text": "Check NCERT and official scope before publication."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "atoms-w1",
      "prompt": "A hydrogen atom emits a photon in a transition from n = 3 to n = 2.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: hydrogen emission energy."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: A hydrogen atom emits a photon in a transition from n = 3 to n = 2."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: Use Bohr energy levels and take the positive difference E_3 - E_2."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: E_3 = -13.6/9 = -1.511... eV"
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: photon energy is positive even though both bound-state energies are negative."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Execution Error if level subtraction is reversed; Knowledge Gap if negative bound-state energies are not understood."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What did Rutherford scattering show?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It supports a model in which most atomic volume is relatively empty and positive charge with most mass is concentrated in a small nucleus."
            }
          ]
        }
      ]
    },
    {
      "question": "Why are Bohr energies negative?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "With zero energy defined for separated particles at infinity, a bound electron-nucleus state has lower energy and is therefore negative relative to that reference."
            }
          ]
        }
      ]
    },
    {
      "question": "Is E_n = -13.6/n^2 eV valid for every atom?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. In this form it is for hydrogen; the hydrogen-like one-electron form includes Z^2."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Nuclei",
      "url": "/neet/physics/nuclei",
      "relation": "forward"
    }
  ]
};
