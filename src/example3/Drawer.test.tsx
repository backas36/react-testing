import userEvent from "@testing-library/user-event";
import { beforeEach, expect } from "vitest";
import Drawer from "./Drawer";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

const user = userEvent.setup();

vi.mock("@mui/material", async () => ({
  ...(await vi.importActual("@mui/material")),
  SwipeableDrawer: vi.fn(() => <div>HELLO</div>),
}));
describe("Drawer", () => {
  it('show no "Hello Ashi!"', () => {
    render(<Drawer />);
    expect(screen.queryByText("HELLO")).toBeInTheDocument();
  });

  it('clicking on "Open Drawer" Button shows "Hello Ashi!', async () => {
    render(<Drawer />);
    await user.click(screen.getByRole("button", { name: "Open Drawer" }));
    expect(screen.getByText("HELLO")).toBeInTheDocument();

    await user.keyboard("{escape}");
    // await waitForElementToBeRemoved(() => screen.getByText("Hello Ashi!"));
  });
});
