import type { ChapterContent } from "@/content/types";

/**
 * NEET Nuclei: Nuclear Size, Mass Defect, Binding Energy, Fission and Fusion — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsNuclei: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Nuclei: Nuclear Size, Mass Defect, Binding Energy, Fission and Fusion",
  "slug": "nuclei",
  "url": "/neet/physics/nuclei",
  "canonicalIntent": "Teach the verified nuclear portion of current Unit 18: composition and size of nuclei, atomic masses, mass-energy relation, mass defect, binding energy and binding energy per nucleon, plus fission and fusion. Explicitly prevent removed/not-explicit historical radioactivity content from being presented as current-core scope.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "A nucleus contains Z protons and N = A - Z neutrons. Nuclear size scales approximately as R = R_0 A^(1/3). The difference between the mass of separated constituents and the bound system is the mass defect; its energy equivalent gives binding energy, B = Δm c^2. Binding energy per nucleon is useful for comparing nuclear binding trends and understanding why both fission of very heavy nuclei and fusion of light nuclei can release energy."
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
      "label": "Atoms",
      "url": "/neet/physics/atoms",
      "relation": "prerequisite"
    },
    {
      "label": "NEET Physics syllabus",
      "url": "/neet/syllabus/physics",
      "relation": "up"
    }
  ],
  "syllabusMapping": {
    "unit": "Exact mapping: nuclear portion of Unit 18, Atoms and Nuclei. Explicit current scope used here: - composition and size of nucleus, - atomic masses, - mass-energy relation, - mass defect, - binding energy per nucleon and its variation with mass number, - nuclear fission and fusion. Scope correction: radioactive decay, decay law and half-life are not explicitly listed in the verified 2026 Unit 18 wording. They are not current-core blocks in this package",
    "topics": [
      "Composition",
      "Nuclear size",
      "Mass bookkeeping",
      "Binding energy",
      "Fission and fusion",
      "Current-scope exclusion"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "nuclei-c1",
      "title": "1. Composition",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "atomic number Z = number of protons,"
              }
            ],
            [
              {
                "text": "mass number A = total nucleons,"
              }
            ],
            [
              {
                "text": "neutron number N = A - Z."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not confuse atomic number with atomic mass, and do not treat the mass number as the measured mass in atomic-mass units."
            }
          ]
        }
      ]
    },
    {
      "id": "nuclei-c2",
      "title": "2. Nuclear size",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A common empirical relation is: R = R_0 A^(1/3), with R_0 of order 1.2 fm in the standard school-level model."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The relation is a nuclear-radius model, not a statement that all nuclei have a sharp classical surface. For NEET reasoning, its important consequence is that nuclear volume scales roughly with A, consistent with approximately similar average nuclear density."
            }
          ]
        }
      ]
    },
    {
      "id": "nuclei-c3",
      "title": "3. Mass bookkeeping",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Mass defect calculations are a frequent source of silent errors because two consistent conventions are possible."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Using nuclear masses: Δm = Z m_p + N m_n - M_nucleus."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Using atomic masses: Δm = Z m_H + N m_n - M_atom, where hydrogen-atom mass is used so the electron masses are handled consistently in the simplified atomic-mass bookkeeping."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Do not mix proton mass with atomic mass data without accounting for electrons."
            }
          ]
        }
      ]
    },
    {
      "id": "nuclei-c4",
      "title": "4. Binding energy",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Binding energy is the energy associated with the mass defect: B = Δm c^2."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If Δm is in atomic-mass units, the practical conversion is approximately: B(MeV) = Δm(u) x 931.5 MeV/u."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Binding energy per nucleon is: B/A."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A larger B/A within the school-level comparison indicates more binding per nucleon, but avoid reducing all nuclear stability questions to one simplistic rule without checking the actual context."
            }
          ]
        }
      ]
    },
    {
      "id": "nuclei-c5",
      "title": "5. Fission and fusion",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The binding-energy-per-nucleon trend helps explain energy release:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "very heavy nuclei can move toward more tightly bound products through fission;"
              }
            ],
            [
              {
                "text": "light nuclei can move toward more tightly bound products through fusion."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Keep the page at exam-concept depth. Do not add reactor operating procedures, weapon design or engineering detail."
            }
          ]
        }
      ]
    },
    {
      "id": "nuclei-c6",
      "title": "6. Current-scope exclusion",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Older materials may place radioactivity, decay constant and half-life under \"Nuclei.\" The official 2026 Unit 18 wording verified for this package does not explicitly list those topics. Rank Sarthi therefore does not publish their formula set as current-core content here unless a later official source changes the syllabus."
            }
          ]
        }
      ]
    },
    {
      "id": "nuclei-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": true,
          "items": [
            [
              {
                "text": "Mass-bookkeeping chooser: asks whether the supplied mass is atomic or nuclear before displaying the correct mass-defect form."
              }
            ],
            [
              {
                "text": "Binding-energy-per-nucleon curve explainer: qualitative zones for light/intermediate/heavy nuclei and direction of energy-releasing processes."
              }
            ],
            [
              {
                "text": "2026 scope correction card: \"Radioactivity/decay law/half-life not explicit in verified Unit 18\" to prevent stale-content inheritance."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
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
    "title": "NEET Nuclei: Mass Defect, Binding Energy, Fission & Fusion | Rank Sarthi",
    "description": "Learn current NEET Nuclei scope: nuclear size, mass defect, binding energy, binding energy per nucleon, fission and fusion, with correct mass bookkeeping.",
    "ogTitle": "NEET Nuclei: Mass Defect, Binding Energy, Fission & Fusion | Rank Sarthi",
    "ogDescription": "Learn current NEET Nuclei scope: nuclear size, mass defect, binding energy, binding energy per nucleon, fission and fusion, with correct mass bookkeeping.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "nuclei-f1",
      "expression": "counts, dimensionless",
      "meaning": "N = A - Z",
      "variables": [],
      "useWhen": "Nuclear composition",
      "accessibleText": "N = A - Z: counts, dimensionless. Nuclear composition"
    },
    {
      "id": "nuclei-f2",
      "expression": "R m/fm; R0 about 1.2 fm",
      "meaning": "R = R_0 A^(1/3)",
      "variables": [],
      "useWhen": "Empirical nuclear-radius scaling",
      "accessibleText": "R = R_0 A^(1/3): R m/fm; R0 about 1.2 fm. Empirical nuclear-radius scaling"
    },
    {
      "id": "nuclei-f3",
      "expression": "masses kg/u",
      "meaning": "Δm = Zm_p + Nm_n - M_nucleus",
      "variables": [],
      "useWhen": "When nuclear masses are consistently used",
      "accessibleText": "Δm = Zm_p + Nm_n - M_nucleus: masses kg/u. When nuclear masses are consistently used"
    },
    {
      "id": "nuclei-f4",
      "expression": "masses u",
      "meaning": "Δm = Zm_H + Nm_n - M_atom",
      "variables": [],
      "useWhen": "Convenient atomic-mass bookkeeping",
      "accessibleText": "Δm = Zm_H + Nm_n - M_atom: masses u. Convenient atomic-mass bookkeeping"
    },
    {
      "id": "nuclei-f5",
      "expression": "J if SI",
      "meaning": "B = Δm c^2",
      "variables": [],
      "useWhen": "Mass-energy binding relation",
      "accessibleText": "B = Δm c^2: J if SI. Mass-energy binding relation"
    },
    {
      "id": "nuclei-f6",
      "expression": "MeV",
      "meaning": "B(MeV) = Δm(u) x 931.5",
      "variables": [],
      "useWhen": "u-to-energy conversion",
      "accessibleText": "B(MeV) = Δm(u) x 931.5: MeV. u-to-energy conversion"
    },
    {
      "id": "nuclei-f7",
      "expression": "MeV per nucleon",
      "meaning": "B/A",
      "variables": [],
      "useWhen": "Comparative binding measure",
      "accessibleText": "B/A: MeV per nucleon. Comparative binding measure"
    }
  ],
  "mistakes": [
    {
      "id": "nuclei-m1",
      "mistake": "Mixes atomic and nuclear mass conventions",
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
              "text": "Choose one bookkeeping convention before calculating."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "nuclei-m2",
      "mistake": "Forgets N = A - Z",
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
              "text": "Retrieve nuclide notation first."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "nuclei-m3",
      "mistake": "Uses u directly in Δmc^2 without a valid conversion path",
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
              "text": "Use SI consistently or 931.5 MeV/u."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "nuclei-m4",
      "mistake": "Uses atomic-spectrum equations for nuclear binding",
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
              "text": "Identify nuclear mass-energy phenomenon."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "nuclei-m5",
      "mistake": "Old source includes decay/half-life as current 2026 core",
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
              "text": "Verify against live official Unit 18 before publication."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "nuclei-w1",
      "prompt": "A consistent mass calculation gives Δm = 0.0100 u.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: converting mass defect to binding energy."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: A consistent mass calculation gives Δm = 0.0100 u."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: Use the atomic-mass-unit energy conversion."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: B = 0.0100 x 931.5 MeV = 9.315 MeV."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: Δm is positive as separated constituents exceed bound-system mass in this bookkeeping. The conversion carries MeV/u, leaving MeV."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Execution Error if the conversion/unit is dropped; Knowledge Gap if mass defect is formed from inconsistent mass conventions."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is mass defect?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It is the difference between the mass sum of the separated constituents and the bound system, calculated using a consistent atomic- or nuclear-mass convention."
            }
          ]
        }
      ]
    },
    {
      "question": "How is binding energy calculated from mass defect?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "B = Δm c^2; if Δm is in u, approximately B(MeV) = Δm(u) x 931.5."
            }
          ]
        }
      ]
    },
    {
      "question": "Are radioactive decay and half-life explicit in the verified NEET UG 2026 Unit 18?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "They are not explicitly listed in the official wording used by this package, so they are not treated as current-core blocks here."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Semiconductor Electronics",
      "url": "/neet/physics/semiconductor-electronics",
      "relation": "forward"
    }
  ]
};
