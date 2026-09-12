import type { InfoPageContent } from "../types";
import { ndaPaperRowsFor } from "../resources/nda-papers";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package and
 * Verified Resource Registry (12 September 2026). Data only.
 */
export const ndaPreviousYearPapers20261: InfoPageContent = {
  "url": "/nda/previous-year-papers/2026-1",
  "platform": "nda",
  "slug": "previous-year-papers/2026-1",
  "exam": "NDA & NA (I) 2026",
  "contentStatus": "draft",
  "title": "NDA I 2026 Question Papers: Mathematics and GAT",
  "eyebrow": "NDA-I-2026",
  "intent": "Open the official UPSC NDA I 2026 Mathematics and General Ability Test question papers.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "NDA I 2026 was held on 12 April 2026 and UPSC uploaded both question papers on 13 April 2026. This page is a filtered view of the same shared paper registry used by the master hub, restricted to event identity NDA-I-2026."
        }
      ]
    }
  ],
  "chips": [
    "UPSC official",
    "NDA-I-2026",
    "Human review pending"
  ],
  "freshness": {
    "heading": "Monitored paper availability",
    "intro": "Availability of the official NDA I 2026 files is rechecked on the official library.",
    "recordIds": [
      "nda-i-2026-paper-archive"
    ]
  },
  "blocks": [
    {
      "kind": "resources",
      "id": "nda-i-2026-papers",
      "heading": "Official NDA I 2026 papers",
      "intro": "Each row carries its own official source owner and a separate answer-key state.",
      "rows": ndaPaperRowsFor("NDA-I-2026"),
      "note": "Publication date on the UPSC exam page: 13 April 2026. Exam date: 12 April 2026.",
      "jump": true
    },
    {
      "kind": "prose",
      "id": "event-identity",
      "heading": "Event identity",
      "concepts": [
        {
          "id": "id",
          "title": "NDA-I-2026 only",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "This page never shows NDA II 2026 resources. Question paper, answer key, result, cutoff and merit each keep their own event ownership."
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
      "id": "answer-key-state",
      "heading": "Answer-key state",
      "concepts": [
        {
          "id": "ak",
          "title": "Official keys only",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "No official UPSC answer key is listed for NDA I 2026 as of 12 September 2026. A coaching or reconstructed solution is never presented as an official UPSC answer key."
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
      "label": "NDA Previous Year Papers",
      "url": "/nda/previous-year-papers",
      "relation": "related",
      "description": "Open official UPSC question papers by year and event"
    },
    {
      "label": "NDA Result",
      "url": "/nda/result",
      "relation": "related",
      "description": "Check verified written and final result status"
    },
    {
      "label": "NDA Exam Dates",
      "url": "/nda/exam-dates",
      "relation": "related",
      "description": "Check the verified NDA I and NDA II 2026 timeline"
    },
    {
      "label": "NDA Cutoff",
      "url": "/nda/cutoff",
      "relation": "related",
      "description": "See official qualifying and final-stage marks"
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
    "upsc-previous-papers",
    "upsc-nda-i-2026-qp-mathematics",
    "upsc-nda-i-2026-qp-gat"
  ],
  "sourceNote": "This child route reads the shared NDA question-paper registry filtered to NDA-I-2026. No second inventory is maintained.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA I 2026 Question Papers - Official UPSC PDFs | Rank Sarthi",
    "description": "Open the official UPSC NDA I 2026 Mathematics and General Ability Test question papers, with source ownership visible on every row.",
    "ogTitle": "NDA I 2026 Question Papers - Official UPSC PDFs",
    "ogDescription": "Open the official UPSC NDA I 2026 Mathematics and General Ability Test question papers, with source ownership visible on every row.",
    "ogType": "article"
  }
};
