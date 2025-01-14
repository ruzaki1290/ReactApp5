import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost'; // Import with correct casing
import PostList from './components/PostList';
import About from './components/About'; // Import your About component


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create-post" element={<CreatePost />} /> {/* Correct casing */}
          <Route path="/about" element={<About />} />          {/* Add the about route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


