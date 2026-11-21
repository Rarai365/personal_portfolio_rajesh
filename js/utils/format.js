/**
 * format.js — small presentation helpers.
 */

/** Format an ISO date (YYYY-MM-DD) as "21 Nov 2026". */
export function formatDate(iso) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
}

/** Rough reading time in minutes for a block of text. */
export function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
