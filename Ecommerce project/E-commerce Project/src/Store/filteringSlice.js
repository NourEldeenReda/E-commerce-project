import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch products with filters
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters) => {
    const query = new URLSearchParams(filters).toString(); // Convert filters to query string
    const response = await fetch(`http://localhost:3000/products?${query}`);
    const data = await response.json();
    return data;
  }
);

const filteringSlice = createSlice({
  name: "filtering",
  initialState: {
    products: [],
    filteredProducts: [],
    selectedCategory: [],
    pendingSelectedCategory: [],
    recommendedBrand: [],
    selectedColor: [], // New state for color filter
    selectedPrice: [], // New state for price filter
    query: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setFilteringResult: (state, action) => {
      state.pendingSelectedCategory = action.payload;
    },
    applyFilters: (state) => {
      state.selectedCategory = state.pendingSelectedCategory;
      state.status = "loading";
    },
    resetFilters: (state) => {
      state.pendingSelectedCategory = [];
      state.selectedCategory = [];
      state.recommendedBrand = [];
      state.selectedColor = [];
      state.selectedPrice = [];
      state.query = "";
      state.filteredProducts = state.products;
    },
    setCategorySelection: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setRecommendedBrand: (state, action) => {
      state.recommendedBrand = action.payload;
    },
    setColorSelection: (state, action) => {
      state.selectedColor = action.payload;
    },
    setPriceSelection: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setFilteringResult,
  setCategorySelection,
  setRecommendedBrand,
  setColorSelection,
  setPriceSelection,
  setQuery,
  applyFilters,
  resetFilters,
} = filteringSlice.actions;

export default filteringSlice.reducer;

// Helper function to fetch products with all active filters
export const fetchFilteredProducts = () => (dispatch, getState) => {
  const state = getState().filtering;

  // Only include filters that have been set
  const filters = {};
  if (state.selectedCategory.length > 0)
    filters.category = state.selectedCategory.join(",");
  if (state.recommendedBrand.length > 0)
    filters.brand = state.recommendedBrand.join(",");
  if (state.selectedColor.length > 0)
    filters.color = state.selectedColor.join(",");
  if (state.selectedPrice.length > 0)
    filters.price = state.selectedPrice.join(",");
  if (state.query) filters.q = state.query;

  console.log("Filters to apply:", filters); // Debugging line
  dispatch(fetchProducts(filters)); // Fetch products with the applied filters
};
