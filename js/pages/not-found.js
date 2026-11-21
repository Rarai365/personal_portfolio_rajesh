/**
 * not-found.js — shown for unknown routes.
 */
import { h } from "../utils/dom.js";

export function notFoundPage() {
  return {
    title: "Not found — Rajesh Rai",
    view: h(
      "div",
      { class: "container page-head" },
      h("h1", { class: "page-head__title display" }, "4", h("span", { class: "serif-accent", text: "04." })),
      h("p", { class: "page-head__lead", text: "That page doesn’t exist." }),
      h("a", { class: "btn", href: "#/", text: "Back home", style: "margin-top:24px" })
    ),
  };
}
