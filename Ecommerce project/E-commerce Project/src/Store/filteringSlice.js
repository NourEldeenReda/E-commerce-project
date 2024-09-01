import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data;
  }
);

const filteringSlice = createSlice({
  name: "filtering",
  initialState: {
    products: [],
    filteredProducts: [],
    selectedCategory: [], // Used for Category.jsx
    pendingSelectedCategory: [], // For Sidebar.jsx
    recommendedBrand: [], // For Recommended.jsx
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
      state.filteredProducts = filterProducts(
        state.products,
        state.selectedCategory,
        state.query
      );
    },
    resetFilters: (state) => {
      state.pendingSelectedCategory = [];
      state.selectedCategory = [];
      state.recommendedBrand = [];
      state.query = "";
      state.filteredProducts = state.products; // Reset to all products
    },
    setCategorySelection: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = filterProducts(
        state.products,
        state.selectedCategory,
        state.query
      );
    },
    setRecommendedBrand: (state, action) => {
      state.recommendedBrand = action.payload;
      state.filteredProducts = filterProducts(
        state.products,
        state.recommendedBrand,
        state.query
      );
    },
    setQuery: (state, action) => {
      state.query = action.payload;
      state.filteredProducts = filterProducts(
        state.products,
        state.selectedCategory,
        state.query
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Utility function for filtering products
const filterProducts = (products, selectedCategories, query) => {
  let filteredProducts = products;

  if (query) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.some((selected) => {
        if (selected === "") {
          return true;
        } else if (parseInt(selected)) {
          return product.price == selected;
        } else {
          return (
            product.category === selected ||
            product.color === selected ||
            product.brand === selected ||
            product.title === selected
          );
        }
      })
    );
  }

  return filteredProducts;
};

export const {
  setFilteringResult,
  setCategorySelection,
  setRecommendedBrand,
  setQuery,
  applyFilters,
  resetFilters,
} = filteringSlice.actions;

export default filteringSlice.reducer;
