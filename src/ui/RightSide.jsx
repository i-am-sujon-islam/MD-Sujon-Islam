import React from "react";

const RightSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col  items-center
  justify-end gap-6"
    >
      <a href="mailto:iamsujonislam06@gmail.com">
        <p className="text-sm rotate-90 w-80 tracking-wide text-designColor/50 hover:text-designColor">
          iamsujonislam06@gmail.com
        </p>
      </a>
      <div className="w-[1px] h-32 bg-darkColor" />
    </div>
  );
};

export default RightSide;
