import ProductCard from "components/products/ProductCard";
import Skeleton from "components/products/Skeleton";
import { getProduct } from "controller/api";
import { ProductProps } from "models/Product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingState } from "store/Product/productsSlice";
import { productSelector } from "store/Product/selector";

function Products() {
  const product = useSelector(productSelector);
  const { loading, products, error } = product;

  useEffect(() => {}, [products]);

  return (
    <div className="w-[331px] bg-[#F9F9F9] rounded-[8px] drop-shadow-card lg:w-[851px] lg:h-[419px]">
      <div className="p-[36px]">
        <h3 className="text-[30px] text-[#212121]">Per product widgets</h3>
        <div className="pb-[20px]">
          <div className="border-[#B0B0B0] border-[2px] w-full"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[24px]">
          {products.length > 0
            ? products.map((product: ProductProps) => {
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
