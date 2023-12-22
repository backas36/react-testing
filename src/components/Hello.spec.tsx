import { render, screen } from "@testing-library/react";

import { expect, it } from "vitest";

import Hello from "./Hello";

it("renders 'Hello'", () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello/);
  expect(myElement).toBeInTheDocument();
});
