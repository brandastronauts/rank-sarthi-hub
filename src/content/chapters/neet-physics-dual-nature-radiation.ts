import type { ChapterContent } from "@/content/types";

/**
 * NEET Dual Nature of Matter and Radiation: Photoelectric Effect and Matter Waves — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsDualNatureRadiation: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Dual Nature of Matter and Radiation: Photoelectric Effect and Matter Waves",
  "slug": "dual-nature-radiation",
  "url": "/neet/physics/dual-nature-radiation",
  "canonicalIntent": "Teach the verified NEET UG 2026 Unit 17 scope through photoelectric observations, Einstein's photoelectric equation and de Broglie matter waves, with explicit separation of frequency, intensity, threshold and stopping-potential effects.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The photoelectric effect separates two controls that students often mix up: for a given emitting surface, light frequency determines whether emission is possible and controls the maximum photoelectron kinetic energy, while intensity primarily changes the number of incident photons and therefore affects photoelectric current when emission is already possible. Einstein's equation is hν = φ + K_max. Matter waves use a different relation, λ = h/p, connecting a particle's wavelength to its momentum."
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
      "label": "Electromagnetic Waves",
      "url": "/neet/physics/electromagnetic-waves",
      "relation": "prerequisite"
    },
    {
      "label": "NEET Physics syllabus",
      "url": "/neet/syllabus/physics",
      "relation": "up"
    }
  ],
  "syllabusMapping": {
    "unit": "Exact mapping: Unit 17, Dual Nature of Matter and Radiation. Current scope includes dual nature of radiation, photoelectric effect, Hertz and Lenard observations, Einstein's photoelectric equation, particle nature of light, matter waves and de Broglie relation",
    "topics": [
      "Physical situation",
      "Experimental observations to retain",
      "Einstein model",
      "Stopping potential",
      "Matter waves"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "dual-nature-radiation-c1",
      "title": "1. Physical situation",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A photosensitive surface receives electromagnetic radiation. If individual photons have enough energy to overcome the material's work function, electrons can be emitted. The key is to track energy per photon separately from number of photons arriving per unit time."
            }
          ]
        }
      ]
    },
    {
      "id": "dual-nature-radiation-c2",
      "title": "2. Experimental observations to retain",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A production page should make the qualitative evidence visible:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "below a material-dependent threshold frequency, increasing intensity does not by itself cause ordinary photoelectric emission;"
              }
            ],
            [
              {
                "text": "above threshold, increasing frequency increases the maximum kinetic energy of emitted electrons;"
              }
            ],
            [
              {
                "text": "for fixed frequency above threshold, increasing intensity can increase photoelectric current because more photoelectrons may be emitted;"
              }
            ],
            [
              {
                "text": "stopping potential is used to determine the maximum kinetic energy of photoelectrons."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The exact graph and apparatus labels must be reviewer-checked and rendered clearly."
            }
          ]
        }
      ]
    },
    {
      "id": "dual-nature-radiation-c3",
      "title": "3. Einstein model",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A photon carries energy hν. A minimum energy φ is required to remove an electron from the surface. The remainder appears as maximum photoelectron kinetic energy: hν = φ + K_max."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At threshold, K_max = 0, so φ = hν_0."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This is an energy accounting model. Do not treat work function, threshold frequency and stopping potential as three independent arbitrary quantities."
            }
          ]
        }
      ]
    },
    {
      "id": "dual-nature-radiation-c4",
      "title": "4. Stopping potential",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If V_s denotes the positive magnitude of the retarding potential needed to stop the fastest emitted electrons, then: K_max = eV_s, where e is the magnitude of the electron charge."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If a sign convention defines the retarding electrode potential as negative, preserve that circuit sign separately. The kinetic-energy relation is most safely taught in magnitude form."
            }
          ]
        }
      ]
    },
    {
      "id": "dual-nature-radiation-c5",
      "title": "5. Matter waves",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a particle with momentum p, λ = h/p."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If a non-relativistic electron starts from rest and is accelerated through a potential difference of magnitude V, electrical work gives kinetic energy eV, so: p = sqrt(2m_e eV) and therefore λ = h / sqrt(2m_e eV)."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This shortcut requires a non-relativistic treatment and the electron to gain kinetic energy corresponding to the applied potential difference."
            }
          ]
        }
      ]
    },
    {
      "id": "dual-nature-radiation-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "Four-control matrix: frequency, intensity, threshold frequency and stopping potential, showing what each changes and what it does not change."
              }
            ],
            [
              {
                "text": "Photoelectric graph interpreter: stopping-potential vs frequency and current vs voltage concepts with axis meanings."
              }
            ],
            [
              {
                "text": "Photon-vs-matter-wave selector: determines whether to use photon energy or de Broglie momentum relation."
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
    "title": "NEET Dual Nature: Photoelectric Effect & de Broglie | Rank Sarthi",
    "description": "Learn NEET photoelectric effect, Einstein equation, threshold frequency, stopping potential and de Broglie matter waves with conditions and traps.",
    "ogTitle": "NEET Dual Nature: Photoelectric Effect & de Broglie | Rank Sarthi",
    "ogDescription": "Learn NEET photoelectric effect, Einstein equation, threshold frequency, stopping potential and de Broglie matter waves with conditions and traps.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "dual-nature-radiation-f1",
      "expression": "E J/eV; ν Hz; λ m",
      "meaning": "E = hν = hc/λ",
      "variables": [],
      "useWhen": "Photon energy",
      "accessibleText": "E = hν = hc/λ: E J/eV; ν Hz; λ m. Photon energy"
    },
    {
      "id": "dual-nature-radiation-f2",
      "expression": "energies J or eV",
      "meaning": "hν = φ + K_max",
      "variables": [],
      "useWhen": "Photoelectric emission",
      "accessibleText": "hν = φ + K_max: energies J or eV. Photoelectric emission"
    },
    {
      "id": "dual-nature-radiation-f3",
      "expression": "ν0 Hz",
      "meaning": "ν_0 = φ/h",
      "variables": [],
      "useWhen": "Threshold relation for a given surface/work function",
      "accessibleText": "ν_0 = φ/h: ν0 Hz. Threshold relation for a given surface/work function"
    },
    {
      "id": "dual-nature-radiation-f4",
      "expression": "K J or eV; Vs V",
      "meaning": "K_max = eV_s",
      "variables": [],
      "useWhen": "Stopping-potential magnitude",
      "accessibleText": "K_max = eV_s: K J or eV; Vs V. Stopping-potential magnitude"
    },
    {
      "id": "dual-nature-radiation-f5",
      "expression": "SI",
      "meaning": "K = p^2/(2m)",
      "variables": [],
      "useWhen": "Non-relativistic particle",
      "accessibleText": "K = p^2/(2m): SI. Non-relativistic particle"
    },
    {
      "id": "dual-nature-radiation-f6",
      "expression": "λ m; p kg m s^-1",
      "meaning": "λ = h/p",
      "variables": [],
      "useWhen": "Matter-wave relation",
      "accessibleText": "λ = h/p: λ m; p kg m s^-1. Matter-wave relation"
    },
    {
      "id": "dual-nature-radiation-f7",
      "expression": "λ m; V V",
      "meaning": "λ = h/sqrt(2m_e eV)",
      "variables": [],
      "useWhen": "Electron accelerated from rest, non-relativistically",
      "accessibleText": "λ = h/sqrt(2m_e eV): λ m; V V. Electron accelerated from rest, non-relativistically"
    }
  ],
  "mistakes": [
    {
      "id": "dual-nature-radiation-m1",
      "mistake": "Says higher intensity raises K_max at fixed ν",
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
              "text": "Separate photon energy from photon count."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "dual-nature-radiation-m2",
      "mistake": "Forgets threshold relation",
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
              "text": "Retrieve φ = hν0 with the condition K_max = 0."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "dual-nature-radiation-m3",
      "mistake": "Uses nm directly in SI hc/λ calculation",
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
              "text": "Convert wavelength units first."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "dual-nature-radiation-m4",
      "mistake": "Uses atomic-level formula for photoelectric energy",
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
              "text": "Identify surface-emission phenomenon first."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "dual-nature-radiation-m5",
      "mistake": "Experimental wording/source conflicts",
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
              "text": "Stop and verify NCERT + official scope."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "dual-nature-radiation-w1",
      "prompt": "A metal has work function 2.0 eV. Incident photons have energy 3.5 eV.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: Einstein photoelectric energy balance."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: A metal has work function 2.0 eV. Incident photons have energy 3.5 eV."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: Use K_max = E_photon - φ, then stopping-potential magnitude from K_max = eV_s."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: K_max = 3.5 - 2.0 = 1.5 eV."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: energies are consistently in eV. V_s = 1.5 V is stated as magnitude; the retarding electrode sign depends on the defined circuit convention."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Execution Error if the subtraction/unit is mishandled; Knowledge Gap if intensity is substituted as the energy control."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What decides whether photoelectric emission can occur?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For the standard model, the photon frequency must meet or exceed the material's threshold frequency."
            }
          ]
        }
      ]
    },
    {
      "question": "Does higher intensity increase maximum photoelectron kinetic energy at fixed frequency?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not in the basic photoelectric model. Above threshold, frequency controls photon energy and therefore K_max; intensity mainly affects the number of emitted electrons/current."
            }
          ]
        }
      ]
    },
    {
      "question": "What is the de Broglie relation?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "λ = h/p."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Atoms",
      "url": "/neet/physics/atoms",
      "relation": "forward"
    }
  ]
};
