import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScheduleLogTypes } from '../App';

interface ScheduleLogsState {
  data: ScheduleLogTypes[];
  searchLogValue: string
  isLoadingLogsSchedules: boolean
  scheduleLogsError: string
}

const initialState: ScheduleLogsState = {
  data: [],
  searchLogValue: '',
  isLoadingLogsSchedules: false,
  scheduleLogsError: ''
};

const scheduleLogsSlice = createSlice({
  name: 'scheduleLogs',
  initialState,
  reducers: {
    setScheduleLogs: (state, action: PayloadAction<ScheduleLogTypes[]>) => {
      state.data = action.payload;
    },
    setIsLoadingLogsSchedules: (state, action: PayloadAction<boolean>) => {
      state.isLoadingLogsSchedules = action.payload;
    },
    setSearchLogValue: (state, action: PayloadAction<string>) => {
      state.searchLogValue = action.payload;
    },
    setScheduleLogsError: (state, action: PayloadAction<string>) => {
      state.scheduleLogsError = action.payload;
    },
  },
});

export const { setScheduleLogs, setIsLoadingLogsSchedules, setSearchLogValue, setScheduleLogsError } = scheduleLogsSlice.actions;
export default scheduleLogsSlice.reducer;
