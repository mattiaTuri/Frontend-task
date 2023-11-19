import ProductCard from "components/products/ProductCard";
import Skeleton from "components/products/Skeleton";
import { getProductsWidget } from "controller/api";
import { ProductProps, ProductWidgetProps } from "models/ProductWidget";
import { useEffect, useState } from "react";

function Products() {
  const [productsWidget, setProductsWidget] = useState<ProductProps>({
    loading: false,
    products: [],
    error: "",
  });

  const { loading, products, error } = productsWidget;

  useEffect(() => {
    const apiCall = async () => {
      setProductsWidget((oldProducts) => ({
        ...oldProducts,
        loading: true,
        error: "",
      }));
      const product: ProductProps = await getProductsWidget();
      setProductsWidget(product);
    };

    apiCall();
  }, []);

  return (
    <div className="w-[331px] bg-[#F9F9F9] rounded-[8px] drop-shadow-card lg:w-[851px] lg:h-[419px]">
      <div className="p-[36px]">
        <h3 className="text-[30px] text-[#212121]">Per product widgets</h3>
        <div className="pb-[20px]">
          <div className="border-[#B0B0B0] border-[2px] w-full"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[24px]">
          {products.length > 0
            ? products.map((product: ProductWidgetProps) => {
                return <ProductCard key={product.id} product={product} />;
              })
            : null}
          {loading && (
            <div className="flex flex-col gap-[24px] lg:flex-row lg:justify-between w-full items-center">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Products;
