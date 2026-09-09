import type { ChapterContent } from "@/content/types";

/**
 * NEET Biotechnology — T06 production content.
 * Current process owner for principles and recombinant-DNA technology because
 * no separate frozen Principles and Processes route exists.
 * contentStatus stays "draft" until academic review is recorded.
 */
export const neetBiologyBiotechnology: ChapterContent = {
  exam: "NEET",
  platform: "neet",
  subject: "Biology",
  subjectSlug: "biology",
  chapter: "Biotechnology",
  slug: "biotechnology",
  url: "/neet/biology/biotechnology",
  canonicalIntent:
    "Explain the NEET UG 2026 biotechnology process owner: principles and process of genetic engineering through recombinant DNA technology, from source DNA to downstream processing.",

  heroChips: [
    "Mapped to NEET UG 2026 Unit 9",
    "Full recombinant-DNA pipeline, tool by tool",
    "No invented weightage, trend or question-count data",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Biotechnology in NEET UG 2026 includes the principles and process of genetic engineering through recombinant DNA technology. This route owns the complete process chain: isolate genetic material, cut DNA, obtain the target fragment, amplify where required, ligate into a suitable vector, introduce recombinant DNA into a competent host, select and express the construct, scale production in bioreactors and perform downstream processing.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [{ text: "This page does not publish invented weightage, expected question counts or trend percentages." }],
    },
  ],

  prerequisites: [
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "prerequisite",
      description: "Cell structure and cell-wall context are used when describing DNA isolation.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "prerequisite",
      description: "Nucleic-acid and enzyme structure underpin restriction enzymes and DNA ligase.",
    },
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "prerequisite",
      description: "DNA replication and gene expression concepts are extended into recombinant-DNA technology.",
    },
    {
      label: "Biology Hub",
      url: "/neet/biology",
      relation: "up",
      description: "Subject hub for the NEET Biology chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Biotechnology and Its Applications",
    topics: [
      "Principles and process of biotechnology",
      "Genetic engineering / recombinant DNA technology",
    ],
    syllabusUrl: "/neet/syllabus/biology",
  },

  conceptBlocks: [
    {
      id: "biotechnology-principle",
      title: "1. Biotechnology combines genetic alteration with controlled biological production",
      keyIdea: "Modern biotechnology deliberately recombines genetic material and uses organisms, cells or enzymes to make useful products at scale.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Modern biotechnology at NCERT depth combines deliberate alteration or recombination of genetic material with the controlled use of organisms, cells or enzymes to generate useful products at scale." },
          ],
        },
      ],
    },
    {
      id: "core-tools",
      title: "2. Five core tools drive the recombinant-DNA process",
      keyIdea: "Restriction endonucleases, DNA ligase, DNA polymerases, cloning vectors and competent host cells each play a distinct role.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Restriction endonucleases." }],
            [{ text: "DNA ligase." }],
            [{ text: "DNA polymerases, including thermostable polymerase for PCR." }],
            [{ text: "Cloning vectors." }],
            [{ text: "Competent host cells." }],
          ],
        },
      ],
    },
    {
      id: "restriction-enzymes",
      title: "3. Restriction enzymes cut; DNA ligase joins",
      keyIdea: "Restriction endonucleases recognise specific sequences and cut internally, often leaving complementary sticky ends that ligase can join.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Restriction endonucleases recognise specific DNA sequences and cut within DNA. Many produce complementary overhanging or sticky ends. When donor DNA and vector DNA are cut compatibly, DNA ligase can join them." },
          ],
        },
        {
          type: "definition",
          term: "Exonuclease vs endonuclease",
          children: [{ text: "An exonuclease removes nucleotides from DNA ends, while an endonuclease cuts at internal positions." }],
        },
      ],
    },
    {
      id: "dna-isolation-separation",
      title: "4. DNA isolation and gel electrophoresis prepare fragments for cloning",
      keyIdea: "Cells are broken to release DNA, and restriction fragments are separated by gel electrophoresis using the DNA's negative charge.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Cells are broken and macromolecular contaminants removed to obtain DNA. NCERT uses cell-wall-specific enzymes as examples for different biological sources and uses RNase/protease relationships during purification. This content stays conceptual and does not provide a laboratory protocol." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Restriction digestion yields fragments that can be separated using gel electrophoresis. DNA moves toward the positive electrode because of its negatively charged phosphate backbone. A selected DNA fragment can be recovered for subsequent recombinant-DNA work." },
          ],
        },
      ],
    },
    {
      id: "cloning-vector-features",
      title: "5. A cloning vector needs an origin of replication, a selectable marker and a cloning site",
      keyIdea: "pBR322 is the standard NCERT plasmid-vector example; Ti-plasmid-derived vectors provide plant-transformation context.",
      body: [
        {
          type: "list",
          items: [
            [{ text: "Origin of replication (ori): permits replication and influences copy number." }],
            [{ text: "Selectable marker: enables identification/selection of cells carrying the vector." }],
            [{ text: "Cloning site: location for insertion of foreign DNA." }],
            [{ text: "Appropriate size and host compatibility for the intended system." }],
          ],
        },
      ],
    },
    {
      id: "competent-host",
      title: "6. Competence describes a host cell's capacity to take up DNA",
      keyIdea: "recombinant vector -> competent host -> transformed cell.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "DNA does not normally enter bacterial cells efficiently. Competence means cells have been made capable of taking up DNA. This page does not turn the relationship into a stepwise wet-lab recipe." },
          ],
        },
      ],
    },
    {
      id: "pcr",
      title: "7. PCR amplifies a defined DNA region in vitro",
      keyIdea: "Template DNA, two primers, dNTPs and a thermostable polymerase repeat denaturation, annealing and extension to amplify target DNA.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "PCR amplifies a defined DNA region in vitro using template DNA, two primers, deoxynucleotide substrates and thermostable DNA polymerase. The cycle logic is strand separation, primer annealing, DNA extension, and repeated amplification." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "NCERT links thermostable polymerase to Thermus aquaticus. Exact thermal settings are unnecessary for this NEET content record." },
          ],
        },
      ],
    },
    {
      id: "recombinant-pipeline",
      title: "8. The recombinant-DNA pipeline runs from isolation to expression",
      keyIdea: "PCR can be placed before ligation when target amplification is required; it is not mandatory in every workflow.",
      body: [
        {
          type: "definition",
          term: "Recombinant-DNA pipeline",
          children: [{ text: "source DNA isolation -> restriction cutting -> target-fragment separation -> vector cutting -> ligation -> recombinant vector -> host introduction -> selection/identification -> expression." }],
        },
      ],
    },
    {
      id: "bioreactors",
      title: "9. Bioreactors provide controlled large-volume production",
      keyIdea: "A stirred-tank bioreactor can control mixing, oxygen delivery, temperature, pH, foam and sampling.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "Bioreactors allow large-volume controlled growth and production. A stirred-tank design can provide mixing/agitation, oxygen delivery where required, temperature control, pH control, foam control and sampling access. This content owns functional relationships, not engineering specifications." },
          ],
        },
      ],
    },
    {
      id: "downstream-processing",
      title: "10. Downstream processing follows successful expression",
      keyIdea: "Selection identifies cells with the desired construct; expression means the inserted gene is actually transcribed and translated.",
      body: [
        {
          type: "paragraph",
          children: [
            { text: "After biosynthesis, the desired product must be separated and purified, then formulated and quality-controlled as appropriate. Downstream processing therefore comes after production/expression, not before host transformation." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "A selectable marker helps identify cells carrying desired vector/construct properties. Expression means the inserted gene is transcribed and translated to yield its product. A transformed cell is not automatically evidence of correct high-level expression." },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "tool-dataset",
      jump: true,
      slot: "concepts",
      heading: "Recombinant-DNA tool dataset",
      columns: ["Tool/component", "Role", "High-risk distinction"],
      rows: [
        ["Restriction endonuclease", "Cuts DNA at recognised internal sequence", "Not ligation"],
        ["DNA ligase", "Joins compatible DNA ends", "Not DNA amplification"],
        ["DNA polymerase", "Synthesises DNA", "PCR uses thermostable polymerase"],
        ["Vector", "Carries inserted DNA", "Must have ori and selection/cloning features"],
        ["Competent host", "Receives recombinant DNA", "Competence is uptake capacity"],
        ["Selectable marker", "Supports identification/selection", "Not the target gene itself"],
        ["Bioreactor", "Controlled large-scale production", "Follows successful construct/expression system"],
        ["Downstream processing", "Separation/purification/formulation", "Post-production"],
      ],
    },
    {
      id: "process-pipeline",
      jump: true,
      slot: "concepts",
      heading: "Recombinant-DNA process pipeline",
      columns: ["Step", "Description"],
      rows: [
        ["1", "Isolate genetic material"],
        ["2", "Cut source and vector DNA"],
        ["3", "Separate or recover target fragment"],
        ["4", "Amplify target if required (PCR)"],
        ["5", "Ligate into vector"],
        ["6", "Introduce recombinant DNA into competent host"],
        ["7", "Select and identify transformants"],
        ["8", "Express or multiply"],
        ["9", "Scale in bioreactor if needed"],
        ["10", "Downstream processing"],
      ],
    },
  ],

  mistakes: [
    {
      id: "restriction-vs-ligase",
      mistake: "Believing a restriction enzyme joins DNA fragments.",
      why: [{ type: "paragraph", children: [{ text: "Restriction enzymes cut DNA; DNA ligase is the enzyme that joins compatible ends." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Pair 'cutting' with restriction enzymes and 'joining' with ligase every time." }] }],
      errorType: "recall-gap",
    },
    {
      id: "pcr-mandatory-assumption",
      mistake: "Assuming PCR is required in every recombinant-DNA workflow.",
      why: [{ type: "paragraph", children: [{ text: "Amplification is used only where target quantity needs to be increased before ligation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Check whether the scenario needs amplification before assuming PCR is a mandatory step." }] }],
      errorType: "decision-error",
    },
    {
      id: "vector-host-confusion",
      mistake: "Treating the vector and the host cell as the same thing.",
      why: [{ type: "paragraph", children: [{ text: "The vector carries the DNA insert; the host cell is the separate biological system that receives it." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Keep 'carrier' (vector) and 'recipient' (host) as distinct roles in the pipeline." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "marker-vs-target-gene",
      mistake: "Equating a selectable marker with the gene of interest.",
      why: [{ type: "paragraph", children: [{ text: "The marker supports identification and selection of transformed cells; the target insert serves a separate biological purpose." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Ask what the vector element is for: selection support, or the actual product-encoding insert." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "downstream-sequence-error",
      mistake: "Placing downstream processing before expression in the pipeline sequence.",
      why: [{ type: "paragraph", children: [{ text: "Downstream processing (purification, formulation) follows product formation, not host transformation." }] }],
      fix: [{ type: "paragraph", children: [{ text: "Confirm the pipeline order: transformation and expression happen before downstream processing." }] }],
      errorType: "execution-error",
    },
  ],

  relatedChapters: [
    {
      label: "Cell Biology",
      url: "/neet/biology/cell-biology",
      relation: "related",
      description: "Cell structure foundation used when describing DNA isolation from different sources.",
    },
    {
      label: "Biomolecules",
      url: "/neet/biology/biomolecules",
      relation: "related",
      description: "Nucleic-acid and enzyme foundations behind restriction enzymes and DNA ligase.",
    },
    {
      label: "Genetics",
      url: "/neet/biology/genetics",
      relation: "related",
      description: "Molecular-genetics foundation routed into biotechnology tools.",
    },
    {
      label: "Molecular Basis of Inheritance",
      url: "/neet/biology/molecular-basis-of-inheritance",
      relation: "related",
      description: "DNA-expression foundation extended into recombinant-DNA process.",
    },
    {
      label: "Microbes in Human Welfare",
      url: "/neet/biology/microbes-human-welfare",
      relation: "related",
      description: "Related Unit 8/9 chapter on microbial and enzymatic applications.",
    },
    {
      label: "Biotechnology Applications",
      url: "/neet/biology/biotechnology-applications",
      relation: "forward",
      description: "Applies these recombinant-DNA tools to insulin, gene therapy, Bt crops and transgenic animals.",
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
      question: "Which enzyme joins DNA fragments in recombinant DNA technology?",
      answer: [{ type: "paragraph", children: [{ text: "DNA ligase joins compatible DNA ends." }] }],
    },
    {
      question: "What are the key features of a cloning vector?",
      answer: [{ type: "paragraph", children: [{ text: "An origin of replication, a selectable marker and a suitable cloning site are core NCERT features." }] }],
    },
    {
      question: "What is downstream processing?",
      answer: [{ type: "paragraph", children: [{ text: "It is post-production separation, purification, formulation and related quality-control processing of the desired product." }] }],
    },
  ],

  sources: ["nmc-neet-ug-2026-syllabus", "ncert-biology-12-contents"],
  sourceNote:
    "NCERT Biotechnology: Principles and Processes: https://ncert.nic.in/textbook/pdf/lebo109.pdf. NCERT Exemplar index: https://ncert.nic.in/exemplar-problems.php?ln=en",

  contributorPolicy: [
    "Written by: UNASSIGNED",
    "Academically reviewed by: UNASSIGNED",
    "Last reviewed: pending human review",
    "Sources checked: visible in page source register",
  ],

  contentStatus: "draft",

  meta: {
    title: "NEET Biotechnology 2026: Recombinant DNA Tools and Process",
    description:
      "Learn the current NEET 2026 biotechnology process with restriction enzymes, vectors, competent hosts, PCR, recombinant DNA, bioreactors and downstream processing.",
  },
};
