import { CheckboxProps } from "models/ComponentsModels";

function CheckBox({ linked, onClickFunction }: CheckboxProps) {
  return (
    <input
      id="linked-checkbox"
      type="checkbox"
      className="w-[18px] h-[18px]"
      defaultChecked={linked}
      onClick={(e) => onClickFunction(e)}
    ></input>
  );
}

export default CheckBox;
