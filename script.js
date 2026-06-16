const hexInput = document.querySelector("#hexInput");
const colorInput = document.querySelector("#colorInput");
const selectedColor = document.querySelector("#selectedColor");
const hexValue = document.querySelector("#hexValue");
const colorName = document.querySelector("#colorName");
const activeSystem = document.querySelector("#activeSystem");
const valueList = document.querySelector("#valueList");
const relatedGrid = document.querySelector("#relatedGrid");
const harmonyList = document.querySelector("#harmonyList");
const backgroundGrid = document.querySelector("#backgroundGrid");
const textGrid = document.querySelector("#textGrid");
const languageSelect = document.querySelector("#languageSelect");
const themeToggle = document.querySelector("#themeToggle");
const tabs = [...document.querySelectorAll(".tab")];

const translations = {
  en: {
    chooseLanguage: "Choose language",
    buyCoffee: "Buy me a coffee",
    heroText: "Your practical color picker for design systems, palettes, contrast, and production-ready color values.",
    pasteHex: "Paste hex",
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Copy?",
    colorpicker: "Colorpicker",
    openColorpicker: "Open colorpicker",
    selectColorSystem: "Select color system",
    darkTheme: "Dark theme",
    lightTheme: "Light theme",
    cmykNote: "Approximate RGB-based CMYK. Values can shift in Illustrator or Photoshop depending on the document ICC profile.",
    copyLabel: "Copy",
    hue: "Hue",
    saturation: "Saturation",
    lightness: "Lightness",
    cyan: "Cyan",
    magenta: "Magenta",
    yellow: "Yellow",
    key: "Key",
    match: "Match"
  },
  pt: {
    chooseLanguage: "Escolher idioma",
    buyCoffee: "Me pague um café",
    heroText: "Seu seletor de cores prático para sistemas de design, paletas e valores de cor prontos para produção.",
    pasteHex: "Cole o hex",
    copy: "Copiar",
    copied: "Copiado",
    copyFailed: "Falhou",
    colorpicker: "Seletor de cor",
    openColorpicker: "Abrir seletor de cor",
    selectColorSystem: "Selecione o sistema de cor",
    darkTheme: "Tema escuro",
    lightTheme: "Tema claro",
    cmykNote: "CMYK aproximado a partir de RGB. Os valores podem mudar no Illustrator ou Photoshop conforme o perfil ICC do documento.",
    copyLabel: "Copiar",
    hue: "Matiz",
    saturation: "Saturação",
    lightness: "Luminosidade",
    cyan: "Ciano",
    magenta: "Magenta",
    yellow: "Amarelo",
    key: "Preto",
    match: "Amostra"
  },
  es: {
    chooseLanguage: "Elegir idioma",
    buyCoffee: "Invítame un café",
    heroText: "Tu selector de color práctico para sistemas de diseño, paletas y valores de color listos para producción.",
    pasteHex: "Pegar hex",
    copy: "Copiar",
    copied: "Copiado",
    copyFailed: "Fallo",
    colorpicker: "Selector de color",
    openColorpicker: "Abrir selector de color",
    selectColorSystem: "Selecciona el sistema de color",
    darkTheme: "Tema oscuro",
    lightTheme: "Tema claro",
    cmykNote: "CMYK aproximado a partir de RGB. Los valores pueden cambiar en Illustrator o Photoshop según el perfil ICC del documento.",
    copyLabel: "Copiar",
    hue: "Matiz",
    saturation: "Saturación",
    lightness: "Luminosidad",
    cyan: "Cian",
    magenta: "Magenta",
    yellow: "Amarillo",
    key: "Negro",
    match: "Muestra"
  }
};

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
  { name: "PANTONE 021 C", hex: "#FE5000" },
  { name: "PANTONE 032 C", hex: "#EF3340" },
  { name: "PANTONE 1795 C", hex: "#D22630" },
  { name: "PANTONE 1925 C", hex: "#E0004D" },
  { name: "PANTONE 219 C", hex: "#DA1884" },
  { name: "PANTONE 226 C", hex: "#D0006F" },
  { name: "PANTONE Rhodamine Red C", hex: "#E10098" },
  { name: "PANTONE Purple C", hex: "#BB29BB" },
  { name: "PANTONE Violet C", hex: "#440099" },
  { name: "PANTONE 2592 C", hex: "#9B26B6" },
  { name: "PANTONE 266 C", hex: "#753BBD" },
  { name: "PANTONE 2685 C", hex: "#330072" },
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
  { name: "PANTONE 299 C", hex: "#00A3E0" },
  { name: "PANTONE 485 C", hex: "#DA291C" },
  { name: "PANTONE 7425 C", hex: "#B52555" },
  { name: "PANTONE 7530 C", hex: "#A39382" },
  { name: "PANTONE 7527 C", hex: "#D6D2C4" },
  { name: "PANTONE Warm Gray 7 C", hex: "#968C83" },
  { name: "PANTONE Cool Gray 3 C", hex: "#C8C9C7" },
  { name: "PANTONE Cool Gray 7 C", hex: "#97999B" },
  { name: "PANTONE Cool Gray 11 C", hex: "#53565A" },
  { name: "PANTONE 433 C", hex: "#1D252D" },
  { name: "PANTONE Process Black C", hex: "#2D2926" },
  { name: "PANTONE Black 6 C", hex: "#101820" }
];

const namedAnchors = [
  { name: "True Red", hex: "#E4002B" },
  { name: "Signal Orange", hex: "#FE5000" },
  { name: "Bright Yellow", hex: "#FFC72C" },
  { name: "Fresh Green", hex: "#00B140" },
  { name: "Clean Cyan", hex: "#00A3E0" },
  { name: "Royal Blue", hex: "#0047BB" },
  { name: "Deep Violet", hex: "#753BBD" },
  { name: "Hot Magenta", hex: "#E10098" },
  { name: "Soft Gray", hex: "#97999B" },
  { name: "Near Black", hex: "#2D2926" }
];

let currentHex = "#6C63FF";
let currentSystem = document.body.dataset.defaultSystem || "rgb";
let currentCmykOverride = null;
let paletteBaseHex = currentHex;
let currentLanguage = "en";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeHex(value) {
  const clean = value.trim().replace("#", "");
  if (/^[0-9a-f]{3}$/i.test(clean)) {
    return `#${clean.split("").map((char) => char + char).join("").toUpperCase()}`;
  }
  if (/^[0-9a-f]{6}$/i.test(clean)) {
    return `#${clean.toUpperCase()}`;
  }
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
  return `#${[r, g, b].map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
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

  return {
    h: Math.round(hue),
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100)
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

function cmykToRgb({ c, m, y, k }) {
  const cyan = clamp(c, 0, 100) / 100;
  const magenta = clamp(m, 0, 100) / 100;
  const yellow = clamp(y, 0, 100) / 100;
  const key = clamp(k, 0, 100) / 100;

  return {
    r: Math.round(255 * (1 - cyan) * (1 - key)),
    g: Math.round(255 * (1 - magenta) * (1 - key)),
    b: Math.round(255 * (1 - yellow) * (1 - key))
  };
}

function rgbToHsv({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    if (max === red) hue = 60 * (((green - blue) / delta) % 6);
    if (max === green) hue = 60 * ((blue - red) / delta + 2);
    if (max === blue) hue = 60 * ((red - green) / delta + 4);
  }

  return {
    h: Math.round((hue + 360) % 360),
    s: Math.round((max === 0 ? 0 : delta / max) * 100),
    v: Math.round(max * 100)
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

  return {
    l: (116 * fy) - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz)
  };
}

function colorDistance(hexA, hexB) {
  const a = rgbToLab(hexToRgb(hexA));
  const b = rgbToLab(hexToRgb(hexB));
  return Math.hypot(a.l - b.l, a.a - b.a, a.b - b.b);
}

function nearestPantones(hex) {
  return [...pantoneSamples]
    .map((item) => ({ ...item, distance: colorDistance(hex, item.hex) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 4);
}

function nearestName(hex) {
  return [...namedAnchors]
    .map((item) => ({ ...item, distance: colorDistance(hex, item.hex) }))
    .sort((a, b) => a.distance - b.distance)[0].name;
}

function relativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const channel = (value) => {
    const normalized = value / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(hexA, hexB) {
  const lumA = relativeLuminance(hexA);
  const lumB = relativeLuminance(hexB);
  const light = Math.max(lumA, lumB);
  const dark = Math.min(lumA, lumB);
  return (light + 0.05) / (dark + 0.05);
}

function textColorFor(background) {
  return contrastRatio(background, "#111111") >= contrastRatio(background, "#FFFFFF") ? "#111111" : "#FFFFFF";
}

function shiftedColor(hex, hueShift, saturationDelta = 0, lightnessDelta = 0) {
  const hsl = rgbToHsl(hexToRgb(hex));
  return rgbToHex(hslToRgb({
    h: hsl.h + hueShift,
    s: clamp(hsl.s + saturationDelta, 8, 100),
    l: clamp(hsl.l + lightnessDelta, 12, 88)
  }));
}

function channelShift(hex, channel, amount) {
  const rgb = hexToRgb(hex);
  return rgbToHex({
    ...rgb,
    [channel]: clamp(rgb[channel] + amount, 0, 255)
  });
}

function cmykShift(source, delta) {
  const cmyk = typeof source === "string" ? rgbToCmyk(hexToRgb(source)) : source;
  const shifted = {
    c: cmyk.c + (delta.c || 0),
    m: cmyk.m + (delta.m || 0),
    y: cmyk.y + (delta.y || 0),
    k: cmyk.k + (delta.k || 0)
  };

  return {
    cmyk: {
      c: clamp(Math.round(shifted.c), 0, 100),
      m: clamp(Math.round(shifted.m), 0, 100),
      y: clamp(Math.round(shifted.y), 0, 100),
      k: clamp(Math.round(shifted.k), 0, 100)
    },
    hex: rgbToHex(cmykToRgb(shifted))
  };
}

function uniqueColors(colors) {
  const seen = new Set();
  return colors.filter((color) => {
    const normalized = normalizeHex(color);
    if (!normalized || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

function cmykLabel(cmyk) {
  return `CMYK ${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;
}

function cmykValue(cmyk) {
  return `${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;
}

function cmykData(cmyk) {
  return [cmyk.c, cmyk.m, cmyk.y, cmyk.k].join(",");
}

function parseCmykData(value) {
  if (!value) return null;
  const parts = value.split(",").map((part) => Number(part));
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return null;
  return {
    c: clamp(Math.round(parts[0]), 0, 100),
    m: clamp(Math.round(parts[1]), 0, 100),
    y: clamp(Math.round(parts[2]), 0, 100),
    k: clamp(Math.round(parts[3]), 0, 100)
  };
}

function sameCmyk(a, b) {
  return Boolean(a && b && a.c === b.c && a.m === b.m && a.y === b.y && a.k === b.k);
}

function uniqueSwatches(swatches) {
  const seen = new Set();
  return swatches.filter((swatch) => {
    const key = swatch.cmyk ? cmykLabel(swatch.cmyk) : normalizeHex(swatch.hex);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getRelatedShades(hex) {
  return uniqueColors([
    channelShift(hex, "r", -28),
    channelShift(hex, "g", -28),
    channelShift(hex, "b", -28),
    hex,
    channelShift(hex, "r", 28),
    channelShift(hex, "g", 28),
    channelShift(hex, "b", 28),
    shiftedColor(hex, 0, 0, -16),
    shiftedColor(hex, 0, -10, 0),
    shiftedColor(hex, 0, 0, 16)
  ]).slice(0, 10).map((shade) => ({ hex: shade }));
}

function getPantoneRelatedShades(hex) {
  const pantones = nearestPantones(hex).map((item) => item.hex);
  const closest = pantones[0] || hex;

  return uniqueColors([
    hex,
    ...pantones,
    shiftedColor(closest, 0, 0, -18),
    shiftedColor(closest, 0, 0, -8),
    shiftedColor(closest, 0, -8, 10),
    shiftedColor(closest, 0, -14, 20),
    shiftedColor(closest, -6, 4, 0),
    shiftedColor(closest, 6, 4, 0)
  ]).slice(0, 10).map((shade) => ({ hex: shade }));
}

function getSystemRelatedShades(hex) {
  if (currentSystem === "pantone") {
    return getPantoneRelatedShades(hex);
  }

  if (currentSystem === "hsl") {
    return uniqueColors([
      hex,
      shiftedColor(hex, 0, 0, -24),
      shiftedColor(hex, 0, 0, -12),
      shiftedColor(hex, 0, 0, 12),
      shiftedColor(hex, 0, 0, 24),
      shiftedColor(hex, 0, -22, 0),
      shiftedColor(hex, 0, -12, 0),
      shiftedColor(hex, 0, 12, 0),
      shiftedColor(hex, -8, 0, 0),
      shiftedColor(hex, 8, 0, 0)
    ]).slice(0, 10).map((shade) => ({ hex: shade }));
  }

  if (currentSystem === "cmyk") {
    const baseCmyk = rgbToCmyk(hexToRgb(hex));
    const baseSwatch = { hex: rgbToHex(cmykToRgb(baseCmyk)), cmyk: baseCmyk };

    return uniqueSwatches([
      baseSwatch,
      cmykShift(baseCmyk, { k: 8 }),
      cmykShift(baseCmyk, { k: 16 }),
      cmykShift(baseCmyk, { k: -8 }),
      cmykShift(baseCmyk, { c: 8, k: 2 }),
      cmykShift(baseCmyk, { m: 8, k: 2 }),
      cmykShift(baseCmyk, { y: 8, k: 2 }),
      cmykShift(baseCmyk, { c: -6, m: -6, y: -6 }),
      cmykShift(baseCmyk, { c: 4, m: 4, y: 4, k: -4 }),
      cmykShift(baseCmyk, { c: -4, m: -4, y: -4, k: 4 })
    ]).slice(0, 10);
  }

  return getRelatedShades(hex);
}

function describeSwatch(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);
  const cmyk = rgbToCmyk(rgb);
  const nearestPantone = nearestPantones(hex)[0];

  if (currentSystem === "hsl") {
    return `HSL ${hsl.h}deg, ${hsl.s}%, ${hsl.l}%`;
  }

  if (currentSystem === "cmyk") {
    return `CMYK ${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;
  }

  if (currentSystem === "pantone") {
    return `${nearestPantone.name} · ${nearestPantone.hex}`;
  }

  return `RGB ${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

function getHarmonyGroups(hex) {
  const hsl = rgbToHsl(hexToRgb(hex));
  return [
    {
      title: "Primary",
      note: "base wheel",
      colors: ["#E4002B", "#0057B8", "#FFCD00"]
    },
    {
      title: "Secondary",
      note: "mixed pairs",
      colors: ["#FF671F", "#00B140", "#753BBD"]
    },
    {
      title: "Tertiary",
      note: "six-step hue",
      colors: [shiftedColor(hex, 30), shiftedColor(hex, 90), shiftedColor(hex, 150)]
    },
    {
      title: "Selected harmony",
      note: `${hsl.h} degrees`,
      colors: [hex, shiftedColor(hex, 180), shiftedColor(hex, 30)]
    }
  ];
}

function getContrastBackgrounds(hex) {
  const hsl = rgbToHsl(hexToRgb(hex));
  return [
    shiftedColor(hex, 180, 10, hsl.l > 55 ? -26 : 26),
    shiftedColor(hex, 150, -8, hsl.l > 55 ? -34 : 32),
    shiftedColor(hex, 210, 0, hsl.l > 55 ? -42 : 40)
  ];
}

function getContrastTexts(hex) {
  return ["#111111", "#FFFFFF", shiftedColor(hex, 180, 28, relativeLuminance(hex) > 0.44 ? -52 : 52)];
}

function renderValues(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);
  const cmyk = currentCmykOverride || rgbToCmyk(rgb);
  const hsv = rgbToHsv(rgb);
  const pantones = nearestPantones(hex);

  const systems = {
    rgb: [
      ["HEX", hex],
      ["RGB", `${rgb.r}, ${rgb.g}, ${rgb.b}`],
      ["RGBA", `${rgb.r}, ${rgb.g}, ${rgb.b}, 1`],
      ["HSV", `${hsv.h}deg, ${hsv.s}%, ${hsv.v}%`]
    ],
    hsl: [
      ["HSL", `${hsl.h}deg, ${hsl.s}%, ${hsl.l}%`],
      [t("hue"), `${hsl.h}deg`],
      [t("saturation"), `${hsl.s}%`],
      [t("lightness"), `${hsl.l}%`]
    ],
    cmyk: [
      ["CMYK", cmykValue(cmyk)],
      [t("cyan"), `${cmyk.c}%`],
      ["Magenta", `${cmyk.m}%`],
      [t("yellow"), `${cmyk.y}%`],
      [t("key"), `${cmyk.k}%`]
    ],
    pantone: pantones.map((item, index) => [`${t("match")} ${index + 1}`, `${item.name} · ${item.hex}`])
  };

  valueList.innerHTML = systems[currentSystem]
    .map(([label, value]) => `
      <div class="value-row">
        <span>${label}</span>
        <strong>${value}</strong>
        <button class="mini-copy" type="button" data-copy="${value}" title="${t("copyLabel")} ${label}" aria-label="${t("copyLabel")} ${label}">⧉</button>
      </div>
    `)
    .join("") + (currentSystem === "cmyk" ? `
      <p class="system-note">${t("cmykNote")}</p>
    ` : "");

  activeSystem.textContent = currentSystem.toUpperCase();
}

function renderRelated(hex) {
  const activeCmyk = currentCmykOverride || rgbToCmyk(hexToRgb(currentHex));

  relatedGrid.innerHTML = getSystemRelatedShades(hex)
    .map((swatch) => {
      const description = swatch.cmyk ? cmykLabel(swatch.cmyk) : describeSwatch(swatch.hex);
      const isSelected = swatch.cmyk ? sameCmyk(activeCmyk, swatch.cmyk) : normalizeHex(swatch.hex) === currentHex;
      const cmykAttribute = swatch.cmyk ? ` data-cmyk="${cmykData(swatch.cmyk)}"` : "";
      return `<button class="swatch${isSelected ? " selected" : ""}" type="button" data-color="${swatch.hex}"${cmykAttribute} title="${description}" aria-label="Use ${description}" style="background:${swatch.hex}"></button>`;
    })
    .join("");
}

function renderFamilies(hex) {
  if (!harmonyList) return;

  harmonyList.innerHTML = getHarmonyGroups(hex)
    .map((group) => `
      <div class="harmony-group">
        <div class="harmony-title">${group.title}<span>${group.note}</span></div>
        <div class="harmony-colors">
          ${group.colors.map((color) => `
            <button class="family-card" type="button" data-color="${color}" style="background:${color};color:${textColorFor(color)};text-shadow:none">
              ${color}
            </button>
          `).join("")}
        </div>
      </div>
    `)
    .join("");
}

function renderContrast(hex) {
  if (!backgroundGrid || !textGrid) return;

  backgroundGrid.innerHTML = getContrastBackgrounds(hex)
    .map((background) => {
      const text = textColorFor(background);
      const ratio = contrastRatio(background, text).toFixed(1);
      return `
        <button class="contrast-card" type="button" data-color="${background}" style="background:${background};color:${text}">
          <strong>Aa</strong><span>${ratio}:1</span>
        </button>
      `;
    })
    .join("");

  textGrid.innerHTML = getContrastTexts(hex)
    .map((text) => {
      const ratio = contrastRatio(hex, text).toFixed(1);
      return `
        <button class="contrast-card" type="button" data-color="${text}" style="background:${hex};color:${text}">
          <strong>Aa</strong><span>${ratio}:1</span>
        </button>
      `;
    })
    .join("");
}

function updateColor(nextHex, options = {}) {
  const normalized = normalizeHex(nextHex);
  if (!normalized) return;

  currentHex = normalized;
  currentCmykOverride = options.cmyk || null;
  if (!options.keepPalette) {
    paletteBaseHex = normalized;
  }
  document.documentElement.style.setProperty("--accent", currentHex);
  colorInput.value = currentHex.toLowerCase();
  hexInput.value = currentHex;
  selectedColor.style.background = currentHex;
  hexValue.textContent = currentHex;
  colorName.textContent = nearestName(currentHex);
  renderValues(currentHex);
  renderRelated(paletteBaseHex);
  renderFamilies(currentHex);
  renderContrast(currentHex);
}

async function copyText(value) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch (error) {
    // Fall back below for file:// and stricter browser clipboard settings.
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-999px";
  textArea.style.left = "-999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    textArea.remove();
  }

  return copied;
}

function showCopyFeedback(button, copied) {
  const originalText = button.textContent;
  button.textContent = copied ? t("copied") : t("copyFailed");
  button.classList.toggle("copied", copied);
  window.setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("copied");
  }, 1000);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  if (languageSelect) {
    languageSelect.setAttribute("aria-label", t("chooseLanguage"));
  }
  updateThemeButton();
  renderValues(currentHex);
  renderRelated(paletteBaseHex);
}

function updateThemeButton() {
  if (!themeToggle) return;
  const isDark = document.body.classList.contains("dark-theme");
  const label = isDark ? t("lightTheme") : t("darkTheme");
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.querySelector("span").textContent = isDark ? "○" : "◐";
}

function syncSystemTabs() {
  tabs.forEach((item) => item.classList.toggle("active", item.dataset.system === currentSystem));
}

hexInput.addEventListener("input", (event) => {
  const normalized = normalizeHex(event.target.value);
  if (normalized) updateColor(normalized, { cmyk: null });
});

colorInput.addEventListener("input", (event) => updateColor(event.target.value, { cmyk: null }));

languageSelect?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  updateThemeButton();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentSystem = tab.dataset.system;
    if (currentSystem !== "cmyk") {
      currentCmykOverride = null;
    }
    syncSystemTabs();
    renderValues(currentHex);
    renderRelated(paletteBaseHex);
  });
});

document.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy], [data-copy-target]");
  const colorButton = event.target.closest("[data-color]");

  if (copyButton) {
    const directValue = copyButton.dataset.copy;
    const targetValue = copyButton.dataset.copyTarget ? document.querySelector(`#${copyButton.dataset.copyTarget}`)?.textContent : "";
    const copied = await copyText(directValue || targetValue || currentHex);
    showCopyFeedback(copyButton, copied);
  }

  if (colorButton) {
    const isRelatedSwatch = relatedGrid.contains(colorButton);
    updateColor(colorButton.dataset.color, {
      cmyk: parseCmykData(colorButton.dataset.cmyk),
      keepPalette: isRelatedSwatch
    });
  }
});

syncSystemTabs();
updateColor(currentHex);
applyLanguage(currentLanguage);
