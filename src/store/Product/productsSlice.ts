import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "controller/api";
import { ProductProps } from "models/Product";

export const productsSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productsList: [] as ProductProps[],
    error: "",
  },
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
    editProduct: (state, action) => {
      const indexOfItemInArray = state.productsList.findIndex(
        (product: ProductProps) => product.id === action.payload.id
      );
      state.productsList.splice(indexOfItemInArray, 1, action.payload);
    },
    updateProductsList: (state, action) => {
      state.productsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = action.payload.loading;
      state.productsList = action.payload.products;
      state.error = action.payload.error;
    });
  },
});

export const { setLoadingState, editProduct, updateProductsList } =
  productsSlice.actions;
export default productsSlice.reducer;
