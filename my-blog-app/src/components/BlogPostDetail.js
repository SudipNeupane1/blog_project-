import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import api from '../services/api';

const BlogPostDetail = () => {
  const [blogPost, setBlogPost] = useState({});
  const { id } = useParams(); // Use useParams hook to directly access the 'id' parameter

  useEffect(() => {
    const fetchBlogPostDetail = async () => {
      try {
        const response = await api.get(`blog/${id}/`);
        setBlogPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPostDetail();
  }, [id]);

  if (!blogPost.title || !blogPost.content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      {/* Display other details of the blog post if needed */}
    </div>
  );
};

export default BlogPostDetail;
