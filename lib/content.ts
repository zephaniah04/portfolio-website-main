// All site copy lives here so it can be edited without touching components.

export const site = {
  name: "Zephaniah Raika",
  firstName: "Zephaniah",
  lastName: "Raika",
  role: "Creative Photographer & Amateur Videographer",
  email: "hello@zephaniahraika.com",
  location: "India",
  // Replace these files with your own photos.
  heroImage: "/images/hero.jpg", // full-screen first page background, landscape
  photo: "/images/profile.jpg", // portrait (~3:4) used in About
};

export type Accent = "lime" | "orange" | "pink" | "blue";

export const accentClass: Record<Accent, { bg: string; text: string; border: string }> = {
  lime: { bg: "bg-lime", text: "text-lime", border: "border-lime" },
  orange: { bg: "bg-orange", text: "text-orange", border: "border-orange" },
  pink: { bg: "bg-pink", text: "text-pink", border: "border-pink" },
  blue: { bg: "bg-blue", text: "text-blue", border: "border-blue" },
};

export type Service = {
  id: string;
  number: string;
  title: string;
  level: string;
  description: string;
  tags: string[];
  accent: Accent;
};

export const services: Service[] = [
  {
    id: "photography",
    number: "01",
    title: "Photography",
    level: "Creative",
    description:
      "Portraits, streets, events and products, shot with an eye for light, mood and the moment in between.",
    tags: ["Portraits", "Street", "Events", "Products"],
    accent: "lime",
  },
  {
    id: "videography",
    number: "02",
    title: "Videography",
    level: "Amateur",
    description:
      "Short films, reels and behind-the-scenes edits. Learning every frame, telling stories in motion.",
    tags: ["Reels", "Short Films", "BTS", "Editing"],
    accent: "orange",
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    level: "Visual",
    description:
      "Posters, social graphics and visual identities that carry the same eye I bring behind the lens.",
    tags: ["Posters", "Social", "Branding", "Layouts"],
    accent: "pink",
  },
];

export type Work = {
  title: string;
  category: string;
  year: string;
  image: string;
};

export const work: Work[] = [
  { title: "Golden Hour", category: "Photography", year: "2026", image: "/images/work/04.jpg" },
  { title: "City Lines", category: "Photography", year: "2026", image: "/images/work/05.jpg" },
  { title: "Still Water", category: "Videography", year: "2025", image: "/images/work/06.jpg" },
  { title: "Analog Days", category: "Design", year: "2025", image: "/images/work/08.jpg" },
  { title: "Quiet Roads", category: "Photography", year: "2025", image: "/images/work/09.jpg" },
  { title: "Night Shift", category: "Videography", year: "2024", image: "/images/work/10.jpg" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Photos delivered" },
  { value: 40, suffix: "+", label: "Shoots & projects" },
  { value: 25, suffix: "+", label: "Designs created" },
  { value: 5, suffix: "AM", label: "Gym alarm" },
];

export type JournalEntry = {
  id: string;
  label: string;
  title: string;
  excerpt: string;
  image: string;
  accent: Accent;
};

// These are the sections the top-right menu links to.
export const journal: JournalEntry[] = [
  {
    id: "finance",
    label: "Finance",
    title: "Money as a creative",
    excerpt:
      "How I budget gear, price shoots and manage irregular income as a freelancer.",
    image: "/images/work/11.jpg",
    accent: "lime",
  },
  {
    id: "blog",
    label: "Blog",
    title: "Notes from the field",
    excerpt:
      "Stories behind the shots, editing breakdowns and lessons from every project.",
    image: "/images/work/12.jpg",
    accent: "orange",
  },
  {
    id: "fitness",
    label: "Fitness",
    title: "Discipline in & out",
    excerpt:
      "Training logs, routines and how staying fit keeps me sharp behind the camera.",
    image: "/images/work/07.jpg",
    accent: "blue",
  },
];

export const menuLinks = [
  { label: "Home", href: "#top" },
  { label: "What I Do", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Finance", href: "#finance" },
  { label: "Blog", href: "#blog" },
  { label: "Fitness", href: "#fitness" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];
