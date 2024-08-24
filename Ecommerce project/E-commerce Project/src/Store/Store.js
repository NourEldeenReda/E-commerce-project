// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import filteringReducer from "./filteringSlice";

const store = configureStore({
  reducer: {
    filtering: filteringReducer,
  },
});

export default store;
