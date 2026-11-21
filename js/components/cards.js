/**
 * cards.js — card components shared by Home, Projects and Blog pages.
 */
import { h } from "../utils/dom.js";
import { formatDate } from "../utils/format.js";

/** A row of small tag chips. */
export function tagList(tags = []) {
  return h("ul", { class: "tags" }, tags.map((t) => h("li", { class: "tag", text: t })));
}

/**
 * Project card.
 * @param {import("../data/projects.js").projects[number]} project
 */
export function projectCard(project) {
  return h(
    "article",
    { class: "card reveal" },
    h("div", { class: "card__meta" }, h("span", { text: "Project" }), project.year && h("span", { text: project.year })),
    h("h3", { class: "card__title", text: project.title }),
    h("p", { class: "card__text", text: project.summary }),
    project.points?.length && h("ul", { class: "card__list" }, project.points.map((p) => h("li", { text: p }))),
    h(
      "div",
      { class: "card__foot" },
      tagList(project.tags),
      project.link && h("a", { class: "link-arrow", href: project.link, target: "_blank", rel: "noopener noreferrer", text: "View project ↗", style: "display:inline-block;margin-top:14px" })
    )
  );
}

/**
 * Blog post card (links to #/blog/<slug>).
 * @param {{slug: string, title: string, date: string, summary?: string, tags?: string[]}} post
 */
export function postCard(post) {
  return h(
    "a",
    { class: "card reveal", href: `#/blog/${post.slug}` },
    h("div", { class: "card__meta" }, h("span", { text: "Post" }), h("span", { text: formatDate(post.date) })),
    h("h3", { class: "card__title", text: post.title }),
    post.summary && h("p", { class: "card__text", text: post.summary }),
    h("div", { class: "card__foot" }, tagList(post.tags))
  );
}
