export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  services: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "atlas-rebrand",
    title: "Atlas Global Rebrand",
    category: "Brand Identity",
    year: "2024",
    client: "Atlas Global",
    services: ["Brand Strategy", "Visual Identity", "Design System"],
    summary:
      "A comprehensive identity overhaul for a multinational consulting group entering new markets, requiring a mark that could operate confidently across thirty languages.",
    challenge:
      "Atlas had grown through acquisition, resulting in a fragmented portfolio of sub-brands with no coherent parent identity. The new system needed to unite six business units without erasing the equity built in each.",
    solution:
      "We developed a modular identity anchored by a custom typeface — a geometric sans-serif with proportions calibrated for both Latin and CJK scripts. The mark distils the brand's navigation metaphor into a precise, directional form that reads at any scale.",
    outcome:
      "Launched across 28 markets simultaneously. Brand recognition increased 34% in aided recall studies within the first quarter. The system was adopted internally by 2,400 employees with zero deviation.",
  },
  {
    slug: "meridian-digital",
    title: "Meridian Digital Platform",
    category: "UX / Digital",
    year: "2024",
    client: "Meridian",
    services: ["UX Design", "Design System", "Prototyping"],
    summary:
      "A ground-up redesign of a fintech platform serving 500,000 users, focused on reducing cognitive load and increasing task completion rates.",
    challenge:
      "Meridian's existing platform had accumulated years of feature additions without a unifying design language. Users abandoned key flows at a rate of 62%, and support tickets cited confusion as the primary issue.",
    solution:
      "We introduced a strict information hierarchy and a unified component library of 140 elements. Navigation was restructured around user goals rather than internal product taxonomy. A neutral-to-confident tone replaced the dense, jargon-heavy copy throughout.",
    outcome:
      "Task completion rates increased to 91%. Support tickets fell 40%. Net Promoter Score moved from +12 to +61 in six months post-launch.",
  },
  {
    slug: "forma-editorial",
    title: "Forma Editorial System",
    category: "Typography / Editorial",
    year: "2023",
    client: "Forma Magazine",
    services: ["Editorial Design", "Typography", "Art Direction"],
    summary:
      "An editorial identity and print system for a new bi-annual design journal, establishing a distinctive voice through type and structure alone.",
    challenge:
      "Forma needed to establish authority in a crowded design publishing space, with no photography budget for the launch issue and a production timeline of ten weeks.",
    solution:
      "We chose constraint as the concept: an identity built entirely from typographic elements. A custom modular grid, an exclusive type pairing of a 19th century grotesque with a contemporary serif, and a strict four-column structure give every page a coherent, confident voice.",
    outcome:
      "Forma's first issue sold out within three weeks. It was included in Print Magazine's Regional Design Annual and the AIGA's 50 Books 50 Covers selection.",
  },
  {
    slug: "vantage-brand",
    title: "Vantage Brand Identity",
    category: "Brand Identity",
    year: "2023",
    client: "Vantage Capital",
    services: ["Brand Strategy", "Visual Identity", "Stationery"],
    summary:
      "A precise and restrained identity for a boutique private equity firm seeking to differentiate through understatement rather than spectacle.",
    challenge:
      "The financial sector's visual language defaults to either traditional conservatism or aggressive modernism. Vantage wanted neither — they sought an identity as considered as their investment thesis.",
    solution:
      "The identity hinges on proportion and material quality. A single-weight monogram, set in a custom-spaced Didone, becomes the primary brand mark. The supporting palette — warm grey, cream, and deep navy — is expressed exclusively through high-quality print materials.",
    outcome:
      "Vantage reported that the identity played a significant role in three new client relationships, each citing brand presentation as a differentiating factor in initial meetings.",
  },
  {
    slug: "open-city-wayfinding",
    title: "Open City Wayfinding",
    category: "Environmental",
    year: "2022",
    client: "Open City Foundation",
    services: ["Wayfinding", "Signage Design", "Typography"],
    summary:
      "A wayfinding system for a major urban cultural district, designed to guide 4 million annual visitors across 1.2 square kilometres.",
    challenge:
      "The district had grown organically around a historic core, resulting in a confusing network of spaces, passages, and venues. Existing signage was inconsistent, inaccessible, and frequently incorrect.",
    solution:
      "We mapped desire paths and actual visitor behaviour before designing a single sign. The resulting system uses three scales of intervention — landmark, neighbourhood, and point-of-interest — each with a distinct typographic voice that maintains legibility at distance and in motion.",
    outcome:
      "Visitor surveys showed a 28-point improvement in wayfinding satisfaction. The system received a RIBA Award for Architecture and was shortlisted for a D&AD Pencil.",
  },
  {
    slug: "solstice-packaging",
    title: "Solstice Packaging System",
    category: "Packaging",
    year: "2022",
    client: "Solstice Botanicals",
    services: ["Packaging Design", "Brand Identity", "Illustration Direction"],
    summary:
      "A cohesive packaging system across 24 SKUs for an independent botanical beauty brand entering mass retail for the first time.",
    challenge:
      "Solstice's handcrafted, direct-to-consumer identity needed to survive retail scale without losing the intimacy that built its cult following.",
    solution:
      "We retained the hand-drawn illustration style — now standardised into a flexible system of botanical motifs — and introduced a structural packaging architecture that creates unity across the range while allowing individual product personalities to emerge.",
    outcome:
      "Solstice's retail launch exceeded first-year sales projections by 180%. The packaging was featured in Wallpaper* and Dezeen's design reviews.",
  },
];
