import WeatherCard from '../WeatherCard/WeatherCard';
import './Main.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';
import { getTemperatureRange } from '../../utils/weatherApi';

const Main = ({ temperature, isDay, condition, handleCardClick }) => {
  const tempRange = getTemperatureRange(temperature);
  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === tempRange,
  );

  return (
    <main className='main'>
      <WeatherCard
        temperature={temperature}
        isDay={isDay}
        condition={condition}
      />
      <p className='main__advisory'>
        Today is {temperature}&deg; / You may want to wear:
      </p>
      <ul className='main__clothing'>
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            name={item.name}
            link={item.link}
            condition={item.weather}
            handleCardClick={() => handleCardClick(item)}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;
