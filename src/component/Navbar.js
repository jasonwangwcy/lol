import React from 'react';
import picture from "../assets/picture.jpg";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className= "navbar">
      <div className = "leftside"> 
      <img src= {picture} />
      </div>      
      <div className = "rightside"> </div>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
    </div>
  )
}

export default Navbar
