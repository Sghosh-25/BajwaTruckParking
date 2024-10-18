import React from 'react'
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const FAQ = () => {
  return (
    <div>
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
    </div>
  )
}

export default FAQ
