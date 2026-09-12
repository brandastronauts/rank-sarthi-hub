import type { InfoPageContent } from "../types";

/**
 * Transcribed from the approved Rank Sarthi NDA production package
 * (production date 12 September 2026). Content is data only: no
 * page-specific component, CSS or schema change.
 */
export const ndaNdaExam: InfoPageContent = {
  "url": "/nda/nda-exam",
  "platform": "nda",
  "slug": "nda-exam",
  "exam": "NDA & NA (II) 2026",
  "contentStatus": "draft",
  "title": "NDA Exam 2026: NDA II Current Cycle, Pattern, Eligibility, Syllabus and Selection",
  "eyebrow": "NDA Exam Overview",
  "intent": "Check the current NDA II 2026 exam date, written pattern, eligibility, syllabus, negative marking and selection stages using official UPSC sources.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The National Defence Academy and Naval Academy Examination is conducted by UPSC for admission to the Army, Navy and Air Force wings of the National Defence Academy and the 10+2 Cadet Entry Scheme of the Indian Naval Academy. For the current NDA II 2026 cycle, the written examination is scheduled for "
        },
        {
          "text": "13 September 2026",
          "bold": true
        },
        {
          "text": ". The written stage has two objective papers: Mathematics for 300 marks and the General Ability Test for 600 marks. Written qualification does not equal final selection. Candidates who progress must also clear the SSB process, satisfy medical and physical standards, and be placed within final merit and service allocation rules."
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
      "id": "current-cycle-status",
      "heading": "Current cycle status",
      "concepts": [
        {
          "id": "current-cycle-status-intro",
          "title": "Current cycle status",
          "body": [
            {
              "type": "list",
              "items": [
                [
                  {
                    "text": "Notification: 20 May 2026."
                  }
                ],
                [
                  {
                    "text": "Written examination: 13 September 2026."
                  }
                ],
                [
                  {
                    "text": "Application window: closed."
                  }
                ],
                [
                  {
                    "text": "e-Admit Card: listed by UPSC from 3 September 2026."
                  }
                ],
                [
                  {
                    "text": "Notified vacancies: 394, provisional."
                  }
                ],
                [
                  {
                    "text": "Course identified in the notice: 158th NDA Course and 120th INAC, commencing 1 July 2027."
                  }
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "table",
      "id": "written-examination-structure-table",
      "heading": "Written examination structure",
      "columns": [
        "Paper",
        "Marks",
        "Duration",
        "Core scope"
      ],
      "rows": [
        [
          "Mathematics",
          "300",
          "2.5 hours",
          "UPSC Mathematics syllabus"
        ],
        [
          "General Ability Test",
          "600",
          "2.5 hours",
          "Part A English 200; Part B General Knowledge 400"
        ],
        [
          "Written total",
          "900",
          "5 hours",
          "Two objective papers"
        ],
        [
          "SSB Test / Interview",
          "900",
          "Separate stage",
          "Intelligence and personality assessment"
        ]
      ],
      "note": "Wrong answers attract a penalty of one-third of the marks assigned to the question. A blank response carries no penalty."
    },
    {
      "kind": "prose",
      "id": "eligibility-snapshot",
      "heading": "Eligibility snapshot",
      "concepts": [
        {
          "id": "eligibility-snapshot-intro",
          "title": "Eligibility snapshot",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Do not reduce NDA eligibility to a generic age range. For NDA II 2026, the notice-specific DOB window is "
                },
                {
                  "text": "1 January 2008 to 1 January 2011",
                  "bold": true
                },
                {
                  "text": ", both dates inclusive, for unmarried male and female candidates, subject to the full nationality and notice conditions. Army Wing candidates need Class 12 pass or appearing status. Air Force and Naval Wing candidates, and the 10+2 Naval Academy entry, require Physics, Chemistry and Mathematics at Class 12 level."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "prose",
      "id": "selection-path",
      "heading": "Selection path",
      "concepts": [
        {
          "id": "selection-path-intro",
          "title": "Selection path",
          "body": [
            {
              "type": "paragraph",
              "children": [
                {
                  "text": "Written examination -> SSB Stage I -> SSB Stage II -> medical / physical verification -> combined merit -> service / course allocation according to eligibility, preference, medical fitness and vacancies."
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "relatedLinks": [
    {
      "label": "Eligibility",
      "url": "/nda/eligibility",
      "relation": "related"
    },
    {
      "label": "NDA Syllabus",
      "url": "/nda/syllabus",
      "relation": "related"
    },
    {
      "label": "Selection Process",
      "url": "/nda/selection-process",
      "relation": "related"
    }
  ],
  "faqs": [
    {
      "question": "What is NDA II 2026?",
      "answer": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "It is the UPSC National Defence Academy and Naval Academy Examination (II), 2026, with the written exam scheduled for 13 September 2026. Mathematics carries 300 marks and GAT carries 600 marks, followed by the SSB and medical / merit process for candidates who qualify."
            }
          ]
        }
      ]
    }
  ],
  "sourceRefs": [
    "upsc-nda-ii-2026-exam-page",
    "upsc-nda-ii-2026-notification",
    "upsc-exam-highlights"
  ],
  "sourceNote": "Official UPSC and Armed Forces sources are the authority for every exam fact on this page. Rank Sarthi explanation is kept separate from official wording.",
  "contributorPolicy": [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Reviewer requirement: NDA written-exam SME",
    "Sources checked: visible"
  ],
  "lastVerified": "12 September 2026",
  "seo": {
    "title": "NDA Exam 2026: NDA II Pattern, Eligibility, Syllabus & Selection | Rank Sarthi",
    "description": "Check the current NDA II 2026 exam date, written pattern, eligibility, syllabus, negative marking and selection stages using official UPSC sources.",
    "ogType": "article"
  }
};
