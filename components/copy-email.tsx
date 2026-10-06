"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (permissions/insecure context); the mailto link still works.
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition-colors duration-250 hover:border-text/60"
    >
      {copied ? "Copied" : "Copy email"}
      <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>
    </button>
  );
}
