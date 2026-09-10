import type { InfoPageContent } from "../types";

/**
 * /jee/jee-advanced/previous-year-papers — official JEE Advanced archive (J01).
 * Identity is cycleYear -> Paper 1 / Paper 2 -> language. Advanced never
 * inherits JEE Main session or shift semantics, and never carries an NTA badge.
 */

export const jeeAdvancedPreviousYearPapers: InfoPageContent = {
  url: "/jee/jee-advanced/previous-year-papers",
  platform: "jee",
  slug: "previous-year-papers",
  exam: "JEE Advanced",
  title: "JEE Advanced Previous Year Papers: Official Paper 1 and Paper 2 Archive",
  eyebrow: "Official paper archive",
  intent: "Open an official Advanced paper by year, paper and language",
  chips: ["Official JEE Advanced", "Paper 1 and Paper 2 separate", "2007 to 2026"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "The official JEE Advanced archive exposes past question papers from 2007 through 2025, and the official 2026 site exposes Paper 1 and Paper 2 in both English and Hindi. Three archive files could not be verified directly and are shown as pending rather than replaced with a third-party copy." }] },
    { type: "note", tone: "source", children: [{ text: "JEE Advanced has its own owning authority. An Advanced paper is never labelled as an NTA document." }] },
  ],
  freshness: { heading: "Official archive status", recordIds: ["jee-advanced-2026-paper-archive"], note: "Event-triggered on a current-cycle release, with monthly archive integrity checks." },
  blocks: [
    {
      kind: "table",
      id: "adv-pyq-coverage",
      heading: "Archive coverage at a glance",
      intro: "Latest cycle first.",
      columns: ["Cycle range", "Papers", "Languages", "State"],
      rows: [
        ["2026", "Paper 1 and Paper 2", "English and Hindi", "4 of 4 official files verified"],
        ["2019 to 2025", "Paper 1 and Paper 2", "English and Hindi", "Verified, except 2022 Paper 1 Hindi and 2022 Paper 2 Hindi"],
        ["2007 to 2018", "Paper 1 and Paper 2", "As published in the archive", "Verified, except 2017 Paper 2"],
      ],
      note: "Pending rows stay visible and inactive so the gap is honest rather than hidden.",
      jump: true,
    },
    {
      kind: "resources",
      id: "adv-papers",
      heading: "Official JEE Advanced papers by year",
      intro: "Each year keeps Paper 1 and Paper 2 separate.",
      rows: [
        {
          id: "jee-advanced-2026-papers",
          eventLabel: "JEE Advanced 2026",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/documents/p1_english.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/documents/p1_hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/documents/p2_english.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/documents/p2_hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
          ],
          note: "Current cycle files published on the official JEE Advanced site.",
        },
        {
          id: "jee-advanced-2025-papers",
          eventLabel: "JEE Advanced 2025",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2025_1_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2025_1_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2025_2_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2025_2_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
          ],
          note: "The embedded PDF title exposed by some viewers appears stale, while the official archive year context and official URL path are 2025.",
        },
        {
          id: "jee-advanced-2024-papers",
          eventLabel: "JEE Advanced 2024",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2024_1_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2024_1_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2024_2_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2024_2_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2023-papers",
          eventLabel: "JEE Advanced 2023",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2023_1_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2023_1_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2023_2_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2023_2_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2022-papers",
          eventLabel: "JEE Advanced 2022",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2022_1_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "SOURCE_NOT_VERIFIED", label: "Source verification pending", badge: "Source pending", cta: "Source verification pending", owner: "JEE Advanced organising authority", trustNote: "Direct-file verification returned an error. No third-party copy is substituted.", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2022_2_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "SOURCE_NOT_VERIFIED", label: "Source verification pending", badge: "Source pending", cta: "Source verification pending", owner: "JEE Advanced organising authority", trustNote: "Direct-file verification returned an error. No third-party copy is substituted.", detail: "Hindi" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2021-papers",
          eventLabel: "JEE Advanced 2021",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2021_1_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2021_1_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2021_2_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2021_2_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2020-papers",
          eventLabel: "JEE Advanced 2020",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2020_1_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2020_1_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2020_2_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2020_2_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2019-papers",
          eventLabel: "JEE Advanced 2019",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2019_1_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2019_1_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2019_2_English.pdf", owner: "JEE Advanced organising authority", detail: "English" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2019_2_Hindi.pdf", owner: "JEE Advanced organising authority", detail: "Hindi" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2018-papers",
          eventLabel: "JEE Advanced 2018",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2018_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2018_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2017-papers",
          eventLabel: "JEE Advanced 2017",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2017_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Source verification pending", badge: "Source pending", cta: "Source verification pending", owner: "JEE Advanced organising authority", trustNote: "Direct-file verification returned an error. No third-party copy is substituted.", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2016-papers",
          eventLabel: "JEE Advanced 2016",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2016_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2016_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2015-papers",
          eventLabel: "JEE Advanced 2015",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2015_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2015_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2014-papers",
          eventLabel: "JEE Advanced 2014",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2014_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2014_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2013-papers",
          eventLabel: "JEE Advanced 2013",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2013_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2013_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2012-papers",
          eventLabel: "JEE Advanced 2012",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2012_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2012_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2011-papers",
          eventLabel: "JEE Advanced 2011",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2011_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2011_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2010-papers",
          eventLabel: "JEE Advanced 2010",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2010_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2010_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2009-papers",
          eventLabel: "JEE Advanced 2009",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2009_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2009_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2008-papers",
          eventLabel: "JEE Advanced 2008",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2008_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2008_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
        {
          id: "jee-advanced-2007-papers",
          eventLabel: "JEE Advanced 2007",
          eventDate: "Paper 1 and Paper 2",
          cells: [
            { label: "Paper 1", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2007_1.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
            { label: "Paper 2", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official JEE Advanced", cta: "View Official Paper", href: "https://jeeadv.ac.in/past_qps/2007_2.pdf", owner: "JEE Advanced organising authority", detail: "Language as published in the official archive" }
            ] },
          ],
        },
      ],
      note: "Official files open on the JEE Advanced channel in a new tab. Rank Sarthi does not rehost them; local hosting stays RIGHTS_REVIEW_REQUIRED.",
      jump: true,
    },
    {
      kind: "prose",
      id: "adv-pyq-keys",
      heading: "Papers are not answer keys",
      concepts: [
        {
          id: "adv-pyq-keys-body",
          title: "Papers are not answer keys",
          body: [
            { type: "paragraph", children: [{ text: "Access to a historical paper does not imply a matching historical answer key. Official 2026 Paper 1 and Paper 2 keys are on the Advanced answer-key page; earlier key coverage is not claimed here." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Advanced", url: "/jee/jee-advanced", relation: "up", description: "Return to the Advanced hub" },
    { label: "Advanced Answer Key", url: "/jee/jee-advanced/answer-key", relation: "related", description: "Open the official 2026 Paper 1 and Paper 2 keys" },
    { label: "Advanced Exam Dates", url: "/jee/jee-advanced/exam-dates", relation: "related", description: "See the official Advanced timeline" },
    { label: "Advanced Cutoff", url: "/jee/jee-advanced/cutoff", relation: "related", description: "See the rank-list qualifying criteria" },
    { label: "JEE Main Papers", url: "/jee/previous-year-papers", relation: "related", description: "Main Paper 1 resources are kept separate" },
  ],
  faqs: [
    { question: "Why are three files not clickable?", answer: [{ type: "paragraph", children: [{ text: "Direct-file verification failed for 2017 Paper 2, 2022 Paper 1 Hindi and 2022 Paper 2 Hindi. They stay pending because substituting a third-party copy would break the provenance rule." }] }] },
    { question: "Are these NTA papers?", answer: [{ type: "paragraph", children: [{ text: "No. JEE Advanced is conducted by its own organising authority, and these files are hosted on the official JEE Advanced channel." }] }] },
  ],
  sourceRefs: ["jee-advanced-paper-archive", "jee-advanced-2026-papers"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Advanced Previous Year Papers: Official Paper 1 & 2 PDFs | Rank Sarthi",
    description: "Browse official JEE Advanced papers by year, Paper 1, Paper 2 and language, with source provenance, key state and non-clickable pending records when direct verification fails.",
    ogTitle: "JEE Advanced Official Paper Archive: 2007 to 2026",
    ogDescription: "Paper 1 and Paper 2 by year and language, with honest pending states.",
    ogType: "article",
  },
};
