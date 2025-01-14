import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Will display all posts with pagination built into it
const PostList = () => {
   return (
      <div className="container my-4">
         <h1 className="mb-4">Posts</h1>
      </div>
   )
};

export default PostList;