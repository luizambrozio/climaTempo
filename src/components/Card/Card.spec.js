import React from "react";

import { render, screen, waitFor, act } from "@testing-library/react";

import { Card } from "./Card";
import { useWeather } from "../../Hooks/useWeather";

const value = {
  dt: 1620134839,
  sunrise: 1620097615,
  sunset: 1620156033,
  temp: 7.87,
  feels_like: 4.92,
  pressure: 975,
  humidity: 66,
  dew_point: 1.92,
  uvi: 1.66,
  clouds: 100,
  visibility: 10000,
  wind_speed: 5.02,
  wind_deg: 102,
  wind_gust: 8.08,
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
};

const getPrevisao = {
  getPrevisao: () => {
    return value;
  },
};

jest.mock("../../Hooks/useWeather");

test("loads and displays Card Component", async () => {
  useWeather.mockReturnValue(getPrevisao);

  const config = {
    name: "Salvador",
    estado: "BR",
    lat: -12.9711,
    lon: -38.5108,
  };

  render(<Card config={config} />);
  expect(screen.getByTestId("LoadingContainer")).toBeDefined();

  await waitFor(() => screen.getByTestId("DetalhesContainer"));

  expect(screen.getByTestId("CardContainer")).toBeDefined();
});
