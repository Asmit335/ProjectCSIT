import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menuItems }) => {
  return (
    <ul className="ml-12 inline-flex space-x-8">
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.href}
            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            {item.name}
            <span></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
