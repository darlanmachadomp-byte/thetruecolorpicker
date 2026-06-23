const searchForm = document.querySelector("#pantoneSearchForm");
const searchInput = document.querySelector("#pantoneSearchInput");
const colorInput = document.querySelector("#pantoneColorInput");
const filterBar = document.querySelector("#pantoneFilterBar");
const summary = document.querySelector("#pantoneSummary");
const results = document.querySelector("#pantoneResults");

const pantoneSamples = [
  { name: "PANTONE 100 C", hex: "#F6EB61" },
  { name: "PANTONE 102 C", hex: "#FCE300" },
  { name: "PANTONE 109 C", hex: "#FFD100" },
  { name: "PANTONE 123 C", hex: "#FFC72C" },
  { name: "PANTONE 130 C", hex: "#F2A900" },
  { name: "PANTONE 1375 C", hex: "#FF9E1B" },
  { name: "PANTONE 1505 C", hex: "#FF6900" },
  { name: "PANTONE 021 C", hex: "#FE5000" },
  { name: "PANTONE 032 C", hex: "#EF3340" },
  { name: "PANTONE 1795 C", hex: "#D22630" },
  { name: "PANTONE 185 C", hex: "#E4002B" },
  { name: "PANTONE 186 C", hex: "#C8102E" },
  { name: "PANTONE 199 C", hex: "#D50032" },
  { name: "PANTONE 1925 C", hex: "#E0004D" },
  { name: "PANTONE 219 C", hex: "#DA1884" },
  { name: "PANTONE 226 C", hex: "#D0006F" },
  { name: "PANTONE Rhodamine Red C", hex: "#E10098" },
  { name: "PANTONE Purple C", hex: "#BB29BB" },
  { name: "PANTONE Violet C", hex: "#440099" },
  { name: "PANTONE 2592 C", hex: "#9B26B6" },
  { name: "PANTONE 2602 C", hex: "#87189D" },
  { name: "PANTONE 2612 C", hex: "#772583" },
  { name: "PANTONE 266 C", hex: "#753BBD" },
  { name: "PANTONE 2685 C", hex: "#330072" },
  { name: "PANTONE 2705 C", hex: "#A7A4E0" },
  { name: "PANTONE 2715 C", hex: "#8B84D7" },
  { name: "PANTONE 2726 C", hex: "#485CC7" },
  { name: "PANTONE 2725 C", hex: "#685BC7" },
  { name: "PANTONE 2728 C", hex: "#0047BB" },
  { name: "PANTONE 286 C", hex: "#0033A0" },
  { name: "PANTONE 2935 C", hex: "#0057B8" },
  { name: "PANTONE 300 C", hex: "#005EB8" },
  { name: "PANTONE 299 C", hex: "#00A3E0" },
  { name: "PANTONE 306 C", hex: "#00B5E2" },
  { name: "PANTONE 312 C", hex: "#00A9CE" },
  { name: "PANTONE 320 C", hex: "#009CA6" },
  { name: "PANTONE 3262 C", hex: "#00B2A9" },
  { name: "PANTONE 3395 C", hex: "#00C389" },
  { name: "PANTONE 354 C", hex: "#00B140" },
  { name: "PANTONE 355 C", hex: "#009639" },
  { name: "PANTONE 360 C", hex: "#6CC24A" },
  { name: "PANTONE 368 C", hex: "#78BE20" },
  { name: "PANTONE 376 C", hex: "#84BD00" },
  { name: "PANTONE 382 C", hex: "#C4D600" },
  { name: "PANTONE 485 C", hex: "#DA291C" },
  { name: "PANTONE 7425 C", hex: "#B52555" },
  { name: "PANTONE 7527 C", hex: "#D6D2C4" },
  { name: "PANTONE 7530 C", hex: "#A39382" },
  { name: "PANTONE Warm Gray 7 C", hex: "#968C83" },
  { name: "PANTONE Cool Gray 3 C", hex: "#C8C9C7" },
  { name: "PANTONE Cool Gray 7 C", hex: "#97999B" },
  { name: "PANTONE Cool Gray 11 C", hex: "#53565A" },
  { name: "PANTONE 433 C", hex: "#1D252D" },
  { name: "PANTONE Process Black C", hex: "#2D2926" },
  { name: "PANTONE Black 6 C", hex: "#101820" }
];

const generatedFamilies = [
  { family: "red", label: "Red", hues: [350, 358, 6, 12], saturations: [62, 78, 92], lightnesses: [34, 45, 56, 68] },
  { family: "orange", label: "Orange", hues: [20, 28, 34], saturations: [68, 84, 96], lightnesses: [36, 48, 60, 72] },
  { family: "yellow", label: "Yellow", hues: [45, 52, 60], saturations: [62, 78, 92], lightnesses: [44, 56, 68, 80] },
  { family: "green", label: "Green", hues: [92, 118, 145, 162], saturations: [42, 62, 78], lightnesses: [26, 40, 54, 68] },
  { family: "blue", label: "Blue", hues: [190, 205, 220, 232], saturations: [46, 66, 86], lightnesses: [28, 42, 56, 70] },
  { family: "purple", label: "Purple", hues: [242, 256, 270, 284], saturations: [42, 62, 82], lightnesses: [28, 42, 56, 70] },
  { family: "pink", label: "Pink", hues: [304, 320, 334], saturations: [48, 68, 86], lightnesses: [36, 50, 64, 78] },
  { family: "neutral", label: "Neutral", hues: [32, 210, 260], saturations: [4, 8, 14], lightnesses: [24, 38, 52, 66, 80] },
  { family: "dark", label: "Dark", hues: [0, 220, 260, 300], saturations: [8, 24, 42], lightnesses: [8, 14, 20] }
];

let activeFamily = "all";
let activeColor = "#6C63FF";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeHex(value) {
  const clean = value.trim().replace("#", "");
  if (/^[0-9a-f]{3}$/i.test(clean)) {
    return `#${clean.split("").map((char) => char + char).join("").toUpperCase()}`;
  }
  if (/^[0-9a-f]{6}$/i.test(clean)) return `#${clean.toUpperCase()}`;
  return null;
}

function hexToRgb(hex) {
  const value = normalizeHex(hex).slice(1);
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => Math.min(Math.max(Math.round(value), 0), 255).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

function buildGeneratedPantoneSamples() {
  return generatedFamilies.flatMap((group) => {
    let count = 1;
    return group.hues.flatMap((hue) => group.saturations.flatMap((saturation) => group.lightnesses.map((lightness) => ({
      name: `Pantone-like ${group.label} ${String(count++).padStart(2, "0")}`,
      hex: rgbToHex(hslToRgb({ h: hue, s: saturation, l: lightness })),
      family: group.family,
      generated: true
    }))));
  });
}

function allPantoneSamples() {
  const seen = new Set();
  return [...pantoneSamples, ...buildGeneratedPantoneSamples()].filter((item) => {
    if (seen.has(item.hex)) return false;
    seen.add(item.hex);
    return true;
  });
}

function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;
  if (max !== min) {
    const delta = max - min;
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === red) hue = (green - blue) / delta + (green < blue ? 6 : 0);
    if (max === green) hue = (blue - red) / delta + 2;
    if (max === blue) hue = (red - green) / delta + 4;
    hue *= 60;
  }
  return { h: Math.round(hue), s: Math.round(saturation * 100), l: Math.round(lightness * 100) };
}

function hslToRgb({ h, s, l }) {
  const hue = (((h % 360) + 360) % 360) / 360;
  const saturation = s / 100;
  const lightness = l / 100;
  if (saturation === 0) {
    const gray = Math.round(lightness * 255);
    return { r: gray, g: gray, b: gray };
  }
  const hueToRgb = (p, q, t) => {
    let localT = t;
    if (localT < 0) localT += 1;
    if (localT > 1) localT -= 1;
    if (localT < 1 / 6) return p + (q - p) * 6 * localT;
    if (localT < 1 / 2) return q;
    if (localT < 2 / 3) return p + (q - p) * (2 / 3 - localT) * 6;
    return p;
  };
  const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;
  return {
    r: Math.round(hueToRgb(p, q, hue + 1 / 3) * 255),
    g: Math.round(hueToRgb(p, q, hue) * 255),
    b: Math.round(hueToRgb(p, q, hue - 1 / 3) * 255)
  };
}

function rgbToCmyk({ r, g, b }) {
  if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 100 };
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const k = 1 - Math.max(red, green, blue);
  return {
    c: Math.round(((1 - red - k) / (1 - k)) * 100),
    m: Math.round(((1 - green - k) / (1 - k)) * 100),
    y: Math.round(((1 - blue - k) / (1 - k)) * 100),
    k: Math.round(k * 100)
  };
}

function rgbToLab({ r, g, b }) {
  const pivotRgb = (value) => {
    const normalized = value / 255;
    return normalized > 0.04045 ? ((normalized + 0.055) / 1.055) ** 2.4 : normalized / 12.92;
  };
  const red = pivotRgb(r);
  const green = pivotRgb(g);
  const blue = pivotRgb(b);
  const x = (red * 0.4124 + green * 0.3576 + blue * 0.1805) / 0.95047;
  const y = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 1.00000;
  const z = (red * 0.0193 + green * 0.1192 + blue * 0.9505) / 1.08883;
  const pivotXyz = (value) => value > 0.008856 ? value ** (1 / 3) : (7.787 * value) + (16 / 116);
  const fx = pivotXyz(x);
  const fy = pivotXyz(y);
  const fz = pivotXyz(z);
  return { l: (116 * fy) - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

function colorDistance(hexA, hexB) {
  const a = rgbToLab(hexToRgb(hexA));
  const b = rgbToLab(hexToRgb(hexB));
  return Math.hypot(a.l - b.l, a.a - b.a, a.b - b.b);
}

function parseColor(value) {
  const hex = normalizeHex(value);
  if (hex) return hex;

  const rgb = value.match(/rgba?\s*\(?\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})/i);
  if (rgb) {
    return rgbToHex({ r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]) });
  }

  const hsl = value.match(/hsla?\s*\(?\s*(\d{1,3})(?:deg)?[\s,]+(\d{1,3})%[\s,]+(\d{1,3})%/i);
  if (hsl) {
    return rgbToHex(hslToRgb({ h: Number(hsl[1]), s: Number(hsl[2]), l: Number(hsl[3]) }));
  }

  return null;
}

function familyFor(hex) {
  const { h, s, l } = rgbToHsl(hexToRgb(hex));
  if (l < 18) return "dark";
  if (s < 12) return "neutral";
  if (h < 16 || h >= 345) return "red";
  if (h < 42) return "orange";
  if (h < 70) return "yellow";
  if (h < 165) return "green";
  if (h < 235) return "blue";
  if (h < 292) return "purple";
  if (h < 345) return "pink";
  return "neutral";
}

function sampleFamily(item) {
  if (item.family) return item.family;
  const name = item.name.toLowerCase();
  if (name.includes("black") || name.includes("process black") || name.includes("433")) return "dark";
  if (name.includes("gray") || name.includes("grey") || name.includes("7530") || name.includes("7527")) return "neutral";
  return familyFor(item.hex);
}

function textColorFor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.58 ? "#111111" : "#FFFFFF";
}

function cmykValue(cmyk) {
  return `${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;
}

function matchPercent(distance) {
  return `${Math.max(1, Math.round(100 - distance * 2.15))}%`;
}

function hueDistance(hexA, hexB) {
  const hueA = rgbToHsl(hexToRgb(hexA)).h;
  const hueB = rgbToHsl(hexToRgb(hexB)).h;
  const diff = Math.abs(hueA - hueB);
  return Math.min(diff, 360 - diff);
}

function matchScore(item, targetHex) {
  const targetFamily = familyFor(targetHex);
  const itemFamily = familyFor(item.hex);
  const targetHsl = rgbToHsl(hexToRgb(targetHex));
  const itemHsl = rgbToHsl(hexToRgb(item.hex));
  const familyPenalty = targetFamily === itemFamily ? 0 : 18;
  return item.distance
    + familyPenalty
    + (hueDistance(targetHex, item.hex) * 0.22)
    + (Math.abs(targetHsl.l - itemHsl.l) * 0.42)
    + (Math.abs(targetHsl.s - itemHsl.s) * 0.08);
}

function filteredResults() {
  const query = searchInput.value.trim();
  const parsed = parseColor(query);
  if (parsed) {
    activeColor = parsed;
    colorInput.value = parsed.toLowerCase();
  }

  const textQuery = query.toLowerCase();
  return allPantoneSamples()
    .map((item) => ({
      ...item,
      family: sampleFamily(item),
      distance: colorDistance(activeColor, item.hex)
    }))
    .filter((item) => activeFamily === "all" || item.family === activeFamily)
    .filter((item) => parseColor(query) || !textQuery || item.name.toLowerCase().includes(textQuery) || item.family.includes(textQuery))
    .sort((a, b) => {
      if (parseColor(query)) return matchScore(a, activeColor) - matchScore(b, activeColor);
      return a.family.localeCompare(b.family) || a.name.localeCompare(b.name);
    });
}

function render() {
  const parsed = parseColor(searchInput.value);
  const items = filteredResults();
  const rgb = hexToRgb(activeColor);
  const hsl = rgbToHsl(rgb);

  summary.innerHTML = `
    <div class="pantone-summary-card">
      <div class="pantone-summary-swatch" style="background:${activeColor}"></div>
      <div>
        <strong>${parsed ? "Closest matches for" : "Browsing Pantone-like shades"}</strong>
        <span>${activeColor} · RGB ${rgb.r}, ${rgb.g}, ${rgb.b} · HSL ${hsl.h}deg, ${hsl.s}%, ${hsl.l}%</span>
      </div>
    </div>
  `;

  results.innerHTML = items.slice(0, 24).map((item, index) => {
    const rgbValue = hexToRgb(item.hex);
    const hslValue = rgbToHsl(rgbValue);
    const cmykValueText = cmykValue(rgbToCmyk(rgbValue));
    return `
      <article class="pantone-card">
        <button class="pantone-swatch" type="button" data-color="${item.hex}" style="background:${item.hex};color:${textColorFor(item.hex)}">
          <span>${item.name}</span>
          <strong>${item.hex}</strong>
        </button>
        <div class="pantone-card-body">
          <div class="pantone-card-title">
            <h2>${item.name}</h2>
            <span>${parsed ? matchPercent(item.distance) : item.family}</span>
          </div>
          <div class="pantone-code-grid">
            <code>HEX ${item.hex}</code>
            <code>RGB ${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}</code>
            <code>HSL ${hslValue.h}deg, ${hslValue.s}%, ${hslValue.l}%</code>
            <code>CMYK ${cmykValueText}</code>
          </div>
        </div>
      </article>
    `;
  }).join("") || `<p class="pantone-empty">No Pantone-like shades found for this filter.</p>`;
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
});

searchInput.addEventListener("input", () => {
  window.clearTimeout(searchInput.searchTimer);
  searchInput.searchTimer = window.setTimeout(render, 120);
});

colorInput.addEventListener("input", (event) => {
  activeColor = normalizeHex(event.target.value);
  searchInput.value = activeColor;
  render();
});

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-family]");
  if (!button) return;
  activeFamily = button.dataset.family;
  filterBar.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  render();
});

render();
