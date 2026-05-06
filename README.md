# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Blog (Markdown)

The blog is powered by local Markdown files. Write posts in Obsidian, commit/push to GitHub, and Vercel will redeploy the static site.

### Post Files

Add posts here:

```text
src/content/posts/
```

Example:

```md
---
title: My First Post
slug: my-first-post
summary: Short preview text shown on /blog.
publishedAt: 2026-05-06
language: en
coverImage: /blog/my-first-post/cover.jpg
---

# My First Post

Write Markdown here.
```

Supported frontmatter:

- `title` required
- `slug` required, used as `/blog/<slug>`
- `summary` optional
- `publishedAt` optional, formatted by site language
- `language` optional, usually `en` or `ru`
- `coverImage` optional, path to an image in `public/`
- `draft: true` optional, hides the post

### Images

Put post images in:

```text
public/blog/<slug>/
```

Reference them from Markdown using site-root paths:

```md
![Diagram](/blog/my-first-post/diagram.png)
```

Avoid Obsidian wiki image syntax like `![[image.png]]`; use normal Markdown image syntax.

### Publishing

1. Write or edit the `.md` file.
2. Add any images under `public/blog/<slug>/`.
3. Commit and push to GitHub.
4. Vercel redeploys `atayk.vercel.com`.

