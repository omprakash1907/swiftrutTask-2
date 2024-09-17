import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <div>
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Personal Blog App
          </Link>
        </div>
        <div className="flex space-x-8 text-gray-700">
          <Link
            to="/"
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100"
          >
         
            <span className="font-semibold">My Feed</span>
          </Link>

          <Link
            to="/create"
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="font-semibold">Create Post</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
