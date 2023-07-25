import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Schedules from './index';
import { store } from '../../mock/ReduxMock';

test('renders Schedules component correctly', () => {
  render(
    <Provider store={store}>
      <Schedules />
    </Provider>
  );
  expect(screen.getByText('Random Schedule Name (0.16314219073840341)')).toBeInTheDocument();
});

test('changes input value and should not find the previous element', async () => {
  render(
    <Provider store={store}>
      <Schedules />
    </Provider>
  );
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: '44444' } });

  await waitFor(() => {
    expect(screen.queryByText('Random Schedule Name (0.16314219073840341)')).not.toBeInTheDocument();
  });
});
