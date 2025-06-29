import WeatherCard from '../WeatherCard/WeatherCard';
import './Main.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';
import { getTemperatureRange } from '../../utils/weatherApi';
import { useCurrentTemperatureUnit } from '../../hooks/useCurrentTemperatureUnit';
import { useMemo } from 'react';
import { memo } from 'react';

const Main = ({ temperatures, isDay, condition, handleCardClick }) => {
  const tempRange = getTemperatureRange(temperatures?.F);

  const { currentTemperatureUnit } = useCurrentTemperatureUnit();

  const filteredItems = useMemo(() => {
    return defaultClothingItems.filter((item) => item.weather === tempRange);
  }, [defaultClothingItems, tempRange]);

  return (
    <main className='main'>
      <WeatherCard
        temperatures={temperatures}
        isDay={isDay}
        condition={condition}
      />
      <p className='main__advisory'>
        Today is{' '}
        {currentTemperatureUnit === 'F' ? temperatures?.F : temperatures?.C}
        &deg; / You may want to wear:
      </p>
      <ul className='main__clothing'>
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            name={item.name}
            link={item.link}
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
