// src/components/CommentForm.js
import React, { useState } from 'react';
import api from '../services/api';

const CommentForm = ({ blogPostId }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`comments/`, { content: comment, post: blogPostId });
      console.log('New comment created:', response.data);
      // You can update the state or do something else after the comment is created
      // For example, fetch the updated comment list for the blog post.
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <textarea
        placeholder="Add a new comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
