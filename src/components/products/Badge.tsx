import { BadgeProps } from "models/ComponentsModels";
import Logo from "./Logo";
import { changeColor } from "utils";

function Badge({ type, amount, action, selectedColor }: BadgeProps) {
  return (
    <div
      className={`flex items-center justify-center gap-[11.91px] h-[66px] ${changeColor[selectedColor]} rounded-[5.95px]`}
    >
      <Logo />
      <div className="w-[143.91px] flex flex-col gap-[3.97px]">
        <p className="text-[12px] text-white">This products {action}</p>
        <span className="text-[17px] text-white">
          {amount} {type === "carbon" && "kgs of"} {type}
        </span>
      </div>
    </div>
  );
}

export default Badge;
