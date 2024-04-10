import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../componentsstyles/signuppage.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const dispatch=useDispatch();
  const usenav=useNavigate();
  // const customers=useSelector((state)=>state.customers);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cart:[]
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.username.length < 7) {
      newErrors.username = "Username must be at least 7 characters";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = " Enter Valid Email Address";
    }

    if (formData.phone.length < 10) {
      newErrors.phone = " Enter Valid Number";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password Must be 6 Characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...existingUsers, formData];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setFormData({ username: "", email: "", phone: "", password: "" });
      toast.success("signup completed...")
      
      dispatch({
        type:"SIGINUP",
        payload:{...formData,cart:[]}
      })
      setTimeout(()=>{
        usenav("/login")
      },5000)
      
    } else {
      console.log("Form validation failed");
    }
  };

  return (
   <>
    <div className="signup-frm">
      <h2>Signup Form</h2>
      {errors.username && <p className="error">{errors.username}</p>}
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="ENTER NAME"
      />

      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ENTER EMAIL.."
      />

      {errors.phone && <p className="error">{errors.phone}</p>}
      <input
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="ENTER PHONE.."
      />

      {errors.password && <p className="error">{errors.password}</p>}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="ENTER PASSWORD.."
      />

      <button type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
      <p>
        Already have an account ?<Link to="/login">Login</Link>
      </p>
      
    </div>
    <ToastContainer/>
   </>
  );
};

export default Signup;
