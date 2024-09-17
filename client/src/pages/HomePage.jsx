import React, { useContext } from 'react';
import PostContext from '../context/PostContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { posts } = useContext(PostContext);

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;  // Handle case when there are no posts
  }

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <div key={post._id} className="bg-white shadow-md rounded-lg p-4">
          {index === 0 && (
            <span className="inline-block bg-purple-500 text-white text-sm px-2 py-1 rounded-full mb-2">
              Featured
            </span>
          )}
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
          <p className="text-sm text-gray-500 mt-2">{new Date(post.createdAt).toLocaleDateString()}</p>
          <Link to={`/post/${post._id}`} className="text-blue-500 mt-4 block hover:underline">
            Read More
          </Link>
          <div className="flex space-x-4 mt-4 text-sm text-gray-500">
            <span>Discuss · 25 likes</span>
            <span> · 138 reads</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
