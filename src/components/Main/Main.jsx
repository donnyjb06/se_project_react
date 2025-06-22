import { useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './Main.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';
import { getTemperatureRange } from '../../utils/weatherApi';
import ItemModal from '../ItemModal/ItemModal';

const Main = ({ temperature, isDay, condition }) => {
  const tempRange = getTemperatureRange(temperature);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const filteredItems = defaultClothingItems.filter(
    (item) => item.weather === tempRange,
  );

  const handleCardClick = (link, name, condition) => {
    setSelectedItem({ link, name, condition });
    setOpen(true)
  };

  return (
    <main className='main'>
      {open && (
        <ItemModal
          name={selectedItem.name}
          link={selectedItem.link}
          condition={selectedItem.condition}
          onClose={setOpen}
        />
      )}
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
            handleCardClick={handleCardClick}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;
