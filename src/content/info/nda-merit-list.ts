import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package and
 * Verified Resource Registry (12 September 2026). Data only.
 */
export const ndaMeritList: InfoPageContent = {
  "url": "/nda/merit-list",
  "platform": "nda",
  "slug": "merit-list",
  "exam": "NDA & NA",
  "contentStatus": "draft",
  "title": "NDA Merit List: Official UPSC Final Result Status",
  "eyebrow": "Merit status",
  "intent": "Check current NDA merit-list status and the difference between written results, final order of merit and medical or service outcomes.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "No 2026 NDA final merit list is officially published as of 12 September 2026. NDA I 2026 has a written result only, and NDA II 2026's examination is scheduled for 13 September 2026. The NDA I 2026 written result is not relabelled as a merit list."
        }
      ]
    }
  ],
  "chips": [
    "UPSC official",
    "Historical clearly labelled",
    "Human review pending"
  ],
  "freshness": {
    "heading": "Monitored merit state",
    "intro": "Current-cycle merit status is monitored on the official final-result archives.",
    "recordIds": [
      "nda-2026-merit-status"
    ]
  },
  "blocks": [
    {
      "kind": "table",
      "id": "status-2026",
      "heading": "Current 2026 status",
      "columns": [
        "Event",
        "What exists",
        "Final merit list"
      ],
      "rows": [
        [
          "NDA I 2026",
          "Written result published 8 May 2026 (name list 13 May 2026)",
          "Not officially published"
        ],
        [
          "NDA II 2026",
          "Examination scheduled 13 Sep 2026",
          "Does not exist"
        ]
      ],
      "jump": true
    },
    {
      "kind": "prose",
      "id": "what-counts",
      "heading": "What counts as a merit record",
      "concepts": [
        {
          "id": "counts",
          "title": "Order of merit",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A final UPSC result may provide an order of merit after the written examination and SSB process. That remains separate from:"
                }
              ]
            },
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "written-result qualification;"
                  }
                ],
                [
                  {
                    "text": "medical examination outcome;"
                  }
                ],
                [
                  {
                    "text": "final service allocation."
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
      "kind": "resources",
      "id": "historical",
      "heading": "Historical official reference",
      "intro": "Historical records are shown with an explicit Historical label and never presented as a current-cycle list.",
      "rows": [
        {
          "id": "nda-ii-2025-final",
          "eventLabel": "NDA II 2025 · Final Result (Historical)",
          "eventDate": "Uploaded 8 April 2026",
          "cells": [
            {
              "label": "Official document",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "Historical · NDA II 2025 Final Result",
                  "badge": "UPSC Official",
                  "cta": "Open official PDF",
                  "href": "https://www.upsc.gov.in/sites/default/files/FR-NDA-NA-II-2025-Engl-08042026.pdf",
                  "owner": "Union Public Service Commission",
                  "trustNote": "The document describes an order-of-merit list and states that medical-examination results were not taken into account in preparing those lists."
                }
              ]
            }
          ]
        }
      ],
      "note": "Historical only. It says nothing about the 2026 cycle.",
      "jump": true
    },
    {
      "kind": "prose",
      "id": "current-control",
      "heading": "Current-cycle control",
      "concepts": [
        {
          "id": "control",
          "title": "No relabelling",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "When UPSC publishes a 2026 final result, the new source is flagged for human verification and registry entry before anything on this page changes."
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
      "label": "NDA Result",
      "url": "/nda/result",
      "relation": "related",
      "description": "Check verified written and final result status"
    },
    {
      "label": "NDA Cutoff",
      "url": "/nda/cutoff",
      "relation": "related",
      "description": "See official qualifying and final-stage marks"
    },
    {
      "label": "NDA Selection Process",
      "url": "/nda/selection-process",
      "relation": "related",
      "description": "See how written, SSB and medical stages fit together"
    },
    {
      "label": "NDA Exam Dates",
      "url": "/nda/exam-dates",
      "relation": "related",
      "description": "Check the verified NDA I and NDA II 2026 timeline"
    },
    {
      "label": "NDA Home",
      "url": "/nda",
      "relation": "up",
      "description": "Return to the NDA hub"
    }
  ],
  "sourceRefs": [
    "upsc-nda-i-2026-written-result-roll",
    "upsc-final-result-archives",
    "upsc-nda-ii-2025-final-result"
  ],
  "sourceNote": "Historical official documents stay accessible with an explicit Historical label.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Merit List - Official Final Result & Order of Merit | Rank Sarthi",
    "description": "Check current NDA merit-list status and understand the difference between written results, final order of merit and medical or service outcomes.",
    "ogTitle": "NDA Merit List - Official Final Result & Order of Merit",
    "ogDescription": "Check current NDA merit-list status and understand the difference between written results, final order of merit and medical or service outcomes.",
    "ogType": "article"
  }
};
