> [!IMPORTANT]
> Avoid rewriting published git history by force pushing, rebasing, amending,
> or squashing commits that have already been pushed.
>
> Keep the connected branch in a working state.

- Contact enquiries are stored in the contact_enquiries table via a server function (service role only, no client access); company details live in src/content/company.ts. Why: one source for approved details, no public read of personal data.
