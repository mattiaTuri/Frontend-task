import axios from "axios";
import { ProductWidgetProps } from "models/ProductWidget";

export const getProductsWidget = async () => {
  try {
    const response = await axios.get<ProductWidgetProps[]>(
      "https://api.mocki.io/v2/016d11e8/product-widgets"
    );
    const product: ProductWidgetProps[] = response.data;
    return { loading: false, products: product, error: "" };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { loading: false, products: [], error: error.message };
    }
    return { loading: false, products: [], error: (error as Error).message };
  }
};
