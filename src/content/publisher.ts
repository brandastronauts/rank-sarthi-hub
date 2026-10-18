/** Publisher-approved selection; artwork remains absent until genuine assets are supplied. */
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
  url: string;
  sourceImageUrl: string;
  /** Never substitute AI artwork or an unrelated cover. */
  cover?: { url: string; width: number; height: number };
}

export const publisherBooks: PublisherBook[] = [
  { id: "jee-organic", exam: "jee", title: "Advanced Problems in Organic Chemistry for JEE", author: "M. S. Chouhan", edition: "20th edition · 2026–27", url: "https://www.shribalajibooks.com/product/advanced-problems-in-organic-chemistry-for-jee/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Advanced-Problems-in-Organic-Chemistry-for-JEE.jpg" },
  { id: "jee-physical", exam: "jee", title: "Problems in Physical Chemistry for JEE", author: "Narendra Avasthi", edition: "19th edition · 2026–27", url: "https://www.shribalajibooks.com/product/problems-in-physical-chemistry-for-jee/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Problems-in-Physical-Chemistry-for-JEE.jpg" },
  { id: "jee-inorganic", exam: "jee", title: "Problems in Inorganic Chemistry for JEE", author: "V. K. Jaiswal", edition: "19th edition · 2026–27", url: "https://www.shribalajibooks.com/product/problems-in-inorganic-chemistry-for-jee/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Problems-in-Inorganic-Chemistry-for-JEE.jpg" },
  { id: "jee-mathematics", exam: "jee", title: "Advanced Problems in Mathematics for JEE", author: "Vikas Gupta and Pankaj Joshi", edition: "12th edition · 2026–27", url: "https://www.shribalajibooks.com/product/advanced-problems-in-mathematics-for-jee/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2026/04/Advanced-Problems-in-Mathematics-for-JEE.jpg" },
  { id: "neet-organic", exam: "neet", title: "Elementary Problems in Organic Chemistry for NEET", author: "M. S. Chouhan", edition: "14th edition", url: "https://www.shribalajibooks.com/product/elementary-problems-in-organic-chemistry-neet/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2020/09/Elementary-Problems-in-Organic-Chemistry-for-NEET.jpeg" },
  { id: "neet-physical", exam: "neet", title: "Problems in Physical Chemistry for NEET", author: "Narendra Avasthi", edition: "12th edition", url: "https://www.shribalajibooks.com/product/problems-in-physical-chemistry-for-neet/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2020/09/Problems-in-Physical-Chemistry-for-NEET.jpeg" },
  { id: "neet-inorganic", exam: "neet", title: "Problems in Inorganic Chemistry for NEET", author: "V. K. Jaiswal", edition: "9th edition", url: "https://www.shribalajibooks.com/product/problems-in-inorganic-chemistry-neet/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2020/09/Problems-in-Inorganic-Chemistry-for-NEET.jpeg" },
  { id: "neet-physics", exam: "neet", title: "Logical & Conceptual Physics for NEET — Volume 1", author: "Mohit Agrawal (MA Sir)", edition: "5th edition · 2026–27", url: "https://www.shribalajibooks.com/product/logical-conceptual-physics-for-neet-vol-1/", sourceImageUrl: "https://www.shribalajibooks.com/wp-content/uploads/2021/08/Logical-Conceptual-Physics-for-NEET-1.jpeg" },
];

export function booksForExam(exam: BookExam) {
  return publisherBooks.filter((book) => book.exam === exam);
}