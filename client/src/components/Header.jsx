import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div>
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Blog App
          </Link>
        </div>
        <div className="space-x-8 text-gray-700">
          <Link to="/" className="hover:text-blue-600">
            My Feed
          </Link>
          <Link to="/create" className="hover:text-blue-600">
            Create Post
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
