import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.falcaobarbearia.online";
  const pages = [
    "/",
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
