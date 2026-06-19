import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./data";

export const metadata: Metadata = { title: "Work" };

export default function CaseStudies() {
  return (
    <div className="page-grid pt-8 pb-32">
      {/* ── Page header ───────────────────────────────── */}
      <div className="rule mb-8 pt-3 flex justify-between">
        <span className="t-caption">Selected Work</span>
        <span className="t-caption text-muted">03</span>
      </div>

      <h1 className="t-headline mb-20 max-w-2xl">
        Projects at the intersection of strategy, identity, and craft.
      </h1>

      {/* ── Filter tabs (static labels) ───────────────── */}
      <div className="flex gap-6 mb-12 flex-wrap">
        {["All", "Brand Identity", "Digital", "Editorial", "Strategy"].map((f) => (
          <span
            key={f}
            className={`t-caption cursor-default ${f === "All" ? "text-ink" : "text-muted"}`}
          >
            {f}
          </span>
        ))}
      </div>

      {/* ── Project list ──────────────────────────────── */}
      <div className="flex flex-col divide-y divide-rule">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/case-studies/${p.slug}`}
            className="group py-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-12 items-baseline hover:bg-paper transition-colors"
          >
            <span className="t-caption text-muted w-8">{String(i + 1).padStart(2, "0")}</span>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
              <h2 className="t-title group-hover:translate-x-1 transition-transform duration-200">
                {p.title}
              </h2>
              <span className="t-caption text-muted">{p.category}</span>
            </div>
            <span className="t-caption text-muted">{p.year}</span>
          </Link>
        ))}
      </div>

      {/* ── Grid view ─────────────────────────────────── */}
      <div className="mt-24">
        <div className="rule mb-8 pt-3">
          <span className="t-caption">Featured</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              href={`/case-studies/${p.slug}`}
              className="group bg-paper relative overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-rule flex items-center justify-center relative">
                <span className="t-caption text-muted">{p.title}</span>
                <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              {/* Caption */}
              <div className="p-6 flex justify-between items-baseline">
                <span className="t-body">{p.title}</span>
                <span className="t-caption text-muted">{p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
