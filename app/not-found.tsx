import RecentPosts from "@/app/components/recent-posts";
import Header from "@/app/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not Found :(",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Header title="404 - Not Found :(" imgSrc="/images/canyon.jpg" />
      <footer>
        <RecentPosts />
      </footer>
    </>
  );
}
