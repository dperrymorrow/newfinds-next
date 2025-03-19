import type { JSX } from "react";
import type { Comment } from "@/app/lib/types";
import { stripHtml } from "string-strip-html";
import Image from "next/image";
import "@/app/styles/comments.css";

type Props = {
  comments: Comment[];
};

export default function Comments({ comments }: Props): JSX.Element {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id_code}>
          <h4>
            <Image
              src={comment.user.profile_image_90}
              alt={comment.user.name}
              width={48}
              height={48}
            />
            {comment.user.name}
          </h4>
          <p>{stripHtml(comment.body_html).result}</p>
          {comment.children.length ? (
            <Comments comments={comment.children} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
