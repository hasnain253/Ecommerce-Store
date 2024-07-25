import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      console.log(action.payload);
    },
    removeProduct: (state, action) => {
      const filteredProducts = state.products.filter(
        (prd) => prd.id !== action.payload
      );
      state.products = filteredProducts;
    },
  },
});

export const { addProduct, removeProduct } = wishlistSlice.actions;
export default wishlistSlice.reducer;
