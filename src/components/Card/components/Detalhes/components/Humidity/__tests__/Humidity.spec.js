import React from "react";

import { render, screen } from "@testing-library/react";

import { Humidity } from "../Humidity";

test("loads and displays Humidity Component", async () => {
  render(<Humidity value={77} />);

  expect(screen.getByTestId("HumidityContainer")).toHaveTextContent("77%");
});
