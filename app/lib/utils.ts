import slugify from "slugify";
import type { Post } from "./types";

export function getSlug(post: Post): string {
  return slugify(post.title, { lower: true, strict: true });
}

export function getLinkForArticle(post: Post): string {
  return `/articles/${getSlug(post)}`;
}
