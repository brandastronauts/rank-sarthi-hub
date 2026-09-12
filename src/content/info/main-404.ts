import type { InfoPageContent } from "../types";

/**
 * Transcribed from the accepted Rank Sarthi Final Main / Core Buildable
 * Production Package (production date 13 September 2026). Data only.
 */
export const main404: InfoPageContent = {
  "url": "/404",
  "platform": "main",
  "slug": "404",
  "exam": "Rank Sarthi",
  "contentStatus": "draft",
  "title": "Page Not Found",
  "eyebrow": "Utility",
  "intent": "Return to a real Rank Sarthi destination.",
  "answer": [
    {
      "type": "paragraph",
      "children": [
        {
          "text": "The page you tried to open is not available. Use the links below to return to a real Rank Sarthi destination."
        }
      ]
    }
  ],
  "blocks": [
    {
      "kind": "links",
      "id": "suggested-destinations",
      "heading": "Try one of these destinations",
      "items": [
        {
          "url": "/",
          "label": "Home",
          "type": "Home"
        },
        {
          "url": "/jee",
          "label": "JEE",
          "type": "Exam"
        },
        {
          "url": "/neet",
          "label": "NEET",
          "type": "Exam"
        },
        {
          "url": "/nda",
          "label": "NDA",
          "type": "Exam"
        },
        {
          "url": "/resources",
          "label": "Study resources",
          "type": "Hub"
        }
      ],
      "intro": "We could not find that page."
    }
  ],
  "relatedLinks": [
    {
      "label": "Rank Sarthi home",
      "url": "/",
      "relation": "up"
    }
  ],
  "sourceNote": "Destinations resolve against the frozen Rank Sarthi route registry, so planned and blocked routes never appear as links.",
  "lastVerified": "13 September 2026",
  "seo": {
    "title": "Page Not Found | Rank Sarthi",
    "description": "The requested Rank Sarthi page could not be found. Return to Home, JEE, NEET, NDA or Study Resources.",
    "ogType": "website"
  }
};
