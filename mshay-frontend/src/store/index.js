import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // Import the reducer, not the slice
import cartReducer from "./cartSlice";     // Import the reducer, not the slice

const store = configureStore({
  reducer: {
    products: productReducer, // The key 'products' will be used in your selectors
    cart: cartReducer,       // The key 'cart' will be used in your selectors
  },
});

export default store;