# Rank Sarthi Hub

Build a polished, production-ready HOMEPAGE for "Rank Sarthi" — an AI-powered exam preparation brand with three platforms: JeeRankUp (JEE), NeetRankUp (NEET), and NDARankUp (NDA). This is the main brand hub site. Build ONE page with a fully interactive mega-menu navigation. Make it complete and correct in a single build.

TECH: React + Vite + Tailwind CSS. All text content in static HTML so it is SEO-crawlable. Add SEO meta tags in index.html: title "Rank Sarthi | AI Mock Tests for JEE, NEET & NDA", meta description "India's AI-powered mock test platform for JEE, NEET & NDA. Get diagnosis, not just scores. Start free.", Open Graph tags, and JSON-LD Organization schema. Semantic HTML, one h1, alt text on images, aria-labels on interactive elements. No dead links — every menu item is a real anchor link or a placeholder route.

DESIGN: Modern, premium, trustworthy EdTech feel. Palette: deep navy (#0A1F44) primary, energetic red (#C0392B) accent, clean white, subtle gold (#C9A54E) for premium touches. Font: Inter or Montserrat. Generous spacing, smooth scroll, subtle fade-up animations on scroll. Confident and disciplined, not childish.

=== THE INTERACTIVE MEGA-MENU (this is the priority — make it excellent) ===

Sticky top navbar. Transparent over hero, turns solid navy with shadow on scroll. Left: "Rank Sarthi" logo text (navy with a red accent dot). 

Top-level nav items with interactive dropdowns on hover (desktop) and tap/accordion (mobile):

1. "JEE" — mega-dropdown with columns:

   - Overview: JEE Main, JEE Advanced, How It Works, Pricing

   - Study: JEE Syllabus, Physics, Chemistry, Mathematics

   - Practice: Mock Tests, Previous Year Papers, Answer Key, Paper Analysis

   - Tools: Rank Predictor, College Predictor, Cutoff, Exam Dates

2. "NEET" — mega-dropdown with columns:

   - Overview: NEET Exam, NCERT Mapping, How It Works, Pricing

   - Study: NEET Syllabus, Biology, Physics, Chemistry, NCERT Important Pages

   - Practice: Mock Tests, Previous Year Papers, Answer Key, Paper Analysis

   - Tools: Rank Predictor, Score Calculator, Cutoff, Study Plan, Exam Dates

3. "NDA" — mega-dropdown with columns:

   - Overview: NDA Exam, Selection Process, Eligibility, Pricing

   - Study: NDA Syllabus, Mathematics, GAT, General Knowledge, Current Affairs

   - Practice: Mock Tests, Previous Year Papers, Answer Key, Paper Analysis

   - SSB & More: SSB Interview Guide, Physical Standards, Girls in NDA, PABT Test, Army/Navy/Air Force Wings

4. "For Institutes" — simple dropdown: Overview, B2B Pricing, Case Studies, Request Demo

5. "Free Resources" — simple dropdown: NDA Syllabus PDF, JEE Formula Sheet, NEET NCERT Guide, All Resources

6. "Blog" — single link

Right side: "Log In" text link + prominent red "Start Free Test" button.

Mega-menu must be genuinely interactive: dropdowns open smoothly with a subtle animation, each column has a bold heading and clean vertical link list, generous padding, and each platform's dropdown uses a subtle accent (JEE navy-blue tint, NEET green tint, NDA amber/gold tint) so they feel distinct. On mobile: a hamburger opens a full-screen slide-in menu where each top item expands as an accordion revealing the same sub-links. Menu closes on link tap.

=== HOMEPAGE SECTIONS ===

1. HERO (id="home"): Navy, full-height. h1: "Prepare Smarter. Rank Higher." Subline: "India's AI-powered mock test platform for JEE, NEET and NDA. We don't just tell you what you scored — we tell you why, and what to fix next." Two buttons: red "Start Free Test", outlined white "Explore Platforms". Trust stat bar: "1.6M+ Questions", "5,000+ Mock Tests", "3 Exams Covered", "AI Diagnosis Engine". Subtle abstract geometric graphic, no stock photos.

2. THREE PLATFORMS (id="platforms"): "One Platform. Three Paths." Three cards side by side — JeeRankUp, NeetRankUp, NDARankUp — each with a short line, 2-3 key features, and an "Explore" button. NDARankUp card gets a small "India's First AI NDA Platform" badge.

3. WHY RANK SARTHI (id="why"): "Diagnosis, Not Just Scores." Three feature cards: "AI Weakness Mapping", "Exam-Accurate Simulation", "Track Every Wrong Answer to Its Concept" — each with an icon.

4. HOW IT WORKS (id="how"): Three-step horizontal flow: "Take a Test" → "Get AI Diagnosis" → "Fix & Improve", numbered and connected.

5. FOR INSTITUTES (id="institutes"): Short B2B band: "Run a coaching institute? Get a white-label test platform under your brand." One "Request a Demo" button.

6. PRICING (id="pricing"): "Simple, Honest Pricing." Working monthly/annual toggle (annual: "Save 33%"). Three cards: Starter (Free), Pro (₹499/mo, marked "Most Popular", red border), Premium (₹1,499/mo). Feature lists + CTA each.

7. FAQ (id="faq"): Interactive accordion (click to expand), 6 questions covering: what Rank Sarthi is, how AI diagnosis works, which exams are covered, is there a free plan, can girls prepare for NDA (yes, per 2021 Supreme Court ruling), how often new tests are added. This powers FAQPage schema.

8. FINAL CTA (id="cta"): Navy band. "Your rank starts with the first test." Red "Start Free Test" button.

9. FOOTER: Four columns — Platforms (JeeRankUp, NeetRankUp, NDARankUp), Free Resources (NDA Syllabus PDF, JEE Formula Sheet, NEET NCERT Guide), Company (About, Blog, Contact, For Institutes, Careers), Legal (Privacy Policy, Terms of Service, Refund Policy). Copyright "© 2026 Rank Sarthi. All rights reserved." Do NOT use any placeholder phone numbers — omit contact numbers.

Ship it complete, polished, and fully responsive in one build. The mega-menu working flawlessly on both desktop and mobile is the most important requirement.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rank-sarthi-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6f50403b-3b86-4532-8df1-a53797fb6f88).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
