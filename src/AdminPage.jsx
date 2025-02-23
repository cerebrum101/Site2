import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/admin.css';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Zа-яА-Я0-9\s]/g, '')
      .replace(/\s+/g, '-');
    
    // Get current date in Russian format
    const currentDate = new Date().toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    // Create new post object
    const newPost = {
      title,
      content,
      coverImage,
      date: currentDate,
      slug
    };

    // In a real app, this would be an API call
    // For now, we'll store in localStorage
    try {
      const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      existingPosts.push(newPost);
      localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
      
      setMessage('Пост успешно создан!');
      setTitle('');
      setContent('');
      setCoverImage('');
      
      // Redirect to the new post after 1 second
      setTimeout(() => {
        navigate(`/blog/${slug}`);
      }, 1000);
    } catch (error) {
      setMessage('Ошибка при создании поста');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Панель администратора</h1>
        <button onClick={handleLogout} className="logout-button">
          Выйти
        </button>
      </div>

      {message && (
        <div className={`message ${message.includes('Ошибка') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">URL обложки</label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
          {coverImage && (
            <div className="image-preview">
              <img src={coverImage} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="content">Содержание</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="10"
          />
        </div>

        <button type="submit" className="submit-button">
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
