/**
 * projects.js — Projects page with tag filters.
 */
import { h } from "../utils/dom.js";
import { projectCard } from "../components/cards.js";
import { projects } from "../data/projects.js";
import { revealOnScroll } from "../utils/reveal.js";

export function projectsPage() {
  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags))];
  const grid = h("div", { class: "card-grid" });
  const filters = h("div", { class: "filters", role: "group", "aria-label": "Filter projects by tag" });

  /** Render the grid for the selected tag and update button states. */
  function show(tag) {
    const list = tag === "All" ? projects : projects.filter((p) => p.tags.includes(tag));
    grid.replaceChildren(...list.map(projectCard));
    for (const btn of filters.children) btn.setAttribute("aria-pressed", String(btn.textContent === tag));
    revealOnScroll(grid);
  }

  filters.append(...tags.map((t) => h("button", { class: "filter", type: "button", "aria-pressed": "false", text: t, onclick: () => show(t) })));
  show("All");

  const view = h(
    "div",
    { class: "container" },
    h(
      "header",
      { class: "page-head" },
      h("p", { class: "eyebrow", text: "Portfolio" }),
      h("h1", { class: "page-head__title display" }, "Pro", h("span", { class: "serif-accent", text: "jects." })),
      h("p", { class: "page-head__lead", text: "Labs, migrations and builds. New projects are added regularly." })
    ),
    filters,
    grid,
    h("div", { style: "height:80px" })
  );
  return { title: "Projects — Rajesh Rai", view };
}
