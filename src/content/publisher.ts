import jeeOrganic from "@/assets/books/jee-organic.webp";
import jeePhysical from "@/assets/books/jee-physical.webp";
import jeeInorganic from "@/assets/books/jee-inorganic.webp";
import jeeMathematics from "@/assets/books/jee-mathematics.webp";
import neetOrganic from "@/assets/books/neet-organic.webp";
import neetPhysical from "@/assets/books/neet-physical.webp";
import neetPhysics from "@/assets/books/neet-physics.webp";

/** Publisher-approved selection shown as recommended reading — no book-specific shopping links. Artwork remains absent until genuine assets are supplied. */
export const publisher = {
  name: "Shri Balaji Publications",
  website: "https://www.shribalajibooks.com/",
  logoSourceUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/SBJ-Balaji-Logo.jpg",
  assetUseApproval: "pending" as const,
};

export type BookExam = "jee" | "neet";
export interface PublisherBook {
  id: string;
  exam: BookExam;
  title: string;
  author: string;
  edition: string;
  sourceImageUrl: string;
  /** Never substitute AI artwork or an unrelated cover. */
  cover?: { url: string; width: number; height: number };
}

export const publisherBooks: PublisherBook[] = [
  { id: "jee-organic", exam: "jee", title: "Advanced Problems in Organic Chemistry for JEE", author: "M. S. Chouhan", edition: "20th edition · 2026–27", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Advanced-Problems-in-Organic-Chemistry-for-JEE.jpg", cover: { url: jeeOrganic, width: 780, height: 1000 } },
  { id: "jee-physical", exam: "jee", title: "Problems in Physical Chemistry for JEE", author: "Narendra Avasthi", edition: "19th edition · 2026–27", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Problems-in-Physical-Chemistry-for-JEE.jpg", cover: { url: jeePhysical, width: 759, height: 1000 } },
  { id: "jee-inorganic", exam: "jee", title: "Problems in Inorganic Chemistry for JEE", author: "V. K. Jaiswal", edition: "19th edition · 2026–27", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Problems-in-Inorganic-Chemistry-for-JEE.jpg", cover: { url: jeeInorganic, width: 744, height: 1000 } },
  { id: "jee-mathematics", exam: "jee", title: "Advanced Problems in Mathematics for JEE", author: "Vikas Gupta and Pankaj Joshi", edition: "12th edition · 2026–27", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Advanced-Problems-in-Mathematics-for-JEE.jpg", cover: { url: jeeMathematics, width: 780, height: 1000 } },
  { id: "neet-organic", exam: "neet", title: "Elementary Problems in Organic Chemistry for NEET", author: "M. S. Chouhan", edition: "14th edition", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2020/09/Elementary-Problems-in-Organic-Chemistry-for-NEET.jpeg", cover: { url: neetOrganic, width: 792, height: 1000 } },
  { id: "neet-physical", exam: "neet", title: "Problems in Physical Chemistry for NEET", author: "Narendra Avasthi", edition: "12th edition", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2020/09/Problems-in-Physical-Chemistry-for-NEET.jpeg", cover: { url: neetPhysical, width: 792, height: 1000 } },
  { id: "neet-inorganic", exam: "neet", title: "Problems in Inorganic Chemistry for NEET", author: "V. K. Jaiswal", edition: "9th edition", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2020/09/Problems-in-Inorganic-Chemistry-for-NEET.jpeg" },
  { id: "neet-physics", exam: "neet", title: "Logical & Conceptual Physics for NEET — Volume 1", author: "Mohit Agrawal (MA Sir)", edition: "5th edition · 2026–27", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2021/08/Logical-Conceptual-Physics-for-NEET-1.jpeg", cover: { url: neetPhysics, width: 780, height: 1000 } },
];

export function booksForExam(exam: BookExam) {
  return publisherBooks.filter((book) => book.exam === exam);
}