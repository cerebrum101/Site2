import React from "react";
import { useParams, Link } from "react-router-dom";

const posts = [
  {
    title: "Как подготовиться к ЕНТ по математике",
    date: "15 марта 2024",
    content:
      "В этой статье я расскажу о своем опыте подготовки к ЕНТ и поделюсь эффективными стратегиями, которые помогли мне получить высокий балл.",
    slug: "ent-preparation",
  },
  {
    title: "Топ-5 ошибок при подготовке к олимпиадам",
    date: "10 марта 2024",
    content:
      "На основе опыта работы с учениками, я выделил основные ошибки, которые часто допускают школьники при подготовке к олимпиадам.",
    slug: "olympiad-mistakes",
  },
];

export default function BlogPage() {
  const { slug } = useParams();

  const allPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]").concat(posts);
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main style={{ paddingTop: "2rem" }}>
        <p>Post not found.</p>
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
          {post.date}
        </p>
        <div style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {post.content}
        </div>
      </article>
      <footer style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--divider)" }}>
        <Link to="/blog" style={{ fontSize: "0.875rem", color: "var(--text-tertiary)" }}>
          ← Back to blog
        </Link>
      </footer>
    </main>
  );
}
