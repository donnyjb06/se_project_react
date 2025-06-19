import { API_KEY } from './constants';

const fetchWeatherData = ({ longitude, latitude }) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`,
  ).then((res) => {
    if (res.ok) return res.json();

    return Promise.reject(`Error: ${res.status}`);
  });
};

export { fetchWeatherData };
