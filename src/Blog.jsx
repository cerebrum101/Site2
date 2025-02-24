import React from 'react';
import { Link } from 'react-router-dom';
import './styles/blog.css';
import './BlogPage';

const BlogPost = ({ title, date, content, slug }) => {
  return (
    <article className="blog-post">
      <Link to={`/blog/${slug}`} className="blog-post-link" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>{title}</h2>
        <div className="post-date">{date}</div>
        <div className="post-content">{content}</div>
      </Link>
    </article>
  );
};

const Blog = () => {
  const posts = [
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
    // Добавьте больше постов по мере необходимости
  ];


  return (
    <div className="blog-container">
      <h1 className="text-4xl font-bold text-center text-white mb-12 mt-12">
        Блог
      </h1>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <BlogPost
            key={index}
            {...post}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;