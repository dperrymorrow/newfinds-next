import { Post, PostDetails } from "./types";

export async function getAllPosts(): Promise<Post[]> {
  const res: Response = await fetch(
    `https://dev.to/api/articles?username=${process.env.USERNAME}&page=1&per_page=100`,
  );
  const posts: Post[] = await res.json();
  return posts;
}

export async function getPostById(id: string): Promise<PostDetails> {
  const res: Response = await fetch(`https://dev.to/api/articles/${id}`);
  const details: PostDetails = await res.json();
  return details;
}
