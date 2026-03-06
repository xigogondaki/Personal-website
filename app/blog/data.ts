export interface Post {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  body: string; // Plain text / markdown-like content
}

export const posts: Post[] = [
  {
    slug: "on-restraint-in-design",
    title: "On Restraint in Design",
    date: "Feb 2025",
    dateISO: "2025-02-14",
    readingTime: "6 min",
    tags: ["Design Philosophy", "Process"],
    excerpt:
      "The most powerful design decisions are often the ones that say no. Exploring why removal is harder — and more rewarding — than addition.",
    body: `There is a particular satisfaction in watching a design become better as things are taken away. Not in the lazy sense — deletion for its own sake, the minimalism of timidity — but in the disciplined sense: removing something and watching everything else resolve into greater clarity.

This is restraint as intelligence, not restraint as fear.

The instinct to add is natural. When a client asks for something 'stronger', or a brief calls for 'impact', the default move is to reach for more: bolder weight, higher contrast, an additional element to carry meaning. Rarely does the solution actually lie in that direction.

**The economy of means**

Mies van der Rohe's 'less is more' is so often cited as to have become meaningless — a slogan for an aesthetic preference rather than a working principle. But the underlying logic is precise: economy of means produces concentration of effect. When everything earns its place, nothing dilutes anything else.

In type, this shows up as tracking. A widely-spaced word in all-caps carries authority not because of what's there, but because the space itself communicates deliberateness — slowness, precision, confidence. The space is doing the work.

**Learning to see what isn't there**

The hardest skill in design is learning to read negative space as actively as positive form. Not just in the formal sense — though this matters, and grid-based European design of the 1960s understood it better than almost anything before or since — but in the conceptual sense.

What is the brand not saying? What does it refuse to be? The shape of a restraint is often more distinctive than the things it permits.

**Practical consequences**

When I encounter a design that feels busy, my first question is always: what is this trying to do? Usually the answer reveals that several unrelated things are being asked of the same space, and they are cancelling each other out.

The solution is almost never to make more room for all of them. It is to choose.

Choosing is uncomfortable because it implies accepting the loss of the unchosen. But that loss is usually smaller than it feels. What you keep, once the rest is gone, has room to breathe.`,
  },
  {
    slug: "the-grid-as-liberation",
    title: "The Grid as Liberation",
    date: "Jan 2025",
    dateISO: "2025-01-22",
    readingTime: "8 min",
    tags: ["Typography", "Systems"],
    excerpt:
      "The grid is not a cage. It is the structure that makes genuine freedom of expression possible without dissolution into chaos.",
    body: `There is a persistent misunderstanding of the grid in design discourse — that it represents constraint, rigidity, the subordination of creative impulse to mechanical order. This is precisely backwards.

The grid is not a cage. It is the structure that makes genuine freedom of expression possible without dissolution into chaos.

**Josef Müller-Brockmann understood this**

When Müller-Brockmann developed his grid systems in 1950s Zurich, he was not trying to produce conformity. He was trying to produce communication — which requires that the viewer's attention not be wasted on deciphering where to look. The grid does this invisible work so that the content can do the visible work.

His concert posters — some of the most emotionally compelling graphic work of the twentieth century — are built on rigid geometric structures. The expressiveness comes not despite the structure but through it.

**Freedom within constraint**

The grid provides a set of consistent relationships — column widths, baseline intervals, margins — from which an infinite variety of compositions can be made. Two designers working from the same grid will produce entirely different results, because the grid specifies positions, not decisions.

This is analogous to the iambic pentameter in poetry. The constraint is severe: ten syllables, alternating stress, per line. But Shakespeare and Keats and Seamus Heaney all used it to entirely different effect. The form is not the expression; it enables the expression.

**Applying this**

When I begin a project, I spend a disproportionate amount of time on the grid before I place a single element. The questions — how many columns? what baseline? what margins? — are not neutral. They encode a theory about the content's nature: how much of it there is, how it relates, how the reader will encounter it.

Getting this right means that every subsequent decision has a foundation. Getting it wrong means that every subsequent decision is a negotiation between the content and a structure that doesn't fit it.

The grid, when designed rather than defaulted to, is one of the most expressive tools available to a designer. The tragedy is how often it is treated as a technical requirement rather than a conceptual one.`,
  },
  {
    slug: "helvetica-and-its-discontents",
    title: "Helvetica and Its Discontents",
    date: "Dec 2024",
    dateISO: "2024-12-05",
    readingTime: "10 min",
    tags: ["Typography", "History"],
    excerpt:
      "Sixty-five years after its release, Helvetica remains the most celebrated and most maligned typeface in existence. What does that ambivalence reveal?",
    body: `Helvetica was released by the Haas Type Foundry in 1957 under the name Neue Haas Grotesk. It was designed by Max Miedinger and Eduard Hoffmann, with the intention of producing a neutral grotesque — a typeface that would carry meaning without imposing its own.

Sixty-five years later, it remains both the most celebrated and most maligned typeface in existence. Almost everyone who uses type professionally has an opinion about it. Most of those opinions are strong.

**The case for Helvetica**

Its proponents argue that Helvetica's apparent neutrality is actually its greatest achievement. A typeface that refuses to insist on its own personality allows content to breathe. The forms are so resolved — the curve of the 'a', the tail of the 'l', the slightly closed apertures — that they become invisible in use.

This invisibility is extraordinarily difficult to achieve. Most typefaces, however well-designed, have ticks and tells that assert themselves. Helvetica, at its best, simply gets out of the way.

**The case against**

Its critics — and they include some of the finest typographers working today — point to precisely this quality as the problem. Neutrality, they argue, is a myth. Helvetica's specific neutrality, shaped by its mid-century Swiss context, encodes a worldview: rationalist, egalitarian, slightly bureaucratic. These are values, not the absence of values.

There is also the question of ubiquity. A typeface that appears on street signs, corporate reports, airline liveries, and protest banners has accumulated so many contexts that no single use of it can be truly neutral. Every setting of Helvetica is in conversation with all the other settings.

**What the ambivalence reveals**

I think the Helvetica debate is less about the typeface than about the idea of neutrality in design — whether it is desirable, whether it is achievable, and whether striving for it produces better or worse communication.

My view: Helvetica is a magnificent tool, but it requires more skill to use well than is commonly assumed. Its apparent neutrality conceals how many decisions it has already made for you. The designer who chooses it without thought has not achieved neutrality — they have inherited someone else's assumptions.

Use it with eyes open. Use it knowing what it carries. Then it can do what it does better than almost anything else.`,
  },
  {
    slug: "the-brief-is-not-the-problem",
    title: "The Brief Is Not the Problem",
    date: "Nov 2024",
    dateISO: "2024-11-18",
    readingTime: "5 min",
    tags: ["Process", "Client Work"],
    excerpt:
      "Why the design brief is a starting point for inquiry, not a specification to execute — and what happens when designers forget that.",
    body: `Every design project begins with a brief. The brief describes what the client wants, the audience they're trying to reach, the problem they believe they have. It is a document produced by people who know their organisation from the inside, written for a designer who is seeing it from the outside for the first time.

This asymmetry is the source of most of the interesting work.

**The brief as hypothesis**

The brief is not a specification. It is a hypothesis — the client's best current understanding of the problem. That hypothesis is usually partially correct and sometimes significantly wrong.

The wrong answer is to ignore this and execute the brief as written. The right answer is to treat the brief as the beginning of a diagnostic process.

**Asking the question behind the question**

A client who asks for a new logo usually has a problem that goes beyond the logo. The logo is the visible symptom of something — a mismatch between how the organisation sees itself and how the world sees it, or a changing audience that the current identity doesn't speak to, or an aspiration that the existing materials can't carry.

The designer's first job is to find that underlying problem. Only then does the brief make sense.

This requires conversations that can feel uncomfortable — asking a client why they want what they've asked for, or suggesting that the stated problem might not be the actual problem. Done poorly, this feels adversarial. Done well, it is the most valuable thing a designer can offer.

**The brief as relationship**

A brief is also a document of trust — the client is telling you what they believe and what they care about. Taking that seriously means engaging with it genuinely, including engaging with its limits.

The clients I have worked with most successfully are the ones who understood that the brief was an opening, not a closing. They were willing to have their assumptions challenged in service of a better outcome.

That willingness, on both sides, is where good work comes from.`,
  },
  {
    slug: "colour-before-colour",
    title: "Colour Before Colour",
    date: "Oct 2024",
    dateISO: "2024-10-30",
    readingTime: "7 min",
    tags: ["Colour", "Process"],
    excerpt:
      "Why the best colour decisions in design are made before any colour is specified — and what working in greyscale first really teaches you.",
    body: `I design in greyscale for as long as possible. This is not an affectation or a nostalgia for early software. It is a method.

Colour is the most immediately affecting visual property. It communicates before form, before type, often before content. This makes it invaluable — and dangerous to reach for too early.

**What greyscale reveals**

When you strip colour out of a design, you are left with its structural properties: proportion, weight, hierarchy, rhythm. If these don't work in greyscale, they won't work in colour. Colour can intensify and nuance a structure, but it cannot create one.

The greyscale phase is diagnostic. It tells you whether the composition is resolving — whether the eye is being led through the space in the right order, whether the hierarchy of information is clear, whether the spatial relationships are comfortable.

Only when those things are working is colour useful to introduce.

**Choosing with precision**

When I do introduce colour, I try to treat each colour as a decision rather than a preference. The question is not 'what colour do I like' but 'what is this colour doing'.

Colour carries association — not fixed, not universal, but real. Cultural, historical, contextual. A colour that reads as luxurious in one context reads as cold in another. Understanding this requires knowing something about the audience, the medium, the competitive context.

It also requires understanding colour relationships. A colour that works alone may not work in combination. The interaction is everything.

**The paradox of restraint**

A palette of one or two colours, used with precision, almost always outperforms a palette of five or six used loosely. Restriction forces intentionality, and intentionality produces impact.

The most memorable identities are usually built on a single colour decision — so precise, so appropriate, that it could not have been anything else. That precision is not luck. It is the product of having waited until you knew what the work needed before you decided what to give it.`,
  },
];
