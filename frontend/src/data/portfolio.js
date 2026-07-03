// Portfolio data pulled from Tsvetelina's ArtStation profile
// Source: https://www.artstation.com/tsvetelina

export const artist = {
  name: "Tsvetelina",
  role: "2D Concept Artist",
  targetStudio: "Riot Games",
  location: "Available Worldwide · Remote",
  tagline: "Crafting characters, worlds, and stories — one brushstroke at a time.",
  bio: [
    "I'm a 2D concept artist with a love for character-driven storytelling, dark fantasy palettes, and worlds that feel lived-in. My work spans character concepts, skin design, tarot illustration, and traditional portraiture.",
    "Currently pursuing a concept art internship at Riot Games — building on a portfolio inspired by League of Legends' visual language, anime lineage, and classical art fundamentals. I chase pieces that feel cinematic, emotive, and unmistakably mine.",
  ],
  email: "hello@tsvetelina.art",
  socials: [
    { label: "ArtStation", url: "https://www.artstation.com/tsvetelina", handle: "tsvetelina" },
    { label: "Instagram", url: "https://www.instagram.com/tliishh", handle: "@tliishh" },
    { label: "Email", url: "mailto:hello@tsvetelina.art", handle: "hello@tsvetelina.art" },
  ],
  avatar: "https://cdna.artstation.com/p/users/avatars/013/989/522/large/2b1a3ae565381760124b30f25ec62a1a.jpg?1781560300",
};

export const skills = [
  "Character Design",
  "Skin Concept",
  "Illustration",
  "Color Theory",
  "Visual Development",
  "Photoshop",
  "Procreate",
  "Traditional Media",
  "Anatomy",
  "Lighting & Mood",
  "Storytelling",
  "Anime & Manga",
];

// Note: replacing "smaller_square" (300x300) with "large" gives the full-quality asset
export const projects = [
  {
    id: "kaisa",
    title: "Blood Moon Kai'sa",
    category: "Skin Concept",
    subtitle: "League of Legends — Fan Concept",
    year: "2025",
    image: "https://cdnb.artstation.com/p/assets/covers/images/099/990/601/large/tsvetelina-tsvetelina-img-5888.jpg?1781561224",
    thumb: "https://cdnb.artstation.com/p/assets/covers/images/099/990/601/large/tsvetelina-tsvetelina-img-5888.jpg?1781561224",
    link: "https://www.artstation.com/artwork/Ov22VK",
    description:
      "A Blood Moon skin fan concept for Kai'sa built around ritual masks, crimson silk, and the eerie stillness that defines the Blood Moon cult. Explored a limited palette (bone, ink, arterial red) to keep the silhouette readable and the mood cinematic.",
    span: "col-span-12 md:col-span-8 md:row-span-2",
  },
  {
    id: "tarot",
    title: "Tarot Cards — The Fool",
    category: "Illustration Series",
    subtitle: "Original Deck Design",
    year: "2025",
    image: "https://cdna.artstation.com/p/assets/covers/images/099/989/698/large/tsvetelina-tsvetelina-fool.jpg?1781559119",
    thumb: "https://cdna.artstation.com/p/assets/covers/images/099/989/698/large/tsvetelina-tsvetelina-fool.jpg?1781559119",
    link: "https://www.artstation.com/artwork/6LKX9r",
    description:
      "Opening piece of an ongoing 22-card Major Arcana deck. Each card reinterprets classical symbolism through a modern narrative lens — soft ceremonial linework, ornamental borders, and a warm-cool split light.",
    span: "col-span-12 md:col-span-4",
  },
  {
    id: "james",
    title: "James McAvoy",
    category: "Traditional Portrait",
    subtitle: "Graphite study",
    year: "2025",
    image: "https://cdnb.artstation.com/p/assets/images/images/099/694/967/large/tsvetelina-img-9003.jpg?1780685999",
    thumb: "https://cdnb.artstation.com/p/assets/images/images/099/694/967/large/tsvetelina-img-9003.jpg?1780685999",
    link: "https://www.artstation.com/artwork/EzlKN2",
    description:
      "Traditional graphite portrait study — focused on likeness, subtle value shifts across the face, and translating photographic reference into a living pencil rendering. Fundamentals feeding directly into digital work.",
    span: "col-span-12 md:col-span-4",
  },
  {
    id: "anime",
    title: "Anime / Manga Study",
    category: "Illustration",
    subtitle: "Personal work",
    year: "2025",
    image: "https://cdna.artstation.com/p/assets/images/images/099/694/802/20260605135705/large/tsvetelina-img-0428.jpg?1780685825",
    thumb: "https://cdna.artstation.com/p/assets/images/images/099/694/802/20260605135705/large/tsvetelina-img-0428.jpg?1780685825",
    link: "https://www.artstation.com/artwork/x3WxOR",
    description:
      "Personal anime/manga illustration exploring expressive linework and layered flat colour. A study in silhouette clarity, hair rendering, and the graphic economy that anime does so well.",
    span: "col-span-12 md:col-span-8",
  },
];
