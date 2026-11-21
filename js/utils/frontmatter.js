/**
 * frontmatter.js — parse the simple `key: value` header of a markdown post.
 * Shared by the browser (blog page) and the Node scripts (index builder).
 *
 * Example header:
 *   ---
 *   title: My post
 *   date: 2026-11-21
 *   tags: azure, networking
 *   summary: One line shown on the blog list.
 *   ---
 */

/**
 * @param {string} source - Full markdown file contents.
 * @returns {{ meta: Record<string, any>, body: string }}
 */
export function parseFrontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: source };

  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    // `tags` becomes an array; everything else stays a string.
    meta[key] = key === "tags" ? value.split(",").map((t) => t.trim()).filter(Boolean) : value;
  }
  return { meta, body: match[2] };
}
