import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders Header component correctly", () => {
  render(<Header />);

  const headerText = screen.getByText("Schedules");

  expect(headerText).toBeInTheDocument();
});
