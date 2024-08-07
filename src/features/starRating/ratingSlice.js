import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ratingSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      const filteredProducts = state.products.filter(
        (prd) => prd.id !== action.payload
      );
      state.products = filteredProducts;
    },
    updateRating: (state, action) => {
      const { productId, rating } = action.payload;
      const product = state.products.find((prd) => prd.id === productId);
      if (product) {
        product.rating = rating;
      }
    },
  },
});

export const { addProduct, removeProduct, updateRating } = ratingSlice.actions;
export default ratingSlice.reducer;
