import Header from "@/app/components/header";
import RecentPosts from "./components/recent-posts";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>David Morrow</title>
        <meta
          name="description"
          content="Technical articles about Javascript development"
        />
      </Head>
      <Header
        imgSrc="/images/hood.jpg"
        title="Hi, I'm David Morrow"
        caption="Mt. Hood at sunrise"
      />

      <article className="md">
        <p>
          This site is a collection of articles I have written about tech
          challenges that I have encountered, or things that are just
          interesting to me.
        </p>
        <p>
          I hope you find something useful or inspirational. Thanks for reading.
          The exciting part of being a developer is the problem solving. I love
          being confronted with a problem, and having to figure out a managable
          solution. These posts are documenting some of the process to some
          extent.
        </p>
      </article>

      <footer>
        <RecentPosts />
      </footer>
    </>
  );
}
