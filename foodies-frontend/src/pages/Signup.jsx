// Register.js
import React, { useState } from 'react';
import authService from '../services/authservice';
import toast from "react-hot-toast";
import '../App.css'
// import { jwtDecode } from "jwt-decode";

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleRegister = async () => {
    try {
      const data = await authService.register(userData);
      console.log("resp",data)
      // const decoded = token ? jwtDecode(token) : {};
      // console.log("resp",decoded)
      if(data.status===200){
        toast.success("user registered")
        authService.saveToken(data.data.token);
        window.location.href="/";
         alert(`Heloo !!!🦄 welcome  to vegan Foodies🧉🥞 webpage` )
      }else{
       
        toast.error(data?.message??'internal server error')
      }
      
    //   window.location.href="/"
      // Redirect or do something after successful registration
    } catch (error) {
      console.error('Registration failed', error);
      toast.error(error?.message??'internal server error')
    }
  };

  return (
    <React.Fragment>
      <style>
        {`
          body {
            background: url("/fruit.jpg") no-repeat right;
            background-size: cover;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          .form-control {
            width:60%;
            border:2px solid gray;
            font-size: 14px; 
            padding: 6px;
            background-color:rgb(255,255,255,0.15)
          }
        `}
      </style>


    <div className="container mt-5">
    {/* // style=
      
    //     background: 'url("/fruit.jpg")',
    //    backgroundPosition:"right",
        
    //      width:'100%',
    //   }} */}
      <div className="row justify-content-right">
        <div className="col-md-6">
          <h2 className="mb-4" >Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </div>
            <div className="align-items-center"  style={{"marginLeft":"20%", "marginTop":"2%"}}>
            <button type="button" className="btn btn-primary" onClick={handleRegister}>
              Register
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Register;
