import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA-B production package and
 * Verified Resource Registry (12 September 2026). Data only.
 */
export const ndaCutoff: InfoPageContent = {
  "url": "/nda/cutoff",
  "platform": "nda",
  "slug": "cutoff",
  "exam": "NDA & NA",
  "contentStatus": "draft",
  "title": "NDA Cutoff: Official UPSC Written and Final Marks",
  "eyebrow": "Official marks records",
  "intent": "Check official NDA qualifying and final-stage marks without mixing written cutoff, final merit or service outcomes.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "UPSC has not yet published a numeric 2026 cutoff. Its 8 May 2026 written-result notice states that marks and cutoff marks are uploaded only after the entire process is over and the final result is declared. The verified NDA I 2025 record is shown separately and clearly labelled historical."
        }
      ]
    }
  ],
  "chips": [
    "UPSC official",
    "Metrics kept separate",
    "Human review pending"
  ],
  "freshness": {
    "heading": "Monitored cutoff records",
    "intro": "The 2026 status and the historical 2025 record are monitored separately.",
    "recordIds": [
      "nda-i-2026-cutoff-status",
      "nda-i-2025-cutoff-historical"
    ],
    "note": "No numeric cutoff is ever inferred; a new official document requires human verification."
  },
  "blocks": [
    {
      "kind": "table",
      "id": "current-2026",
      "heading": "Current 2026 state",
      "columns": [
        "Event",
        "Stage",
        "Official status"
      ],
      "rows": [
        [
          "NDA I 2026",
          "Written",
          "Numeric cutoff not officially published"
        ],
        [
          "NDA I 2026",
          "Final",
          "Final result and final-stage marks not officially published"
        ],
        [
          "NDA II 2026",
          "Written",
          "Exam scheduled 13 Sep 2026; no cutoff exists"
        ]
      ],
      "jump": true,
      "note": "No numeric value is inferred from the written-result roll list, a coaching estimate or a historical trend."
    },
    {
      "kind": "table",
      "id": "historical-2025",
      "heading": "Historical: NDA I 2025 official record",
      "columns": [
        "Metric label",
        "Marks",
        "Marks out of",
        "Per-subject condition",
        "Publication"
      ],
      "rows": [
        [
          "Minimum qualifying standard at written stage",
          "334",
          "900",
          "At least 25% in each subject",
          "13 Oct 2025 (Historical)"
        ],
        [
          "Marks secured by the last recommended candidate at final stage",
          "699",
          "1800",
          "Not applicable",
          "13 Oct 2025 (Historical)"
        ]
      ],
      "jump": true,
      "intro": "These are distinct metrics from the official UPSC recommendation-details and cutoff document. They are not labelled simply “the cutoff”.",
      "note": "Historical label applies to both rows. They describe the 2025 cycle only."
    },
    {
      "kind": "prose",
      "id": "terminology",
      "heading": "Terminology that must stay separate",
      "concepts": [
        {
          "id": "terms",
          "title": "Four different things",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "written-stage minimum qualifying standard;"
                  }
                ],
                [
                  {
                    "text": "marks of the last recommended candidate at final stage;"
                  }
                ],
                [
                  {
                    "text": "final merit / order of merit;"
                  }
                ],
                [
                  {
                    "text": "service allocation."
                  }
                ]
              ]
            },
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Collapsing these into one generic “NDA cutoff” misleads candidates, so this page keeps every row labelled with event identity, stage, metric, marks, marks out of, official source, publication date and current-or-historical status."
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
      "id": "prohibitions",
      "heading": "What this page never publishes",
      "concepts": [
        {
          "id": "no",
          "title": "Prohibited outputs",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "expected cutoff;"
                  }
                ],
                [
                  {
                    "text": "predicted safe score;"
                  }
                ],
                [
                  {
                    "text": "conversion of written-result roll lists into a numeric threshold;"
                  }
                ],
                [
                  {
                    "text": "service-allocation threshold unless UPSC officially supplies it."
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
      "label": "NDA Result",
      "url": "/nda/result",
      "relation": "related",
      "description": "Check verified written and final result status"
    },
    {
      "label": "NDA Merit List",
      "url": "/nda/merit-list",
      "relation": "related",
      "description": "Check official final result and order-of-merit status"
    },
    {
      "label": "NDA Exam Dates",
      "url": "/nda/exam-dates",
      "relation": "related",
      "description": "Check the verified NDA I and NDA II 2026 timeline"
    },
    {
      "label": "NDA Previous Year Papers",
      "url": "/nda/previous-year-papers",
      "relation": "related",
      "description": "Open official UPSC question papers by year and event"
    },
    {
      "label": "NDA Selection Process",
      "url": "/nda/selection-process",
      "relation": "related",
      "description": "See how written, SSB and medical stages fit together"
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
    "upsc-cutoff-marks-index",
    "upsc-nda-i-2025-cutoff"
  ],
  "sourceNote": "Every figure on this page comes from an official UPSC document with its own publication date.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Cutoff Marks - Official UPSC Records | Rank Sarthi",
    "description": "Check official NDA qualifying and final-stage marks without mixing written cutoff, final merit or service outcomes.",
    "ogTitle": "NDA Cutoff Marks - Official UPSC Records",
    "ogDescription": "Check official NDA qualifying and final-stage marks without mixing written cutoff, final merit or service outcomes.",
    "ogType": "article"
  }
};
