import React from "react";

import { render, screen } from "@testing-library/react";

import { Header } from "../Header";

test("loads and displays Header Component", async () => {
  useWeather.mockReturnValue(getPrevisao);

  render(<Header />);

  expect(screen.getByTestId("HeaderContainer")).toBeDefined();
});
