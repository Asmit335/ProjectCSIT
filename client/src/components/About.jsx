import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import { AppContext } from "../context/ProductContext";
const users = [
  {
    name: "Sudarshan Baral",
    image: "./images/sudarshan.jpeg",
    position: "Marketing Lead",
  },
  {
    name: "Jay Kishan Das",
    image: "./images/jay.jpeg",
    position: "Front-end developer",
  },

  {
    name: "Asmit Khanal",
    image: "./images/pp.jpg",
    position: "Back-end developer",
  },
  {
    name: "Sagar Dhakal",
    image: "./images/sagarpp.jpeg",
    position: "Sales",
  },
];
const About = () => {
  // const { myNme } = useContext(AppContext);
  return (
    <>
      {/* {myName} */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="w-full mt-5  space-y-4">
          <Navbar />
          {/* <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          /> */}
        </div>

        <hr className="mt-20" />
        {/* Hiring Banner */}
        <p className="text-3xl font-bold md:text-4xl justify-center items-center flex mb-5">
          About Us
        </p>
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6 mb-16">
            {/* <p className="text-sm font-semibold md:text-base">
              Join our team &rarr;
            </p> */}
            <p className="text-3xl font-bold md:text-4xl">Easy-Site&rarr;</p>
            <p className="text-base text-gray-600 md:text-lg">
              We at EasySite believe in high quality and exceptional customer
              service. But most importantly, we believe shopping is a right, not
              a luxury, so we strive to deliver the best products at the most
              affordable prices, and ship them to you regardless of where you
              are located.
            </p>
            <br />
            <Link to="/product">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Shop Now
              </button>
            </Link>
          </div>
          <div className="md:mt-o  w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* greetings */}
        <div className=" mt-10 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                Join Us &rarr;
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-6" />
      <Footer />
    </>
  );
};

export default About;
