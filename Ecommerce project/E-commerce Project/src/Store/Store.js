// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import filteringReducer from "./filteringSlice";
import userReducer from "./userSlice"; // Import userSlice

const store = configureStore({
  reducer: {
    filtering: filteringReducer,
    user: userReducer,
  },
});

export default store;
