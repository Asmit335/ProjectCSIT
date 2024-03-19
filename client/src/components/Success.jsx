import React from "react";
import { Link } from "react-router-dom";
function Success() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="font-bold text-white text-3xl text-center">
        Thank you for your Payment! <br />
        <Link to="/">
          <button className="rounded-md bg-black px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
