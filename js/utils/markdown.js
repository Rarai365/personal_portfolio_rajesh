/**
 * markdown.js — a deliberately small markdown -> DOM renderer.
 * Supports: headings, paragraphs, bold, italic, inline code, links,
 * ordered/unordered lists, blockquotes and fenced code blocks.
 * Output is built with DOM APIs (no innerHTML), so post content can't inject HTML.
 */
import { h } from "./dom.js";

/** Only allow safe link protocols. */
function safeHref(url) {
  return /^(https?:|mailto:|#|\/|\.)/i.test(url) ? url : "#";
}

/** Convert inline markdown (code, bold, italic, links) to an array of nodes. */
function inline(text) {
  const nodes = [];
  // Order matters: code first so its contents are left alone.
  const pattern = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m;

  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const token = m[0];

    if (m[1]) nodes.push(h("code", { text: token.slice(1, -1) }));
    else if (m[2]) nodes.push(h("strong", { text: token.slice(2, -2) }));
    else if (m[3]) nodes.push(h("em", { text: token.slice(1, -1) }));
    else {
      const [, label, url] = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      const external = /^https?:/i.test(url);
      nodes.push(
        h("a", { href: safeHref(url), ...(external && { target: "_blank", rel: "noopener noreferrer" }), text: label })
      );
    }
    last = m.index + token.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/**
 * Render markdown text into a DocumentFragment-like <div class="prose">.
 * @param {string} source
 * @returns {HTMLElement}
 */
export function renderMarkdown(source) {
  const root = h("div", { class: "prose" });
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Fenced code block
    if (line.startsWith("```")) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i++; // closing fence
      root.append(h("pre", {}, h("code", { text: code.join("\n") })));
      continue;
    }

    // Headings (## and ###; a single # is reserved for the post title)
    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      const level = Math.max(2, heading[1].length);
      root.append(h(`h${level}`, {}, inline(heading[2])));
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quote = [];
      while (i < lines.length && lines[i].startsWith("> ")) quote.push(lines[i++].slice(2));
      root.append(h("blockquote", {}, inline(quote.join(" "))));
      continue;
    }

    // Lists
    const listMatch = line.match(/^(\s*)([-*]|\d+\.)\s+/);
    if (listMatch) {
      const ordered = /\d/.test(listMatch[2]);
      const items = [];
      while (i < lines.length && /^(\s*)([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(h("li", {}, inline(lines[i].replace(/^(\s*)([-*]|\d+\.)\s+/, ""))));
        i++;
      }
      root.append(h(ordered ? "ol" : "ul", {}, items));
      continue;
    }

    // Paragraph: gather consecutive plain lines
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|```|> |\s*([-*]|\d+\.)\s)/.test(lines[i])) {
      para.push(lines[i++]);
    }
    root.append(h("p", {}, inline(para.join(" "))));
  }

  return root;
}
