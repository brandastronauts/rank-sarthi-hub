export const INSTITUTE_PATHS = ["/institutes", "/institutes/pricing", "/institutes/case-studies", "/institutes/request-demo"] as const;
export type InstitutePath = (typeof INSTITUTE_PATHS)[number];
export const INSTITUTE_REDIRECTS: Record<string, InstitutePath> = {
  "/for-institutes": "/institutes",
  "/for-institutes/pricing": "/institutes/pricing",
  "/for-institutes/case-studies": "/institutes/case-studies",
  "/for-institutes/demo": "/institutes/request-demo",
};
export function instituteRedirect(path: string): InstitutePath | undefined {
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