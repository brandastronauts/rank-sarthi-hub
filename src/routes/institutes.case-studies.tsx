import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/institutes/case-studies")({
  beforeLoad: ({ location }) => { throw redirect({ href: `/institutes${location.searchStr}#scenarios`, statusCode: 301 }); },
  head: () => ({ meta: [{ title: "Institutes — Moved | Rank Sarthi" }, { name: "robots", content: "noindex, follow" }] }),
});
