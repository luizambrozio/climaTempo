import axios from "axios";

export const http = axios.create({
  baseURL: "https://openweathermap.org/data/2.5/onecall",
  timeout: 1000,
});
