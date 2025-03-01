import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/about" className="hover:text-gray-400">About</Link>
    </nav>
  );
};

export default Navbar;