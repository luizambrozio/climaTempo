import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { Error } from "../Error";
const tryAgainMock = jest.fn();

test("loads and displays Error Component", async () => {
  render(<Error tryAgain={tryAgainMock} />);

  expect(screen.getByTestId("ErrorContainer")).toHaveTextContent(
    "Something went wrong"
  );
  expect(screen.getByText("Try Again")).toBeDefined();

  fireEvent.click(screen.getByText("Try Again"));
  expect(tryAgainMock).toBeCalled();
});
