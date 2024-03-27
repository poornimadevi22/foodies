// authService.js
import axios from 'axios';
import toast from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://foodies-webpage.onrender.com';
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

  addDish: async (dishData) => {
    try {
      return await axios.post(`${BASE_URL}/addDish`, dishData);
    } catch (error) {
      throw error.response.data;
    }
  },

  getAllDish: async()=>{
    try{
     return await axios.get(`${BASE_URL}/getAllDish`)
    }catch(error){
      throw error.response
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;
