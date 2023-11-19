import { Colors, ProductProps } from "models/Product";
import Badge from "./Badge";
import InfoIcon from "./InfoIcon";
import Tooltip from "components/shared/Tooltip";
import ToggleSwitch from "components/shared/ToggleSwitch";
import CheckBox from "components/shared/CheckBox";
import { allColors, changeColor } from "utils";
import { useState } from "react";

function ProductCard({ product }: { product: ProductProps }) {
  const { id, type, amount, action, active, linked, selectedColor } = product;
  const [color, setColor] = useState<Colors>(selectedColor);

  const changeBadgeColor = (color: string) => {
    const colorSplitted = color.split("-");
    const col = colorSplitted[1] as Colors;
    setColor(col);
  };

  return (
    <div className="w-[221px] flex flex-col gap-[10px]">
      <Badge
        type={type}
        amount={amount}
        action={action}
        selectedColor={color}
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
              onClick={() => changeBadgeColor(color)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-[#3B755F] leading-[17.01px]">
          Activate badge
        </p>
        <ToggleSwitch id={id} active={active} />
      </div>
    </div>
  );
}

export default ProductCard;
