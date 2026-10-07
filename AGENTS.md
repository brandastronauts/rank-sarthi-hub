> [!IMPORTANT]
> Avoid rewriting published git history by force pushing, rebasing, amending,
> or squashing commits that have already been pushed.
>
> Keep the connected branch in a working state.

- Contact enquiries are stored in the contact_enquiries table via a server function (service role only, no client access); company details live in src/content/company.ts. Why: one source for approved details, no public read of personal data.
- Public faculty discovery and attribution must use the filtered public profile collection; direct profile lookup remains separate. Why: profiles can be temporarily hidden without deleting approved records or internal assignments.
- Rank Sarthi owns acquisition through a referral-safe outbound handoff; each RankUp site owns diagnostics, accounts, results, plans, and payments. Why: marketing must not duplicate product logic it cannot verify.
- NEET commercial surfaces consume one shared offer configuration. Why: approved prices, add-ons, calculations, and terms must stay consistent sitewide.
- One common JEE + NEET campaign (strip + once-per-session popup) is configured in src/content/offers/campaign.ts and suppressed on commercial destinations and NDA pages. Why: no stacked or exam-conflicting promotions, and no implied NDA offer.
- All RankUp handoffs go through buildRankUpHandoff with the controlled rs_cta vocabulary; the contract lives in docs/rankup-handoff-contract.md. Why: one link rule the RankUp team can rely on.
- Official Physics unit wording and unit-to-route ownership for JEE Main and NEET live only in src/content/physics-units.ts; syllabus maps, hubs and chapter "Official syllabus unit" labels read it. Why: unit navigation must never depend on fuzzy name matching or drift between exams.
- Retired duplicate routes use UrlRecord.redirectTo (301 in the chapter loader, excluded from hubs and sitemaps) instead of deletion. Why: keeps old links working with no 404s.
- Server-side code must be Worker-safe: import cheerio only as "cheerio/slim" and never make loopback HTTP calls to the app's own API from SSR (use createServerFn instead). Why: both crash every page on the published host while working in the preview.
- Operator-supplied PYQ copies are hosted as CDN assets and mapped only through src/content/resources/pyq-manifest.ts with RANK_SARTHI_HOSTED_COPY provenance. Why: one mapping, and hosted copies are never labelled official NTA.
- Official company contact details must be consumed from src/content/company.ts wherever rendering supports it. Why: visible contact links and structured business data must not drift.
- Faculty credential sections and institution connections live on AcademicCredential in the central profile records and use shared badge renderers. Why: compact and full faculty views must agree without turning individual academic associations into institutional endorsements.
