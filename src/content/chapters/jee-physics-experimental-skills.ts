import type { ChapterContent } from "@/content/types";

/**
 * /jee/physics/experimental-skills — final syllabus-gap page (production package 2026-09-28).
 * Copy is taken from the approved content package; review is assigned
 * internally (pageReview) and no completed-review claim is shown until sign-off.
 */
export const jeePhysicsExperimentalSkills: ChapterContent = {
  "exam": "JEE",
  "examVariant": "Main + Advanced",
  "platform": "jee",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "JEE Experimental Skills: Measurement, Experiments and Graph Reasoning",
  "slug": "experimental-skills",
  "url": "/jee/physics/experimental-skills",
  "canonicalIntent": "Students need one authoritative learning destination for the practical/measurement scope that appears as JEE Main Unit 20: Experimental Skills and overlaps with the experimental-measurement portion of JEE Advanced Physics: General. The page should help a student interpret apparatus, observations and graphs rather than memorise disconnected laboratory instructions.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Experimental Physics asks a different question from a normal chapter problem: "
        },
        {
          "text": "how does a physical quantity become a trustworthy measured value?",
          "bold": true
        },
        {
          "text": " Every activity can be read through the same chain:"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "quantity to be measured -> instrument/model -> least count or sensitivity -> raw observation -> correction -> relationship/graph -> calculated result -> units -> uncertainty and plausibility check",
          "code": true
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The useful skill is therefore not memorising a table. It is recognising what the apparatus measures, what must remain controlled, what relation should be linear or constant, and which error would shift a reading without changing the underlying law."
        }
      ]
    }
  ],
  "tables": [
    {
      "id": "formulas",
      "slot": "formulas",
      "heading": "Formulae and relationships",
      "columns": [
        "Skill",
        "Relationship",
        "Use only when"
      ],
      "rows": [
        [
          "Screw gauge",
          "LC = pitch / circular divisions",
          "Pitch and scale division count match the actual instrument"
        ],
        [
          "Moments",
          "F₁d₁ = F₂d₂",
          "Static rotational equilibrium"
        ],
        [
          "Young's modulus",
          "Y = FL/(AΔL)",
          "Linear elastic regime; dimensions defined consistently"
        ],
        [
          "Capillary rise",
          "T = hrρg/(2cosθ)",
          "Capillary model assumptions are satisfied"
        ],
        [
          "Stokes viscosity",
          "η = 2r²(ρ_s-ρ_l)g/(9v_t)",
          "Terminal velocity and Stokes regime"
        ],
        [
          "Waves",
          "v=fλ",
          "Wave speed/frequency/wavelength correspond to same medium and mode"
        ],
        [
          "Resistivity",
          "ρ=RA/L",
          "Uniform conductor geometry"
        ],
        [
          "Ohm's law",
          "V=IR",
          "Ohmic behaviour at stable conditions"
        ],
        [
          "Prism at minimum deviation",
          "n=sin[(A+D_min)/2]/sin(A/2)",
          "Minimum-deviation symmetric condition"
        ]
      ],
      "jump": true
    }
  ],
  "sections": [
    {
      "id": "exam-ownership",
      "slot": "scope",
      "heading": "Exam ownership",
      "concepts": [
        {
          "id": "exam-ownership-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "JEE Main 2026:",
                    "bold": true
                  },
                  {
                    "text": " CURRENT, complete ownership of Unit 20 Experimental Skills."
                  }
                ],
                [
                  {
                    "text": "JEE Advanced 2026:",
                    "bold": true
                  },
                  {
                    "text": " CURRENT support for the specified experimental/measurement scope under Physics General."
                  }
                ],
                [
                  {
                    "text": "The page must not imply that every Main experiment is separately named in the Advanced syllabus."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "official-mapping",
      "slot": "scope",
      "heading": "Official 2026 syllabus mapping",
      "concepts": [
        {
          "id": "official-mapping-jee-main-unit-20",
          "title": "JEE Main Unit 20",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Organise the 18 listed activities as sections/anchor destinations:"
                }
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                [
                  {
                    "text": "Vernier callipers"
                  }
                ],
                [
                  {
                    "text": "Screw gauge"
                  }
                ],
                [
                  {
                    "text": "Simple pendulum: dissipation of energy from amplitude-squared versus time"
                  }
                ],
                [
                  {
                    "text": "Metre scale using the principle of moments"
                  }
                ],
                [
                  {
                    "text": "Young's modulus of a metallic wire"
                  }
                ],
                [
                  {
                    "text": "Surface tension by capillary rise and effect of detergents"
                  }
                ],
                [
                  {
                    "text": "Coefficient of viscosity by terminal velocity"
                  }
                ],
                [
                  {
                    "text": "Speed of sound using a resonance tube"
                  }
                ],
                [
                  {
                    "text": "Specific heat capacity by method of mixtures"
                  }
                ],
                [
                  {
                    "text": "Resistivity using a metre bridge"
                  }
                ],
                [
                  {
                    "text": "Resistance using Ohm's law"
                  }
                ],
                [
                  {
                    "text": "Galvanometer resistance and figure of merit by half-deflection method"
                  }
                ],
                [
                  {
                    "text": "Focal length of convex mirror, concave mirror and convex lens using parallax"
                  }
                ],
                [
                  {
                    "text": "Prism: angle of deviation versus angle of incidence"
                  }
                ],
                [
                  {
                    "text": "Refractive index of a glass slab using a travelling microscope"
                  }
                ],
                [
                  {
                    "text": "Characteristic curve of a p-n junction diode"
                  }
                ],
                [
                  {
                    "text": "Characteristic curve of a Zener diode and reverse breakdown"
                  }
                ],
                [
                  {
                    "text": "Identification of diode, LED, resistor and capacitor"
                  }
                ]
              ]
            }
          ]
        },
        {
          "id": "official-mapping-jee-advanced-overlap",
          "title": "JEE Advanced overlap",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Use a separate callout titled "
                },
                {
                  "text": "Advanced measurement/experimental overlap",
                  "bold": true
                },
                {
                  "text": ". Map only the experiment/measurement elements actually named under Advanced Physics General, with the Advanced syllabus controlling the boundary."
                }
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "scope-boundary",
      "slot": "scope",
      "heading": "Scope boundary",
      "concepts": [
        {
          "id": "scope-boundary-overview",
          "title": "",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "This page teaches measurement logic, formula conditions, expected graph relationships, error sources, observation-to-inference reasoning and exam-style interpretation. It is "
                },
                {
                  "text": "not",
                  "bold": true
                },
                {
                  "text": ":"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "a school laboratory manual;"
                  }
                ],
                [
                  {
                    "text": "a replacement for supervised practical work;"
                  }
                ],
                [
                  {
                    "text": "a source of fabricated experimental readings;"
                  }
                ],
                [
                  {
                    "text": "a page of “most expected practical questions”;"
                  }
                ],
                [
                  {
                    "text": "18 thin pages for individual apparatus."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "core-reasoning",
      "slot": "prerequisites",
      "heading": "Measurement language",
      "concepts": [
        {
          "id": "core-reasoning-measurement-language",
          "title": "Measurement language",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Least count:",
                    "bold": true
                  },
                  {
                    "text": " smallest change the instrument can resolve under its scale design."
                  }
                ],
                [
                  {
                    "text": "Zero error:",
                    "bold": true
                  },
                  {
                    "text": " non-zero indication when the true input should be zero."
                  }
                ],
                [
                  {
                    "text": "Zero correction:",
                    "bold": true
                  },
                  {
                    "text": " correction applied with the opposite sign to the zero error."
                  }
                ],
                [
                  {
                    "text": "Parallax:",
                    "bold": true
                  },
                  {
                    "text": " apparent displacement caused by viewing a scale or image from the wrong line of sight."
                  }
                ],
                [
                  {
                    "text": "Significant figures:",
                    "bold": true
                  },
                  {
                    "text": " digits justified by the measurement precision."
                  }
                ],
                [
                  {
                    "text": "Systematic error:",
                    "bold": true
                  },
                  {
                    "text": " repeatable bias that shifts readings in one direction."
                  }
                ],
                [
                  {
                    "text": "Random error:",
                    "bold": true
                  },
                  {
                    "text": " scatter that changes unpredictably across repeated observations."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "official-activities",
      "slot": "concepts",
      "heading": "The 18 official JEE Main activities",
      "concepts": [
        {
          "id": "vernier-callipers",
          "title": "Vernier callipers",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Vernier callipers",
                  "href": "#principle-vernier-callipers"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Units And Measurements",
                  "href": "/jee/physics/units-and-measurements"
                }
              ]
            }
          ]
        },
        {
          "id": "screw-gauge",
          "title": "Screw gauge",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Screw gauge",
                  "href": "#principle-screw-gauge"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Units And Measurements",
                  "href": "/jee/physics/units-and-measurements"
                }
              ]
            }
          ]
        },
        {
          "id": "simple-pendulum",
          "title": "Simple pendulum: dissipation of energy from amplitude-squared versus time",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Simple Harmonic Motion",
                  "href": "/jee/physics/simple-harmonic-motion"
                }
              ]
            }
          ]
        },
        {
          "id": "metre-scale",
          "title": "Metre scale using the principle of moments",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Principle of moments",
                  "href": "#principle-principle-of-moments"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Rotational Motion",
                  "href": "/jee/physics/rotational-motion"
                }
              ]
            }
          ]
        },
        {
          "id": "youngs-modulus-of-a-metallic-wire",
          "title": "Young's modulus of a metallic wire",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Young's modulus",
                  "href": "#principle-youngs-modulus"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Elasticity",
                  "href": "/jee/physics/elasticity"
                }
              ]
            }
          ]
        },
        {
          "id": "surface-tension",
          "title": "Surface tension by capillary rise and effect of detergents",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Surface tension",
                  "href": "#principle-surface-tension"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Surface Tension",
                  "href": "/jee/physics/surface-tension"
                }
              ]
            }
          ]
        },
        {
          "id": "coefficient-of-viscosity",
          "title": "Coefficient of viscosity by terminal velocity",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Viscosity by terminal velocity",
                  "href": "#principle-viscosity-by-terminal-velocity"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Fluid Mechanics",
                  "href": "/jee/physics/fluid-mechanics"
                }
              ]
            }
          ]
        },
        {
          "id": "speed-of-sound",
          "title": "Speed of sound using a resonance tube",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Resonance tube",
                  "href": "#principle-resonance-tube"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Waves",
                  "href": "/jee/physics/waves"
                }
              ]
            }
          ]
        },
        {
          "id": "specific-heat-capacity",
          "title": "Specific heat capacity by method of mixtures",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Calorimetry",
                  "href": "#principle-calorimetry"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Thermal Properties",
                  "href": "/jee/physics/thermal-properties"
                }
              ]
            }
          ]
        },
        {
          "id": "resistivity",
          "title": "Resistivity using a metre bridge",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Resistivity",
                  "href": "#principle-resistivity"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Current Electricity",
                  "href": "/jee/physics/current-electricity"
                }
              ]
            }
          ]
        },
        {
          "id": "resistance",
          "title": "Resistance using Ohm's law",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Ohm's law",
                  "href": "#principle-ohms-law"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Current Electricity",
                  "href": "/jee/physics/current-electricity"
                }
              ]
            }
          ]
        },
        {
          "id": "galvanometer-resistance-and-figure-of-merit",
          "title": "Galvanometer resistance and figure of merit by half-deflection method",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Galvanometer figure of merit",
                  "href": "#principle-galvanometer-figure-of-merit"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Current Electricity",
                  "href": "/jee/physics/current-electricity"
                }
              ]
            }
          ]
        },
        {
          "id": "focal-length-of-convex-mirror-concave-mirror-and-convex-lens",
          "title": "Focal length of convex mirror, concave mirror and convex lens using parallax",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Lens/mirror parallax method",
                  "href": "#principle-lens-mirror-parallax-method"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Ray Optics",
                  "href": "/jee/physics/ray-optics"
                }
              ]
            }
          ]
        },
        {
          "id": "prism",
          "title": "Prism: angle of deviation versus angle of incidence",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Prism",
                  "href": "#principle-prism"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Ray Optics",
                  "href": "/jee/physics/ray-optics"
                }
              ]
            }
          ]
        },
        {
          "id": "refractive-index-of-a-glass-slab",
          "title": "Refractive index of a glass slab using a travelling microscope",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Refractive index by apparent/real depth",
                  "href": "#principle-refractive-index-by-apparent-real-depth"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Ray Optics",
                  "href": "/jee/physics/ray-optics"
                }
              ]
            }
          ]
        },
        {
          "id": "characteristic-curve-of-a-p-n-junction-diode",
          "title": "Characteristic curve of a p-n junction diode",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Diode and Zener characteristics",
                  "href": "#principle-diode-and-zener-characteristics"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Semiconductors",
                  "href": "/jee/physics/semiconductors"
                }
              ]
            }
          ]
        },
        {
          "id": "characteristic-curve-of-a-zener-diode-and-reverse-breakdown",
          "title": "Characteristic curve of a Zener diode and reverse breakdown",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Key principle: "
                },
                {
                  "text": "Diode and Zener characteristics",
                  "href": "#principle-diode-and-zener-characteristics"
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Semiconductors",
                  "href": "/jee/physics/semiconductors"
                }
              ]
            }
          ]
        },
        {
          "id": "identification-of-diode-led-resistor-and-capacitor",
          "title": "Identification of diode, LED, resistor and capacitor",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Concept chapter: "
                },
                {
                  "text": "Semiconductors",
                  "href": "/jee/physics/semiconductors"
                }
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "applicability",
      "slot": "formulas",
      "heading": "Applicability conditions",
      "concepts": [
        {
          "id": "applicability-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Apply zero correction only after identifying the sign convention."
                  }
                ],
                [
                  {
                    "text": "Use elastic formulae before permanent deformation."
                  }
                ],
                [
                  {
                    "text": "Treat Stokes-law viscosity as a model with regime restrictions."
                  }
                ],
                [
                  {
                    "text": "In graph questions, identify which variable is plotted on each axis before calling a slope “resistance,” “conductance,” “rate,” or another quantity."
                  }
                ],
                [
                  {
                    "text": "Keep temperature dependence in mind for resistance/resistivity."
                  }
                ],
                [
                  {
                    "text": "Apply optical formulas only under their stated geometry and approximation."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "exceptions",
      "slot": "formulas",
      "heading": "Important exceptions",
      "concepts": [
        {
          "id": "exceptions-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "A straight-looking graph does not prove an exact law outside the measured range."
                  }
                ],
                [
                  {
                    "text": "Least count is instrument-specific; do not force one memorised value onto every vernier or micrometer."
                  }
                ],
                [
                  {
                    "text": "A diode is non-ohmic; "
                  },
                  {
                    "text": "V/I",
                    "code": true
                  },
                  {
                    "text": " is not a constant resistance over its entire characteristic."
                  }
                ],
                [
                  {
                    "text": "Zener breakdown is not ordinary forward conduction."
                  }
                ],
                [
                  {
                    "text": "Successive resonance lengths are preferable to a single resonance length when eliminating a common end correction."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "concept-relationships",
      "slot": "concepts",
      "heading": "Concept relationships",
      "concepts": [
        {
          "id": "concept-relationships-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Units and Measurements -> all experimental records."
                  }
                ],
                [
                  {
                    "text": "Elasticity -> Young's modulus."
                  }
                ],
                [
                  {
                    "text": "Fluid Mechanics + Surface Tension -> capillary and viscosity activities."
                  }
                ],
                [
                  {
                    "text": "Waves -> resonance tube."
                  }
                ],
                [
                  {
                    "text": "Thermal Properties -> calorimetry."
                  }
                ],
                [
                  {
                    "text": "Current Electricity -> metre bridge, Ohm's law, galvanometer."
                  }
                ],
                [
                  {
                    "text": "Ray Optics -> parallax, prism, glass slab."
                  }
                ],
                [
                  {
                    "text": "Semiconductors -> p-n diode and Zener characteristics."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "common-errors",
      "slot": "mistakes",
      "heading": "Common execution and concept errors",
      "concepts": [
        {
          "id": "common-errors-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Reversing zero-error and zero-correction signs."
                  }
                ],
                [
                  {
                    "text": "Forgetting unit conversion for diameter, radius or area."
                  }
                ],
                [
                  {
                    "text": "Using diameter where a radius belongs."
                  }
                ],
                [
                  {
                    "text": "Confusing resistance with resistivity."
                  }
                ],
                [
                  {
                    "text": "Taking the wrong graph slope because axes were not checked."
                  }
                ],
                [
                  {
                    "text": "Applying a minimum-deviation prism relation away from minimum deviation."
                  }
                ],
                [
                  {
                    "text": "Treating terminal velocity as instantaneous acceleration-stage speed."
                  }
                ],
                [
                  {
                    "text": "Using a formula without its geometry/regime assumptions."
                  }
                ],
                [
                  {
                    "text": "Memorising “observations” without linking them to the underlying physical relation."
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "revision-checklist",
      "slot": "practice",
      "heading": "Revision checklist",
      "concepts": [
        {
          "id": "revision-checklist-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Can I state the measured quantity and the instrument sensitivity?"
                  }
                ],
                [
                  {
                    "text": "Can I identify and correct zero error?"
                  }
                ],
                [
                  {
                    "text": "Can I interpret the expected graph and its slope/intercept?"
                  }
                ],
                [
                  {
                    "text": "Can I state the validity condition beside each core formula?"
                  }
                ],
                [
                  {
                    "text": "Can I convert all geometric quantities to SI before substitution?"
                  }
                ],
                [
                  {
                    "text": "Can I explain what would create a systematic shift?"
                  }
                ],
                [
                  {
                    "text": "Can I connect each experiment to its parent Physics chapter?"
                  }
                ],
                [
                  {
                    "text": "Can I distinguish an observation from the inference drawn from it?"
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "id": "practice-questions",
      "slot": "practice",
      "heading": "Practice and reasoning questions",
      "concepts": [
        {
          "id": "practice-questions-overview",
          "title": "",
          "body": [
            {
              "type": "list",
              "ordered": true,
              "items": [
                [
                  {
                    "text": "Why can repeated readings reduce random scatter but not automatically remove a zero error?"
                  }
                ],
                [
                  {
                    "text": "A screw gauge has pitch "
                  },
                  {
                    "text": "0.5 mm",
                    "code": true
                  },
                  {
                    "text": " and 50 circular divisions. Find its least count."
                  }
                ],
                [
                  {
                    "text": "Explain why the area error in a wire can strongly affect Young's modulus or resistivity."
                  }
                ],
                [
                  {
                    "text": "Why are two successive resonance lengths useful?"
                  }
                ],
                [
                  {
                    "text": "For a "
                  },
                  {
                    "text": "V",
                    "code": true
                  },
                  {
                    "text": " versus "
                  },
                  {
                    "text": "I",
                    "code": true
                  },
                  {
                    "text": " graph, what does the slope mean for an ohmic conductor? What changes if the axes are reversed?"
                  }
                ],
                [
                  {
                    "text": "Why is the Zener reverse-breakdown region conceptually different from forward conduction?"
                  }
                ],
                [
                  {
                    "text": "Give one systematic and one random error that could occur in an optical parallax experiment."
                  }
                ],
                [
                  {
                    "text": "Why must the terminal-velocity condition be checked before using Stokes' law?"
                  }
                ]
              ]
            }
          ]
        }
      ],
      "jump": true
    }
  ],
  "prerequisites": [
    {
      "label": "JEE Physics",
      "url": "/jee/physics",
      "relation": "up"
    },
    {
      "label": "Physics Syllabus",
      "url": "/jee/syllabus/physics",
      "relation": "up"
    }
  ],
  "syllabusMapping": {
    "unit": "Experimental Skills (JEE Main Unit 20; JEE Advanced Physics General overlap)",
    "topics": [
      "Vernier callipers",
      "Screw gauge",
      "Simple pendulum: dissipation of energy from amplitude-squared versus time",
      "Metre scale using the principle of moments",
      "Young's modulus of a metallic wire",
      "Surface tension by capillary rise and effect of detergents",
      "Coefficient of viscosity by terminal velocity",
      "Speed of sound using a resonance tube",
      "Specific heat capacity by method of mixtures",
      "Resistivity using a metre bridge",
      "Resistance using Ohm's law",
      "Galvanometer resistance and figure of merit by half-deflection method",
      "Focal length of convex mirror, concave mirror and convex lens using parallax",
      "Prism: angle of deviation versus angle of incidence",
      "Refractive index of a glass slab using a travelling microscope",
      "Characteristic curve of a p-n junction diode",
      "Characteristic curve of a Zener diode and reverse breakdown",
      "Identification of diode, LED, resistor and capacitor"
    ],
    "syllabusUrl": "/jee/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "principle-vernier-callipers",
      "title": "Vernier callipers",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A vernier compares two scales whose division sizes differ slightly. A reading combines the main-scale reading with the coinciding vernier division, followed by zero correction. The page should show internal diameter, external diameter and depth as three measurement geometries rather than three separate “chapters.”"
            }
          ]
        }
      ]
    },
    {
      "id": "principle-screw-gauge",
      "title": "Screw gauge",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A screw converts rotation into small linear motion. The essential quantities are "
            },
            {
              "text": "pitch",
              "bold": true
            },
            {
              "text": ", "
            },
            {
              "text": "number of circular-scale divisions",
              "bold": true
            },
            {
              "text": ", least count and zero correction."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-principle-of-moments",
      "title": "Principle of moments",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For rotational equilibrium about a pivot, clockwise and anticlockwise moments balance: "
            },
            {
              "text": "F₁ d₁ = F₂ d₂",
              "code": true
            },
            {
              "text": " when the two forces are the relevant balancing moments and distances are perpendicular lever arms."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-youngs-modulus",
      "title": "Young's modulus",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Within the linear elastic region: "
            },
            {
              "text": "Y = stress / strain = (F/A) / (ΔL/L) = FL/(AΔL)",
              "code": true
            }
          ]
        }
      ]
    },
    {
      "id": "principle-surface-tension",
      "title": "Surface tension",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In the ideal capillary-rise model: "
            },
            {
              "text": "T = h r ρ g / (2 cos θ)",
              "code": true
            },
            {
              "text": " for capillary radius "
            },
            {
              "text": "r",
              "code": true
            },
            {
              "text": ", liquid density "
            },
            {
              "text": "ρ",
              "code": true
            },
            {
              "text": ", rise "
            },
            {
              "text": "h",
              "code": true
            },
            {
              "text": " and contact angle "
            },
            {
              "text": "θ",
              "code": true
            },
            {
              "text": ", subject to the model assumptions."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-viscosity-by-terminal-velocity",
      "title": "Viscosity by terminal velocity",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a small sphere moving in the Stokes-law regime: "
            },
            {
              "text": "η = 2 r² (ρ_s - ρ_l) g / (9 v_t)",
              "code": true
            },
            {
              "text": " where "
            },
            {
              "text": "v_t",
              "code": true
            },
            {
              "text": " is terminal velocity. This relation is not valid outside the laminar, small-sphere Stokes regime."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-resonance-tube",
      "title": "Resonance tube",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For successive resonances in the same tube, the length difference approximately gives half a wavelength: "
            },
            {
              "text": "L₂ - L₁ ≈ λ/2",
              "code": true
            },
            {
              "text": " so "
            },
            {
              "text": "v = fλ",
              "code": true
            },
            {
              "text": ". Using successive resonances helps cancel the common end correction."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-calorimetry",
      "title": "Calorimetry",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For an adequately insulated mixture: "
            },
            {
              "text": "heat lost + heat gained ≈ 0",
              "code": true
            },
            {
              "text": ". If calorimeter heat capacity matters, include it rather than silently assuming a massless container."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-resistivity",
      "title": "Resistivity",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "R = ρL/A",
              "code": true
            },
            {
              "text": ", so "
            },
            {
              "text": "ρ = RA/L",
              "code": true
            },
            {
              "text": ". Resistance depends on dimensions; resistivity is a material property at a stated temperature."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-ohms-law",
      "title": "Ohm's law",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For an ohmic conductor under stable physical conditions: "
            },
            {
              "text": "V = IR",
              "code": true
            },
            {
              "text": ". A straight-line "
            },
            {
              "text": "V",
              "code": true
            },
            {
              "text": " versus "
            },
            {
              "text": "I",
              "code": true
            },
            {
              "text": " graph through the origin has slope "
            },
            {
              "text": "R",
              "code": true
            },
            {
              "text": " when "
            },
            {
              "text": "V",
              "code": true
            },
            {
              "text": " is on the vertical axis."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-galvanometer-figure-of-merit",
      "title": "Galvanometer figure of merit",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If "
            },
            {
              "text": "k",
              "code": true
            },
            {
              "text": " is current per division: "
            },
            {
              "text": "k = I/θ",
              "code": true
            },
            {
              "text": ". Use the specific half-deflection circuit relation supplied/derived for the question; do not treat one memorised resistance formula as universal without matching the circuit assumptions."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-lens-mirror-parallax-method",
      "title": "Lens/mirror parallax method",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No-parallax is an optical alignment condition: two images/objects appear at the same plane when relative motion disappears as the eye shifts laterally."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-prism",
      "title": "Prism",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "At minimum deviation for the symmetric ray path: "
            },
            {
              "text": "n = sin[(A + D_min)/2] / sin(A/2)",
              "code": true
            },
            {
              "text": ". Do not use the minimum-deviation formula at an arbitrary incidence angle."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-refractive-index-by-apparent-real-depth",
      "title": "Refractive index by apparent/real depth",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For near-normal viewing in the standard slab model: "
            },
            {
              "text": "n ≈ real depth / apparent depth",
              "code": true
            },
            {
              "text": ". State the geometry and approximation."
            }
          ]
        }
      ]
    },
    {
      "id": "principle-diode-and-zener-characteristics",
      "title": "Diode and Zener characteristics",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A p-n diode I-V curve distinguishes forward conduction from small reverse current. A Zener diode is studied in reverse bias around its breakdown region. Graph interpretation matters more than memorising a single “turn-on” number."
            }
          ]
        }
      ]
    }
  ],
  "workedExamples": [
    {
      "id": "example-a-zero-corrected-vernier-reading",
      "prompt": "Example A: zero-corrected vernier reading",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Suppose the main scale gives "
            },
            {
              "text": "2.30 cm",
              "code": true
            },
            {
              "text": ", the coinciding vernier contribution is "
            },
            {
              "text": "0.06 cm",
              "code": true
            },
            {
              "text": ", and the instrument has a "
            },
            {
              "text": "+0.02 cm zero error",
              "bold": true
            },
            {
              "text": ". Observed reading = "
            },
            {
              "text": "2.36 cm",
              "code": true
            },
            {
              "text": ". Zero correction = "
            },
            {
              "text": "-0.02 cm",
              "code": true
            },
            {
              "text": ". Corrected reading = "
            },
            {
              "text": "2.34 cm",
              "code": true
            },
            {
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The key reasoning is the sign: positive zero error makes the raw reading too large."
            }
          ]
        }
      ]
    },
    {
      "id": "example-b-resistivity-from-a-wire-measurement",
      "prompt": "Example B: resistivity from a wire measurement",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "A wire has "
            },
            {
              "text": "R = 2.4 Ω",
              "code": true
            },
            {
              "text": ", length "
            },
            {
              "text": "L = 1.50 m",
              "code": true
            },
            {
              "text": ", and cross-sectional area "
            },
            {
              "text": "A = 0.50 mm² = 5.0×10⁻⁷ m²",
              "code": true
            },
            {
              "text": ". "
            },
            {
              "text": "ρ = RA/L = (2.4)(5.0×10⁻⁷)/1.50 = 8.0×10⁻⁷ Ω m",
              "code": true
            },
            {
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The most common failure is using "
            },
            {
              "text": "0.50",
              "code": true
            },
            {
              "text": " as though "
            },
            {
              "text": "mm²",
              "code": true
            },
            {
              "text": " were already "
            },
            {
              "text": "m²",
              "code": true
            },
            {
              "text": "."
            }
          ]
        }
      ]
    },
    {
      "id": "example-c-resonance-tube-reasoning",
      "prompt": "Example C: resonance-tube reasoning",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Successive resonances occur at "
            },
            {
              "text": "L₁ = 17 cm",
              "code": true
            },
            {
              "text": " and "
            },
            {
              "text": "L₂ = 51 cm",
              "code": true
            },
            {
              "text": " for a fork of frequency "
            },
            {
              "text": "500 Hz",
              "code": true
            },
            {
              "text": ". "
            },
            {
              "text": "L₂-L₁ = 34 cm = 0.34 m ≈ λ/2",
              "code": true
            },
            {
              "text": ", so "
            },
            {
              "text": "λ ≈ 0.68 m",
              "code": true
            },
            {
              "text": ". "
            },
            {
              "text": "v = fλ ≈ 340 m s⁻¹",
              "code": true
            },
            {
              "text": "."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Using the difference between successive resonance lengths avoids needing the common end correction explicitly."
            }
          ]
        }
      ]
    },
    {
      "id": "example-d-diode-graph",
      "prompt": "Example D: diode graph",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "If current remains very small for a range of reverse voltage and then rises sharply in the reverse direction for a Zener diode, the sharp region is interpreted as reverse breakdown. Do not describe it as ordinary ohmic behaviour merely because part of the curve looks steep."
            }
          ]
        }
      ]
    }
  ],
  "relatedChapters": [
    {
      "label": "Units And Measurements",
      "url": "/jee/physics/units-and-measurements",
      "relation": "related"
    },
    {
      "label": "Elasticity",
      "url": "/jee/physics/elasticity",
      "relation": "related"
    },
    {
      "label": "Fluid Mechanics",
      "url": "/jee/physics/fluid-mechanics",
      "relation": "related"
    },
    {
      "label": "Surface Tension",
      "url": "/jee/physics/surface-tension",
      "relation": "related"
    },
    {
      "label": "Waves",
      "url": "/jee/physics/waves",
      "relation": "related"
    },
    {
      "label": "Thermal Properties",
      "url": "/jee/physics/thermal-properties",
      "relation": "related"
    },
    {
      "label": "Current Electricity",
      "url": "/jee/physics/current-electricity",
      "relation": "related"
    },
    {
      "label": "Ray Optics",
      "url": "/jee/physics/ray-optics",
      "relation": "related"
    },
    {
      "label": "Semiconductors",
      "url": "/jee/physics/semiconductors",
      "relation": "related"
    }
  ],
  "sources": [
    "nta-jee-main-2026-syllabus-pdf",
    "jee-advanced-syllabus",
    "ncert-textbooks-index"
  ],
  "sourceNote": "Official scope: JEE Main: Unit 20 Experimental Skills; JEE Advanced: Physics General experimental/measurement scope; Concept support: Measurement, mechanics, fluids, waves, electricity, optics, semiconductors. NCERT is concept support only; the official 2026 syllabus controls exam ownership. All sources checked 28 September 2026.",
  "pageReview": {
    "reviewerProfileId": "ashwin-m",
    "reviewStatus": "REVIEWER_ASSIGNED",
    "contentVersion": "2026-09-28"
  },
  "updated": "28 September 2026",
  "contentStatus": "verified",
  "meta": {
    "title": "JEE Experimental Skills 2026: Measurements, Graphs & Lab Reasoning | Rank Sarthi",
    "description": "Learn the official JEE Main Experimental Skills unit through measurement principles, least count, error correction, graphs, formulas, observations and the 18 listed activities, with JEE Advanced overlap clearly marked.",
    "ogType": "article"
  }
};
