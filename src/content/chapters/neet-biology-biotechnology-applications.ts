import type { ChapterContent } from "@/content/types";

/**
 * NEET Biotechnology Applications — T06 production content.
 * Separates biological principle, application and limitation/ethical context
 * for insulin, vaccine production, gene therapy, Bt crops, transgenic
 * animals, biopiracy and patents. No clinical, gene-editing or legal advice
 * is given. contentStatus stays "draft" until academic review is recorded.
 */
export const neetBiologyBiotechnologyApplications: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Biotechnology and Its Applications",
  slug: "biotechnology-applications",
  url: "/neet/biology/biotechnology-applications",
  canonicalIntent:
    "Explain the current NEET UG 2026 biotechnology applications in health and agriculture, separating biological principle, application and limitation/ethical context for each.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 9",
    "Principle -> application -> limitation for every example",
    "No clinical, gene-editing or legal advice",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "NEET UG 2026 biotechnology applications include health and agriculture uses such as recombinant human insulin and vaccine production, gene therapy, genetically modified Bt crops, transgenic animals, and biosafety issues including biopiracy and patents. This page explains the biological principle behind each application without giving gene-editing or clinical instructions.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages, and it is not medical or legal advice." }],
    },
  ],

  prerequisites: [
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "prerequisite",
      description: "Gene expression concepts are needed before applications such as recombinant insulin and gene therapy.",
    },
    {
      label: "Biotechnology",
      url: "/neet/biology/biotechnology",
      relation: "prerequisite",
      description: "Recombinant-DNA tools and the process pipeline are applied here to specific health and agriculture uses.",
    },
  ],

  syllabusMapping: {
    unit: "Biotechnology and Its Applications",
    topics: [
      "Applications of biotechnology in health and agriculture",
      "Human insulin and vaccine production",
      "Gene therapy",
      "Genetically modified organisms (Bt crops)",
      "Transgenic animals",
      "Biosafety issues, biopiracy and patents",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "application-framework",
      title: "1. Keep principle, application and limitation separate for every example",
      keyIdea: "biological principle -> intended application -> limitation/ethical context.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "For each application in this chapter, keep three layers separate: the biological principle, the intended application, and any limitation or ethical context." }],
        },
      ],
    },
    {
      id: "recombinant-insulin",
      title: "2. Recombinant human insulin is produced using a microbial host",
      keyIdea: "DNA sequences for the human insulin A and B chains were expressed in Escherichia coli and the chains combined to form functional insulin.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Human insulin is produced as a precursor in the body, but mature insulin consists of A and B polypeptide chains linked by disulfide bonds. NCERT describes recombinant production in which DNA sequences for the human insulin chains were expressed in Escherichia coli and the chains were produced and combined to form functional insulin." },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "High-risk distinction: recombinant production uses microbial cells as biological factories; it does not mean bacterial insulin differs in amino-acid identity from the intended human protein product." },
          ],
        },
      ],
    },
    {
      id: "vaccine-production",
      title: "3. Vaccine production is a named current health application",
      keyIdea: "Recombinant systems can produce antigenic proteins or related biological material.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "The official syllabus explicitly names vaccine production as a health application. At NEET depth, biotechnology can produce antigenic proteins or related biological material using recombinant systems. This page does not claim a specific vaccine platform unless the NCERT application example supports it, and it does not provide personal vaccine guidance." },
          ],
        },
      ],
    },
    {
      id: "gene-therapy",
      title: "4. Gene therapy compensates for a defective gene",
      keyIdea: "The NCERT example is adenosine deaminase (ADA) deficiency, treated ex vivo through corrected lymphocytes.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Gene therapy aims to introduce a functional genetic sequence into cells to compensate for a defective gene." }],
        },
        {
          type: "definition",
          term: "ADA deficiency example",
          children: [{ text: "patient lymphocytes isolated -> functional ADA cDNA introduced ex vivo -> corrected cells returned. Because such lymphocytes are not immortal, repeated administration can be required in the NCERT example." }],
        },
        {
          type: "note",
          tone: "caution",
          children: [{ text: "This is an educational historical/textbook example, not treatment advice." }],
        },
      ],
    },
    {
      id: "bt-crops",
      title: "5. Bt crops express selected cry genes against specific insect pests",
      keyIdea: "Cry protoxins activate only in the alkaline gut of susceptible insect larvae, so pest specificity matters.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Bacillus thuringiensis produces insecticidal Cry proteins as inactive protoxins. In susceptible insect larvae, alkaline gut conditions activate the toxin; the active toxin binds midgut epithelial cells and forms pores, damaging the gut." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Biotechnology uses specific cry genes in crops to confer resistance against particular insect pests. This page does not imply that every Bt gene controls every insect." },
          ],
        },
      ],
    },
    {
      id: "transgenic-animals",
      title: "6. Transgenic animals express introduced foreign genetic material",
      keyIdea: "NCERT application categories include physiology/development study, disease models, useful product generation, and vaccine- or chemical-safety testing.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Study of normal physiology and development." }],
            [{ text: "Models for understanding disease." }],
            [{ text: "Production of useful biological products." }],
            [{ text: "Vaccine-safety testing context." }],
            [{ text: "Chemical-safety/toxicity testing context." }],
          ],
        },
        {
          type: "paragraph",
          children: [{ text: "This page does not turn these categories into animal-engineering instructions." }],
        },
      ],
    },
    {
      id: "biosafety",
      title: "7. Biosafety evaluates risk associated with genetically modified organisms",
      keyIdea: "Biosafety content here stays conceptual rather than regulatory advice.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Biosafety means evaluating potential biological and environmental risks associated with genetically modified organisms and biotechnology products." }],
        },
      ],
    },
    {
      id: "patents-biopiracy",
      title: "8. Patents and biopiracy are distinct legal/ethical concepts",
      keyIdea: "A patent is an IP right; biopiracy concerns unauthorised or inequitable use of biological resources or traditional knowledge.",
      body: [
        {
          type: "definition",
          term: "Patent",
          children: [{ text: "A legal intellectual-property right over an eligible invention or process under applicable law." }],
        },
        {
          type: "definition",
          term: "Biopiracy",
          children: [{ text: "Unauthorised or inequitable commercial use of biological resources or associated traditional knowledge without appropriate permission or benefit sharing." }],
        },
        {
          type: "paragraph",
          children: [{ text: "Do not treat all biological-resource research as biopiracy; the distinction depends on rights, permission and benefit-sharing context." }],
        },
      ],
    },
    {
      id: "molecular-diagnosis-boundary",
      title: "9. Molecular diagnosis stays NCERT context, not promoted current core",
      keyIdea: "PCR and ELISA-based diagnosis is NCERT context but is not separately named in the verified Unit 9 list.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Current NCERT discusses molecular diagnosis using techniques such as PCR and ELISA, but the verified NEET UG 2026 Unit 9 list does not explicitly name molecular diagnosis. It may appear only as NCERT supporting context and is not promoted as a separate current-core section here." },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "application-dataset",
      jump: true,
      slot: "concepts",
      heading: "Application dataset: principle, example and boundary",
      columns: ["Application", "Biological principle", "NCERT example / current owner", "Safety/context boundary"],
      rows: [
        ["Recombinant insulin", "Recombinant gene expression in microbial host", "Human insulin chains expressed in E. coli", "No diabetes treatment guidance"],
        ["Vaccine production", "Recombinant biological production", "Official current topic", "No individual vaccine advice"],
        ["Gene therapy", "Functional gene introduced to compensate for defect", "ADA deficiency textbook example", "No clinical instructions"],
        ["Bt crop", "Transgenic expression of selected cry gene", "Bt crop", "Pest specificity matters"],
        ["Transgenic animals", "Introduced gene expressed in animal", "Research/biological product/testing uses", "No animal engineering protocol"],
        ["Biosafety", "Risk assessment of biotech organisms/products", "Current biosafety issue", "No regulatory conclusion"],
        ["Patents", "Intellectual-property protection", "Current issue", "Law-specific details not inferred"],
        ["Biopiracy", "Misuse/appropriation of biological resources or knowledge", "Current issue", "Permission/benefit-sharing context required"],
      ],
    },
    {
      id: "bt-mechanism",
      jump: true,
      slot: "concepts",
      heading: "Bt toxin mechanism flow",
      columns: ["Step", "Event"],
      rows: [
        ["1", "B. thuringiensis cry gene expressed in plant"],
        ["2", "Insect ingests protoxin/protein"],
        ["3", "Alkaline gut activates the toxin"],
        ["4", "Active toxin damages midgut membrane"],
        ["5", "Susceptible insect is affected"],
      ],
    },
  ],

  mistakes: [
    {
      id: "bt-chemical-spray-error",
      mistake: "Believing Bt refers to a chemical sprayed on every crop.",
      why: [{ type: "paragraph", children: [{ text: "The current biotechnology context is transgenic expression of selected cry genes within the crop plant itself." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Describe Bt crops as plants expressing an inserted cry gene, not as chemically treated crops." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "cry-protein-generalisation",
      mistake: "Assuming all Cry proteins target all insects.",
      why: [{ type: "paragraph", children: [{ text: "Toxin-gene and pest relationships are specific; a given cry gene protects against particular pests." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check which cry gene and which pest are named in the question before generalising." }] }],
      errorType: "decision-error",
    },
    {
      id: "gene-therapy-drug-confusion",
      mistake: "Equating gene therapy with drug therapy.",
      why: [{ type: "paragraph", children: [{ text: "Gene therapy changes the underlying genetic-function relationship rather than delivering a pharmacological agent." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Frame gene therapy as introducing a functional gene to compensate for a defective one." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "transgenic-cloning-confusion",
      mistake: "Treating 'transgenic animal' as meaning a cloned animal.",
      why: [{ type: "paragraph", children: [{ text: "Transgenic refers specifically to an animal carrying and expressing introduced foreign genetic material, not to cloning." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether foreign DNA was introduced and expressed before applying the term transgenic." }] }],
      errorType: "recall-gap",
    },
    {
      id: "patent-biopiracy-synonym",
      mistake: "Treating patent and biopiracy as synonyms.",
      why: [{ type: "paragraph", children: [{ text: "A patent is an intellectual-property right; biopiracy concerns unauthorised or inequitable use of biological resources or knowledge." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Ask whether the scenario describes a legal right (patent) or an unauthorised-use concern (biopiracy) before answering." }] }],
      errorType: "knowledge-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Biotechnology",
      url: "/neet/biology/biotechnology",
      relation: "up",
      description: "Owns the recombinant-DNA tools and process pipeline applied on this page.",
    },
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "prerequisite",
      description: "Gene-expression foundation used across insulin and gene-therapy examples.",
    },
    {
      label: "Human Health and Disease",
      url: "/neet/biology/human-health-disease",
      relation: "related",
      description: "Related Unit 8 chapter on disease and immunology context.",
    },
    {
      label: "Microbes in Human Welfare",
      url: "/neet/biology/microbes-human-welfare",
      relation: "related",
      description: "Related microbial-application chapter within Unit 8.",
    },
  ],

  links: [
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "NEET Biology subject hub.",
    },
  ],

  faqs: [
    {
      question: "How does Bt technology protect a crop?",
      answer: [{ type: "paragraph", children: [{ text: "A selected cry gene from Bacillus thuringiensis is expressed in the plant; the protein becomes toxic in susceptible insect larvae after gut activation." }] }],
    },
    {
      question: "What NCERT example is used for gene therapy?",
      answer: [{ type: "paragraph", children: [{ text: "ADA deficiency is the standard NCERT example for ex-vivo introduction of a functional ADA gene into patient lymphocytes." }] }],
    },
    {
      question: "Is molecular diagnosis an explicit NEET UG 2026 Unit 9 bullet?",
      answer: [{ type: "paragraph", children: [{ text: "It is NCERT context but is not separately named in the verified current Unit 9 wording, so this page does not promote it as a standalone current-core topic." }] }],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents"],
  sourceNote:
    "NCERT Biotechnology and Its Applications: https://ncert.nic.in/textbook/pdf/lebo110.pdf. NCERT Biotechnology: Principles and Processes: https://ncert.nic.in/textbook/pdf/lebo109.pdf",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Biotechnology Applications 2026: Insulin, Bt Crops, Gene Therapy",
    description:
      "Study the current NEET UG 2026 biotechnology applications: recombinant insulin and vaccines, gene therapy, Bt crops, transgenic animals, biosafety, patents and biopiracy.",
  },
};
