import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cartoos.co.uk";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/menu`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/private-dining`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
