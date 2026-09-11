import type { ResourceRow } from "@/content/types";

/**
 * Shared JEE Main Paper 1 resource registry used by the parent finder and
 * year-filtered views. J01 owns 2026; J02 adds 2025 without rewriting J01.
 */
const rowsByYearAndSession = {
  2026: {
    "Session 1": [
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
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
              { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/02/202602041670681672.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Challenge notice published 4 Feb 2026" }
            ] },
            { label: "Analysis", actions: [
              { provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }
            ] },
          ],
        },
      ] satisfies ResourceRow[],
    "Session 2": [
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
      ] satisfies ResourceRow[],
  },
  2025: {
    "Session 1": [
  {
    id: "jee-main-2025-s1-20250122-shift1-p1",
    eventLabel: "22 Jan 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Answers-and-Solutions_JEE_Main-2025_Ph-1_22-01-2025_Mor.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250122-shift2-p1",
    eventLabel: "22 Jan 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Answers-and-Solutions_JEE_Main-2025_Ph-1_22-01-2025_Eve_revised.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250123-shift1-p1",
    eventLabel: "23 Jan 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250123-shift2-p1",
    eventLabel: "23 Jan 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250124-shift1-p1",
    eventLabel: "24 Jan 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250124-shift2-p1",
    eventLabel: "24 Jan 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250128-shift1-p1",
    eventLabel: "28 Jan 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250128-shift2-p1",
    eventLabel: "28 Jan 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250129-shift1-p1",
    eventLabel: "29 Jan 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s1-20250129-shift2-p1",
    eventLabel: "29 Jan 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 1 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025021039.pdf", owner: "National Testing Agency", detail: "Session 1 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/02/2025020474.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 1 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  }
    ] satisfies ResourceRow[],
    "Session 2": [
  {
    id: "jee-main-2025-s2-20250402-shift1-p1",
    eventLabel: "2 Apr 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ans-and-Sol_JEE_Main_2025_Ph-2_02-04-2025_Morning.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250402-shift2-p1",
    eventLabel: "2 Apr 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ans-and-Sol_JEE_Main_2025_Ph-2_02-04-2025_Evening.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250403-shift1-p1",
    eventLabel: "3 Apr 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ans-and-Sol_JEE_Main_2025_Ph-2_03-04-2025_Morning.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250403-shift2-p1",
    eventLabel: "3 Apr 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ans-and-Sol_JEE_Main_2025_Ph-2_03-04-2025_Evening.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250404-shift1-p1",
    eventLabel: "4 Apr 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250404-shift2-p1",
    eventLabel: "4 Apr 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "SOURCE_NOT_VERIFIED", label: "Paper source verification pending", badge: "Source pending", cta: "Paper source verification pending", owner: "National Testing Agency (event identity only)", detail: "Official schedule verifies the date, shift and Paper 1 identity; no verified complete paper destination is active." }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250407-shift1-p1",
    eventLabel: "7 Apr 2025 · Shift 1 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 1",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ans-and-Sol_JEE_Main_2025_Ph-2_07-04-2025_Morning.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250407-shift2-p1",
    eventLabel: "7 Apr 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ans-and-Sol_JEE_Main_2025_Ph-2_07-04-2025_Evening.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  },
  {
    id: "jee-main-2025-s2-20250408-shift2-p1",
    eventLabel: "8 Apr 2025 · Shift 2 · Paper 1 B.E./B.Tech",
    eventDate: "Session 2 Shift 2",
    cells: [
      { label: "Question paper", actions: [{ provenance: "VERIFIED_PAPER_RECONSTRUCTION", label: "Verified Paper Reconstruction", badge: "Verified reference", cta: "View Paper", href: "https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/pdf_management_files/target_solutions/Ans-and-Sol_JEE_Main-2025_Ph-2_08-04-2025_Evening.pdf", owner: "Aakash Educational Services Limited / Aakash Digital", trustNote: "This is a third-party reconstruction/reference resource, not an official NTA-hosted question paper.", detail: "Paper 1 B.E./B.Tech · publisher-hosted reference · local rehosting requires rights review" }] },
      { label: "Official answer key", actions: [
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Final Answer Key", badge: "Official NTA", cta: "View Official Answer Key", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041892.pdf", owner: "National Testing Agency", detail: "Session 2 final Paper 1 key" },
          { provenance: "OFFICIAL_AUTHORITY_COPY", label: "Provisional Key / Challenge Notice", badge: "Official NTA notice", cta: "View Official Notice", href: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/04/2025041144.pdf", owner: "National Testing Agency", trustNote: "The challenge notice is not itself a direct answer-key PDF.", detail: "Session 2 provisional-key challenge notice" },
        ] },
      { label: "Analysis", actions: [{ provenance: "NOT_AVAILABLE", label: "Rank Sarthi analysis", cta: "Analysis pending reviewed ingestion", detail: "No approved question-level dataset exists for this event." }] },
    ],
  }
    ] satisfies ResourceRow[],
  },
} as const;

export type JeeMainPaperYear = keyof typeof rowsByYearAndSession;
export type JeeMainPaperSession = keyof (typeof rowsByYearAndSession)[JeeMainPaperYear];

export function jeeMainRowsFor(year: JeeMainPaperYear, session: JeeMainPaperSession): ResourceRow[] {
  return [...rowsByYearAndSession[year][session]];
}
