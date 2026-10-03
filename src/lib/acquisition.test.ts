import { describe, expect, it } from "vitest";
import { buildRankUpHandoff } from "./acquisition";

describe("RankUp diagnostic handoff", () => {
  it("preserves inbound campaign attribution and adds separate Rank Sarthi fields", () => {
    const url = new URL(buildRankUpHandoff({
      exam: "jee",
      search: "?utm_source=google&utm_campaign=jee_search&gclid=abc123",
      entryPath: "/jee/jee-main?ignored=yes",
      cta: "hero",
    }));

    expect(url.origin).toBe("https://jeerankup.com");
    expect(url.searchParams.get("utm_source")).toBe("google");
    expect(url.searchParams.get("utm_campaign")).toBe("jee_search");
    expect(url.searchParams.get("gclid")).toBe("abc123");
    expect(url.searchParams.get("rs_source")).toBe("ranksarthi");
    expect(url.searchParams.get("rs_exam")).toBe("jee");
    expect(url.searchParams.get("rs_entry_path")).toBe("/jee/jee-main");
    expect(url.searchParams.get("rs_cta")).toBe("hero");
  });

  it("maps each exam to its owned product", () => {
    const origins = (["jee", "neet", "nda"] as const).map((exam) =>
      new URL(buildRankUpHandoff({ exam, entryPath: "/", cta: "final" })).origin,
    );
    expect(origins).toEqual(["https://jeerankup.com", "https://neetrankup.com", "https://ndarankup.com"]);
  });

  it("does not forward personal or unknown query parameters", () => {
    const url = new URL(buildRankUpHandoff({
      exam: "neet",
      search: "?email=student%40example.com&phone=9999999999&name=Student&coupon=private",
      entryPath: "/",
      cta: "mobile_sticky",
    }));
    expect(url.searchParams.has("email")).toBe(false);
    expect(url.searchParams.has("phone")).toBe(false);
    expect(url.searchParams.has("name")).toBe(false);
    expect(url.searchParams.has("coupon")).toBe(false);
  });

  it("normalises rs_cta to the controlled vocabulary", () => {
    const cta = (c: string) => new URL(buildRankUpHandoff({ exam: "jee", entryPath: "/", cta: c })).searchParams.get("rs_cta");
    expect(cta("mobile_sticky")).toBe("sticky");
    expect(cta("final_cta")).toBe("final");
    expect(cta("mobile_menu")).toBe("header");
    expect(cta("pricing")).toBe("pricing");
    expect(cta("anything_else")).toBe("section");
  });

  it("keeps Google UTMs intact alongside Rank Sarthi fields", () => {
    const url = buildRankUpHandoff({ exam: "jee", search: "?utm_source=google&utm_campaign=jee_search", entryPath: "/jee", cta: "hero" });
    expect(url).toBe("https://jeerankup.com/?utm_source=google&utm_campaign=jee_search&rs_source=ranksarthi&rs_exam=jee&rs_entry_path=%2Fjee&rs_cta=hero");
  });
});

