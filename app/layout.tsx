import "@/app/styles/vars.css";
import "@/app/styles/layout.css";
import "@/app/styles/markdown.css";
import "@/app/styles/responsive.css";

import type { Post } from "@/app/lib/types";

import Nav from "@/app/components/nav";
import { getAllPosts } from "@/app/lib/api";
import { gaId } from "@/app/lib/consts";
import { GoogleAnalytics } from "@next/third-parties/google";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const posts: Post[] = await getAllPosts();
  const allTags = posts.map((post: Post) => post.tag_list).flat();

  return (
    <html>
      <body>
        <main>{children}</main>
        <aside>
          <Nav posts={posts} tags={[...new Set(allTags)]} />
        </aside>
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
