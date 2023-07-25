import { render } from '@testing-library/react';
import ScheduleLogItem from './index';

const mockLog = {
  id: 0,
  serverName: 'Test Server',
  scheduleId: 12345,
  startTime: '2023-07-20T12:00:00Z',
  endTime: '2023-07-22T18:00:00Z',
  status: 'Completed',
};

test('renders complete log component with formated date and days counter', () => {
  const { getByText } = render(<ScheduleLogItem log={mockLog} isRetired={false} />);

  expect(getByText('Test Server')).toBeInTheDocument();
  expect(getByText('12345')).toBeInTheDocument();
  expect(getByText('20/07/2023')).toBeInTheDocument();
  expect(getByText('22/07/2023')).toBeInTheDocument();
  expect(getByText('(3 days)')).toBeInTheDocument();
  expect(getByText('Completed')).toBeInTheDocument();
});

test('shows achieved icon when isRetired is true', () => {
  const { container } = render(<ScheduleLogItem log={mockLog} isRetired={true} />);

  const achievedIcon = container.querySelector('svg');
  expect(achievedIcon).toBeInTheDocument();
});

test('hides achieved icon when isRetired is false', () => {
  const { container } = render(<ScheduleLogItem log={mockLog} isRetired={false} />);

  const achievedIcon = container.querySelector('svg');
  expect(achievedIcon).not.toBeInTheDocument();
});
