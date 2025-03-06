import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blog.css';
import './BlogPage';

const BlogPost = ({ title, date, content, slug }) => {
  return (
    <Link 
      to={`/blog/${slug}`} 
      className="block group"
    >
      <article className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 
        group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-200
        shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1">
        <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-zinc-200 transition-colors">{title}</h2>
        <div className="text-zinc-400 mb-4 transition-colors">{date}</div>
        <div className="text-zinc-300 group-hover:text-zinc-200 transition-colors">{content}</div>
      </article>
    </Link>
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
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-12">
          Блог
        </h1>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              {...post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;