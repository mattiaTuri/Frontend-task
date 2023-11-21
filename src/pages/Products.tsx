import ProductCard from "components/products/ProductCard";
import Skeleton from "components/products/Skeleton";
import { ProductProps } from "models/Product";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { productSelector } from "store/Product/selector";

function Products() {
  const product = useSelector(productSelector);
  const { loading, productsList, error } = product;

  useEffect(() => {}, [productsList]);

  return (
    <div className="w-[331px] bg-[#F9F9F9] rounded-[8px] drop-shadow-card lg:w-[851px] lg:h-[419px]">
      <div className="p-[36px]">
        <h3 className="text-[30px] text-[#212121] leading-[36px] pb-[12px]">
          Per product widgets
        </h3>
        <div className="pb-[20px]">
          <div className="border-[#B0B0B0] border-[2px] w-full"></div>
        </div>
        <div
          data-testid="container-products"
          className="flex flex-col lg:flex-row lg:justify-between items-center gap-[24px]"
        >
          {productsList.length > 0
            ? productsList.map((product: ProductProps) => {
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
