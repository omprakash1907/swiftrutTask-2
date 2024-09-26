import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostContext from '../context/PostContext';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const { updatePost } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://blogtask-ykft.onrender.com/api/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, content };
    const response = await axios.put(`https://blogtask-ykft.onrender.com/api/posts/${id}`, updatedPost);
    updatePost(response.data);
    navigate(`/post/${id}`);
  };

  return (
    <div className="w-1/2 mx-auto mt-8 bg-white shadow-md border border-gray-300 rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center text-center">
      
        Edit Post
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Post Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Post Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V4a1 1 0 00-2 0v6m-1 6h4m-5 1v1h6v-1a2 2 0 10-4 0h-2z"
            />
          </svg>
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
