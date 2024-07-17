import Announcement from "./components/announcement/Announcement";
import Navbar from "./components/Navbar";

import PostsPage from "./pages/PostsPage";

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import TagsPage from "./pages/TagsPage";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-inter transition-bg">
      <Header />

      <div className={"flex-grow pt-2"}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/createPost" element={<CreatePostPage />} />
          <Route path="/tags" element={<TagsPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
