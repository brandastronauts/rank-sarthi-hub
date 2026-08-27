/**
 * NDA production package — content intentionally held out of /nda.
 *
 * Editorial record only. Nothing here renders. Each entry states what was in
 * the approved package, why it is not on the page, and what would release it.
 */
export const ndaHeldContent = [
  {
    ref: "B06 — diagnostic product proof",
    held: "Mock-review screenshot slot and its four annotations.",
    reason: "No verified product screenshot exists. The package forbids fabricating one.",
    releaseCondition: "A real diagnostic output screenshot plus confirmed product capability.",
  },
  {
    ref: "B45 — staging proof placeholder",
    held: "Placeholder people, testimonials and outcome cards.",
    reason: "Public production must not carry placeholder proof, and no Person or Review schema is emitted for /nda.",
    releaseCondition: "Verified identity, consent, relationship and evidence for each named person.",
  },
  {
    ref: "B19 — pricing",
    held: "Entire pricing band (showPricing is false).",
    reason: "No verified NDA plan names, prices, inclusions, validity, payment or cancellation terms.",
    releaseCondition: "Approved commercial terms and a live checkout destination.",
  },
  {
    ref: "B11 — aspirant contrast story",
    held: "Without-diagnosis versus with-evidence ordered paths.",
    reason: "Not a slot in the authoritative T02 recipe; the same idea is carried by the B41 diagnosis and error taxonomy.",
    releaseCondition: "A future T02 contract slot, or use on a dedicated method page.",
  },
  {
    ref: "B12 — five-step preparation method",
    held: "Map scope, baseline, prioritise, practise, validate.",
    reason: "No matching slot in the current T02 recipe. Architecture was not changed to fit it.",
    releaseCondition: "A methodology block added to the T02 contract, or the /nda/preparation-roadmap page.",
  },
  {
    ref: "B16 — parent insight",
    held: "Parent evidence checklist (coverage, practice, pattern, well-being).",
    reason: "No parent slot exists in the authoritative T02 recipe.",
    releaseCondition: "A parent band added to the shared T02 contract for all platforms.",
  },
  {
    ref: "B17 — three-step process",
    held: "Attempt, diagnose, improve with a disabled product CTA.",
    reason: "Overlaps the B41 diagnosis content; no separate T02 slot.",
    releaseCondition: "Product capability verified, then a decision on where activation steps live.",
  },
  {
    ref: "Competitor and information-gain analysis, E-E-A-T requirements",
    held: "Sections 2, 5 and 10 of the package.",
    reason: "Internal editorial planning material, not page copy.",
    releaseCondition: "Not applicable. Retained in the package for editorial reference.",
  },
  {
    ref: "Author and reviewer credits",
    held: "NDA editorial researcher, written-exam SME, SSB expert.",
    reason: "No real person is confirmed. The package forbids naming anyone until confirmed.",
    releaseCondition: "Named, verified people with consent, before indexation.",
  },
] as const;
