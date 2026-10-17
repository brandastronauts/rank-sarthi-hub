import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/institutes/request-demo")({
  beforeLoad: ({ location }) => { throw redirect({ href: `/institutes${location.searchStr}#demo`, statusCode: 301 }); },
  head: () => ({ meta: [{ title: "Institutes — Moved | Rank Sarthi" }, { name: "robots", content: "noindex, follow" }] }),
});
