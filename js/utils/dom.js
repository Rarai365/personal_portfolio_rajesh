/**
 * dom.js — tiny hyperscript helper so views can build DOM safely
 * (text is always inserted as text nodes, never parsed as HTML).
 */

/**
 * Create an element.
 * @param {string} tag - HTML tag name.
 * @param {Object} [attrs] - Attributes. Special keys: `class`, `text`, `on<event>` handlers.
 * @param {...(Node|string|null|false|Array)} children - Child nodes or strings.
 * @returns {HTMLElement}
 */
export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);

  for (const [key, value] of Object.entries(attrs ?? {})) {
    if (value === null || value === undefined || value === false) continue;

    if (key === "class") el.className = value;
    else if (key === "text") el.textContent = value;
    else if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else el.setAttribute(key, value === true ? "" : value);
  }

  append(el, children);
  return el;
}

/** Append children (flattening arrays, skipping empty values). */
function append(parent, children) {
  for (const child of children.flat(Infinity)) {
    if (child === null || child === undefined || child === false) continue;
    parent.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
}

/** Replace all children of `parent` with `nodes`. */
export function mount(parent, ...nodes) {
  parent.replaceChildren();
  append(parent, nodes);
}
