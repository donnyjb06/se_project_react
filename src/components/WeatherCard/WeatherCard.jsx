import './WeatherCard.css';
import { useCurrentTemperatureUnit } from '../../hooks/useCurrentTemperatureUnit';
import { useWeatherData } from '../../hooks/useWeatherData';

const WeatherCard = () => {
  const { temperatures, condition, isDay } = useWeatherData();
  const imageUrl = new URL(
    `../../assets/images/cards/${condition.toLowerCase()}_${
      isDay ? 'day' : 'night'
    }.png`,
    import.meta.url,
  );
  const { currentTemperatureUnit } = useCurrentTemperatureUnit();

  return (
    <div className='weather-card'>
      <h1 className='weather-card__temperature'>
        {`${
          currentTemperatureUnit === 'F' ? temperatures.F : temperatures.C
        }${currentTemperatureUnit}`}
        &deg;
      </h1>
      <img
        src={imageUrl}
        alt='weather card background'
        className='weather-card__background'
      />
    </div>
  );
};

export default WeatherCard;
