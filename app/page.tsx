import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name — Designer & Creative Director",
};

export default function Home() {
  return (
    <div className="page-grid">
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="min-h-[88vh] flex flex-col justify-end pb-16 pt-8">
        <div className="rule mb-8" />
        <h1 className="t-display mb-12">
          Your<br />Name
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="t-body max-w-sm text-ink/60">
            Designer & Creative Director specialising in brand identity,
            digital experience, and typographic systems. Based in [City].
          </p>
          <div className="flex flex-col gap-2 items-start md:items-end">
            <span className="t-caption">Available for select projects</span>
            <Link
              href="mailto:hello@yourname.com"
              className="t-caption text-ink link-underline"
            >
              hello@yourname.com
            </Link>
          </div>
        </div>
      </section>

      {/* ── Selected work ─────────────────────────────── */}
      <section className="mt-24">
        <div className="rule mb-8 flex justify-between pt-3">
          <span className="t-caption">Selected Work</span>
          <Link href="/case-studies" className="t-caption link-underline">
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      {/* ── Marquee strip ─────────────────────────────── */}
      <section className="mt-24 overflow-hidden">
        <div className="rule mb-6" />
        <div className="flex gap-16 animate-none whitespace-nowrap text-muted t-caption py-4">
          {["Brand Identity", "Art Direction", "Typography", "Digital Design", "Editorial", "Motion", "Strategy", "Systems Thinking"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="rule mt-6" />
      </section>

      {/* ── Latest writing ────────────────────────────── */}
      <section className="mt-24">
        <div className="rule mb-8 flex justify-between pt-3">
          <span className="t-caption">Latest Writing</span>
          <Link href="/blog" className="t-caption link-underline">
            All posts →
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-rule">
          {latestPosts.map((post) => (
            <article key={post.slug} className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <Link
                href={`/blog/${post.slug}`}
                className="t-title link-underline max-w-xl"
              >
                {post.title}
              </Link>
              <span className="t-caption shrink-0">{post.date}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  slug,
  title,
  category,
  year,
}: {
  slug: string;
  title: string;
  category: string;
  year: string;
}) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group bg-paper p-8 flex flex-col justify-between min-h-[280px] hover:bg-ink transition-colors duration-300"
    >
      <span className="t-caption text-muted group-hover:text-paper/40 transition-colors">
        {category}
      </span>
      <div>
        <h3 className="t-title mb-2 group-hover:text-paper transition-colors">
          {title}
        </h3>
        <span className="t-caption group-hover:text-paper/40 transition-colors">
          {year}
        </span>
      </div>
    </Link>
  );
}

const featuredProjects = [
  { slug: "atlas-rebrand", title: "Atlas Global Rebrand", category: "Brand Identity", year: "2024" },
  { slug: "meridian-digital", title: "Meridian Digital Platform", category: "UX / Digital", year: "2024" },
  { slug: "forma-editorial", title: "Forma Editorial System", category: "Typography", year: "2023" },
];

const latestPosts = [
  { slug: "on-restraint-in-design", title: "On Restraint in Design", date: "Feb 2025" },
  { slug: "the-grid-as-liberation", title: "The Grid as Liberation", date: "Jan 2025" },
  { slug: "helvetica-and-its-discontents", title: "Helvetica and Its Discontents", date: "Dec 2024" },
];
