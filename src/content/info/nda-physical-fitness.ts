import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaPhysicalFitness: InfoPageContent = {
  "url": "/nda/physical-fitness",
  "platform": "nda",
  "slug": "physical-fitness",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA physical fitness: prepare for academy training without confusing fitness with medical eligibility",
  "eyebrow": "Physical Fitness",
  "intent": "Use official NDA joining guidance to build running, bodyweight, swimming and general conditioning without confusing fitness with medical eligibility.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Physical conditioning can make the transition to academy training more manageable, but it is not a substitute for the official medical examination. This page provides training-readiness guidance, not a medical diagnosis or a guarantee of selection."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Official NDA joining instructions have advised prospective cadets to build conditioning through jogging with short sprints, skipping, push-ups, sit-ups, chin-ups, basic swimming familiarity and, in some versions, cycling. One official joining-instruction edition gives preparation targets of roughly 3 to 5 km of jogging, 40 push-ups and sit-ups, and 4 chin-ups."
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Treat those as academy preparation guidance, not as a universal NDA medical pass test."
        }
      ]
    }
  ],
  "chips": [
    "Official-source checked",
    "Human review pending"
  ],
  "blocks": [
    {
      "kind": "prose",
      "id": "start-gradually",
      "heading": "Start gradually",
      "concepts": [
        {
          "id": "start-gradually-intro",
          "title": "Start gradually",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "If you are not currently training, do not jump straight to the top volume in an old joining instruction."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A safer progression principle:"
                }
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                [
                  {
                    "text": "Establish consistent easy movement."
                  }
                ],
                [
                  {
                    "text": "Add running volume gradually."
                  }
                ],
                [
                  {
                    "text": "Add bodyweight strength with good technique."
                  }
                ],
                [
                  {
                    "text": "Add short faster efforts only after a base is comfortable."
                  }
                ],
                [
                  {
                    "text": "Include recovery and mobility."
                  }
                ],
                [
                  {
                    "text": "Learn basic swimming in a supervised environment if you cannot swim."
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A qualified reviewer should check any detailed plan before publication."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "run-for-consistency-before-speed",
      "heading": "Run for consistency before speed",
      "concepts": [
        {
          "id": "run-for-consistency-before-speed-intro",
          "title": "Run for consistency before speed",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "For NDA readiness, consistency matters more than a single heroic run."
                }
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Track:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "comfortable continuous distance;"
                  }
                ],
                [
                  {
                    "text": "whether form breaks down under fatigue;"
                  }
                ],
                [
                  {
                    "text": "recovery between sessions;"
                  }
                ],
                [
                  {
                    "text": "pain or persistent discomfort."
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Do not train through sharp or persistent pain. Seek appropriate professional advice when needed."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "build-bodyweight-strength",
      "heading": "Build bodyweight strength",
      "concepts": [
        {
          "id": "build-bodyweight-strength-intro",
          "title": "Build bodyweight strength",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Useful movements include:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "push-ups;"
                  }
                ],
                [
                  {
                    "text": "sit-ups or appropriate trunk-strength work;"
                  }
                ],
                [
                  {
                    "text": "chin-ups/pull-ups;"
                  }
                ],
                [
                  {
                    "text": "squats and lunges;"
                  }
                ],
                [
                  {
                    "text": "basic mobility."
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Quality of movement matters. A rushed repetition count is not useful if technique collapses."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "swimming-and-cycling",
      "heading": "Swimming and cycling",
      "concepts": [
        {
          "id": "swimming-and-cycling-intro",
          "title": "Swimming and cycling",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "NDA joining instructions have highlighted swimming familiarity as beneficial and have also referenced cycling in some course instructions. Use supervised instruction for swimming, especially for beginners."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "table",
      "id": "a-simple-readiness-log-table",
      "heading": "A simple readiness log",
      "columns": [
        "Area",
        "Record",
        "Why"
      ],
      "rows": [
        [
          "Easy run",
          "distance + effort",
          "consistency"
        ],
        [
          "Push-ups",
          "clean reps",
          "upper-body endurance"
        ],
        [
          "Sit-ups/core",
          "clean reps",
          "trunk endurance"
        ],
        [
          "Chin-ups",
          "clean reps",
          "pulling strength"
        ],
        [
          "Mobility",
          "restrictions/pain",
          "training quality"
        ],
        [
          "Swimming",
          "basic comfort only",
          "academy adaptation"
        ]
      ],
      "note": "The log is a training aid. It does not determine medical fitness."
    },
    {
      "kind": "prose",
      "id": "medical-safety-boundary",
      "heading": "Medical safety boundary",
      "concepts": [
        {
          "id": "medical-safety-boundary-intro",
          "title": "Medical safety boundary",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "This page must never answer:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "\"Am I medically fit for NDA?\""
                  }
                ],
                [
                  {
                    "text": "\"Will this condition reject me?\""
                  }
                ],
                [
                  {
                    "text": "\"Can I train away a medical standard?\""
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Use "
                },
                {
                  "text": "/nda/physical-standards",
                  "code": true
                },
                {
                  "text": " for official-rule orientation and the official medical board for the actual decision."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "relatedLinks": [
    {
      "label": "Physical Standards",
      "url": "/nda/physical-standards",
      "relation": "related"
    },
    {
      "label": "SSB Interview Guide",
      "url": "/nda/ssb-interview",
      "relation": "related"
    },
    {
      "label": "Life After NDA",
      "url": "/nda/life-after-nda",
      "relation": "related"
    }
  ],
  "sourceRefs": [
    "nda-joining-instructions-151",
    "nda-official-site"
  ],
  "sourceNote": "Official UPSC and Armed Forces sources are the authority for every exam fact on this page. Rank Sarthi explanation is kept separate from official wording.",
  "contributorPolicy": [
    "Author: UNASSIGNED",
    "Reviewer: UNASSIGNED",
    "Last Reviewed: pending human review",
    "Reviewer Type: Qualified appropriate medical/physical reviewer",
    "Evidence Required: Official NDA joining-instruction conditioning guidance, clearly separated from medical eligibility; progressive training safety review.",
    "Current Evidence State: Official NDA joining-instruction guidance located; reviewer unassigned.",
    "Publication Blocker: Medical/physical reviewer sign-off and latest joining-instruction recheck.",
    "Refresh Trigger: When NDA joining instructions change; otherwise annual review."
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Physical Fitness: Safe Pre-Academy Conditioning | Rank Sarthi",
    "description": "Use official NDA joining guidance to build running, bodyweight, swimming and general conditioning without confusing fitness with medical eligibility.",
    "ogType": "article"
  }
};
