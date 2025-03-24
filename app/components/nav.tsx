"use client";
import type { Post } from "@/app/lib/types";
import type { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/styles/nav.css";
import { useState } from "react";

type Params = {
  posts: Post[];
  tags: string[];
};

function intersects(arr1: string[], arr2: string[]): boolean {
  const matches = arr1.filter((value) => arr2.includes(value));
  return matches.length > 0;
}

export default function Nav({ posts, tags }: Params): JSX.Element {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const staticLinks = [
    { path: "/", label: "Root" },
    { path: "/about", label: "About" },
    { path: "/Morrow-Resume.pdf", label: "Resume", target: "_blank" },
  ];

  const articleLinks = posts
    .filter((post) => !selectedTags.length || intersects(post.tag_list, selectedTags))
    .map((post: Post) => ({
      path: `/articles/${post.slug}`,
      label: post.title,
    }));

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  return (
    <nav className={isOpen ? "open" : "closed"}>
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </button>

      <ul className="static-links" onClick={() => setIsOpen(false)}>
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

      <ul>
        <li className="tag-list">
          <span
            className={!selectedTags.length ? "tag active" : "tag"}
            onClick={() => setSelectedTags([])}
          >
            Show All
          </span>
          {tags.map((tag: string) => (
            <span
              className={selectedTags.includes(tag) ? "tag active" : "tag"}
              onClick={() => toggleTag(tag)}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </li>
        {articleLinks.map(({ path, label }) => (
          <li key={path} onClick={() => setIsOpen(false)}>
            <Link href={path} className={path === pathname ? "active" : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
