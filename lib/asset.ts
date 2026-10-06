/**
 * Prefix for files in /public. Empty locally and on a root domain; set NEXT_PUBLIC_BASE_PATH
 * (e.g. "/mahmoud-portfolio") when the site is served from a sub-path such as a GitHub Pages
 * project site, so string URLs like "/projects/…" keep resolving.
 */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function asset(path: string) {
  return `${basePath}${path}`;
}
