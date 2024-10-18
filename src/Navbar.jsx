import React from 'react'
import "./App.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Navbar = () => {


useGSAP(
    () => {
        // gsap code here...
        gsap.from('.navbar', { y:-160,duration:1 }); // <-- automatically reverted
    },
);
  return (
    <>
      <nav className="navbar">
          <img
            src="/Pictures/Bajwa Truck Parking-01 1.png"
            alt="logo"
            className="logo"
          />
          <div>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="navbtn">
            <button className="btnsignin">Sign Up</button>
            <button className="btnlogin">Log in</button>
          </div>
        </nav>
    </>
  )
}

export default Navbar
