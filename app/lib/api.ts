import { Post, PostDetails, Comment } from "./types";
import { username } from "./consts";

export async function getAllPosts(): Promise<Post[]> {
  const res: Response = await fetch(`https://dev.to/api/articles?username=${username}`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getPostBySlug(slug: string): Promise<PostDetails> {
  const res: Response = await fetch(`https://dev.to/api/articles/${username}/${slug}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function getComments(postId: number): Promise<Comment[]> {
  const res: Response = await fetch(`https://dev.to/api/comments?a_id=${postId}`, {
    cache: "no-store",
  });
  return res.json();
}
