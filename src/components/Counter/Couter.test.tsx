import { render, screen } from "@testing-library/react";

import Counter from "./Counter";

it("defaultCount=0, then counter =1", () => {
  render(<Counter defaultCount={0} desc="My Counter" />);
  expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
  expect(screen.getByText(/my counter/i)).toBeInTheDocument();
});
it.todo("defaultCount=0, + clicked then counter = 1", () => {});
it.todo("defaultCount=0, - clicked then counter = -1", () => {});
