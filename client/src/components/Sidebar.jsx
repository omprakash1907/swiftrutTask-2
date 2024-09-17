import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-white shadow-md rounded-lg p-6 space-y-6">
      
      {/* Changelog Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-4">Changelog</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          <img
            src="https://via.placeholder.com/150" // Placeholder image
            alt="Changelog update"
            className="w-full rounded-md mb-4"
          />
          <p className="text-gray-800 font-semibold mb-2">
            Revamped settings page, improvements to draft links, and bug fixes.
          </p>
          <p className="text-sm text-gray-500 mb-2">Sep 2, 2024 · New</p>
          <a href="#" className="text-blue-500 hover:underline">
            View previous changelogs
          </a>
        </div>
      </section>

      {/* Trending Articles Section */}
      <section className="mb-6">
        <h3 className="text-lg font-bold mb-4">Trending Articles</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">1 week</span>
          <button className="text-blue-500 hover:underline">See more</button>
        </div>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              React 19: Understanding the Latest Game-Changing Features
            </a>
            <p className="text-sm text-gray-500">210 reads</p>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Understanding JAMstack: How it Differs from Traditional Web Dev
            </a>
            <p className="text-sm text-gray-500">66 reads</p>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              How to Build Design Editing Apps Using Next.js
            </a>
            <p className="text-sm text-gray-500">254 reads</p>
          </li>
        </ul>
      </section>

      {/* Top Discussions Section */}
      <section>
        <h3 className="text-lg font-bold mb-4">Top Discussions</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-green-100 text-green-600 p-2 rounded-full mr-3">
              <span>NM</span>
            </div>
            <div>
              <a href="#" className="text-blue-500 hover:underline">
                Account Takeover due to DNS Rebinding
              </a>
              <p className="text-sm text-gray-500">3 comments · 11 likes</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-100 text-gray-600 p-2 rounded-full mr-3">
              <span>AB</span>
            </div>
            <div>
              <a href="#" className="text-blue-500 hover:underline">
                How to Share Data Between Components in Angular
              </a>
              <p className="text-sm text-gray-500">4 comments · 15 likes</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-red-100 text-red-600 p-2 rounded-full mr-3">
              <span>TS</span>
            </div>
            <div>
              <a href="#" className="text-blue-500 hover:underline">
                Best Practices for Managing State in React
              </a>
              <p className="text-sm text-gray-500">5 comments · 18 likes</p>
            </div>
          </li>
        </ul>
      </section>

    </aside>
  );
};

export default Sidebar;
