import React, { useState } from 'react';
import authService from '../services/authservice';
import toast from "react-hot-toast";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    try {
      const data = await authService.login(credentials);
      console.log(data)
      if(data.status===200){
        toast.success(`Logged in successfullyyy..Have a nice meal🧑🐈🐈🐈🐀🐀🐀🧑‍🎄...`)
        authService.saveToken(data.data.token);
        window.location.href="/"
      }else{
        console.log("resp",data)
        toast.error(data?.message??'internal server error')
      }
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
            background: url("/cakee.jpg") no-repeat right;
            background-size: cover;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          .form-control {
            font-size: 14px; 
            padding: 6px;
            background-color:rgb(255,255,255,0.15)
          }
        `}
      </style>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <div classǸame="align-items-center"  style={{margin:"4%", display:'ruby-text'}}>
            <button type="button" className="btn btn-primary style={{display:ruby-text}}" onClick={handleLogin}>
              Login
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Login;
