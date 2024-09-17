import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PostContext from '../context/PostContext';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const { deletePost } = useContext(PostContext);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    deletePost(id);
    navigate('/');
  };

  return post ? (
    <div className="container mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-gray-500 mt-2">{new Date(post.createdAt).toLocaleDateString()}</p>
      <Link to={`/edit/${post._id}`} className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 block">
        Edit Post
      </Link>
      <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
        Delete Post
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PostDetail;
