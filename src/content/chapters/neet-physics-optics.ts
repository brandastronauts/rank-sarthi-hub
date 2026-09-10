import type { ChapterContent } from "@/content/types";

/**
 * NEET Optics: Ray and Wave Optics Learning Map — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsOptics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Optics: Ray and Wave Optics Learning Map",
  "slug": "optics",
  "url": "/neet/physics/optics",
  "canonicalIntent": "Own Unit 16 as a current official umbrella while preventing cannibalisation between /ray-optics and /wave-optics. This page compares the models, routes the learner to the correct child and shows only summary-level equations.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Optics is official NEET UG 2026 Unit 16 and contains both geometrical/ray optics and wave optics. Rank Sarthi uses this route as the unit-level map: Ray Optics owns mirrors, refraction, lenses, TIR, prism and optical instruments; Wave Optics owns Huygens, interference, YDSE, diffraction and polarisation."
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
      "label": "NEET Physics",
      "url": "/neet/physics",
      "relation": "up"
    },
    {
      "label": "NEET Physics syllabus",
      "url": "/neet/syllabus/physics",
      "relation": "up"
    },
    {
      "label": "Waves",
      "url": "/neet/physics/waves",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Exact Unit 16 owner at umbrella/navigation level",
    "topics": [
      "Model selection is the information gain",
      "Ray branch",
      "Wave branch",
      "Practical-skill relationship",
      "No duplicate third optics article"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "optics-c1",
      "title": "1. Model selection is the information gain",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The umbrella should answer one question quickly: \"Which optics model should I use?\""
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use the ray model when the problem is about image formation, mirrors, lenses, refraction paths, TIR, prism deviation or instrument geometry. Use the wave model when the problem depends on wavefronts, coherence, phase/path difference, interference, diffraction or polarisation."
            }
          ]
        }
      ]
    },
    {
      "id": "optics-c2",
      "title": "2. Ray branch",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The ray branch includes reflection from spherical mirrors, refraction at plane/spherical surfaces, lens formula/lens maker, TIR, magnification, power/combination of lenses, prism and microscope/telescope. The child route owns signs and derivations."
            }
          ]
        }
      ]
    },
    {
      "id": "optics-c3",
      "title": "3. Wave branch",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The wave branch includes Huygens principle, reflection/refraction through Huygens reasoning, interference, YDSE/fringe width, coherent sources, single-slit diffraction/central maximum and polarisation/Brewster law. The child route owns approximation conditions."
            }
          ]
        }
      ]
    },
    {
      "id": "optics-c4",
      "title": "4. Practical-skill relationship",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The current 2026 experimental-skill list includes focal length of mirrors/lens, prism deviation and refractive index of a glass slab. Surface those as current syllabus connections, not as \"frequent questions.\""
            }
          ]
        }
      ]
    },
    {
      "id": "optics-c5",
      "title": "5. No duplicate third optics article",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This umbrella should not reproduce every formula/example from both children. A concise comparison plus a concept graph and route selector is the correct information architecture."
            }
          ]
        }
      ]
    },
    {
      "id": "optics-gain",
      "title": "6. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Ray vs wave decision tree based on task type."
              }
            ],
            [
              {
                "text": "Unit 16 ownership graph showing Optics umbrella -> Ray Optics + Wave Optics."
              }
            ],
            [
              {
                "text": "Experimental-skill link strip for focal length, prism deviation and refractive index."
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
    "title": "NEET Optics: Ray vs Wave Optics Map | Rank Sarthi",
    "description": "Navigate official NEET 2026 Optics through a ray-vs-wave decision map, then open Ray Optics or Wave Optics for the correct depth and formulas.",
    "ogTitle": "NEET Optics: Ray vs Wave Optics Map | Rank Sarthi",
    "ogDescription": "Navigate official NEET 2026 Optics through a ray-vs-wave decision map, then open Ray Optics or Wave Optics for the correct depth and formulas.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "optics-f1",
      "expression": "n = c/v",
      "meaning": "Refractive index",
      "variables": [],
      "useWhen": "Shared ray-optics foundation; child owns detailed refraction.",
      "accessibleText": "Refractive index: n = c/v. Shared ray-optics foundation; child owns detailed refraction."
    },
    {
      "id": "optics-f2",
      "expression": "n1 sin(i) = n2 sin(r)",
      "meaning": "Snell law",
      "variables": [],
      "useWhen": "Summary only; full geometry belongs to Ray Optics.",
      "accessibleText": "Snell law: n1 sin(i) = n2 sin(r). Summary only; full geometry belongs to Ray Optics."
    },
    {
      "id": "optics-f3",
      "expression": "beta = lambda D/d",
      "meaning": "YDSE fringe width",
      "variables": [],
      "useWhen": "Summary only; Wave Optics owns small-angle/far-screen conditions.",
      "accessibleText": "YDSE fringe width: beta = lambda D/d. Summary only; Wave Optics owns small-angle/far-screen conditions."
    },
    {
      "id": "optics-f4",
      "expression": "c = nu lambda",
      "meaning": "Vacuum wave relation",
      "variables": [],
      "useWhen": "Shared bridge to EM waves.",
      "accessibleText": "Vacuum wave relation: c = nu lambda. Shared bridge to EM waves."
    }
  ],
  "mistakes": [
    {
      "id": "optics-m1",
      "mistake": "Uses ray formula for interference/diffraction problem",
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
              "text": "Identify whether phase/path difference matters."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "optics-m2",
      "mistake": "Uses wave-optics approximation for mirror/lens imaging",
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
              "text": "Route to geometrical optics."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "optics-m3",
      "mistake": "Duplicates child content on umbrella",
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
              "text": "Replace with comparison/route map."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    },
    {
      "id": "optics-m4",
      "mistake": "Confuses wavelength and refractive-index relations",
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
              "text": "Rebuild medium-change model."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    }
  ],
  "workedExamples": [
    {
      "id": "optics-w1",
      "prompt": "monochromatic light passes through a narrow single slit and spreads into a central maximum with side structure.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: model selection."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: monochromatic light passes through a narrow single slit and spreads into a central maximum with side structure."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: choose Wave Optics because aperture-scale diffraction and phase superposition determine the pattern."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: a ray-only image-construction model cannot explain the spreading pattern; route to single-slit diffraction."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: no numerical units required; if later calculating, slit width and wavelength must use the same length unit."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Decision / Selection Error."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is Optics an official NEET UG 2026 Physics unit?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Yes. It is Unit 16."
            }
          ]
        }
      ]
    },
    {
      "question": "What does the Rank Sarthi Optics page own?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Unit-level orientation, model comparison and routing. Detailed ray and wave content belongs to the two child pages."
            }
          ]
        }
      ]
    },
    {
      "question": "When should I use Wave Optics?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "When coherence, phase/path difference, interference, diffraction or polarisation is central."
            }
          ]
        }
      ]
    },
    {
      "question": "When should I use Ray Optics?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For mirrors, lenses, refraction paths, TIR, prism and optical-instrument imaging."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Ray Optics",
      "url": "/neet/physics/ray-optics",
      "relation": "forward"
    },
    {
      "label": "Wave Optics",
      "url": "/neet/physics/wave-optics",
      "relation": "forward"
    }
  ]
};
