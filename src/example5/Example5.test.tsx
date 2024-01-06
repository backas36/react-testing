import { describe, expect } from "vitest";
import Example5 from "./Example5";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

vi.mock("../veryComplex/deepFloder/deeperFolder/VeryComplex");
describe("Example 5", () => {
  it("renders very complex component", () => {
    render(<Example5 />);
    expect(screen.getByText("SIMPLE VERSION")).toBeInTheDocument();
  });
});
