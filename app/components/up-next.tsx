import type { JSX } from "react";
import Link from "next/link";
import { getLinkForArticle } from "@/app/lib/utils";
import { getAllPosts } from "@/app/lib/api";
import type { Post } from "@/app/lib/types";
import "@/app/styles/up-next.css";

type Props = {
  postId: number;
};

const shuffle = (arr: Post[]): Post[] => arr.sort(() => Math.random() - 0.5);

export default async function UpNext({ postId }: Props): Promise<JSX.Element> {
  const posts: Post[] = await getAllPosts();
  const filtered = posts.filter(({ id }) => id !== postId);
  const randomPosts = shuffle(filtered).slice(0, 3);

  return (
    <div className="up-next">
      <h2>Keep Reading:</h2>
      <ul>
        {randomPosts.map((post) => (
          <li key={post.id}>
            <Link key={post.id} href={getLinkForArticle(post)}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
