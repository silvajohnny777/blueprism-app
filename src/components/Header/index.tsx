import React from "react";

const Header: React.FC = () => {
  return (
    <div className="drop-shadow-sm bg-[#0f7dc2] text-white">
      <div className="container flex justify-between items-center h-[80px] mx-auto max-h-screen w-[90%] md:w-[100%]">
        <h1 className="text-[29px] font-bold">Schedules</h1>
      </div>
    </div>
  );
};

export default Header;
