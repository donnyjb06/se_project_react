import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './Main.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';
import { getTemperatureRange } from '../../utils/weatherApi';

const Main = ({ temperature, isDay, condition }) => {
  const tempRange = getTemperatureRange('hot');
  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === tempRange,
  );

  return (
    <main className='main'>
      <WeatherCard temperature={75} isDay={true} condition={'Clear'} />
      <p className='main__advisory'>
        Today is {75}&deg; / You may want to wear:
      </p>
      <ul className='main__clothing'>
        {filteredItems.map((item) => (
          <ItemCard key={item._id} name={item.name} link={item.link} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
