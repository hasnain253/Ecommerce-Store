import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../axios";
import Loader from "../../components/commonComponents/Loader";

const initialState = {
  products: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk("products/get", async () => {
  const response = await get("/products");
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
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
