function CheckBox({ linked }: { linked: boolean }) {
  return (
    <input
      id="linked-checkbox"
      type="checkbox"
      className="w-[18px] h-[18px]"
      defaultChecked={linked}
    ></input>
  );
}

export default CheckBox;
