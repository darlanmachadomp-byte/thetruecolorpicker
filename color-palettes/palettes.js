const searchForm = document.querySelector("#paletteSearchForm");
const searchInput = document.querySelector("#paletteSearchInput");
const paletteResults = document.querySelector("#paletteResults");
const previewOverlay = document.querySelector("#paletteSearchOverlay");
const closePreview = document.querySelector("#closePaletteSearchPreview");
const previewImage = document.querySelector("#paletteSearchPreviewImage");
const previewTitle = document.querySelector("#paletteSearchPreviewTitle");
const downloadPreview = document.querySelector("#downloadPaletteSearchPreview");

const keywordThemes = [
  { keys: ["ocean", "sea", "beach", "water", "mar", "praia", "azul"], colors: ["#083D77", "#00A6A6", "#7FD8BE", "#F4E9CD", "#F2C57C"] },
  { keys: ["sunset", "sunrise", "summer", "sol", "verao", "calor"], colors: ["#3D1A6D", "#C44569", "#F26D5B", "#F6B352", "#FFE6A7"] },
  { keys: ["forest", "nature", "green", "botanical", "floresta", "natureza"], colors: ["#102E1B", "#255C3B", "#5E8C61", "#B6C649", "#F2E8CF"] },
  { keys: ["coffee", "cafe", "espresso", "bakery", "chocolate"], colors: ["#2B1A12", "#5C3A2E", "#9A6B4F", "#D6B08C", "#F4E3D0"] },
  { keys: ["luxury", "gold", "premium", "elegant", "luxo", "dourado"], colors: ["#101010", "#39322B", "#A77F2F", "#D9B45B", "#F5E6B8"] },
  { keys: ["cyber", "neon", "tech", "future", "gaming", "futurista"], colors: ["#090A1A", "#2E1A7A", "#00D4FF", "#FF2E88", "#B8FF2C"] },
  { keys: ["minimal", "clean", "soft", "neutral", "minimalista"], colors: ["#1E1E21", "#666A73", "#A7ADB8", "#E4E1DA", "#F7F4EF"] },
  { keys: ["romantic", "wedding", "rose", "pink", "amor", "rosa"], colors: ["#5D2333", "#B84A62", "#E69AAE", "#F6D6DD", "#FFF4F6"] },
  { keys: ["kids", "playful", "fun", "toy", "infantil"], colors: ["#2D70B8", "#F25F5C", "#FFE066", "#70C1B3", "#B388EB"] },
  { keys: ["dark", "night", "black", "noir", "escuro"], colors: ["#050505", "#1B1B22", "#39344A", "#73628A", "#E7D7C1"] }
];

const pantoneSamples = [
  { name: "PANTONE 100 C", hex: "#F6EB61" },
  { name: "PANTONE 102 C", hex: "#FCE300" },
  { name: "PANTONE 109 C", hex: "#FFD100" },
  { name: "PANTONE 123 C", hex: "#FFC72C" },
  { name: "PANTONE 130 C", hex: "#F2A900" },
  { name: "PANTONE 1375 C", hex: "#FF9E1B" },
  { name: "PANTONE 1505 C", hex: "#FF6900" },
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

let activePalettes = [];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function hashString(value) {
  return [...value].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
}

function seeded(seed) {
  let value = seed || 1;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
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

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
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

function textColorFor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.58 ? "#111111" : "#FFFFFF";
}

function cmykValue(cmyk) {
  return `${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;
}

function getCodes(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);
  return [
    ["HEX", hex],
    ["RGB", `${rgb.r}, ${rgb.g}, ${rgb.b}`],
    ["HSL", `${hsl.h}deg, ${hsl.s}%, ${hsl.l}%`],
    ["CMYK", cmykValue(rgbToCmyk(rgb))]
  ];
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

function hueDistance(hexA, hexB) {
  const hueA = rgbToHsl(hexToRgb(hexA)).h;
  const hueB = rgbToHsl(hexToRgb(hexB)).h;
  const diff = Math.abs(hueA - hueB);
  return Math.min(diff, 360 - diff);
}

function pantoneScore(item, targetHex) {
  const targetHsl = rgbToHsl(hexToRgb(targetHex));
  const itemHsl = rgbToHsl(hexToRgb(item.hex));
  return item.distance
    + (hueDistance(targetHex, item.hex) * 0.22)
    + (Math.abs(targetHsl.l - itemHsl.l) * 0.42)
    + (Math.abs(targetHsl.s - itemHsl.s) * 0.08);
}

function nearestPantone(hex, used = new Set()) {
  return allPantoneSamples()
    .map((item) => ({ ...item, distance: colorDistance(hex, item.hex) }))
    .filter((item) => !used.has(item.hex))
    .sort((a, b) => pantoneScore(a, hex) - pantoneScore(b, hex))[0] || pantoneSamples[0];
}

function adjustForSystem(hex, system, index) {
  const hsl = rgbToHsl(hexToRgb(hex));
  if (system === "hsl") {
    return rgbToHex(hslToRgb({
      h: hsl.h + ((index - 2) * 2),
      s: clamp(hsl.s + 4, 8, 96),
      l: clamp(Math.round(hsl.l / 5) * 5, 10, 90)
    }));
  }
  if (system === "cmyk") {
    return rgbToHex(hslToRgb({
      h: hsl.h,
      s: clamp(hsl.s - 5, 8, 88),
      l: clamp(hsl.l - 3, 12, 86)
    }));
  }
  return hex;
}

function colorsForSystem(colors, system) {
  if (system === "pantone") {
    const used = new Set();
    return colors.map((color) => {
      const match = nearestPantone(color, used);
      used.add(match.hex);
      return match.hex;
    });
  }
  return colors.map((color, index) => adjustForSystem(color, system, index));
}

function valueForSystem(hex, system) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);
  const cmyk = rgbToCmyk(rgb);
  if (system === "rgb") return `RGB ${rgb.r}, ${rgb.g}, ${rgb.b}`;
  if (system === "hsl") return `HSL ${hsl.h}deg, ${hsl.s}%, ${hsl.l}%`;
  if (system === "cmyk") return `CMYK ${cmykValue(cmyk)}`;
  return nearestPantone(hex).name;
}

function mixHex(a, b, amount) {
  const first = hexToRgb(a);
  const second = hexToRgb(b);
  return rgbToHex({
    r: first.r + (second.r - first.r) * amount,
    g: first.g + (second.g - first.g) * amount,
    b: first.b + (second.b - first.b) * amount
  });
}

function uniqueColors(colors) {
  return [...new Set(colors)].slice(0, 5);
}

function paletteSignature(colors) {
  return colors.slice().sort().join("|");
}

function paletteFamilySignature(colors) {
  return colors
    .map((color) => {
      const hsl = rgbToHsl(hexToRgb(color));
      return `${Math.round(hsl.h / 24)}:${Math.round(hsl.s / 18)}:${Math.round(hsl.l / 14)}`;
    })
    .sort()
    .join("|");
}

function uniquePalettes(palettes) {
  const seen = new Set();
  const seenFamilies = new Set();
  return palettes.filter((colors) => {
    const normalized = uniqueColors(colors);
    if (normalized.length < 5) return false;

    const signature = paletteSignature(normalized);
    const familySignature = paletteFamilySignature(normalized);
    if (seen.has(signature) || seenFamilies.has(familySignature)) return false;
    seen.add(signature);
    seenFamilies.add(familySignature);
    return true;
  });
}

function themeForQuery(query) {
  const normalized = query.toLowerCase();
  const matches = keywordThemes.filter((theme) => theme.keys.some((key) => normalized.includes(key)));
  if (matches.length) return matches;
  return [];
}

function generatedPalette(query, index) {
  const random = seeded(Math.abs(hashString(`${query}:${index}`)) + 7);
  const baseHue = (Math.abs(hashString(query)) + (index * 53) + Math.floor(random() * 18)) % 360;
  const mood = query.toLowerCase();
  const isSoft = /soft|minimal|calm|gentle|clean|pastel|light|serene/.test(mood);
  const isBold = /bold|neon|cyber|strong|party|festival|vivid/.test(mood);
  const isDark = /dark|night|noir|black|luxury|premium/.test(mood);
  const saturation = isSoft ? 32 : isBold ? 82 : 58;
  const baseLight = isDark ? 24 : isSoft ? 78 : 52;
  const shifts = [
    0,
    28 + Math.floor(random() * 20),
    -34 - Math.floor(random() * 18),
    140 + Math.floor(random() * 46),
    210 + Math.floor(random() * 50)
  ];

  return shifts.map((shift, colorIndex) => rgbToHex(hslToRgb({
    h: baseHue + shift,
    s: clamp(saturation + ((colorIndex - 2) * 7), 18, 92),
    l: clamp(baseLight + ((colorIndex - 2) * (isDark ? 9 : 7)), 12, 90)
  })));
}

function palettesForQuery(query) {
  const themes = themeForQuery(query);
  const themed = themes.flatMap((theme, index) => {
    const blend = generatedPalette(query, index);
    return [
      theme.colors,
      theme.colors.map((color, colorIndex) => mixHex(color, blend[colorIndex], 0.22))
    ];
  });

  const generated = Array.from({ length: 24 }, (_, index) => generatedPalette(query, index + themes.length));
  return uniquePalettes([...themed, ...generated]).slice(0, 8).map((colors, index) => ({
    id: `palette-${index}`,
    title: titleForPalette(query, index),
    system: "rgb",
    baseColors: uniqueColors(colors),
    colors: uniqueColors(colors)
  }));
}

function titleForPalette(query, index) {
  const names = ["Core mood", "Soft variation", "Editorial", "Contrast set", "Brand system", "Digital accent", "Warm balance", "Quiet tones"];
  return `${names[index % names.length]} · ${query}`;
}

function renderPalettes(query) {
  activePalettes = palettesForQuery(query);
  renderPaletteCards();
}

function renderPaletteCards() {
  const palettes = activePalettes;
  paletteResults.innerHTML = palettes.map((palette, index) => `
    <article class="keyword-palette-card">
      <div class="keyword-palette-heading">
        <h2>${palette.title}</h2>
        <button class="export-palette-button" type="button" data-preview-palette="${index}">Export palette</button>
      </div>
      <div class="palette-system-tabs" aria-label="Palette color system">
        ${["rgb", "hsl", "cmyk", "pantone"].map((system) => `
          <button class="palette-system-tab${palette.system === system ? " active" : ""}" type="button" data-palette-system="${system}" data-palette-index="${index}">${system.toUpperCase()}</button>
        `).join("")}
      </div>
      <div class="keyword-palette-strip">
        ${palette.colors.map((color) => `
          <button class="keyword-color" type="button" data-color="${color}" style="background:${color};color:${textColorFor(color)}">
            <span>${palette.system === "rgb" ? color : valueForSystem(color, palette.system)}</span>
          </button>
        `).join("")}
      </div>
      <div class="keyword-palette-codes">
        ${palette.colors.map((color) => `<code>${valueForSystem(color, palette.system)}</code>`).join("")}
      </div>
    </article>
  `).join("");
  paletteResults.dataset.palettes = JSON.stringify(palettes);
}

function getCurrentPalettes() {
  try {
    return JSON.parse(paletteResults.dataset.palettes || "[]");
  } catch (error) {
    return [];
  }
}

function drawPaletteExport(canvas, palette) {
  const colors = palette.colors.slice(0, 5);
  const cardWidth = 520;
  const cardHeight = 680;
  const gap = 28;
  const padding = 48;
  const columns = colors.length <= 3 ? colors.length : Math.min(4, colors.length);
  const rows = Math.ceil(colors.length / columns);
  const width = (padding * 2) + (columns * cardWidth) + ((columns - 1) * gap);
  const height = (padding * 2) + (rows * cardHeight) + ((rows - 1) * gap);
  const ctx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = "#121214";
  ctx.fillRect(0, 0, width, height);

  colors.forEach((hex, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = padding + col * (cardWidth + gap);
    const y = padding + row * (cardHeight + gap);
    const swatchHeight = 410;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.fillStyle = hex;
    ctx.fillRect(x, y, cardWidth, swatchHeight);
    ctx.fillStyle = "#111111";
    ctx.font = "700 24px Inter, Arial, sans-serif";
    ctx.fillText("Color card", x + 38, y + swatchHeight + 50);

    ctx.font = "700 17px Inter, Arial, sans-serif";
    getCodes(hex).forEach(([label, value], codeIndex) => {
      const codeCol = codeIndex % 2;
      const codeRow = Math.floor(codeIndex / 2);
      const codeX = x + (codeCol === 0 ? 38 : 278);
      const codeY = y + swatchHeight + 104 + (codeRow * 72);
      ctx.fillStyle = "#6c6c72";
      ctx.fillText(label, codeX, codeY);
      ctx.fillStyle = "#111111";
      ctx.font = "400 19px Inter, Arial, sans-serif";
      ctx.fillText(value, codeX, codeY + 29);
      ctx.font = "700 17px Inter, Arial, sans-serif";
    });
  });
}

function openPalettePreview(palette) {
  const canvas = document.createElement("canvas");
  drawPaletteExport(canvas, palette);
  const dataUrl = canvas.toDataURL("image/png");
  const fileName = `${palette.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "color-palette"}.png`;

  previewTitle.textContent = palette.title;
  previewImage.src = dataUrl;
  downloadPreview.href = dataUrl;
  downloadPreview.download = fileName;
  previewOverlay.hidden = false;
}

function closePalettePreview() {
  previewOverlay.hidden = true;
}

function handleSearch() {
  const value = searchInput.value.trim() || "minimal ocean brand";
  renderPalettes(value);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSearch();
});

searchInput.addEventListener("input", () => {
  window.clearTimeout(searchInput.searchTimer);
  searchInput.searchTimer = window.setTimeout(handleSearch, 180);
});

paletteResults.addEventListener("click", (event) => {
  const systemButton = event.target.closest("[data-palette-system]");
  if (systemButton) {
    const palette = activePalettes[Number(systemButton.dataset.paletteIndex)];
    if (!palette) return;
    palette.system = systemButton.dataset.paletteSystem;
    palette.colors = colorsForSystem(palette.baseColors, palette.system);
    renderPaletteCards();
    return;
  }

  const previewButton = event.target.closest("[data-preview-palette]");
  if (previewButton) {
    const palettes = getCurrentPalettes();
    const palette = palettes[Number(previewButton.dataset.previewPalette)];
    if (palette) openPalettePreview(palette);
  }
});

closePreview.addEventListener("click", closePalettePreview);
previewOverlay.addEventListener("click", (event) => {
  if (event.target === previewOverlay) closePalettePreview();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !previewOverlay.hidden) closePalettePreview();
});

handleSearch();
