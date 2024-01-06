import { DataGrid } from "@mui/x-data-grid";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import exp from "constants";
import { beforeEach, expect } from "vitest";
import Example2, { columns, rows } from "./Example2";

const user = userEvent.setup();

vi.mock("@mui/x-data-grid", async () => ({
  ...(await vi.importActual("@mui/x-data-grid")),
  DataGrid: vi.fn(() => <div>Table</div>),
}));

const mockDataGrid = vi.mocked(DataGrid);
describe("My Component", () => {
  beforeEach(() => {
    mockDataGrid.mockClear();
  });

  it("render MUI grid with columnDefs and rowData", async () => {
    const myOnMoney = vi.fn();
    render(<Example2 onMoney={myOnMoney} />);
    await user.click(
      screen.getByRole("button", { name: "Give me 33 dollars" }),
    );
    expect(myOnMoney).toHaveBeenCalledTimes(1);
    expect(myOnMoney).toHaveBeenCalledWith(33);
  });

  it("renders table passing the expected props", () => {
    render(<Example2 onMoney={vi.fn()} />);

    expect(mockDataGrid).toHaveBeenCalledTimes(1);
    expect(mockDataGrid).toHaveBeenCalledWith(
      {
        columns: [
          expect.objectContaining({ field: "id" }),
          expect.objectContaining({ field: "firstName" }),
          expect.objectContaining({ field: "lastName" }),
          expect.objectContaining({ field: "age" }),
        ],
        rows: rows,
        autoPageSize: true,
        checkboxSelection: true,
      },
      {},
    );
  });
});
