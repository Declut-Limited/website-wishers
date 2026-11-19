import type { MetadataRoute } from "next";

// Open to search engines, and points them at the sitemap. (Cloudflare adds its own AI-bot rules
// on top of this file.)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://wishers.com.ng/sitemap.xml",
  };
}
