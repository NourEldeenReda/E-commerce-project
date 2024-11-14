import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a CartItem
interface CartItem {
  id: string;
  quantity: number;
  // You can add other product-related fields here, such as name, price, etc.
}

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = (): CartItem[] => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

// Helper function to save cart to localStorage
const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Define the initial state type
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: loadCartFromLocalStorage(), // Load cart from localStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      saveCartToLocalStorage(state.items); // Save updated cart to localStorage
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      saveCartToLocalStorage(state.items); // Save updated cart to localStorage
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items); // Save updated cart to localStorage
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.quantity = Math.max(quantity, 1);
      }
      saveCartToLocalStorage(state.items); // Save updated cart to localStorage
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, setCart } =
  cartSlice.actions;
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export default cartSlice.reducer;
