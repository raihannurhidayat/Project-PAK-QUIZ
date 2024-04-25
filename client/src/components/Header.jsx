import React from "react";

const Header = ({ display }) => {
  return (
    <div className="bg-[#435866] w-full flex items-center px-[73px] py-[9px] text-english-lavender h-[88px]">
      {display !== "start" && <div className="text-[55px]">Quiz App</div>}
    </div>
  );
};

export default Header;
