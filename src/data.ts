const E = "https://epomaker.com/cdn/shop/files/";
const S = "https://cdn.shopify.com/s/files/1/0280/3931/5529/files/";

export const shop = "https://epomaker.com/products/ajazz-ak820-pro";

export const images = {
  hero: E + "Ajazz_AK820_Pro_Hero_Gallery_1.jpg?v=1784006338&width=2000",
  grey: E + "203A9811.jpg?v=1754840233&width=1400",
  purple: E + "IMG_0257_cc0719c8-2263-4782-9abb-eeb917f02dcd.jpg?v=1747987009&width=1400",
  beige: E + "AJAZZ_AK820PRO_06.png?v=1747987009&width=1400",
  side: E + "203A9818.jpg?v=1747987009&width=1400",
  compact: S + "Ajazz_AK820_Pro_Technology1_1.jpg?v=1784003149",
  tft: S + "Ajazz_AK820_Pro_Technology2_1.jpg?v=1784003899",
  trimode: S + "Ajazz_AK820_Pro_Technology3.jpg?v=1784004114",
  rgb: S + "Ajazz_AK820_Pro_Technology4_1.jpg?v=1784004455",
  sound: S + "Ajazz_AK820_Pro_Sound_Story2_1.jpg?v=1784006765",
  exploded: S + "AJAZZ_AK820_Pro_Exploded_view.png?v=1783937119",
  game: S + "Ajazz_AK820_Pro_Tab1_1.jpg?v=1784045947",
  office: S + "Ajazz_AK820_Pro_Tab2_1.jpg?v=1784046147",
  carbon60: E + "IMG_7744.png?v=1746609221&width=700",
  ek21: E + "EPOMAKEREK21QMK_08.png?v=1751436168&width=700",
  g84: E + "G84PRO.png?v=1773129893&width=700",
};

export type Chapter = { title: string; body: string; img: string };

export const chapters: Chapter[] = [
  {
    title: "A screen that tells you things",
    body: "A 0.85-inch TFT shows the time, battery, operating system and connection at a glance. Turn the metal knob to change volume or scroll through lighting effects.",
    img: images.tft,
  },
  {
    title: "Three ways to connect",
    body: "Bluetooth 5.1, 2.4GHz or USB-C. Move between your laptop, desktop and tablet without unplugging a thing. A 4,000mAh battery keeps you going.",
    img: images.trimode,
  },
  {
    title: "1.6 million colors, shining through",
    body: "South-facing LEDs and double-shot PBT keycaps put the light where you can see it. Build your own lighting profile or let the knob pick one.",
    img: images.rgb,
  },
  {
    title: "Tuned for a soft, deep keystroke",
    body: "Gasket mounting and a flex-cut PC plate and PCB cut vibration, so every press bottoms out cushioned instead of sharp.",
    img: images.sound,
  },
];

export type Keyboard = {
  name: string;
  price: number;
  blurb: string;
  sound: string;
  scene: string;
  img: string;
  to?: string;
  href?: string;
};

export const keyboards: Keyboard[] = [
  {
    name: "Ajazz AK820 Pro",
    price: 68.99,
    blurb: "A 75% gasket-mount board with a TFT screen, a metal knob and tri-mode wireless.",
    sound: "Creamy",
    scene: "Gaming, office, coding",
    img: images.grey,
    to: "/ajazz-ak820-pro",
  },
  {
    name: "Epomaker Carbon60",
    price: 129.99,
    blurb: "A low-profile 60% board with a clicky sound, aimed at coding on the move.",
    sound: "Clicky",
    scene: "Low profile, coding",
    img: images.carbon60,
    href: "https://epomaker.com/products/epomaker-carbon60",
  },
  {
    name: "Epomaker EK21",
    price: 39.99,
    blurb: "A thocky wireless board for office desks, desk setups and gifts.",
    sound: "Thocky",
    scene: "Office, desk setup",
    img: images.ek21,
    href: "https://epomaker.com/products/epomaker-ek21",
  },
  {
    name: "Epomaker G84 Pro",
    price: 89.99,
    blurb: "A compact gasket-mount board with a creamy sound for work, play and design.",
    sound: "Creamy",
    scene: "Office, gaming, design",
    img: images.g84,
    href: "https://epomaker.com/products/epomaker-g84-pro",
  },
];

export const specs: [string, string][] = [
  ["Layout", "75% ANSI, 81 keys"],
  ["Screen", "0.85-inch TFT with metal knob"],
  ["Connectivity", "USB-C, Bluetooth 5.1, 2.4GHz"],
  ["Battery", "4,000mAh"],
  ["Mounting", "Gasket, flex-cut PC plate and PCB"],
  ["Switches", "Hot-swappable, 3 or 5 pin"],
  ["Keycaps", "Double-shot PBT, OEM profile"],
  ["Lighting", "South-facing RGB, 1.6M colors"],
  ["Polling rate", "1,000Hz wired and 2.4GHz, 125Hz Bluetooth"],
  ["Case", "ABS plastic"],
  ["Size and weight", "327 x 136 x 40mm, 0.8kg"],
  ["Systems", "Windows and macOS"],
];

export const switches = [
  {
    name: "Ajazz Gift",
    note: "A smooth, balanced all-rounder for typing, work and games.",
    rows: [
      ["Type", "Linear"],
      ["Trigger force", "45 ± 8 gf"],
      ["Bottom-out force", "60 ± 8 gf"],
      ["Pre-travel", "2.0 ± 0.4 mm"],
      ["Total travel", "3.6 ± 0.2 mm"],
    ],
  },
  {
    name: "Ajazz Flying Fish",
    note: "Lighter and airier, for fast typists and gamers who like a low actuation force.",
    rows: [
      ["Type", "Linear"],
      ["Trigger force", "42 ± 10 gf"],
      ["Bottom-out force", "48 ± 10 gf"],
      ["Pre-travel", "2.0 ± 0.4 mm"],
      ["Total travel", "3.5 ± 0.4 mm"],
    ],
  },
];

export const inBox = [
  "Ajazz AK820 Pro",
  "USB A-to-C cable",
  "2.4GHz receiver, stored in the keyboard",
  "2-in-1 switch and keycap puller",
  "Multilingual manual",
  "3 extra keycaps",
];
