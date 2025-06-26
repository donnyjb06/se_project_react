import { useState } from 'react';
import './Nav.css';
import Logo from '../../assets/images/Logo.svg';
import profilePicture from '../../assets/images/temp-profile-picture.png';
import ToggleSwitch from '../ToggleSwitch/ToggleSwith';
import { useCurrentTemperatureUnit } from '../../hooks/useCurrentTemperatureUnit';
import { Link } from 'react-router-dom';

const currentDate = new Date().toLocaleString('default', {
  month: 'long',
  day: 'numeric',
});

const Nav = ({ city, openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleToggleSwitchChange } = useCurrentTemperatureUnit();

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className='nav'>
      <div className='nav__column'>
        <Link to="/">
          <img src={Logo} alt='wtwr logo in black' className='nav__logo' />
        </Link>
        <p className='nav__date-time'>{`${currentDate}, ${city}`}</p>
      </div>
      <div className='nav__column'>
        <ul className={`nav__list ${isOpen ? 'open' : ''}`}>
          <ToggleSwitch
            onToggle={handleToggleSwitchChange}
            optionLeft='F'
            optionRight='C'
            className='nav__toggle'
          />
          <li className='nav__list-item' onClick={() => openModal(true)}>
            <button type='button' href='#' className='nav__link'>
              + Add clothes
            </button>
          </li>
          <li className='nav__list-item nav__list-item_profile'>
            <Link
              href='#'
              className='nav__link nav__link_profile'
              to='/profile'>
              Terrence Tegegne
              <img
                src={profilePicture}
                alt='profile picture'
                className='nav__profile-picture'
              />
            </Link>
          </li>
        </ul>
        <button
          className={`nav__hamburger ${isOpen ? 'open' : ''}`}
          type='button'
          onClick={handleClick}>
          <span
            className={`nav__hamburger-icon-line ${
              isOpen ? 'open' : ''
            }`}></span>
          <span
            className={`nav__hamburger-icon-line ${
              isOpen ? 'open' : ''
            }`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
