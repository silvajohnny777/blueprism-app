import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScheduleLogTypes } from '../App';

interface ScheduleLogsState {
  data: ScheduleLogTypes[];
  searchLogValue: string
}

const initialState: ScheduleLogsState = {
  data: [],
  searchLogValue: ''
};

const scheduleLogsSlice = createSlice({
  name: 'scheduleLogs',
  initialState,
  reducers: {
    setScheduleLogs: (state, action: PayloadAction<ScheduleLogTypes[]>) => {
      state.data = action.payload;
    },
    setSearchLogValue: (state, action: PayloadAction<string>) => {
      state.searchLogValue = action.payload;
    },
  },
});

export const { setScheduleLogs, setSearchLogValue } = scheduleLogsSlice.actions;
export default scheduleLogsSlice.reducer;
