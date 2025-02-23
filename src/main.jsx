import { StrictMode } from 'react'
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

// Add this function to check if user is admin
const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'
  return isAdmin ? children : <Navigate to="/login" />
}

const App = () => {
  return (
    <Router>
     <NavBar /> 
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
    </Router>
  )
}

// This is the entry point of your application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
