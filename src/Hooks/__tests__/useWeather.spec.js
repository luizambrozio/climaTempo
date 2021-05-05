import { renderHook, act } from "@testing-library/react-hooks";
// import { http } from "../../Services/http";
import axios from "axios";
jest.mock("axios");

import { useWeather } from "../useWeather";

const config = {
  name: "Salvador",
  estado: "BR",
  lat: -12.9711,
  lon: -38.5108,
};

test("should useWeather", () => {
  axios.get.mockResolvedValueOnce({ data: { test: "123" } });

  const { result } = renderHook(() => useWeather({ config }));

  act(() => {
    result.current.getPrevisao();
  });
});
