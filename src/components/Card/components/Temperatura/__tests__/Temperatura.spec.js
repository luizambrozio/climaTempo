import React from "react";

import { render, screen } from "@testing-library/react";

import { Temperatura } from "../Temperatura";

test("loads and displays Temperatura Component", async () => {
  render(<Temperatura temperatura="5" />);

  expect(screen.getByTestId("TemperaturaContainer")).toHaveTextContent("5º");
});

test("loads and displays Temperatura Component <= 5 azul", async () => {
  render(<Temperatura temperatura="5" />);

  expect(screen.getByTestId("TemperaturaTexto")).toHaveStyle("color: #69A3FF");
});

test("loads and displays Temperatura Component temperatura 5.1 deve ser laranja", async () => {
  render(<Temperatura temperatura="5.1" />);

  expect(screen.getByTestId("TemperaturaTexto")).toHaveStyle("color: #FF9623");
});

test("loads and displays Temperatura Component temperatura 25 deve ser laranja", async () => {
  render(<Temperatura temperatura="5.1" />);

  expect(screen.getByTestId("TemperaturaTexto")).toHaveStyle("color: #FF9623");
});

test("loads and displays Temperatura Component temperatura 25.1 deve ser vermelho", async () => {
  render(<Temperatura temperatura="25.1" />);

  expect(screen.getByTestId("TemperaturaTexto")).toHaveStyle("color: #ED1946");
});
