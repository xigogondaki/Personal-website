import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project?.title ?? "Project" };
}

export default function CaseStudy({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.indexOf(project);
  const next = projects[currentIndex + 1] ?? projects[0];

  return (
    <div className="page-grid pt-8 pb-32">
      {/* ── Breadcrumb ────────────────────────────────── */}
      <div className="rule mb-8 pt-3 flex justify-between items-baseline">
        <Link href="/case-studies" className="t-caption link-underline">
          ← Work
        </Link>
        <span className="t-caption text-muted">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 mb-24">
        <div>
          <span className="t-caption text-muted block mb-4">{project.category}</span>
          <h1 className="t-headline">{project.title}</h1>
        </div>
        <div className="flex flex-col justify-end gap-3">
          {[
            { label: "Client", value: project.client },
            { label: "Year", value: project.year },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between border-b border-rule pb-3">
              <span className="t-caption">{label}</span>
              <span className="t-caption text-ink">{value}</span>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.services.map((s) => (
              <span key={s} className="t-caption border border-rule px-3 py-1">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Image placeholder ─────────────────────────── */}
      <div className="w-full aspect-[16/9] bg-rule mb-24 flex items-center justify-center relative">
        <span className="t-caption text-muted">Project Image</span>
        <span className="absolute top-4 left-4 w-8 h-8 border-t border-l border-ink/20" />
        <span className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-ink/20" />
      </div>

      {/* ── Summary ───────────────────────────────────── */}
      <div className="max-w-3xl mb-24">
        <p className="t-title text-ink/80 leading-relaxed">{project.summary}</p>
      </div>

      {/* ── Three-section narrative ───────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule mb-24">
        {[
          { label: "Challenge", body: project.challenge },
          { label: "Solution", body: project.solution },
          { label: "Outcome", body: project.outcome },
        ].map(({ label, body }) => (
          <div key={label} className="bg-paper p-8 flex flex-col gap-6">
            <span className="t-caption">{label}</span>
            <p className="t-body">{body}</p>
          </div>
        ))}
      </div>

      {/* ── Gallery placeholder ───────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-rule mb-24">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-rule aspect-square flex items-center justify-center"
          >
            <span className="t-caption text-muted">Image {i + 1}</span>
          </div>
        ))}
      </div>

      {/* ── Next project ──────────────────────────────── */}
      <div className="rule pt-8">
        <span className="t-caption text-muted block mb-8">Next Project</span>
        <Link
          href={`/case-studies/${next.slug}`}
          className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:opacity-70 transition-opacity"
        >
          <h2 className="t-headline">{next.title}</h2>
          <span className="t-caption">→</span>
        </Link>
      </div>
    </div>
  );
}
