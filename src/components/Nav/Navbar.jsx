import React,{useState} from 'react';
import "./Navbar.css";
import Hamburger from '../Hamburger/Hamburger';





function Navbar() {
  return (
    <div className='nav navgation'>
    <div className="left">
      <h1>Portfolio</h1> 
      </div>
      <Hamburger/>
    </div>
  );
}

export default Navbar;
