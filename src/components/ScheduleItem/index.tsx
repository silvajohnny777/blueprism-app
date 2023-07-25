import React, { useState } from 'react'
import { ScheduleTypes } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { setScheduleID } from '../../GlobalRedux/schedulesSlice'
import { setSchedules } from '../../GlobalRedux/schedulesSlice'
import { RootState } from '../../GlobalRedux/store';
import axios from 'axios';

interface ScheduleItemTypes {
    schedule: ScheduleTypes
}

const ScheduleItem:React.FC<ScheduleItemTypes> = ({ schedule }) => {

    const { id, name, description, isRetired } = schedule
    const [ loading, setLoading ] = useState<boolean>(false)

    const filteredScheduleID = useSelector((state: RootState) => state.schedules.filteredScheduleID);
    const schedules = useSelector((state: RootState) => state.schedules.data);

    const dispatch = useDispatch()

    const handleClick = (e: React.MouseEvent<HTMLElement>, id: number) => {

        e.stopPropagation()

        filteredScheduleID === id ? dispatch(setScheduleID(null)) : dispatch(setScheduleID(id))

    }

    const handleClickRetire = async (e: React.MouseEvent<HTMLElement>, id: number) => {

        e.stopPropagation()
        setLoading(true)

        const scheduleHandler = {...schedule}
        const schedulesArrayHandler = [...schedules]
        scheduleHandler.isRetired = !scheduleHandler.isRetired
        
        await axios.put(`http://localhost:3000/schedules/${id}`, scheduleHandler)
        setLoading(false)
        const position = schedulesArrayHandler.findIndex((schedule: ScheduleTypes) => schedule.id === id)
        schedulesArrayHandler[position] = scheduleHandler
        dispatch(setSchedules(schedulesArrayHandler));

    }

    return (
        <div 
            key={id} 
            onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e, id)} 
            className={`relative p-[5px] ${filteredScheduleID === id ? 'border-[#0f7dc2]' : ''} w-full rounded-[10px] mb-[15px] border-solid border-2 flex mr-[5px] md:mr-0 cursor-pointer hover:bg-[#ebf3f3] transition ease duration-200 ${filteredScheduleID === id ? 'bg-[#ebf3f3]' : ''}`}
        >
          <div className="w-[300px]">
                <h2 className="overflow-hidden font-bold text-[16px]">{name}</h2>
                <p className="text-[14px] text-slate-400">{description}</p>
                {isRetired && 
                    (<p className={`italic text-[12px] ${filteredScheduleID !== id ? 'text-slate-400' : 'font-bold'}`}>
                        {filteredScheduleID !== id ? 'No logs are being shown for this schedule' : 'Showing achieved logs'}
                    </p>)
                }
          </div>
          <button 
              className={`z-10 bg-[#ffffff] button absolute bottom-[5px] right-[5px] border-2 border-solid px-[5px] py-[2px] w-[80px] rounded-full ${loading ? 'pointer-events-none' : ''}`} 
              onClick={(e: React.MouseEvent<HTMLElement>) => handleClickRetire(e, id)}
          >{loading ? 'Loading...' : isRetired ? 'Unretire' : 'Retire'}</button>
        </div>
    )

}

export default ScheduleItem;