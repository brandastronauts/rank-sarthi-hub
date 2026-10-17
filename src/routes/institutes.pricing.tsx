import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/institutes/pricing")({
  beforeLoad: ({ location }) => { throw redirect({ href: `/institutes${location.searchStr}#quote`, statusCode: 301 }); },
  head: () => ({ meta: [{ title: "Institutes — Moved | Rank Sarthi" }, { name: "robots", content: "noindex, follow" }] }),
});
