import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package and
 * Verified Resource Registry (12 September 2026). Data only.
 */
export const ndaApplicationForm: InfoPageContent = {
  "url": "/nda/application-form",
  "platform": "nda",
  "slug": "application-form",
  "exam": "NDA & NA 2026",
  "contentStatus": "draft",
  "title": "NDA Application Form 2026: Official UPSC Status",
  "eyebrow": "Application status",
  "intent": "Check the verified 2026 UPSC NDA application status and official closing dates for NDA I and NDA II.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Both 2026 application windows are closed. NDA I 2026 closed on 30 December 2025 at 6:00 PM and NDA II 2026 closed on 11 June 2026 at 6:00 PM. No 2027 registration exists, because no official UPSC source announces one."
        }
      ]
    }
  ],
  "chips": [
    "UPSC official",
    "Both 2026 windows closed",
    "Human review pending"
  ],
  "freshness": {
    "heading": "Monitored application state",
    "intro": "Window state is monitored on the official examination pages.",
    "recordIds": [
      "nda-2026-application-status"
    ]
  },
  "blocks": [
    {
      "kind": "table",
      "id": "status-2026",
      "heading": "Current status on 12 September 2026",
      "columns": [
        "Event",
        "Notification",
        "Application deadline",
        "Status"
      ],
      "rows": [
        [
          "NDA I 2026",
          "10 Dec 2025",
          "30 Dec 2025, 6:00 PM",
          "Closed"
        ],
        [
          "NDA II 2026",
          "20 May 2026",
          "11 Jun 2026, 6:00 PM",
          "Closed"
        ]
      ],
      "jump": true,
      "note": "The NDA I notification states that no withdrawal is allowed after submission and no correction facility is available after submission/closure. That wording is not generalised to any other event without checking its own official notice."
    },
    {
      "kind": "resources",
      "id": "official-pages",
      "heading": "Official destinations",
      "intro": "Rather than keeping a stale application URL after a window closes, this page routes to the official examination pages.",
      "rows": [
        {
          "id": "nda-i-2026-app",
          "eventLabel": "NDA I 2026 · Application record",
          "eventDate": "Closed 30 Dec 2025",
          "cells": [
            {
              "label": "Official page",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "UPSC NDA I 2026 examination page",
                  "badge": "UPSC Official",
                  "cta": "Open official exam page",
                  "href": "https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28I%29%2C%202026",
                  "owner": "Union Public Service Commission"
                }
              ]
            },
            {
              "label": "Notification",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "NDA I 2026 notification",
                  "badge": "UPSC Official",
                  "cta": "View official notice",
                  "href": "https://www.upsc.gov.in/sites/default/files/Notif-NDA-NA-I-2026-Engl-101225.pdf",
                  "owner": "Union Public Service Commission"
                }
              ]
            }
          ]
        },
        {
          "id": "nda-ii-2026-app",
          "eventLabel": "NDA II 2026 · Application record",
          "eventDate": "Closed 11 Jun 2026",
          "cells": [
            {
              "label": "Official page",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "UPSC NDA II 2026 examination page",
                  "badge": "UPSC Official",
                  "cta": "Open official exam page",
                  "href": "https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026",
                  "owner": "Union Public Service Commission"
                }
              ]
            },
            {
              "label": "Notification",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "NDA II 2026 notification",
                  "badge": "UPSC Official",
                  "cta": "View official notice",
                  "href": "https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf",
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
      "id": "field-rules",
      "heading": "How milestones are recorded",
      "concepts": [
        {
          "id": "rules",
          "title": "Separate fields, no inference",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "notification, application deadline, any official fee/payment milestone, edit/correction window and withdrawal window are kept as separate fields;"
                  }
                ],
                [
                  {
                    "text": "if a window is not verified for an event, it is omitted rather than inferred;"
                  }
                ],
                [
                  {
                    "text": "future NDA cycles are never generated from annual patterns."
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
      "id": "future-cycle",
      "heading": "Next cycle",
      "concepts": [
        {
          "id": "future",
          "title": "Not officially announced",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A future NDA application window is shown only when a real official UPSC source exists. As of 12 September 2026, no such source has been published."
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
      "label": "NDA Admit Card",
      "url": "/nda/admit-card",
      "relation": "related",
      "description": "Check the official e-Admit Card status"
    },
    {
      "label": "NDA Result",
      "url": "/nda/result",
      "relation": "related",
      "description": "Check verified written and final result status"
    },
    {
      "label": "NDA Home",
      "url": "/nda",
      "relation": "up",
      "description": "Return to the NDA hub"
    }
  ],
  "sourceRefs": [
    "upsc-nda-i-2026-exam-page",
    "upsc-nda-i-2026-notification",
    "upsc-nda-exam-page",
    "upsc-nda-notification"
  ],
  "sourceNote": "Application status comes from official UPSC examination pages and notifications only.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Application Form 2026 - NDA I & II Status | Rank Sarthi",
    "description": "Check the verified 2026 UPSC NDA application status and official closing dates for NDA I and NDA II.",
    "ogTitle": "NDA Application Form 2026 - NDA I & II Status",
    "ogDescription": "Check the verified 2026 UPSC NDA application status and official closing dates for NDA I and NDA II.",
    "ogType": "article"
  }
};
