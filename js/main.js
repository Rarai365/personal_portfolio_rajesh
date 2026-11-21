/**
 * main.js — application entry point.
 * Wires the router to the page modules and keeps the nav in sync.
 */
import { startRouter } from "./utils/router.js";
import { mount } from "./utils/dom.js";
import { revealOnScroll } from "./utils/reveal.js";
import { renderFooter } from "./components/footer.js";
import { homePage } from "./pages/home.js";
import { projectsPage } from "./pages/projects.js";
import { blogPage, postPage } from "./pages/blog.js";
import { notFoundPage } from "./pages/not-found.js";

const app = document.getElementById("app");

/** Route table: first match wins. `name` matches the nav's data-route attribute. */
const routes = [
  { pattern: /^\/$/, name: "home", load: homePage },
  { pattern: /^\/projects\/?$/, name: "projects", load: projectsPage },
  { pattern: /^\/blog\/?$/, name: "blog", load: blogPage },
  { pattern: /^\/blog\/([^/]+)\/?$/, name: "blog", load: postPage },
  { pattern: /.*/, name: "not-found", load: notFoundPage },
];

/** Highlight the nav link for the current route. */
function setActiveNav(name) {
  for (const link of document.querySelectorAll(".nav__link[data-route]")) {
    link.classList.toggle("is-active", link.dataset.route === name);
  }
}

/** Swap the page content, update title and reset scroll. */
function render({ name, title, view }) {
  mount(app, view);
  document.title = title;
  setActiveNav(name);
  window.scrollTo(0, 0);
  revealOnScroll(app);
}

// "Get in touch" scrolls to the footer instead of changing the route.
document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-scroll]");
  if (!trigger) return;
  event.preventDefault();
  document.getElementById(trigger.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
});

renderFooter(document.getElementById("contact"));
startRouter(routes, render);
