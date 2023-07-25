import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../GlobalRedux/store';
import { ScheduleTypes } from '../../App';
import { setSearchValue } from '../../GlobalRedux/schedulesSlice'; 
import ScheduleItem from '../ScheduleItem';
import ScheduleItemLoader from '../ScheduleItemLoader';

const Schedules: React.FC = () => {
  const dispatch = useDispatch();
  const schedules = useSelector((state: RootState) => state.schedules.data);
  const isLoading = useSelector((state: RootState) => state.schedules.isLoadingSchedules);
  const hadAnAPIError = useSelector((state: RootState) => state.schedules.scheduleError);
  const scheduleSearch = useSelector((state: RootState) => state.schedules.searchValue);

  const filteredSchedules = scheduleSearch.length > 0 ? 
    schedules.filter((schedule: ScheduleTypes) => schedule.name.toLowerCase().includes(scheduleSearch.toLowerCase()) || schedule.description.toLowerCase().includes(scheduleSearch.toLowerCase()))
    : 
    schedules;

  return (
    <div className={`md:h-[calc(100vh-100px)] mb-[15px] md:mb-[0px] overflow-auto sticky top-[100px] p-[10px] pl-0`}>
      <div className="relative">
          <div className="absolute top-3 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            className='shadow appearance-none border rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[15px] pl-[40px] w-[335px]'
            type="text"
            placeholder="Search a schedule"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value))}
            value={scheduleSearch}
          />
      </div>
      <div className="block flex overflow-auto md:flex-col">
      {
        isLoading ?
          <React.Fragment>
            <ScheduleItemLoader />
            <ScheduleItemLoader />
            <ScheduleItemLoader />
          </React.Fragment>          
        :
          hadAnAPIError ?
            hadAnAPIError
          :
            filteredSchedules.length > 0 ? 
              filteredSchedules.map((schedule: ScheduleTypes) => (        
                <ScheduleItem key={schedule.id} schedule={schedule} />
              ))
            :
              scheduleSearch.length > 0 ?
                <p className="break-words">Schedule <span className="font-bold">{scheduleSearch}</span> not found!</p>
            :
              'No schedules'
      }
      </div>
    </div>
  );
};

export default Schedules;
