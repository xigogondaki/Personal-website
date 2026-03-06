import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./data";

export const metadata: Metadata = { title: "Writing" };

export default function Blog() {
  return (
    <div className="page-grid pt-8 pb-32">
      {/* ── Page header ───────────────────────────────── */}
      <div className="rule mb-8 pt-3 flex justify-between">
        <span className="t-caption">Writing</span>
        <span className="t-caption text-muted">04</span>
      </div>

      <h1 className="t-headline mb-4 max-w-xl">
        Notes on design, process, and practice.
      </h1>
      <p className="t-body text-muted mb-20 max-w-md">
        Published irregularly. No newsletter. No algorithm. Just writing.
      </p>

      {/* ── Tags */}
      <div className="flex flex-wrap gap-3 mb-12">
        {allTags(posts).map((tag) => (
          <span key={tag} className="t-caption border border-rule px-3 py-1 text-muted">
            {tag}
          </span>
        ))}
      </div>

      {/* ── Post list ─────────────────────────────────── */}
      <div className="flex flex-col divide-y divide-rule">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group py-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-12 items-start hover:opacity-80 transition-opacity"
          >
            <span className="t-caption text-muted w-8 pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex flex-col gap-3">
              <h2 className="t-title group-hover:translate-x-1 transition-transform duration-200">
                {post.title}
              </h2>
              <p className="t-body text-muted max-w-prose">{post.excerpt}</p>
              <div className="flex gap-3 flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className="t-caption text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="t-caption text-muted">{post.date}</span>
              <span className="t-caption text-muted">{post.readingTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function allTags(posts: typeof import("./data").posts) {
  const seen = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => seen.add(t)));
  return Array.from(seen);
}
