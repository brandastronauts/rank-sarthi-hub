import type { ChapterContent } from "@/content/types";

/**
 * Communication Systems - scope-controlled content.
 *
 * Verification note: Communication Systems does not appear as a listed unit
 * in the JEE Main syllabus document currently published by NTA
 * (https://jeemain.nta.nic.in/document/syllabus-2026/) or in the JEE
 * (Advanced) 2026 syllabus PDF, which carries forward the JEE Advanced 2025
 * physics unit list without a communication systems unit. Several
 * third-party coaching and news sites describe Communication Systems as a
 * "deleted" or "reduced" topic for recent JEE Main cycles, but this page
 * does not rely on those secondary claims for its scope decision; it relies
 * on the absence of the topic from the official documents checked. Because
 * a direct official notification explicitly naming "Communication Systems"
 * as removed could not be located in this pass, the removal history itself
 * carries a verification flag (see sourceNote).
 *
 * Given this, the page is written as a non-examinable, contextual/historical
 * learning resource. No weightage, PYQ evidence, trend or exam-relevance
 * claims are made anywhere on the page.
 */
export const jeePhysicsCommunicationSystems: ChapterContent = {
  exam: "JEE",
  platform: "jee",
  subject: "Physics",
  subjectSlug: "physics",
  chapter: "Communication Systems",
  slug: "communication-systems",
  url: "/jee/physics/communication-systems",
  canonicalIntent:
    "Explain, for background and conceptual learning only, how signals are transmitted using elements of a communication system, propagation modes and amplitude modulation, while stating clearly that this topic is not confirmed as part of the current official JEE Main or JEE Advanced syllabus.",

  heroChips: [
    "Not found in the current official JEE Main or JEE Advanced syllabus documents checked",
    "Written here as background/historical learning only, not exam preparation",
    "No weightage, PYQ or trend claims are made on this page",
  ],

  directAnswer: [
    {
      type: "note",
      tone: "caution",
      children: [
        {
          text: "Communication Systems could not be found as a listed unit in the JEE Main syllabus document currently published on the official NTA JEE Main site, or in the JEE (Advanced) 2026 syllabus document, which is stated to carry forward the JEE (Advanced) 2025 physics scope. Treat this chapter as non-examinable for the current cycle unless you personally confirm otherwise from the official syllabus PDF for your own exam year.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "This page therefore does not present exam relevance, weightage, question-paper evidence or preparation priority for Communication Systems. It exists only as a plain conceptual explainer, in case a candidate wants background understanding of the topic or is checking whether it still appears in their own official syllabus document for a given year.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "A communication system carries a message from a sender to a receiver over a channel. It uses a transmitter to prepare the signal, a medium or channel to carry it, and a receiver to recover the original message, allowing for some noise and distortion along the way.",
        },
      ],
    },
    {
      type: "note",
      tone: "info",
      children: [
        {
          text: "Before relying on this page for exam preparation, check the official syllabus PDF for your specific JEE Main session and your specific JEE Advanced year at the syllabus link below.",
          href: "/jee/syllabus",
        },
      ],
    },
  ],

  prerequisites: [
    {
      label: "Alternating Current",
      url: "/jee/physics/alternating-current",
      relation: "prerequisite",
      description: "Sinusoidal signals, frequency and amplitude are used again when describing modulation.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Wave frequency, wavelength and superposition underlie signal and carrier wave behaviour.",
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
      description: "Check the current official scope directly before treating any chapter as examinable.",
    },
  ],

  syllabusMapping: {
    unit: "Communication Systems (status not confirmed in current official documents)",
    topics: [
      "Elements of a communication system",
      "Bandwidth of signals and transmission media",
      "Propagation of electromagnetic waves in the atmosphere: ground wave, sky wave, space wave",
      "Need for modulation",
      "Amplitude modulation",
      "Modulation index",
      "Sideband and power relations in amplitude modulation",
      "Basic amplitude demodulation",
    ],
    syllabusUrl: "/jee/syllabus",
  },

  conceptBlocks: [
    {
      id: "elements-of-system",
      title: "1. Elements of a communication system",
      keyIdea:
        "A message signal is converted by a transmitter into a form suited to a channel, then recovered by a receiver at the other end.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A basic communication system has a transmitter, a channel and a receiver. The transmitter processes the original message signal into a signal suited to the channel. The channel carries the signal, and unavoidably adds some noise. The receiver extracts the message signal from what actually arrives.",
            },
          ],
        },
      ],
    },
    {
      id: "bandwidth",
      title: "2. Bandwidth of signals and transmission media",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Bandwidth is the range of frequencies a signal occupies, or the range of frequencies a transmission medium can carry without excessive loss or distortion. A medium can only carry a signal faithfully if its own bandwidth covers the frequency range the signal needs.",
            },
          ],
        },
      ],
    },
    {
      id: "propagation-modes",
      title: "3. Propagation modes: ground, sky and space wave",
      keyIdea: "Different frequency ranges travel through the atmosphere by different dominant paths.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A ground wave travels along the surface of the earth and is used at lower frequencies, but it loses energy over distance as it follows the curved surface. A sky wave reaches the receiver after reflecting from an ionised layer of the upper atmosphere, which works only for a range of frequencies the ionised layer can reflect. A space wave travels in a nearly straight line between transmitter and receiver, so its range is limited by the curvature of the earth and by the heights of the transmitting and receiving antennas.",
            },
          ],
        },
      ],
    },
    {
      id: "need-for-modulation",
      title: "4. Why modulation is needed",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "A low-frequency message signal, such as an audio signal, is not sent directly over long distances because it needs an impractically long antenna and cannot be separated easily from other similar signals. Modulation superimposes the message signal onto a higher-frequency carrier wave, which allows practical antenna sizes and lets multiple signals share the same medium on different carrier frequencies.",
            },
          ],
        },
      ],
    },
    {
      id: "amplitude-modulation",
      title: "5. Amplitude modulation",
      keyIdea: "In amplitude modulation, the carrier's amplitude is varied in step with the message signal, while its frequency stays fixed.",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "In amplitude modulation, the instantaneous amplitude of a fixed-frequency carrier wave is varied in proportion to the instantaneous value of the message signal. The carrier frequency itself is not changed. This produces a modulated wave whose envelope traces the shape of the message signal, provided the modulation index stays within a valid range.",
            },
          ],
        },
      ],
    },
    {
      id: "modulation-index",
      title: "6. Modulation index",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "The modulation index compares the amplitude of the message signal to the amplitude of the unmodulated carrier. When the message amplitude does not exceed the carrier amplitude, the modulation index stays at or below one and the envelope of the modulated wave follows the message without distortion. When the message amplitude exceeds the carrier amplitude, the modulation index exceeds one and the demodulated output becomes distorted.",
            },
          ],
        },
      ],
    },
    {
      id: "sidebands-and-power",
      title: "7. Sidebands and power relations",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "An amplitude modulated wave built from a single-tone message signal contains the carrier frequency together with two additional frequencies, one just above and one just below the carrier, called sidebands. The transmitted power is distributed between the carrier and the two sidebands, and this split depends on the modulation index.",
            },
          ],
        },
      ],
    },
    {
      id: "demodulation",
      title: "8. Basic demodulation",
      body: [
        {
          type: "paragraph",
          children: [
            {
              text: "Demodulation recovers the original message signal from the received modulated wave. For amplitude modulation with a modulation index at or below one, this is done by tracing the envelope of the received wave and removing the leftover carrier-frequency ripple, which requires the receiver circuit to follow envelope changes at the message frequency but not at the much higher carrier frequency.",
            },
          ],
        },
      ],
    },
  ],

  tables: [
    {
      id: "chapter-snapshot",
      slot: "scope",
      heading: "What this page is, and what it is not",
      columns: ["Question", "Direct answer"],
      rows: [
        [
          "Is Communication Systems part of the current official JEE Main syllabus?",
          "Not confirmed. It was not found as a listed unit in the JEE Main syllabus document currently published on the official NTA JEE Main site at the time of writing.",
        ],
        [
          "Is Communication Systems part of the current official JEE Advanced syllabus?",
          "Not confirmed. It was not found in the JEE (Advanced) 2026 syllabus PDF, which is stated to carry forward the JEE (Advanced) 2025 physics unit list.",
        ],
        [
          "Should a candidate prepare this chapter for scoring purposes?",
          "Only after personally checking the official syllabus PDF for the specific session and year being attempted. Do not rely on this page, or on any third-party summary, as confirmation of examinability.",
        ],
        [
          "What is this page for, then?",
          "Plain conceptual background on communication systems and amplitude modulation, useful for general understanding or for years in which the official document does include this unit.",
        ],
        [
          "What does this page avoid?",
          "Weightage figures, expected question counts, trend claims and PYQ evidence, since presenting exam relevance for an unconfirmed topic would be misleading.",
        ],
      ],
      note: "Always confirm current scope directly from the official syllabus document linked below before treating any topic here as examinable.",
    },
    {
      id: "official-syllabus",
      jump: true,
      slot: "scope",
      heading: "Verified syllabus status",
      intro:
        "This table records what was and was not found in the official documents checked. It does not assert removal or inclusion beyond what could be directly verified.",
      columns: ["Document checked", "Communication Systems found?", "Note"],
      rows: [
        [
          "JEE Main syllabus document, official NTA JEE Main site",
          "Not found as a listed unit in the document checked.",
          "[VERIFY BEFORE INDEXATION] Confirm against the exact syllabus PDF for the specific session before publishing an absolute claim.",
        ],
        [
          "JEE (Advanced) 2026 syllabus PDF",
          "Not found in the physics unit list. The document states the 2026 syllabus is the same as JEE (Advanced) 2025.",
          "[VERIFY BEFORE INDEXATION] Cross-check the JEE (Advanced) 2025 physics unit list directly for the same absence.",
        ],
      ],
      note: "Sources: NTA JEE Main syllabus page and the JEE (Advanced) 2026 syllabus PDF, both linked in the sources section below.",
    },
    {
      id: "prerequisite-check",
      jump: true,
      slot: "prerequisites",
      heading: "Prerequisites for reading this chapter",
      columns: ["Prerequisite", "You are ready if you can…", "If not, repair this first"],
      rows: [
        [
          "Wave basics",
          "Describe a wave using amplitude, frequency and wavelength.",
          "Revise the Waves chapter before this page.",
        ],
        [
          "Sinusoidal signals",
          "Read and sketch a sine wave and identify its amplitude and frequency.",
          "Revise the Alternating Current chapter for sinusoidal signal behaviour.",
        ],
      ],
      note: "This is a readiness check for the concepts on this page, not a claim about exam scope.",
    },
    {
      id: "method-selector",
      jump: true,
      slot: "concepts",
      heading: "Which propagation mode applies",
      intro: "A simple way to classify which propagation description fits a given frequency range, for conceptual understanding only.",
      columns: ["Situation described", "Likely propagation mode", "Reasoning"],
      rows: [
        ["Signal follows the earth's curved surface over land", "Ground wave", "Lower-frequency signals can follow the surface, losing energy with distance."],
        ["Signal reappears far beyond line of sight after travelling upward", "Sky wave", "Reflection from an ionised upper-atmosphere layer returns the signal to the ground."],
        ["Signal path is close to a straight line between two antennas", "Space wave", "Range is set by antenna height and the curvature of the earth, not by reflection."],
      ],
    },
  ],

  formulas: [
    {
      id: "modulation-index",
      expression: "mu = A_m / A_c",
      latex: "\\mu = \\dfrac{A_m}{A_c}",
      meaning: "Modulation index compares message amplitude to carrier amplitude in amplitude modulation.",
      variables: [
        { symbol: "mu", meaning: "modulation index", unit: "dimensionless" },
        { symbol: "A_m", meaning: "amplitude of the message signal", unit: "V" },
        { symbol: "A_c", meaning: "amplitude of the unmodulated carrier", unit: "V" },
      ],
      useWhen: "A single-tone message signal amplitude modulates a fixed-frequency carrier, and the intent is to check whether the envelope stays undistorted.",
      commonTrap: "Treating a modulation index above one as still giving a clean, undistorted envelope.",
      accessibleText: "Modulation index equals message amplitude divided by carrier amplitude.",
    },
    {
      id: "am-sideband-frequencies",
      expression: "f_c - f_m, f_c, f_c + f_m",
      latex: "f_c - f_m,\\; f_c,\\; f_c + f_m",
      meaning: "A single-tone amplitude modulated wave contains the carrier frequency and two sideband frequencies placed symmetrically around it.",
      variables: [
        { symbol: "f_c", meaning: "carrier frequency", unit: "Hz" },
        { symbol: "f_m", meaning: "message signal frequency", unit: "Hz" },
      ],
      useWhen: "The message signal is a single sinusoidal tone amplitude modulating a carrier.",
      commonTrap: "Assuming only the carrier frequency is transmitted and ignoring the sidebands that actually carry the message information.",
      accessibleText: "The amplitude modulated wave contains three frequencies: the carrier frequency, the carrier frequency minus the message frequency, and the carrier frequency plus the message frequency.",
    },
  ],

  workedExamples: [
    {
      id: "modulation-index-check",
      prompt:
        "A carrier wave of amplitude 10 V is amplitude modulated by a single-tone message signal of amplitude 4 V. State the modulation index and whether the envelope stays undistorted.",
      steps: [
        {
          type: "paragraph",
          children: [
            { text: "The modulation index is the message amplitude divided by the carrier amplitude: mu = 4 / 10 = 0.4." },
          ],
        },
        {
          type: "paragraph",
          children: [
            { text: "Since 0.4 is at or below one, the envelope of the modulated wave follows the message signal without distortion under this idealised condition." },
          ],
        },
      ],
      answer: "Modulation index = 0.4; envelope stays undistorted.",
    },
  ],

  mistakes: [
    {
      id: "assuming-examinable",
      mistake: "Assuming Communication Systems is examinable for the current attempt because an older syllabus, a coaching PDF or a previous year's paper included it.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Syllabus scope changes between cycles, and secondary sources can lag or misreport the current official document." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Check the official syllabus PDF for the exact session and year being attempted before allocating study time to this chapter." }],
        },
      ],
      errorType: "knowledge-gap",
    },
    {
      id: "modulation-index-distortion",
      mistake: "Using the modulation index formula without checking whether it stays at or below one before assuming the envelope is undistorted.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "A modulation index above one changes the shape of the demodulated output, so the same formula does not guarantee an undistorted envelope in every case." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Compute the modulation index first, then state explicitly whether it is at or below one before describing the envelope shape." }],
        },
      ],
      errorType: "execution-error",
    },
    {
      id: "propagation-mode-mixup",
      mistake: "Confusing ground wave, sky wave and space wave propagation without checking which frequency range and distance the situation describes.",
      why: [
        {
          type: "paragraph",
          children: [{ text: "Each propagation mode depends on frequency range, distance and the presence of a reflecting atmospheric layer, so the description in the question needs to be matched to the right mode rather than guessed." }],
        },
      ],
      fix: [
        {
          type: "paragraph",
          children: [{ text: "Identify the frequency range and distance stated in the problem, then match it to ground, sky or space wave behaviour using the method selector table above." }],
        },
      ],
      errorType: "recall-gap",
    },
  ],

  relatedChapters: [
    {
      label: "Alternating Current",
      url: "/jee/physics/alternating-current",
      relation: "prerequisite",
      description: "Sinusoidal carrier and message signal behaviour builds on alternating current concepts.",
    },
    {
      label: "Waves",
      url: "/jee/physics/waves",
      relation: "prerequisite",
      description: "Frequency, wavelength and superposition are reused when describing modulation.",
    },
    {
      label: "Electromagnetic Waves",
      url: "/jee/physics/electromagnetic-waves",
      relation: "related",
      description: "Propagation of electromagnetic waves through the atmosphere connects to ground, sky and space wave behaviour.",
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
      description: "Confirm current official scope directly before treating this chapter as examinable.",
    },
  ],

  faqs: [
    {
      question: "Is Communication Systems part of the current JEE Main syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Not confirmed as of this page's last review. It was not found as a listed unit in the JEE Main syllabus document currently published on the official NTA JEE Main site. Check the official document for your specific session before deciding whether to prepare it.",
            },
          ],
        },
      ],
    },
    {
      question: "Is Communication Systems part of the current JEE Advanced syllabus?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Not confirmed. It was not found in the JEE (Advanced) 2026 syllabus PDF, which is stated to carry forward the JEE (Advanced) 2025 physics unit list. Check the official JEE Advanced syllabus document for your specific year.",
            },
          ],
        },
      ],
    },
    {
      question: "Why does this page cover a topic that may not be examinable?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "The page is written as a plain conceptual explainer for background understanding, and to give a place to check current status, not as exam preparation content. It deliberately avoids weightage, PYQ and trend claims for this reason.",
            },
          ],
        },
      ],
    },
    {
      question: "Should I skip this chapter while preparing for JEE?",
      answer: [
        {
          type: "paragraph",
          children: [
            {
              text: "Confirm the current official syllabus for your specific JEE Main session and JEE Advanced year first. If the topic is absent from the official document you are checking, prioritise chapters that are confirmed as part of the current scope instead.",
            },
          ],
        },
      ],
    },
  ],

  sources: [
    "nta-jee-syllabus",
    "jee-advanced-syllabus",
    "jee-advanced-paper-archive",
    "nta-jee-main-question-papers",
  ],

  sourceNote:
    "Scope status was checked against the JEE Main syllabus document published on the official NTA JEE Main site and against the JEE (Advanced) 2026 syllabus PDF, in which Communication Systems could not be located as a listed physics unit. [VERIFY BEFORE INDEXATION] No official notification explicitly stating that Communication Systems has been removed from the JEE Main syllabus was directly located in this review; the absence from the current document was the basis for the non-examinable framing on this page. [VERIFY BEFORE INDEXATION] The JEE (Advanced) 2025 physics unit list should be independently rechecked to confirm the same absence, since the 2026 document only states it repeats the 2025 scope rather than reprinting the full list in this review. This page carries no PYQ, weightage or trend claims because exam relevance is unconfirmed.",

  contributorPolicy: [
    "Written by an academic content writer with a physics background covering electronics and communication concepts at the undergraduate level or higher.",
    "Academically reviewed by a subject-matter reviewer with verified expertise in JEE-level physics and current familiarity with the official NTA JEE Main and JEE Advanced syllabus documents.",
    "Last reviewed: 8 September 2026.",
    "Sources checked: official NTA JEE Main syllabus document and the official JEE (Advanced) syllabus PDF.",
    "Ideal author type: physics educator or electronics/communication engineering graduate with JEE-level teaching experience.",
    "Minimum reviewer qualification: postgraduate qualification in physics or electronics, or equivalent verified JEE-level teaching experience.",
    "Review scope: conceptual accuracy of communication systems content and verification of current syllabus status against official documents.",
    "Source authorities: NTA and the JEE Advanced organising IIT.",
  ],

  updated: "8 September 2026",
  contentStatus: "draft",
  contentFlags: [
    "no-weightage",
    "no-pyq-count",
    "no-trend",
    "non-examinable-unconfirmed",
  ],

  meta: {
    title: "Communication Systems (JEE Physics) - Scope Status and Concept Overview | Rank Sarthi",
    description:
      "Communication Systems was not found in the JEE Main syllabus document currently published by NTA or in the JEE Advanced 2026 syllabus PDF. This page explains the concepts as background learning only, with no weightage or exam-relevance claims.",
    ogTitle: "Communication Systems: Scope Status and Concepts (JEE Physics)",
    ogDescription:
      "Verified scope status plus a plain conceptual explainer of communication systems and amplitude modulation, written as background learning, not confirmed exam content.",
  },
};
