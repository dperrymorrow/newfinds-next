import { Post, PostDetails, Comment } from "./types";
import { getSlug } from "./utils";
import { username } from "./consts";

export async function getAllPosts(): Promise<Post[]> {
  const res: Response = await fetch(
    `https://dev.to/api/articles?username=${username}&page=1&per_page=100`,
  );
  return await res.json();
}

export async function getComments(postId: number): Promise<Comment[]> {
  const res: Response = await fetch(
    `https://dev.to/api/comments?a_id=${postId}`,
  );
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<PostDetails> {
  const posts: Post[] = await getAllPosts();
  const { id } = posts.find((post) => getSlug(post) === slug) || posts[0];
  const res: Response = await fetch(`https://dev.to/api/articles/${id}`);
  return res.json();
}
