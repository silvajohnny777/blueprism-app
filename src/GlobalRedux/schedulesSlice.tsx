import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScheduleTypes } from '../App';

interface SchedulesState {
  data: ScheduleTypes[];
  searchValue: string;
  filteredScheduleID: number | null
}

const initialState: SchedulesState = {
  data: [],
  searchValue: '',
  filteredScheduleID: null
};

const schedulesSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    setSchedules: (state, action: PayloadAction<ScheduleTypes[]>) => {
      state.data = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setScheduleID: (state, action: PayloadAction<number | null>) => {
      state.filteredScheduleID = action.payload
    }
  },
});

export const { setSchedules, setSearchValue, setScheduleID } = schedulesSlice.actions;
export default schedulesSlice.reducer;
