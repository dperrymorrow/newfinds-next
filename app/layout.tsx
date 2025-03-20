import "@/app/styles/vars.css";
import "@/app/styles/layout.css";
import "@/app/styles/markdown.css";
import "@/app/styles/responsive.css";

import type { Post } from "@/app/lib/types";

import Head from "next/head";
import Nav from "@/app/components/nav";
import { getAllPosts } from "@/app/lib/api";
import { gaId } from "@/app/lib/consts";
import { GoogleAnalytics } from "@next/third-parties/google";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts: Post[] = await getAllPosts();

  return (
    <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <main>{children}</main>
        <aside>
          <Nav posts={posts} />
        </aside>
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
