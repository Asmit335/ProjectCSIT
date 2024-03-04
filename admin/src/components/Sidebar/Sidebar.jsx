import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../Assets/Product_Cart.svg";
import list_product_icon from "../../Assets/Product_list_icon.svg";
const Sidebar = () => {
  return (
    <>
      {/* <div className="sidebar">
        <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
          <div className="sidebar-item">
            <img src={add_product_icon} alt="loading" />
            <p>Add Product</p>
          </div>
        </Link>

        <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
          <div className="sidebar-item">
            <img src={list_product_icon} alt="loading" />
            <p>Product List</p>
          </div>
        </Link>
      </div> */}

      <div className="sidebar  flex flex-col  items-center py-4">
        <Link
          to="/addproduct"
          className="sidebar-item flex items-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <img src={add_product_icon} alt="Add Product" className="w-6 h-6" />
          <p>Add Product</p>
        </Link>
        <Link
          to="/listproduct"
          className="sidebar-item flex items-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <img src={list_product_icon} alt="Product List" className="w-6 h-6" />
          <p>Product List</p>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
