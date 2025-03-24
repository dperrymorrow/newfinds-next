import type { Post, PostDetails } from "@/app/lib/types";
import type { Metadata } from "next";
import type { JSX } from "react";

import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import { getAllPosts, getComments, getPostBySlug } from "@/app/lib/api";
import Header from "@/app/components/header";
import UpNext from "@/app/components/up-next";
import Comments from "@/app/components/comments";

import "highlight.js/styles/github-dark.css";
import "@/app/styles/syntax.css";

type Params = {
  slug: string;
};

type DynamicArgs = {
  params: Promise<Params>;
};

export async function generateStaticParams(): Promise<Params[]> {
  const posts: Post[] = await getAllPosts();
  return posts.map((post: Post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: DynamicArgs): Promise<Metadata> {
  const { slug } = await params;
  const post: PostDetails = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Page({ params }: DynamicArgs): Promise<JSX.Element> {
  const { slug } = await params;
  const post: PostDetails = await getPostBySlug(slug);
  const comments = await getComments(post.id);

  return (
    <>
      <Header post={post} imgSrc={post.cover_image} title={post.title} />

      <article className="md">
        <Markdown rehypePlugins={[rehypeHighlight]}>{post.body_markdown}</Markdown>
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
