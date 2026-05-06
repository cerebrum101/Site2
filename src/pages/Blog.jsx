import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatPostDate, getPosts } from "../lib/markdownPosts";

export default function Blog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "en";
  const posts = getPosts(lang);

  return (
    <main style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginBottom: "2rem",
        }}
      >
        {t("blog.title")}
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article>
              {post.coverImage && (
                <div
                  style={{
                    marginBottom: "0.75rem",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    border: "1px solid var(--divider)",
                  }}
                >
                  <img
                    src={post.coverImage}
                    alt=""
                    loading="lazy"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              )}
              <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.25rem" }}>
                {post.title}
              </h2>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginBottom: "0.35rem" }}>
                {formatPostDate(post, lang)}
              </p>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                {post.summary}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
