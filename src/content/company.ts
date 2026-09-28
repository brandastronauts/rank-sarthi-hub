/** Approved public company contact details. Single source of truth. */
export const company = {
  legalName: "Rank Sarthi Next Gen Private Limited",
  addressLines: ["Flat No. F2, Harihar Apartments,", "New Mangalapuri,", "New Delhi – 110030,", "India"],
  streetAddress: "Flat No. F2, Harihar Apartments, New Mangalapuri",
  locality: "New Delhi",
  postalCode: "110030",
  country: "IN",
  phoneDisplay: "+91 75068 59750",
  phoneHref: "tel:+917506859750",
  email: "info@ranksarthi.com",
  mapQuery: "Harihar Apartments, New Mangalapuri, New Delhi 110030, India",
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;
