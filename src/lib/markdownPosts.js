const postFiles = import.meta.glob("../content/posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

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

  return {
    ...data,
    slug: data.slug || fallbackSlug,
    body: body.trim(),
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

