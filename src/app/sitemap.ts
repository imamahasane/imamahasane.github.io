import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/mdx";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const staticRoutes = [
  "",
  "/research",
  "/publications",
  "/projects",
  "/teaching",
  "/achievements",
  "/blog",
  "/cv",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const postRoutes = getPostSlugs().map((slug) => `/blog/${slug}`);

  return [...staticRoutes, ...postRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
