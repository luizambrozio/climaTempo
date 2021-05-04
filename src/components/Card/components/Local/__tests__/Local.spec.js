import React from "react";

import { render, screen } from "@testing-library/react";

import { Local } from "../Local";

test("loads and displays Error Component", async () => {
  render(<Local estado="SC" cidade="Floripa" />);

  expect(screen.getByTestId("LocalContainer")).toHaveTextContent("Floripa, SC");
});
