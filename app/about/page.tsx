import RecentPosts from "@/app/components/recent-posts";
import Header from "@/app/components/header";
import Head from "next/head";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Head>
        <title>About Me, David Morrow</title>
        <meta
          name="description"
          content="I am David Morrow, a developer with a eye for design."
        />
      </Head>
      <Header
        imgSrc="/images/st-helens.jpg"
        title="About Me"
        caption="Mt. St Helens at sunrise"
      >
        <Image
          src="/images/david-morrow.jpg"
          alt="David Morrow"
          className="headshot"
          width={200}
          height={200}
        />
      </Header>

      <article className="md">
        <p>
          When asked to describe my skill set, and what differentiates me from
          other developers, I often answer with I'm a developer with a eye for
          design.
        </p>
        <p>
          I bring a high level of detail to UI that I build. Having started my
          career as a Graphic Designer, I feel I have a knack for building great
          UI, and collaborate well with designers and art direction. I love
          building well thought out UI. I have extensive experience with Data
          Visualization, dashboards, single page Javascript applications and
          more. I strive for clean, tested client side Javascript, and love
          working full stack in Node on occasion. I get the most satisfaction
          from solving complex problems with simple solutions.
        </p>
        <p>
          When I am not working on projects or tinkering with open source. I
          like to backpack in the cascades, work on my bonsai collection, shop
          for vinyl, and play electric guitar. You can read more about my
          experience and skills on my resume.
        </p>
      </article>
      <footer>
        <RecentPosts />
      </footer>
    </>
  );
}
