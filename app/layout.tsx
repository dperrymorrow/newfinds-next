import "@picocss/pico";
import "@/app/styles/vars.css";
import "@/app/styles/global.css";
import "@/app/styles/nav.css";

import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

import type { Post } from "@/lib/types";
import { getLink } from "@/lib/utils";
import { getAllPosts } from "@/lib/api";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts: Post[] = await getAllPosts();

  return (
    <html>
      <Head>
        <title>My Website</title>
        <meta name="description" content="My Website Description" />
      </Head>

      <body>
        <main>{children}</main>

        <aside className="nav">
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              {posts.map((post: Post) => (
                <li key={post.id}>
                  <Link href={getLink(post)}>{post.title}</Link>
                  {post.tag_list.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  {post.positive_reactions_count}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </body>
    </html>
  );
}
