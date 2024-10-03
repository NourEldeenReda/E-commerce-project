import { createSlice } from "@reduxjs/toolkit";

// Helper function to load wishlist from localStorage
const loadWishlistFromLocalStorage = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

// Helper function to save wishlist to localStorage
const saveWishlistToLocalStorage = (wishlist) => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

const initialState = {
  wishlistItems: loadWishlistFromLocalStorage(), // Load wishlist from localStorage
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.wishlistItems = action.payload;
      saveWishlistToLocalStorage(state.wishlistItems); // Save updated wishlist to localStorage
    },
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.wishlistItems.some((item) => item.id === product.id)) {
        state.wishlistItems.push(product);
      }
      saveWishlistToLocalStorage(state.wishlistItems); // Save updated wishlist to localStorage
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      saveWishlistToLocalStorage(state.wishlistItems); // Save updated wishlist to localStorage
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;
export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
export default wishlistSlice.reducer;
