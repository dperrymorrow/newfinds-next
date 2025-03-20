import RecentPosts from "@/app/components/recent-posts";
import Header from "@/app/components/header";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found :("</title>
      </Head>
      <Header title="404 - Not Found :(" imgSrc="/images/canyon.jpg" />
      <footer>
        <RecentPosts />
      </footer>
    </>
  );
}
