import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const Banner = () => {
  
  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.bannerleft', { x:-160,duration:1 }); 
        gsap.from('.bannerright', { x:160,duration:1 }); // <-- automatically reverted
    },
);

  return (
    <div>
      <div className="banner">
        <img className="bannerimg" src="" alt="" />
        <div className="bannerleft">
          <h1>
            Book Your{" "}
            <span className="yellowtext">
              {" "}
              Truck <br />
              Parking{" "}
            </span>{" "}
            Spot <br />
          </h1>
          <p>
            Conveniently reserve a secure parking spot for your truck on our
            website.
          </p>
          <button>Book Now</button>
        </div>
        <div className="bannerright">
          <img src="/Pictures/truck.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
