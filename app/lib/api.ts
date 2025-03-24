import { Post, PostDetails, Comment } from "./types";
import { username } from "./consts";

export async function getAllPosts(): Promise<Post[]> {
  const res: Response = await fetch(
    `https://dev.to/api/articles?username=${username}&page=1&per_page=100`,
  );

  const data = await res.json();
  return data;
}

export async function getPostBySlug(slug: string): Promise<PostDetails> {
  const res: Response = await fetch(`https://dev.to/api/articles/${username}/${slug}`);
  return res.json();
}

export async function getComments(postId: number): Promise<Comment[]> {
  const res: Response = await fetch(`https://dev.to/api/comments?a_id=${postId}`);
  return res.json();
}
