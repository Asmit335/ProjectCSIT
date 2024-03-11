import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Context1 from "../context/ContextApi";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  const { setTotal1 } = useContext(Context1);

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleInc = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id && item.quantity < 4) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDec = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };
  const a = (total + 10).toFixed(2);

  useEffect(() => {
    const a = (total + 10).toFixed(2);
    setTotal1(a);
  }, [total]);
  if (carts.length === 0) {
    return (
      <>
        <div className="  text-black font-bold  justify-center items-center text-4xl ">
          <div>
            <Navbar />
          </div>
          Cart is Empty
        </div>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="flex flex-col shadow-md my-10 sm:flex-row">
          <div className="w-full sm:w-3/4 bg-white px-4 py-4 sm:px-10 sm:py-10">
            <div className="flex justify-between border-b pb-4">
              <h1 className="font-semibold text-xl sm:text-2xl">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-xl sm:text-2xl">
                {carts?.length} Items
              </h2>
            </div>
            <div className="flex mt-6 mb-3">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 sm:w-3/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 sm:w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 sm:w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 sm:w-1/5">
                Total
              </h3>
            </div>
            {carts?.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className="flex items-center hover:bg-gray-100 px-2 py-2 sm:-mx-8 sm:px-6 sm:py-5"
                >
                  <div className="flex w-2/5 sm:w-3/5">
                    <div className="w-1/4 sm:w-1/5">
                      <img
                        className="h-16 sm:h-24"
                        src={cart?.image}
                        alt={cart?.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-2 sm:ml-4 sm:flex-grow">
                      <span className="font-semibold text-xs sm:text-sm">
                        {cart?.title}
                      </span>
                      <span className="text-red-500 text-xxs capitalize">
                        {cart?.category}
                      </span>
                      <div
                        className="font-semibold hover:text-red-500 text-gray-500 text-xxs cursor-pointer sm:text-xs"
                        onClick={() => removeProduct(cart?.id)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5 sm:w-1/5">
                    <svg
                      className={`fill-current text-gray-900 w-3 mr-1 cursor-pointer ${
                        cart?.quantity <= 0 &&
                        "pointer-events-none text-gray-700"
                      }`}
                      viewBox="0 0 448 512"
                      onClick={() => handleDec(cart?.id)}
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <input
                      className="  border text-center w-8 sm:w-12"
                      type="text"
                      value={cart?.quantity}
                    />
                    <svg
                      className="fill-current text-gray-900 w-3 cursor-pointer ml-1"
                      onClick={() => handleInc(cart?.id)}
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 sm:w-1/5 font-semibold text-xs sm:text-sm">
                    ${cart?.price}
                  </span>
                  <span className="text-center w-1/5 sm:w-1/5 font-semibold text-xs sm:text-sm">
                    ${cart?.price * cart?.quantity}
                  </span>
                </div>
              );
            })}
            <Link
              to={"/product"}
              className="flex font-semibold text-indigo-600 text-xs sm:text-sm mt-4 sm:mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-3 sm:w-4"
                viewBox="0 0 448 512"
              >
                {/* Arrow SVG */}
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div
            id="summary"
            className="w-full sm:w-1/4 px-4 py-4 sm:px-8 sm:py-10"
          >
            <h1 className="font-semibold text-xl sm:text-2xl border-b pb-4">
              Order Summary
            </h1>
            <div className="flex justify-between mt-6 sm:mt-10 mb-3">
              <span className="font-semibold text-xs sm:text-sm uppercase">
                Items {carts?.length}
              </span>
              <span className="font-semibold text-xs sm:text-sm">
                ${total?.toFixed(2)}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-2 text-xs sm:text-sm uppercase">
                Shipping
              </label>
              <select className="block p-1 text-gray-600 w-full text-xs sm:text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-6 sm:py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-2 text-xs sm:text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-1 text-xs sm:text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-3 py-1 text-xs sm:text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-6 sm:mt-8">
              <div className="flex font-semibold justify-between py-4 sm:py-6 text-xs sm:text-sm uppercase">
                <span>Total cost</span>
                <span>${a}</span>
              </div>
              <Link to="/check">
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 sm:py-3 text-xs sm:text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
