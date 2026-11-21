/**
 * sections.js — About, Experience, Skills and Credentials sections (Home page).
 */
import { h } from "../utils/dom.js";
import { profile } from "../data/profile.js";

/** Shared section heading: small label + big display title. */
export function sectionHead(label, titleStart, titleAccent, action) {
  return h(
    "div",
    { class: "section__head" },
    h(
      "div",
      {},
      h("p", { class: "eyebrow", text: label }),
      h("h2", { class: "section__title display" }, titleStart, " ", h("span", { class: "serif-accent", text: titleAccent }))
    ),
    action
  );
}

export function about() {
  const { lead, body } = profile.about;
  return h(
    "section",
    { class: "section", id: "about" },
    h("div", { class: "container about reveal" }, h("p", { class: "about__lead", text: lead }), h("p", { class: "about__body", text: body }))
  );
}

/** One job; the longer "Duties" list is collapsed behind a toggle. */
function job(entry) {
  const more = h(
    "div",
    { class: "job__block job__more", hidden: true, id: `duties-${entry.company.replace(/\W/g, "")}` },
    h("h4", { class: "job__heading", text: "Duties" }),
    h("ul", { class: "job__list" }, entry.duties.map((d) => h("li", { text: d })))
  );

  const toggle = h("button", {
    class: "job__toggle",
    type: "button",
    "aria-expanded": "false",
    "aria-controls": more.id,
    text: "Show duties",
    onclick: () => {
      const open = more.hidden;
      more.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Hide duties" : "Show duties";
    },
  });

  return h(
    "article",
    { class: "job reveal" },
    h(
      "div",
      {},
      h("h3", { class: "job__role", text: entry.role }),
      h("p", { class: "job__company", text: `${entry.company}, ${entry.place}` }),
      h("p", { class: "job__period", text: entry.period })
    ),
    h(
      "div",
      {},
      h("div", { class: "job__block" }, h("h4", { class: "job__heading", text: "Key achievements" }), h("ul", { class: "job__list" }, entry.achievements.map((a) => h("li", { text: a })))),
      more,
      toggle
    )
  );
}

export function experience() {
  return h(
    "section",
    { class: "section", id: "experience" },
    h("div", { class: "container" }, sectionHead("Experience", "Where I’ve", "worked."), h("div", { class: "timeline" }, profile.experience.map(job)))
  );
}

export function skills() {
  return h(
    "section",
    { class: "section", id: "skills" },
    h(
      "div",
      { class: "container" },
      sectionHead("Toolkit", "Technical", "skills."),
      h(
        "div",
        { class: "skills-grid" },
        profile.skills.map((s) => h("div", { class: "skill reveal" }, h("h3", { class: "skill__name", text: s.name }), h("p", { class: "skill__items", text: s.items })))
      )
    )
  );
}

export function credentials() {
  const list = (items) => items.map((c) => h("div", { class: "cred" }, h("h3", { class: "cred__title", text: c.title }), h("p", { class: "cred__sub", text: c.sub })));
  return h(
    "section",
    { class: "section", id: "credentials" },
    h(
      "div",
      { class: "container two-col reveal" },
      h("div", {}, h("p", { class: "eyebrow", text: "Education" }), h("div", { style: "margin-top:16px" }, list(profile.education))),
      h("div", {}, h("p", { class: "eyebrow", text: "Certifications" }), h("div", { style: "margin-top:16px" }, list(profile.certifications)))
    )
  );
}
