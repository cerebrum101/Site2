import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show navbar on main page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="fixed top-4 left-4 z-50">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-lg
          bg-[#151F32] text-white
          border border-[#2A3444]/50 hover:border-[#2A3444]
          transform transition-all duration-300
          hover:bg-[#1A2333] hover:scale-105
          shadow-lg hover:shadow-xl
          flex items-center gap-2"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </button>
    </nav>
  );
}

export default NavBar; 