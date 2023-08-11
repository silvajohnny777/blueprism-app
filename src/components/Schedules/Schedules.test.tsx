import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Schedules from "./index";
import { store } from "../../mock/ReduxMock";

test("renders Schedules component correctly", () => {
  render(
    <Provider store={store}>
      <Schedules />
    </Provider>
  );
  expect(
    screen.getByText("Random Schedule Name (0.16314219073840341)")
  ).toBeInTheDocument();
});
