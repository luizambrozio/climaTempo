import React from "react";

import { render, screen } from "@testing-library/react";

import { App } from "../App";

test("loads and displays App Component", async () => {
  render(<App />);

  expect(screen.getByTestId("HeaderContainer")).toBeDefined();
});
