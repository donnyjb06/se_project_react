import { useWeatherData } from '../../hooks/useWeatherData';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
  const { city } = useWeatherData();

  return (
    <header className='header'>
      <Nav
        city={city} />
    </header>
  );
};

export default Header;
