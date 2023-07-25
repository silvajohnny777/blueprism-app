import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const initialState = {
  scheduleLogs: {
    searchLogValue: '',
    data: [
      {
          endTime: "2021-09-12T14:40:48.295Z",
          id: 73796483,
          scheduleId: 9051957,
          serverName: "nostrud eiusmod minim enim voluptate",
          startTime: "2021-06-01T17:29:50.333Z",
          status: "Exception"
      },
      {
          endTime: "2022-09-12T14:40:48.295Z",
          id: 73796484,
          scheduleId: 9051947,
          serverName: "nostrud dsmfdfskg sdgdfg",
          startTime: "2022-06-01T17:29:50.333Z",
          status: "Completed"
      },
  ],
},
schedules: {
  data: [
      {
          dayOfMonth: 19,
          dayOfWeek: 2,
          description: "laborum nisi esse in",
          endDate: "2021-11-03T18:42:50.597Z",
          endPoint: "2021-08-19T01:09:21.249Z",
          id: 9051957,
          intervalType: "Once",
          isRetired: false,
          name: "Random Schedule Name (0.16314219073840341)",
          startDate: "2021-09-23T16:36:05.354Z",
          startPoint: "2021-06-05T21:11:29.519Z",
          tasksCount: 4,
          timePeriod: 25,
      },
      {
          dayOfMonth: 26,
          dayOfWeek: 1,
          description: "nostrud nisi esse in",
          endDate: "2021-11-12T13:28:01.629Z",
          endPoint: "2021-05-24T22:44:00.134Z",
          id: 79259970,
          intervalType: "Month",
          isRetired: true,
          name: "Random Schedule Name (0.5022912048619506)",
          startDate: "2021-08-03T12:03:28.368Z",
          startPoint: "2021-06-17T11:04:39.256Z",
          tasksCount: 6,
          timePeriod: 10,
      },
    ],
    filteredScheduleID: 9051957,
    searchValue: '0.1631'
  },
};
export const store = mockStore(initialState);