import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { blogPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const routes = ["", "/work", "/industries", "/blog", "/process", "/about", "/faq", "/start"];
const industryRoutes = industries.map((i) => `/industries/${i.slug}`);
const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...routes, ...industryRoutes, ...blogRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/start"
        ? 0.9
        : route.startsWith("/industries/") || route.startsWith("/blog/")
        ? 0.6
        : 0.7,
  }));
}
