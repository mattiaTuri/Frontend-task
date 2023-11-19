import ProductCard from "components/products/ProductCard";
import { productsWidget } from "date/Date";
import { ProductWidgetProps } from "models/ProductWidget";

function Products() {
  return (
    <div className="w-[331px] bg-[#F9F9F9] rounded-[8px] drop-shadow-card lg:w-[851px] lg:h-[419px]">
      <div className="p-[36px]">
        <h3 className="text-[30px] text-[#212121]">Per product widgets</h3>
        <div className="pb-[20px]">
          <div className="border-[#B0B0B0] border-[2px] w-full"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[24px]">
          {productsWidget.map((product: ProductWidgetProps) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
