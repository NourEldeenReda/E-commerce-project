import { createSlice } from "@reduxjs/toolkit";
import { setCart } from "./cartSlice";
import { setWishlist } from "./wishlistSlice";

// Load user from localStorage if available
const storedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: storedUser, // Initialize with stored user data
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Set user data
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // Clear localStorage on logout
    },
  },
});

export const { login, logout } = userSlice.actions;

// Thunk to fetch user data, cart, and wishlist
export const fetchUserData = (userId) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/users/${userId}`);
  const userData = await response.json();

  // Dispatch the fetched cart and wishlist to Redux
  dispatch(setCart(userData.cart || []));
  dispatch(setWishlist(userData.wishlist || []));
};

export const selectCurrentUser = (state) => state.user.user;
export default userSlice.reducer;
