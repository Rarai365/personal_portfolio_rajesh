/**
 * new-post.js — scaffold a new blog post and refresh the index.
 * Usage:  npm run new:post -- "My post title"
 */
import { writeFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { buildIndex } from "./build-index.js";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new:post -- "My post title"');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const date = new Date().toISOString().slice(0, 10);
const file = fileURLToPath(new URL(`../content/posts/${slug}.md`, import.meta.url));

// Never overwrite an existing post.
const exists = await access(file).then(() => true, () => false);
if (exists) {
  console.error(`content/posts/${slug}.md already exists.`);
  process.exit(1);
}

await writeFile(file, `---\ntitle: ${title}\ndate: ${date}\ntags: tag-one, tag-two\nsummary: One line shown on the blog list.\n---\n\nStart writing here. Use ## for headings.\n`);
await buildIndex();
console.log(`Created content/posts/${slug}.md — edit it, then run "npm run posts".`);
