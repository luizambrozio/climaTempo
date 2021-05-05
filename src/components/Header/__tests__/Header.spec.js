import React from "react";

import { render, screen } from "@testing-library/react";

import { Header } from "../Header";

test("loads and displays Header Component", async () => {
  render(<Header />);

  expect(screen.getByTestId("HeaderContainer")).toBeDefined();
});
