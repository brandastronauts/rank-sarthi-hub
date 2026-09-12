import type { InfoPageContent } from "../types";
import { ndaPaperRowsFor } from "../resources/nda-papers";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package and
 * Verified Resource Registry (12 September 2026). Data only.
 */
export const ndaPreviousYearPapers: InfoPageContent = {
  "url": "/nda/previous-year-papers",
  "platform": "nda",
  "slug": "previous-year-papers",
  "exam": "NDA & NA",
  "contentStatus": "draft",
  "title": "NDA Previous Year Question Papers: Official UPSC PDFs",
  "eyebrow": "Resource finder",
  "intent": "Open verified UPSC NDA previous-year question papers by year and event for Mathematics and General Ability Test.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Papers come first on this page. NDA I 2026 Mathematics and General Ability Test papers are available as official UPSC PDFs. NDA II 2026 papers are not published yet because that examination is scheduled for 13 September 2026. Answer keys are treated as separate records and are never inferred from a paper."
        }
      ]
    }
  ],
  "chips": [
    "UPSC official",
    "Events kept separate",
    "Human review pending"
  ],
  "freshness": {
    "heading": "Monitored paper availability",
    "intro": "Paper availability is monitored per event identity.",
    "recordIds": [
      "nda-i-2026-paper-archive",
      "nda-ii-2026-paper-publication"
    ],
    "note": "A newly detected official source is activated only after human verification."
  },
  "blocks": [
    {
      "kind": "resources",
      "id": "papers-2026-nda-i",
      "heading": "2026 · NDA I — official UPSC papers",
      "intro": "Choose the paper. Each row shows its own source owner, trust label and separate answer-key state.",
      "rows": ndaPaperRowsFor("NDA-I-2026"),
      "note": "Files are linked from UPSC and are not rehosted.",
      "jump": true
    },
    {
      "kind": "resources",
      "id": "papers-2026-nda-ii",
      "heading": "2026 · NDA II — not yet published",
      "intro": "The NDA II 2026 examination is scheduled for 13 September 2026. Both paper actions stay inactive until UPSC publishes an official resource.",
      "rows": ndaPaperRowsFor("NDA-II-2026"),
      "note": "Coaching PDFs, reconstructed papers and memory-based copies are never shown as official papers.",
      "jump": true
    },
    {
      "kind": "prose",
      "id": "older-years",
      "heading": "Older years",
      "concepts": [
        {
          "id": "older",
          "title": "Use the official UPSC library",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "For earlier years and events, use the official UPSC previous-question-papers library for year and event discovery. A direct historical link is activated only after that paper URL is individually verified and entered in the registry. URL patterns are never guessed."
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
      "id": "trust-labels",
      "heading": "Trust labels used here",
      "concepts": [
        {
          "id": "labels",
          "title": "Four distinct labels",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Official UPSC Question Paper"
                  }
                ],
                [
                  {
                    "text": "Verified Test Booklet Scan"
                  }
                ],
                [
                  {
                    "text": "Verified Paper Reconstruction"
                  }
                ],
                [
                  {
                    "text": "Source Not Verified"
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "These labels are never collapsed into one generic “verified paper”."
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
      "id": "how-to",
      "heading": "How to use this page",
      "concepts": [
        {
          "id": "steps",
          "title": "Four steps",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "choose a year;"
                  }
                ],
                [
                  {
                    "text": "choose NDA I or NDA II;"
                  }
                ],
                [
                  {
                    "text": "open Mathematics or GAT;"
                  }
                ],
                [
                  {
                    "text": "use answer keys only when separately verified."
                  }
                ]
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
      "label": "NDA I 2026 question papers",
      "url": "/nda/previous-year-papers/2026-1",
      "relation": "forward",
      "description": "Open the official NDA I 2026 Mathematics and GAT papers"
    },
    {
      "label": "NDA Exam Dates",
      "url": "/nda/exam-dates",
      "relation": "related",
      "description": "Check the verified NDA I and NDA II 2026 timeline"
    },
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
      "label": "NDA Home",
      "url": "/nda",
      "relation": "up",
      "description": "Return to the NDA hub"
    }
  ],
  "sourceRefs": [
    "upsc-previous-papers",
    "upsc-nda-i-2026-qp-mathematics",
    "upsc-nda-i-2026-qp-gat",
    "upsc-nda-i-2026-exam-page",
    "upsc-answer-key-index"
  ],
  "sourceNote": "Paper access does not establish a reviewed question-level analysis dataset. External resources are linked and not rehosted.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Previous Year Papers - NDA I & II Official PDFs | Rank Sarthi",
    "description": "Open verified UPSC NDA previous-year question papers by year and event for Mathematics and General Ability Test.",
    "ogTitle": "NDA Previous Year Papers - NDA I & II Official PDFs",
    "ogDescription": "Open verified UPSC NDA previous-year question papers by year and event for Mathematics and General Ability Test.",
    "ogType": "article"
  }
};
