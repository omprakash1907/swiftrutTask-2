import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";  // Add Sidebar component

function App() {
  return (
    <PostProvider>
      <Router>
        <Header />
        <div className="container mx-auto flex space-x-6 mt-8">
          {/* Main content */}
          <div className="w-3/4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePostPage />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
          </div>
          {/* Sidebar */}
          <div className="w-1/4">
            <Sidebar />
          </div>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
