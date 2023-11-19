function Tooltip() {
  return (
    <div className="absolute w-[248px] h-[162px] bg-[#FFFFFF] rounded-[4px] drop-shadow-card ease-in-out duration-300 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
      <div className="py-[24px] px-[16px] flex flex-col items-center gap-3">
        <p className="text-[14px] text-[#212121] leading-[17.01px] text-center">
          This widget links directly to your public profile so that you can
          easily share your impact with your customers. Turn it off here if you
          do not want the badge to link to it.
        </p>
        <span className="text-[14px] text-[#3B755F] leading-[17.01px]">
          View Public Profile
        </span>
      </div>
    </div>
  );
}

export default Tooltip;
