import React from "react";

const ScheduleItemLoader: React.FC = () => {
  return (
    <div className="animate-pulse relative p-[5px]  w-full rounded-[10px] mb-[15px] border-solid border-2 flex mr-[5px] md:mr-0 cursor-pointer hover:bg-[#ebf3f3] transition ease duration-200 h-[83px]">
      <div className="w-[300px] flex flex-col justify-around">
        <div className="h-2 bg-slate-200 rounded" />
        <div className="h-2 bg-slate-200 rounded" />
        <div className="h-2 bg-slate-200 rounded" />
      </div>
    </div>
  );
};

export default ScheduleItemLoader;
