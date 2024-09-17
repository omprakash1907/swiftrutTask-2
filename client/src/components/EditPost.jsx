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
    axios.get(`http://localhost:5000/api/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, content };
    const response = await axios.put(`http://localhost:5000/api/posts/${id}`, updatedPost);
    updatePost(response.data);
    navigate(`/post/${id}`);
  };

  return (
    <div className="container mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 mb-4 rounded-md"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 mb-4 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
