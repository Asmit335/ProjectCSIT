import React from "react";
import { Routes, Route } from "react-router-dom";
import ListProduct from "../ListProduct/ListProduct";
import AddProduct from "../AddProduct/AddProduct";
const Admin = () => {
  return (
    <>
      <div className="admin">
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/listproduct" element={<ListProduct />} />
        </Routes>
      </div>
    </>
  );
};

export default Admin;
