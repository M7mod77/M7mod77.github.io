/** Employment, training and education — kept separate on purpose. Source: CV + confirmed role at Kayfa. */

export const experience = {
  company: "Kayfa Academy",
  url: "https://kayfa.io/",
  role: "Full-Stack Developer",
  period: "Jul 2026 — Present",
  frontend: [
    "React and Next.js interfaces",
    "Responsive layouts and reusable UI components",
    "Dashboards, landing pages and product pages",
    "API integration",
    "Maintaining and improving existing features and fixing UI bugs",
  ],
  backend: [
    "APIs and backend functionality",
    "Authentication and authorization",
    "Database-related work",
    "Connecting frontend and backend services",
    "Debugging backend issues and supporting end-to-end features",
  ],
  product: { name: "NGEN Academy", href: "#work-ngen-academy" },
};

export const training = [
  { period: "2026", org: "ITI — Information Technology Institute", program: "Summer Code Camp · React Frontend Development", focus: "React, JavaScript, HTML, CSS, component-based architecture" },
  { period: "Sep 2025 — Mar 2026", org: "Route Academy", program: "Frontend Web Development Diploma", focus: "React, JavaScript, HTML, CSS, responsive interfaces" },
  { period: "May 2026", org: "Route Academy", program: "Backend Web Development Diploma", focus: "C#, .NET, ASP.NET Core, REST APIs, databases, authentication" },
];

export const education = {
  period: "2023 — 2026",
  org: "Future Academy",
  program: "Bachelor's degree, Computer and Information Science",
  note: "Cairo · Grade: Very Good",
};

export const capabilities = [
  { group: "Frontend", primary: true, items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Also used", items: ["React Router", "TanStack Query", "Axios", "REST APIs", "JWT", "Bootstrap"] },
  { group: "Backend", items: ["C#", ".NET", "ASP.NET Core"] },
  { group: "Databases", items: ["SQL", "SQL Server", "MySQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman"] },
];
