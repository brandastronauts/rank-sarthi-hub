import type { ChapterContent } from "@/content/types";

/**
 * Electrostatics — T06 production content (approved package, 27 August 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/electrostatics on noindex until review is recorded.
 */
export const jeePhysicsElectrostatics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Electrostatics",
  slug: "electrostatics",
  url: "/jee/physics/electrostatics",
  canonicalIntent:
    "Understand the official JEE scope of Electrostatics, connect its concepts, choose the correct solving method and diagnose why questions go wrong.",

  heroChips: [
    "Mapped to JEE Main 2026 and JEE Advanced 2026",
    "Formulas carry their conditions",
    "No invented weightage, question counts or trend percentages",
  ],

  directAnswer: [
    {
      type: "paragraph",
      children: [
        {
          text: "Electrostatics studies electric charges at rest and the forces, fields, potentials and energy associated with them. For JEE, the chapter extends from Coulomb's law and superposition to electric flux, Gauss's law, conductors, dielectrics, capacitors and stored energy.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ text: "The chapter becomes easier when you stop treating it as a formula list:" }],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "charge distribution creates field, field produces force, field differences create potential differences, symmetry can simplify field calculation, materials respond to the field, and capacitor geometry determines charge-storage behaviour.",
          bold: true,
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ text: "Use this page to answer three questions:" }],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "What does the official syllabus actually require?" }],
        [{ text: "Which physical representation should I use for a problem?" }],
        [{ text: "If I get it wrong, what kind of gap should I repair?" }],
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "This page does not publish invented weightage, expected question counts or trend percentages.",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every Physics, Chemistry and Mathematics unit.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Subject hub for the Physics chapter set.",
    },
  ],

  syllabusMapping: {
    unit: "Electrostatics",
    topics: [
      "Electric charge and conservation of charge",
      "Coulomb's law for two point charges",
      "Force due to multiple charges and superposition",
      "Continuous charge distributions",
      "Electric field due to a point charge and electric field lines",
      "Electric dipole, dipole field and torque in a uniform electric field",
      "Electric flux and Gauss's law",
      "Gauss-law applications to an infinite line, infinite plane sheet and thin spherical shell",
      "Potential due to a point charge, dipole and system of charges",
      "Potential difference and equipotential surfaces",
      "Potential energy of two charges and a dipole in an electrostatic field",
      "Conductors, insulators, dielectrics and polarization",
      "Capacitors, capacitance and series or parallel combinations",
      "Parallel-plate capacitor with and without dielectric",
      "Energy stored in a capacitor",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35)                                          */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "charge-source",
      title: "1. Start with the source: charge and charge distribution",
      keyIdea:
        "Charge is the source information. Force, field, potential and flux are different descriptions of its effect.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A problem may give point charges or distribute charge along a line, over a surface or through a volume. That choice determines whether you use a finite sum or an integral.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Point charges: use Coulomb's law and vector superposition." }],
            [{ text: "Line charge: use " }, { text: "dq = lambda dl", code: true }, { text: "." }],
            [{ text: "Surface charge: use " }, { text: "dq = sigma dA", code: true }, { text: "." }],
            [{ text: "Volume charge: use " }, { text: "dq = rho dV", code: true }, { text: "." }],
          ],
        },
      ],
    },
    {
      id: "force-vs-field",
      title: "2. Separate force from field",
      keyIdea: "Electric force acts on a particular charge; electric field belongs to the source configuration.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electric force is the interaction on a particular charge. Electric field belongs to the source configuration and the observation point.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "F = qE", code: true }] },
        {
          type: "paragraph",
          children: [
            {
              text: "The sign of q matters. A negative charge feels force opposite to the local field direction. This is why field lines show the direction a positive test charge would accelerate, not the direction every charge moves.",
            },
          ],
        },
      ],
    },
    {
      id: "field-vs-potential",
      title: "3. Separate field from potential",
      keyIdea: "Field is a vector, potential is a scalar. Related information, not interchangeable quantities.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electric field is a vector. Electric potential is a scalar. They contain related information, but they are not interchangeable.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "Delta V = - integral(E dot dl)", code: true }] },
        {
          type: "paragraph",
          children: [
            {
              text: "The negative sign means potential decreases most rapidly in the field direction. Equipotential surfaces are perpendicular to the field where the field is nonzero.",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Zero field at a point does not force the potential there to be zero." }],
            [{ text: "Zero potential at a point does not force the field there to be zero." }],
          ],
        },
      ],
    },
    {
      id: "flux",
      title: "4. Use flux to connect field and enclosed charge",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electric flux measures the signed passage of the field through a surface. It is not a count of physical lines and it is not the local field strength.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Gauss's law connects total flux through any closed surface to the net enclosed charge. External charges can change the field on the surface, but their net contribution to the closed-surface flux is zero.",
            },
          ],
        },
      ],
    },
    {
      id: "symmetry",
      title: "5. Use symmetry to decide whether Gauss's law will simplify the field",
      keyIdea:
        "Gauss's law is always true; it becomes a field-solving method only when symmetry fixes direction and magnitude.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Gauss's law is true for every closed surface. It becomes a direct field-solving method only when symmetry lets you know the field direction and take its magnitude outside the flux integral over useful parts of the surface.",
            },
          ],
        },
        { type: "paragraph", children: [{ text: "The official syllabus names three standard applications:" }] },
        {
          type: "list",
          items: [
            [{ text: "Infinitely long uniformly charged straight wire" }],
            [{ text: "Uniformly charged infinite plane sheet" }],
            [{ text: "Uniformly charged thin spherical shell" }],
          ],
        },
      ],
    },
    {
      id: "materials",
      title: "6. Let materials respond",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In electrostatic equilibrium, the electric field inside the conducting material is zero, the conductor is at one potential and excess free charge resides on its surface. A dielectric polarizes in an applied field, modifying the field and capacitance.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            { text: "Do not turn " },
            { text: "E = 0 inside a conductor", code: true },
            {
              text: " into an unrestricted slogan. The statement concerns the conducting material in electrostatic equilibrium. A cavity containing charge requires separate analysis.",
            },
          ],
        },
      ],
    },
    {
      id: "capacitor-state",
      title: "7. Treat a capacitor as geometry plus material plus connection state",
      keyIdea: "Capacitance is set by geometry and medium, not by how much charge a capacitor happens to hold.",
      body: [
        {
          type: "paragraph",
          children: [{ text: "Capacitance is a property of the conductor geometry and intervening medium:" }],
        },
        { type: "paragraph", children: [{ text: "C = Q / Delta V", code: true }] },
        {
          type: "paragraph",
          children: [
            {
              text: "It is not made larger merely because a particular capacitor happens to carry more charge. A capacitor change problem is controlled by what remains connected:",
            },
          ],
        },
        {
          type: "list",
          items: [
            [{ text: "Isolated capacitor: charge remains constant." }],
            [{ text: "Ideal battery remains connected: voltage remains constant." }],
            [{ text: "Reconnection or switching: determine the new constraints before using energy formulas." }],
          ],
        },
      ],
    },
    {
      id: "energy-loop",
      title: "8. Close the loop with energy",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electrostatic force is conservative, so potential and energy often replace a longer force calculation. Capacitor energy can be viewed as energy associated with the electric field. This connects force, work, potential, capacitance and later circuit behaviour.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Structured tables (B25) placed at typed anchor points               */
  /* ------------------------------------------------------------------ */
  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this chapter contains and why it matters",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "What is the chapter about?",
          "The interaction of stationary charges through force, field, potential, flux, energy and charge-storage systems.",
        ],
        [
          "What are the two main representations?",
          "Electric field is a vector description of force per unit positive test charge. Electric potential is a scalar description of potential energy per unit charge.",
        ],
        [
          "What is the central method choice?",
          "Use direct superposition for a small number of charges, integration for general continuous distributions, Gauss's law for strong symmetry and potential or energy when the question is about work or state change.",
        ],
        [
          "Where do most mistakes begin?",
          "Sign and direction, choosing a Gaussian surface without enough symmetry, confusing zero field with zero potential, and failing to identify what remains constant in a capacitor change.",
        ],
        [
          "What should come before Electrostatics?",
          "Vectors, force, work and energy, basic algebra and trigonometry, elementary calculus, graphs and SI units.",
        ],
        [
          "What comes after it?",
          "Current Electricity uses potential difference and circuit energy ideas, and capacitance connects forward to circuit behaviour.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Electrostatics",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 27 August 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Charge and interaction",
          "Conservation of charge, Coulomb's law, multiple charges, superposition and continuous charge distribution are explicitly listed.",
          "Coulomb's law is explicitly listed.",
          "Learn vector force and superposition before continuous distributions.",
        ],
        [
          "Electric field",
          "Field due to a point charge, field lines, dipole field and torque on a dipole in a uniform field are explicitly listed.",
          "Electric field and field lines are explicitly listed.",
          "Treat field as a vector. Do not add magnitudes unless directions justify it.",
        ],
        [
          "Flux and Gauss's law",
          "Flux, Gauss's law and applications to an infinite line, infinite plane sheet and thin spherical shell are explicitly listed.",
          "The same three application types are explicitly named as simple cases.",
          "Gauss's law is always valid for a closed surface, but it is a practical field-solving shortcut only with enough symmetry.",
        ],
        [
          "Potential and energy",
          "Point-charge, dipole and charge-system potential; potential difference; equipotential surfaces; potential energy of two charges and a dipole are explicitly listed.",
          "Potential and potential energy of point-charge systems and dipoles in a uniform electrostatic field are explicitly listed.",
          "Use potential for work, energy and scalar superposition.",
        ],
        [
          "Conductors and dielectrics",
          "Conductors, insulators, dielectrics and electric polarization are explicitly listed.",
          "Dielectrics are explicitly listed through capacitor scope. The cited Electrostatics lines do not separately name conductors or polarization.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
        [
          "Capacitance",
          "Capacitors, series and parallel combinations, parallel-plate capacitance with and without dielectric and stored energy are explicitly listed.",
          "The same capacitor themes are explicitly listed.",
          "Always identify whether charge, voltage, connection or geometry is fixed before comparing states.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Electrostatics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Vectors and unit vectors",
          "Resolve a vector into components and use the direction from source to observation point.",
          "Revise vector addition, components, unit vectors and the dot product.",
        ],
        [
          "Force and equilibrium",
          "Draw a force diagram and write component equations without losing signs.",
          "Revise Newton's laws and equilibrium of concurrent forces.",
        ],
        [
          "Work and energy",
          "Distinguish force from potential energy and relate work to a change in energy.",
          "Revise conservative forces, work-energy reasoning and reference levels.",
        ],
        [
          "Algebra and trigonometry",
          "Rearrange inverse-square expressions and use geometry to find distances and angles.",
          "Practise algebraic simplification, similar triangles and standard trigonometric ratios.",
        ],
        [
          "Elementary calculus",
          "Interpret a small charge element and evaluate or set up a simple integral.",
          "Revise differentiation, definite integration and symmetry of odd or even contributions.",
        ],
        [
          "Graphs",
          "Read slope, area and sign from a graph.",
          "Revise slope as rate of change and signed area as accumulation.",
        ],
        [
          "SI units and dimensions",
          "Check whether a result has units of N/C, volt, farad or joule.",
          "Build a one-page unit map before formula practice.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "relationship-map",
      slot: "concepts",
      heading: "Relationship map",
      columns: ["From", "To", "Connecting idea", "Diagnostic question"],
      rows: [
        [
          "Charge distribution",
          "Electric field",
          "Coulomb's law plus vector superposition",
          "Did I include direction before adding contributions?",
        ],
        ["Electric field", "Force", "F = qE", "Did the sign of the test charge reverse the force direction?"],
        [
          "Electric field",
          "Potential difference",
          "Delta V = - integral(E dot dl)",
          "Am I using a scalar end-state question or a vector local question?",
        ],
        [
          "Enclosed charge",
          "Flux",
          "Gauss's law",
          "Is the surface closed, and what charge is actually enclosed?",
        ],
        [
          "Symmetry",
          "Field magnitude",
          "Constant-field simplification on a Gaussian surface",
          "Can I justify the field direction and constancy?",
        ],
        [
          "Potential difference",
          "Capacitance",
          "C = Q / Delta V",
          "Is capacitance set by geometry and material here?",
        ],
        [
          "Capacitor state",
          "Stored energy",
          "Select the energy form that keeps the fixed variable visible",
          "Is Q fixed or is V fixed?",
        ],
      ],
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Choose the method before calculating",
      intro: "Five decisions cover most Electrostatics questions. Select the representation before any algebra.",
      columns: ["If the problem gives or asks…", "First method to consider", "Why", "Reject this method when…"],
      rows: [
        [
          "A few point charges and force or field at a point",
          "Coulomb's law plus vector superposition",
          "Each contribution is direct and direction matters.",
          "The distribution is continuous and a sum becomes an integral.",
        ],
        [
          "A continuous distribution without strong symmetry",
          "Integration of dE or dV",
          "The source must be accumulated element by element.",
          "Symmetry supports a much shorter Gauss-law route.",
        ],
        [
          "An infinite line, infinite plane or spherical symmetry",
          "Gauss's law",
          "Symmetry can make the flux integral simple.",
          "You cannot justify field direction or constant magnitude on the chosen surface.",
        ],
        [
          "Work, potential difference or potential energy",
          "Potential or energy",
          "Scalars often avoid unnecessary vector resolution.",
          "The question explicitly needs local direction or force.",
        ],
        [
          "A capacitor network",
          "Series and parallel reduction plus node constraints",
          "Connection topology determines equal charge or equal voltage relationships.",
          "The network cannot be reduced by simple series or parallel structure.",
        ],
        [
          "A dielectric or changing geometry",
          "State comparison with a fixed-variable check",
          "Q versus V determines how energy changes.",
          "The switching or connection state is not yet known.",
        ],
      ],
    },
    {
      id: "dielectric-state-table",
      slot: "concepts",
      heading: "Dielectric insertion: the connection state decides the answer",
      intro:
        "A dielectric of relative permittivity K completely fills an ideal parallel-plate capacitor, so C_new = K C_old in both rows.",
      columns: ["State", "Fixed quantity", "Voltage", "Charge", "Stored energy"],
      rows: [
        ["Capacitor isolated before insertion", "Q", "Becomes V/K", "Unchanged", "Becomes U/K"],
        ["Ideal battery remains connected", "V", "Unchanged", "Becomes KQ", "Becomes KU"],
      ],
      note: "Start with C increasing by K, then choose the energy form that exposes the fixed variable: U = Q^2/(2C) for fixed charge or U = (1/2)CV^2 for fixed voltage.",
    },
    {
      id: "unit-bridge",
      slot: "formulas",
      heading: "Unit bridge",
      intro: "Use the equivalent form to check any result before accepting it.",
      columns: ["Quantity", "SI unit", "Equivalent form that helps checking"],
      rows: [
        ["Charge", "coulomb, C", "A s"],
        ["Electric field", "N/C", "V/m"],
        ["Electric flux", "N m^2/C", "V m"],
        ["Potential", "volt, V", "J/C"],
        ["Dipole moment", "C m", "Charge times separation"],
        ["Capacitance", "farad, F", "C/V"],
        ["Energy", "joule, J", "C V"],
      ],
    },
    {
      id: "pi-diagnosis",
      jump: true,
      slot: "diagnosis",
      heading: "Diagnose your Electrostatics weakness with evidence",
      intro:
        "One wrong answer does not always reveal the cause. Use the smallest Preparation Intelligence v1.1 label supported by what the student actually did.",
      columns: ["PI v1.1 label", "Evidence in Electrostatics", "Repair action", "Retest"],
      rows: [
        [
          "Knowledge Gap",
          "Cannot explain why field is vector and potential is scalar; cannot distinguish flux from field; believes capacitance is set by stored charge.",
          "Rebuild the concept with a definition, relationship and one contrasting example.",
          "Explain the idea aloud, then solve one direct and one contrast question.",
        ],
        [
          "Recall Gap",
          "Understands the model but cannot retrieve a formula, condition, unit or standard Gauss-law result without prompting.",
          "Use closed-book retrieval with meaning and conditions, not formula copying.",
          "Recall again after a delay, then apply in a fresh problem.",
        ],
        [
          "Execution Error",
          "Chooses the right method but makes a sign, vector-component, algebra, integration, unit or arithmetic error.",
          "Mark the exact failed step and add a direction, dimension or limit check.",
          "Repeat the same method on a numerically different question.",
        ],
        [
          "Decision / Selection Error",
          "Uses Gauss's law without usable symmetry, chooses field when scalar potential is simpler, applies a far-field dipole formula outside its condition or selects fixed Q instead of fixed V.",
          "Practise the method selector before calculation. Write the rejected alternative and why it was rejected.",
          "Solve a mixed set where the method is not named in the prompt.",
        ],
        [
          "Needs Review",
          "The response is blank, partially correct, ambiguous, guessed or inconsistent, so the evidence does not support a stable label.",
          "Review the work or collect another response before assigning a gap.",
          "Ask a short discriminating question that separates understanding, recall, execution and selection.",
        ],
      ],
      note: "Contributing factors such as rushed reading, weak diagram use, notation confusion or time pressure may be recorded separately. They do not replace the primary label.",
    },
    {
      id: "tag-confidence",
      slot: "diagnosis",
      heading: "Tag confidence",
      columns: ["Confidence", "When it applies"],
      rows: [
        [
          "High",
          "The work clearly exposes the cause, such as selecting Gauss's law for a finite asymmetric distribution and explicitly stating a false symmetry assumption.",
        ],
        ["Medium", "The pattern appears in more than one response, but another cause remains plausible."],
        [
          "Low",
          "Only the final answer is visible, the student guessed or the working is incomplete. Use Needs Review when a specific label would overstate the evidence.",
        ],
      ],
    },
    {
      id: "pyq-review-method",
      slot: "practice",
      heading: "How to review an Electrostatics previous-year question",
      intro: "For every verified question, record five things.",
      columns: ["Review field", "What to record"],
      rows: [
        [
          "Required concept",
          "Charge and field, potential and energy, Gauss's law, conductors, dielectrics, capacitance or a combination.",
        ],
        ["Representation", "Vector force, scalar potential, flux, graph, geometry, energy or network."],
        ["Decisive choice", "The one method or condition that made the solution shorter or correct."],
        [
          "Error evidence",
          "Knowledge Gap, Recall Gap, Execution Error, Decision / Selection Error or Needs Review.",
        ],
        ["Retest rule", "The type of fresh question to attempt and when to attempt it."],
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Extra concept groups (B35) at typed anchor points                   */
  /* ------------------------------------------------------------------ */
  sections: [
    {
      id: "readiness-check",
      slot: "prerequisites",
      heading: "Five-minute readiness check",
      concepts: [
        {
          id: "readiness-questions",
          title: "Try these without notes — the purpose is diagnosis, not scoring",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Two equal forces act at right angles. Can you find the resultant direction and magnitude?" }],
                [{ text: "Can you explain why work by a conservative force depends only on the end points?" }],
                [{ text: "Can you write the dot product of two vectors and identify when it is zero?" }],
                [
                  { text: "Can you set up " },
                  { text: "dq = lambda dl", code: true },
                  { text: ", " },
                  { text: "dq = sigma dA", code: true },
                  { text: " and " },
                  { text: "dq = rho dV", code: true },
                  { text: " with correct units?" },
                ],
                [
                  {
                    text: "Can you distinguish a negative quantity from a vector pointing in a negative coordinate direction?",
                  },
                ],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "Readiness rule: if questions 1 to 3 are weak, repair vectors and mechanics before multi-charge or dipole problems. If question 4 is weak, learn charge-density meaning before continuous distributions. If question 5 is weak, use signed one-dimensional examples before full vector notation.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "answer-checks",
      slot: "mistakes",
      heading: "Three checks before accepting any answer",
      concepts: [
        {
          id: "three-checks",
          title: "Run every answer through direction, dimension and limit",
          body: [
            {
              type: "list",
              ordered: true,
              items: [
                [
                  { text: "Direction check: ", bold: true },
                  { text: "would the result reverse correctly if a source charge changed sign?" },
                ],
                [
                  { text: "Dimension check: ", bold: true },
                  { text: "does the expression end in the requested unit?" },
                ],
                [
                  { text: "Limit check: ", bold: true },
                  {
                    text: "does the answer behave sensibly when distance becomes very large, separation becomes very small or symmetry becomes exact?",
                  },
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "study-action",
      slot: "diagnosis",
      heading: "Check understanding before adding more questions",
      concepts: [
        {
          id: "study-action-body",
          title: "A five-step diagnostic sequence you can run yourself",
          keyIdea:
            "Rank Sarthi does not yet have a live Electrostatics diagnostic, so this page shows the study action instead of a button.",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "Attempt one question each on vector superposition, field versus potential, Gauss-law symmetry, capacitor networks and dielectric state changes. Review the method choice before reviewing arithmetic.",
                },
              ],
            },
            {
              type: "list",
              ordered: true,
              items: [
                [{ text: "Ask for a one-sentence concept explanation." }],
                [{ text: "Ask for closed-book recall of the relevant relationship and its condition." }],
                [{ text: "Inspect the written execution step by step." }],
                [{ text: "Ask why that method was selected over one alternative." }],
                [{ text: "If evidence is still insufficient, use Needs Review rather than guessing." }],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "official-papers",
      jump: true,
      slot: "practice",
      heading: "Use official previous papers without inventing chapter trends",
      concepts: [
        {
          id: "official-repositories",
          title: "Official repositories",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "The official JEE Advanced archive provides past question papers, including Paper 1 and Paper 2 downloads across years. The official JEE Main site exposes current question papers through its Question Papers section.",
                },
              ],
            },
            {
              type: "list",
              items: [
                [
                  {
                    text: "JEE Advanced past question papers",
                    href: "https://jeeadv.ac.in/archive.html",
                  },
                ],
                [
                  {
                    text: "JEE Main official site and Question Papers section",
                    href: "https://jeemain.nta.nic.in/",
                  },
                ],
              ],
            },
            {
              type: "note",
              tone: "caution",
              children: [
                {
                  text: "This page does not claim a verified number of Electrostatics questions per year, a guaranteed chapter weightage, a trend percentage, or a topic-tagged PYQ list that has not been independently checked.",
                },
              ],
            },
          ],
        },
        {
          id: "gated-blocks",
          title: "Why weightage and trend analysis are not shown",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "No approved topic-tagged dataset, sample definition or review method was supplied for this page. Publishing a chapter weightage or frequency from competitor claims would create false precision. To enable those blocks later, the dataset must identify:",
                },
              ],
            },
            {
              type: "list",
              items: [
                [{ text: "Exam and year range" }],
                [{ text: "Sessions and papers included" }],
                [{ text: "Official paper source for every item" }],
                [{ text: "Topic-tagging rules" }],
                [{ text: "Handling of multi-concept questions" }],
                [{ text: "Reviewer and review date" }],
                [{ text: "Counts and denominators" }],
                [{ text: "A clear label that historical observations do not guarantee future questions" }],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "next-step",
      jump: true,
      slot: "related",
      heading: "Your next useful step",
      concepts: [
        {
          id: "next-step-body",
          title: "Start the chapter or repair it, not both at once",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "If you are beginning the chapter, complete the five-minute prerequisite check and learn charge, force and field before potential or capacitance.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  text: "If you are revising, attempt a mixed set that forces you to choose among superposition, integration, Gauss's law, potential and energy. Diagnose the method choice before counting arithmetic mistakes.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Formula sheet (B29)                                                 */
  /* ------------------------------------------------------------------ */
  formulas: [
    {
      id: "coulombs-law",
      expression: "F_21 = (1 / 4 pi epsilon) (q_1 q_2 / r_21^2) r_hat_21",
      meaning:
        "Force on charge 2 due to charge 1 for two stationary point charges in a homogeneous isotropic medium.",
      variables: [
        { symbol: "F", meaning: "force", unit: "N" },
        { symbol: "q_1, q_2", meaning: "charges", unit: "C" },
        { symbol: "r_21", meaning: "separation", unit: "m" },
        { symbol: "r_hat_21", meaning: "unit vector from charge 1 to charge 2" },
        { symbol: "epsilon", meaning: "permittivity of the medium; use epsilon_0 in vacuum", unit: "C^2 N^-1 m^-2" },
      ],
      useWhen: "The sources can be treated as point charges and positions are known.",
      commonTrap:
        "Using only charge magnitudes and then guessing direction. The signed vector form already contains attraction or repulsion.",
      accessibleText:
        "Force on charge two due to charge one equals one over four pi epsilon, times q one q two divided by the square of their separation, in the direction of the unit vector from charge one to charge two.",
    },
    {
      id: "superposition",
      expression: "F_net = sum(F_i)   and   E_net = sum(E_i)",
      meaning: "The net force or field is the vector sum of individual contributions.",
      variables: [
        { symbol: "F_i", meaning: "force contribution from source i", unit: "N" },
        { symbol: "E_i", meaning: "field contribution from source i", unit: "N/C or V/m" },
      ],
      useWhen: "Several discrete charges contribute at one point.",
      commonTrap:
        "Adding magnitudes before resolving directions. Potential adds as a scalar, but field and force do not.",
      accessibleText:
        "Net force equals the vector sum of individual forces, and net field equals the vector sum of individual fields.",
    },
    {
      id: "electric-field",
      expression: "E = F / q_0 ;   point charge: E = (1 / 4 pi epsilon)(q / r^2) r_hat",
      meaning: "Force per unit positive test charge due to the source configuration.",
      variables: [
        { symbol: "E", meaning: "electric field", unit: "N/C or V/m" },
        { symbol: "q_0", meaning: "sufficiently small positive test charge", unit: "C" },
        { symbol: "r", meaning: "distance from the source charge", unit: "m" },
      ],
      useWhen: "The question asks for local force direction, acceleration tendency or field at a point.",
      commonTrap:
        "Treating the test charge as the source of the field being measured. The test-charge limit avoids disturbing the source configuration.",
      accessibleText:
        "Electric field equals force divided by a small positive test charge; for a point charge it equals one over four pi epsilon times q over r squared, along the radial unit vector.",
    },
    {
      id: "continuous-distribution",
      expression: "dq = lambda dl ,  dq = sigma dA ,  dq = rho dV ;  then integrate dE or dV",
      meaning: "Converts a distributed source into infinitesimal charge elements.",
      variables: [
        { symbol: "lambda", meaning: "linear charge density", unit: "C/m" },
        { symbol: "sigma", meaning: "surface charge density", unit: "C/m^2" },
        { symbol: "rho", meaning: "volume charge density", unit: "C/m^3" },
      ],
      useWhen: "Charge is spread continuously rather than concentrated at points.",
      commonTrap: "Integrating the field magnitude while ignoring that components can cancel by symmetry.",
      accessibleText:
        "Charge element equals lambda d l for a line, sigma d A for a surface and rho d V for a volume; then integrate the field or potential contribution.",
    },
    {
      id: "dipole",
      expression:
        "p = q d ;  tau = p cross E ;  U = -p dot E ;  E_axial = (1 / 4 pi epsilon_0)(2p / r^3) ;  E_equatorial = (1 / 4 pi epsilon_0)(p / r^3) ;  V = (1 / 4 pi epsilon_0)(p cos theta / r^2)",
      meaning:
        "Dipole moment, torque and energy in a uniform field, plus short-dipole far-field results where r is much larger than the charge separation.",
      variables: [
        { symbol: "p", meaning: "dipole moment, directed from negative to positive charge", unit: "C m" },
        { symbol: "d", meaning: "displacement vector from negative to positive charge", unit: "m" },
        { symbol: "tau", meaning: "torque", unit: "N m" },
        { symbol: "U", meaning: "potential energy in a uniform field", unit: "J" },
      ],
      useWhen:
        "Equal and opposite charges form a separated pair, or a far-field approximation is stated or justified.",
      commonTrap: "Using far-field dipole formulas when r is comparable to the charge separation.",
      accessibleText:
        "Dipole moment equals charge times separation; torque is p cross E; energy is minus p dot E; axial far field is twice the equatorial far field and both fall as one over r cubed; potential falls as one over r squared.",
    },
    {
      id: "flux-gauss",
      expression: "Phi_E = integral(E dot dA) ;  closed integral(E dot dA) = Q_enclosed / epsilon_0",
      meaning:
        "Flux is the signed surface integral of the normal field component. Gauss's law relates closed-surface flux to net enclosed charge.",
      variables: [
        { symbol: "Phi_E", meaning: "electric flux", unit: "N m^2/C" },
        { symbol: "dA", meaning: "area element, pointing outward on a closed surface", unit: "m^2" },
        { symbol: "Q_enclosed", meaning: "net charge enclosed by the surface", unit: "C" },
      ],
      useWhen: "Calculating flux for any field, or calculating the field when symmetry is strong enough.",
      commonTrap:
        "Using an open surface in Gauss's law, including external charge in Q_enclosed, or assuming zero enclosed charge means zero field everywhere on the surface.",
      accessibleText:
        "Electric flux is the integral of E dot d A; for a closed surface that integral equals the enclosed charge divided by epsilon nought.",
    },
    {
      id: "standard-gauss-fields",
      expression:
        "Infinite line: E = lambda / (2 pi epsilon_0 r) ;  Infinite sheet: E = sigma / (2 epsilon_0) ;  Thin shell: outside E = (1 / 4 pi epsilon_0)(Q / r^2), inside E = 0",
      meaning: "Standard vacuum results that follow from cylindrical, planar and spherical symmetry.",
      variables: [
        { symbol: "lambda", meaning: "linear charge density", unit: "C/m" },
        { symbol: "sigma", meaning: "surface charge density of a nonconducting sheet", unit: "C/m^2" },
        { symbol: "Q", meaning: "total shell charge", unit: "C" },
        { symbol: "E", meaning: "field magnitude", unit: "N/C or V/m" },
      ],
      useWhen: "The ideal infinite or spherically symmetric conditions apply.",
      commonTrap:
        "Applying an infinite-sheet result to a nearby finite sheet without checking edge effects, or confusing a nonconducting sheet field with the field just outside a conductor.",
      accessibleText:
        "For an infinite line the field is lambda over two pi epsilon nought r; for an infinite sheet it is sigma over two epsilon nought; for a thin shell it is the point-charge result outside and zero inside.",
    },
    {
      id: "potential",
      expression:
        "V = sum[(1 / 4 pi epsilon)(q_i / r_i)] ;  Delta V = - integral(E dot dl) ;  E = -grad V",
      meaning:
        "Potential is potential energy per unit charge. The field points toward the steepest decrease of potential.",
      variables: [
        { symbol: "V", meaning: "electric potential", unit: "V = J/C" },
        { symbol: "Delta V", meaning: "potential difference", unit: "V" },
        { symbol: "E", meaning: "electric field", unit: "V/m" },
      ],
      useWhen:
        "The question concerns work, potential difference, equipotential surfaces or many-source scalar superposition.",
      commonTrap: "Adding potential vectors or concluding E = 0 merely because V = 0 at one point.",
      accessibleText:
        "Potential is the scalar sum of q over r terms; potential difference is minus the line integral of E dot d l; the field is minus the gradient of potential.",
    },
    {
      id: "potential-energy",
      expression:
        "U = qV ;  U = sum over i<j [(1 / 4 pi epsilon_0)(q_i q_j / r_ij)] ;  dipole in a uniform field: U = -p dot E",
      meaning:
        "Energy depends on configuration and the chosen potential reference. The pair sum counts every distinct pair once.",
      variables: [
        { symbol: "U", meaning: "potential energy", unit: "J" },
        { symbol: "q_i, q_j", meaning: "charges in the assembled system", unit: "C" },
        { symbol: "r_ij", meaning: "separation of the pair", unit: "m" },
      ],
      useWhen:
        "Comparing configurations, calculating external work or finding stable and unstable dipole orientations.",
      commonTrap:
        "Counting a pair twice, including a point charge's self-energy in the pair sum or confusing source-system energy with qV in an external field.",
      accessibleText:
        "Energy of a charge in an external potential is q times V; assembly energy is the sum over distinct pairs of q i q j over r i j divided by four pi epsilon nought.",
    },
    {
      id: "conductors",
      expression: "Inside conducting material: E = 0 ;  V constant ;  just outside: E = (sigma / epsilon_0) n_hat",
      meaning: "Free charges rearrange until no tangential electric field remains in the conductor.",
      variables: [
        { symbol: "sigma", meaning: "surface charge density on the conductor", unit: "C/m^2" },
        { symbol: "E", meaning: "field magnitude", unit: "N/C" },
        { symbol: "n_hat", meaning: "outward normal to the conductor surface" },
      ],
      useWhen: "The conductor is in electrostatic equilibrium.",
      commonTrap:
        "Saying every cavity has zero field. A charge-free cavity in the stated electrostatic situation differs from a cavity containing a charge.",
      accessibleText:
        "Inside conducting material the field is zero and potential is constant; immediately outside a charged conductor in vacuum the field is sigma over epsilon nought along the outward normal.",
    },
    {
      id: "capacitance",
      expression: "C = Q / Delta V ;  vacuum plates: C = epsilon_0 A / d ;  filled dielectric: C = K epsilon_0 A / d",
      meaning:
        "Capacitance measures how much charge separation corresponds to a potential difference for a given geometry and medium.",
      variables: [
        { symbol: "C", meaning: "capacitance", unit: "F" },
        { symbol: "Q", meaning: "magnitude of charge on each plate", unit: "C" },
        { symbol: "A", meaning: "plate area", unit: "m^2" },
        { symbol: "d", meaning: "plate separation", unit: "m" },
        { symbol: "K", meaning: "relative permittivity of the filling dielectric (dimensionless)" },
      ],
      useWhen: "Fringing is negligible and the stated medium fills the relevant region.",
      commonTrap:
        "Treating capacitance as dependent on the current numerical values of Q and V instead of geometry and material in the linear model.",
      accessibleText:
        "Capacitance equals charge divided by potential difference; for ideal parallel plates it equals epsilon nought A over d, multiplied by K when a dielectric fills the gap.",
    },
    {
      id: "capacitor-combinations",
      expression: "Parallel: C_eq = sum(C_i) ;  Series: 1/C_eq = sum(1/C_i)",
      meaning:
        "Capacitors in parallel share potential difference. Ideal capacitors in a simple series path acquire equal-magnitude charge under the usual initially uncharged network assumptions.",
      variables: [{ symbol: "C_eq", meaning: "equivalent capacitance", unit: "F" }],
      useWhen: "The network topology is genuinely reducible as series or parallel.",
      commonTrap:
        "Deciding from the drawing alone. Identify nodes: components are parallel only if both terminals connect to the same two nodes.",
      accessibleText:
        "In parallel the equivalent capacitance is the sum; in series the reciprocal of the equivalent capacitance is the sum of reciprocals.",
    },
    {
      id: "capacitor-energy",
      expression: "U = (1/2)CV^2 = Q^2/(2C) = (1/2)QV ;  energy density u = (1/2) epsilon E^2",
      meaning: "Work done in charging appears as energy associated with the configuration and field.",
      variables: [
        { symbol: "U", meaning: "stored energy", unit: "J" },
        { symbol: "u", meaning: "field energy density in a linear dielectric", unit: "J/m^3" },
        { symbol: "epsilon", meaning: "permittivity of the medium", unit: "F/m" },
        { symbol: "E", meaning: "field magnitude", unit: "V/m" },
      ],
      useWhen: "Select the algebraic form that keeps the problem's fixed quantity visible.",
      commonTrap:
        "Assuming energy always rises when capacitance rises. At fixed V, energy rises with C; at fixed Q, it falls with C.",
      accessibleText:
        "Stored energy equals half C V squared, or Q squared over two C, or half Q V; energy density equals half epsilon E squared.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B35 via workedExamples)                           */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-field-cancels",
      prompt:
        "Worked reasoning 1: two equal positive charges +q are fixed at equal distances on opposite sides of midpoint M. What are the electric field and potential at M?",
      answer:
        "The field cancels to zero at M while the potential is nonzero, because vectors oppose but scalars add.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Each charge produces a field of the same magnitude at M." }],
            [{ text: "The two field vectors point in opposite directions, so they cancel." }],
            [{ text: "Potential is a scalar, and both positive contributions add." }],
            [
              {
                text: "So zero field and zero potential are independent questions: this configuration has one without the other.",
              },
            ],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "What this tests: whether field and potential are being treated as vector and scalar descriptions rather than as the same quantity.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-gauss-line",
      prompt:
        "Worked reasoning 2: an infinitely long uniform line has linear charge density lambda. Find the field at perpendicular distance r in vacuum.",
      answer:
        "E = lambda / (2 pi epsilon_0 r), directed radially outward for positive lambda and inward for negative lambda.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Cylindrical symmetry makes the field radial and dependent only on r." }],
            [{ text: "Choose a coaxial cylindrical Gaussian surface of radius r and length L." }],
            [{ text: "The field is perpendicular to the curved surface and has constant magnitude there." }],
            [{ text: "The field is parallel to the end-cap surfaces, so their flux is zero." }],
            [{ text: "Curved-surface flux is E(2 pi r L)." }],
            [{ text: "Enclosed charge is lambda L." }],
            [{ text: "Gauss's law gives E(2 pi r L) = lambda L / epsilon_0." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "What this tests: the result comes from symmetry, not from choosing a convenient surface alone. Copying the same procedure to a finite line without justification is a Decision / Selection Error.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-dielectric-state",
      prompt:
        "Worked reasoning 3: a dielectric with relative permittivity K completely fills an ideal parallel-plate capacitor. What changes?",
      answer: "C_new = K C_old always; everything else depends on whether Q or V is held fixed.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "Do not memorise the isolated and battery-connected cases as unrelated facts. Start with C increasing by K, then choose the energy form that exposes the fixed variable: U = Q^2/(2C) for fixed charge or U = (1/2)CV^2 for fixed voltage. The state comparison table above sets out both rows.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "What this tests: using the wrong row while recalling the formulas correctly is a Decision / Selection Error; choosing the right row and failing the algebra is an Execution Error.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Common mistakes (B30)                                               */
  /* ------------------------------------------------------------------ */
  mistakes: [
    {
      id: "scalar-field-addition",
      mistake: "Adding electric fields as scalars",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Field has direction, so components can reinforce or cancel." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Draw or resolve each contribution before adding." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "zero-field-zero-potential",
      mistake: "Assuming zero field means zero potential",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Field is a spatial rate of change of potential, not potential itself." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Evaluate field and potential independently using vector and scalar logic." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "zero-potential-zero-field",
      mistake: "Assuming zero potential means zero field",
      why: [
        { type: "paragraph", children: [{ text: "Potential can cross zero while changing with position." }] },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Ask about the gradient, not only the value at one point." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "gaussian-surface-without-symmetry",
      mistake: "Choosing a Gaussian surface only because it encloses charge",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "Enclosure gives flux, but not a simple field unless symmetry controls " },
            { text: "E dot dA", code: true },
            { text: "." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "State field direction and constancy before taking E outside the integral." },
          ],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "external-charge-enclosed",
      mistake: "Putting external charge into Q_enclosed",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Gauss's law uses only net enclosed charge on its right side." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Separate charges into enclosed and external sets." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "zero-enclosed-zero-field",
      mistake: "Concluding zero enclosed charge means zero field",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "Net flux can be zero even when nonzero field enters and leaves the surface." },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Distinguish local field from total closed-surface flux." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "dipole-far-field-misuse",
      mistake: "Using a dipole far-field formula too close to the dipole",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The approximation assumes distance much larger than separation." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check the length-scale condition before selecting the formula." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "field-lines-as-objects",
      mistake: "Treating field lines as physical paths or countable objects",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Field lines are a representation whose density is qualitative." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "Use the tangent for direction and relative spacing for relative strength." },
          ],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "double-counted-pairs",
      mistake: "Counting electrostatic energy pairs twice",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Each interaction pair belongs in the assembly energy once." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "Use " },
            { text: "i < j", code: true },
            { text: " or assemble one charge at a time." },
          ],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "capacitance-from-charge",
      mistake: "Saying capacitance rises because charge rises",
      why: [
        {
          type: "paragraph",
          children: [
            { text: "In the linear model, Q and V change together for fixed geometry and medium." },
          ],
        },
      ],
      fix: [{ type: "paragraph", children: [{ text: "Identify geometry and dielectric first." }] }],
      errorType: "knowledge-gap",
    },
    {
      id: "wrong-fixed-variable",
      mistake: "Using the isolated-capacitor dielectric result while a battery remains connected",
      why: [
        { type: "paragraph", children: [{ text: "The fixed quantity changes from Q to V." }] },
      ],
      fix: [
        {
          type: "paragraph",
          children: [
            { text: "Write " },
            { text: "fixed Q", code: true },
            { text: " or " },
            { text: "fixed V", code: true },
            { text: " before comparing states." },
          ],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "visual-series",
      mistake: "Assuming capacitors that look adjacent are in series",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Network relations depend on nodes, not visual placement." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Mark nodes and check whether the shared node has any branch." }],
        },
      ],
      errorType: "decision-error",
    },
    {
      id: "dropped-negative-sign",
      mistake: "Dropping the negative sign in Delta V = - integral(E dot dl)",
      why: [
        {
          type: "paragraph",
          children: [{ text: "The sign carries the direction of potential decrease." }],
        },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "State the path direction before integrating." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "bare-number",
      mistake: "Giving a bare number without units or direction",
      why: [
        {
          type: "paragraph",
          children: [
            {
              text: "A magnitude alone may not answer a vector question and cannot be dimensionally checked.",
            },
          ],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Add SI unit, direction and a limiting-case check." }],
        },
      ],
      errorType: "execution-error",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B22)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is Electrostatics in JEE Physics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electrostatics is the study of stationary charges and their force, field, potential, flux, energy and capacitance. The current official JEE scope includes Coulomb's law, superposition, field and potential, Gauss's law applications and capacitors. JEE Main also explicitly names conductors, insulators, polarization, equipotential surfaces and torque on a dipole.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the difference between electric field and electric potential?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Electric field is force per unit positive test charge and is a vector measured in N/C or V/m. Electric potential is potential energy per unit charge and is a scalar measured in volts. They are related by E = -grad V.",
            },
          ],
        },
      ],
    },
    {
      question: "Can electric field be zero when potential is not zero?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. At the midpoint between two equal positive charges, their electric fields cancel because the vectors oppose, while their positive scalar potentials add.",
            },
          ],
        },
      ],
    },
    {
      question: "Can potential be zero when electric field is not zero?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Yes. Potential can be zero because positive and negative scalar contributions cancel, while the corresponding field vectors do not cancel.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Gauss's law valid only for symmetric charge distributions?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "No. Gauss's law is valid for any closed surface. Symmetry is required when you want to use it as a simple method for finding the electric field magnitude.",
            },
          ],
        },
      ],
    },
    {
      question: "When should I use electric potential instead of electric field?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Prefer potential when the problem asks about work, potential difference, energy or the combined effect of many charges where scalar addition is simpler. Use field when local direction, force or acceleration matters.",
            },
          ],
        },
      ],
    },
    {
      question: "Does capacitance depend on charge?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "For an ideal linear capacitor with fixed geometry and medium, capacitance depends on geometry and permittivity, not on the particular values of charge and voltage. The ratio Q/Delta V remains constant within that model.",
            },
          ],
        },
      ],
    },
    {
      question: "What stays constant when a dielectric is inserted into a capacitor?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "It depends on the connection. Charge stays constant for an isolated capacitor. Voltage stays constant when an ideal battery remains connected. Determine the connection state before comparing energy.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Electrostatics different for JEE Main and JEE Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official scopes overlap substantially, but the documents are separate and their wording is not identical. Use the current official document for each target rather than assuming a combined outline is controlling.",
            },
          ],
        },
      ],
    },
    {
      question: "How should I revise Electrostatics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Revise in this order: concept relationship, method choice, formula with condition, one contrasting example, mixed practice and error review. Formula recall without condition checking is not enough.",
            },
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Related learning path (B36) — rendered only for built destinations  */
  /* ------------------------------------------------------------------ */
  relatedChapters: [
    {
      label: "Current Electricity",
      url: "/jee/physics/current-electricity",
      relation: "next",
      description: "Potential difference, current, resistance, circuits and electrical energy.",
    },
    {
      label: "Laws of Motion",
      url: "/jee/physics/laws-of-motion",
      relation: "prerequisite",
      description: "Force diagrams and equilibrium before multi-charge problems.",
    },
    {
      label: "Work, Energy and Power",
      url: "/jee/physics/work-energy-power",
      relation: "prerequisite",
      description: "Conservative force and potential energy before electrostatic energy.",
    },
    {
      label: "Magnetism",
      url: "/jee/physics/magnetism",
      relation: "forward",
      description: "Move from charges at rest to charges in motion.",
    },
    {
      label: "Electromagnetic Induction",
      url: "/jee/physics/electromagnetic-induction",
      relation: "forward",
      description: "Connect field change, energy and circuit response.",
    },
  ],
  links: [
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official syllabus hub.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Physics subject hub.",
    },
    {
      label: "JEE Physics previous-year papers",
      url: "/jee/previous-year-papers/physics",
      relation: "related",
      description: "Official-paper practice path.",
    },
    {
      label: "JEE mock tests",
      url: "/jee/mock-tests",
      relation: "related",
      description: "Mixed application practice.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Provenance (B37)                                                    */
  /* ------------------------------------------------------------------ */
  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "ncert-physics-12-p1-ch1",
    "ncert-physics-12-p1-ch2",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. Formula and concept explanations are checked against NCERT Class 12 Physics Part I and standard SI electrostatics. No chapter weightage, question frequency or forecast is asserted.",
  contributorPolicy: [
    "Author: a physics education writer experienced in converting senior-secondary Physics into student-facing JEE learning structures.",
    "Academic reviewer: postgraduate qualification in Physics or a closely related field, plus recent JEE Main and JEE Advanced teaching or curriculum-review experience.",
    "Independent checker: a physics educator or subject editor who verifies equations, vector directions, assumptions, SI units, worked reasoning and mobile rendering separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "27 August 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Electrostatics for JEE Physics: Official Scope, Method and Formulas",
    description:
      "Official JEE Main and Advanced 2026 scope for Electrostatics, a concept map, method selector, condition-aware formula cards and an error diagnosis framework. No invented weightage.",
    ogTitle: "Electrostatics for JEE: understand the chapter as one connected system",
    ogDescription:
      "Official syllabus mapping, prerequisites, concept architecture, formula conditions and error diagnosis for JEE Electrostatics.",
  },
};
