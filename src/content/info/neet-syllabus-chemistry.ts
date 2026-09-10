import type { InfoPageContent } from "@/content/types";

/**
 * NEET Chemistry syllabus and route ownership, transcribed from the accepted
 * C01 production package (10 September 2026), record C01-01.
 */
export const neetSyllabusChemistry: InfoPageContent = {
  "url": "/neet/syllabus/chemistry",
  "platform": "neet",
  "slug": "chemistry",
  "exam": "NEET (UG)",
  "title": "NEET Chemistry Syllabus 2026: Official 20 Units and Rank Sarthi Route Map",
  "eyebrow": "NEET · Syllabus · Chemistry",
  "intent": "Provide the official NEET UG 2026 Chemistry unit structure first, then map all 30 frozen Rank Sarthi Chemistry topic routes to current, split/merged, umbrella, historical, or duplicate-intent states. This page is the academic truth controller for Chemistry route labels.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The official NEET UG 2026 Chemistry syllabus contains 20 units across Physical, Inorganic and Organic Chemistry. Rank Sarthi has 30 Chemistry topic URLs for navigation and learning, but they are not the official 20-unit list. This page marks 13 routes as current official-scope owners, 8 as split/merged current-scope routes, 1 as a contextual umbrella, 7 as historical/not currently listed, and 1 as duplicate-intent review required."
        }
      ]
    }
  ],
  "contentStatus": "draft",
  "chips": [
    "Official NEET UG 2026 Chemistry units",
    "30 registered Chemistry routes reconciled",
    "No unsupported weightage"
  ],
  "blocks": [
    {
      "kind": "prose",
      "id": "chemistry-syl-p1",
      "heading": "Official 2026 Chemistry structure",
      "concepts": [
        {
          "id": "chemistry-syl-c1",
          "title": "Official 2026 Chemistry structure",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The official list is the 20-unit baseline in Section B of this package. Units 1-8 are Physical Chemistry, Units 9-12 are Inorganic Chemistry, Units 13-20 cover Organic Chemistry and practical chemistry. Rank Sarthi should reproduce the official unit wording faithfully enough to preserve scope, while explanations around the list remain original."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "chemistry-syl-p2",
      "heading": "Route status is not a popularity label",
      "concepts": [
        {
          "id": "chemistry-syl-c2",
          "title": "Route status is not a popularity label",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "CURRENT_OFFICIAL_SCOPE means the route is a suitable owner for a current official unit or topic. PARTIAL_OR_MERGED_SCOPE means the frozen URL owns a focused portion of a broader official unit or uses an editorial/NCERT name different from the official unit heading. HISTORICAL_OR_NOT_CURRENTLY_LISTED means the route remains frozen in architecture but must not inherit current-syllabus language. DUPLICATE_INTENT_REVIEW_REQUIRED means the route has no defensible separate academic intent yet."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "chemistry-syl-p3",
      "heading": "High-risk historical routes",
      "concepts": [
        {
          "id": "chemistry-syl-c3",
          "title": "High-risk historical routes",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The following dedicated chapter routes are not official 2026 Chemistry units: Solid State, Surface Chemistry, s-Block Elements, States of Matter, Environmental Chemistry, Chemistry in Everyday Life, and Polymers. Some concepts from an old chapter may still appear inside another current unit or practical chemistry. That does not restore the old chapter as a current official unit."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "chemistry-syl-p4",
      "heading": "Split current units",
      "concepts": [
        {
          "id": "chemistry-syl-c4",
          "title": "Split current units",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Unit 7 is split editorially into Redox Reactions and Electrochemistry. Unit 6 is split between the broad Equilibrium owner and the focused Ionic Equilibrium child. Unit 17 is split across Alcohols/Phenols/Ethers, Aldehydes/Ketones and Carboxylic Acids. Unit 18 is represented by Amines but the official unit also includes diazonium salts, so the route must preserve that boundary when C02 authors it."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "table",
      "id": "chemistry-route-ownership",
      "heading": "Route ownership: every registered Chemistry route",
      "columns": [
        "Route (under /neet/chemistry/)",
        "Status",
        "Official 2026 relationship",
        "Ownership boundary"
      ],
      "rows": [
        [
          "organic-​chemistry",
          "Contextual Umbrella",
          "Units 13-19",
          "Editorial umbrella over current Organic Chemistry units; C02 owns focused organic routes."
        ],
        [
          "chemical-​bonding",
          "Current Official Scope",
          "Unit 3",
          "Own the full Chemical Bonding and Molecular Structure unit despite shorter route label."
        ],
        [
          "thermodynamics",
          "Current Official Scope",
          "Unit 4",
          "Own Chemical Thermodynamics."
        ],
        [
          "equilibrium",
          "Current Official Scope",
          "Unit 6",
          "Broad owner for physical and chemical equilibrium plus the relationship to ionic equilibrium."
        ],
        [
          "atomic-​structure",
          "Current Official Scope",
          "Unit 2",
          "Canonical content owner for official Atomic Structure."
        ],
        [
          "chemical-​kinetics",
          "Current Official Scope",
          "Unit 8",
          "Own Chemical Kinetics."
        ],
        [
          "electrochemistry",
          "Partial Or Merged Scope",
          "Unit 7",
          "Focused split of Redox Reactions and Electrochemistry; owns electrochemical portion only."
        ],
        [
          "coordination-​compounds",
          "Current Official Scope",
          "Unit 12",
          "Own Co-ordination Compounds."
        ],
        [
          "p-​block-​elements",
          "Current Official Scope",
          "Unit 10",
          "Own the current general Group 13-18 trends scope, not encyclopaedic compound chemistry."
        ],
        [
          "d-​and-​f-​block-​elements",
          "Current Official Scope",
          "Unit 11",
          "Own first-row transition trends, K2Cr2O7, KMnO4, lanthanoids and actinoids at current depth."
        ],
        [
          "hydrocarbons",
          "Current Official Scope",
          "Unit 15",
          "Current official Organic Chemistry unit; C02 content owner."
        ],
        [
          "haloalkanes-​haloarenes",
          "Partial Or Merged Scope",
          "Unit 16",
          "Editorial/NCERT naming for the current unit Organic Compounds Containing Halogens."
        ],
        [
          "alcohols-​phenols-​ethers",
          "Partial Or Merged Scope",
          "Unit 17",
          "Focused split of Organic Compounds Containing Oxygen."
        ],
        [
          "aldehydes-​ketones",
          "Partial Or Merged Scope",
          "Unit 17",
          "Focused split of Organic Compounds Containing Oxygen."
        ],
        [
          "carboxylic-​acids",
          "Partial Or Merged Scope",
          "Unit 17",
          "Focused split of Organic Compounds Containing Oxygen."
        ],
        [
          "amines",
          "Partial Or Merged Scope",
          "Unit 18",
          "Focused route within Organic Compounds Containing Nitrogen; unit also includes diazonium salts."
        ],
        [
          "biomolecules",
          "Current Official Scope",
          "Unit 19",
          "Own Biomolecules; C02 content owner."
        ],
        [
          "polymers",
          "Historical Or Not Currently Listed",
          "Not a 2026 Chemistry unit",
          "Dedicated Polymers unit is not listed in the official 2026 Chemistry syllabus."
        ],
        [
          "solutions",
          "Current Official Scope",
          "Unit 5",
          "Own Solutions."
        ],
        [
          "solid-​state",
          "Historical Or Not Currently Listed",
          "Not a 2026 Chemistry unit",
          "Dedicated Solid State unit is not listed in the official 2026 Chemistry syllabus."
        ],
        [
          "surface-​chemistry",
          "Historical Or Not Currently Listed",
          "Not a 2026 Chemistry unit",
          "Dedicated Surface Chemistry unit is not listed; practical Unit 20 still mentions sol preparation."
        ],
        [
          "redox-​reactions",
          "Partial Or Merged Scope",
          "Unit 7",
          "Focused split of Redox Reactions and Electrochemistry; owns oxidation/reduction and balancing."
        ],
        [
          "s-​block-​elements",
          "Historical Or Not Currently Listed",
          "Not a dedicated 2026 Chemistry unit",
          "s-block appears as a periodic-table block in Unit 9, but dedicated s-block chemistry is not listed."
        ],
        [
          "states-​of-​matter",
          "Historical Or Not Currently Listed",
          "Not a 2026 Chemistry unit",
          "Dedicated States of Matter unit is not listed in the official 2026 Chemistry syllabus."
        ],
        [
          "periodic-​classification",
          "Current Official Scope",
          "Unit 9",
          "Editorial short name for Classification of Elements and Periodicity in Properties."
        ],
        [
          "some-​basic-​concepts",
          "Current Official Scope",
          "Unit 1",
          "Own Some Basic Concepts in Chemistry."
        ],
        [
          "ionic-​equilibrium",
          "Partial Or Merged Scope",
          "Unit 6",
          "Focused child of Equilibrium for acid-base, buffer, hydrolysis and solubility depth."
        ],
        [
          "environmental-​chemistry",
          "Historical Or Not Currently Listed",
          "Not a 2026 Chemistry unit",
          "Dedicated Environmental Chemistry unit is not listed; specific environmental effects may occur inside current organic scope."
        ],
        [
          "chemistry-​everyday-​life",
          "Historical Or Not Currently Listed",
          "Not a 2026 Chemistry unit",
          "Dedicated Chemistry in Everyday Life unit is not listed in the official 2026 Chemistry syllabus."
        ],
        [
          "structure-​of-​atom",
          "Duplicate Intent Review Required",
          "Overlaps Unit 2",
          "Frozen architecture supplies no distinct intent from Atomic Structure. No second near-identical article is authored."
        ]
      ],
      "note": "Statuses are editorial classifications against the official 2026 syllabus, not replacements for official wording."
    }
  ],
  "faqs": [
    {
      "question": "How many official Chemistry units are in NEET UG 2026?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Twenty."
            }
          ]
        }
      ]
    },
    {
      "question": "Does Rank Sarthi have 30 official Chemistry units?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. Rank Sarthi has 30 frozen topic routes for navigation; the official syllabus has 20 units."
            }
          ]
        }
      ]
    },
    {
      "question": "Is Solid State a dedicated NEET UG 2026 Chemistry unit?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. The frozen route is preserved but the dedicated unit is not listed in the official 2026 Chemistry syllabus."
            }
          ]
        }
      ]
    },
    {
      "question": "Why are Redox Reactions and Electrochemistry separate routes?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "They are focused editorial owners of two parts of official Unit 7."
            }
          ]
        }
      ]
    }
  ],
  "sourceRefs": [
    "ncert-chemistry-11-contents",
    "ncert-chemistry-12-contents",
    "nmc-neet-ug-2026-syllabus",
    "nta-neet-documents",
    "nta-neet-portal"
  ],
  "sourceNote": "Official scope is taken from the NEET (UG) 2026 syllabus and official NTA documents; concept structure follows current NCERT contents.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible"
  ],
  "lastVerified": "10 September 2026",
  "seo": {
    "title": "NEET Chemistry Syllabus 2026: 20 Official Units & Route Map | Rank Sarthi",
    "description": "View the official 20-unit NEET UG 2026 Chemistry syllabus and see how all 30 Rank Sarthi Chemistry routes map to current, split, historical or duplicate-intent states.",
    "ogTitle": "NEET Chemistry Syllabus 2026: 20 Official Units & Route Map | Rank Sarthi",
    "ogDescription": "View the official 20-unit NEET UG 2026 Chemistry syllabus and see how all 30 Rank Sarthi Chemistry routes map to current, split, historical or duplicate-intent states.",
    "ogType": "website"
  }
};
