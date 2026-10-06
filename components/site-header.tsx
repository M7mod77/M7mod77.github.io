"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/profile";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Escape closes, focus moves into the menu and back to the button, page doesn't scroll behind it.
  useEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && menuRef.current) {
        const items = [...menuRef.current.querySelectorAll<HTMLElement>("a, button")];
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          M<span className="text-accent">.</span>E<span className="sr-only"> — {profile.fullName}, back to top</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="label link-grow pb-1 text-text/80 hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.links.resume} target="_blank" rel="noopener" className="label link-grow pb-1 text-accent">
                Résumé ↗<span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="label -mr-2 px-2 py-2 text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed overlay inside the bar. */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-x-0 top-16 bottom-0 z-[45] flex flex-col justify-between border-t border-line bg-bg px-[var(--gutter)] pt-10 pb-[max(2rem,env(safe-area-inset-bottom))] md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {NAV.map((item, i) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 font-display text-5xl font-medium tracking-tight"
                  >
                    {item.label}
                    <span className="label text-faint">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href={profile.links.resume} target="_blank" rel="noopener" className="label text-accent">Résumé ↗</a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="label text-text">GitHub ↗</a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="label text-text">LinkedIn ↗</a>
          </div>
        </div>
      )}
    </>
  );
}
