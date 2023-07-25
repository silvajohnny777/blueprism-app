import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSchedules } from './GlobalRedux/schedulesSlice';
import { setScheduleLogs } from './GlobalRedux/scheduleLogsSlice'
import Header from './components/Header';
import Schedules from './components/Schedules';
import Main from './components/Main';

export interface ScheduleLogTypes {
  endTime: string
  id: number
  scheduleId: number
  serverName: string
  startTime: string
  status: string
}

export interface ScheduleTypes {
  dayOfMonth: number
  dayOfWeek: number
  description: string
  endDate: string
  endPoint: string
  id: number
  intervalType: string
  isRetired: boolean
  name: string
  startDate: string
  startPoint: string
  tasksCount: number
  timePeriod: number
}

const App:React.FC = () => {

  const dispatch = useDispatch();

    const getSchedules = async () => {
      try {
        const response = await axios.get<ScheduleTypes[]>('http://localhost:3000/schedules');
        if (response.status === 200) {
          dispatch(setSchedules(response.data));
        } else {
          alert('API Error');
        }
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };
  
    const getScheduleLogs = async () => {
      try {
        const response = await axios.get<ScheduleLogTypes[]>('http://localhost:3000/scheduleLogs');
        if (response.status === 200) {
          dispatch(setScheduleLogs(response.data));
        } else {
          alert('API Error');
        }
      } catch (error) {
        console.error('Error fetching schedule logs:', error);
      }
    };

  useEffect(() => {
    getSchedules()
    getScheduleLogs()    
  }, [])

  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto max-h-screen mt-[20px] flex flex-col md:flex-row items-center">
        <div className="w-[90%] md:w-[350px]">
          <Schedules />
        </div>          
        <div className="w-[90%] md:w-[100%]">
          <Main />
        </div>          
      </div>
    </React.Fragment>
  )
}

export default App
