import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Services from "./Services";
import FeaturedProduct from "./FeaturedProduct";

const Home = () => {
  return (
    <>
      <div className="mt-5">
        <Navbar />
        <div className="flex justify-center items-center">
          <img
            src="https://easymartak.netlify.app/images/landingPic.png"
            alt="homeLoading"
          />
        </div>
        <FeaturedProduct />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default Home;
