import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowDown,
  faSquareParking,
  faUtensils,
  faFileInvoiceDollar,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      {/* Bajwa Truck Hero Banner Section  */}
      <div className="herosection">
        <nav className="navbar">
          <img
            src="https://media.licdn.com/dms/image/C5612AQG9Y4WYF_xgnw/article-cover_image-shrink_600_2000/0/1630481064598?e=2147483647&v=beta&t=7TvEUrT1cef1_xvgH8q2cMn8nFIOEgvtRVyNNfeY1Qs"
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
        <div className="herotext">
          <div className="heroleft">
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
            <button>Learn more</button>
          </div>
          <div className="heroright">
            <h1>Check Spot</h1>
            <div className="forms">
              <form className="time">
                <h2>Time</h2>
                <div>
                  <label htmlFor="time">From</label> <br />
                  <input type="datetime-local" />
                </div>
                <div>
                  <label htmlFor="time">To</label> <br />
                  <input type="datetime-local" />
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
      </div>
      {/* Bajwa Truck How Section  */}
      <div className="process">
        <div className="header">
          <p>How to</p>
          <h1>
            Discover How Easy It is to book a <br /> parking spot for truck
          </h1>
        </div>
        <div className="cards">
          <div className="card1 ">
            <div className="float">01</div>
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
            <h1>Step 1: Find available parking spots</h1>
            <p>
              Browse through our website to find a list of available parking
              spots for your truck.
            </p>
            <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
            <h2>Book</h2>
          </div>
          <div className="card2">
            <div className="float">02</div>
            <FontAwesomeIcon className="icon" icon={faUtensils} />
            <h1>Step 2: Reserve Your Preferred Spot</h1>
            <p>
              Select your preferred parking spot and make a reservation through
              our easy-to-use booking system.
            </p>
            <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
            <h2>Reserve</h2>
          </div>
          <div className="card3">
            <div className="float">03</div>
            <FontAwesomeIcon className="icon" icon={faSquareParking} />
            <h1>Step 3: Arrive at the Parking Location</h1>
            <p>
              Drive your truck to the designated parking location and park in
              your reserved spot.
            </p>
            <FontAwesomeIcon className="downarrow" icon={faArrowDown} />
            <h2>Park</h2>
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
        <div className="grid">
          <div className="mostPopular">
            <div className="text">
              {" "}
              <span>Most Popular</span>
              <h1>24/7 Service for Truck Owners</h1>
              <div>
                We provide secure parking facilities with various amenities for
                truck owners.
              </div>
              <button className="booknow">Book Now</button>{" "}
            </div>
            <img
              src="https://images.pexels.com/photos/4320468/pexels-photo-4320468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="flexible">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1692343014843-b7d83c076dff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
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
                We provide secure parking facilities with various amenities for
                truck owners.
              </div>
              <button className="booknow">Book Now</button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1695705225025-5acd9a63c837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="combine">
            <div className="colum">
              <FontAwesomeIcon className="icon2" icon={faSquareParking} />
              <h1>Convenient Parking Solutions for Truck Owners</h1>
              <p>Book a parking spot for your truck hassle-free.</p>
              <button className="booknow">Book Now</button>
            </div>
            <div className="colum">
              <FontAwesomeIcon className="icon2" icon={faFileInvoiceDollar} />
              <h1>Affordable Parking Options for Truck Owners</h1>
              <p>Secure parking facilities at competitive prices.</p>
              <button className="booknow">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Bajwa Truck CTA */}
      <div className="banner">
        <img
          className="bannerimg"
          src="https://images.unsplash.com/photo-1492168732976-2676c584c675?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
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
          <img src="https://pngimg.com/d/truck_PNG16220.png" alt="" />
        </div>
      </div>
      {/* Testimonials */}
      {/* <div className="testimonial">
        <div className="header2">
         <p> Testimonials</p>
         <h1>Custiomer Testimonials</h1>
         <div>Read what our satisfied truck owners have to say!</div>
        </div>
        <div className="rating">
          <div className="ratingleft"></div>
        <div className="ratingright"></div>
        </div>
        
      </div> */}
      {/* Bajwa Truck CTA 2 */}
      <div className="aboutus">
        <div className="aboutusleft">
          <img
            src="https://images.unsplash.com/photo-1531116986907-8a3f9090f792?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
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
            <img
              src="https://images.unsplash.com/photo-1676462298140-4a95f99a88e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
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
            <li>
              Lorem ipsum dolor sit amet.{" "}
              <FontAwesomeIcon
                className="icon3"
                icon={faCirclePlus}
                style={{ color: "#0c4c7e" }}
              />
            </li>
            <li>
              {" "}
              Lorem ipsum dolor sit amet consectetur.{" "}
              <FontAwesomeIcon
                className="icon3"
                icon={faCirclePlus}
                style={{ color: "#0c4c7e" }}
              />
            </li>
            <li>
              Lorem, ipsum dolo consectetur adipisicing.{" "}
              <FontAwesomeIcon
                className="icon3"
                icon={faCirclePlus}
                style={{ color: "#0c4c7e" }}
              />
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur{" "}
              <FontAwesomeIcon
                className="icon3"
                icon={faCirclePlus}
                style={{ color: "#0c4c7e" }}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="col1">
          <img
            src="https://media.licdn.com/dms/image/C5612AQG9Y4WYF_xgnw/article-cover_image-shrink_600_2000/0/1630481064598?e=2147483647&v=beta&t=7TvEUrT1cef1_xvgH8q2cMn8nFIOEgvtRVyNNfeY1Qs"
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
    </>
  );
}

export default App;
