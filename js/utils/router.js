/**
 * router.js — minimal hash router (#/, #/projects, #/blog, #/blog/<slug>).
 * Hash routing keeps the site deployable on any static host (no rewrites needed).
 */

/**
 * @typedef {Object} Route
 * @property {RegExp} pattern - Matched against the path (without the leading #).
 * @property {string} name - Used to highlight the nav link.
 * @property {(params: string[]) => Promise<{title: string, view: Node}> | {title: string, view: Node}} load
 */

/**
 * Start the router.
 * @param {Route[]} routes
 * @param {(result: {name: string, title: string, view: Node}) => void} onRender
 */
export function startRouter(routes, onRender) {
  async function handle() {
    const path = location.hash.replace(/^#/, "") || "/";

    // In-page anchors such as #contact are not routes: let the browser scroll.
    if (!path.startsWith("/")) return;

    const route = routes.find((r) => r.pattern.test(path)) ?? routes.find((r) => r.name === "not-found");
    const params = path.match(route.pattern).slice(1);
    const { title, view } = await route.load(params);
    onRender({ name: route.name, title, view });
  }

  window.addEventListener("hashchange", handle);
  handle();
}
