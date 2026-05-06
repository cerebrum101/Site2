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
coverImage: cover.jpg
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
- `coverImage` optional. Put the file in `public/media/` and use either a bare filename (`cover.jpg`) or a full URL / path (`/something/else.png`).
- `draft: true` optional, hides the post

### Images (one folder — minimal friction)

Put **all** blog images here:

```text
public/media/
```

- **Cover in frontmatter:** `coverImage: my-photo.jpg` (same folder). You can still use `/media/my-photo.jpg` or any full URL.

- **Inline in the post:** short form is rewritten for you:

  ```md
  ![diagram](diagram.png)
  ```

  → served as `/media/diagram.png` (drop `diagram.png` into `public/media/`).

Optional subfolders also work:

```text
public/media/2026-may/note.png   → coverImage: 2026-may/note.png
```

Avoid Obsidian-only syntax like `![[image.png]]` unless your plugin emits normal `![](…)`.

External images are fine:

```md
![](https://example.com/pic.jpg)
```

### Publishing

1. Write or edit the `.md` file.
2. Drop images into `public/media/` (optionally subfolders).
3. Commit and push to GitHub.
4. Vercel redeploys `atayk.vercel.com`.

