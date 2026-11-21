/**
 * reveal.js — fade elements in as they scroll into view.
 * Add the `reveal` class to any element; this adds `is-visible` once seen.
 */
const observer =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12 }
      )
    : null;

/** Observe every `.reveal` element inside `root`. */
export function revealOnScroll(root = document) {
  for (const el of root.querySelectorAll(".reveal")) {
    if (observer) observer.observe(el);
    else el.classList.add("is-visible"); // graceful fallback
  }
}
