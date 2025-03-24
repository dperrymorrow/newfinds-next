import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/lib/api";

export const dynamic = "force-static";
import { baseUrl } from "./lib/consts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return posts
    .map((post) => ({
      url: baseUrl + `/articles/${post.slug}`,
      lastModified: new Date(),
      priority: 1,
    }))
    .concat([
      {
        url: baseUrl + "/",
        lastModified: new Date(),
        priority: 0.5,
      },
      {
        url: baseUrl + "/about",
        lastModified: new Date(),
        priority: 0.5,
      },
    ]);
}
