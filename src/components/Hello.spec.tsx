import { render, screen } from "@testing-library/react";

import { expect, it } from "vitest";

import Hello from "./Hello";

it.only("renders 'Hello'", () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello/);
  screen.debug();
  expect(myElement).toBeInTheDocument();
});
