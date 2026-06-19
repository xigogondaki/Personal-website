import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <div className="page-grid pt-8 pb-32">
      {/* ── Page header ───────────────────────────────── */}
      <div className="rule mb-8 pt-3 flex justify-between">
        <span className="t-caption">About</span>
        <span className="t-caption text-muted">01</span>
      </div>

      {/* ── Two-column hero ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 mb-24">
        {/* Portrait placeholder */}
        <div className="aspect-[3/4] bg-rule relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="t-caption text-muted">Portrait</span>
          </div>
          {/* Decorative corner marks */}
          <span className="absolute top-4 left-4 w-8 h-8 border-t border-l border-ink/20" />
          <span className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-ink/20" />
        </div>

        {/* Bio block */}
        <div className="flex flex-col justify-between py-4">
          <div>
            <h1 className="t-headline mb-12">
              Designing with<br />
              discipline and<br />
              intention.
            </h1>
            <div className="flex flex-col gap-5 t-body max-w-prose">
              <p>
                I am a designer and creative director with over a decade of
                experience shaping visual identities, digital platforms, and
                communication systems for companies at the intersection of
                culture, commerce, and technology.
              </p>
              <p>
                My practice is rooted in Swiss typographic tradition — the
                belief that rigorous structure, when applied with sensitivity,
                produces work that is both beautiful and precise. I am drawn
                to problems where clarity matters: complex organisations
                finding coherent voice, digital products earning trust through
                craft.
              </p>
              <p>
                Before founding my studio, I served as Design Director at
                [Studio / Company], and prior to that at [Company]. I
                have collaborated with institutions across Europe and the US,
                from cultural foundations to technology firms.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3">
            <div className="rule pt-4 grid grid-cols-2 gap-4">
              {[
                { label: "Based in", value: "[City, Country]" },
                { label: "Available", value: "Select projects" },
                { label: "Contact", value: "hello@yourname.com" },
                { label: "Languages", value: "English, [Other]" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="t-caption">{label}</span>
                  <span className="t-body">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Approach ─────────────────────────────────── */}
      <section className="mb-24">
        <div className="rule mb-8 pt-3">
          <span className="t-caption">Approach</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
          {approach.map(({ number, title, body }) => (
            <div key={number} className="bg-paper p-8 flex flex-col gap-6">
              <span className="t-caption text-muted">{number}</span>
              <h3 className="t-title">{title}</h3>
              <p className="t-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Clients ───────────────────────────────────── */}
      <section>
        <div className="rule mb-8 pt-3">
          <span className="t-caption">Selected Clients</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule">
          {clients.map((client) => (
            <div key={client} className="bg-paper px-8 py-6 flex items-center">
              <span className="t-body text-muted">{client}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const approach = [
  {
    number: "01",
    title: "Research before form",
    body: "Every project begins with rigorous research — into the brand, its audience, its competitive context, and its cultural moment. Form follows only when the conceptual territory is mapped.",
  },
  {
    number: "02",
    title: "Systems, not artefacts",
    body: "Individual pieces are symptoms of the system underneath. I design the logic first: typographic hierarchy, spatial rhythm, colour relationships — then let the artefacts emerge naturally.",
  },
  {
    number: "03",
    title: "Restraint as intelligence",
    body: "The most powerful design often removes rather than adds. Reducing to essentials is the hardest and most rewarding part of the process — and where real quality lives.",
  },
];

const clients = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E",
  "Company F",
  "Company G",
  "Company H",
];
