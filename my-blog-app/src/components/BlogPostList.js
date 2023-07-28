// src/components/BlogPostList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await api.get('blog/');
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Blog Posts</h2>
      <div className="grid grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
