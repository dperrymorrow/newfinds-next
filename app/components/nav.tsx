"use client";
import type { Post } from "@/app/lib/types";
import type { JSX } from "react";
import { getLinkForArticle } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/styles/nav.css";
import { useState } from "react";

export default function Nav({ posts }: { posts: Post[] }): JSX.Element {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const staticLinks = [
    { path: "/", label: "Root" },
    { path: "/about", label: "About" },
    { path: "/Morrow-Resume.pdf", label: "Resume", target: "_blank" },
  ];

  const articleLinks = posts.map((post: Post) => ({
    path: getLinkForArticle(post),
    label: post.title,
  }));

  return (
    <nav className={isOpen ? "open" : "closed"}>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </button>

      <ul onClick={() => setIsOpen(false)}>
        {staticLinks.map(({ path, label, target }) => (
          <li key={path}>
            <Link
              target={target || "_self"}
              href={path}
              className={path === pathname ? "active" : ""}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ul onClick={() => setIsOpen(false)}>
        {articleLinks.map(({ path, label }) => (
          <li key={path}>
            <Link href={path} className={path === pathname ? "active" : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
