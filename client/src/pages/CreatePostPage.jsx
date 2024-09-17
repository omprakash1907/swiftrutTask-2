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
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 mb-4"
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 mb-4"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
