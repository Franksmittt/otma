import type { MetadataRoute } from "next";
import { SITE, SUBURBS } from "@/lib/site-config";
import { getAllSlugs } from "@/lib/blog-posts";

const BASE = SITE.url;

/** Static routes with optional priority and changeFrequency */
const STATIC_ROUTES: { path: string; priority?: number; changeFrequency?: "yearly" | "monthly" | "weekly" | "daily" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/quote", priority: 0.95, changeFrequency: "monthly" },
  { path: "/quote/inventory", priority: 0.7, changeFrequency: "monthly" },
  { path: "/quote/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/track", priority: 0.8, changeFrequency: "monthly" },
  { path: "/insurance", priority: 0.85, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.7, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.85, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/house-removals", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/long-distance", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/packing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/cleaning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/storage", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/crate-rentals", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/pet-relocation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/vehicle-transport", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority = 0.8, changeFrequency = "monthly" } of STATIC_ROUTES) {
    entries.push({
      url: path ? `${BASE}${path}` : BASE,
      lastModified: now,
      changeFrequency,
      priority,
    });
  }

  const blogSlugs = getAllSlugs();
  for (const slug of blogSlugs) {
    entries.push({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    });
  }

  for (const { slug } of SUBURBS) {
    entries.push({
      url: `${BASE}/movers-in/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    });
  }

  return entries;
}
