import React from "react";
import { ScheduleLogTypes } from "../../App";

interface ScheduleLogItemTypes {
  log: ScheduleLogTypes;
  isRetired: boolean;
}

const ScheduleLogItem: React.FC<ScheduleLogItemTypes> = ({
  log,
  isRetired,
}) => {
  const { serverName, id, scheduleId, startTime, endTime, status } = log;

  const startDate = new Date(`${startTime}`);
  const startDateFormatted = new Intl.DateTimeFormat(["pt"]).format(startDate);

  const endDate = new Date(`${endTime}`);
  const endDateFormatted = new Intl.DateTimeFormat(["pt"]).format(endDate);

  const milliPerDay = 86400000;

  const timeDifference = Math.abs(
    new Date(endDate).getTime() - new Date(startDate).getTime()
  );
  const daysDifference = Math.ceil(timeDifference / milliPerDay);

  return (
    <div
      key={id}
      className={`relative group-hover:opacity-60 group-hover:scale-98 transition-opacity transition-transform opacity-1 rounded-[6px] border-[1px] w-[100%] md:w-[33%] border-[#e5e7eb] border-solid p-[15px] mb-[15px] shadow-lg break-words h-fit-content ${
        isRetired ? " opacity-[0.5]" : ""
      }`}
    >
      <h3>
        <span className="font-bold">Server:</span> {serverName}
      </h3>
      {isRetired && (
        <p className="absolute italic text-[12px] right-5 bottom-5 font-bold flex items-center">
          <span>Achieved</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </p>
      )}
      <p>
        <span className="font-bold">ID:</span> {id}
      </p>
      <p>
        <span className="font-bold">Schedule:</span> {scheduleId}
      </p>
      <p>
        <span className="font-bold">Start:</span> {startDateFormatted}
      </p>
      <p>
        <span className="font-bold">End:</span> {endDateFormatted}{" "}
        <span className="font-bold">{`(${daysDifference} days)`}</span>
      </p>
      <p>
        <span className="font-bold">Status:</span> {status}
      </p>
    </div>
  );
};

export default ScheduleLogItem;
