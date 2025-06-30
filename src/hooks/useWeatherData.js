import { useContext } from "react";
import { WeatherDataContext } from "../contexts/WeatherData/WeatherData.context";

export const useWeatherData = () => {
  const context = useContext(WeatherDataContext);

  if (!context) {
    throw new Error("useWeatherData must be used within WeatherDataProvider component");
  }

  return context;
}