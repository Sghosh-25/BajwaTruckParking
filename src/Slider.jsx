// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "./App.css";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="slide">
          <SwiperSlide>
            <div className="slider">
              <div className="colleft">
                <div className="starrating">
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector (1).jpg" alt="" />
                </div>
                <h3>
                  I am extremely satisfied with Bajwa Trucks parking services.
                  They provide a convenient and secure parking stop for my
                  truck.
                </h3>
                <div className="driverinfo">
                  {" "}
                  <img src="../public/Pictures/Ellipse 4.jpg" alt="" />
                  <div>
                    <h4>John Doe</h4>
                    <p>Truck Owner, ABC Company.</p>
                  </div>
                </div>
              </div>
              <div className="colright">
                <div className="starrating">
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                </div>
                <h3>
                  I highly recommend Bajwa Trucks parking services. They have
                  made it so easy for me to book a parking spot for my truck.
                </h3>
                <div className="driverinfo">
                  {" "}
                  <div>
                    <img src="../public/Pictures/Ellipse 4 (1).jpg" alt="" />
                  </div>
                  <div>
                    <h4>John Doe</h4>
                    <p>Truck Owner, XYZ Company.</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slider">
              <div className="colleft">
                <div className="starrating">
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector (1).jpg" alt="" />
                </div>
                <h3>
                  I am extremely satisfied with Bajwa Trucks parking services.
                  They provide a convenient and secure parking stop for my
                  truck.
                </h3>
                <div className="driverinfo">
                  {" "}
                  <img src="../public/Pictures/Ellipse 4.jpg" alt="" />
                  <div>
                    <h4>John Doe</h4>
                    <p>Truck Owner, XYZ Company.</p>
                  </div>
                </div>
              </div>
              <div className="colright">
                <div className="starrating">
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                  <img src="../public/Pictures/Vector.jpg" alt="" />
                </div>
                <h3>
                  I highly recommend Bajwa Trucks parking services. They have
                  made it so easy for me to book a parking spot for my truck.
                </h3>
                <div className="driverinfo">
                  {" "}
                  <img src="../public/Pictures/Ellipse 4 (1).jpg" alt="" />
                  <div>
                    <h4>John Doe</h4>
                    <p>Truck Owner, XYZ Company.</p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
