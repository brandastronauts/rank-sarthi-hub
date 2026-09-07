import type { ChapterContent } from "@/content/types";

/**
 * Ray Optics — T06 production content (Batch, 8 September 2026).
 *
 * Data only. No chapter-specific JSX, CSS or blocks: every element below maps
 * onto the existing ChapterContent contract and the T06 recipe.
 *
 * Cannibalisation boundary:
 * - /jee/physics/optics is the umbrella model-selector page across geometrical
 *   and wave optics. This page does not repeat that selection logic; it links
 *   up to it.
 * - /jee/physics/wave-optics owns interference, diffraction and polarization.
 *   This page does not reproduce that content and links across to it.
 *
 * Evidence discipline:
 * - Weightage (B27) and trend (B33) records are deliberately absent, so those
 *   blocks do not render.
 * - No PYQ records are asserted; official repositories are linked instead.
 * - No reviewer/author id: no verified person exists yet, so B37 omits them.
 * - contentStatus stays "draft" (academic review pending) and the registry
 *   keeps /jee/physics/ray-optics on noindex until review is recorded.
 */
export const jeePhysicsRayOptics: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Ray Optics",
  slug: "ray-optics",
  url: "/jee/physics/ray-optics",
  canonicalIntent:
    "Understand the official JEE scope of geometrical (ray) optics, connect reflection, refraction, lenses, prisms and optical instruments through sign convention, choose the correct method and diagnose why a ray optics solution goes wrong.",

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
          text: "Ray optics treats light as travelling in straight-line rays and studies what happens when those rays meet a mirror, a refracting surface, a lens or a prism. For JEE this covers reflection at plane and spherical mirrors, refraction at plane and spherical surfaces, total internal reflection, thin lenses and the lens maker relation, combinations of mirrors and lenses, dispersion and deviation by a prism, and the microscope and telescope.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page is the geometrical optics chapter only. It does not repeat the model-selector view across all of optics, and it does not cover interference, diffraction or polarization, which belong to wave optics.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A ray optics answer is only as reliable as its sign convention. Fix an origin, a positive direction and a diagram before substituting into any formula.",
          bold: true,
        },
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
      label: "Optics",
      url: "/jee/physics/optics",
      relation: "up",
      description: "Umbrella model-selector page across geometrical and wave optics.",
    },
    {
      label: "JEE Physics",
      url: "/jee/physics",
      relation: "up",
      description: "Subject hub for the Physics chapter set.",
    },
    {
      label: "JEE syllabus",
      url: "/jee/syllabus",
      relation: "up",
      description: "Exam-level official scope for every Physics, Chemistry and Mathematics unit.",
    },
  ],

  syllabusMapping: {
    unit: "Optics (geometrical optics scope)",
    topics: [
      "Reflection of light and spherical mirrors, mirror formula",
      "Refraction of light at plane and spherical surfaces",
      "Total internal reflection and its applications",
      "Thin lens formula and lens maker formula",
      "Magnification and power of a lens",
      "Combination of thin lenses in contact",
      "Refraction of light through a prism, deviation and dispersion",
      "Microscope and astronomical telescope and their magnifying powers",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  /* ------------------------------------------------------------------ */
  /* Concept architecture (B35)                                          */
  /* ------------------------------------------------------------------ */
  conceptBlocks: [
    {
      id: "ray-model",
      title: "1. Start with the ray model and its limits",
      keyIdea:
        "Ray optics treats light as straight lines that bend only at reflecting or refracting boundaries; it does not explain interference, diffraction or polarization.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Rectilinear propagation lets a ray be followed as a straight line until it meets a boundary. At that boundary the ray reflects, refracts, or both. This page never invokes wave phenomena; interference, diffraction and polarization are covered on the Wave Optics page.",
            },
          ],
        },
      ],
    },
    {
      id: "sign-convention",
      title: "2. Fix one sign convention before any calculation",
      keyIdea:
        "Distances are measured from the pole or optical centre, with a single consistent positive direction, before mirror, refraction or lens formulas are used.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The Cartesian sign convention measures distances from the pole of a mirror or the optical centre of a lens, along the principal axis, with distances in the direction of incident light usually taken as positive. Object distance, image distance, radius of curvature and focal length must all be entered with signs consistent with the same convention.",
            },
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "A formula without a fixed sign convention is not usable. Draw the diagram, mark the pole or optical centre, and decide the positive direction first.",
            },
          ],
        },
      ],
    },
    {
      id: "mirrors",
      title: "3. Reflection at plane and spherical mirrors",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The laws of reflection give equal angles of incidence and reflection in the plane of incidence. A plane mirror forms a virtual, laterally inverted image at the same distance behind the mirror as the object is in front. Spherical mirrors use the mirror formula relating object distance, image distance and focal length, with focal length equal to half the radius of curvature.",
            },
          ],
        },
      ],
    },
    {
      id: "refraction-surfaces",
      title: "4. Refraction at plane and spherical surfaces",
      keyIdea: "Refraction bends a ray according to the ratio of refractive indices; a single spherical-surface relation extends this to curved boundaries.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Refraction at a plane surface follows Snell's law. Refraction at a single spherical surface connects object distance, image distance, radius of curvature and the refractive indices of the two media on either side of that surface, and it is the building block for the lens maker relation.",
            },
          ],
        },
      ],
    },
    {
      id: "tir",
      title: "5. Total internal reflection needs its condition checked",
      keyIdea:
        "Total internal reflection occurs only when light travels from a denser to a rarer medium at an angle beyond the critical angle.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Total internal reflection requires light to travel from an optically denser medium toward a rarer medium, with the angle of incidence greater than the critical angle for that pair of media. Both conditions must hold; checking only one is a common source of error.",
            },
          ],
        },
      ],
    },
    {
      id: "thin-lenses",
      title: "6. Thin lenses and the lens maker relation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A thin lens is modelled with two refracting surfaces treated together. The thin lens formula relates object distance, image distance and focal length. The lens maker formula gives focal length from the refractive index of the lens material relative to its surroundings and the radii of curvature of its two surfaces, under the thin-lens approximation.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              text: "Magnification compares image size to object size, and power of a lens is the reciprocal of focal length in metres, used mainly for combinations.",
            },
          ],
        },
      ],
    },
    {
      id: "combinations",
      title: "7. Combine mirrors and lenses in stages",
      keyIdea:
        "Treat each surface or element in sequence: the image from one becomes the object for the next.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "For thin lenses in contact, powers add directly. For a general combination of mirrors and lenses, work through the elements one at a time in the order light meets them, using the image formed by one element as the object for the next, with signs re-checked at each stage.",
            },
          ],
        },
      ],
    },
    {
      id: "prism",
      title: "8. Prism: deviation and dispersion",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A prism deviates light through refraction at two surfaces. The deviation depends on the angle of incidence, the prism angle and the refractive index, and it passes through a minimum for one particular angle of incidence. Because refractive index varies with wavelength, different colours deviate by different amounts, producing dispersion.",
            },
          ],
        },
      ],
    },
    {
      id: "instruments",
      title: "9. Optical instruments as designed combinations",
      keyIdea:
        "A microscope and a telescope both combine an objective and an eyepiece, but they solve different problems: magnifying a nearby small object versus a distant large one.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A compound microscope uses an objective of short focal length to form an enlarged real image close to the eyepiece, which acts as a simple magnifier for the final image. An astronomical telescope uses an objective of large focal length and an eyepiece of small focal length to enlarge the angle subtended by a distant object. Each instrument's magnifying power follows from applying the mirror, refraction and lens relations in sequence to its own optical layout.",
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
          "How light rays reflect and refract at plane and spherical boundaries, how lenses and prisms redirect and disperse light, and how mirrors, lenses and optical instruments are analysed with a consistent sign convention.",
        ],
        [
          "How is this different from /jee/physics/optics and /jee/physics/wave-optics?",
          "The Optics hub selects between geometrical and wave models for a given question. This page covers only geometrical (ray) optics. Interference, diffraction and polarization are covered on the Wave Optics page, not here.",
        ],
        [
          "What is the central method choice?",
          "Fix a sign convention and diagram first, then apply the mirror formula, the spherical-surface refraction relation, the thin lens formula or the lens maker formula, and work multi-element combinations one surface or element at a time.",
        ],
        [
          "Where do most mistakes begin?",
          "Mixing sign conventions between steps, applying total internal reflection without checking both conditions, and treating a lens combination or optical instrument as one formula instead of a sequence of stages.",
        ],
        [
          "What should come before Ray Optics?",
          "Basic geometry and trigonometry, algebra, and the idea of a wavefront and a ray from earlier light topics.",
        ],
        [
          "What comes after it?",
          "Wave Optics extends the same light source into interference, diffraction and polarization, and Optics remains the page for choosing between the two models on a mixed question.",
        ],
      ],
      note: "The official JEE documents define content scope. They do not publish chapter weightage, so none is asserted here.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Official JEE syllabus mapping for Ray Optics",
      intro:
        "Verified against the current JEE Main 2026 syllabus and JEE Advanced 2026 syllabus on 8 September 2026. This is a wording and scope mapping, not a claim about question difficulty or frequency.",
      columns: ["Concept group", "JEE Main 2026", "JEE Advanced 2026", "Preparation note"],
      rows: [
        [
          "Reflection and mirrors",
          "Reflection of light, spherical mirrors and the mirror formula are explicitly listed under the Optics unit.",
          "Reflection at plane and spherical surfaces is explicitly listed under the Optics section.",
          "Fix a sign convention before combining mirror formula results with anything else.",
        ],
        [
          "Refraction at plane and spherical surfaces",
          "Refraction of light at plane and spherical surfaces is explicitly listed.",
          "Refraction at plane and spherical surfaces is explicitly listed.",
          "Treat single-surface refraction as the building block behind the lens maker relation.",
        ],
        [
          "Total internal reflection",
          "Total internal reflection and its applications are explicitly listed.",
          "Total internal reflection is explicitly listed.",
          "Check both the denser-to-rarer condition and the critical-angle condition together.",
        ],
        [
          "Lenses and combinations",
          "Thin lens formula, lens maker formula, magnification, power of a lens and combination of thin lenses in contact are explicitly listed.",
          "Thin lenses and combinations of mirrors and thin lenses are explicitly listed.",
          "Main and Advanced scope should not be assumed identical from a combined coaching outline. Keep both official documents available.",
        ],
        [
          "Prism",
          "Refraction of light through a prism is explicitly listed.",
          "Deviation and dispersion of light by a prism are explicitly listed.",
          "Learn deviation as a function of incidence angle before treating minimum deviation as a shortcut formula.",
        ],
        [
          "Optical instruments",
          "Microscope and astronomical telescope (reflecting and refracting) and their magnifying powers are explicitly listed.",
          "Optical instruments are not separately named in the cited Optics lines; instrument-style reasoning follows from the same mirror and lens relations.",
          "Build instrument magnifying power from the underlying mirror and lens formulas rather than memorising it as a separate topic.",
        ],
      ],
      note: "Sources: JEE Main 2026 syllabus and JEE (Advanced) 2026 syllabus, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites: what you should know before Ray Optics",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Geometry and trigonometry",
          "Work with angles, similar triangles and small-angle approximations.",
          "Revise angle relations, similar triangles and the small-angle approximation.",
        ],
        [
          "Algebra",
          "Rearrange the mirror, refraction and lens relations for an unknown quantity.",
          "Practise solving linear relations for a single unknown distance or index.",
        ],
        [
          "Wavefronts and rays",
          "Describe a ray as the direction of energy travel perpendicular to a wavefront.",
          "Revise the ray picture of light before adding curved boundaries.",
        ],
        [
          "Units and dimensions",
          "Check that a distance, a refractive index, or a power in dioptres is used consistently.",
          "Revise SI units for length and the dimensionless nature of refractive index.",
        ],
      ],
      note: "This is a readiness check, not a weightage or scoring-priority list.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Method selector: choose the method before calculating",
      intro: "Select the representation and formula family before substituting numbers.",
      columns: ["Information given", "First method", "Validation"],
      rows: [
        ["Plane mirror", "Image at equal distance behind, laterally inverted", "Check the virtual, same-size image property"],
        ["Spherical mirror, object and focal length known", "Mirror formula with fixed sign convention", "Recheck sign of object, image and focal length"],
        ["Refraction at a single spherical surface", "Spherical-surface refraction relation", "Confirm which side each refractive index applies to"],
        ["Ray moving from denser to rarer medium at a large angle", "Check critical angle condition for total internal reflection", "Confirm both denser-to-rarer and angle conditions hold"],
        ["Thin lens with known object distance", "Thin lens formula", "Cross-check with lens maker formula if the lens geometry is given"],
        ["Multiple lenses or mirrors in sequence", "Stage-by-stage image tracing", "Use each image as the next object with signs re-applied"],
        ["Light passing through a prism", "Deviation relation, minimum deviation only at that specific angle", "Confirm whether minimum deviation is actually stated or required"],
        ["Microscope or telescope magnifying power", "Combine objective and eyepiece relations in the instrument's own layout", "Check whether the image is at the near point or at infinity, as stated"],
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
      heading: "Readiness check before starting Ray Optics",
      concepts: [
        {
          id: "readiness-body",
          title: "Prepare geometry, algebra and the ray picture of light",
          body: [
            {
              type: "paragraph",
              children: [{ text: "You should be able to:" }],
            },
            {
              type: "list",
              items: [
                [{ text: "use angle relations, similar triangles and small-angle approximations;" }],
                [{ text: "rearrange a formula for a single unknown distance or refractive index;" }],
                [{ text: "describe a ray as the direction of travel perpendicular to a wavefront;" }],
                [{ text: "check units for length, refractive index and power in dioptres." }],
              ],
            },
            {
              type: "note",
              tone: "info",
              children: [
                {
                  text: "This page assumes the ray model of light; it does not build wavefront-based interference or diffraction reasoning, which belongs to Wave Optics.",
                  href: "/jee/physics/wave-optics",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "not-covered-here",
      slot: "scope",
      heading: "What this page deliberately does not cover",
      concepts: [
        {
          id: "not-covered-body",
          title: "Scope boundary against Optics and Wave Optics",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "This page is limited to geometrical (ray) optics: reflection, refraction, total internal reflection, lenses, prisms, and instruments built from them.",
                },
              ],
            },
            {
              type: "list",
              items: [
                [
                  { text: "Choosing between the ray model and the wave model for a given question belongs on " },
                  { text: "Optics", href: "/jee/physics/optics" },
                  { text: ", not here." },
                ],
                [
                  {
                    text: "Interference, Young's double-slit fringe width, diffraction and polarization belong on ",
                  },
                  { text: "Wave Optics", href: "/jee/physics/wave-optics" },
                  { text: ", not here." },
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pi-diagnosis",
      slot: "diagnosis",
      heading: "Diagnose your Ray Optics weakness with evidence",
      concepts: [
        {
          id: "pi-diagnosis-body",
          title: "Use the smallest supported label",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  text: "One wrong answer does not always reveal the cause. Match the evidence in the work to a Knowledge Gap, a Recall Gap, an Execution Error, a Decision / Selection Error, or Needs Review when the evidence is insufficient.",
                },
              ],
            },
            {
              type: "list",
              items: [
                [
                  {
                    text: "Knowledge Gap: cannot explain why total internal reflection needs a denser-to-rarer path, or confuses real and virtual images.",
                  },
                ],
                [
                  {
                    text: "Recall Gap: understands the model but cannot retrieve the lens maker formula or the sign convention without prompting.",
                  },
                ],
                [
                  {
                    text: "Execution Error: uses the right formula but drops a sign, mislabels object or image distance, or makes an algebra slip.",
                  },
                ],
                [
                  {
                    text: "Decision / Selection Error: applies minimum-deviation shortcuts when the angle of incidence is not the minimum-deviation angle, or skips a stage in a multi-element combination.",
                  },
                ],
                [
                  { text: "Needs Review: the response is blank, partial or inconsistent, so no specific label is supported yet." },
                ],
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
      id: "laws-of-reflection",
      expression: "angle of incidence = angle of reflection, both measured from the normal, in the plane of incidence",
      meaning: "The two laws of reflection for any reflecting surface.",
      variables: [
        { symbol: "angle of incidence", meaning: "angle between incident ray and normal", unit: "degree" },
        { symbol: "angle of reflection", meaning: "angle between reflected ray and normal", unit: "degree" },
      ],
      useWhen: "Any reflecting boundary, plane or curved, at the point of incidence.",
      commonTrap: "Measuring the angle from the surface instead of from the normal.",
      accessibleText: "The angle of incidence equals the angle of reflection, both measured from the normal, and the incident ray, reflected ray and normal lie in one plane.",
    },
    {
      id: "mirror-formula",
      expression: "1/v + 1/u = 1/f",
      meaning: "Relates object distance, image distance and focal length for a spherical mirror.",
      variables: [
        { symbol: "u", meaning: "object distance from the pole, with sign convention", unit: "m" },
        { symbol: "v", meaning: "image distance from the pole, with sign convention", unit: "m" },
        { symbol: "f", meaning: "focal length, with sign convention", unit: "m" },
      ],
      useWhen: "A spherical mirror problem after a sign convention has been fixed and a ray diagram drawn.",
      commonTrap: "Mixing signs from two different conventions within the same solution.",
      accessibleText: "One over image distance plus one over object distance equals one over focal length, all measured with a fixed sign convention.",
    },
    {
      id: "mirror-focal-length",
      expression: "f = R / 2",
      meaning: "Relates the focal length of a spherical mirror to its radius of curvature.",
      variables: [
        { symbol: "f", meaning: "focal length", unit: "m" },
        { symbol: "R", meaning: "radius of curvature", unit: "m" },
      ],
      useWhen: "A spherical mirror problem where the radius of curvature is given instead of the focal length.",
      commonTrap: "Applying this relation to a lens instead of a mirror.",
      accessibleText: "Focal length equals half the radius of curvature.",
    },
    {
      id: "mirror-magnification",
      expression: "m = -v/u",
      meaning: "Magnification produced by a spherical mirror.",
      variables: [
        { symbol: "m", meaning: "magnification, ratio of image height to object height with sign", unit: "no unit" },
      ],
      useWhen: "Comparing image size and orientation to the object for a mirror.",
      commonTrap: "Dropping the negative sign and losing the inversion information.",
      accessibleText: "Magnification equals minus image distance divided by object distance.",
    },
    {
      id: "snell-law",
      expression: "n1 sin(theta1) = n2 sin(theta2)",
      meaning: "Refraction of a ray crossing a plane boundary between two media.",
      variables: [
        { symbol: "n1, n2", meaning: "refractive indices of the two media", unit: "no unit" },
        { symbol: "theta1, theta2", meaning: "angles of incidence and refraction from the normal", unit: "degree" },
      ],
      useWhen: "A ray crosses a plane refracting boundary.",
      commonTrap: "Swapping which medium's index multiplies which angle.",
      accessibleText: "The refractive index of the first medium times the sine of the angle of incidence equals the refractive index of the second medium times the sine of the angle of refraction.",
    },
    {
      id: "spherical-surface-refraction",
      expression: "n2/v - n1/u = (n2 - n1) / R",
      meaning: "Refraction at a single spherical surface separating two media.",
      variables: [
        { symbol: "n1", meaning: "refractive index of the medium containing the incident ray", unit: "no unit" },
        { symbol: "n2", meaning: "refractive index of the medium containing the refracted ray", unit: "no unit" },
        { symbol: "u", meaning: "object distance from the surface, with sign convention", unit: "m" },
        { symbol: "v", meaning: "image distance from the surface, with sign convention", unit: "m" },
        { symbol: "R", meaning: "radius of curvature of the surface, with sign convention", unit: "m" },
      ],
      useWhen: "A single curved refracting surface, as the building block behind the lens maker relation.",
      commonTrap: "Using the wrong index on the wrong side of the equation.",
      accessibleText: "The second index over image distance minus the first index over object distance equals the difference of the two indices over the radius of curvature.",
    },
    {
      id: "critical-angle-tir",
      expression: "sin(theta_c) = n2/n1, with n1 > n2; total internal reflection when theta1 > theta_c",
      meaning: "Condition for total internal reflection at a boundary from a denser to a rarer medium.",
      variables: [
        { symbol: "theta_c", meaning: "critical angle", unit: "degree" },
        { symbol: "n1", meaning: "refractive index of the denser medium", unit: "no unit" },
        { symbol: "n2", meaning: "refractive index of the rarer medium", unit: "no unit" },
      ],
      useWhen: "Light travels from a denser medium toward a rarer medium and the angle of incidence must be checked against the critical angle.",
      commonTrap: "Checking the angle condition without also checking that the ray goes from denser to rarer medium.",
      accessibleText: "The sine of the critical angle equals the ratio of the rarer to the denser refractive index; total internal reflection occurs only when the angle of incidence exceeds this critical angle, travelling from denser to rarer medium.",
    },
    {
      id: "thin-lens-formula",
      expression: "1/v - 1/u = 1/f",
      meaning: "Relates object distance, image distance and focal length for a thin lens.",
      variables: [
        { symbol: "u", meaning: "object distance from the optical centre, with sign convention", unit: "m" },
        { symbol: "v", meaning: "image distance from the optical centre, with sign convention", unit: "m" },
        { symbol: "f", meaning: "focal length, with sign convention", unit: "m" },
      ],
      useWhen: "A thin lens problem after a sign convention has been fixed.",
      commonTrap: "Using the mirror-formula sign pattern for a lens or vice versa.",
      accessibleText: "One over image distance minus one over object distance equals one over focal length, all measured with a fixed sign convention.",
    },
    {
      id: "lens-maker-formula",
      expression: "1/f = (n_lens/n_medium - 1) (1/R1 - 1/R2)",
      meaning: "Gives the focal length of a thin lens from its material, surrounding medium and surface curvatures.",
      variables: [
        { symbol: "n_lens", meaning: "refractive index of the lens material", unit: "no unit" },
        { symbol: "n_medium", meaning: "refractive index of the surrounding medium", unit: "no unit" },
        { symbol: "R1, R2", meaning: "radii of curvature of the first and second lens surfaces, with sign convention", unit: "m" },
      ],
      useWhen: "The lens geometry and material indices are given, under the thin-lens approximation.",
      commonTrap: "Assigning R1 and R2 signs inconsistently with the direction of light travel.",
      accessibleText: "The reciprocal of focal length equals the ratio of lens index to medium index minus one, multiplied by the difference of the reciprocals of the two radii of curvature.",
    },
    {
      id: "lens-magnification-power",
      expression: "m = v/u ;  P = 1/f (f in metres)",
      meaning: "Magnification of a thin lens and the definition of lens power.",
      variables: [
        { symbol: "m", meaning: "magnification", unit: "no unit" },
        { symbol: "P", meaning: "power of a lens", unit: "dioptre" },
      ],
      useWhen: "Comparing image size to object size for a lens, or combining lens powers.",
      commonTrap: "Confusing the sign convention for lens magnification with the mirror magnification convention.",
      accessibleText: "Lens magnification equals image distance divided by object distance; power equals one over focal length in metres, measured in dioptres.",
    },
    {
      id: "lens-combination",
      expression: "1/F = 1/f1 + 1/f2 + ...  ;  P = P1 + P2 + ...",
      meaning: "Effective focal length and power of thin lenses placed in contact.",
      variables: [
        { symbol: "F", meaning: "effective focal length of the combination", unit: "m" },
        { symbol: "f1, f2", meaning: "focal lengths of individual lenses", unit: "m" },
      ],
      useWhen: "Multiple thin lenses are in contact along a common axis.",
      commonTrap: "Applying this direct sum to lenses that are separated by a finite distance instead of in contact.",
      accessibleText: "The reciprocal of the combined focal length equals the sum of the reciprocals of the individual focal lengths; combined power equals the sum of individual powers.",
    },
    {
      id: "prism-deviation",
      expression: "delta = (theta_i + theta_e) - A ;  at minimum deviation, n = sin((A + delta_m)/2) / sin(A/2)",
      meaning: "Angle of deviation produced by a prism, and the refractive index formula at minimum deviation.",
      variables: [
        { symbol: "delta", meaning: "angle of deviation", unit: "degree" },
        { symbol: "theta_i", meaning: "angle of incidence", unit: "degree" },
        { symbol: "theta_e", meaning: "angle of emergence", unit: "degree" },
        { symbol: "A", meaning: "prism (refracting) angle", unit: "degree" },
        { symbol: "delta_m", meaning: "minimum deviation, occurring at one specific angle of incidence", unit: "degree" },
      ],
      useWhen: "The general deviation relation applies to any angle of incidence; the minimum-deviation index formula applies only at that specific minimum-deviation condition.",
      commonTrap: "Using the minimum-deviation index formula when the angle of incidence is not actually the minimum-deviation angle.",
      accessibleText: "Deviation equals the sum of the incidence and emergence angles minus the prism angle; at minimum deviation, refractive index equals the sine of half the sum of prism angle and minimum deviation, divided by the sine of half the prism angle.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Worked reasoning (B35 via workedExamples)                           */
  /* ------------------------------------------------------------------ */
  workedExamples: [
    {
      id: "worked-mirror-sign",
      prompt:
        "Worked reasoning 1: an object stands in front of a concave mirror beyond its centre of curvature. Using a fixed sign convention, is the image real or virtual, and how do you check it?",
      answer:
        "The mirror formula with a consistently signed object distance and focal length gives a positive image distance on the same side as the object, corresponding to a real, inverted image.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Draw the mirror, mark the pole, and fix a single positive direction." }],
            [{ text: "Enter the object distance and focal length with signs consistent with that convention." }],
            [{ text: "Solve 1/v + 1/u = 1/f for v." }],
            [{ text: "Read the sign of v against the convention to decide whether the image is real or virtual." }],
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "What this tests: whether the sign convention was fixed before substitution, not whether the mirror formula itself was recalled correctly.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-tir-fibre",
      prompt:
        "Worked reasoning 2: light inside a glass core meets the core-cladding boundary of an optical fibre. What two conditions must be checked before claiming total internal reflection?",
      answer:
        "Light must travel from the denser core toward the rarer cladding, and the angle of incidence at that boundary must exceed the critical angle for that pair of media.",
      steps: [
        {
          type: "list",
          ordered: true,
          items: [
            [{ text: "Identify which medium is denser and which is rarer at the boundary." }],
            [{ text: "Confirm the ray is travelling from the denser medium toward the rarer medium." }],
            [{ text: "Compute the critical angle from sin(theta_c) = n2/n1." }],
            [{ text: "Compare the actual angle of incidence with theta_c before concluding total internal reflection occurs." }],
          ],
        },
        {
          type: "note",
          tone: "caution",
          children: [
            {
              text: "What this tests: checking only the angle condition while skipping the denser-to-rarer direction check is a Decision / Selection Error.",
            },
          ],
        },
      ],
    },
    {
      id: "worked-lens-combination",
      prompt:
        "Worked reasoning 3: two thin lenses are placed in contact. How do you find the combination's effective focal length without re-deriving each surface separately?",
      answer:
        "Add the individual lens powers, or equivalently add the reciprocals of the individual focal lengths, to get the reciprocal of the effective focal length.",
      steps: [
        {
          type: "paragraph",
          children: [
            {
              text: "For lenses genuinely in contact, 1/F = 1/f1 + 1/f2 follows directly from combining powers. If the lenses are separated by a finite distance, this direct sum does not apply and each stage must be traced with the image from the first lens used as the object for the second.",
            },
          ],
        },
        {
          type: "note",
          tone: "info",
          children: [
            {
              text: "What this tests: recognising when the in-contact shortcut is valid versus when a stage-by-stage trace is required is a Decision / Selection check, separate from the arithmetic itself.",
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
      id: "mixed-sign-convention",
      mistake: "Mixing two different sign conventions within one solution",
      why: [
        { type: "paragraph", children: [{ text: "Every distance and radius must be measured against one fixed positive direction." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Draw the diagram and state the convention explicitly before substituting any value." }] },
      ],
      errorType: "execution-error",
    },
    {
      id: "tir-single-condition",
      mistake: "Claiming total internal reflection from the angle condition alone",
      why: [
        { type: "paragraph", children: [{ text: "Total internal reflection also requires travel from a denser medium toward a rarer medium." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check both the direction of travel and the critical-angle comparison." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "mirror-lens-formula-swap",
      mistake: "Using the mirror formula's sign pattern in a lens problem or vice versa",
      why: [
        { type: "paragraph", children: [{ text: "The two formulas differ by a sign in how object and image distances combine." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Identify whether the element is a mirror or a lens before selecting the formula." }] },
      ],
      errorType: "recall-gap",
    },
    {
      id: "minimum-deviation-misuse",
      mistake: "Using the minimum-deviation index formula at an arbitrary angle of incidence",
      why: [
        { type: "paragraph", children: [{ text: "That formula holds only at the specific angle of incidence that produces minimum deviation." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Confirm minimum deviation is actually stated or established before using the shortcut." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "lens-contact-assumption",
      mistake: "Adding lens powers directly for lenses that are not in contact",
      why: [
        { type: "paragraph", children: [{ text: "The direct power-addition relation assumes negligible separation between the lenses." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "For separated lenses, trace the image through each lens in sequence instead." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "real-virtual-confusion",
      mistake: "Confusing a real image with a virtual image from the diagram alone",
      why: [
        { type: "paragraph", children: [{ text: "Real and virtual images are defined by whether light rays actually converge or only appear to diverge from a point." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Check the sign of the computed image distance against the fixed convention rather than guessing from a rough sketch." }] },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "prism-vs-mirror-lens-topic-mix",
      mistake: "Bringing interference or diffraction reasoning into a ray optics prism or lens question",
      why: [
        { type: "paragraph", children: [{ text: "Geometrical optics questions on this page's scope are solved with rays, not with wave superposition." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Keep ray-based reasoning here, and use the Wave Optics page only when the question explicitly involves interference, diffraction or polarization." }] },
      ],
      errorType: "decision-error",
    },
    {
      id: "instrument-formula-without-layout",
      mistake: "Quoting a microscope or telescope magnifying power formula without checking the stated image condition",
      why: [
        { type: "paragraph", children: [{ text: "Magnifying power expressions differ depending on whether the final image is formed at the near point or at infinity." }] },
      ],
      fix: [
        { type: "paragraph", children: [{ text: "Re-derive the instrument's magnifying power from its own layout and the stated final-image condition." }] },
      ],
      errorType: "recall-gap",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* FAQs (B22)                                                          */
  /* ------------------------------------------------------------------ */
  faqs: [
    {
      question: "What is Ray Optics in JEE Physics?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Ray optics, also called geometrical optics, is the study of light as straight-line rays that reflect and refract at boundaries. The current official JEE scope includes reflection and spherical mirrors, refraction at plane and spherical surfaces, total internal reflection, thin lenses and the lens maker formula, combinations of mirrors and lenses, prism deviation and dispersion, and the microscope and telescope.",
            },
          ],
        },
      ],
    },
    {
      question: "How is Ray Optics different from the Optics page and the Wave Optics page?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Optics is the umbrella page that helps choose between the ray model and the wave model for a given question. Ray Optics, this page, covers only reflection, refraction, lenses, prisms and instruments. Wave Optics separately covers interference, diffraction and polarization, which are not repeated here.",
            },
          ],
        },
      ],
    },
    {
      question: "What is the correct sign convention for mirror and lens formulas?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The commonly used Cartesian sign convention measures all distances from the pole of a mirror or optical centre of a lens along the principal axis, with a single fixed positive direction. Every object distance, image distance, radius of curvature and focal length in one calculation must use the same convention.",
            },
          ],
        },
      ],
    },
    {
      question: "What conditions are required for total internal reflection?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Two conditions must both hold: light must travel from an optically denser medium toward a rarer medium, and the angle of incidence at the boundary must exceed the critical angle for that pair of media.",
            },
          ],
        },
      ],
    },
    {
      question: "How is the lens maker formula different from the thin lens formula?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The thin lens formula relates object distance, image distance and focal length for a given lens. The lens maker formula instead computes that focal length from the lens material's refractive index relative to its surroundings and the radii of curvature of its two surfaces.",
            },
          ],
        },
      ],
    },
    {
      question: "When does minimum deviation occur in a prism?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Minimum deviation occurs at one specific angle of incidence for a given prism. The refractive index formula that uses prism angle and minimum deviation applies only at that specific condition, not at an arbitrary angle of incidence.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Ray Optics scope different for JEE Main and JEE Advanced?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The official scopes overlap substantially on reflection, refraction, total internal reflection, lenses and prisms. JEE Main additionally names the microscope and astronomical telescope explicitly, while the cited JEE Advanced Optics lines do not separately name optical instruments. Use the current official document for each target rather than assuming a combined outline is controlling.",
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
      label: "Optics",
      url: "/jee/physics/optics",
      relation: "up",
      description: "Umbrella model-selector page across geometrical and wave optics.",
    },
    {
      label: "Wave Optics",
      url: "/jee/physics/wave-optics",
      relation: "forward",
      description: "Interference, diffraction and polarization, not covered on this page.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "related",
      description: "The wave nature of light that underlies both optics pages.",
    },
    {
      label: "Dual Nature Of Matter",
      url: "/jee/physics/dual-nature-of-matter",
      relation: "forward",
      description: "Light behaviour beyond the ray and wave models, in the particle-nature context.",
    },
    {
      label: "Atoms And Nuclei",
      url: "/jee/physics/atoms-and-nuclei",
      relation: "related",
      description: "Later chapter that also uses spectral and wavelength reasoning.",
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
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],
  sourceNote:
    "Evidence boundary: the syllabus mapping is tied to the official 2026 JEE Main and JEE Advanced documents. No chapter weightage, question frequency or forecast is asserted. This page is scoped to geometrical optics only; interference, diffraction and polarization content lives on the Wave Optics page.",
  contributorPolicy: [
    "Author: a physics education writer experienced in converting senior-secondary Physics into student-facing JEE learning structures.",
    "Academic reviewer: postgraduate qualification in Physics or a closely related field, plus recent JEE Main and JEE Advanced teaching or curriculum-review experience.",
    "Independent checker: a physics educator or subject editor who verifies sign conventions, formula conditions, ray diagrams, SI units and mobile rendering separately from the author.",
    "No contributor is named on this page until their identity and qualification are verified, so no author, reviewer or rating is displayed yet.",
  ],
  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: ["weightage-suppressed", "trend-suppressed", "no-verified-reviewer"],

  meta: {
    title: "Ray Optics for JEE Physics: Official Scope, Method and Formulas",
    description:
      "Official JEE Main and Advanced 2026 scope for Ray Optics: reflection, refraction, total internal reflection, lenses, prisms and optical instruments, with sign-convention formulas and error diagnosis. No invented weightage.",
    ogTitle: "Ray Optics for JEE: reflection, refraction, lenses and prisms as one system",
    ogDescription:
      "Official syllabus mapping, sign-convention formula cards, worked reasoning and error diagnosis for JEE Ray Optics, separate from Wave Optics.",
  },
};
