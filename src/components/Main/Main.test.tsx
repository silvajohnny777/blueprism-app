import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Main from "./index";
import { store } from "../../mock/ReduxMock";

test("renders Main component correctly", () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  expect(
    screen.getByText("nostrud eiusmod minim enim voluptate")
  ).toBeInTheDocument();
});

test('Shows search input when "filteredScheduleID" is null', async () => {
  const { container } = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  const searchInput = container.querySelector("input");
  expect(searchInput).not.toBeInTheDocument();
});
