import Image from "next/image";
import type { Post } from "@/lib/types";
import { getAllPosts } from "@/lib/api";

export default async function () {
  const posts: Post[] = await getAllPosts();
  return (
    <>
      <h1>Hi, I'm David Morrow</h1>
      <figure>
        <Image
          src="/images/mt-hood.jpg"
          alt="Mt Hood above Cloud Cap"
          width={1200}
          height={250}
        />
        <figcaption>Mt Hood above Cloud Cap</figcaption>
      </figure>

      <p>
        This site is a collection of articles I have written about tech
        challenges that I have encountered, or things that are just interesting
        to me. I hope you find something useful or inspirational. Thanks for
        reading. The exciting part of being a developer is the problem solving.
        I love being confronted with a problem, and having to figure out a
        managable solution. These posts are documenting some of the process to
        some extent.
      </p>
    </>
  );
}
