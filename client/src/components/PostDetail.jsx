import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PostContext from "../context/PostContext";
import axios from "axios";
import { formatDistanceToNow } from "date-fns"; // Importing the function from date-fns

const PostDetail = () => {
  const { id } = useParams();
  const { deletePost } = useContext(PostContext);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://blogtask-ykft.onrender.com/api/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`https://blogtask-ykft.onrender.com/api/posts/${id}`);
    deletePost(id);
    navigate("/");
  };

  return post ? (
    <div className="w-1/2 mx-auto mt-8 bg-white shadow-md border border-gray-300 rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <p className="text-sm text-gray-500 flex justify-between mt-3">
        <span>
          Posted on{" "}
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span>{formatDistanceToNow(new Date(post.createdAt))} ago</span>
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-3 hover:bg-blue-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        Post
      </Link>

      {/* Edit Button */}
      <Link
        to={`/edit/${post._id}`}
        className="inline-flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 me-3 hover:bg-yellow-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM4 13h4v2H4v-2zm10-9l1.5 1.5L11 9l-1.5-1.5L14 4z" />
        </svg>
        Edit Post
      </Link>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 transition duration-300"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Delete Post
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PostDetail;
