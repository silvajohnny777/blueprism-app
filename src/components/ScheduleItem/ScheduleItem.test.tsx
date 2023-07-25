import { render, screen } from '@testing-library/react';
import ScheduleItem from './index';
import { Provider } from 'react-redux';
import { store } from '../../mock/ReduxMock';

const scheduleMock = {
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
};

const scheduleMockUnretired = {
    dayOfMonth: 26,
    dayOfWeek: 1,
    description: "nostrud nisi esse in",
    endDate: "2021-11-12T13:28:01.629Z",
    endPoint: "2021-05-24T22:44:00.134Z",
    id: 79259970,
    intervalType: "Month",
    isRetired: false,
    name: "Random Schedule Name (0.5022912048619506)",
    startDate: "2021-08-03T12:03:28.368Z",
    startPoint: "2021-06-17T11:04:39.256Z",
    tasksCount: 6,
    timePeriod: 10,
};

test('renders schedule component', () => {
  render(
    <Provider store={store}>
      <ScheduleItem schedule={scheduleMock} />
    </Provider>);

  expect(screen.getByText('Random Schedule Name (0.5022912048619506)')).toBeInTheDocument();
  expect(screen.getByText('nostrud nisi esse in')).toBeInTheDocument();
});

test('Verifies if button has unretired text and not shown label for retired schedule', () => {
  render(
    <Provider store={store}>
      <ScheduleItem schedule={scheduleMock} />
    </Provider>);

  expect(screen.getByRole('button', { name: 'Unretire' })).toBeInTheDocument();
  expect(screen.getByText('No logs are being shown for this schedule')).toBeInTheDocument();
  
});

test('Verifies if button has retire text for unretired schedule', () => {
  render(
    <Provider store={store}>
      <ScheduleItem schedule={scheduleMockUnretired} />
    </Provider>);

  expect(screen.getByRole('button', { name: 'Retire' })).toBeInTheDocument();  
});
