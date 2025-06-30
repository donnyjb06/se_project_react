import { useState, useEffect } from 'react';
import { LOCATION } from '../../utils/constants';
import { fetchWeatherData } from '../../utils/weatherApi';
import { WeatherDataContext } from './WeatherData.context';

const WeatherDataProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({
    city: 'Placeholder City',
    temperatures: { F: 85, C: 30 },
    isDay: false,
    condition: '',
  });

  useEffect(() => {
    const getWeatherData = () => {
      fetchWeatherData(LOCATION)
        .then((res) => {
          const utcDate = new Date(res?.dt * 1000);
          const localTime = new Date(utcDate.getTime() + res?.timezone * 1000);
          const hour = localTime.getHours();

          setWeatherData({
            city: res.name,
            temperatures: {
              F: Math.round(res.main.temp),
              C: Math.round(((res.main.temp - 32) * 5) / 9),
            },
            isDay: hour <= 6 && hour < 18,
            condition: res.weather[0].main,
          });
        })
        .catch((error) => console.error(error));
    };

    getWeatherData();
  }, []);

  return (
    <WeatherDataContext.Provider value={weatherData}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataProvider;
