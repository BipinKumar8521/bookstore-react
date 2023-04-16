import './Navbar.css'
import React, { useState } from 'react'

export default function Navbar() {
const[hamburger, setHamburger]= useState(false)

// To Disable navbar on scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <nav id="navbar">
    <a href="#intro-section">
      <img src="/bookstore-react/img/logo.png" alt="The Last Chapter" className="logo"
    /></a>
    <ul className={hamburger? "nav-menu active" : "nav-menu"}>
      <li className="item">
        <a href="#Best-selling-books">Best Selling Books</a>
      </li>
      <li classNameName="item">
        <a href="#Our-Recommendations">Our Recommendations</a>
      </li>
      <li className="item"><a href="#Review-Section">Reviews Section</a></li>
      <li className="item"><a href="#Contact-us">Contact Us</a></li>
      <li className="item"><a href="#login">Login<b>/</b>SignUp</a></li>
    </ul>
    <div className={hamburger? "hamburger active" : "hamburger"} onClick={()=>setHamburger(!hamburger)}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </nav>
  )
}

