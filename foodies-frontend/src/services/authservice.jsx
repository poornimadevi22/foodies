import axios from 'axios';
import toast from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://foodies-webpage.onrender.com';
// const BASE_URL = 'http://localhost:4000';
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

  createOrder: async (orderData) => {
    try {
      return await axios.put(`${BASE_URL}/order/create`, orderData);
    } catch (error) {
      console.log("fff",error)
      throw error.response;
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
