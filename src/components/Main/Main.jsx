import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

const Main = ({ children }) => {
  return (
    <main className='main'>
      {children}
    </main>
  );
};

export default Main;
