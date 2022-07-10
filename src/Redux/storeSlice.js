import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SERVER_URL, ITEM_END_POINT } from "../constants";

const initialState = {
  cart: [],
  items: [],
};

export const fetchStoreItems = createAsyncThunk(
  "store/fetchStoreItems",
  async (_, thunkAPI) => {
    const response = await fetch(SERVER_URL + "/" + ITEM_END_POINT);
    const data = await response.json();
    return data;
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
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
    checkout: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStoreItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addItemToCart, checkout } = storeSlice.actions;

export default storeSlice.reducer;
