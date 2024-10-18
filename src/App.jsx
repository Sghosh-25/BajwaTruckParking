import React from 'react'
import "./App.css";
import Navbar from "./navbar";
import HeroSection from "./HeroSection";
import Process from "./Process";
import OurServices from "./OurServices";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Footer from "./Footer";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



function App() {
  useGSAP(
    () => {
        // gsap code here...
        // gsap.fromTo( ".herosection",{ y: -40, }, { y: 40, }); // <-- automatically reverted
        gsap.from('.herosection', { y:1000,duration:1 });
    },
  );
  return (
    <>
      {/* Bajwa Truck Hero Banner Section  */}
      <div className="herosection">
        <Navbar />
        <HeroSection />
      </div>
      {/* Bajwa Truck How Section  */}
      <Process />
      {/* Our Services */}
      <OurServices />
      {/* Bajwa Truck CTA */}
      <Banner />
      {/* Testimonials */}
      <Testimonials />;{/* Bajwa Truck CTA 2 */}
      <AboutUs />
      {/* Bajwa Truck FAQ */}
      <FAQ />
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
