import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar  w-full h-16 bg-stone-400 border-2 border-black border-r rounded-lg">
      <Link to="/"
      className=' w-full h-full'
      >
        <button className=' text-black px-4 py-2 rounded-md w-full h-full '>Main Page</button>
      </Link>
    </nav>
  );
}

export default NavBar; 