import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Head from "next/head";

import type { Post, PostDetails } from "@/lib/types";

import { getSlug } from "@/lib/utils";
import { getAllPosts, getPostById } from "@/lib/api";

import "@/app/styles/markdown.css";
import "@/app/styles/syntax.css";

type Params = {
  id: string;
  slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  const posts: Post[] = await getAllPosts();

  return posts.map((post: Post) => {
    return { id: post.id.toString(), slug: getSlug(post) };
  });
}

export default async function ({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const post: PostDetails = await getPostById(id);

  const image: React.ReactNode | null = post.cover_image ? (
    <figure>
      <img src={post.cover_image} />
    </figure>
  ) : null;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>

      <header>
        <h1>
          <small>
            <span>{post.readable_publish_date}</span>
            <span className="likes">♥ {post.positive_reactions_count}</span>
          </small>
          {post.title}
        </h1>
        {image}
      </header>

      <article className="md">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {post.body_markdown}
        </Markdown>
      </article>
    </>
  );
}
