import { describe, expect, it } from "vitest";
import { site } from "@/content/site";
import { company } from "@/content/company";

describe("legal entity", () => {
  it("uses the registered company name everywhere it is configured", () => {
    expect(site.legalName).toBe("RANKSARTHI- NEW GEN PRIVATE LIMITED");
    expect(company.legalName).toBe("RANKSARTHI- NEW GEN PRIVATE LIMITED");
  });
});
