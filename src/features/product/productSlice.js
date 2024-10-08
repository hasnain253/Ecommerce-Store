import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../axios";

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk("products/get", async () => {
  const response = await get("/products");
  console.log(response);
  return response;
});

export const productSlice = createSlice({
  name: "products",
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
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
