import { asset } from "@/lib/asset";

/**
 * Personal facts. Source of truth: CV + what Mahmoud confirmed.
 * Production URL (GitHub Pages user site). Override with NEXT_PUBLIC_SITE_URL only for a custom domain.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://m7mod77.github.io").replace(/\/$/, "");

export const profile = {
  firstName: "Mahmoud",
  lastName: "Elsallal",
  fullName: "Mahmoud Elsallal",
  role: "Frontend Developer",
  location: "Cairo, Egypt",
  currently: { title: "Full-Stack Developer", company: "Kayfa Academy" },
  availability: "Open to frontend roles",
  headline: "I build web interfaces in React and Next.js — and understand the APIs behind them.",
  description:
    "Mahmoud Elsallal is a frontend developer in Cairo building web interfaces with React, Next.js and TypeScript, currently working as a Full-Stack Developer at Kayfa Academy.",
  email: "m7modsallal77@gmail.com",
  links: {
    github: "https://github.com/M7mod77",
    linkedin: "https://www.linkedin.com/in/mahmoud-sallal-462a1324a",
    resume: asset("/resume/Mahmoud_Elsallal_CV.pdf"),
  },
} as const;

export const about = [
  "I studied Computer and Information Science at Future Academy and focused on the frontend: React, Next.js and TypeScript, styled with Tailwind CSS.",
  "Since July 2026 I've worked as a Full-Stack Developer at Kayfa Academy, building interfaces and the endpoints behind them — authentication, APIs and database work included. That context shapes how I build the frontend: components designed around real data, real loading states and real users.",
];
