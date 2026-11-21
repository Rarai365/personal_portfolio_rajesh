/**
 * build-index.js — scans content/posts/*.md and writes content/posts/index.json
 * (newest first). Run it after adding or editing a post:  npm run posts
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseFrontMatter } from "../js/utils/frontmatter.js";

const POSTS_DIR = fileURLToPath(new URL("../content/posts/", import.meta.url));

export async function buildIndex() {
  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith(".md"));
  const posts = [];

  for (const file of files) {
    const { meta } = parseFrontMatter(await readFile(join(POSTS_DIR, file), "utf8"));
    if (!meta.title || !meta.date) {
      console.warn(`Skipping ${file}: needs "title" and "date" in its front matter.`);
      continue;
    }
    posts.push({ slug: file.replace(/\.md$/, ""), title: meta.title, date: meta.date, summary: meta.summary ?? "", tags: meta.tags ?? [] });
  }

  posts.sort((a, b) => b.date.localeCompare(a.date));
  await writeFile(join(POSTS_DIR, "index.json"), JSON.stringify({ posts }, null, 2) + "\n");
  console.log(`Indexed ${posts.length} post(s).`);
}

// Run directly (not when imported by new-post.js)
if (process.argv[1] === fileURLToPath(import.meta.url)) await buildIndex();
