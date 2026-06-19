import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "../data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post?.title ?? "Post" };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const currentIndex = posts.indexOf(post);
  const next = posts[currentIndex + 1];

  // Simple paragraph parser
  const paragraphs = post.body
    .split("\n\n")
    .filter(Boolean)
    .map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <h3 key={i} className="t-title mt-10 mb-3 font-normal">
            {block.replace(/\*\*/g, "")}
          </h3>
        );
      }
      return (
        <p key={i} className="t-body mb-5">
          {block.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
    });

  return (
    <div className="page-grid pt-8 pb-32">
      {/* ── Breadcrumb ────────────────────────────────── */}
      <div className="rule mb-8 pt-3 flex justify-between items-baseline">
        <Link href="/blog" className="t-caption link-underline">
          ← Writing
        </Link>
        <span className="t-caption text-muted">{post.readingTime} read</span>
      </div>

      {/* ── Header ────────────────────────────────────── */}
      <div className="max-w-3xl mb-16">
        <div className="flex flex-wrap gap-3 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="t-caption border border-rule px-3 py-1 text-muted">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="t-headline mb-6">{post.title}</h1>
        <p className="t-body text-muted">{post.excerpt}</p>
        <div className="flex gap-6 mt-6">
          <span className="t-caption text-muted">{post.date}</span>
          <span className="t-caption text-muted">{post.readingTime}</span>
        </div>
      </div>

      <div className="rule mb-12" />

      {/* ── Body ──────────────────────────────────────── */}
      <div className="max-w-2xl">{paragraphs}</div>

      <div className="rule mt-16 mb-12" />

      {/* ── Next post ─────────────────────────────────── */}
      {next ? (
        <div>
          <span className="t-caption text-muted block mb-6">Next</span>
          <Link
            href={`/blog/${next.slug}`}
            className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:opacity-70 transition-opacity"
          >
            <h2 className="t-title max-w-xl">{next.title}</h2>
            <span className="t-caption shrink-0">→</span>
          </Link>
        </div>
      ) : (
        <Link href="/blog" className="t-caption link-underline">
          ← All posts
        </Link>
      )}
    </div>
  );
}
