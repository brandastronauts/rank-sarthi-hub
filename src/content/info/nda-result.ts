import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package and
 * Verified Resource Registry (12 September 2026). Data only.
 */
export const ndaResult: InfoPageContent = {
  "url": "/nda/result",
  "platform": "nda",
  "slug": "result",
  "exam": "NDA & NA",
  "contentStatus": "draft",
  "title": "NDA Result 2026: NDA I Written Result and NDA II Status",
  "eyebrow": "Result status",
  "intent": "Check verified UPSC result status separately for NDA I and NDA II 2026.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA I 2026's written result was published on 8 May 2026, with the name list on 13 May 2026. Appearing in a written-result list means qualification for the SSB interview stage subject to UPSC conditions; it is not final selection. NDA I 2026's final result is not published, and NDA II 2026's examination is scheduled for 13 September 2026."
        }
      ]
    }
  ],
  "chips": [
    "UPSC official",
    "Stages kept separate",
    "Human review pending"
  ],
  "freshness": {
    "heading": "Monitored result state",
    "intro": "Each stage is monitored as its own field.",
    "recordIds": [
      "nda-i-2026-written-result",
      "nda-i-2026-final-result-status",
      "nda-ii-2026-result-status"
    ]
  },
  "blocks": [
    {
      "kind": "resources",
      "id": "nda-i-2026-result",
      "heading": "NDA I 2026 — official written result documents",
      "intro": "Both documents are official UPSC PDFs for the written stage only.",
      "rows": [
        {
          "id": "nda-i-2026-wr-roll",
          "eventLabel": "NDA I 2026 · Written Result (roll-number list)",
          "eventDate": "Published 8 May 2026",
          "cells": [
            {
              "label": "Official document",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "Written Result - Roll Number List",
                  "badge": "UPSC Official",
                  "cta": "Open official PDF",
                  "href": "https://www.upsc.gov.in/sites/default/files/WR-RollList-NDA-NA-I-2026-Engl-080526.pdf",
                  "owner": "Union Public Service Commission",
                  "trustNote": "Written-stage qualification for SSB only; not final merit."
                }
              ]
            }
          ]
        },
        {
          "id": "nda-i-2026-wr-name",
          "eventLabel": "NDA I 2026 · Written Result (name list)",
          "eventDate": "Published 13 May 2026",
          "cells": [
            {
              "label": "Official document",
              "actions": [
                {
                  "provenance": "OFFICIAL_AUTHORITY_COPY",
                  "label": "Written Result - Name List",
                  "badge": "UPSC Official",
                  "cta": "Open official PDF",
                  "href": "https://www.upsc.gov.in/sites/default/files/WR-NameList-NDA-NA-I-2026-Engl-130526.pdf",
                  "owner": "Union Public Service Commission",
                  "trustNote": "Name-list version of the written result; still not final merit."
                }
              ]
            }
          ]
        },
        {
          "id": "nda-i-2026-final",
          "eventLabel": "NDA I 2026 · Final Result / Merit",
          "eventDate": "Not officially published",
          "cells": [
            {
              "label": "Official document",
              "actions": [
                {
                  "provenance": "NOT_AVAILABLE",
                  "label": "Final result not published",
                  "badge": "Official only",
                  "owner": "Union Public Service Commission",
                  "trustNote": "A written result is never relabelled as a final result."
                }
              ]
            }
          ]
        }
      ],
      "jump": true
    },
    {
      "kind": "table",
      "id": "nda-ii-2026-result",
      "heading": "NDA II 2026 status",
      "columns": [
        "Item",
        "Official status"
      ],
      "rows": [
        [
          "Examination",
          "Scheduled 13 Sep 2026"
        ],
        [
          "Written result",
          "Not officially published"
        ],
        [
          "Final result",
          "Not officially published"
        ]
      ],
      "jump": true,
      "note": "No result date is predicted."
    },
    {
      "kind": "prose",
      "id": "stage-separation",
      "heading": "Stage separation rule",
      "concepts": [
        {
          "id": "stages",
          "title": "Labels that never merge",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Written Result"
                  }
                ],
                [
                  {
                    "text": "SSB outcome"
                  }
                ],
                [
                  {
                    "text": "Final Result / Order of Merit"
                  }
                ],
                [
                  {
                    "text": "Medical outcome"
                  }
                ],
                [
                  {
                    "text": "Service allocation"
                  }
                ],
                [
                  {
                    "text": "Cutoff"
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "A candidate appearing in a written-result PDF is not the same as being finally selected."
                }
              ]
            }
          ]
        }
      ],
      "jump": true
    }
  ],
  "relatedLinks": [
    {
      "label": "NDA Merit List",
      "url": "/nda/merit-list",
      "relation": "related",
      "description": "Check official final result and order-of-merit status"
    },
    {
      "label": "NDA Cutoff",
      "url": "/nda/cutoff",
      "relation": "related",
      "description": "See official qualifying and final-stage marks"
    },
    {
      "label": "NDA Exam Dates",
      "url": "/nda/exam-dates",
      "relation": "related",
      "description": "Check the verified NDA I and NDA II 2026 timeline"
    },
    {
      "label": "NDA Selection Process",
      "url": "/nda/selection-process",
      "relation": "related",
      "description": "See how written, SSB and medical stages fit together"
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
    "upsc-nda-i-2026-exam-page",
    "upsc-nda-i-2026-written-result-roll",
    "upsc-nda-i-2026-written-result-name",
    "upsc-nda-exam-page",
    "upsc-final-result-archives"
  ],
  "sourceNote": "Result documents are linked from UPSC and are not rehosted.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Result 2026 - Official UPSC Result Status | Rank Sarthi",
    "description": "Check verified UPSC result status separately for NDA I and NDA II 2026, including written result and final-result availability.",
    "ogTitle": "NDA Result 2026 - Official UPSC Result Status",
    "ogDescription": "Check verified UPSC result status separately for NDA I and NDA II 2026, including written result and final-result availability.",
    "ogType": "article"
  }
};
