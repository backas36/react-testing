import { describe, expect } from "vitest";
import Drawer from "../example3/Drawer";
import Example4 from "./Example4";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

vi.mock("../example3/Drawer");
vi.mocked(Drawer).mockImplementation(() => <div>mocked: drawer</div>);

describe("Example4", () => {
  it("render Drawer", () => {
    render(<Example4 />);
    expect(
      screen.queryByText("Hello Drawer Component!"),
    ).not.toBeInTheDocument();
    expect(screen.getByText("mocked: drawer")).toBeInTheDocument();
  });
});
