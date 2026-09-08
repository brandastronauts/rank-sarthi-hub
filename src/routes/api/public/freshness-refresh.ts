import { createFileRoute } from "@tanstack/react-router";
import { runFreshnessWatch } from "@/lib/freshness";

/**
 * Callable FreshnessWatch run. Read-only by design: it reports outcomes and
 * change candidates, and never publishes a value. Approval remains human.
 * No scheduler is configured in this project, so this endpoint must be
 * invoked manually or by an external scheduler.
 */
export const Route = createFileRoute("/api/public/freshness-refresh")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const token = process.env["FRESHNESS_REFRESH_TOKEN"];
        if (token && request.headers.get("x-freshness-token") !== token) {
          return new Response("Unauthorized", { status: 401 });
        }

        const url = new URL(request.url);
        const platformParam = url.searchParams.get("platform");
        const platform =
          platformParam === "JEE" || platformParam === "NEET" || platformParam === "NDA"
            ? platformParam
            : undefined;

        const outcomes = await runFreshnessWatch(platform);
        return Response.json({
          ranAt: new Date().toISOString(),
          scheduler: "SCHEDULER_NOT_CONFIGURED",
          published: false,
          outcomes,
        });
      },
    },
  },
});
