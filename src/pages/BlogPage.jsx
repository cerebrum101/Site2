import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/blog.css';

const BlogPage = () => {
  const { slug } = useParams();
  
  // This should match the posts array from Blog.jsx
  const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]').concat([
    {
      title: "Как подготовиться к ЕНТ по математике",
      date: "15 марта 2024",
      content: "В этой статье я расскажу о своем опыте подготовки к ЕНТ и поделюсь эффективными стратегиями, которые помогли мне получить высокий балл",
      slug: "ent-preparation"
    },
    {
      title: "Топ-5 ошибок при подготовке к олимпиадам",
      date: "10 марта 2024",
      content: "На основе опыта работы с учениками, я выделил основные ошибки, которые часто допускают школьники при подготовке к олимпиадам",
      slug: "olympiad-mistakes"
    }
  ]);

  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return <div className="blog-page-container">Пост не найден</div>;
  }

  return (
    <div className="blog-page-container">
      <article className="blog-page">
        <header className="blog-page-header">
          <h1>{post.title}</h1>
          <div className="blog-page-date">{post.date}</div>
        </header>
        <div className="blog-page-content">
          {post.content}
        </div>
        <footer className="blog-page-footer">
          <Link to="/blog" className="back-button">← Назад к блогу</Link>
        </footer>
      </article>
    </div>
  );
};

export default BlogPage;