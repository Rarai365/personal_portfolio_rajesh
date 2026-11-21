# Rajesh Rai — Portfolio

Personal portfolio, projects and blog. Plain JavaScript (ES modules), HTML and CSS — no framework, no build step.

## Run it

```bash
npm start          # http://localhost:3000
```

(Needs Node 18+. The site must be served over http — opening `index.html` directly won't work because browsers block ES modules on `file://`.)

## Folder structure

```
portfolio/
├── index.html              Page shell (header, #app, footer)
├── server.js               Tiny dev server (no dependencies)
├── assets/images/          Cartoon illustration + favicon
├── css/
│   ├── base.css            Colour/font tokens, reset, typography
│   ├── layout.css          Header, hero, sections, footer
│   └── components.css      Buttons, cards, tags, timeline, blog prose
├── js/
│   ├── main.js             Entry point: routes + nav
│   ├── data/               ← the content you edit
│   │   ├── profile.js      Resume content (experience, skills, ...)
│   │   └── projects.js     Projects list
│   ├── pages/              One module per page (home, projects, blog, 404)
│   ├── components/         Hero, sections, cards, footer
│   └── utils/              DOM helper, router, markdown, formatting
├── content/posts/          Blog posts (markdown) + generated index.json
└── scripts/                new-post.js, build-index.js
```

## Add a blog post

```bash
npm run new:post -- "My post title"   # creates content/posts/my-post-title.md
# write the post, then:
npm run posts                          # refreshes content/posts/index.json
```

Post header format:

```
---
title: My post title
date: 2026-11-21
tags: azure, networking
summary: One line shown on the blog list.
---
```

Markdown supported: `##`/`###` headings, **bold**, *italic*, `code`, links, lists, quotes, fenced code blocks.

## Add a project

Open `js/data/projects.js`, copy an object, paste it at the top of the array, edit it. Set `featured: true` to also show it on the Home page.

## Update resume content

Everything on the Home page lives in `js/data/profile.js`.

## Deploy

Any static host works (GitHub Pages, Netlify, Cloudflare Pages, Azure Static Web Apps). Upload the folder as is. Routing uses `#/` URLs so no rewrite rules are needed. Remember to run `npm run posts` before deploying.
