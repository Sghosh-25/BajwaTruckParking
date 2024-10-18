import React from 'react'
import "./App.css";

const HeroSection = () => {
  return (
    <div>
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
  )
}

export default HeroSection
