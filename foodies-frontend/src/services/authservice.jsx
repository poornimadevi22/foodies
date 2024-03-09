// authService.js
import axios from 'axios';
import toast from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:4000';
// const navigate = useNavigate();
const authService = {

   
  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response;
    } catch (error) {
      console.log(error.response.data);
    }
  },

  register: async (userData) => {
    try {
      return await axios.post(`${BASE_URL}/signup`, userData);
    } catch (error) {
      throw error.response.data;
    }
  },

  saveToken: (token) => {
    localStorage.setItem('token', token);
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;
