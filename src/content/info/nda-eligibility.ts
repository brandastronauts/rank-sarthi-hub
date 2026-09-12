import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaEligibility: InfoPageContent = {
  "url": "/nda/eligibility",
  "platform": "nda",
  "slug": "eligibility",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA II 2026 Eligibility: DOB, Marital Status, Education, Nationality and Medical Conditions",
  "eyebrow": "Eligibility",
  "intent": "Check the exact NDA II 2026 date-of-birth window, marital status, Army vs Air Force / Navy education rules and medical caveat.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "For NDA & NA Examination (II), 2026, UPSC applies a cycle-specific date-of-birth window. Eligible candidates must satisfy the notification's nationality conditions, be unmarried, meet the required education for the chosen wing / course, and meet the applicable physical and medical standards. Do not convert the current DOB window into a permanent age rule."
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
      "id": "date-of-birth-for-nda-ii-2026",
      "heading": "Date of birth for NDA II 2026",
      "concepts": [
        {
          "id": "date-of-birth-for-nda-ii-2026-intro",
          "title": "Date of birth for NDA II 2026",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The current notice specifies unmarried male and female candidates born "
                },
                {
                  "text": "not earlier than 1 January 2008 and not later than 1 January 2011",
                  "bold": true
                },
                {
                  "text": ", subject to all notice conditions."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "marital-status",
      "heading": "Marital status",
      "concepts": [
        {
          "id": "marital-status-intro",
          "title": "Marital status",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "The current NDA notice requires eligible male and female candidates to be unmarried. Use the exact current notification for the consequences and declarations attached to marital status."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "education",
      "heading": "Education",
      "concepts": [
        {
          "id": "army-wing",
          "title": "Army Wing",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Class 12 pass or appearing in the 10+2 pattern / equivalent, subject to the notification."
                }
              ]
            }
          ]
        },
        {
          "id": "air-force-and-naval-wings-of-nda",
          "title": "Air Force and Naval Wings of NDA",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Class 12 pass or appearing with Physics, Chemistry and Mathematics."
                }
              ]
            }
          ]
        },
        {
          "id": "10-2-cadet-entry-scheme-at-indian-naval-academy",
          "title": "10+2 Cadet Entry Scheme at Indian Naval Academy",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Class 12 pass or appearing with Physics, Chemistry and Mathematics."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "nationality",
      "heading": "Nationality",
      "concepts": [
        {
          "id": "nationality-intro",
          "title": "Nationality",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Nationality is governed by the categories and certificate conditions in the current UPSC notice. The production page should reproduce the official categories faithfully, not reduce them to \"Indian citizen only\" if the notice allows other specified categories subject to certificate requirements."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "physical-and-medical-fitness",
      "heading": "Physical and medical fitness",
      "concepts": [
        {
          "id": "physical-and-medical-fitness-intro",
          "title": "Physical and medical fitness",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Eligibility on age and education does not waive medical / physical standards. Link to "
                },
                {
                  "text": "/nda/physical-standards",
                  "code": true
                },
                {
                  "text": " for the current source-mapped standards. Do not encourage self-diagnosis from summaries."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "appearing-candidates",
      "heading": "Appearing candidates",
      "concepts": [
        {
          "id": "appearing-candidates-intro",
          "title": "Appearing candidates",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Class 12 appearing candidates may apply subject to the notice's proof / qualification conditions and deadlines. Class 11 students are not eligible for the current examination."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "self-check",
      "heading": "Self-check",
      "concepts": [
        {
          "id": "self-check-intro",
          "title": "Self-check",
          "body": [
            {
              "type": "list",
              "ordered": true,
              "items": [
                [
                  {
                    "text": "Does DOB fall inside the exact NDA II 2026 window?"
                  }
                ],
                [
                  {
                    "text": "Is the candidate unmarried under the notice?"
                  }
                ],
                [
                  {
                    "text": "Does the chosen wing require PCM?"
                  }
                ],
                [
                  {
                    "text": "Does the candidate meet nationality documentation rules?"
                  }
                ],
                [
                  {
                    "text": "Has the candidate checked medical / physical requirements from the official notice?"
                  }
                ]
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
    }
  ],
  "faqs": [
    {
      "question": "What is the NDA II 2026 DOB window?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "The current UPSC notice specifies unmarried male and female candidates born not earlier than 1 January 2008 and not later than 1 January 2011, subject to the complete notice."
            }
          ]
        }
      ]
    }
  ],
  "sourceRefs": [
    "upsc-nda-ii-2026-exam-page",
    "upsc-nda-ii-2026-notification"
  ],
  "sourceNote": "Official UPSC and Armed Forces sources are the authority for every exam fact on this page. Rank Sarthi explanation is kept separate from official wording.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Reviewer requirement: NDA eligibility reviewer",
    "Sources checked: visible"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Eligibility 2026: Age, DOB, Education & Marital Status",
    "description": "Check the exact NDA II 2026 date-of-birth window, marital status, Army vs Air Force / Navy education rules and medical caveat.",
    "ogType": "article"
  }
};
