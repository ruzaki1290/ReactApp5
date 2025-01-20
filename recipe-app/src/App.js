import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Post from './components/Post';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;