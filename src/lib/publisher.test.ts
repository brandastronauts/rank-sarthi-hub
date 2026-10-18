import { describe, expect, it } from "vitest";
import { booksForExam, publisher, publisherBooks } from "@/content/publisher";

describe("approved publisher catalogue", () => {
  it("features exactly four books for each approved exam", () => {
    expect(booksForExam("jee")).toHaveLength(4);
    expect(booksForExam("neet")).toHaveLength(4);
    expect(publisherBooks).toHaveLength(8);
    expect(publisherBooks.some((book) => String(book.exam) === "nda")).toBe(false);
  });
  it("keeps every book destination on the official publisher", () => {
    expect(publisher.website).toBe("https://www.shribalajibooks.com/");
    expect(publisherBooks.map((book) => new URL(book.url).origin)).toEqual(Array(8).fill("https://www.shribalajibooks.com"));
    expect(new Set(publisherBooks.map((book) => book.url)).size).toBe(8);
  });
});