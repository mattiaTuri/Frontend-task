import { Colors, ProductProps } from "models/Product";
import Badge from "./Badge";
import InfoIcon from "./InfoIcon";
import Tooltip from "components/shared/Tooltip";
import ToggleSwitch from "components/shared/ToggleSwitch";
import CheckBox from "components/shared/CheckBox";
import { allColors, changeColor } from "utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "store/Product/selector";
import { editProduct, updateProductsList } from "store/Product/productsSlice";
import {
  applyBorderToSelectedColor,
  selectColor,
  updateSwitchState,
} from "./functions/Functions";

function ProductCard({ product }: { product: ProductProps }) {
  const { id, type, amount, action, active, linked, selectedColor } = product;
  const productsObj = useSelector(productSelector);
  const dispatch = useDispatch();
  const { productsList } = productsObj;

  useEffect(() => {
    const color: string = changeColor[selectedColor];
    document.querySelector<HTMLElement>(
      `#badgeColoursGroup-${id} > .${color}`
    )!.style.border = "1.5px solid #B0B0B0";
  }, []);

  const changeBadgeColor = (
    e: React.MouseEvent<HTMLElement>,
    color: string
  ) => {
    const newColor: Colors = selectColor(color);
    dispatch(editProduct({ ...product, selectedColor: newColor }));
    applyBorderToSelectedColor(id, e);
  };

  const changeCheckboxState = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    let checkbox = e.target as HTMLInputElement;
    dispatch(editProduct({ ...product, linked: checkbox.checked }));
  };

  const changeToggleSwitchState = () => {
    const newProductsList: ProductProps[] = updateSwitchState(productsList, id);

    dispatch(updateProductsList(newProductsList));
  };

  return (
    <div id={id.toString()} className="w-[221px] flex flex-col gap-[10px]">
      <Badge
        id={id}
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
        <CheckBox linked={linked} onClickFunction={changeCheckboxState} />
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] text-[#3B755F] leading-[17.01px]">
          Badge colour
        </p>
        <div
          id={`badgeColoursGroup-${id}`}
          data-testid={`badgeColoursGroup-${id}`}
          className="flex gap-1"
        >
          {allColors().map((color: string, index: number) => (
            <div
              key={index}
              data-color={color}
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
        <ToggleSwitch
          id={id}
          active={active}
          onChangeFunction={changeToggleSwitchState}
        />
      </div>
    </div>
  );
}

export default ProductCard;
