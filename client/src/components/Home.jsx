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
        <div className="flex justify-center items-center m-24">
          <img src="./images/landingPic.jpeg" alt="homeLoading" />
        </div>
        <FeaturedProduct />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default Home;
