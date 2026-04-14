import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "Как подготовиться к ЕНТ по математике",
    date: "15 марта 2024",
    summary:
      "Мой опыт подготовки к ЕНТ и эффективные стратегии, которые помогли получить высокий балл.",
    slug: "ent-preparation",
  },
  {
    title: "Топ-5 ошибок при подготовке к олимпиадам",
    date: "10 марта 2024",
    summary:
      "Основные ошибки, которые часто допускают школьники при подготовке к олимпиадам.",
    slug: "olympiad-mistakes",
  },
];

export default function Blog() {
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
        Blog
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article>
              <h2 style={{ fontSize: "1.125rem", fontWeight: 500, marginBottom: "0.25rem" }}>
                {post.title}
              </h2>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)", marginBottom: "0.35rem" }}>
                {post.date}
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
