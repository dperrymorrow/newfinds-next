import slugify from "slugify";
import type { Post } from "./types";

export function getSlug(post: Post): string {
  return slugify(post.title, { lower: true, strict: true });
}

export function getLink(post: Post): string {
  return `/${post.id}/${getSlug(post)}`;
}
