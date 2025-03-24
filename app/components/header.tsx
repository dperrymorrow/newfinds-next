import "@/app/styles/header.css";
import { PostDetails } from "@/app/lib/types";
import { JSX } from "react";

type Props = {
  imgSrc: string | null;
  post?: PostDetails;
  title: string;
  caption?: string;
  children?: JSX.Element;
};

export default function Header({ imgSrc, post, title, caption, children }: Props): JSX.Element {
  const image: React.ReactNode | null = imgSrc ? (
    <figure>
      <img src={imgSrc} width={1000} height={420} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  ) : null;

  const meta = post ? (
    <small>
      <span>{post.readable_publish_date}</span>
      <span className="likes">♥ {post.positive_reactions_count}</span>
    </small>
  ) : null;

  return (
    <header>
      <h1>
        {meta}
        {title}
      </h1>
      {image}
      {children}
    </header>
  );
}
