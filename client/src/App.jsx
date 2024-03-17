import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Test from "./components/Test";
import ForgetPass from "./components/ForgetPass";
import ProductDetail from "./components/ProductDetail";
import Category from "./components/Category";
import CategoryProducts from "./components/CategoryProducts";
import NewFilter from "./components/NewFilter";
import Cart from "./components/Cart";
import Test from "./components/Test";
import { Checkout } from "./components/Checkout/Checkout";
import Newcheckout from "./components/Checkout/Newcheckout";
import Order from "./components/Order";
import Admin from "./components/Admin/Admin";

import CreateUser from "./components/CrudNode/CreateUser";
import UpdateUser from "./components/CrudNode/UpdateUser";
import User from "./components/CrudNode/User";
import ResetPass from "./components/ResetPass";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/forgetpass" element={<ForgetPass />} />

          <Route path="/category" element={<Category />} />
          <Route path="/test" element={<Test />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/filter" element={<NewFilter />} />
          <Route path="/check" element={<Checkout />} />
          <Route path="/newcheck" element={<Newcheckout />} />

          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/user" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<UpdateUser />} />

          <Route path="/reset" element={<ResetPass />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
