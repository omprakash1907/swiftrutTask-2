import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PostContext from '../context/PostContext';
import axios from 'axios';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const response = await axios.post('http://localhost:5000/api/posts', newPost);
    addPost(response.data);
    navigate('/');
  };

  return (
    <div className="w-1/2 mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Post Title</label>
          <input
            type="text"
            placeholder="Enter your post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Post Content</label>
          <textarea
            placeholder="Enter your post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
