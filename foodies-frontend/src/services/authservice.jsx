import axios from 'axios';
import * as jwt from 'jwt-decode';
import DishForm from '../pages/Admin';

import toast from "react-hot-toast";


 const BASE_URL = 'https://foodies-webpage.onrender.com';
// const BASE_URL = 'http://localhost:4000';


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
      throw error.response;
    }
  },

  deleteDish: async (id) => {
    try {
      return await axios.post(`${BASE_URL}/deleteDish`, {"id":id});
    } catch (error) {
      // console.log("fff",error)
      throw error.response;
    }
  },

  getUserRole: () => {
    let userRole = null;
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      const decodedToken = jwt.jwtDecode(jwtToken)
      // console.log(decodedToken);
      userRole = decodedToken.check?.role??decodedToken.role;
      // console.log("f",decodedToken,userRole)
    }
    return userRole;
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

  updateDishData: async (id,dishData) => {
    try {
      return await axios.put(`${BASE_URL}/updateDishData/${id}`, dishData);
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
