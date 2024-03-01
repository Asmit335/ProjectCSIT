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
// import Admin from "./components/Admin";
// import Dashboard from "./components/Dashboard";
import ProductDetail from "./components/ProductDetail";
import Category from "./components/Category";
// import ProductCategory from "./components/ProductCategory";
// import CategoryProduct from "./components/CategoryProduct";
import CategoryProducts from "./components/CategoryProducts";
import NewFilter from "./components/NewFilter";
import Cart from "./components/Cart";
// import ProtectedRoute from "./components/ProtectedRoute";
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

          {/* protectedroute */}

          {/* <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            fallback={Login}
          />
          <ProtectedRoute path="/admin" component={Admin} fallback={Login} /> */}

          {/* protected route */}

          <Route path="/category" element={<Category />} />
          <Route path="/filter" element={<NewFilter />} />
          {/* <Route path="/productselect" element={<ProductCategory />} /> */}
          <Route path="/categories/:name" element={<CategoryProducts />} />

          <Route path="/products/:id" element={<ProductDetail />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
