import React from "react";

import { render, screen } from "@testing-library/react";

import { Loading } from "../Loading";

test("loads and displays Loading Component", async () => {
  render(<Loading />);

  expect(screen.getByTestId("LoadingContainer")).toBeDefined();
});
