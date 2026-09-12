import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package
 * (12 September 2026). Data only: no page-specific component, CSS or
 * schema change.
 */
export const ndaGatBiology: InfoPageContent = {
  "url": "/nda/gat/biology",
  "platform": "nda",
  "slug": "gat/biology",
  "exam": "NDA & NA GAT",
  "contentStatus": "draft",
  "title": "NDA Biology Topics for GAT General Science",
  "eyebrow": "Biology",
  "intent": "Study the biology-related General Science topics: cells and tissues, reproduction, the human body, epidemics, food and balanced diet.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "UPSC names the official section “General Science”, not Biology. This route is a student-friendly biology slice of that official scope, kept at elementary depth."
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
      "id": "coverage",
      "heading": "Coverage",
      "concepts": [
        {
          "id": "living",
          "title": "Living systems",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "living and non-living;"
                  }
                ],
                [
                  {
                    "text": "cells, protoplasm and tissues."
                  }
                ]
              ]
            }
          ]
        },
        {
          "id": "growth",
          "title": "Growth and reproduction",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Elementary plant and animal growth and reproduction."
                }
              ]
            }
          ]
        },
        {
          "id": "body",
          "title": "Human body",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Elementary knowledge of major organs and their basic functions."
                }
              ]
            }
          ]
        },
        {
          "id": "health",
          "title": "Health",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Common epidemics, causes and prevention at a basic public-health level."
                }
              ]
            }
          ]
        },
        {
          "id": "nutrition",
          "title": "Nutrition",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Food as an energy source, constituents of food and balanced diet."
                }
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "kind": "prose",
      "id": "boundary",
      "heading": "Boundary",
      "concepts": [
        {
          "id": "b",
          "title": "Not NEET Biology",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "NEET Biology scope is not copied here. Advanced genetics, biochemistry, detailed taxonomy, molecular biology and clinical diagnosis are excluded unless a future UPSC notification explicitly expands the scope."
                }
              ]
            }
          ]
        }
      ],
      "jump": false
    }
  ],
  "relatedLinks": [
    {
      "label": "NDA General Science for GAT",
      "url": "/nda/gat/general-science",
      "relation": "up",
      "description": "Open the full official General Science scope"
    },
    {
      "label": "NDA GAT Syllabus",
      "url": "/nda/syllabus/gat",
      "relation": "up",
      "description": "Return to the official GAT syllabus scope"
    },
    {
      "label": "NDA General Knowledge Syllabus",
      "url": "/nda/syllabus/general-knowledge",
      "relation": "related",
      "description": "See the official Part B General Knowledge scope"
    },
    {
      "label": "NDA Exam Overview",
      "url": "/nda/nda-exam",
      "relation": "related",
      "description": "Understand the NDA examination and selection route"
    },
    {
      "label": "NDA Home",
      "url": "/nda",
      "relation": "up",
      "description": "Return to the NDA hub"
    }
  ],
  "sourceRefs": [
    "upsc-nda-i-2026-notification",
    "ncert-textbooks-index"
  ],
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Biology for GAT - Official General Science Scope | Rank Sarthi",
    "description": "Study the biology-related NDA GAT General Science topics: cells and tissues, reproduction, human body, epidemics, food and balanced diet.",
    "ogTitle": "NDA Biology for GAT - Official General Science Scope",
    "ogDescription": "Study the biology-related NDA GAT General Science topics: cells and tissues, reproduction, human body, epidemics, food and balanced diet.",
    "ogType": "article"
  },
  "sourceNote": "Scope authority is the official UPSC NDA notification. Section proportions, where shown, are official approximate syllabus proportions and never predicted weightage."
};
