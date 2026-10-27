import { createFileRoute } from "@tanstack/react-router";
import { PresentationExperience } from "@/components/presentation/PresentationExperience";

const TITLE = "Rank Sarthi — Interactive Corporate Showcase";
const DESCRIPTION =
  "An interactive showcase of Rank Sarthi: India's exam aspirations, the Sarthi idea, and the student and institute platform for JEE, NEET and NDA pathways.";

export const Route = createFileRoute("/presentation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      // Preview-only until statistics and imagery are approved.
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&display=swap",
      },
    ],
  }),
  component: PresentationExperience,
});
