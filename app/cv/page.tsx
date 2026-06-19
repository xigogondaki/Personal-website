import type { Metadata } from "next";

export const metadata: Metadata = { title: "CV" };

export default function CV() {
  return (
    <div className="page-grid pt-8 pb-32">
      {/* ── Page header ───────────────────────────────── */}
      <div className="rule mb-8 pt-3 flex justify-between">
        <span className="t-caption">Curriculum Vitae</span>
        <span className="t-caption text-muted">02</span>
      </div>

      {/* ── Name / title ─────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 mb-20">
        <div>
          <h1 className="t-headline mb-4">Your Name</h1>
          <p className="t-body text-muted">
            Designer & Creative Director — Brand, Digital, Editorial
          </p>
        </div>
        <div className="flex flex-col justify-end gap-1">
          <a
            href="/cv.pdf"
            className="t-caption link-underline self-start md:self-end"
            download
          >
            Download PDF →
          </a>
        </div>
      </div>

      {/* ── Experience ───────────────────────────────── */}
      <CVSection title="Experience">
        {experience.map((role) => (
          <CVRow key={role.company + role.period} {...role} />
        ))}
      </CVSection>

      {/* ── Education ────────────────────────────────── */}
      <CVSection title="Education">
        {education.map((entry) => (
          <CVRow key={entry.company + entry.period} {...entry} />
        ))}
      </CVSection>

      {/* ── Recognition ──────────────────────────────── */}
      <CVSection title="Recognition">
        {awards.map((entry) => (
          <CVRow key={entry.company + entry.period} {...entry} />
        ))}
      </CVSection>

      {/* ── Skills ───────────────────────────────────── */}
      <CVSection title="Skills & Tools">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
          {skillGroups.map(({ group, items }) => (
            <div key={group} className="bg-paper py-6 pr-8 flex flex-col gap-3">
              <span className="t-caption">{group}</span>
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li key={item} className="t-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CVSection>
    </div>
  );
}

function CVSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div className="rule mb-8 pt-3">
        <span className="t-caption">{title}</span>
      </div>
      {children}
    </section>
  );
}

function CVRow({
  role,
  company,
  period,
  location,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets?: string[];
}) {
  return (
    <div className="rule pt-6 pb-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
      {/* Left: meta */}
      <div className="flex flex-col gap-1">
        <span className="t-caption">{period}</span>
        {location && (
          <span className="t-caption text-muted">{location}</span>
        )}
      </div>

      {/* Right: content */}
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="t-title">{role}</h3>
          <p className="t-body text-muted">{company}</p>
        </div>
        {bullets && bullets.length > 0 && (
          <ul className="flex flex-col gap-1">
            {bullets.map((b) => (
              <li key={b} className="t-body flex gap-3">
                <span className="text-muted shrink-0">—</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ── Data ──────────────────────────────────────────── */

const experience = [
  {
    role: "Founder & Creative Director",
    company: "Studio Your Name",
    period: "2019 — Present",
    location: "[City]",
    bullets: [
      "Lead brand strategy and visual identity for clients across technology, culture, and finance sectors.",
      "Manage a studio of four designers and external collaborators.",
      "Developed identities for 30+ organisations across 12 countries.",
    ],
  },
  {
    role: "Design Director",
    company: "[Previous Studio]",
    period: "2015 — 2019",
    location: "[City]",
    bullets: [
      "Directed the brand team responsible for flagship client accounts.",
      "Introduced a systems-led design methodology adopted studio-wide.",
      "Mentored a team of eight junior and mid-level designers.",
    ],
  },
  {
    role: "Senior Designer",
    company: "[Agency Name]",
    period: "2012 — 2015",
    location: "[City]",
    bullets: [
      "Led visual identity projects from concept through to production.",
      "Specialised in print and editorial design systems.",
    ],
  },
  {
    role: "Designer",
    company: "[First Job]",
    period: "2010 — 2012",
    location: "[City]",
  },
];

const education = [
  {
    role: "MA Communication Design",
    company: "[University Name]",
    period: "2008 — 2010",
    location: "[City]",
  },
  {
    role: "BA Graphic Design",
    company: "[University Name]",
    period: "2005 — 2008",
    location: "[City]",
  },
];

const awards = [
  {
    role: "D&AD Yellow Pencil",
    company: "Brand Identity — [Project Name]",
    period: "2023",
  },
  {
    role: "Cannes Lions Gold",
    company: "Design — [Project Name]",
    period: "2022",
  },
  {
    role: "Brand New Award, Best Redesign",
    company: "[Project Name]",
    period: "2021",
  },
  {
    role: "Type Directors Club Certificate",
    company: "Typography Excellence",
    period: "2020",
  },
];

const skillGroups = [
  {
    group: "Design",
    items: ["Brand Identity", "Art Direction", "Editorial Design", "Motion Design", "Environmental"],
  },
  {
    group: "Digital",
    items: ["UI / UX", "Design Systems", "Interaction Design", "Prototyping"],
  },
  {
    group: "Tools",
    items: ["Figma", "Adobe CC", "Sketch", "After Effects", "Framer"],
  },
];
