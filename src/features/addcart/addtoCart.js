import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const addtoCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeCart } = addtoCartSlice.actions;

export default addtoCartSlice.reducer;
