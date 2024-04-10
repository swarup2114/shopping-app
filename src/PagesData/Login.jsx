import React, { useState } from 'react';
import "../componentsstyles/loginpage.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const dispatch=useDispatch();
  const usenav=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersData=JSON.parse(localStorage.getItem("users"))||[];
    const currentUser=usersData.find((user)=>user.email===formData.email && user.password===formData.password);
    
    if (currentUser) {
      dispatch({
        type: "LOGIN",
        payload: currentUser.username, 
      });
      localStorage.setItem("isAuthnteic","true")
      usenav("/cart")
    } else {
      toast.error("Invalid email or password. Please try again.");
     
    }
   
  };

  return (
   <>
    <div className='login-frm'>
      <h2>Login</h2>     
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
          />
       
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'
          />
       
        <button type="submit" onClick={handleSubmit}>Login</button>
        <p>You Don't have account ?<Link to="/signup">Signup</Link></p>
  
    </div>
    <ToastContainer/>
   </>
  );
};

export default LoginPage;

