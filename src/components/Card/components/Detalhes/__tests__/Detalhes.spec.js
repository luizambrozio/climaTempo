import React from "react";

import { render, screen } from "@testing-library/react";

import { Detalhes } from "../Detalhes";

test("loads and displays Detalhes Component", async () => {
  const detaisMock = {
    humidity: 77,
    pressure: 875,
    dt: 1620131179,
  };

  render(<Detalhes detais={detaisMock} />);

  expect(screen.getByTestId("DetalhesContainer")).toBeDefined();
  expect(screen.getByTestId("HumidityContainer")).toHaveTextContent("77%");
  expect(screen.getByTestId("PressureContainer")).toHaveTextContent("875hPa");
  expect(screen.getByTestId("UpdateAtContainer")).toHaveTextContent(
    "updated at"
  );
});

test("loads and displays Detalhes Component whitout HumidityContainer", async () => {
  const detaisMock = {
    pressure: 875,
    dt: 1620131179,
  };

  render(<Detalhes detais={detaisMock} />);

  expect(screen.getByTestId("DetalhesContainer")).toBeDefined();
  expect(screen.queryByText("HUMIDITY")).toBeNull();
  expect(screen.getByTestId("PressureContainer")).toHaveTextContent("875hPa");
  expect(screen.getByTestId("UpdateAtContainer")).toHaveTextContent(
    "updated at"
  );
});

test("loads and displays Detalhes Component whitout HumidityContainer and PressureContainer", async () => {
  const detaisMock = {
    dt: 1620131179,
  };

  render(<Detalhes detais={detaisMock} />);

  expect(screen.getByTestId("DetalhesContainer")).toBeDefined();
  expect(screen.queryByText("HUMIDITY")).toBeNull();
  expect(screen.queryByText("PRESSURE")).toBeNull();
  expect(screen.getByTestId("UpdateAtContainer")).toHaveTextContent(
    "updated at"
  );
});
