import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeHighlight from "rehype-highlight";
import { formatPostDate, getPostBySlug } from "../lib/markdownPosts";

export default function BlogPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || "en";
  const post = getPostBySlug(slug, lang);

  if (!post) {
    return (
      <main style={{ paddingTop: "2rem" }}>
        <p>{t("blog.postNotFound")}</p>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
      <article>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          {post.title}
        </h1>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginBottom: "2rem" }}>
          {formatPostDate(post, lang)}
        </p>

        {post.coverImage && (
          <div
            style={{
              marginBottom: "2rem",
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

        <div style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
              [rehypeExternalLinks, { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] }],
              rehypeHighlight,
            ]}
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </article>
      <footer style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--divider)" }}>
        <Link to="/blog" style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>
          {t("blog.backToBlog")}
        </Link>
      </footer>
    </main>
  );
}
