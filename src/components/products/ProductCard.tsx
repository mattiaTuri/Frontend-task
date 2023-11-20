import { Colors, ProductProps } from "models/Product";
import Badge from "./Badge";
import InfoIcon from "./InfoIcon";
import Tooltip from "components/shared/Tooltip";
import ToggleSwitch from "components/shared/ToggleSwitch";
import CheckBox from "components/shared/CheckBox";
import { allColors, changeColor } from "utils";
import { useEffect, useState } from "react";

function ProductCard({ product }: { product: ProductProps }) {
  const { id, type, amount, action, active, linked, selectedColor } = product;
  const [color, setColor] = useState<Colors>(selectedColor);

  useEffect(() => {
    const col = changeColor[selectedColor];
    document.querySelector<HTMLElement>(
      `#badgeColoursGroup-${id} > #${col}`
    )!.style.border = "1.5px solid #B0B0B0";
  }, []);

  const changeBadgeColor = (e: any, color: string) => {
    const colorSplitted = color.split("-");
    const col = colorSplitted[1] as Colors;
    setColor(col);
    const p = document.querySelectorAll<HTMLElement>(
      `#badgeColoursGroup-${id} > div`
    );
    document
      .querySelectorAll<HTMLElement>(`#badgeColoursGroup-${id} > div`)
      .forEach((elem: HTMLElement) => {
        elem.style.border = "0px";
      });

    e.target.style.border = "1.5px solid #B0B0B0";
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
        <div id={`badgeColoursGroup-${id}`} className="flex gap-1">
          {allColors().map((color: string, index: number) => (
            <div
              key={index}
              id={color}
              className={`w-[16px] h-[16px] ${color} hover:opacity-80`}
              onClick={(e) => changeBadgeColor(e, color)}
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
