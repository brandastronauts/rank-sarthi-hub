import type { ChapterContent } from "@/content/types";

/**
 * NEET Ray Optics: Mirrors, Lenses, TIR, Prism and Instruments — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsRayOptics: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Ray Optics: Mirrors, Lenses, TIR, Prism and Instruments",
  "slug": "ray-optics",
  "url": "/neet/physics/ray-optics",
  "canonicalIntent": "Own the geometrical-optics half of Unit 16 with strict New Cartesian sign conventions and model conditions. It covers reflection, spherical mirrors, refraction at plane/spherical surfaces, lenses/lens maker, TIR, magnification/power, lens combinations, prism and microscope/telescope.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Ray Optics in NEET UG 2026 covers reflection and refraction, spherical mirrors, plane/spherical refracting surfaces, thin lenses and lens maker, total internal reflection, magnification, lens power/combinations, prism and optical instruments. Mirror/lens equations are only safe when the chosen New Cartesian sign convention is stated and applied consistently."
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
      "label": "Optics",
      "url": "/neet/physics/optics",
      "relation": "up"
    },
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
      "label": "Units Measurements",
      "url": "/neet/physics/units-measurements",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused owner of the geometrical-optics portion of NEET UG 2026 Physics Unit 16",
    "topics": [
      "Sign convention is mandatory",
      "Reflection and spherical mirrors",
      "Refraction",
      "Lenses",
      "Total internal reflection",
      "Prism and instruments",
      "Experimental-skill linkage"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "ray-optics-c1",
      "title": "1. Sign convention is mandatory",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use one New Cartesian convention: measure distances from the pole/optical centre, positive along the chosen positive axis, commonly the direction of incident light, and negative opposite it; heights above the principal axis positive and below negative. Every diagram/formula example must use the same convention."
            }
          ]
        }
      ]
    },
    {
      "id": "ray-optics-c2",
      "title": "2. Reflection and spherical mirrors",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Teach image construction and the mirror formula together. Magnification sign should connect to image orientation. Avoid memorizing \"concave means negative\" without tying it to the chosen axis and incident-light direction."
            }
          ]
        }
      ]
    },
    {
      "id": "ray-optics-c3",
      "title": "3. Refraction",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Angles are measured from the normal. Refractive index is medium and wavelength dependent; for a fixed monochromatic case, Snell law relates incident and refracted angles. At a stationary interface, frequency remains unchanged."
            }
          ]
        }
      ]
    },
    {
      "id": "ray-optics-c4",
      "title": "4. Lenses",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The thin-lens equation and lens maker relation require paraxial/thin-lens assumptions. Power is reciprocal focal length in metres. For thin lenses in contact, powers add under the ideal model."
            }
          ]
        }
      ]
    },
    {
      "id": "ray-optics-c5",
      "title": "5. Total internal reflection",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Two conditions: light travels from optically denser to rarer medium, and incidence angle exceeds the critical angle. The critical-angle relation must use the two medium indices, not a memorized air-only form unless the rarer medium is air."
            }
          ]
        }
      ]
    },
    {
      "id": "ray-optics-c6",
      "title": "6. Prism and instruments",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Prism formulas must state whether minimum deviation is assumed. Optical-instrument magnifying-power formulas must identify the viewing condition, such as normal adjustment vs final image at least distance; do not show one unlabeled formula as universal."
            }
          ]
        }
      ]
    },
    {
      "id": "ray-optics-c7",
      "title": "7. Experimental-skill linkage",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Current Unit 20 links to focal length of convex/concave mirrors and convex lens, prism deviation graph and refractive index of a glass slab."
            }
          ]
        }
      ]
    },
    {
      "id": "ray-optics-gain",
      "title": "8. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Sign-convention coordinate strip reused on every mirror/lens example."
              }
            ],
            [
              {
                "text": "TIR gate card: denser-to-rarer + i > i_c."
              }
            ],
            [
              {
                "text": "Instrument formula selector: normal adjustment vs other viewing condition."
              }
            ]
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Wave Optics",
      "url": "/neet/physics/wave-optics",
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
    "title": "NEET Ray Optics: Mirrors, Lenses, TIR & Prism | Rank Sarthi",
    "description": "Learn NEET 2026 Ray Optics with explicit Cartesian signs for mirrors, lenses, refraction, TIR, prism, power and optical instruments.",
    "ogTitle": "NEET Ray Optics: Mirrors, Lenses, TIR & Prism | Rank Sarthi",
    "ogDescription": "Learn NEET 2026 Ray Optics with explicit Cartesian signs for mirrors, lenses, refraction, TIR, prism, power and optical instruments.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "ray-optics-f1",
      "expression": "1/f = 1/v + 1/u",
      "meaning": "Mirror formula",
      "variables": [],
      "useWhen": "Spherical mirror, paraxial rays, New Cartesian signs. Use consistent length units.",
      "accessibleText": "Mirror formula: 1/f = 1/v + 1/u. Spherical mirror, paraxial rays, New Cartesian signs. Use consistent length units."
    },
    {
      "id": "ray-optics-f2",
      "expression": "m = h_i/h_o = -v/u",
      "meaning": "Mirror magnification",
      "variables": [],
      "useWhen": "Same sign convention.",
      "accessibleText": "Mirror magnification: m = h_i/h_o = -v/u. Same sign convention."
    },
    {
      "id": "ray-optics-f3",
      "expression": "n = c/v",
      "meaning": "Refractive index",
      "variables": [],
      "useWhen": "Phase speed in medium for stated wavelength/frequency.",
      "accessibleText": "Refractive index: n = c/v. Phase speed in medium for stated wavelength/frequency."
    },
    {
      "id": "ray-optics-f4",
      "expression": "n1 sin i = n2 sin r",
      "meaning": "Snell law",
      "variables": [],
      "useWhen": "Angles from normal, isotropic media.",
      "accessibleText": "Snell law: n1 sin i = n2 sin r. Angles from normal, isotropic media."
    },
    {
      "id": "ray-optics-f5",
      "expression": "n2/v - n1/u = (n2-n1)/R",
      "meaning": "Spherical refraction",
      "variables": [],
      "useWhen": "Paraxial refraction at spherical interface with consistent Cartesian signs.",
      "accessibleText": "Spherical refraction: n2/v - n1/u = (n2-n1)/R. Paraxial refraction at spherical interface with consistent Cartesian signs."
    },
    {
      "id": "ray-optics-f6",
      "expression": "1/v - 1/u = 1/f",
      "meaning": "Thin-lens formula",
      "variables": [],
      "useWhen": "Thin lens, paraxial rays, New Cartesian convention.",
      "accessibleText": "Thin-lens formula: 1/v - 1/u = 1/f. Thin lens, paraxial rays, New Cartesian convention."
    },
    {
      "id": "ray-optics-f7",
      "expression": "m = v/u",
      "meaning": "Lens magnification",
      "variables": [],
      "useWhen": "Thin lens with same convention.",
      "accessibleText": "Lens magnification: m = v/u. Thin lens with same convention."
    },
    {
      "id": "ray-optics-f8",
      "expression": "1/f = (n_l/n_m - 1)(1/R1 - 1/R2)",
      "meaning": "Lens maker",
      "variables": [],
      "useWhen": "Thin lens in medium, paraxial surfaces. In air n_m approx 1.",
      "accessibleText": "Lens maker: 1/f = (n_l/n_m - 1)(1/R1 - 1/R2). Thin lens in medium, paraxial surfaces. In air n_m approx 1."
    },
    {
      "id": "ray-optics-f9",
      "expression": "P = 1/f(m)",
      "meaning": "Lens power",
      "variables": [],
      "useWhen": "Thin lens; P in dioptre.",
      "accessibleText": "Lens power: P = 1/f(m). Thin lens; P in dioptre."
    },
    {
      "id": "ray-optics-f10",
      "expression": "P_eq = sum P_i",
      "meaning": "Thin lenses in contact",
      "variables": [],
      "useWhen": "Thin coaxial lenses in contact.",
      "accessibleText": "Thin lenses in contact: P_eq = sum P_i. Thin coaxial lenses in contact."
    },
    {
      "id": "ray-optics-f11",
      "expression": "sin i_c = n2/n1",
      "meaning": "Critical angle",
      "variables": [],
      "useWhen": "n1 > n2, ray from denser medium 1 to rarer medium 2.",
      "accessibleText": "Critical angle: sin i_c = n2/n1. n1 > n2, ray from denser medium 1 to rarer medium 2."
    },
    {
      "id": "ray-optics-f12",
      "expression": "delta = i + e - A",
      "meaning": "Prism deviation",
      "variables": [],
      "useWhen": "Geometric prism relation.",
      "accessibleText": "Prism deviation: delta = i + e - A. Geometric prism relation."
    },
    {
      "id": "ray-optics-f13",
      "expression": "n = sin[(A+delta_m)/2]/sin(A/2)",
      "meaning": "Prism at minimum deviation",
      "variables": [],
      "useWhen": "Prism in air, symmetric minimum-deviation path.",
      "accessibleText": "Prism at minimum deviation: n = sin[(A+delta_m)/2]/sin(A/2). Prism in air, symmetric minimum-deviation path."
    },
    {
      "id": "ray-optics-f14",
      "expression": "M = -f_o/f_e",
      "meaning": "Telescope normal adjustment",
      "variables": [],
      "useWhen": "Astronomical telescope, final image at infinity; sign shows inversion.",
      "accessibleText": "Telescope normal adjustment: M = -f_o/f_e. Astronomical telescope, final image at infinity; sign shows inversion."
    },
    {
      "id": "ray-optics-f15",
      "expression": "",
      "meaning": "Compound microscope, normal adjustment",
      "variables": [],
      "useWhen": "M",
      "accessibleText": "Compound microscope, normal adjustment: . M"
    }
  ],
  "mistakes": [
    {
      "id": "ray-optics-m1",
      "mistake": "Uses magnitudes instead of signed u,v,f",
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
              "text": "Draw positive axis and assign signs before formula."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "ray-optics-m2",
      "mistake": "Measures Snell angles from surface",
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
              "text": "Angles are from the normal."
            }
          ]
        }
      ],
      "errorType": "recall-gap"
    },
    {
      "id": "ray-optics-m3",
      "mistake": "Applies TIR from rarer to denser medium",
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
              "text": "Check medium order before critical angle."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "ray-optics-m4",
      "mistake": "Uses minimum-deviation prism formula for arbitrary ray path",
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
              "text": "Verify symmetric minimum-deviation condition."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "ray-optics-m5",
      "mistake": "Uses one microscope/telescope formula without viewing condition",
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
              "text": "Label optical configuration first."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "ray-optics-w1",
      "prompt": "a convex lens has f=+20 cm; a real object is 30 cm to the left, so u=-30 cm.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: thin-lens sign convention."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: a convex lens has f=+20 cm; a real object is 30 cm to the left, so u=-30 cm."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: thin-lens formula under New Cartesian convention."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: 1/v - 1/(-30) = 1/20, so 1/v = 1/20 - 1/30 = 1/60; v=+60 cm. m=v/u=60/(-30)=-2, so the image is real, inverted and twice the object height."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: all lengths use cm consistently; positive v and negative magnification match a real inverted image."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Execution Error if object-distance sign is lost."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "What sign convention should I use for NEET ray optics?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use one New Cartesian convention consistently and assign signs from the chosen axis before substitution."
            }
          ]
        }
      ]
    },
    {
      "question": "What are the two conditions for total internal reflection?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Light must travel from optically denser to rarer medium, and incidence angle must exceed the critical angle."
            }
          ]
        }
      ]
    },
    {
      "question": "When can powers of lenses be added?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For thin lenses in contact under the ideal coaxial model."
            }
          ]
        }
      ]
    },
    {
      "question": "Is the prism minimum-deviation formula always valid?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It requires the minimum-deviation symmetric condition."
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
    }
  ]
};
