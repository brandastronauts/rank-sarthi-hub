import type { ChapterContent } from "@/content/types";

/**
 * Transport in Plants — T06 production content.
 * Classification: HISTORICAL_OR_NOT_CURRENTLY_LISTED.
 * The verified NEET UG 2026 Unit 4 (Plant Physiology) wording lists
 * Photosynthesis, Respiration, and Plant Growth and Development, but does
 * not explicitly list Transport in Plants. This page is a contextual
 * plant-physiology resource only, carrying NO current-2026 badge,
 * importance, weightage or frequency claim.
 */
export const neetBiologyTransportInPlants: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Plant Biology Foundation: Transport in Plants",
  slug: "transport-in-plants",
  url: "/neet/biology/transport-in-plants",
  canonicalIntent:
    "Provide a transparent plant-physiology foundation on water/solute transport while preserving the verified fact that Transport in Plants is not explicitly listed in current NEET UG 2026 Plant Physiology scope.",

  heroChips: [
    "Current NEET UG 2026 status: Not explicitly listed in the verified official syllabus.",
    "Contextual/foundation resource only — not a current-syllabus chapter",
    "No current NEET 2026 importance, weightage or frequency claims",
  ],

  directAnswer: [
    {
      type: "note",
      tone: "caution",
      children: [
        { text: "Current NEET UG 2026 status: Not explicitly listed in the verified official syllabus." },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "The verified 2026 Plant Physiology unit lists Photosynthesis, Respiration, and Plant Growth and Development, but does not explicitly list Transport in Plants. This frozen route may remain as a contextual foundation for diffusion, osmosis, water potential, root water pathways, xylem transport, transpiration and phloem translocation, but must not appear as a current Unit 4 child.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "It is not presented as a current Unit 4 chapter and carries no current-scope badge, importance label, weightage or frequency claim. Current Plant Physiology navigation continues through Photosynthesis, Respiration, and Plant Growth and Development on the Plant Physiology umbrella route.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Anatomy of Plants",
      url: "/neet/biology/anatomy-of-plants",
      relation: "prerequisite",
      description: "Plant tissue structure underlies xylem and phloem transport concepts on this contextual page.",
    },
    {
      label: "NEET Biology",
      url: "/neet/biology",
      relation: "up",
      description: "Contextual resource layer only.",
    },
  ],

  syllabusMapping: {
    unit: "Not part of verified NEET UG 2026 Unit 4 (Plant Physiology)",
    topics: [
      "Historical/contextual foundation topic — not explicitly listed in the current official syllabus",
      "Diffusion, facilitated diffusion and active transport",
      "Osmosis and water potential",
      "Root absorption, apoplast/symplast pathways and xylem transport",
      "Transpiration and phloem translocation",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "why-page-exists",
      title: "1. Why this page still exists",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The route is retained as a foundational Plant Biology resource in the frozen architecture. It must not be surfaced as a current Unit 4 syllabus child. Current Plant Physiology navigation remains focused on Photosynthesis, Respiration, and Plant Growth and Development through the frozen Plant Physiology umbrella.",
            },
          ],
        },
      ],
    },
    {
      id: "diffusion-facilitated-active",
      title: "2. Diffusion, facilitated diffusion and active transport",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Diffusion is net movement of particles down a concentration/free-energy gradient due to random molecular motion. In biological systems it can move small molecules over short distances but is too slow to account for long-distance transport through large plants by itself.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Facilitated diffusion moves substances down their gradient through specific membrane proteins. It does not directly require metabolic energy to move against a gradient.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Active transport moves substances against an electrochemical/concentration gradient using metabolic energy and specific transport proteins.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "The page should not say that all mineral uptake is passive or that all membrane transport requires ATP." },
          ],
        },
      ],
    },
    {
      id: "osmosis-water-potential",
      title: "3. Osmosis and water potential",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Osmosis is water movement across a selectively permeable membrane according to water-potential differences. It is a water-specific membrane-transport concept, not a synonym for all diffusion.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "NCERT uses water potential, denoted psi_w, to describe the tendency of water to move. At textbook depth: psi_w = psi_s + psi_p, where psi_w is water potential, psi_s is solute potential (generally negative for a solution relative to pure water), and psi_p is pressure potential.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Pure water at standard conditions is assigned a water potential of zero by convention. Water moves from higher water potential toward lower water potential when pathways allow.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            { text: "The equation should be taught as a relation among potentials, not as a clinical or engineering fluid equation." },
          ],
        },
      ],
    },
    {
      id: "plasmolysis",
      title: "4. Plasmolysis",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "When a plant cell loses water in a sufficiently hypertonic external solution, the protoplast can shrink away from the cell wall. This is plasmolysis. Reversal after returning to a suitable hypotonic/water environment is deplasmolysis.",
            },
          ],
        },
      ],
    },
    {
      id: "root-water-pathways",
      title: "5. Root water pathways",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "After absorption by root hairs, water moves through root tissues by two main pathways: the apoplast, which is movement through cell walls and intercellular spaces without crossing a plasma membrane at every cell-to-cell step, and the symplast, which is movement through cytoplasm of interconnected living cells via plasmodesmata.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "At the endodermis, Casparian strips block unrestricted apoplastic flow, forcing selective membrane crossing into the symplast before entry into the vascular cylinder/xylem pathway.",
            },
          ],
        },
      ],
    },
    {
      id: "xylem-transport-ascent-of-sap",
      title: "6. Xylem transport and ascent of sap",
      keyIdea: "Transpiration pull/cohesion-tension is the NCERT-accepted main explanation for water ascent in tall plants.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Xylem vessels and tracheids form the major long-distance pathway for water and mineral transport from roots to shoots.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "NCERT's accepted main explanation for upward water movement in tall plants is the transpiration-pull/cohesion-tension mechanism. Key physical properties include cohesion among water molecules, adhesion between water and xylem walls, and surface tension and continuity of the water column.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "Root pressure can contribute in some contexts but should not be presented as the primary explanation for water ascent in tall trees." },
          ],
        },
      ],
    },
    {
      id: "transpiration",
      title: "7. Stomata and transpiration factors",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Transpiration is evaporative water loss from aerial plant parts, mainly through stomata." },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "External factors: temperature, light, humidity, wind speed." }],
            [{ text: "Plant factors: stomatal number/distribution/opening, plant water status, canopy/leaf structure." }],
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Stomata also mediate gas exchange, so transpiration and photosynthesis are physiologically linked through stomatal behaviour, but Transport in Plants is not restored to current Unit 4 scope by that relationship.",
            },
          ],
        },
      ],
    },
    {
      id: "mineral-uptake",
      title: "8. Mineral uptake and transport",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Mineral ions can enter roots through specific membrane transport systems and move to the vascular tissue. Diffusion alone cannot satisfy all mineral-transport requirements because ions may need selective uptake and movement against gradients.",
            },
          ],
        },
      ],
    },
    {
      id: "phloem-translocation",
      title: "9. Phloem source-sink translocation",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Phloem transports organic solutes, mainly sucrose, from source tissues to sink tissues." },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "A production-ready relationship is: source loading -> water entry and pressure increase -> bulk/pressure flow through sieve tubes -> sink unloading -> water-potential change.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            { text: "Source and sink are functional roles and can change with plant developmental state. Therefore phloem transport is not inherently only downward." },
          ],
        },
      ],
    },
    {
      id: "xylem-vs-phloem",
      title: "10. Xylem vs phloem high-risk distinction",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Xylem: major route for water/mineral transport, mainly root to shoot; conduits include vessels/tracheids." }],
            [{ text: "Phloem: organic-solute translocation from source to sink; direction depends on source-sink relationship." }],
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "membrane-transport-dataset",
      slot: "concepts",
      jump: true,
      heading: "Membrane-transport dataset",
      columns: ["Process", "Direction", "Membrane protein", "Direct metabolic-energy requirement", "High-risk distinction"],
      rows: [
        ["Simple diffusion", "Down gradient", "Not necessarily", "No", "Not selective carrier transport"],
        ["Facilitated diffusion", "Down gradient", "Yes", "No", "Cannot move against gradient by itself"],
        ["Active transport", "Against gradient possible", "Yes", "Yes", "Energy-dependent selective transport"],
        ["Osmosis", "Water down water-potential gradient across selective membrane", "Membrane pathway dependent", "No direct ATP requirement for water movement", "Applies to water"],
      ],
    },
    {
      id: "root-pathway-matrix",
      slot: "concepts",
      jump: true,
      heading: "Root-pathway matrix",
      columns: ["Pathway", "Route through root", "Membrane crossing pattern", "Endodermis effect"],
      rows: [
        ["Apoplast", "Cell walls/intercellular spaces", "Limited membrane crossing before endodermis", "Casparian strip blocks unrestricted apoplastic passage"],
        ["Symplast", "Cytoplasm connected by plasmodesmata", "Requires entry through plasma membrane", "Provides selective living-cell pathway through endodermis"],
      ],
    },
    {
      id: "long-distance-transport-dataset",
      slot: "concepts",
      jump: true,
      heading: "Long-distance transport dataset",
      columns: ["System", "Main cargo", "Driving relationship", "Direction"],
      rows: [
        ["Xylem", "Water + mineral ions", "Transpiration pull/cohesion-tension; root pressure can assist in some contexts", "Mainly root to shoot"],
        ["Phloem", "Organic solutes, mainly sucrose", "Source loading, osmotic water entry, pressure flow and sink unloading", "Source to sink; can be upward or downward depending on source/sink location"],
      ],
    },
    {
      id: "transpiration-factor-dataset",
      slot: "concepts",
      jump: true,
      heading: "Transpiration-factor dataset",
      columns: ["Factor class", "Factor", "General relationship at NCERT depth"],
      rows: [
        ["External", "Temperature", "Higher temperature can increase evaporation demand"],
        ["External", "Humidity", "High surrounding humidity generally reduces water-vapour gradient"],
        ["External", "Wind", "Air movement can increase gradient by removing humid boundary air"],
        ["External", "Light", "Influences stomatal opening in many plants"],
        ["Plant", "Stomatal state", "Opening increases gas/water-vapour exchange pathway"],
        ["Plant", "Water status", "Water deficit can promote stomatal closure"],
      ],
    },
  ],

  mistakes: [
    {
      id: "treated-as-current-unit-4",
      mistake: "Route presented as a current NEET UG 2026 Unit 4 topic.",
      why: [{ type: "paragraph", children: [{ text: "The verified 2026 Unit 4 does not explicitly list Transport in Plants as a separate current topic." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep the historical/not-currently-listed status for this route." }] }],
      errorType: "decision-error",
    },
    {
      id: "osmosis-as-diffusion-synonym",
      mistake: "Osmosis used as a synonym for all diffusion.",
      why: [{ type: "paragraph", children: [{ text: "Osmosis specifically concerns water movement across a selectively permeable membrane." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Reserve osmosis for water movement across a selective membrane and keep general diffusion separate." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "water-potential-direction-reversed",
      mistake: "Water-potential direction reversed.",
      why: [{ type: "paragraph", children: [{ text: "Water moves from higher water potential to lower water potential when a pathway exists." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check the psi_w values at both ends before naming the direction of net water movement." }] }],
      errorType: "execution-error",
    },
    {
      id: "apoplast-symplast-confused",
      mistake: "Apoplast and symplast confused.",
      why: [{ type: "paragraph", children: [{ text: "Apoplast uses cell walls/intercellular spaces; symplast uses interconnected living cytoplasm via plasmodesmata." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Use the root-pathway matrix to keep the two pathways distinct." }] }],
      errorType: "recall-gap",
    },
    {
      id: "root-pressure-as-sole-mechanism",
      mistake: "Root pressure used as the sole explanation for tall-tree water ascent.",
      why: [{ type: "paragraph", children: [{ text: "Transpiration pull/cohesion-tension is the main NCERT explanation for ascent of sap in tall plants." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Present transpiration pull/cohesion-tension as the primary mechanism and root pressure as a contributing factor in some contexts only." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "phloem-only-downward",
      mistake: "Phloem stated to move food only downward.",
      why: [{ type: "paragraph", children: [{ text: "Source-to-sink direction depends on the position of source and sink tissues, which can change with plant development." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Describe phloem direction as source-to-sink rather than fixed downward movement." }] }],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Plant Physiology",
      url: "/neet/biology/plant-physiology",
      relation: "related",
      description: "Contextual link only; do not render this route as a current Unit 4 child of Plant Physiology.",
    },
    {
      label: "Photosynthesis",
      url: "/neet/biology/photosynthesis",
      relation: "related",
      description: "Current Unit 4 owner; conceptual physiology connection through stomatal behaviour only.",
    },
    {
      label: "Respiration in Plants",
      url: "/neet/biology/respiration-in-plants",
      relation: "related",
      description: "Current Unit 4 owner for plant respiration processes.",
    },
    {
      label: "Anatomy of Plants",
      url: "/neet/biology/anatomy-of-plants",
      relation: "prerequisite",
      description: "Tissue-structure concepts preceding this contextual resource.",
    },
  ],

  links: [
    {
      label: "NEET Biology hub",
      url: "/neet/biology",
      relation: "up",
      description: "Contextual resource layer only.",
    },
  ],

  faqs: [
    {
      question: "Is Transport in Plants explicitly part of the NEET UG 2026 Plant Physiology syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "No. The verified 2026 Unit 4 lists Photosynthesis, Respiration and Plant Growth and Development, but not Transport in Plants as a separate current topic." },
          ],
        },
      ],
    },
    {
      question: "What is the water-potential relationship?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "At NCERT depth, psi_w = psi_s + psi_p, where water potential depends on solute and pressure potentials." }],
        },
      ],
    },
    {
      question: "What is the difference between apoplast and symplast?",
      answer: [
        {
          type: "paragraph",
          children: [
            { text: "Apoplast movement occurs through cell walls/intercellular spaces, while symplast movement occurs through cytoplasm connected by plasmodesmata." },
          ],
        },
      ],
    },
    {
      question: "Is phloem transport only downward?",
      answer: [
        {
          type: "paragraph",
          children: [{ text: "No. Phloem moves assimilates from source to sink, so direction depends on the current source-sink relationship." }],
        },
      ],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-exemplar-index"],
  sourceNote:
    "Checked against the NMC/NTA NEET UG 2026 syllabus for non-inclusion. This contextual page draws on official NCERT teaching material that historically contained Transport in Plants, including the NCERT Class XI Exemplar chapter, and remains represented in NCERT Exemplar resources. A SATHEE mirror was used only where direct NCERT retrieval was difficult. That historical teaching relationship does not override the official NEET UG 2026 syllabus.",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
  ],

  contentStatus: "draft",

  meta: {
    title: "Plant Biology Foundation: Transport in Plants | Current NEET 2026 Status",
    description:
      "Learn plant transport foundations including water potential, apoplast/symplast, xylem, transpiration and phloem. Not explicitly listed in NEET UG 2026 Plant Physiology.",
  },
};
