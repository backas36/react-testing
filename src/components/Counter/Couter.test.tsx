import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

const user = userEvent.setup();

describe("Counter", () => {
  describe("initialized with defaultCount=10, desc='My Counter'", () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} desc="My Counter" />);
    });

    it("render 'Current Count: 10'", () => {
      expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
    });

    it("renders title as 'My Counter'", () => {
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });

    describe("when + is clicked", () => {
      it("renders 'Current Counter:11", async () => {
        await user.click(
          screen.getByRole("button", { name: "Increment Counter" }),
        );

        expect(screen.getByText("Current Count: 11")).toBeInTheDocument();
      });
    });

    describe("when - is clicked", () => {
      it("renders 'Current Counter: 9", async () => {
        await user.click(
          screen.getByRole("button", { name: "Decrement Counter" }),
        );

        expect(screen.getByText("Current Count: 9")).toBeInTheDocument();
      });
    });

    describe("when the incrementor changes to 5 and '+' button is clicked", () => {
      it("renders 'Current Count: 15", async () => {
        const input = screen.getByLabelText(/incrementor:/i);
        await user.clear(input);
        await user.type(input, "5");
        await user.click(
          screen.getByRole("button", { name: "Increment Counter" }),
        );
        expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
      });
    });
  });

  describe("initialized with defaultCount=0, desc='My Counter'", () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} desc="My Counter" />);
    });

    it("render 'Current Count: 0'", () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });

    it("renders title as 'My Counter'", () => {
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });

    describe("when + is clicked", () => {
      it("renders 'Current Counter:1", async () => {
        await user.click(
          screen.getByRole("button", { name: "Increment Counter" }),
        );

        expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
      });
    });

    describe("when - is clicked", () => {
      it("renders 'Current Counter: -1", async () => {
        await user.click(
          screen.getByRole("button", { name: "Decrement Counter" }),
        );

        expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
      });
    });
  });
});
