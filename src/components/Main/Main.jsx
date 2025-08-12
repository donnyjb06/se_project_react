import WeatherCard from '../WeatherCard/WeatherCard';
import './Main.css';
import ItemCard from '../ItemCard/ItemCard';
import { getTemperatureRange } from '../../utils/weatherApi';
import { useCurrentTemperatureUnit } from '../../hooks/useCurrentTemperatureUnit';
import { useMemo } from 'react';
import { memo } from 'react';
import { useWeatherData } from '../../hooks/useWeatherData';
import { useClothingData } from '../../hooks/useClothingData';

const Main = () => {
  const { temperatures } = useWeatherData();
  const tempRange = getTemperatureRange(temperatures.F);

  const { currentTemperatureUnit } = useCurrentTemperatureUnit();

  const { handleCardClick, clothingItems: items } = useClothingData();

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.weather === tempRange);
  }, [items, tempRange]);

  return (
    <main className='main'>
      <WeatherCard />
      <p className='main__advisory'>
        Today is{' '}
        {currentTemperatureUnit === 'F' ? temperatures.F : temperatures.C}
        &deg;{currentTemperatureUnit === 'F' ? 'F' : 'C'} / You may want to
        wear:
      </p>
      <ul className='main__clothing'>
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
          />
        ))}
      </ul>
    </main>
  );
};

export default memo(Main);
