import React, { useContext } from "react";
import PostContext from "../context/PostContext";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const HomePage = () => {
  const { posts } = useContext(PostContext);

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="text-xl text-center font-bold text-gray-900 mb-2 bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 hover:shadow-md transition duration-200 ease-in-out">
        <h2 className="text-4xl font-bold mb-4">All Blog Posts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-300 shadow-sm rounded-lg p-4 flex flex-col justify-between relative h-full"
          >
            <div className="flex-grow">
              <div className="flex items-center mb-4">
              </div>

              <Link to={`/post/${post._id}`}>
                <h2 className="inline-block text-xl font-bold text-gray-900 mb-2 bg-blue-100 px-4 py-2 rounded-lg hover:bg-blue-200 hover:shadow-md transition duration-200 ease-in-out w-full">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-600 mb-4 line-clamp-4">{post.content}</p>
            </div>

            <div className="mt-auto">
              <Link
                to={`/post/${post._id}`}
                className="block text-center bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-600"
              >
                Read More
              </Link>
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
