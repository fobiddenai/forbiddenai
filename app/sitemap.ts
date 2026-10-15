import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/approach", "/about", "/contact"];
  const toolPaths = [{ path: "/tools/erd-forge", freq: "weekly" as const, priority: 0.9 }];

  return [
    ...paths.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.7,
    })),
    ...toolPaths.map(({ path, freq, priority }) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
    })),
  ];
}
