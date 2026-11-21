/**
 * footer.js — contact call-to-action rendered into <footer id="contact">.
 */
import { h, mount } from "../utils/dom.js";
import { profile } from "../data/profile.js";

export function renderFooter(target) {
  mount(
    target,
    h(
      "div",
      { class: "container" },
      h("p", { class: "eyebrow", text: "Contact" }),
      h("h2", { class: "footer__cta display" }, "Let’s ", h("span", { class: "serif-accent", text: "talk." })),
      h(
        "div",
        { class: "footer__links" },
        h("a", { class: "link-arrow", href: `mailto:${profile.email}`, text: profile.email }),
        h("a", { class: "link-arrow", href: profile.linkedin, target: "_blank", rel: "noopener noreferrer", text: "LinkedIn ↗" })
      ),
      h(
        "div",
        { class: "footer__legal" },
        h("span", { text: `© ${new Date().getFullYear()} ${profile.name}` }),
        h("span", { text: profile.location })
      )
    )
  );
}
