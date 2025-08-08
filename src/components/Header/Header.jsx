import { useWeatherData } from '../../hooks/useWeatherData';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = ({ openModal, openLoginModal, openRegisterModal }) => {
  const { city } = useWeatherData();

  return (
    <header className='header'>
      <Nav
        city={city}
        openModal={openModal}
        openLoginModal={openLoginModal}
        openRegisterModal={openRegisterModal}
      />
    </header>
  );
};

export default Header;
