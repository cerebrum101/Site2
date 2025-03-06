import { StrictMode, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './styles/root.css'

import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import BlogPage from './pages/BlogPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AdminPage from './pages/AdminPage.jsx'
import NavBar from './components/NavBar.jsx'
import Grid from './pages/Home.jsx'
import ExperiencePage from './pages/experience.jsx'
import AwardsPage from './pages/awards.jsx'
import Tutoring from './pages/Tutoring.jsx'
import ContactPage from './pages/Contact.jsx'

// Add this function to check if user is admin
const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'
  return isAdmin ? children : <Navigate to="/login" />
}

const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

// This is the entry point of your application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
