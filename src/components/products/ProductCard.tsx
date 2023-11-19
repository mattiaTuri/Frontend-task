import { ProductWidgetProps } from "models/ProductWidget";
import Badge from "./Badge";
import InfoIcon from "./InfoIcon";
import Tooltip from "components/shared/Tooltip";
import ToggleSwitch from "components/shared/ToggleSwitch";
import CheckBox from "components/shared/CheckBox";
import { allColors, changeColor } from "utils";

function ProductCard({ product }: { product: ProductWidgetProps }) {
  const { id, type, amount, action, active, linked, selectedColor } = product;
  return (
    <div className="w-[221px] flex flex-col gap-[10px]">
      <Badge
        type={type}
        amount={amount}
        action={action}
        selectedColor={selectedColor}
      />
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-[14px] text-[#3B755F] leading-[17.01px]">
            Link to Public Profile
          </p>
          <div className="relative group">
            <InfoIcon />
            <Tooltip />
          </div>
        </div>
        <CheckBox linked={linked} />
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-[#3B755F] leading-[17.01px]">
          Badge colour
        </p>
        <div className="flex gap-1">
          {allColors().map((color: string, index: number) => (
            <div
              key={index}
              className={`w-[16px] h-[16px] ${color} hover:opacity-80`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-[#3B755F] leading-[17.01px]">
          Activate badge
        </p>
        <ToggleSwitch active={active} />
      </div>
    </div>
  );
}

export default ProductCard;
