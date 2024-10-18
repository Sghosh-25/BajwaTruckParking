import React from 'react'
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const Process = () => {

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('#leftcard', { x:560,duration:1.5 }); // <-- automatically reverted
        gsap.from('#rightcard', { x:-560,duration:1.5 });
    },
);
  return (
    <div>
      <div  className="process">
        <div className="header1">
          <p>How to</p>
          <h1>
            Discover How Easy It is to book a <br /> parking spot for truck
          </h1>
        </div>
        <div  className="cards">
          <div id='leftcard' className="card ">
            <div className="float">01</div>
            <div className="card1 ">
              <img src="/Pictures/file.png" alt="" className="iconimg" />
              <h1>Step 1: Find available parking spots</h1>
              <p>
                Browse through our website to find a list of available parking
                spots for your truck.
              </p>
              <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
              <h2>Book</h2>
            </div>
          </div>
          <div className="card">
            <div className="float">02</div>
            <div className="card2 ">
              <img src="/Pictures/booking 1.png" alt="" className="iconimg" />
              <h1>Step 2: Reserve Your Preferred Spot</h1>
              <p>
                Select your preferred parking spot and make a reservation
                through our easy-to-use booking system.
              </p>
              <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
              <h2>Reserve</h2>
            </div>
          </div>
          <div id='rightcard'  className="card">
            <div className="float">03</div>
            <div  className="card3">
              <img
                src="/Pictures/parking-sign (1) 1.png"
                alt=""
                className="iconimg"
              />
              <h1>Step 3: Arrive at the Parking Location</h1>
              <p>
                Drive your truck to the designated parking location and park in
                your reserved spot.
              </p>
              <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
              <h2>Park</h2>
            </div>
          </div>
        </div>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default Process
