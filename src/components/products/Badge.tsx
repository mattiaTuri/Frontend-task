import { BadgeProps } from "models/ComponentsModels";
import Logo from "./Logo";
import { changeColor } from "utils";

function Badge({ id, type, amount, action, selectedColor }: BadgeProps) {
  return (
    <div
      data-testid={`badge-${id}`}
      data-color={changeColor[selectedColor]}
      className={`flex items-center justify-center gap-[11.91px] h-[66px] ${changeColor[selectedColor]} rounded-[5.95px] drop-shadow-[0px_4px_4px_rgba(#00000003)]`}
    >
      <Logo />
      <div className="w-[143.91px] flex flex-col gap-[3.97px]">
        <p className="text-[12px] text-white leading-[15.07px]">
          This products {action}
        </p>
        <span className="text-[17px] text-white leading-[21.71px]">
          {amount} {type === "carbon" && "kgs of"} {type}
        </span>
      </div>
    </div>
  );
}

export default Badge;
