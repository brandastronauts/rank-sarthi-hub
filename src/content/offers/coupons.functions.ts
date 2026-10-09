import { createServerFn } from "@tanstack/react-start";

/**
 * Public coupons as a server function: during SSR it runs in-process (no
 * loopback HTTP), and during a client-side navigation it is called over RPC,
 * so visitors' browsers share the server's cached copy of the three APIs.
 */
export const listPublicCouponsFn = createServerFn({ method: "GET" }).handler(async () => {
  const { fetchPublicCoupons } = await import("@/server/public-coupons");
  return fetchPublicCoupons();
});
