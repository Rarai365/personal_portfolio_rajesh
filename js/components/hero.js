/**
 * hero.js — big headline, cartoon illustration and quick facts.
 */
import { h } from "../utils/dom.js";
import { profile } from "../data/profile.js";

export function hero() {
  return h(
    "section",
    { class: "hero" },
    h(
      "div",
      { class: "container" },
      h("span", { class: "pill", text: profile.status }),

      h(
        "div",
        { class: "hero__headline-wrap" },
        h("h1", { class: "hero__title display" }, "Rajesh", h("br"), "Rai"),
        // The job title the user asked for: "Tech Enthusiast"
        h("span", { class: "hero__role serif-accent", text: `${profile.title}.` }),
        h(
          "div",
          { class: "hero__art", "aria-hidden": "true" },
          h("img", { src: "assets/images/tech-guy.svg", alt: "", width: "450", height: "450" })
        )
      ),

      h(
        "div",
        { class: "hero__meta" },
        h(
          "dl",
          { class: "hero__facts" },
          profile.facts.map((f) => h("div", { class: "hero__fact" }, h("dt", { text: f.label }), h("dd", { text: f.value })))
        ),
        h(
          "div",
          { class: "hero__intro" },
          h("p", { text: profile.intro }),
          h(
            "div",
            { class: "hero__actions" },
            h("a", { class: "btn", href: "#/projects", text: "See projects" }),
            h("a", { class: "link-arrow", href: "#/blog", text: "Read the blog →" })
          )
        )
      )
    )
  );
}
