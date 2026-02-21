export type Product = {
  id: string;
  name: string;
  category: string;
  priceSAR: number;
  likes: number;
};

export type StlFile = {
  id: string;
  title: string;
  theme: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  downloads: number;
};

export const products: Product[] = [
  { id: "p1", name: "Sourdough Loaf", category: "Bread", priceSAR: 28, likes: 54 },
  { id: "p2", name: "Pistachio Babka", category: "Sweet Bread", priceSAR: 34, likes: 47 },
  { id: "p3", name: "Chocolate Basque Cheesecake", category: "Dessert", priceSAR: 44, likes: 72 },
  { id: "p4", name: "Date Cookies Box", category: "Cookies", priceSAR: 26, likes: 39 },
];

export const stlLibrary: StlFile[] = [
  { id: "s1", title: "Eid Crescent Cutter", theme: "Eid", difficulty: "Beginner", downloads: 220 },
  { id: "s2", title: "Floral Medallion Set", theme: "Wedding", difficulty: "Intermediate", downloads: 156 },
  { id: "s3", title: "Arabic Letter Tiles", theme: "Custom", difficulty: "Advanced", downloads: 93 },
  { id: "s4", title: "Mini Cupcake Topper", theme: "Birthday", difficulty: "Beginner", downloads: 301 },
];

export const communityHighlights = [
  {
    title: "Weekly Bake Challenge",
    detail: "Share your best lamination layers and get community votes.",
  },
  {
    title: "Tool Swap Thread",
    detail: "Exchange tips and cookie cutter designs with nearby bakers.",
  },
  {
    title: "Mentorship Circle",
    detail: "Senior bakers give 1:1 feedback for newcomers every Friday.",
  },
];

export const profile = {
  name: "Sara Al-Khaled",
  handle: "@sara.bakes",
  city: "Riyadh",
  bio: "Home baker focused on modern Arabic desserts and custom cookie art.",
  stats: [
    { label: "Products", value: 12 },
    { label: "Followers", value: 1840 },
    { label: "STL Uploads", value: 19 },
  ],
};
