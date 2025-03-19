import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Head from "next/head";

import type { Post, PostDetails } from "@/app/lib/types";
import type { JSX } from "react";
import { getSlug } from "@/app/lib/utils";
import { getAllPosts, getComments, getPostBySlug } from "@/app/lib/api";
import Header from "@/app/components/header";
import UpNext from "@/app/components/up-next";
import Comments from "@/app/components/comments";

import "highlight.js/styles/github-dark.css";
import "@/app/styles/syntax.css";

type Params = {
  slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  const posts: Post[] = await getAllPosts();

  return posts.map((post: Post) => {
    return {
      slug: getSlug(post),
    };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const post: PostDetails = await getPostBySlug(slug);
  const comments = await getComments(post.id);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>

      <Header post={post} imgSrc={post.cover_image} title={post.title} />

      <article className="md">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {post.body_markdown}
        </Markdown>

        <UpNext postId={post.id} />
      </article>

      <footer>
        <div className="comments md">
          <h2>Comments ({comments.length})</h2>
          <Comments comments={comments} />
        </div>
      </footer>
    </>
  );
}
