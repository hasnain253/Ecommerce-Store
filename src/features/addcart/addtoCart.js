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
    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeCart, incrementQuantity, decrementQuantity } =
  addtoCartSlice.actions;

export default addtoCartSlice.reducer;
