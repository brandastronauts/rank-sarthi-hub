import { describe, expect, it } from "vitest";
import { booksForExam, publisher, publisherBooks } from "@/content/publisher";

describe("approved publisher catalogue", () => {
  it("features exactly four books for each approved exam", () => {
    expect(booksForExam("jee")).toHaveLength(4);
    expect(booksForExam("neet")).toHaveLength(4);
    expect(publisherBooks).toHaveLength(8);
    expect(publisherBooks.some((book) => String(book.exam) === "nda")).toBe(false);
  });
  it("keeps the general publisher site but no book-specific shopping links", () => {
    expect(publisher.website).toBe("https://www.shribalajibooks.com/");
    for (const book of publisherBooks) expect("url" in book).toBe(false);
  });
});