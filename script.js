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
const imageInput = document.querySelector("#imageInput");
const imagePreview = document.querySelector("#imagePreview");
const imagePaletteGrid = document.querySelector("#imagePaletteGrid");
const imageColorCount = document.querySelector("#imageColorCount");
const paletteSizeSelect = document.querySelector("#paletteSizeSelect");
const savedPalette = document.querySelector("#savedPalette");
const exportPaletteButton = document.querySelector("#exportPaletteButton");
const colorCardOverlay = document.querySelector("#colorCardOverlay");
const closeColorCard = document.querySelector("#closeColorCard");
const downloadColorCard = document.querySelector("#downloadColorCard");
const exportCardSwatch = document.querySelector("#exportCardSwatch");
const exportCodeGrid = document.querySelector("#exportCodeGrid");
const colorCardTitle = document.querySelector("#colorCardTitle");
const palettePreviewOverlay = document.querySelector("#palettePreviewOverlay");
const closePalettePreview = document.querySelector("#closePalettePreview");
const palettePreviewImage = document.querySelector("#palettePreviewImage");
const downloadPalettePreview = document.querySelector("#downloadPalettePreview");
const tabs = [...document.querySelectorAll(".tab")];

const translations = {
  en: {
    chooseLanguage: "Choose language",
    buyCoffee: "Buy me a coffee",
    heroText: "Your practical color picker for design systems, palettes, contrast, and production-ready color values.",
    pasteHex: "Pick a color",
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
    match: "Match",
    imagePalette: "Image to palette",
    uploadImage: "Upload image",
    imageDropHint: "Choose a photo to extract dominant colors.",
    savedPalette: "Saved palette",
    paletteSize: "Palette size",
    addToPalette: "Add to palette",
    suggestColor: "Suggest color",
    removeColor: "Remove color",
    copyColor: "Copy color",
    exportCard: "Export card",
    exportPalette: "Export palette",
    palettePreview: "Palette preview",
    downloadCard: "Download",
    colorCard: "Color card",
    closeColorCard: "Close color card",
    emptySlot: "Empty"
  },
  pt: {
    chooseLanguage: "Escolher idioma",
    buyCoffee: "Buy me a coffee",
    heroText: "Seu seletor de cores prático para sistemas de design, paletas e valores de cor prontos para produção.",
    pasteHex: "Escolha uma cor",
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
    match: "Amostra",
    imagePalette: "Imagem para paleta",
    uploadImage: "Enviar imagem",
    imageDropHint: "Escolha uma foto para extrair as cores dominantes.",
    savedPalette: "Paleta salva",
    paletteSize: "Tamanho da paleta",
    addToPalette: "Adicionar à paleta",
    suggestColor: "Sugerir cor",
    removeColor: "Remover cor",
    copyColor: "Copiar cor",
    exportCard: "Exportar cartão",
    exportPalette: "Exportar paleta",
    palettePreview: "Prévia da paleta",
    downloadCard: "Baixar",
    colorCard: "Cartão da cor",
    closeColorCard: "Fechar cartão da cor",
    emptySlot: "Vazio"
  },
  es: {
    chooseLanguage: "Elegir idioma",
    buyCoffee: "Buy me a coffee",
    heroText: "Tu selector de color práctico para sistemas de diseño, paletas y valores de color listos para producción.",
    pasteHex: "Elige un color",
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
    match: "Muestra",
    imagePalette: "Imagen a paleta",
    uploadImage: "Subir imagen",
    imageDropHint: "Elige una foto para extraer los colores dominantes.",
    savedPalette: "Paleta guardada",
    paletteSize: "Tamaño de paleta",
    addToPalette: "Añadir a paleta",
    suggestColor: "Sugerir color",
    removeColor: "Eliminar color",
    copyColor: "Copiar color",
    exportCard: "Exportar tarjeta",
    exportPalette: "Exportar paleta",
    palettePreview: "Vista previa de paleta",
    downloadCard: "Descargar",
    colorCard: "Tarjeta de color",
    closeColorCard: "Cerrar tarjeta de color",
    emptySlot: "Vacío"
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
let paletteSize = Number(paletteSizeSelect?.value || 5);
let savedColors = [];
let exportCardHex = currentHex;

const icons = {
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>',
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>',
  card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>',
  sparkles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.064 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.064a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
  download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>'
};

function icon(name) {
  return icons[name] || "";
}

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

function getImagePalette(image, colorCount = 8) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const maxSize = 160;
  const scale = Math.min(maxSize / image.naturalWidth, maxSize / image.naturalHeight, 1);
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const buckets = new Map();

  for (let index = 0; index < pixels.length; index += 16) {
    const alpha = pixels[index + 3];
    if (alpha < 180) continue;

    const r = pixels[index];
    const g = pixels[index + 1];
    const b = pixels[index + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max < 18 || min > 242) continue;

    const key = `${Math.round(r / 24)},${Math.round(g / 24)},${Math.round(b / 24)}`;
    const bucket = buckets.get(key) || { r: 0, g: 0, b: 0, count: 0 };
    bucket.r += r;
    bucket.g += g;
    bucket.b += b;
    bucket.count += 1;
    buckets.set(key, bucket);
  }

  return [...buckets.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, colorCount)
    .map((bucket) => rgbToHex({
      r: bucket.r / bucket.count,
      g: bucket.g / bucket.count,
      b: bucket.b / bucket.count
    }));
}

function renderImagePalette(colors) {
  if (!imagePaletteGrid || !imageColorCount) return;

  imageColorCount.textContent = colors.length;
  imagePaletteGrid.innerHTML = colors.map((hex) => `
    <div class="image-color-wrap">
      <button class="image-color" type="button" data-color="${hex}" data-copy="${hex}" title="${hex}" aria-label="Use ${hex}" style="background:${hex};color:${textColorFor(hex)};text-shadow:none">
        ${hex}
      </button>
      <button class="add-swatch" type="button" data-add-color="${hex}" title="${t("addToPalette")}" aria-label="${t("addToPalette")} ${hex}">${icon("plus")}</button>
    </div>
  `).join("");
}

function handleImageUpload(file) {
  if (!file || !imagePreview) return;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const image = new Image();
    image.addEventListener("load", () => {
      imagePreview.innerHTML = "";
      imagePreview.appendChild(image);
      const colors = getImagePalette(image);
      renderImagePalette(colors);
      if (colors[0]) updateColor(colors[0]);
    });
    image.src = reader.result;
  });

  reader.readAsDataURL(file);
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
        <button class="mini-copy" type="button" data-copy="${value}" title="${t("copyLabel")} ${label}" aria-label="${t("copyLabel")} ${label}">${icon("copy")}</button>
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
      return `
        <div class="swatch-item">
          <button class="swatch${isSelected ? " selected" : ""}" type="button" data-color="${swatch.hex}"${cmykAttribute} title="${description}" aria-label="Use ${description}" style="background:${swatch.hex}"></button>
          <button class="add-swatch" type="button" data-add-color="${swatch.hex}" title="${t("addToPalette")}" aria-label="${t("addToPalette")} ${description}">${icon("plus")}</button>
        </div>
      `;
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

function getPaletteSuggestion(slotIndex = 0) {
  const base = savedColors[0] || currentHex;
  const suggestions = uniqueColors([
    currentHex,
    shiftedColor(base, 30, 0, 0),
    shiftedColor(base, -30, 0, 0),
    shiftedColor(base, 180, 8, 0),
    shiftedColor(base, 120, 0, 0),
    shiftedColor(base, 240, 0, 0),
    shiftedColor(base, 0, -18, 16),
    shiftedColor(base, 0, 12, -14),
    shiftedColor(base, 150, -8, 8),
    shiftedColor(base, 210, -8, -8)
  ]);

  return suggestions.find((color) => !savedColors.includes(color)) || shiftedColor(base, (slotIndex + 1) * 37, 0, 0);
}

function addColorToPalette(hex) {
  const normalized = normalizeHex(hex);
  if (!normalized || savedColors.includes(normalized)) return;
  if (savedColors.length >= paletteSize) return;

  savedColors.push(normalized);
  renderSavedPalette();
}

function setPaletteSlot(index, hex) {
  const normalized = normalizeHex(hex);
  if (!normalized || index < 0 || index >= paletteSize) return;

  savedColors[index] = normalized;
  savedColors = savedColors.filter(Boolean).slice(0, paletteSize);
  renderSavedPalette();
}

function removePaletteColor(index) {
  savedColors.splice(index, 1);
  renderSavedPalette();
}

function setPaletteSize(nextSize) {
  paletteSize = clamp(Number(nextSize) || 5, 3, 8);
  savedColors = savedColors.slice(0, paletteSize);
  renderSavedPalette();
}

function renderSavedPalette() {
  if (!savedPalette) return;

  const slots = Array.from({ length: paletteSize }, (_, index) => savedColors[index] || "");
  savedPalette.innerHTML = slots.map((hex, index) => {
    if (!hex) {
      return `
        <div class="palette-slot empty">
          <div class="slot-actions">
            <button class="slot-action" type="button" data-fill-current="${index}" title="${t("addToPalette")}" aria-label="${t("addToPalette")}">${icon("plus")}</button>
            <button class="slot-action" type="button" data-suggest-slot="${index}" title="${t("suggestColor")}" aria-label="${t("suggestColor")}">${icon("sparkles")}</button>
          </div>
          <span>${t("emptySlot")}</span>
        </div>
      `;
    }

    return `
      <div class="palette-slot filled" style="background:${hex};color:${textColorFor(hex)};text-shadow:none">
        <div class="slot-actions">
          <button class="slot-action" type="button" data-copy="${hex}" title="${t("copyColor")}" aria-label="${t("copyColor")} ${hex}">${icon("copy")}</button>
          <button class="slot-action" type="button" data-export-color="${hex}" title="${t("exportCard")}" aria-label="${t("exportCard")} ${hex}">${icon("card")}</button>
          <button class="slot-action" type="button" data-remove-slot="${index}" title="${t("removeColor")}" aria-label="${t("removeColor")} ${hex}">${icon("x")}</button>
        </div>
        <span>${hex}</span>
      </div>
    `;
  }).join("");

  updatePaletteExportLink();
}

function getColorCardCodes(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb);
  const cmyk = rgbToCmyk(rgb);
  const pantone = nearestPantones(hex)[0];

  return [
    ["HEX", hex],
    ["RGB", `${rgb.r}, ${rgb.g}, ${rgb.b}`],
    ["HSL", `${hsl.h}deg, ${hsl.s}%, ${hsl.l}%`],
    ["CMYK", cmykValue(cmyk)],
    ["PANTONE", pantone ? `${pantone.name}` : "-"],
    ["NAME", nearestName(hex)]
  ];
}

function renderColorCard(hex) {
  if (!exportCardSwatch || !exportCodeGrid || !colorCardTitle) return;

  exportCardHex = normalizeHex(hex) || currentHex;
  exportCardSwatch.style.background = exportCardHex;
  colorCardTitle.textContent = t("colorCard");
  exportCodeGrid.innerHTML = getColorCardCodes(exportCardHex)
    .map(([label, value]) => `
      <div class="export-code">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `)
    .join("");
}

function openColorCard(hex) {
  if (!colorCardOverlay) return;

  renderColorCard(hex);
  colorCardOverlay.hidden = false;
}

function closeColorCardModal() {
  if (!colorCardOverlay) return;
  colorCardOverlay.hidden = true;
}

function drawColorCard(canvas, hex) {
  const ctx = canvas.getContext("2d");
  const codes = getColorCardCodes(hex);
  const width = 900;
  const swatchHeight = 620;
  const bottomHeight = 430;
  const height = swatchHeight + bottomHeight;

  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = hex;
  ctx.fillRect(0, 0, width, swatchHeight);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, swatchHeight, width, bottomHeight);
  ctx.fillStyle = "#111111";
  ctx.font = "700 30px Inter, Arial, sans-serif";
  ctx.fillText(t("colorCard"), 70, swatchHeight + 70);

  ctx.font = "700 22px Inter, Arial, sans-serif";
  codes.forEach(([label, value], index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = col === 0 ? 70 : 470;
    const y = swatchHeight + 135 + (row * 84);
    ctx.fillStyle = "#6c6c72";
    ctx.fillText(label, x, y);
    ctx.fillStyle = "#111111";
    ctx.font = "400 25px Inter, Arial, sans-serif";
    ctx.fillText(value, x, y + 34);
    ctx.font = "700 22px Inter, Arial, sans-serif";
  });
}

function downloadCanvas(canvas, filename) {
  canvas.toBlob((blob) => {
    if (!blob) return;

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.download = filename;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, "image/png");
}

function downloadColorCardImage() {
  const canvas = document.createElement("canvas");
  drawColorCard(canvas, exportCardHex);
  downloadCanvas(canvas, `color-card-${exportCardHex.replace("#", "")}.png`);
}

function drawPaletteExport(canvas) {
  const colors = savedColors.slice(0, paletteSize);
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
    const codes = getColorCardCodes(hex).slice(0, 4);

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.fillStyle = hex;
    ctx.fillRect(x, y, cardWidth, swatchHeight);
    ctx.fillStyle = "#111111";
    ctx.font = "700 24px Inter, Arial, sans-serif";
    ctx.fillText(t("colorCard"), x + 38, y + swatchHeight + 50);

    ctx.font = "700 17px Inter, Arial, sans-serif";
    codes.forEach(([label, value], codeIndex) => {
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

function getPaletteExportDataUrl() {
  const canvas = document.createElement("canvas");
  drawPaletteExport(canvas);
  return canvas.toDataURL("image/png");
}

function updatePaletteExportLink() {
  if (!exportPaletteButton) return;

  const hasColors = savedColors.length > 0;
  exportPaletteButton.classList.toggle("disabled", !hasColors);
  exportPaletteButton.setAttribute("aria-disabled", String(!hasColors));
}

function openPalettePreview() {
  if (!savedColors.length || !palettePreviewOverlay || !palettePreviewImage || !downloadPalettePreview) return;

  const dataUrl = getPaletteExportDataUrl();
  const filename = `saved-palette-${savedColors.length}-colors.png`;
  palettePreviewImage.src = dataUrl;
  downloadPalettePreview.href = dataUrl;
  downloadPalettePreview.download = filename;
  palettePreviewOverlay.hidden = false;
}

function closePalettePreviewModal() {
  if (!palettePreviewOverlay) return;
  palettePreviewOverlay.hidden = true;
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
  if (paletteSizeSelect) {
    paletteSizeSelect.setAttribute("aria-label", t("paletteSize"));
  }
  document.querySelectorAll("[data-add-color]").forEach((button) => {
    button.setAttribute("title", t("addToPalette"));
    button.setAttribute("aria-label", t("addToPalette"));
  });
  document.querySelector("[data-add-current]")?.setAttribute("title", t("addToPalette"));
  document.querySelector("[data-add-current]")?.setAttribute("aria-label", t("addToPalette"));
  if (closeColorCard) {
    closeColorCard.setAttribute("aria-label", t("closeColorCard"));
  }
  if (downloadColorCard) {
    downloadColorCard.textContent = t("downloadCard");
  }
  if (exportPaletteButton) {
    exportPaletteButton.textContent = t("exportPalette");
  }
  if (closePalettePreview) {
    closePalettePreview.setAttribute("aria-label", t("closeColorCard"));
  }
  if (downloadPalettePreview) {
    downloadPalettePreview.textContent = t("downloadCard");
  }
  if (!colorCardOverlay?.hidden) {
    renderColorCard(exportCardHex);
  }
  if (!palettePreviewOverlay?.hidden) {
    openPalettePreview();
  }
  updateThemeButton();
  renderValues(currentHex);
  renderRelated(paletteBaseHex);
  renderSavedPalette();
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

imageInput?.addEventListener("change", (event) => {
  handleImageUpload(event.target.files?.[0]);
});

paletteSizeSelect?.addEventListener("change", (event) => {
  setPaletteSize(event.target.value);
});

closeColorCard?.addEventListener("click", closeColorCardModal);

downloadColorCard?.addEventListener("click", downloadColorCardImage);

exportPaletteButton?.addEventListener("click", (event) => {
  event.preventDefault();
  if (!savedColors.length) {
    return;
  }
  openPalettePreview();
});

closePalettePreview?.addEventListener("click", closePalettePreviewModal);

colorCardOverlay?.addEventListener("click", (event) => {
  if (event.target === colorCardOverlay) {
    closeColorCardModal();
  }
});

palettePreviewOverlay?.addEventListener("click", (event) => {
  if (event.target === palettePreviewOverlay) {
    closePalettePreviewModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && colorCardOverlay && !colorCardOverlay.hidden) {
    closeColorCardModal();
  }
  if (event.key === "Escape" && palettePreviewOverlay && !palettePreviewOverlay.hidden) {
    closePalettePreviewModal();
  }
});

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
  const addButton = event.target.closest("[data-add-color]");
  const addCurrentButton = event.target.closest("[data-add-current]");
  const fillCurrentButton = event.target.closest("[data-fill-current]");
  const suggestButton = event.target.closest("[data-suggest-slot]");
  const removeButton = event.target.closest("[data-remove-slot]");
  const exportButton = event.target.closest("[data-export-color]");

  if (addButton) {
    addColorToPalette(addButton.dataset.addColor);
    return;
  }

  if (addCurrentButton) {
    addColorToPalette(currentHex);
    return;
  }

  if (fillCurrentButton) {
    setPaletteSlot(Number(fillCurrentButton.dataset.fillCurrent), currentHex);
    return;
  }

  if (suggestButton) {
    const slotIndex = Number(suggestButton.dataset.suggestSlot);
    setPaletteSlot(slotIndex, getPaletteSuggestion(slotIndex));
    return;
  }

  if (removeButton) {
    removePaletteColor(Number(removeButton.dataset.removeSlot));
    return;
  }

  if (exportButton) {
    openColorCard(exportButton.dataset.exportColor);
    return;
  }

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
renderSavedPalette();
