import { useState } from 'react';
import './Nav.css';
import Logo from '../../assets/images/Logo.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../assets/images/hamburger-icon.svg';
import { useUserData } from '../../hooks/useUserData';
import { useModal } from '../../hooks/useModal';

const currentDate = new Date().toLocaleString('default', {
  month: 'long',
  day: 'numeric',
});

const Nav = ({ city }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, userData } = useUserData();
  const { setModal } = useModal();

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className='nav'>
      <div className='nav__column'>
        <Link to='/'>
          <img src={Logo} alt='wtwr logo in black' className='nav__logo' />
        </Link>
        <p className='nav__date-time'>{`${currentDate}, ${city}`}</p>
      </div>
      <div className='nav__column'>
        <ul className={`nav__list ${isOpen ? 'open' : ''}`}>
          <ToggleSwitch
            optionLeft='F'
            optionRight='C'
            className='nav__toggle'
          />
          {isLoggedIn ? (
            <>
              <li className='nav__list-item'>
                <button
                  type='button'
                  onClick={() => setModal('add-item-modal')}
                  className='nav__link'>
                  + Add clothes
                </button>
              </li>
              <li className='nav__list-item nav__list-item_profile'>
                <Link className='nav__link nav__link_profile' to='/profile'>
                  {userData.name}
                  <img
                    src={userData.avatar}
                    alt='profile picture'
                    className='nav__profile-picture'
                  />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='nav__list-item'>
                <button
                  className='nav__button'
                  onClick={() => setModal('register-modal')}>
                  Sign up
                </button>
              </li>
              <li className='nav__list-item'>
                <button
                  className='nav__button'
                  onClick={() => setModal('login-modal')}>
                  Log in
                </button>
              </li>
            </>
          )}
        </ul>
        <button
          className={`nav__hamburger ${isOpen ? 'open' : ''}`}
          type='button'
          onClick={handleClick}>
          <img
            src={hamburgerIcon}
            alt='hamburger button icon'
            className='nav__hamburger-icon'
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
