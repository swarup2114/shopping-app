// App.js
import React from 'react';
import './App.css';
import Header from './MainCompononents/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './PagesData/Home';
import NewArivals from './PagesData/NewArivals';
import Trending from './PagesData/Trending';
import Aboutus from './PagesData/Aboutus';
import Signup from './PagesData/Signup';
import LoginPage from './PagesData/Login';
import Cart from './PagesData/Cart';
import ProductDetail from './PagesData/ProductDetail';



const App = () => {

  return (
      <div>      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetail/>}/>
          <Route path="/new-arivals" element={<NewArivals />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
 
  );
};

export default App;
