// Aboutus.js
import React from 'react';
import "../componentsstyles/about.css"
import { FaStar } from "react-icons/fa";


const Aboutus = () => {
 const icons=["FaStar","FaStar","FaStar","FaStar"]


  

  return (
    <div className='about-container'>
  <div className="card-data">
    <p>


    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
    </p>


    <div>
    
    {icons.map((fas)=><FaStar className='star-icon'/>)}
    </div>
  </div>
  <div className="card-data">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
  
    <div>
    {icons.map((fas)=><FaStar className='star-icon'/>)}
    </div></div>
  <div className="card-data">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
    <div>
    {icons.map((fas)=><FaStar className='star-icon'/>)}
    </div>
  </div>
  <div className="card-data">
  Lorem ipsum dolor sit amet, c Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.onsectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi qui libero, sed quas maiores rerum laborum iste numquam ullam omnis hic sunt vero, natus fugit animi quis alias doloremque a.
  
    <div>
    {icons.map((fas)=><FaStar className='star-icon'/>)}
    </div></div>
    
    </div>
  );
}

export default Aboutus;
