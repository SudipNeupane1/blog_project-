// services/auth.js
import api from './api';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'blogToken';

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem(TOKEN_KEY);
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post('auth/login/', userData);
    const { token } = response.data;
    setAuthToken(token);
    return jwt_decode(token);
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('auth/register/', userData);
    const { token } = response.data;
    setAuthToken(token);
    return jwt_decode(token);
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  setAuthToken(null);
};
