import { API_KEY } from './constants';
import { handleResponse } from './api';

const fetchWeatherData = async ({ longitude, latitude }) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`,
  );

  return handleResponse(res, "An error has occured when attempting to fetch weather data")
};

const getTemperatureRange = (temperature) => {
  if (temperature >= 86) {
    return 'hot';
  } else if (temperature >= 66) {
    return 'warm';
  } else {
    return 'cold';
  }
};

export { fetchWeatherData, getTemperatureRange };
