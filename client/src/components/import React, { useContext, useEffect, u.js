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

    const isCheckoutDisabled = total <= 0; // Check if total is less than or equal to 0

    return ( <
        >
        <
        Navbar / >
        <
        div className = "container mx-auto mt-10" >
        <
        div className = "flex flex-col shadow-md my-10 sm:flex-row" >
        <
        div className = "w-full sm:w-3/4 bg-white px-4 py-4 sm:px-10 sm:py-10" > { /* Content of the shopping cart */ } <
        /div>

        <
        div id = "summary"
        className = "w-full sm:w-1/4 px-4 py-4 sm:px-8 sm:py-10" > { /* Order Summary */ } <
        div className = "border-t mt-6 sm:mt-8" >
        <
        div className = "flex font-semibold justify-between py-4 sm:py-6 text-xs sm:text-sm uppercase" >
        <
        span > Total cost < /span> <
        span > $ { a } < /span> < /
        div > <
        Link to = "/check" >
        <
        button className = { `bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 sm:py-3 text-xs sm:text-sm text-white uppercase w-full ${isCheckoutDisabled ? 'pointer-events-none' : ''}` }
        disabled = { isCheckoutDisabled } >
        Checkout <
        /button> < /
        Link > <
        /div> < /
        div > <
        /div> < /
        div > <
        Footer / >
        <
        />
    );
};

export default Cart;