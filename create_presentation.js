'use strict';

/**
 * NitXig 2026 Getaway — Travel Pitch Deck
 * Aesthetic: The Minories (Colchester) — warm cream, terracotta accent,
 * condensed grotesque type, atmospheric photography, refined & unhurried.
 */

const PptxGenJS = require('pptxgenjs');
const path = require('path');

// ─── DIMENSIONS ────────────────────────────────────────────────────────────
const W = 13.33;   // slide width  (inches, 16:9 wide)
const H = 7.5;     // slide height (inches)

// ─── PALETTE ───────────────────────────────────────────────────────────────
const C = {
  cream:      'F2EDE4',  // warm off-white background
  nearBlack:  '1C1C1A',  // primary text
  accent:     '8B2910',  // Minories terracotta-red sidebar
  midGray:    '8C8C8A',  // secondary / label text
  lightGray:  'DAD4CC',  // dividers, borders
  white:      'FFFFFF',

  // City accent colours — harmonised with the terracotta palette
  lisbon:     'C87B4A',  // sun-baked amber
  istanbul:   '3A7A9C',  // Bosphorus steel blue
  budapest:   '7B5E87',  // art-nouveau plum
  tbilisi:    '4A7A55',  // Georgian forest green
};

// ─── TYPOGRAPHY ────────────────────────────────────────────────────────────
const FN = 'Calibri';          // primary typeface
const FN_SERIF = 'Georgia';    // italic / accent use

// ─── IMAGE PATHS ───────────────────────────────────────────────────────────
const IMG = {
  cover:    path.join(__dirname, '_img', 'cover.jpg'),
  lisbon:   path.join(__dirname, '_img', 'lisbon.jpg'),
  istanbul: path.join(__dirname, '_img', 'istanbul.jpg'),
  budapest: path.join(__dirname, '_img', 'budapest.jpg'),
  tbilisi:  path.join(__dirname, '_img', 'tbilisi.jpg'),
};

// ─── CITY DATA ─────────────────────────────────────────────────────────────
const CITIES = [
  {
    id: 'lisbon',
    name: 'Lisbon / Porto',
    country: 'PORTUGAL',
    color: C.lisbon,
    imgKey: 'lisbon',
    tagline: 'Sun-drenched, soul-filled, effortlessly cool',
    flightBLR: '₹55,000 – 75,000',
    flightYYZ: 'CA$900 – 1,100',
    weekBLR:   '₹60,000 – 80,000',
    weekYYZ:   'CA$1,800 – 2,400',
    love: [
      'World-class specialty coffee in both cities',
      'Iconic tiled streets & miradouros for long walks',
      'Douro riverfront running — flat, scenic, perfect',
      'Natural wine bar culture (petiscos everywhere)',
      'Thriving social scene — expats & travellers mix easily',
      'Fado floats out of tiny bars at midnight',
    ],
    surprises: [
      'Porto often beats Lisbon for food & authenticity',
      'The hills are genuinely brutal — pack real shoes',
      'Pastéis de nata are a legitimate obsession',
      'October: crowds thin, golden light, lower prices',
      'Train between both cities in ~3 hours',
    ],
    wildcard: false,
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'TURKEY',
    color: C.istanbul,
    imgKey: 'istanbul',
    tagline: 'Two continents, one city, zero chill',
    flightBLR: '₹28,000 – 45,000  ★ best BLR fare',
    flightYYZ: 'CA$900 – 1,200',
    weekBLR:   '₹45,000 – 65,000',
    weekYYZ:   'CA$1,500 – 2,000',
    love: [
      'Grand Bazaar & Spice Market — full sensory overload',
      'Bosphorus waterfront — elite morning run route',
      'Incredible coffee culture (Turkish + specialty)',
      'Wine bars in Karaköy & Beyoğlu — genuinely cool',
      'Hagia Sophia, Blue Mosque, Topkapı Palace',
      'One of the world\'s most social cities',
    ],
    surprises: [
      'Cheapest flight from Bangalore of all four options',
      'October is perfect — warm but not scorching',
      'The food goes way beyond kebabs',
      'Karaköy rivals any neighbourhood in Europe for vibes',
      'Bosphorus at dawn: one of the great runner\'s rewards',
    ],
    wildcard: false,
  },
  {
    id: 'budapest',
    name: 'Budapest',
    country: 'HUNGARY',
    color: C.budapest,
    imgKey: 'budapest',
    tagline: 'Grand, gritty, gothic, gorgeous',
    flightBLR: '₹36,000 – 60,000',
    flightYYZ: 'CA$850 – 1,100  ★ best YYZ fare',
    weekBLR:   '₹40,000 – 55,000',
    weekYYZ:   'CA$1,400 – 1,900',
    love: [
      'Margaret Island — 2.5 km traffic-free running paradise',
      'Thermal bath culture is its own entire vibe',
      'Jaw-dropping architecture — Danube at night is surreal',
      'Excellent wine bars (Tokaji, Egri Bikavér)',
      'Ruin bars — unique, social, memorably chaotic',
      'Best value of the three for food & drinks',
    ],
    surprises: [
      'Cheapest week-on-the-ground of the three main picks',
      'The food scene has quietly become world-class',
      'October = harvest season + wine festivals everywhere',
      'Danube riverbank run is one of Europe\'s best',
      'Buda (hilly, scenic) vs Pest (flat, buzzy) — two cities in one',
    ],
    wildcard: false,
  },
  {
    id: 'tbilisi',
    name: 'Tbilisi',
    country: 'GEORGIA',
    color: C.tbilisi,
    imgKey: 'tbilisi',
    tagline: 'Neither East nor West — and better for it',
    flightBLR: '₹30,000 – 50,000',
    flightYYZ: 'CA$900 – 1,100',
    weekBLR:   '₹30,000 – 45,000  ★ best BLR budget',
    weekYYZ:   'CA$1,200 – 1,600  ★ best YYZ budget',
    love: [
      'Narikala fortress ridge trail — stunning morning run',
      'Georgian wine bars — oldest wine culture on Earth',
      'Thriving specialty coffee scene in the Old Town',
      'Warm, social city — expat/traveller community is real',
      'Moorish + Soviet + Baroque architecture all at once',
      'Most affordable destination on this list by a wide margin',
    ],
    surprises: [
      'The cheapest destination here — by a lot',
      'Georgian food is genuinely extraordinary (khinkali!)',
      'Natural wine here predates France by 6,000 years',
      'October is harvest season — warm, festive, beautiful',
      'The wildcard that usually becomes everyone\'s favourite',
    ],
    wildcard: true,
  },
];

// ─── HELPERS ───────────────────────────────────────────────────────────────

/** Thin vertical accent bar on the left edge */
function accentBar(slide, color) {
  slide.addShape('rect', {
    x: 0, y: 0, w: 0.2, h: H,
    fill: { color },
    line: { color, width: 0 },
  });
}

/** Cream content background (full slide) */
function creamBg(slide) {
  slide.background = { color: C.cream };
}

/** Horizontal rule */
function rule(slide, x, y, w, color) {
  slide.addShape('rect', {
    x, y, w, h: 0.018,
    fill: { color: color || C.lightGray },
    line: { color: color || C.lightGray, width: 0 },
  });
}

/** Uppercase spaced label (category / section header) */
function label(slide, text, x, y, w, color, size) {
  slide.addText(text, {
    x, y, w, h: 0.3,
    fontFace: FN,
    fontSize: size || 9,
    bold: false,
    color: color || C.midGray,
    charSpacing: 2.5,
    align: 'left',
    valign: 'middle',
  });
}

/** City name or large heading */
function heading(slide, text, x, y, w, color, size) {
  slide.addText(text, {
    x, y, w, h: 1.0,
    fontFace: FN,
    fontSize: size || 40,
    bold: true,
    color: color || C.nearBlack,
    align: 'left',
    valign: 'top',
    autoFit: true,
  });
}

/** Italic tagline */
function tagline(slide, text, x, y, w) {
  slide.addText(text, {
    x, y, w, h: 0.6,
    fontFace: FN_SERIF,
    fontSize: 13,
    italic: true,
    color: C.midGray,
    align: 'left',
    valign: 'top',
    autoFit: true,
  });
}

/** Cost/budget line with bold label + value */
function costLine(slide, icon, labelTxt, value, x, y, w, color) {
  slide.addText([
    { text: icon + '  ', options: { bold: true, color: color, fontSize: 11 } },
    { text: labelTxt + '   ', options: { bold: true, color: C.nearBlack, fontSize: 11 } },
    { text: value, options: { color: C.midGray, fontSize: 11 } },
  ], {
    x, y, w, h: 0.38,
    fontFace: FN,
    align: 'left',
    valign: 'middle',
  });
}

/**
 * Bullet item: coloured dot + text
 * Each item is a separate addText call for clean QA
 */
function bulletItem(slide, text, bx, by, bw, color) {
  // Dot
  slide.addShape('ellipse', {
    x: bx, y: by + 0.1, w: 0.09, h: 0.09,
    fill: { color },
    line: { color, width: 0 },
  });
  // Text
  slide.addText(text, {
    x: bx + 0.18, y: by, w: bw - 0.2, h: 0.52,
    fontFace: FN,
    fontSize: 11,
    color: C.nearBlack,
    align: 'left',
    valign: 'top',
    autoFit: true,
  });
}

/** Pill / badge shape with text */
function pill(slide, text, x, y, w, h, bgColor, textColor) {
  slide.addShape('roundRect', {
    x, y, w, h,
    fill: { color: bgColor },
    line: { color: bgColor, width: 0 },
    rectRadius: 0.06,
  });
  slide.addText(text, {
    x, y, w, h,
    fontFace: FN,
    fontSize: 11,
    bold: true,
    color: textColor || C.white,
    align: 'center',
    valign: 'middle',
    charSpacing: 0.5,
  });
}

/** Star rating (filled + empty) */
function stars(n, total) {
  return '★'.repeat(n) + '☆'.repeat(total - n);
}

// ─── BUILD SLIDES ──────────────────────────────────────────────────────────

async function buildPresentation() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';

  // ── SLIDE 1 — COVER ──────────────────────────────────────────────────────
  {
    const sl = pptx.addSlide();
    sl.background = { color: C.nearBlack };

    // Full-bleed background image
    sl.addImage({
      path: IMG.cover,
      x: 0, y: 0, w: W, h: H,
    });

    // Dark overlay to ensure legibility
    sl.addShape('rect', {
      x: 0, y: 0, w: W, h: H,
      fill: { color: '0A0806', transparency: 38 },
      line: { color: '0A0806', width: 0 },
    });

    // Left terracotta accent bar
    sl.addShape('rect', {
      x: 0, y: 0, w: 0.2, h: H,
      fill: { color: C.accent },
      line: { color: C.accent, width: 0 },
    });

    // Small top label
    sl.addText('A TRAVEL PITCH DECK', {
      x: 0.55, y: 0.55, w: 6, h: 0.3,
      fontFace: FN,
      fontSize: 9,
      color: C.accent,
      charSpacing: 3.5,
      align: 'left',
    });

    // Main title
    sl.addText('NitXig 2026 Getaway', {
      x: 0.55, y: 1.05, w: 10, h: 1.8,
      fontFace: FN,
      fontSize: 68,
      bold: true,
      color: C.white,
      align: 'left',
      valign: 'top',
    });

    // Subtitle — italic
    sl.addText('a time for whimsy and shenanigans', {
      x: 0.55, y: 2.95, w: 9, h: 0.55,
      fontFace: FN_SERIF,
      fontSize: 19,
      italic: true,
      color: 'D8C8B0',
      align: 'left',
    });

    // Rule
    sl.addShape('rect', {
      x: 0.55, y: 3.62, w: 5.5, h: 0.018,
      fill: { color: '5A4838', transparency: 0 },
      line: { color: '5A4838', width: 0 },
    });

    // Date / people line
    sl.addText('SEPTEMBER  ·  OCTOBER 2026  ·  TORONTO × BANGALORE', {
      x: 0.55, y: 3.82, w: 10, h: 0.3,
      fontFace: FN,
      fontSize: 10,
      color: 'A89880',
      charSpacing: 2,
      align: 'left',
    });

    // City pills at bottom
    const pills = [
      { label: 'Lisbon / Porto', color: C.lisbon },
      { label: 'Istanbul',       color: C.istanbul },
      { label: 'Budapest',       color: C.budapest },
      { label: 'Tbilisi  🃏',    color: C.tbilisi },
    ];
    const pillW = 2.55, pillH = 0.44, pillGap = 0.2;
    const totalPillW = pills.length * pillW + (pills.length - 1) * pillGap;
    let pillX = 0.55;

    pills.forEach((p) => {
      sl.addShape('roundRect', {
        x: pillX, y: 6.5, w: pillW, h: pillH,
        fill: { color: p.color },
        line: { color: p.color, width: 0 },
        rectRadius: 0.06,
      });
      sl.addText(p.label, {
        x: pillX, y: 6.5, w: pillW, h: pillH,
        fontFace: FN,
        fontSize: 11,
        bold: true,
        color: C.white,
        align: 'center',
        valign: 'middle',
      });
      pillX += pillW + pillGap;
    });
  }

  // ── SLIDES 2–9 — CITY HERO + DETAIL PAIRS ────────────────────────────────
  CITIES.forEach((city) => {
    // ── HERO SLIDE ──────────────────────────────────────────────────────────
    {
      const sl = pptx.addSlide();
      sl.background = { color: C.cream };

      // Right panel: city image (55% of width)
      const imgX = W * 0.43;
      sl.addImage({
        path: IMG[city.imgKey],
        x: imgX, y: 0, w: W - imgX, h: H,
      });

      // Subtle left-fade on the image edge
      sl.addShape('rect', {
        x: imgX, y: 0, w: 0.8, h: H,
        fill: { type: 'gradient', gradType: 'linear', angle: 0,
          stops: [
            { position: 0,   color: C.cream,     transparency: 0 },
            { position: 100, color: C.cream,     transparency: 100 },
          ]
        },
        line: { color: C.cream, width: 0 },
      });

      // Left panel cream (ensure clean)
      sl.addShape('rect', {
        x: 0, y: 0, w: imgX, h: H,
        fill: { color: C.cream },
        line: { color: C.cream, width: 0 },
      });

      // Accent bar
      accentBar(sl, city.color);

      const lx = 0.5;    // left content x
      const lw = imgX - 0.75;  // left content width

      // Country label
      label(sl, city.country, lx, 0.5, lw, city.color, 9);

      // City name
      sl.addText(city.wildcard ? city.name + '  🃏' : city.name, {
        x: lx, y: 0.82, w: lw, h: 1.05,
        fontFace: FN,
        fontSize: 38,
        bold: true,
        color: C.nearBlack,
        align: 'left',
        valign: 'top',
        autoFit: true,
      });

      if (city.wildcard) {
        // "THE WILDCARD" badge
        sl.addShape('roundRect', {
          x: lx, y: 1.92, w: 1.65, h: 0.3,
          fill: { color: city.color },
          line: { color: city.color, width: 0 },
          rectRadius: 0.04,
        });
        sl.addText('THE WILDCARD', {
          x: lx, y: 1.92, w: 1.65, h: 0.3,
          fontFace: FN, fontSize: 8, bold: true,
          color: C.white, align: 'center', valign: 'middle',
          charSpacing: 1.5,
        });
      }

      // Tagline
      sl.addText(city.tagline, {
        x: lx, y: 2.3, w: lw, h: 0.58,
        fontFace: FN_SERIF,
        fontSize: 13,
        italic: true,
        color: C.midGray,
        align: 'left',
        valign: 'top',
        autoFit: true,
      });

      // Divider
      rule(sl, lx, 3.05, lw - 0.2);

      // Flights section
      label(sl, 'FLIGHTS', lx, 3.2, lw, C.midGray, 8.5);
      costLine(sl, '✈', 'Bangalore', city.flightBLR, lx, 3.52, lw, city.color);
      costLine(sl, '✈', 'Toronto',   city.flightYYZ, lx, 3.92, lw, city.color);

      // Divider
      rule(sl, lx, 4.4, lw - 0.2);

      // Weekly budget section
      label(sl, 'WEEK ON THE GROUND', lx, 4.55, lw, C.midGray, 8.5);
      costLine(sl, '🏨', 'Bangalore', city.weekBLR, lx, 4.87, lw, city.color);
      costLine(sl, '🏨', 'Toronto',   city.weekYYZ, lx, 5.27, lw, city.color);
    }

    // ── DETAIL SLIDE ────────────────────────────────────────────────────────
    {
      const sl = pptx.addSlide();
      creamBg(sl);
      accentBar(sl, city.color);

      const lx = 0.5;

      // City label + name
      label(sl, city.country, lx, 0.38, 9, city.color, 9);
      sl.addText(city.wildcard ? city.name + '  🃏' : city.name, {
        x: lx, y: 0.65, w: 9, h: 0.72,
        fontFace: FN,
        fontSize: 30,
        bold: true,
        color: C.nearBlack,
        align: 'left',
        valign: 'top',
        autoFit: true,
      });

      // Full-width rule
      rule(sl, lx, 1.42, W - lx - 0.35);

      // Column headers
      const col1x = lx;
      const col2x = W / 2 + 0.15;
      const colW  = W / 2 - lx - 0.4;

      sl.addText('WHY YOU\'D LOVE IT', {
        x: col1x, y: 1.56, w: colW, h: 0.35,
        fontFace: FN, fontSize: 10, bold: true,
        color: city.color, charSpacing: 1.5,
        align: 'left', valign: 'middle',
      });
      sl.addText('THINGS THAT\'LL SURPRISE YOU', {
        x: col2x, y: 1.56, w: colW, h: 0.35,
        fontFace: FN, fontSize: 10, bold: true,
        color: city.color, charSpacing: 1.5,
        align: 'left', valign: 'middle',
      });

      // Vertical divider between columns
      sl.addShape('rect', {
        x: W / 2 - 0.02, y: 1.5, w: 0.018, h: H - 1.7,
        fill: { color: C.lightGray },
        line: { color: C.lightGray, width: 0 },
      });

      // Left column bullets (love)
      const lineH = 0.72;
      city.love.forEach((item, i) => {
        bulletItem(sl, item, col1x, 2.05 + i * lineH, colW, city.color);
      });

      // Right column bullets (surprises)
      city.surprises.forEach((item, i) => {
        bulletItem(sl, item, col2x, 2.05 + i * lineH, colW, city.color);
      });
    }
  });

  // ── SLIDE 10 — SUMMARY ───────────────────────────────────────────────────
  {
    const sl = pptx.addSlide();
    creamBg(sl);
    accentBar(sl, C.accent);

    const lx = 0.5;

    // Title
    sl.addText('so, where are we going?', {
      x: lx, y: 0.38, w: W - lx - 0.4, h: 0.78,
      fontFace: FN,
      fontSize: 36,
      bold: true,
      color: C.nearBlack,
      align: 'left',
      valign: 'top',
    });

    sl.addText('the quick cheat sheet', {
      x: lx, y: 1.12, w: 6, h: 0.36,
      fontFace: FN_SERIF,
      fontSize: 14,
      italic: true,
      color: C.midGray,
      align: 'left',
    });

    rule(sl, lx, 1.55, W - lx - 0.35);

    // Table setup
    // Columns: Metric | Lisbon/Porto | Istanbul | Budapest | Tbilisi
    const tW  = W - lx - 0.35;
    const tX  = lx;
    const tY  = 1.7;
    const c0w = 2.1;     // metric column
    const cCw = (tW - c0w) / 4;  // city columns

    const hStyle = {
      fontFace: FN, fontSize: 10, bold: true,
      color: C.white, align: 'center', valign: 'middle',
      charSpacing: 0.8,
    };
    const metricStyle = {
      fontFace: FN, fontSize: 10, bold: true,
      color: C.nearBlack, align: 'left', valign: 'middle',
    };
    const cellStyle = {
      fontFace: FN, fontSize: 10,
      color: C.nearBlack, align: 'center', valign: 'middle',
    };
    const bestStyle = {
      fontFace: FN, fontSize: 10, bold: true,
      color: C.nearBlack, align: 'center', valign: 'middle',
    };

    function best(txt) {
      return { text: txt, options: { ...bestStyle } };
    }
    function norm(txt) {
      return { text: txt, options: { ...cellStyle } };
    }

    const cityColors = [C.lisbon, C.istanbul, C.budapest, C.tbilisi];

    const rows = [
      // Header row
      [
        { text: '',                 options: { ...hStyle, fill: { color: C.nearBlack } } },
        { text: 'Lisbon / Porto',   options: { ...hStyle, fill: { color: C.lisbon } } },
        { text: 'Istanbul',         options: { ...hStyle, fill: { color: C.istanbul } } },
        { text: 'Budapest',         options: { ...hStyle, fill: { color: C.budapest } } },
        { text: 'Tbilisi',          options: { ...hStyle, fill: { color: C.tbilisi } } },
      ],
      [
        { text: '✈  BLR Flight',   options: { ...metricStyle, fill: { color: 'EDE8E0' } } },
        norm('₹55–75k'),
        best('₹28–45k  ★'),
        norm('₹36–60k'),
        norm('₹30–50k'),
      ],
      [
        { text: '✈  YYZ Flight',   options: { ...metricStyle, fill: { color: C.cream } } },
        norm('CA$900–1,100'),
        norm('CA$900–1,200'),
        best('CA$850–1,100  ★'),
        norm('CA$900–1,100'),
      ],
      [
        { text: '🏨  Week (BLR)',   options: { ...metricStyle, fill: { color: 'EDE8E0' } } },
        norm('₹60–80k'),
        norm('₹45–65k'),
        norm('₹40–55k'),
        best('₹30–45k  ★'),
      ],
      [
        { text: '🏨  Week (YYZ)',   options: { ...metricStyle, fill: { color: C.cream } } },
        norm('CA$1,800–2,400'),
        norm('CA$1,500–2,000'),
        norm('CA$1,400–1,900'),
        best('CA$1,200–1,600  ★'),
      ],
      [
        { text: '☕  Coffee',       options: { ...metricStyle, fill: { color: 'EDE8E0' } } },
        norm(stars(5, 5)),
        norm(stars(4, 5)),
        norm(stars(4, 5) + '½'),
        norm(stars(4, 5) + '½'),
      ],
      [
        { text: '🍷  Wine bars',    options: { ...metricStyle, fill: { color: C.cream } } },
        norm(stars(5, 5)),
        norm(stars(3, 5)),
        norm(stars(4, 5)),
        norm(stars(5, 5)),
      ],
      [
        { text: '🏃  Running',      options: { ...metricStyle, fill: { color: 'EDE8E0' } } },
        norm(stars(4, 5)),
        norm(stars(5, 5)),
        norm(stars(5, 5)),
        norm(stars(4, 5)),
      ],
      [
        { text: '👥  Meet people',  options: { ...metricStyle, fill: { color: C.cream } } },
        norm(stars(4, 5)),
        norm(stars(5, 5)),
        norm(stars(4, 5)),
        norm(stars(5, 5)),
      ],
      [
        { text: '🌍  Tourist draw', options: { ...metricStyle, fill: { color: 'EDE8E0' } } },
        norm(stars(4, 5)),
        norm(stars(5, 5)),
        norm(stars(5, 5)),
        norm(stars(3, 5)),
      ],
    ];

    sl.addTable(rows, {
      x: tX, y: tY,
      w: tW,
      colW: [c0w, cCw, cCw, cCw, cCw],
      rowH: 0.46,
      border: { type: 'solid', pt: 0.5, color: C.lightGray },
      fontFace: FN,
      fontSize: 10,
    });

    // Footer note
    sl.addText('★ = best in category   |   Neela (Toronto / YYZ)  ×  Nitish (Bangalore / BLR)', {
      x: lx, y: H - 0.45, w: W - lx - 0.35, h: 0.3,
      fontFace: FN, fontSize: 8.5,
      color: C.midGray, align: 'left',
      charSpacing: 0.5, italic: true,
    });
  }

  // ── SAVE ─────────────────────────────────────────────────────────────────
  const outFile = path.join(__dirname, 'NitXig_2026_Getaway.pptx');
  await pptx.writeFile({ fileName: outFile });
  console.log(`\n✓ Saved: ${outFile}`);
}

buildPresentation().catch((err) => {
  console.error('Error building presentation:', err);
  process.exit(1);
});
