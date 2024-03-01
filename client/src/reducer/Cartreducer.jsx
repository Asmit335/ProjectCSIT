import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Cartslice"; // Assuming you have defined this action
import { toast } from "react-toastify";

const CartReducer = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  // Add to cart function
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return null; // Since this component doesn't render anything, returning null
};

export default CartReducer;
