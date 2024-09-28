import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [], // Wishlist items
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.wishlistItems = action.payload; // Load wishlist from backend on login
    },
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.wishlistItems.some((item) => item.id === product.id)) {
        state.wishlistItems.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;
export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
export default wishlistSlice.reducer;
