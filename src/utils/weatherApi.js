import { API_KEY } from './constants';

const fetchWeatherData = ({ longitude, latitude }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`,
  ).then((res) => {
    if (res.ok) return res.json();

    return Promise.reject(`Error: ${res.status}`);
  });
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
