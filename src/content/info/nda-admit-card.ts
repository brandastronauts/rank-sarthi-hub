import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package and
 * Verified Resource Registry (12 September 2026). Data only.
 */
export const ndaAdmitCard: InfoPageContent = {
  "url": "/nda/admit-card",
  "platform": "nda",
  "slug": "admit-card",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA II 2026 Admit Card: Official UPSC e-Admit Card Status",
  "eyebrow": "Current event",
  "intent": "Check the official NDA II 2026 e-Admit Card status, exam date and UPSC exam-day entry instructions.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "UPSC uploaded the NDA II 2026 e-Admit Card on 3 September 2026 for the examination on 13 September 2026. Access is through the official UPSC examination page; no download URL is mirrored or fabricated here."
        }
      ]
    }
  ],
  "chips": [
    "UPSC official",
    "Live event",
    "Human review pending"
  ],
  "freshness": {
    "heading": "Monitored admit-card state",
    "intro": "The official access state is monitored daily until the examination.",
    "recordIds": [
      "nda-ii-2026-admit-card"
    ]
  },
  "blocks": [
    {
      "kind": "resources",
      "id": "admit-card-access",
      "heading": "Official access and notice",
      "intro": "Use the official UPSC destinations only.",
      "rows": [
        {
          "id": "nda-ii-2026-admit-access",
          "eventLabel": "NDA II 2026 · e-Admit Card",
          "eventDate": "Uploaded 3 Sep 2026",
          "cells": [
            {
              "label": "Official access",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "UPSC examination page",
                  "badge": "UPSC Official",
                  "cta": "Open official exam page",
                  "href": "https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026",
                  "owner": "Union Public Service Commission",
                  "trustNote": "The e-Admit Card link is exposed on the official examination page."
                }
              ]
            },
            {
              "label": "Official notice",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "e-Admit Card Press Note",
                  "badge": "UPSC Official",
                  "cta": "View official notice",
                  "href": "https://www.upsc.gov.in/sites/default/files/PressNote-NDA-NA-II-26-Engl-030926.pdf",
                  "owner": "Union Public Service Commission"
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
      "id": "exam-day",
      "heading": "UPSC exam-day points from the press note",
      "concepts": [
        {
          "id": "points",
          "title": "Official instructions",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "UPSC states that no paper admit card will be issued."
                  }
                ],
                [
                  {
                    "text": "Candidates should preserve the e-Admit Card until declaration of the final result."
                  }
                ],
                [
                  {
                    "text": "Entry closes at 9:30 AM for the morning session."
                  }
                ],
                [
                  {
                    "text": "Entry closes at 1:30 PM for the afternoon session."
                  }
                ],
                [
                  {
                    "text": "The official notice requires a black ballpoint pen for marking responses."
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
      "kind": "table",
      "id": "archive",
      "heading": "Verified record history",
      "columns": [
        "Event",
        "e-Admit Card uploaded",
        "Examination"
      ],
      "rows": [
        [
          "NDA I 2026",
          "2 Apr 2026",
          "12 Apr 2026 (completed)"
        ],
        [
          "NDA II 2026",
          "3 Sep 2026",
          "13 Sep 2026 (scheduled)"
        ]
      ],
      "jump": true,
      "intro": "Historical official records are preserved rather than deleted; the live NDA II state is shown first.",
      "note": "Once the examination is over, the live-alert treatment is archived while the verified record history stays visible."
    },
    {
      "kind": "prose",
      "id": "freshness-rule",
      "heading": "How the visible status is chosen",
      "concepts": [
        {
          "id": "rule",
          "title": "Official state, human approval",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The visible status follows the last verified official state. Auto-publish is off: a detected change is reviewed by a person before it appears here."
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
      "label": "NDA Exam Dates",
      "url": "/nda/exam-dates",
      "relation": "related",
      "description": "Check the verified NDA I and NDA II 2026 timeline"
    },
    {
      "label": "NDA Application Form",
      "url": "/nda/application-form",
      "relation": "related",
      "description": "Check official application window status"
    },
    {
      "label": "NDA Result",
      "url": "/nda/result",
      "relation": "related",
      "description": "Check verified written and final result status"
    },
    {
      "label": "NDA Previous Year Papers",
      "url": "/nda/previous-year-papers",
      "relation": "related",
      "description": "Open official UPSC question papers by year and event"
    },
    {
      "label": "NDA Home",
      "url": "/nda",
      "relation": "up",
      "description": "Return to the NDA hub"
    }
  ],
  "sourceRefs": [
    "upsc-nda-exam-page",
    "upsc-nda-ii-2026-press-note",
    "upsc-nda-i-2026-exam-page"
  ],
  "sourceNote": "No admit-card file is mirrored. Candidates reach UPSC's own destination.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Admit Card 2026 - NDA II e-Admit Card | Rank Sarthi",
    "description": "Check the official NDA II 2026 e-Admit Card status, exam date and UPSC exam-day entry instructions.",
    "ogTitle": "NDA Admit Card 2026 - NDA II e-Admit Card",
    "ogDescription": "Check the official NDA II 2026 e-Admit Card status, exam date and UPSC exam-day entry instructions.",
    "ogType": "article"
  }
};
