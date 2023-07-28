import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import Login from './components/Login';
import Register from './components/Register';
import { setAuthToken, logout } from './services/auth';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setAuthToken(null);
    setUser(null);
    logout();
  };

  const handleRegister = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <div>
        {/* Display user authentication status */}
        {user ? (
          <div>
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Please login or register.</p>
        )}

        {/* Use <Routes> to wrap your <Route> components */}
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route
            path="/blog/:id/comments"
            element={
              <>
                <CommentList />
                {user && <CommentForm />}
              </>
            }
          />
          <Route
            path="/login"
            element={user ? <div>Already logged in</div> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={user ? <div>Already registered</div> : <Register onRegister={handleRegister} />}
          />
          {/* Add a default route to handle unknown paths */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
