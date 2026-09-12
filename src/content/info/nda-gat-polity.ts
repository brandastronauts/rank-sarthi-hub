import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package
 * (12 September 2026). Data only: no page-specific component, CSS or
 * schema change.
 */
export const ndaGatPolity: InfoPageContent = {
  "url": "/nda/gat/polity",
  "platform": "nda",
  "slug": "gat/polity",
  "exam": "NDA & NA GAT",
  "contentStatus": "draft",
  "title": "NDA Polity: Constitution, Administration and Panchayati Raj",
  "eyebrow": "Polity",
  "intent": "Study the polity topics actually supported by the official GAT syllabus, without expanding into a Civil Services course.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "UPSC does not list a standalone “Polity” section. The relevant official material sits inside Section D and covers an elementary study of the Indian Constitution and Indian administration, Panchayati Raj, national integration and the welfare state."
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
      "id": "scope-control",
      "heading": "Scope control",
      "concepts": [
        {
          "id": "s",
          "title": "What is officially supported",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "elementary study of the Indian Constitution;"
                  }
                ],
                [
                  {
                    "text": "elementary study of Indian administration;"
                  }
                ],
                [
                  {
                    "text": "Panchayati Raj;"
                  }
                ],
                [
                  {
                    "text": "national integration and welfare state;"
                  }
                ],
                [
                  {
                    "text": "basic democracy concepts where connected to the named syllabus;"
                  }
                ],
                [
                  {
                    "text": "co-operatives and community development where the topic overlaps governance."
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
      "kind": "prose",
      "id": "blocks",
      "heading": "Recommended content blocks",
      "concepts": [
        {
          "id": "constitution",
          "title": "Constitution basics",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Purpose, constitutional structure, key institutions and basic civic concepts at an elementary level."
                }
              ]
            }
          ]
        },
        {
          "id": "admin",
          "title": "Administration",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A simple understanding of how Union, State and local administration fit together."
                }
              ]
            }
          ]
        },
        {
          "id": "pri",
          "title": "Panchayati Raj",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Basic rural local-government structure and purpose."
                }
              ]
            }
          ]
        },
        {
          "id": "welfare",
          "title": "Welfare and integration",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Explain welfare-state and national-integration ideas in the syllabus context."
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
          "title": "Where to stop",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Do not expand into a UPSC Civil Services polity course. Detailed case law, obscure constitutional articles and current political opinion are avoided unless directly necessary to explain a verified current event."
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
    "title": "NDA Polity for GAT - UPSC-Aligned Scope | Rank Sarthi",
    "description": "Study the NDA polity topics actually supported by the UPSC GAT syllabus, including the Constitution, administration, Panchayati Raj and welfare-state concepts.",
    "ogTitle": "NDA Polity for GAT - UPSC-Aligned Scope",
    "ogDescription": "Study the NDA polity topics actually supported by the UPSC GAT syllabus, including the Constitution, administration, Panchayati Raj and welfare-state concepts.",
    "ogType": "article"
  },
  "sourceNote": "Scope authority is the official UPSC NDA notification. Section proportions, where shown, are official approximate syllabus proportions and never predicted weightage."
};
