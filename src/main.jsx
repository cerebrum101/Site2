import { StrictMode, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './styles/index.css'
import Home from './Tutoring.jsx'
import About from './About'
import Blog from './Blog'
import BlogPage from './BlogPage'
import LoginPage from './LoginPage'
import AdminPage from './AdminPage'
import NavBar from './components/NavBar'
import Cards from './Cards'
import Grid from './Home.jsx'
import ExperiencePage from './pages/experience'
import AwardsPage from './pages/awards'
import Tutoring from './Tutoring'
import GlowingCards from './glowing-cards.jsx'
import ContactPage from './Contact'

// Add this function to check if user is admin
const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'
  return isAdmin ? children : <Navigate to="/login" />
}

const App = () => {
  // Add ref to measure spacing
  const navRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Log spacing measurements
    if (navRef.current && contentRef.current) {
      console.log('Nav offset from top:', navRef.current.offsetTop);
      console.log('Nav getBoundingClientRect:', navRef.current.getBoundingClientRect());
      console.log('Content offset from top:', contentRef.current.offsetTop);
      console.log('Body margin:', getComputedStyle(document.body).margin);
      console.log('Root div margin:', getComputedStyle(document.getElementById('root')).margin);
    }
  }, []);

  return (
    <Router>
      <div ref={navRef}>
        <NavBar />
      </div>
      <div ref={contentRef}>
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/glowing-cards" element={<GlowingCards />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cards" element={
            <div>
              <h1>Cards Page</h1>
              <Cards />
            </div>
          } />
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
