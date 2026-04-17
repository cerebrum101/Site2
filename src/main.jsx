import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./styles/root.css";
import "./i18n";

import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import NavBar from "./components/NavBar.jsx";

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/login" />;
};

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPage />} />
      <Route path="/login" element={<LoginPage />} />
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
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
