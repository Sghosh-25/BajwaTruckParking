import React from 'react'
import "./App.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const OurServices = () => {
  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.mostPopular', { y:-160,duration:1 });
        gsap.from('.combine', { x:-160,duration:1 });
        gsap.from('.flexible', { x:160,duration:1 });
        gsap.from('.hot', { y:160,duration:1 });
         // <-- automatically reverted
    },
);
  return (
    <div>
      <div className="ourServices">
        <div className="header">
          <p>Our Services</p>
          <h1>Secure Parking And Amenities</h1>
          <h3>Book a parking spot for your truck with ease</h3>
        </div>
        <div className="flexbox">
          <div className="flexleft">
            <div className="mostPopular">
              <div className="text">
                {" "}
                <span>Most Popular</span>
                <h1>24/7 Service for Truck Owners</h1>
                <div>
                  We provide secure parking facilities with various amenities
                  for truck owners.
                </div>
                <button className="booknow">Book Now</button>{" "}
              </div>
              <img src="/Pictures/Rectangle 7.jpg" alt="" />
            </div>
            <div className="combine">
              <div className="colum">
                <img
                  src="/Pictures/parking-sign (1) 1.png"
                  alt=""
                  className="iconimg"
                />
                <h1>Convenient Parking Solutions for Truck Owners</h1>
                <p>Book a parking spot for your truck hassle-free.</p>
                <button className="booknow">Book Now</button>
              </div>
              <div className="colum">
                <img
                  src="/Pictures/price-tag 1.png"
                  alt=""
                  className="iconimg"
                />
                <h1>Affordable Parking Options for Truck Owners</h1>
                <p>Secure parking facilities at competitive prices.</p>
                <button className="booknow">Book Now</button>
              </div>
            </div>
          </div>
          <div className="flexright">
            <div className="flexible">
              <div className="image">
                <img src="/Pictures/Rectangle 8.jpg" alt="" />
              </div>
              <div className="text2">
                <span>Flexible</span>
                <h1>Customizable Parking Solutions for Truck Owners</h1>
                <div>Tailor-made parking options to suit your needs.</div>
                <button className="booknow">Book Now</button>
              </div>
            </div>
            <div className="hot">
              <div className="text3">
                <span>HOT</span>
                <h1>Secure Parking and Amenities</h1>
                <div>
                  We provide secure parking facilities with various amenities
                  for truck owners.
                </div>
                <button className="booknow">Book Now</button>
              </div>

              <img src="/Pictures/Rectangle 7.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
