import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_URL, ITEM_END_POINT } from "../constants";

// State
const initialState = {
  cart: [],
  items: [],
};


// Fetching
export const fetchStoreItems = createAsyncThunk(
  "store/fetchStoreItems",
  async (_, thunkAPI) => {
    const response = await fetch(SERVER_URL + "/" + ITEM_END_POINT);
    const data = await response.json();
    return data;
  }
);

// Functions
export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    // Adding item to cart
    addItemToCart: (state, action) => {
      const itemId = action.payload;
      const storeItem = state.items.find((item) => item.id === itemId);

      if (storeItem.quantity === 0) return;

      storeItem.quantity--;

      let cartItem = state.cart.find((item) => item.id === itemId);

      if (!cartItem) {
        cartItem = { ...storeItem, quantity: 0 };
        state.cart = [...state.cart, cartItem];
      }

      cartItem.quantity++;
    },
    // Decrease cart item
    decreaseCartItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === itemId
      );
      const storeItem = state.items.find(
        (item) => item.id === itemId
      );

      existingItem.quantity--;
      storeItem.quantity++;

      if (existingItem.quantity === 0) {
        const newCartItems = state.cart.filter((cartItem) => cartItem.id !== existingItem.id);
        state.cart = newCartItems;
      }
    },
    // Delete item from cart
    deleteCartItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cart.find(
        (item) => item.id === itemId 
      );
      const storeItem = state.items.find(
        (item) => item.id === itemId 
      );
      
      storeItem.quantity += cartItem.quantity;

      const newCartItems = state.cart.filter(
        (cartItem) => cartItem.id !== itemId
      );
      
      state.cart = newCartItems;
    },
    // Checkout
    checkout: (state) => {
      state.cart = [];
    },
  },
  // Catch the fetching
  extraReducers: (builder) => {
    builder.addCase(fetchStoreItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addItemToCart, checkout, deleteCartItem, decreaseCartItem } =
  storeSlice.actions;

export default storeSlice.reducer;
