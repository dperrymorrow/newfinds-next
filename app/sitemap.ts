import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { getLinkForArticle } from "@/lib/utils";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return posts
    .map((post) => ({
      url: process.env.BASE_URL + getLinkForArticle(post),
      lastModified: new Date(),
      priority: 1,
    }))
    .concat([
      {
        url: process.env.BASE_URL + "/",
        lastModified: new Date(),
        priority: 0.5,
      },
      {
        url: process.env.BASE_URL + "/about",
        lastModified: new Date(),
        priority: 0.5,
      },
    ]);
}
