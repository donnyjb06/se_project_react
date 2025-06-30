import WeatherCard from '../WeatherCard/WeatherCard';
import './Main.css';
import ItemCard from '../ItemCard/ItemCard';
import { getTemperatureRange } from '../../utils/weatherApi';
import { useCurrentTemperatureUnit } from '../../hooks/useCurrentTemperatureUnit';
import { useMemo } from 'react';
import { memo } from 'react';
import { useWeatherData } from '../../hooks/useWeatherData';

const Main = ({ handleCardClick, items }) => {
  const { temperatures } = useWeatherData();
  const tempRange = getTemperatureRange(temperatures?.F);

  const { currentTemperatureUnit } = useCurrentTemperatureUnit();

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.weather === tempRange);
  }, [items, tempRange]);

  return (
    <main className='main'>
      <WeatherCard />
      <p className='main__advisory'>
        Today is{' '}
        {currentTemperatureUnit === 'F' ? temperatures.F : temperatures.C}
        &deg; / You may want to wear:
      </p>
      <ul className='main__clothing'>
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            name={item.name}
            link={item.imageUrl}
            condition={item.weather}
            handleCardClick={() =>
              handleCardClick({
                name: item.name,
                link: item.link,
                condition: item.weather,
              })
            }
          />
        ))}
      </ul>
    </main>
  );
};

export default memo(Main);
