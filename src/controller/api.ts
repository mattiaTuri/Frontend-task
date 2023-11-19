import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductProps } from "models/Product";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await axios.get<ProductProps[]>(
      "https://api.mocki.io/v2/016d11e8/product-widgets"
    );
    const product: ProductProps[] = response.data;
    return { loading: false, products: product, error: "" };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { loading: false, products: [], error: error.message };
    }
    return { loading: false, products: [], error: (error as Error).message };
  }
});
