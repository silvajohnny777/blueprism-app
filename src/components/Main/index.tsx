import { useDispatch, useSelector } from 'react-redux';
import { ScheduleLogTypes, ScheduleTypes } from '../../App'
import React from 'react'
import { RootState } from '../../GlobalRedux/store';
import ScheduleLogItem from '../ScheduleLogItem';
import { setSearchLogValue } from '../../GlobalRedux/scheduleLogsSlice'
import ScheduleLogItemLoader from '../ScheduleLogItemLoader';

const Main: React.FC = () => {

    const dispatch = useDispatch()
    const logSearch = useSelector((state: RootState) => state.scheduleLogs.searchLogValue);

    const schedulesLogs = useSelector((state: RootState) => state.scheduleLogs.data);
    const isLoading = useSelector((state: RootState) => state.scheduleLogs.isLoadingLogsSchedules);
    const hadAnAPIError = useSelector((state: RootState) => state.scheduleLogs.scheduleLogsError);
    const schedules = useSelector((state: RootState) => state.schedules.data);
    const filteredScheduleID = useSelector((state: RootState) => state.schedules.filteredScheduleID);

    const retiredIDs = schedules.filter((schedule: ScheduleTypes) => schedule.isRetired);

    const filteredSchedulesLogs = filteredScheduleID ? 
        schedulesLogs.filter((log: ScheduleLogTypes) => log.scheduleId === filteredScheduleID)
    : 
    
        schedulesLogs.filter((log: ScheduleLogTypes) => {
            const scheduleMatchID = retiredIDs.findIndex((retired: ScheduleTypes) => retired.id === log.scheduleId);
            const isRetired = retiredIDs[scheduleMatchID]?.isRetired;
            return (
                (log.serverName.toLowerCase().includes(logSearch.toLowerCase()) ||
                log.status.toLowerCase().includes(logSearch.toLowerCase())) &&
                (!isRetired || filteredScheduleID === log.scheduleId)
            );
        });

    return (

        <div className="h-[calc(100vh-100px)] overflow-auto p-[10px] w-[100%]">
            <h2 className="text-[20px] font-bold mb-[25px]">
                {isLoading ? 'Getting logs...' : filteredSchedulesLogs.length > 0 ? `${filteredSchedulesLogs.length} logs being shown ${filteredScheduleID ? `for schedule ${filteredScheduleID}` : ''}` : filteredScheduleID ? `` : `No logs were found!`}</h2>
            {
                !filteredScheduleID &&
                    <div className="relative w-[300px]">
                        <div className="absolute top-3 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input
                            className='shadow appearance-none border rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[15px] pl-[40px]'
                            type="text"
                            placeholder="Search a log by server and status"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchLogValue(e.target.value))}
                            value={logSearch}
                        />
                    </div>
            }
            <div className="flex flex-wrap group justify-between h-fit-content">
                {   
                    isLoading ? 
                        <React.Fragment>
                            <ScheduleLogItemLoader />
                            <ScheduleLogItemLoader />
                            <ScheduleLogItemLoader />
                        </React.Fragment>                
                    :
                        hadAnAPIError ?
                            hadAnAPIError
                        :
                            filteredSchedulesLogs.map((log: ScheduleLogTypes) => {
                                const scheduleMatchID = retiredIDs.findIndex((retired: ScheduleTypes) => retired.id === log.scheduleId)
                                    return (
                                        <ScheduleLogItem key={log.id} log={log} isRetired={retiredIDs[scheduleMatchID]?.isRetired} />
                                    )
                                
                            })
                }
            </div>
        </div>

    )

}

export default Main