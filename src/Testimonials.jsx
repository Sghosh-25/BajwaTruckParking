import React from 'react'
import "./App.css";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonials">
        <div className="header3">
          <p>Testimonials</p>
          <h2>Customer Testimonials</h2>
          <h4>Read what our satisfied truck owners have to say!</h4>
        </div>
        <Slider />
      </div>
    </div>
  )
}

export default Testimonials
