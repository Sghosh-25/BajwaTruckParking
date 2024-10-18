import React from 'react'
import "./App.css";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus">
        <div className="aboutusleft">
          <img src="/Pictures/Frame 9.jpg" alt="" />
          <p>
            At Bajwa Truck, we have assembled a dedicated team of professionals
            who are committed to providing excellent service. With their
            expertise and passion for the industry, our team ensures that every
            truck owner receives top-notch parking solutions. We understand the
            unique needs of truck owners and strive to exceed their
            expectations. Whether its booking a parking spot or addressing any
            concerns, our team is here to assist you every step of the way.
          </p>
          <button>Learn more</button>
        </div>
        <div className="aboutusright">
          <div className="header3">
            <p>About us</p>
            <h1>Meet Our Dedicated Team of Professionals</h1>
            <div>
              Our Dedicated Team of Professionals always at your service be it
              day or night!
            </div>
          </div>
          <div>
            <img src="/Pictures/Frame 10.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
