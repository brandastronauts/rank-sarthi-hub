import type { ChapterContent } from "@/content/types";

/**
 * Chemical Bonding for NEET: VSEPR, Hybridisation, MOT and Hydrogen Bonding — NEET Chemistry (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetChemistryChemicalBonding: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Chemistry",
  "subjectSlug": "chemistry",
  "chapter": "Chemical Bonding for NEET: VSEPR, Hybridisation, MOT and Hydrogen Bonding",
  "slug": "chemical-bonding",
  "url": "/neet/chemistry/chemical-bonding",
  "canonicalIntent": "Own official Unit 3: ionic/covalent bonding, energetic and polarity ideas at required depth, Fajan considerations, VSEPR geometry, valence-bond/hybridisation, resonance, molecular orbital theory, metallic bonding and hydrogen bonding.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Chemical bonding questions are solved by selecting the right model. Use ionic/electrostatic and lattice ideas for ionic solids, Lewis/VSEPR/hybridisation for local geometry, resonance when one Lewis structure is insufficient, and molecular orbital theory when bond order or magnetism requires a delocalised orbital picture."
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
      "label": "Atomic Structure",
      "url": "/neet/chemistry/atomic-structure",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Current official NEET UG 2026 scope",
    "topics": [
      "Ionic and covalent models",
      "Geometry through electron domains",
      "Resonance",
      "Molecular orbital theory",
      "Hydrogen bonding"
    ],
    "syllabusUrl": "/neet/syllabus/chemistry"
  },
  "conceptBlocks": [
    {
      "id": "chemical-bonding-c1",
      "title": "1. Ionic and covalent models",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Ionic bonding is dominated by electrostatic attraction between oppositely charged ions, while covalent bonding shares electron density between atoms. Real bonds can show mixed character. Polarising power and polarisability help explain why some nominally ionic combinations show increased covalent character."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-bonding-c2",
      "title": "2. Geometry through electron domains",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "VSEPR starts from electron-domain repulsions around the central atom. Electron-domain geometry and observed molecular shape are not always identical because lone pairs occupy domains but are not named as bonded atoms in the molecular shape."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Useful idealised baselines:"
            }
          ]
        },
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "2 domains: linear, about 180 degrees, often associated with sp;"
              }
            ],
            [
              {
                "text": "3 domains: trigonal planar, about 120 degrees, often sp2;"
              }
            ],
            [
              {
                "text": "4 domains: tetrahedral electron-domain geometry, about 109.5 degrees, often sp3."
              }
            ]
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Lone pairs and multiple-bond domain effects can modify bond angles, so ideal angles are reference values, not universal exact results."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-bonding-c3",
      "title": "3. Resonance",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When equivalent or important Lewis contributors differ only in electron placement, the actual electronic structure is represented by a resonance hybrid rather than rapid switching between discrete structures. Atom positions remain fixed between valid resonance contributors."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-bonding-c4",
      "title": "4. Molecular orbital theory",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "MOT combines atomic orbitals into bonding and antibonding molecular orbitals. Bond order is 1/2(N_b - N_a). Higher positive bond order generally indicates stronger bonding within a comparable series. Unpaired electrons in occupied molecular orbitals imply paramagnetism."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-bonding-c5",
      "title": "5. Hydrogen bonding",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Hydrogen bonding requires the appropriate strongly polar X-H donor and an electron-rich acceptor environment, most commonly involving N, O or F in standard NEET chemistry. Intermolecular and intramolecular hydrogen bonding can affect boiling point, solubility and molecular conformation differently."
            }
          ]
        }
      ]
    },
    {
      "id": "chemical-bonding-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Bonding Model Selector: question asks geometry -> VSEPR/hybridisation; bond order/magnetism -> MOT; polarity -> geometry plus bond dipoles; ionic character -> polarisation/energetic context."
              }
            ],
            [
              {
                "text": "Electron-Domain Geometry Matrix: domains, lone pairs, electron geometry, molecular shape and angle caveat stored separately."
              }
            ],
            [
              {
                "text": "MOT Magnetism Check: fill orbitals -> count bonding/antibonding -> bond order -> count unpaired electrons."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Periodic Classification",
      "url": "/neet/chemistry/periodic-classification",
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
    "title": "Chemical Bonding for NEET: VSEPR, Hybridisation & MOT | Rank Sarthi",
    "description": "Learn NEET Chemical Bonding with VSEPR geometry, hybridisation, resonance, polarity, molecular orbital bond order, magnetism and hydrogen bonding.",
    "ogTitle": "Chemical Bonding for NEET: VSEPR, Hybridisation & MOT | Rank Sarthi",
    "ogDescription": "Learn NEET Chemical Bonding with VSEPR geometry, hybridisation, resonance, polarity, molecular orbital bond order, magnetism and hydrogen bonding.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "chemical-bonding-f1",
      "expression": "Charge separation; molecular dipoles combine vectorially",
      "meaning": "Dipole moment mu = q r vector concept",
      "variables": [],
      "useWhen": "Calling a molecule polar because each bond is polar without considering geometry.",
      "accessibleText": "Dipole moment mu = q r vector concept: Charge separation; molecular dipoles combine vectorially. Calling a molecule polar because each bond is polar without considering geometry."
    },
    {
      "id": "chemical-bonding-f2",
      "expression": "Count sigma-bond directions and lone-pair domains; multiple bond is one direction domain",
      "meaning": "VSEPR domain count",
      "variables": [],
      "useWhen": "Equating electron geometry with molecular shape.",
      "accessibleText": "VSEPR domain count: Count sigma-bond directions and lone-pair domains; multiple bond is one direction domain. Equating electron geometry with molecular shape."
    },
    {
      "id": "chemical-bonding-f3",
      "expression": "MOT electron occupancy known",
      "meaning": "bond order = (N_b-N_a)/2",
      "variables": [],
      "useWhen": "Counting atomic electrons without filling the correct MO sequence.",
      "accessibleText": "bond order = (N_b-N_a)/2: MOT electron occupancy known. Counting atomic electrons without filling the correct MO sequence."
    },
    {
      "id": "chemical-bonding-f4",
      "expression": "Ideal two-domain reference",
      "meaning": "sp -> linear 180 deg",
      "variables": [],
      "useWhen": "Applying to a species with different electron-domain count.",
      "accessibleText": "sp -> linear 180 deg: Ideal two-domain reference. Applying to a species with different electron-domain count."
    },
    {
      "id": "chemical-bonding-f5",
      "expression": "Ideal three-domain reference",
      "meaning": "sp2 -> trigonal planar 120 deg",
      "variables": [],
      "useWhen": "Ignoring lone pairs.",
      "accessibleText": "sp2 -> trigonal planar 120 deg: Ideal three-domain reference. Ignoring lone pairs."
    },
    {
      "id": "chemical-bonding-f6",
      "expression": "Ideal four-domain electron geometry",
      "meaning": "sp3 -> tetrahedral 109.5 deg",
      "variables": [],
      "useWhen": "Calling NH3 tetrahedral molecular shape.",
      "accessibleText": "sp3 -> tetrahedral 109.5 deg: Ideal four-domain electron geometry. Calling NH3 tetrahedral molecular shape."
    }
  ],
  "mistakes": [
    {
      "id": "chemical-bonding-m1",
      "mistake": "Cannot distinguish electron geometry from molecular shape",
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
              "text": "Count all domains, then hide lone-pair positions for shape name."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "chemical-bonding-m2",
      "mistake": "Forgets ideal VSEPR baselines",
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
              "text": "Retrieve domain count with shape/angle condition."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "chemical-bonding-m3",
      "mistake": "Adds bond dipoles arithmetically instead of vectorially",
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
              "text": "Use molecular geometry before deciding polarity."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "chemical-bonding-m4",
      "mistake": "Uses hybridisation to answer O2 magnetism",
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
              "text": "Select MOT for bond order/magnetism."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "chemical-bonding-m5",
      "mistake": "MO ordering or a special species is uncertain",
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
              "text": "Use NCERT/SME source rather than extrapolating."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "chemical-bonding-w1",
      "prompt": "In the simple molecular-orbital description of O2, the occupied antibonding pi* orbitals contain two unpaired electrons. If the total bonding-electron count is 10 and antibonding count is 6, find bond order and magnetic behaviour.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Original NEET-style item: In the simple molecular-orbital description of O2, the occupied antibonding pi* orbitals contain two unpaired electrons. If the total bonding-electron count is 10 and antibonding count is 6, find bond order and magnetic behaviour."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning: bond order = (10-6)/2 = 2. The two unpaired electrons make O2 paramagnetic. The magnetic conclusion cannot be obtained correctly from a simple Lewis structure alone, which is why MOT is the right model."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is electron-pair geometry the same as molecular shape?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Not always. Lone pairs contribute to electron-domain geometry but are omitted from the molecular-shape name."
            }
          ]
        }
      ]
    },
    {
      "question": "What is the molecular-orbital bond-order formula?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "bond order = (bonding electrons - antibonding electrons)/2."
            }
          ]
        }
      ]
    },
    {
      "question": "Why can a molecule with polar bonds be nonpolar?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Bond dipoles are vectors; a symmetric molecular geometry can cancel them."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "P Block Elements",
      "url": "/neet/chemistry/p-block-elements",
      "relation": "forward"
    },
    {
      "label": "D and F Block Elements",
      "url": "/neet/chemistry/d-and-f-block-elements",
      "relation": "forward"
    },
    {
      "label": "Coordination Compounds",
      "url": "/neet/chemistry/coordination-compounds",
      "relation": "forward"
    }
  ]
};
