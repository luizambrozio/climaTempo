import React from "react";

import { render, screen } from "@testing-library/react";

import { Pressure } from "./Pressure";

test("loads and displays Pressure Component", async () => {
  render(<Pressure value={975} />);

  expect(screen.getByTestId("PressureContainer")).toHaveTextContent("975hPa");
});
