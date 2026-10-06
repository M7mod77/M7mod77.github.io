/**
 * Project content. Every feature listed here was verified in the source:
 *   Fresh Cart, Social App, News  → github.com/M7mod77
 *   NGEN Academy                  → Mahmoud's own work in the Kayfa codebase (private)
 *
 * Links are optional on purpose: a "Live demo" button only renders when `live` is set,
 * so an undeployed project never shows a placeholder production link.
 *
 * Screenshots live in /public/projects/<slug>/ (real captures, cropped only to remove browser
 * chrome, OS taskbar, dev-overlay badges and empty margins). `src` is the public URL — no "/public".
 * The first shot is the dominant one; `composition` picks how the shots are arranged.
 */
export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type ProjectLink = { label: string; href: string };

export type Composition =
  | "layered" // dominant browser frame + a second page overlapping lower-right
  | "overlap" //  dominant page + a smaller second page overlapping its lower-right (~20%)
  | "detail" //  dominant page + a floating detail panel lower-left
  | "single"; // one large frame

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: "Personal project" | "Professional work";
  tagline: string;
  year: string;
  role: string;
  status?: string;
  challenge: string;
  approach: string;
  shows: string;
  features: string[];
  stack: string[];
  links: { live?: string; code?: string; site?: ProjectLink };
  composition: Composition;
  shots: Shot[];
};

export const featured: Project[] = [
  {
    slug: "fresh-cart",
    index: "01",
    title: "Fresh Cart",
    kind: "Personal project",
    tagline: "Next.js e-commerce storefront",
    year: "2026",
    role: "Solo — design to build",
    challenge:
      "A storefront where browsing stays open, while the shop, cart, brand pages and checkout require a signed-in user.",
    approach:
      "NextAuth sessions with a route-protection proxy, server actions for cart and payment requests, and forms validated with React Hook Form and Zod — on reusable shadcn/Radix components.",
    shows: "Next.js App Router architecture with real authentication and protected routes in a full shopping flow.",
    features: [
      "Product browsing and product details",
      "Categories and brands",
      "Cart with quantity controls",
      "Wishlist",
      "Cash or online checkout",
      "Sign-in and registration with NextAuth",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth", "React Hook Form", "Zod", "shadcn/ui"],
    links: { code: "https://github.com/M7mod77/fresh-cart" },
    composition: "layered",
    shots: [
      {
        src: "/projects/fresh-cart/home.webp",
        width: 1594,
        height: 650,
        caption: "Home",
        alt: "Fresh Cart home page: search bar, navigation with categories and brands, and a green promotional hero slider reading “Fresh Products Delivered to your Door”",
      },
      {
        src: "/projects/fresh-cart/product.webp",
        width: 1584,
        height: 759,
        caption: "Product details",
        alt: "Fresh Cart product page for a woman's shawl: image gallery, rating, price, stock status, quantity selector, total price, and Add to Cart and Buy Now buttons",
      },
    ],
  },
  {
    slug: "ngen-academy",
    index: "02",
    title: "NGEN Academy",
    kind: "Professional work",
    tagline: "Student & parent learning experience",
    year: "2026",
    role: "Full-Stack Developer · Kayfa Academy",
    status: "In development",
    challenge:
      "Give students a dashboard that always answers “what should I do next?”, and parents a calm, read-only view of each child's progress — in English and Arabic, on any screen.",
    approach:
      "I built the student dashboard's core components and the Parent Portal on shared UI primitives, worked on the progress and course pages, added an API route for a child's learning data, and covered the portal's data model with unit tests.",
    shows: "Production work in a large Next.js and TypeScript codebase: bilingual RTL, responsive layouts and role-specific UI.",
    features: [
      "Next-action hero with a live class countdown",
      "Progress page: XP, attendance and the belt journey",
      "Course page: lessons, quizzes, projects and certificate",
      "Parent Portal: linked children, assignments, grades and class history",
      "Responsive desktop, tablet and mobile layouts",
      "English and Arabic (right-to-left)",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth", "Zod"],
    links: { site: { label: "ngenschools.com", href: "https://ngenschools.com" } },
    composition: "overlap",
    shots: [
      {
        src: "/projects/ngen-academy/progress-overview.webp",
        width: 1200,
        height: 860,
        caption: "Progress",
        alt: "NGEN Academy progress page in Arabic: level 4 with 675 XP, an 8-week XP chart, lessons, projects and quizzes completed, XP by activity, and 100% attendance",
      },
      {
        src: "/projects/ngen-academy/dashboard-hero.webp",
        width: 914,
        height: 540,
        caption: "Student dashboard",
        alt: "NGEN Academy student dashboard in Arabic: greeting, a purple next-action hero with the NGEN mascot and level dial, and the momentum stats row",
      },
    ],
  },
  {
    slug: "social-app",
    index: "03",
    title: "Social App",
    kind: "Personal project",
    tagline: "API-driven social feed",
    year: "2026",
    role: "Solo — design to build",
    challenge:
      "Keep a feed, a single post and its nested comments and replies in sync while users create, edit and delete content.",
    approach:
      "TanStack Query for server state, with mutations that invalidate the affected queries; an Axios interceptor that attaches the user's token; protected and guest-only routes; forms validated with React Hook Form and Zod.",
    shows: "API-driven frontend work: authentication, CRUD and asynchronous server state in a component-based React app.",
    features: [
      "Sign-in and registration",
      "Create, edit and delete posts",
      "Post details",
      "Comments and replies",
      "Protected routes",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "HeroUI", "TanStack Query", "Axios", "React Router", "Zod"],
    links: { code: "https://github.com/M7mod77/Social-App" },
    composition: "detail",
    shots: [
      {
        src: "/projects/social-app/feed.webp",
        width: 1584,
        height: 760,
        caption: "Feed — create, edit, delete",
        alt: "Social App feed: a post composer, and the user's own posts with edit and delete buttons, comment counts and a comment box",
      },
      {
        src: "/projects/social-app/comments.webp",
        width: 730,
        height: 643,
        caption: "Comments",
        alt: "Social App comment thread: a post with five comments, a user profile card, and a comment box with Post Comment button",
      },
    ],
  },
];

export const more: Project[] = [
  {
    slug: "news",
    index: "04",
    title: "Techifly News",
    kind: "Personal project",
    tagline: "Arabic news reader",
    year: "2026",
    role: "Solo",
    challenge: "",
    approach: "",
    shows:
      "An Arabic-first, right-to-left news site built on public RSS feeds: seven categories, a merged latest feed, 10-minute session caching and shared in-flight requests. Deployed to GitHub Pages with GitHub Actions.",
    features: [],
    stack: ["React", "React Router", "Vite", "CSS"],
    links: { live: "https://m7mod77.github.io/news/", code: "https://github.com/M7mod77/news" },
    composition: "single",
    shots: [
      {
        src: "/projects/news/category.webp",
        width: 1600,
        height: 730,
        caption: "Sports category",
        alt: "Techifly News sports category page in Arabic: category navigation with Sports active, and four news cards with photos, headlines, summaries and read-more links",
      },
    ],
  },
];
