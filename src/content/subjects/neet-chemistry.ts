import type { SubjectHubContent } from "@/content/types";

/**
 * T04 - NEET Chemistry subject hub, transcribed from the accepted C01/C02
 * production packages (10 September 2026). Route rows come from the accepted
 * ownership map; chapter URLs resolve through the URL registry.
 */
export const neetChemistryHub: SubjectHubContent = {
  "url": "/neet/chemistry",
  "platform": "neet",
  "slug": "chemistry",
  "subject": "Chemistry",
  "exam": "NEET (UG)",
  "eyebrow": "NEET · Chemistry",
  "title": "NEET Chemistry: Physical, Inorganic and Organic Learning Paths",
  "intent": "Create the complete Chemistry preparation/navigation hub for all 30 frozen routes, grouped into useful editorial clusters while keeping official-syllabus truth separate from Rank Sarthi navigation.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Rank Sarthi Chemistry organizes the official NEET UG 2026 syllabus into practical learning routes for Physical, Inorganic and Organic Chemistry. The hub accounts for all 30 frozen Chemistry URLs, but it does not present all 30 as official syllabus units. Current routes are prioritised for learning, historical routes are visibly labelled, and duplicate intent is not allowed to create two Atomic Structure articles."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Primary current/focused routes: Some Basic Concepts, Atomic Structure, Thermodynamics, Solutions, Equilibrium, Ionic Equilibrium, Redox Reactions, Electrochemistry and Chemical Kinetics. Structure of Atom is shown as a duplicate-intent control linked to the Atomic Structure owner. Historical dedicated routes for States of Matter, Solid State and Surface Chemistry remain separately labelled and do not inherit current-syllabus status."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Chemical Bonding acts as the bonding foundation; Periodic Classification owns periodic trends; P-Block Elements owns current Groups 13-18 general trends; d- and f-Block Elements owns the current transition/inner-transition scope; Coordination Compounds owns the coordination unit. The old dedicated s-Block route is historical/not currently listed as a standalone unit."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The organic-chemistry route is a contextual umbrella for the current official Organic Chemistry units. Focused C02 routes include Hydrocarbons, Haloalkanes/Haloarenes, Alcohols/Phenols/Ethers, Aldehydes/Ketones, Carboxylic Acids, Amines and Biomolecules. Polymers, Environmental Chemistry and Chemistry in Everyday Life are retained as historical/contextual architecture only. C01 does not author those C02 pages."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "For numerical chapters, students should identify the chemical quantity/state, choose the relationship, state the equation and conditions, carry units through the calculation, then run a physical/chemical sanity check. For Inorganic Chemistry, students should begin with electronic structure and periodicity, then connect to property, trend, exception, compound behavior and precision recall."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The hub may show dependency order and current-scope status. It must not show unsupported weightage, \"most important\" labels, predicted question counts or fake PYQ frequencies."
        }
      ]
    }
  ],
  "contentStatus": "draft",
  "chips": [
    "13 current official scope routes",
    "30 registered Chemistry routes reconciled",
    "Draft: pending human academic review"
  ],
  "chapterMap": {
    "heading": "All 30 registered Chemistry routes",
    "scopeNote": "Scope labels follow the accepted route-ownership reconciliation. Current official scope means the route owns content explicit in the official NEET UG 2026 syllabus. Partial or merged official scope means the route covers part of a current unit or merges official wording. Contextual umbrella route means the route is a navigation layer, not an official heading. Not currently listed means the topic is not explicit in the current official syllabus. Duplicate-intent routes are held under route review.",
    "contextualHeading": "Contextual / historical routes",
    "contextualNote": "These routes are not current official NEET UG 2026 headings. They are preserved for context or route control only and must not be treated as current exam scope.",
    "expectedCount": 30,
    "notes": [
      {
        "url": "/neet/chemistry/organic-chemistry",
        "scope": "contextual umbrella route",
        "order": 1,
        "note": "Units 13-19. Editorial umbrella over current Organic Chemistry units; C02 owns focused organic routes."
      },
      {
        "url": "/neet/chemistry/chemical-bonding",
        "scope": "current official scope",
        "order": 2,
        "note": "Unit 3. Own the full Chemical Bonding and Molecular Structure unit despite shorter route label."
      },
      {
        "url": "/neet/chemistry/thermodynamics",
        "scope": "current official scope",
        "order": 3,
        "note": "Unit 4. Own Chemical Thermodynamics."
      },
      {
        "url": "/neet/chemistry/equilibrium",
        "scope": "current official scope",
        "order": 4,
        "note": "Unit 6. Broad owner for physical and chemical equilibrium plus the relationship to ionic equilibrium."
      },
      {
        "url": "/neet/chemistry/atomic-structure",
        "scope": "current official scope",
        "order": 5,
        "note": "Unit 2. Canonical content owner for official Atomic Structure."
      },
      {
        "url": "/neet/chemistry/chemical-kinetics",
        "scope": "current official scope",
        "order": 6,
        "note": "Unit 8. Own Chemical Kinetics."
      },
      {
        "url": "/neet/chemistry/electrochemistry",
        "scope": "partial or merged official scope",
        "order": 7,
        "note": "Unit 7. Focused split of Redox Reactions and Electrochemistry; owns electrochemical portion only."
      },
      {
        "url": "/neet/chemistry/coordination-compounds",
        "scope": "current official scope",
        "order": 8,
        "note": "Unit 12. Own Co-ordination Compounds."
      },
      {
        "url": "/neet/chemistry/p-block-elements",
        "scope": "current official scope",
        "order": 9,
        "note": "Unit 10. Own the current general Group 13-18 trends scope, not encyclopaedic compound chemistry."
      },
      {
        "url": "/neet/chemistry/d-and-f-block-elements",
        "scope": "current official scope",
        "order": 10,
        "note": "Unit 11. Own first-row transition trends, K2Cr2O7, KMnO4, lanthanoids and actinoids at current depth."
      },
      {
        "url": "/neet/chemistry/hydrocarbons",
        "scope": "current official scope",
        "order": 11,
        "note": "Unit 15. Current official Organic Chemistry unit; C02 content owner."
      },
      {
        "url": "/neet/chemistry/haloalkanes-haloarenes",
        "scope": "partial or merged official scope",
        "order": 12,
        "note": "Unit 16. Editorial/NCERT naming for the current unit Organic Compounds Containing Halogens."
      },
      {
        "url": "/neet/chemistry/alcohols-phenols-ethers",
        "scope": "partial or merged official scope",
        "order": 13,
        "note": "Unit 17. Focused split of Organic Compounds Containing Oxygen."
      },
      {
        "url": "/neet/chemistry/aldehydes-ketones",
        "scope": "partial or merged official scope",
        "order": 14,
        "note": "Unit 17. Focused split of Organic Compounds Containing Oxygen."
      },
      {
        "url": "/neet/chemistry/carboxylic-acids",
        "scope": "partial or merged official scope",
        "order": 15,
        "note": "Unit 17. Focused split of Organic Compounds Containing Oxygen."
      },
      {
        "url": "/neet/chemistry/amines",
        "scope": "partial or merged official scope",
        "order": 16,
        "note": "Unit 18. Focused route within Organic Compounds Containing Nitrogen; unit also includes diazonium salts."
      },
      {
        "url": "/neet/chemistry/biomolecules",
        "scope": "current official scope",
        "order": 17,
        "note": "Unit 19. Own Biomolecules; C02 content owner."
      },
      {
        "url": "/neet/chemistry/polymers",
        "scope": "not currently listed",
        "order": 18,
        "note": "Not a 2026 Chemistry unit. Dedicated Polymers unit is not listed in the official 2026 Chemistry syllabus.",
        "contextual": true
      },
      {
        "url": "/neet/chemistry/solutions",
        "scope": "current official scope",
        "order": 19,
        "note": "Unit 5. Own Solutions."
      },
      {
        "url": "/neet/chemistry/solid-state",
        "scope": "not currently listed",
        "order": 20,
        "note": "Not a 2026 Chemistry unit. Dedicated Solid State unit is not listed in the official 2026 Chemistry syllabus.",
        "contextual": true
      },
      {
        "url": "/neet/chemistry/surface-chemistry",
        "scope": "not currently listed",
        "order": 21,
        "note": "Not a 2026 Chemistry unit. Dedicated Surface Chemistry unit is not listed; practical Unit 20 still mentions sol preparation.",
        "contextual": true
      },
      {
        "url": "/neet/chemistry/redox-reactions",
        "scope": "partial or merged official scope",
        "order": 22,
        "note": "Unit 7. Focused split of Redox Reactions and Electrochemistry; owns oxidation/reduction and balancing."
      },
      {
        "url": "/neet/chemistry/s-block-elements",
        "scope": "not currently listed",
        "order": 23,
        "note": "Not a dedicated 2026 Chemistry unit. s-block appears as a periodic-table block in Unit 9, but dedicated s-block chemistry is not listed.",
        "contextual": true
      },
      {
        "url": "/neet/chemistry/states-of-matter",
        "scope": "not currently listed",
        "order": 24,
        "note": "Not a 2026 Chemistry unit. Dedicated States of Matter unit is not listed in the official 2026 Chemistry syllabus.",
        "contextual": true
      },
      {
        "url": "/neet/chemistry/periodic-classification",
        "scope": "current official scope",
        "order": 25,
        "note": "Unit 9. Editorial short name for Classification of Elements and Periodicity in Properties."
      },
      {
        "url": "/neet/chemistry/some-basic-concepts",
        "scope": "current official scope",
        "order": 26,
        "note": "Unit 1. Own Some Basic Concepts in Chemistry."
      },
      {
        "url": "/neet/chemistry/ionic-equilibrium",
        "scope": "partial or merged official scope",
        "order": 27,
        "note": "Unit 6. Focused child of Equilibrium for acid-base, buffer, hydrolysis and solubility depth."
      },
      {
        "url": "/neet/chemistry/environmental-chemistry",
        "scope": "not currently listed",
        "order": 28,
        "note": "Not a 2026 Chemistry unit. Dedicated Environmental Chemistry unit is not listed; specific environmental effects may occur inside current organic scope.",
        "contextual": true
      },
      {
        "url": "/neet/chemistry/chemistry-everyday-life",
        "scope": "not currently listed",
        "order": 29,
        "note": "Not a 2026 Chemistry unit. Dedicated Chemistry in Everyday Life unit is not listed in the official 2026 Chemistry syllabus.",
        "contextual": true
      },
      {
        "url": "/neet/chemistry/structure-of-atom",
        "scope": "duplicate-intent route under review",
        "order": 30,
        "note": "Overlaps Unit 2. Frozen architecture supplies no distinct intent from Atomic Structure. No second near-identical article is authored.",
        "contextual": true
      }
    ]
  },
  "faqs": [
    {
      "question": "How is NEET Chemistry organised on Rank Sarthi?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Into Physical, Inorganic and Organic learning clusters, with separate current-scope labels for every frozen route."
            }
          ]
        }
      ]
    },
    {
      "question": "Are all 30 Chemistry routes current NEET units?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. They include current owners, focused splits, a contextual umbrella, historical routes and one duplicate-intent route."
            }
          ]
        }
      ]
    },
    {
      "question": "Does Rank Sarthi publish official Chemistry weightage?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No unsupported weightage is published. The hub uses syllabus scope and dependency logic instead."
            }
          ]
        }
      ]
    }
  ],
  "sourceRefs": [
    "ncert-chemistry-11-contents",
    "ncert-chemistry-12-contents",
    "ncert-exemplar-index",
    "nmc-neet-ug-2026-syllabus"
  ],
  "lastVerified": "10 September 2026",
  "seo": {
    "title": "NEET Chemistry: Physical, Inorganic & Organic Chapters | Rank Sarthi",
    "description": "Navigate NEET Chemistry through current Physical, Inorganic and Organic learning routes, with clear syllabus-status labels across all 30 frozen Chemistry URLs.",
    "ogTitle": "NEET Chemistry: Physical, Inorganic & Organic Chapters | Rank Sarthi",
    "ogDescription": "Navigate NEET Chemistry through current Physical, Inorganic and Organic learning routes, with clear syllabus-status labels across all 30 frozen Chemistry URLs.",
    "ogType": "website"
  }
};
