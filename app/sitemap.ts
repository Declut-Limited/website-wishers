import type { MetadataRoute } from "next";

const SITE = "https://wishers.com.ng";

// The public pages Google should index (served at /sitemap.xml).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/featured`, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms-of-use`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
