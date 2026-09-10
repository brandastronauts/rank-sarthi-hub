import type { ChapterContent } from "@/content/types";

/**
 * NEET Alternating Current: RMS, Reactance, LCR, Resonance and Transformer — NEET Physics (T06).
 * Data-only record generated from the accepted production package.
 * contentStatus stays "draft" until human SME review is recorded.
 */
export const neetPhysicsAlternatingCurrent: ChapterContent = {
  "exam": "NEET",
  "platform": "neet",
  "subject": "Physics",
  "subjectSlug": "physics",
  "chapter": "NEET Alternating Current: RMS, Reactance, LCR, Resonance and Transformer",
  "slug": "alternating-current",
  "url": "/neet/physics/alternating-current",
  "canonicalIntent": "Own the AC half of Unit 14, including sinusoidal AC, peak/RMS values, reactance, impedance, series LCR, resonance, AC power, wattless current, AC generator and transformer. Every formula must state sinusoidal steady-state/ideal assumptions where required.",
  "directAnswer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The verified 2026 Unit 14 AC scope includes peak and RMS current/voltage, reactance and impedance, series LCR circuits, resonance, AC power, wattless current, AC generator and transformer. RMS shortcuts such as I_rms = I0/sqrt(2) apply to sinusoidal waveforms, not every alternating waveform."
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
      "label": "Electromagnetic Induction",
      "url": "/neet/physics/electromagnetic-induction",
      "relation": "prerequisite"
    },
    {
      "label": "Oscillations",
      "url": "/neet/physics/oscillations",
      "relation": "prerequisite"
    }
  ],
  "syllabusMapping": {
    "unit": "Focused owner of the alternating-current portion of NEET UG 2026 Physics Unit 14",
    "topics": [
      "AC is time-varying, not simply \"current that changes\"",
      "RMS with waveform condition",
      "Reactance and impedance",
      "Resonance",
      "AC power",
      "Generator and transformer"
    ],
    "syllabusUrl": "/neet/syllabus/physics"
  },
  "conceptBlocks": [
    {
      "id": "alternating-current-c1",
      "title": "1. AC is time-varying, not simply \"current that changes\"",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Use sinusoidal voltage/current as the standard NEET model. Make phase visible on a graph before using phasor relations."
            }
          ]
        }
      ]
    },
    {
      "id": "alternating-current-c2",
      "title": "2. RMS with waveform condition",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "For a sine wave, RMS is peak divided by sqrt(2). Do not transfer that ratio to a non-sinusoidal waveform without computing the RMS definition."
            }
          ]
        }
      ]
    },
    {
      "id": "alternating-current-c3",
      "title": "3. Reactance and impedance",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Inductive reactance increases with angular frequency; capacitive reactance decreases. In a series LCR circuit, the difference X_L-X_C determines whether current lags or leads the applied voltage."
            }
          ]
        }
      ]
    },
    {
      "id": "alternating-current-c4",
      "title": "4. Resonance",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Series resonance occurs when X_L=X_C, giving the ideal resonance angular frequency 1/sqrt(LC). At resonance the reactive contributions cancel in the series impedance and current is maximum for fixed applied RMS voltage and resistance. Real circuits have losses and finite bandwidth."
            }
          ]
        }
      ]
    },
    {
      "id": "alternating-current-c5",
      "title": "5. AC power",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Average power depends on the power factor cos(phi). In an ideal pure inductor or capacitor, average power over a complete cycle is zero even though instantaneous energy exchange occurs."
            }
          ]
        }
      ]
    },
    {
      "id": "alternating-current-c6",
      "title": "6. Generator and transformer",
      "body": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The generator block connects rotating magnetic flux to sinusoidal induced emf. The transformer relation is idealized: turns ratio controls voltage ratio, while current ratio is inverse if losses are neglected. Do not imply a transformer works on steady DC."
            }
          ]
        }
      ]
    },
    {
      "id": "alternating-current-gain",
      "title": "7. Decision aids for this chapter",
      "body": [
        {
          "type": "list",
          "ordered": false,
          "items": [
            [
              {
                "text": "Frequency-response decision strip: as frequency rises, X_L rises and X_C falls."
              }
            ],
            [
              {
                "text": "Series-LCR phase card: capacitive, resonant and inductive states."
              }
            ],
            [
              {
                "text": "RMS warning badge: peak/sqrt(2) only for a sinusoid."
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
    "title": "NEET Alternating Current: RMS, LCR & Resonance | Rank Sarthi",
    "description": "Learn NEET 2026 AC with RMS values, reactance, impedance, series LCR resonance, power factor, wattless current, generator and transformer.",
    "ogTitle": "NEET Alternating Current: RMS, LCR & Resonance | Rank Sarthi",
    "ogDescription": "Learn NEET 2026 AC with RMS values, reactance, impedance, series LCR resonance, power factor, wattless current, generator and transformer.",
    "ogType": "article"
  },
  "formulas": [
    {
      "id": "alternating-current-f1",
      "expression": "i = I0 sin(omega t + phi0)",
      "meaning": "Sinusoidal current",
      "variables": [],
      "useWhen": "Sinusoidal signal. I0 peak A.",
      "accessibleText": "Sinusoidal current: i = I0 sin(omega t + phi0). Sinusoidal signal. I0 peak A."
    },
    {
      "id": "alternating-current-f2",
      "expression": "I_rms = I0/sqrt(2), V_rms = V0/sqrt(2)",
      "meaning": "RMS sine values",
      "variables": [],
      "useWhen": "Pure sinusoid over complete cycles.",
      "accessibleText": "RMS sine values: I_rms = I0/sqrt(2), V_rms = V0/sqrt(2). Pure sinusoid over complete cycles."
    },
    {
      "id": "alternating-current-f3",
      "expression": "X_L = omega L",
      "meaning": "Inductive reactance",
      "variables": [],
      "useWhen": "Sinusoidal steady state, ideal inductor. Unit ohm.",
      "accessibleText": "Inductive reactance: X_L = omega L. Sinusoidal steady state, ideal inductor. Unit ohm."
    },
    {
      "id": "alternating-current-f4",
      "expression": "X_C = 1/(omega C)",
      "meaning": "Capacitive reactance",
      "variables": [],
      "useWhen": "Sinusoidal steady state, ideal capacitor. Unit ohm.",
      "accessibleText": "Capacitive reactance: X_C = 1/(omega C). Sinusoidal steady state, ideal capacitor. Unit ohm."
    },
    {
      "id": "alternating-current-f5",
      "expression": "Z = sqrt(R^2 + (X_L-X_C)^2)",
      "meaning": "Series LCR impedance",
      "variables": [],
      "useWhen": "Sinusoidal steady state, series LCR. Unit ohm.",
      "accessibleText": "Series LCR impedance: Z = sqrt(R^2 + (X_L-X_C)^2). Sinusoidal steady state, series LCR. Unit ohm."
    },
    {
      "id": "alternating-current-f6",
      "expression": "tan(phi) = (X_L-X_C)/R",
      "meaning": "Phase relation",
      "variables": [],
      "useWhen": "Series LCR with chosen voltage-current phase convention.",
      "accessibleText": "Phase relation: tan(phi) = (X_L-X_C)/R. Series LCR with chosen voltage-current phase convention."
    },
    {
      "id": "alternating-current-f7",
      "expression": "I_rms = V_rms/Z",
      "meaning": "RMS current",
      "variables": [],
      "useWhen": "Series sinusoidal steady state.",
      "accessibleText": "RMS current: I_rms = V_rms/Z. Series sinusoidal steady state."
    },
    {
      "id": "alternating-current-f8",
      "expression": "omega_0 = 1/sqrt(LC), f0 = 1/(2πsqrt(LC))",
      "meaning": "Resonance",
      "variables": [],
      "useWhen": "Ideal series LCR where X_L=X_C.",
      "accessibleText": "Resonance: omega_0 = 1/sqrt(LC), f0 = 1/(2πsqrt(LC)). Ideal series LCR where X_L=X_C."
    },
    {
      "id": "alternating-current-f9",
      "expression": "P_avg = V_rms I_rms cos(phi)",
      "meaning": "Average power",
      "variables": [],
      "useWhen": "Sinusoidal steady state. Unit W.",
      "accessibleText": "Average power: P_avg = V_rms I_rms cos(phi). Sinusoidal steady state. Unit W."
    },
    {
      "id": "alternating-current-f10",
      "expression": "epsilon = N B A omega sin(omega t)",
      "meaning": "Generator emf",
      "variables": [],
      "useWhen": "Ideal rotating coil, uniform B, chosen phase origin.",
      "accessibleText": "Generator emf: epsilon = N B A omega sin(omega t). Ideal rotating coil, uniform B, chosen phase origin."
    },
    {
      "id": "alternating-current-f11",
      "expression": "V_s/V_p = N_s/N_p",
      "meaning": "Ideal transformer",
      "variables": [],
      "useWhen": "Ideal transformer, sinusoidal AC, negligible losses.",
      "accessibleText": "Ideal transformer: V_s/V_p = N_s/N_p. Ideal transformer, sinusoidal AC, negligible losses."
    },
    {
      "id": "alternating-current-f12",
      "expression": "I_s/I_p = N_p/N_s",
      "meaning": "Ideal transformer current",
      "variables": [],
      "useWhen": "Ideal power conservation.",
      "accessibleText": "Ideal transformer current: I_s/I_p = N_p/N_s. Ideal power conservation."
    }
  ],
  "mistakes": [
    {
      "id": "alternating-current-m1",
      "mistake": "Uses peak/sqrt(2) for non-sinusoidal AC",
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
              "text": "Check waveform before RMS shortcut."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "alternating-current-m2",
      "mistake": "Mixes peak voltage with RMS current",
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
              "text": "Keep peak or RMS system consistent."
            }
          ]
        }
      ],
      "errorType": "execution-error"
    },
    {
      "id": "alternating-current-m3",
      "mistake": "Uses series-LCR impedance for parallel circuit",
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
              "text": "Identify topology before formula."
            }
          ]
        }
      ],
      "errorType": "decision-error"
    },
    {
      "id": "alternating-current-m4",
      "mistake": "Says current lags at all frequencies",
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
              "text": "Compare X_L and X_C."
            }
          ]
        }
      ],
      "errorType": "knowledge-gap"
    },
    {
      "id": "alternating-current-m5",
      "mistake": "Applies transformer turns ratio to DC",
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
              "text": "Restore changing-flux/AC condition."
            }
          ]
        }
      ],
      "errorType": "needs-review"
    }
  ],
  "workedExamples": [
    {
      "id": "alternating-current-w1",
      "prompt": "L = 0.10 H and C = 100 microF.",
      "steps": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Target concept: series-LCR resonance."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Condition: L = 0.10 H and C = 100 microF."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Method selection: use the ideal series resonance frequency because the question asks when inductive and capacitive reactances cancel."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Reasoning/calculation: LC = 1.0 x 10^-5; sqrt(LC) = 3.162 x 10^-3; f0 = 1/[2πsqrt(LC)] approx 50.3 Hz."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Units/sign check: LC has units s^2, so 1/sqrt(LC) has s^-1; frequency is positive in Hz."
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "text": "PI category: Decision / Selection Error if a non-resonance model is chosen first; Execution Error for microfarad conversion."
            }
          ]
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Is I_rms = I0/sqrt(2) always true?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. It is the RMS relation for a sinusoidal current."
            }
          ]
        }
      ]
    },
    {
      "question": "What is the series-LCR resonance condition?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "X_L=X_C, giving omega0=1/sqrt(LC) for the ideal model."
            }
          ]
        }
      ]
    },
    {
      "question": "When is AC current wattless?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "In the ideal pure inductor or pure capacitor case, average power over a complete cycle is zero."
            }
          ]
        }
      ]
    },
    {
      "question": "Does a transformer work on steady DC?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "No. The ideal transformer depends on changing magnetic flux produced by AC."
            }
          ]
        }
      ]
    }
  ],
  "links": [
    {
      "label": "Optics",
      "url": "/neet/physics/optics",
      "relation": "forward"
    }
  ]
};
