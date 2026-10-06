import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="container-x flex flex-col gap-3 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="label">© {new Date().getFullYear()} {profile.fullName}</p>
      <p className="label">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
      <a href="#top" className="label link-grow w-fit pb-1 text-text">Back to top ↑</a>
    </footer>
  );
}
