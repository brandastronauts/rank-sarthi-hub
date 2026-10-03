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
