import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operations";
import { ProductState } from "../types";
const initialState: ProductState = {
  items: [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || null;
      });
  },
});

export default slice.reducer;
