const postFiles = import.meta.glob("../content/posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const MEDIA_PREFIX = "/media";

/**
 * One shared folder `public/media/`. Bare filenames resolve there.
 * Full URLs and absolute paths (/...) are unchanged.
 */
function normalizeMediaPath(value) {
  const trimmed = (value ?? "").trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (trimmed.startsWith("/")) return trimmed;

  const cleaned = trimmed.replace(/^\.\//, "");
  if (cleaned.includes("/")) {
    return `${MEDIA_PREFIX}/${cleaned}`.replace(/\/{2,}/g, "/");
  }

  return `${MEDIA_PREFIX}/${cleaned}`;
}

function shouldRewriteBareMediaSrc(src) {
  const s = src.trim();
  if (!s || s.includes("..")) return false;
  if (/^https?:\/\//i.test(s)) return false;
  if (s.startsWith("/")) return false;

  const last = s.split("/").pop() ?? "";
  return /\.(png|jpe?g|webp|gif|svg)$/i.test(last);
}

/**
 * Turns ![](kitten.jpg) into ![]( /media/kitten.jpg ) without touching http(s) or absolute paths.
 */
function rewriteBareInlineImages(body) {
  return body.replace(/!\[([^\]]*)]\(([^)]+)\)/g, (full, alt, srcRaw) => {
    const src = srcRaw.trim().replace(/^\.\//, "");
    if (!shouldRewriteBareMediaSrc(src)) return full;

    const resolved = normalizeMediaPath(src);
    return `![${alt}](${resolved})`;
  });
}

function parseFrontmatter(markdown, filePath) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Missing frontmatter in ${filePath}`);
  }

  const [, frontmatter, body] = match;
  const data = {};

  frontmatter.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    data[key] = value.replace(/^["']|["']$/g, "");
  });

  const fallbackSlug = filePath
    .split("/")
    .pop()
    ?.replace(/\.md$/, "")
    .replace(/\.(en|ru)$/, "");

  const coverImage = normalizeMediaPath(data.coverImage);

  return {
    ...data,
    slug: data.slug || fallbackSlug,
    coverImage,
    body: rewriteBareInlineImages(body.trim()),
  };
}

const posts = Object.entries(postFiles)
  .map(([filePath, markdown]) => parseFrontmatter(markdown, filePath))
  .filter((post) => post.draft !== "true")
  .sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

export function getPosts(lang) {
  return posts.filter((post) => !post.language || post.language === lang);
}

export function getPostBySlug(slug, lang) {
  return posts.find((post) => post.slug === slug && (!post.language || post.language === lang));
}

export function formatPostDate(post, lang) {
  if (!post.publishedAt) return post.date || "";

  return new Date(post.publishedAt).toLocaleDateString(lang === "ru" ? "ru-RU" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

