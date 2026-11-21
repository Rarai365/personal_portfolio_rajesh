/**
 * home.js — Home page: hero, about, experience, skills, highlights.
 */
import { h } from "../utils/dom.js";
import { hero } from "../components/hero.js";
import { about, experience, skills, credentials, sectionHead } from "../components/sections.js";
import { projectCard, postCard } from "../components/cards.js";
import { projects } from "../data/projects.js";
import { fetchPostIndex } from "../utils/posts.js";

/** Featured projects teaser. */
function featuredProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);
  return h(
    "section",
    { class: "section" },
    h(
      "div",
      { class: "container" },
      sectionHead("Selected work", "Recent", "projects.", h("a", { class: "link-arrow", href: "#/projects", text: "All projects →" })),
      h("div", { class: "card-grid" }, featured.map(projectCard))
    )
  );
}

/** Latest blog posts teaser (hidden if the index can't be loaded). */
async function latestPosts() {
  let posts = [];
  try {
    posts = (await fetchPostIndex()).slice(0, 2);
  } catch {
    return null;
  }
  if (!posts.length) return null;

  return h(
    "section",
    { class: "section" },
    h(
      "div",
      { class: "container" },
      sectionHead("From the blog", "Latest", "writing.", h("a", { class: "link-arrow", href: "#/blog", text: "All posts →" })),
      h("div", { class: "card-grid" }, posts.map(postCard))
    )
  );
}

export async function homePage() {
  const view = h("div", {}, hero(), about(), experience(), featuredProjects(), skills(), await latestPosts(), credentials());
  return { title: "Rajesh Rai — Tech Enthusiast", view };
}
