import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { RevealObserver } from "@/components/reveal-observer";
import { profile, siteUrl } from "@/content/profile";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrument = Instrument_Serif({ variable: "--font-instrument", subsets: ["latin"], weight: "400", style: "italic" });
// Clash Grotesk (Fontshare, ITF Free Font License) — self-hosted.
const clash = localFont({
  variable: "--font-clash",
  src: [
    { path: "./fonts/ClashGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashGrotesk-Semibold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
});

const title = `${profile.fullName} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s — ${profile.fullName}` },
  description: profile.description,
  applicationName: profile.fullName,
  authors: [{ name: profile.fullName, url: siteUrl }],
  creator: profile.fullName,
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Cairo", "Egypt", profile.fullName],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.fullName,
    title,
    description: profile.description,
    locale: "en_US",
    firstName: profile.firstName,
    lastName: profile.lastName,
  },
  twitter: { card: "summary_large_image", title, description: profile.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  worksFor: { "@type": "Organization", name: profile.currently.company, url: "https://kayfa.io/" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Future Academy" },
  knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  sameAs: [profile.links.github, profile.links.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable} ${clash.variable}`}>
      <body className="grain min-h-dvh">
        <a
          href="#main"
          className="label sr-only z-[70] bg-text px-4 py-3 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
        <RevealObserver />
        {/* Without JavaScript, reveal animations can't run — show everything immediately. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}.reveal-clip{clip-path:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
