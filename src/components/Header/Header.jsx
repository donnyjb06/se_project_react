import { useWeatherData } from '../../hooks/useWeatherData';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = ({ openModal }) => {

  const { city }  = useWeatherData();

  return (
    <header className='header'>
      <Nav city={city} openModal={openModal}/>
    </header>
  );
};

export default Header;
