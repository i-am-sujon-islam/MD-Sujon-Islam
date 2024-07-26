import React from "react";
import SocialLInks from "./SocialLInks";
// import SocialLInks from "./SocialLInks";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col  items-center justify-end gap-4 text-lightText">
      <SocialLInks />

      <div className="w-[1px] h-32 bg-darkColor" />
    </div>
  );
};

export default LeftSide;
