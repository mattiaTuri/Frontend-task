import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "controller/api";
import { ProductProps } from "models/Product";

export const productsSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [] as ProductProps[],
    error: "",
  },
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = action.payload.loading;
      state.products = action.payload.products;
      state.error = action.payload.error;
    });
  },
});

export const { setLoadingState } = productsSlice.actions;
export default productsSlice.reducer;
