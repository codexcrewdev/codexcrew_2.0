
import type { MetadataRoute } from "next";

const BASE_URL = "https://codexcrew.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      route: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      route: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/technology",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/digital-growth",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/products",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/industries",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/careers",
      priority: 0.6,
      changeFrequency: "monthly" as const,
    },
    {
      route: "/contact",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.route}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
