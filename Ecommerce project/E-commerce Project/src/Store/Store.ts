// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import filteringReducer from "./filteringSlice";
import userReducer from "./userSlice"; // Import userSlice
import wishlistReducer from "./wishlistSlice"; // Wishlist slice
import cartReducer from "./cartSlice"; // Cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filtering: filteringReducer,
    user: userReducer,
  },
});

export default store;
