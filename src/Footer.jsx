import React from 'react'
import "./App.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="col1">
          <img
            src="/Pictures/Bajwa Truck Parking-01 1.png"
            alt="logo"
            className="logo"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            laboriosam distinctio. Quia et ipsa cupiditate ratione praesentium
            voluptate vitae amet provident quam, autem voluptatum. Magni aliquam
            consectetur error animi sequi!
          </p>
          <div>
            {/* <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faInstagram} /> */}
          </div>
        </div>
        <div className="col">
          <h3>About us</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="col">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>How we work</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>
        <div className="col">
          <h3>Get Exclusive Offer</h3>
          <p>Subscribe to our newsletter for the latest updates</p>
          <form action="">
            <input type="text" />
          </form>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
