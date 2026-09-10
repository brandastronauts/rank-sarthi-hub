import type { SubjectHubContent } from "@/content/types";

/**
 * T04 - NEET Physics subject hub, transcribed from the accepted P01/P02
 * production packages (10 September 2026). Route rows come from the accepted
 * ownership map; chapter URLs resolve through the URL registry.
 */
export const neetPhysicsHub: SubjectHubContent = {
  "url": "/neet/physics",
  "platform": "neet",
  "slug": "physics",
  "subject": "Physics",
  "exam": "NEET (UG)",
  "eyebrow": "NEET · Physics",
  "title": "NEET Physics: 29-Route Learning Map, Formula Discipline and Study Paths",
  "intent": "Own NEET Physics subject-level navigation, organize all 29 frozen routes into useful learning clusters, distinguish direct official owners from editorial umbrellas and merged routes, and route students to focused content without a weightage table.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Rank Sarthi NEET Physics organizes all 29 frozen topic routes around the official 2026 syllabus, but it does not pretend the URL list is the official unit list. Use the hub to move from physical situation to concept, model, formula, conditions, units, diagram, method choice and error diagnosis. Weightage and predicted-question claims are intentionally absent."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Mechanics: Mechanics umbrella, Units & Measurements, Kinematics, Motion in Plane, Laws of Motion, Work Energy Power, Rotational Motion, Gravitation, Gravitation 2 bridge, Properties of Matter."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Thermal Physics: Thermal Properties, Thermodynamics, Kinetic Theory."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Oscillations and Waves: Oscillations, Waves."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Electrostatics and Current Electricity: Electrostatics, Current Electricity."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Magnetism, EMI and AC: Magnetism, Electromagnetic Induction, Alternating Current."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Electromagnetic Waves: Electromagnetic Waves."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Optics: Optics unit owner, Ray Optics, Wave Optics."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Modern Physics and Electronics: Modern Physics umbrella, Dual Nature Radiation, Atoms, Nuclei, Semiconductor Electronics."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "These clusters are Rank Sarthi navigation, not official NMC wording."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Every focused page should make the reasoning chain visible:"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "physical situation -> concept -> relationship/model -> formula -> conditions -> units -> diagram -> method selection -> reasoning/application -> common error -> PI diagnosis"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The page should teach the student to ask before calculating: What system is being modeled? Which quantities are vectors? What sign convention is in use? What approximation is being made? Is the formula valid for this situation? What unit or dimensional check can catch an error?"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Mechanics and Modern Physics are editorial umbrellas. Motion in Plane, Properties of Matter, Thermal Properties, Oscillations, Waves, EMI, AC, Ray Optics, Wave Optics, Atoms and Nuclei are focused splits of combined official units. Gravitation 2 is not a second chapter; it remains a transparent bridge/review route."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Official Experimental Skills should be surfaced as a cross-cutting practice layer, for example measurement instruments under Units & Measurements, Young modulus under Properties of Matter, specific heat under Thermal Properties, pendulum under Oscillations and resonance tube under Waves. This does not create a new route."
        }
      ]
    }
  ],
  "contentStatus": "draft",
  "chips": [
    "14 current official scope routes",
    "29 registered Physics routes reconciled",
    "Draft: pending human academic review"
  ],
  "chapterMap": {
    "heading": "All 29 registered Physics routes",
    "scopeNote": "Scope labels follow the accepted route-ownership reconciliation. Current official scope means the route owns content explicit in the official NEET UG 2026 syllabus. Partial or merged official scope means the route covers part of a current unit or merges official wording. Contextual umbrella route means the route is a navigation layer, not an official heading. Not currently listed means the topic is not explicit in the current official syllabus. Duplicate-intent routes are held under route review.",
    "contextualHeading": "Contextual / historical routes",
    "contextualNote": "These routes are not current official NEET UG 2026 headings. They are preserved for context or route control only and must not be treated as current exam scope.",
    "expectedCount": 29,
    "notes": [
      {
        "url": "/neet/physics/mechanics",
        "scope": "contextual umbrella route",
        "order": 1,
        "note": "Rank Sarthi mechanics navigation umbrella over current mechanics foundations; not an official unit title."
      },
      {
        "url": "/neet/physics/thermodynamics",
        "scope": "current official scope",
        "order": 2,
        "note": "Official Unit 8: Thermodynamics."
      },
      {
        "url": "/neet/physics/optics",
        "scope": "current official scope",
        "order": 3,
        "note": "Official Unit 16: Optics. Unit-level owner; focused ray/wave routes split depth."
      },
      {
        "url": "/neet/physics/electrostatics",
        "scope": "current official scope",
        "order": 4,
        "note": "Official Unit 11: Electrostatics."
      },
      {
        "url": "/neet/physics/current-electricity",
        "scope": "current official scope",
        "order": 5,
        "note": "Official Unit 12: Current Electricity."
      },
      {
        "url": "/neet/physics/magnetism",
        "scope": "partial or merged official scope",
        "order": 6,
        "note": "Maps to official Unit 13: Magnetic Effects of Current and Magnetism."
      },
      {
        "url": "/neet/physics/modern-physics",
        "scope": "contextual umbrella route",
        "order": 7,
        "note": "Rank Sarthi umbrella over official Units 17-19."
      },
      {
        "url": "/neet/physics/waves",
        "scope": "partial or merged official scope",
        "order": 8,
        "note": "Focused child of official Unit 10: Oscillations and Waves."
      },
      {
        "url": "/neet/physics/oscillations",
        "scope": "partial or merged official scope",
        "order": 9,
        "note": "Focused child of official Unit 10: Oscillations and Waves."
      },
      {
        "url": "/neet/physics/gravitation",
        "scope": "current official scope",
        "order": 10,
        "note": "Official Unit 6: Gravitation. Canonical content owner."
      },
      {
        "url": "/neet/physics/kinematics",
        "scope": "current official scope",
        "order": 11,
        "note": "Official Unit 2: Kinematics. Unit-level owner with Motion in Plane carved out as a focused child."
      },
      {
        "url": "/neet/physics/laws-of-motion",
        "scope": "current official scope",
        "order": 12,
        "note": "Official Unit 3: Laws of Motion."
      },
      {
        "url": "/neet/physics/work-energy-power",
        "scope": "current official scope",
        "order": 13,
        "note": "Official Unit 4: Work, Energy, and Power."
      },
      {
        "url": "/neet/physics/rotational-motion",
        "scope": "current official scope",
        "order": 14,
        "note": "Official Unit 5: Rotational Motion."
      },
      {
        "url": "/neet/physics/properties-of-matter",
        "scope": "partial or merged official scope",
        "order": 15,
        "note": "Mechanical solids/fluids owner within official Unit 7: Properties of Solids and Liquids."
      },
      {
        "url": "/neet/physics/kinetic-theory",
        "scope": "current official scope",
        "order": 16,
        "note": "Official Unit 9: Kinetic Theory of Gases."
      },
      {
        "url": "/neet/physics/electromagnetic-induction",
        "scope": "partial or merged official scope",
        "order": 17,
        "note": "Focused child of official Unit 14: Electromagnetic Induction and Alternating Currents."
      },
      {
        "url": "/neet/physics/alternating-current",
        "scope": "partial or merged official scope",
        "order": 18,
        "note": "Focused child of official Unit 14: Electromagnetic Induction and Alternating Currents."
      },
      {
        "url": "/neet/physics/electromagnetic-waves",
        "scope": "current official scope",
        "order": 19,
        "note": "Official Unit 15: Electromagnetic Waves."
      },
      {
        "url": "/neet/physics/ray-optics",
        "scope": "partial or merged official scope",
        "order": 20,
        "note": "Geometrical/ray optics portion of official Unit 16: Optics."
      },
      {
        "url": "/neet/physics/wave-optics",
        "scope": "partial or merged official scope",
        "order": 21,
        "note": "Wave optics portion of official Unit 16: Optics."
      },
      {
        "url": "/neet/physics/dual-nature-radiation",
        "scope": "current official scope",
        "order": 22,
        "note": "Official Unit 17: Dual Nature of Matter and Radiation."
      },
      {
        "url": "/neet/physics/atoms",
        "scope": "partial or merged official scope",
        "order": 23,
        "note": "Focused child of official Unit 18: Atoms and Nuclei."
      },
      {
        "url": "/neet/physics/nuclei",
        "scope": "partial or merged official scope",
        "order": 24,
        "note": "Focused child of official Unit 18: Atoms and Nuclei."
      },
      {
        "url": "/neet/physics/semiconductor-electronics",
        "scope": "current official scope",
        "order": 25,
        "note": "Canonical Rank Sarthi owner for official Unit 19: Electronic Devices."
      },
      {
        "url": "/neet/physics/units-measurements",
        "scope": "current official scope",
        "order": 26,
        "note": "Official Unit 1: Physics and Measurement."
      },
      {
        "url": "/neet/physics/motion-in-plane",
        "scope": "partial or merged official scope",
        "order": 27,
        "note": "Focused child inside official Unit 2: Kinematics."
      },
      {
        "url": "/neet/physics/gravitation-2",
        "scope": "duplicate-intent route under review",
        "order": 28,
        "note": "No second official Gravitation unit or separate NCERT Gravitation chapter supports an independent near-duplicate page.",
        "contextual": true
      },
      {
        "url": "/neet/physics/thermal-properties",
        "scope": "partial or merged official scope",
        "order": 29,
        "note": "Thermal portion inside official Unit 7: Properties of Solids and Liquids."
      }
    ]
  },
  "faqs": [
    {
      "question": "How many frozen Physics topic routes does Rank Sarthi have?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Twenty-nine."
            }
          ]
        }
      ]
    },
    {
      "question": "Does the Physics hub publish chapter weightage?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It routes by official scope, concept dependency and learning intent."
            }
          ]
        }
      ]
    },
    {
      "question": "Where should heat transfer be studied?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Thermal Properties, not Thermodynamics."
            }
          ]
        }
      ]
    },
    {
      "question": "What does Gravitation 2 do?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It remains a duplicate-intent review/bridge route and does not duplicate the canonical Gravitation article."
            }
          ]
        }
      ]
    }
  ],
  "sourceRefs": [
    "ncert-exemplar-index",
    "ncert-physics-11-contents",
    "ncert-physics-12-contents",
    "nmc-neet-ug-2026-syllabus"
  ],
  "lastVerified": "10 September 2026",
  "seo": {
    "title": "NEET Physics: 29 Topics, Formulas & Learning Paths | Rank Sarthi",
    "description": "Navigate all 29 NEET Physics routes with official-scope labels, formula-condition discipline, learning clusters and error diagnosis.",
    "ogTitle": "NEET Physics: 29 Topics, Formulas & Learning Paths | Rank Sarthi",
    "ogDescription": "Navigate all 29 NEET Physics routes with official-scope labels, formula-condition discipline, learning clusters and error diagnosis.",
    "ogType": "website"
  }
};
