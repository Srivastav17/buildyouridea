import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const routes = ["", "/work", "/industries", "/process", "/about", "/faq", "/start"];
const industryRoutes = industries.map((i) => `/industries/${i.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...routes, ...industryRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/start" ? 0.9 : route.startsWith("/industries/") ? 0.6 : 0.7,
  }));
}
