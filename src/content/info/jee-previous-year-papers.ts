import type { InfoPageContent } from "../types";

/**
 * /jee/previous-year-papers — JEE Main Paper 1 resource finder (J01).
 * Identity is cycleYear -> session -> exam date -> shift -> paper. A row only
 * carries an active paper button when an authority-hosted file is verified.
 */

export const jeePreviousYearPapers: InfoPageContent = {
  url: "/jee/previous-year-papers",
  platform: "jee",
  slug: "previous-year-papers",
  exam: "JEE Main",
  title: "JEE Main Previous Year Papers: Official Shift-Wise Finder",
  eyebrow: "Official paper finder",
  intent: "Find a JEE Main Paper 1 resource by year, session, date and shift",
  chips: ["Official NTA", "Session and shift separated", "No coaching copies"],
  contentStatus: "draft",
  answer: [
    { type: "paragraph", children: [{ text: "NTA currently exposes nine official JEE Main 2026 Session 2 Paper 1 shift papers: 2, 4, 5 and 6 April in both shifts and 8 April Shift 2. Session 1 date and shift identity is verified for 21, 22, 23, 24 and 28 January in both shifts, but no exact public authority-hosted question-paper PDF is active for those ten events." }] },
    { type: "note", tone: "source", children: [{ text: "Where an official paper file is not verified, the row stays inactive and says so. A memory-based or coaching reconstruction is never presented as an official paper." }] },
  ],
  freshness: { heading: "Official paper archive status", recordIds: ["jee-main-2026-paper-archive", "jee-main-2026-s2-p1-final-key"], note: "Checking runs against the official NTA channel only; a new file is published after human source and rights review." },
  blocks: [
    {
      kind: "table",
      id: "main-pyq-finder",
      heading: "Find your paper: year, session, date and shift",
      intro: "Start here, then open the matching session block below.",
      columns: ["Year", "Session", "Paper 1 exam dates", "Shifts", "Official paper files", "State"],
      rows: [
        ["2026", "Session 2", "2, 4, 5, 6 Apr (both shifts) and 8 Apr (Shift 2)", "2 per date, except 8 Apr", "9 of 9 verified", "Official files active"],
        ["2026", "Session 1", "21, 22, 23, 24, 28 Jan", "2 per date", "0 of 10 verified", "Paper source verification pending"],
        ["2027", "Not officially announced", "Not officially announced", "Not officially announced", "None", "No cycle data exists yet"],
      ],
      note: "Only Paper 1 B.E./B.Tech events reconciled against official NTA records appear here. There is no 8 April Shift 1 Paper 1 event.",
      jump: true,
    },
    {
      kind: "resources",
      id: "main-2026-session-2",
      heading: "JEE Main 2026 Session 2 — official Paper 1 papers",
      intro: "Nine authority-hosted Paper 1 files, each with its official answer-key state.",
      rows: [
        {
          id: "jee-main-2026-s2-20260402-shift1-p1",
          eventLabel: "2 Apr 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604092096865379.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260402-shift2-p1",
          eventLabel: "2 Apr 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260409481957146.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260404-shift1-p1",
          eventLabel: "4 Apr 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604091916616339.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260404-shift2-p1",
          eventLabel: "4 Apr 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260409432593766.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260405-shift1-p1",
          eventLabel: "5 Apr 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260409828731207.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260405-shift2-p1",
          eventLabel: "5 Apr 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260409829414602.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260406-shift1-p1",
          eventLabel: "6 Apr 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604092007095665.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260406-shift2-p1",
          eventLabel: "6 Apr 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260409725707538.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s2-20260408-shift2-p1",
          eventLabel: "8 Apr 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 2 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Official Question Paper", badge: "Official NTA", cta: "View Official Paper", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260409932754345.pdf", owner: "National Testing Agency", detail: "Paper 1 B.E./B.Tech · authority-hosted file · last verified 11 Sep 2026" }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/20260420409057044.pdf", owner: "National Testing Agency", detail: "Published 20 Apr 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/04/202604111807208741.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 11 Apr 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
      ],
      note: "Files open on the official NTA channel in a new tab. Rank Sarthi does not rehost them.",
      jump: true,
    },
    {
      kind: "resources",
      id: "main-2026-session-1",
      heading: "JEE Main 2026 Session 1 — event identity verified, paper source pending",
      intro: "Ten verified Paper 1 events. The official answer-key resources are active; the paper files are not.",
      rows: [
        {
          id: "jee-main-2026-s1-20260121-shift1-p1",
          eventLabel: "21 Jan 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260121-shift2-p1",
          eventLabel: "21 Jan 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260122-shift1-p1",
          eventLabel: "22 Jan 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260122-shift2-p1",
          eventLabel: "22 Jan 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260123-shift1-p1",
          eventLabel: "23 Jan 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260123-shift2-p1",
          eventLabel: "23 Jan 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260124-shift1-p1",
          eventLabel: "24 Jan 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260124-shift2-p1",
          eventLabel: "24 Jan 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260128-shift1-p1",
          eventLabel: "28 Jan 2026 · Shift 1 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 1",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
        {
          id: "jee-main-2026-s1-20260128-shift2-p1",
          eventLabel: "28 Jan 2026 · Shift 2 · Paper 1 B.E./B.Tech",
          eventDate: "Session 1 Shift 2",
          cells: [
            { label: "Question paper", actions: [
              { provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", trustNote: "No exact public authority-hosted paper PDF was activated. A coaching or memory-based reconstruction is never substituted here.", detail: "Date and shift identity verified from the official final answer key." }
            ] },
            { label: "Official answer key", actions: [
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/20260216459398513.pdf", owner: "National Testing Agency", detail: "Published 16 Feb 2026 · session-level PDF carries this date and shift" },
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional key workflow", badge: "Official NTA notice", cta: "View Official Provisional Key Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
      ],
      note: "These rows stay inactive until an exact authority-hosted paper file is verified and rights-reviewed.",
      jump: true,
    },
    {
      kind: "prose",
      id: "main-pyq-archive",
      heading: "Older Main cycles and rights",
      concepts: [
        {
          id: "main-pyq-archive-body",
          title: "Older Main cycles and rights",
          body: [
            { type: "paragraph", children: [{ text: "This release does not manufacture a broad Main year archive out of secondary sites. Older cycles will be added under the same provenance model: an authority-hosted file, or an explicitly labelled verified copy, or nothing at all." }] },
            { type: "note", tone: "source", children: [{ text: "External official files are linked, never copied onto Rank Sarthi hosting. Local rehosting stays RIGHTS_REVIEW_REQUIRED." }] }
          ],
        },
      ],
    },
  ],
  relatedLinks: [
    { label: "JEE Home", url: "/jee", relation: "up", description: "Return to the JEE hub" },
    { label: "JEE Main", url: "/jee/jee-main", relation: "related", description: "Understand the Main paper and result route" },
    { label: "Answer Key", url: "/jee/answer-key", relation: "related", description: "Open the official provisional and final keys" },
    { label: "Paper Analysis", url: "/jee/analysis", relation: "related", description: "See what evidence exists before any analysis claim" },
    { label: "Exam Dates", url: "/jee/exam-dates", relation: "related", description: "Check the official 2026 session timeline" },
    { label: "Cutoff", url: "/jee/cutoff", relation: "related", description: "See the official Advanced-eligibility NTA Score threshold" },
  ],
  faqs: [
    { question: "Why can I not download the January 2026 papers here?", answer: [{ type: "paragraph", children: [{ text: "Because no exact public authority-hosted question-paper PDF was verified for those ten events. The date and shift identity is confirmed from the official final answer key, so the events are listed honestly instead of being filled with a coaching reconstruction." }] }] },
    { question: "Is there an 8 April 2026 Shift 1 Paper 1?", answer: [{ type: "paragraph", children: [{ text: "No. The official record identifies 8 April Paper 1 as Shift 2, and the official paper menu exposes no 8 April Shift 1 Paper 1 file, so no such event is created here." }] }] },
  ],
  sourceRefs: ["nta-jee-main-question-papers", "nta-jee-main-s1-final-key-2026", "nta-jee-main-s2-final-key-2026"],
  contributorPolicy: [
    "Written by: JEE resource and source-verification editor",
    "Fact-checked by: Exam-process reviewer and Freshness Editor",
    "Review scope: event identity, provenance tier, CTA state, authority ownership and cycle labelling",
    "Rights: external official files are linked, never rehosted; local hosting stays RIGHTS_REVIEW_REQUIRED",
    "Contributor names are not published until the named reviewer is assigned",
  ],
  lastVerified: "11 September 2026",
  seo: {
    title: "JEE Main Previous Year Papers: Official Shift-Wise PDFs | Rank Sarthi",
    description: "Find verified JEE Main papers by year, session, date and shift, with official NTA provenance, answer-key state and source-pending labels where a direct paper is not verified.",
    ogTitle: "JEE Main Previous Year Papers by Session, Date and Shift",
    ogDescription: "Official NTA Paper 1 files with honest source-pending states.",
    ogType: "article",
  },
};
