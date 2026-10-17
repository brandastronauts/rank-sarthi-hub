export const INSTITUTE_PATHS = ["/institutes"] as const;
export type InstitutePath = (typeof INSTITUTE_PATHS)[number];
export const INSTITUTE_REDIRECTS: Record<string, string> = {
  "/for-institutes": "/institutes",
  "/for-institutes/pricing": "/institutes#quote",
  "/for-institutes/case-studies": "/institutes#scenarios",
  "/for-institutes/demo": "/institutes#demo",
  "/institutes/pricing": "/institutes#quote",
  "/institutes/case-studies": "/institutes#scenarios",
  "/institutes/request-demo": "/institutes#demo",
};
export function instituteRedirect(path: string): string | undefined {
  return INSTITUTE_REDIRECTS[path.replace(/\/+$/, "")];
}
// No env/browser override: reviewed activation follows recipient read-back
// verification and separate production approval.
export const INSTITUTE_INTAKE = {
  recipientConfirmed: false,
  receivingProcessVerified: false,
  productionActivationApproved: false,
} as const;
export function instituteIntakeReady(state: { recipientConfirmed: boolean; receivingProcessVerified: boolean; productionActivationApproved: boolean }): boolean {
  return state.recipientConfirmed && state.receivingProcessVerified && state.productionActivationApproved;
}
export function instituteRedirectLocation(path: string, search: string): string | undefined {
  const destination = instituteRedirect(path);
  if (!destination) return;
  const [base, anchor] = destination.split("#");
  return `${base}${search}${anchor ? `#${anchor}` : ""}`;
}
