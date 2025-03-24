import type { Post } from "@/app/lib/types";
import type { JSX } from "react";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/api";
import "@/app/styles/recent-posts.css";

export default async function RecentPosts(): Promise<JSX.Element> {
  const posts: Post[] = await getAllPosts();
  const recentPosts = posts.slice(0, 5);
  return (
    <div className="md recent-posts">
      <h2>Recent Posts</h2>
      {recentPosts.map((post) => (
        <h3 key={post.id}>
          <Link href={`/articles/${post.slug}`}>{post.title}</Link>
          <small>{post.description}</small>
        </h3>
      ))}
    </div>
  );
}
