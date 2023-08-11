import { configureStore } from "@reduxjs/toolkit";
import schedulesReducer from "./schedulesSlice";
import scheduleLogsReducer from "./scheduleLogsSlice";

const store = configureStore({
  reducer: {
    schedules: schedulesReducer,
    scheduleLogs: scheduleLogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
