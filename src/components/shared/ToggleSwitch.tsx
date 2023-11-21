import { ToggleSwitchProps } from "models/ComponentsModels";

function ToggleSwitch({
  id,
  active,
  onChangeFunction: onChangeFunction,
}: ToggleSwitchProps) {
  return (
    <div className="relative w-[40.11px] h-[20.05px] inline-block group">
      <input
        data-testid={`switch-${id}`}
        type="radio"
        className="opacity-0 cursor-pointer w-full h-full z-10 relative"
        checked={active}
        onChange={() => onChangeFunction()}
      ></input>
      <span className="absolute top-0 bottom-0 right-0 left-0 rounded-[29.49px] border-[0.59px] border-[#AFC6BD] bg-[#F9F9F9] shadow-[inset_0_0.884669303894043px_5.897795677185059px_0px_rgba(0,0,0,0.15)] duration-300 ">
        <span className="z-[9] absolute flex justify-center items-center w-[20.05px] h-[20.05px] rounded-[29.49px] bg-[#F9F9F9] border-[#F2EBDB] border-[0.59px] top-[-0.5px] duration-300"></span>
        <span className="absolute w-[34.41px] h-[34.41px] rounded-[29.49px] bg-[#AFC6BD] top-[-36%] left-[-19%] opacity-0 z-[8] duration-300 group-hover:opacity-50"></span>
      </span>
    </div>
  );
}

export default ToggleSwitch;
