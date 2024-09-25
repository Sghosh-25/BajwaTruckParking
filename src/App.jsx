import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const testimonials = [
  {
    quote:
      "I am extremely satisfied with Bajwa Truck's parking services. They provide a convenient and secure parking stop for my truck.",
    name: "John C.",
    company: "Wajack Company",
  },
  {
    quote:
      "I highly recommend Bajwa Truck's parking services. They have made it so easy for me to book a parking spot for my truck.",
    name: "Jason Smith",
    company: "ABC Company",
  },
];

function App() {
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // const handleNext = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // };

  // const handlePrev = () => {
  //   setCurrentTestimonial(
  //     (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //   );

    return (
      <>
        {/* Bajwa Truck Hero Banner Section  */}
        <div className="herosection">
          <nav className="navbar">
            <img
              src="../Pictures/Bajwa Truck Parking-01 1.png"
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
          <div className="heroleft">
            <div className="herotext">
              <h1>
                Book Your{" "}
                <span className="rgbtext">
                  {" "}
                  Truck <br />
                  Parking Spot{" "}
                </span>{" "}
                Online <br /> Today!
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                beatae, quas minima ex quod aliquam ad distinctio quam nulla
                reprehenderit aperiam eaque repellendus unde, ducimus, parking
              </p>
            </div>
            <button>Learn more</button>
          </div>
          <div className="heroright">
            <h1>Check Spot</h1>
            <div className="forms">
              <form className="time">
                <h2>Time</h2>
                <div className="timing">
                  <div>
                    <label htmlFor="time">From</label> <br />
                    <input type="datetime-local" />
                  </div>
                  <div>
                    <label htmlFor="time">To</label> <br />
                    <input type="datetime-local" />
                  </div>
                </div>
              </form>
              <form className="location">
                <h2>Location</h2>
                <label htmlFor="Select location">Select location</label> <br />
                <select className="selection" name="location">
                  <option value="Esplanade">Esplanade</option>
                  <option value="Howrah">Howrah</option>
                  <option value="Sealdah">Sealdah</option>
                  <option value="NKDABusStand">NKDA Bus Stand</option>
                </select>
              </form>
              <form className="typeoftruck">
                <h2>Type of truck</h2>
                <label htmlFor="Select type">Select type</label> <br />
                <select className="selection" name="trucks">
                  <option value="volvo">Volvo</option>
                  <option value="tata">Tata</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </form>
              <button>Check</button>
            </div>
          </div>
        </div>
        {/* Bajwa Truck How Section  */}
        <div className="process">
          <div className="header1">
            <p>How to</p>
            <h1>
              Discover How Easy It is to book a <br /> parking spot for truck
            </h1>
          </div>
          <div className="cards">
            <div className="card ">
              <div className="float">01</div>
              <div className="card1 ">
                <img src="../Pictures/file.png" alt="" className="iconimg" />
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
                <img
                  src="../Pictures/booking 1.png"
                  alt=""
                  className="iconimg"
                />
                <h1>Step 2: Reserve Your Preferred Spot</h1>
                <p>
                  Select your preferred parking spot and make a reservation
                  through our easy-to-use booking system.
                </p>
                <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
                <h2>Reserve</h2>
              </div>
            </div>
            <div className="card">
              <div className="float">03</div>
              <div className="card3">
                <img
                  src="../Pictures/parking-sign (1) 1.png"
                  alt=""
                  className="iconimg"
                />
                <h1>Step 3: Arrive at the Parking Location</h1>
                <p>
                  Drive your truck to the designated parking location and park
                  in your reserved spot.
                </p>
                <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
                <h2>Park</h2>
              </div>
            </div>
          </div>
          <button>Learn more</button>
        </div>
        {/* Our Services */}
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
                <img src="../Pictures/Rectangle 7.jpg" alt="" />
              </div>
              <div className="combine">
                <div className="colum">
                  <img
                    src="../Pictures/parking-sign (1) 1.png"
                    alt=""
                    className="iconimg"
                  />
                  <h1>Convenient Parking Solutions for Truck Owners</h1>
                  <p>Book a parking spot for your truck hassle-free.</p>
                  <button className="booknow">Book Now</button>
                </div>
                <div className="colum">
                  <img
                    src="../Pictures/price-tag 1.png"
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
                  <img src="../Pictures/Rectangle 8.jpg" alt="" />
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

                <img src="../Pictures/Rectangle 7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Bajwa Truck CTA */}
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
            <img src="../Pictures/truck.png" alt="" />
          </div>
        </div>
        {/* Testimonials */}
        {/* <div className="App">
          <h1>Testimonials</h1>
          <div className="testimonial">
            <p>"{testimonials[currentTestimonial].quote}"</p>
            <p>
              <strong>{testimonials[currentTestimonial].name}</strong>,{" "}
              {testimonials[currentTestimonial].company}
            </p>
          </div>
          <div className="navigation">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
        ); */}
        {/* Bajwa Truck CTA 2 */}
        <div className="aboutus">
          <div className="aboutusleft">
            <img src="../Pictures/Frame 9.jpg" alt="" />
            <p>
              At Bajwa Truck, we have assembled a dedicated team of
              professionals who are committed to providing excellent service.
              With their expertise and passion for the industry, our team
              ensures that every truck owner receives top-notch parking
              solutions. We understand the unique needs of truck owners and
              strive to exceed their expectations. Whether its booking a parking
              spot or addressing any concerns, our team is here to assist you
              every step of the way.
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
              <img src="../Pictures/Frame 10.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* Bajwa Truck FAQ */}
        <div className="FAQ">
          <div className="header3">
            <p>FAQ</p>
            <h1>
              Frequently <br />
              Asked Questions
            </h1>
            <div>
              Find answers to the most common questions about our truck parking
              services.
            </div>
            <button> Learn more</button>
          </div>
          <div className="questions">
            <ul>
              <div className="question">
                <span>Lorem ipsum dolor sit amet. </span>
                <FontAwesomeIcon
                  className="icon3"
                  icon={faCirclePlus}
                  style={{ color: "#0c4c7e" }}
                />
              </div>
              <div className="question">
                {" "}
                <span>Lorem ipsum dolor sit amet consectetur. </span>
                <FontAwesomeIcon
                  className="icon3"
                  icon={faCirclePlus}
                  style={{ color: "#0c4c7e" }}
                />
              </div>
              <div className="question">
                <span>Lorem, ipsum dolo consectetur adipisicing. </span>
                <FontAwesomeIcon
                  className="icon3"
                  icon={faCirclePlus}
                  style={{ color: "#0c4c7e" }}
                />
              </div>
              <div className="question">
                <span>Lorem ipsum dolor sit, amet consectetur </span>
                <FontAwesomeIcon
                  className="icon3"
                  icon={faCirclePlus}
                  style={{ color: "#0c4c7e" }}
                />
              </div>
            </ul>
          </div>
        </div>
        <div className="footer">
          <div className="col1">
            <img
              src="../Pictures/Bajwa Truck Parking-01 1.png"
              alt="logo"
              className="logo"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              laboriosam distinctio. Quia et ipsa cupiditate ratione praesentium
              voluptate vitae amet provident quam, autem voluptatum. Magni
              aliquam consectetur error animi sequi!
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
      </>
    );
  };

export default App;
