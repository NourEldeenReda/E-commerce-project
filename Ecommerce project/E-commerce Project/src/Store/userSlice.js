import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage if available
const storedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: storedUser, // Initialize with stored user data if "Remember Me" was used
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Set the user data
    },
    logout: (state) => {
      state.user = null; // Clear user data
      localStorage.removeItem("user"); // Clear user data from localStorage on logout
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.user;

export default userSlice.reducer;
