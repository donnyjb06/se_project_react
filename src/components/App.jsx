import './App.css';
import Header from './Header/Header';
import { fetchWeatherData } from '../utils/weatherApi';
import { LOCATION } from '../utils/constants';
import { useEffect, useState } from 'react';
import Main from './Main/Main';
import WeatherCard from './WeatherCard/WeatherCard';

function App() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   const setWeatherData = () => {
  //     fetchWeatherData(LOCATION)
  //       .then((res) => {
  //         const utcDate = new Date(res?.dt * 1000);
  //         const localTime = new Date(utcDate.getTime() + res?.timezone * 1000);
  //         const hour = localTime.getHours();

  //         setData({
  //           city: res?.name,
  //           temperature: Math.round(res?.main?.temp),
  //           isDay: hour <= 6 && hour < 18,
  //           condition: res?.weather[0]?.main,
  //         });
  //       })
  //       .catch((error) => console.error(error));
  //   };

  //   setWeatherData();
  // }, []);

  return (
    <>
      <Header city={"Herriman"} />
      <Main>
        
      </Main>
    </>
  );
}

export default App;
