import type { Person } from "./types";

/**
 * Real, verified people only. Empty until identities and credentials are
 * confirmed. Author / reviewer UI and JSON-LD author properties are omitted
 * entirely while this registry is empty — never placeholder-filled.
 */
export const people: Record<string, Person> = {};

export function getPerson(id?: string): Person | undefined {
  if (!id) return undefined;
  const person = people[id];
  return person?.verified ? person : undefined;
}
