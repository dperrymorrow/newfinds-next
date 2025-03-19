import type { JSX } from "react";
import Link from "next/link";
import { getLinkForArticle } from "@/app/lib/utils";
import { getAllPosts } from "@/app/lib/api";
import type { Post } from "@/app/lib/types";
import "@/app/styles/up-next.css";

type Props = {
  postId: number;
};

export default async function UpNext({ postId }: Props): Promise<JSX.Element> {
  const posts: Post[] = await getAllPosts();
  const filtered = posts.filter(({ id }) => id !== postId);

  const randomIndex = () => Math.floor(Math.random() * filtered.length);
  const randomPosts = [randomIndex(), randomIndex(), randomIndex()].map(
    (index) => filtered[index],
  );

  return (
    <div className="up-next">
      <h2>Keep Reading:</h2>
      <ul>
        {randomPosts.map((post) => (
          <li>
            <Link key={post.id} href={getLinkForArticle(post)}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
