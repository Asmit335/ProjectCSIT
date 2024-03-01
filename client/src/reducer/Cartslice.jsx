import { createSlice } from "@reduxjs/toolkit";

// Get cart items from localStorage or use an empty array if it doesn't exist
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // This is mutating the original state, which should be avoided
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // Correctly returning a new state
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
