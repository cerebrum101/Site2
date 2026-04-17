import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import '../styles/admin.css';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(null); // "success" | "error" | null
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType(null);
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Zа-яА-Я0-9\s]/g, '')
      .replace(/\s+/g, '-');
    
    // Get current date in Russian format
    const currentDate = new Date().toLocaleDateString(i18n.resolvedLanguage === "ru" ? "ru-RU" : "en-US", {
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
      
      setMessage(t("admin.postCreated"));
      setMessageType("success");
      setTitle('');
      setContent('');
      setCoverImage('');
      
      // Redirect to the new post after 1 second
      setTimeout(() => {
        navigate(`/blog/${slug}`);
      }, 1000);
    } catch (error) {
      setMessage(t("admin.postCreateError"));
      setMessageType("error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>{t("admin.title")}</h1>
        <button onClick={handleLogout} className="logout-button">
          {t("admin.logout")}
        </button>
      </div>

      {message && (
        <div className={`message ${messageType === "error" ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">{t("admin.postTitle")}</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">{t("admin.coverUrl")}</label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder={t("admin.coverPlaceholder")}
          />
          {coverImage && (
            <div className="image-preview">
              <img src={coverImage} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="content">{t("admin.content")}</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="10"
          />
        </div>

        <button type="submit" className="submit-button">
          {t("admin.publish")}
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
