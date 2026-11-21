/**
 * blog.js — Blog list page and single post page.
 */
import { h } from "../utils/dom.js";
import { postCard, tagList } from "../components/cards.js";
import { fetchPostIndex, fetchPost } from "../utils/posts.js";
import { renderMarkdown } from "../utils/markdown.js";
import { formatDate, readingTime } from "../utils/format.js";

/** Blog list. */
export async function blogPage() {
  let content;
  try {
    const posts = await fetchPostIndex();
    content = posts.length ? h("div", { class: "card-grid" }, posts.map(postCard)) : h("p", { class: "notice", text: "No posts yet — check back soon." });
  } catch {
    content = h("p", { class: "notice", text: "Posts could not be loaded. Run the site with `npm start` (see README)." });
  }

  const view = h(
    "div",
    { class: "container" },
    h(
      "header",
      { class: "page-head" },
      h("p", { class: "eyebrow", text: "Notes" }),
      h("h1", { class: "page-head__title display" }, "Bl", h("span", { class: "serif-accent", text: "og." })),
      h("p", { class: "page-head__lead", text: "Notes on cloud, identity, networking and the lessons from day-to-day IT support." })
    ),
    content,
    h("div", { style: "height:80px" })
  );
  return { title: "Blog — Rajesh Rai", view };
}

/** Single post: #/blog/<slug> */
export async function postPage([slug]) {
  const post = await fetchPost(slug);

  if (!post) {
    return {
      title: "Post not found — Rajesh Rai",
      view: h("div", { class: "container post" }, h("a", { class: "post__back link-arrow", href: "#/blog", text: "← Back to blog" }), h("p", { class: "notice", text: "That post doesn’t exist." })),
    };
  }

  const view = h(
    "article",
    { class: "container post" },
    h("a", { class: "post__back link-arrow", href: "#/blog", text: "← Back to blog" }),
    h("p", { class: "eyebrow", text: `${formatDate(post.date)} · ${readingTime(post.body)} min read` }),
    h("h1", { class: "post__title display", text: post.title }),
    tagList(post.tags),
    renderMarkdown(post.body)
  );
  return { title: `${post.title} — Rajesh Rai`, view };
}
